import React, { useEffect, useRef } from "react";

const FuzzyText = ({
  children,
  fontSize = "clamp(2rem, 10vw, 10rem)",
  fontWeight = 900,
  fontFamily = "inherit",
  color = "#fff",
  enableHover = true,
  baseIntensity = 0.18,
  hoverIntensity = 0.5,
  maxWidth = "90vw",
  textAlign = "center",
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let isCancelled = false;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const init = async () => {
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }
      if (isCancelled) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const computedFontFamily =
        fontFamily === "inherit"
          ? window.getComputedStyle(canvas).fontFamily || "sans-serif"
          : fontFamily;

      const fontSizeStr =
        typeof fontSize === "number" ? `${fontSize}px` : fontSize;
      let numericFontSize;
      if (typeof fontSize === "number") {
        numericFontSize = fontSize;
      } else {
        const temp = document.createElement("span");
        temp.style.fontSize = fontSize;
        document.body.appendChild(temp);
        const computedSize = window.getComputedStyle(temp).fontSize;
        numericFontSize = parseFloat(computedSize);
        document.body.removeChild(temp);
      }

      // Get container width to handle text wrapping
      const containerWidth = container.clientWidth;
      
      // Create temporary canvas for text measurement and wrapping
      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d');
      tempCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;
      
      // Split text into words
      const text = React.Children.toArray(children).join("");
      const words = text.split(' ');
      
      // Calculate wrapped lines
      let lines = [];
      let currentLine = words[0];
      
      for (let i = 1; i < words.length; i++) {
        const word = words[i];
        const width = tempCtx.measureText(currentLine + ' ' + word).width;
        
        if (width < containerWidth) {
          currentLine += ' ' + word;
        } else {
          lines.push(currentLine);
          currentLine = word;
        }
      }
      lines.push(currentLine);
      
      // Create offscreen canvas for the entire text block
      const offscreen = document.createElement("canvas");
      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return;

      // Measure each line to get total height and max width
      let totalHeight = 0;
      let maxWidth = 0;
      const lineMetrics = lines.map(line => {
        offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;
        offCtx.textBaseline = "alphabetic";
        const metrics = offCtx.measureText(line);
        
        const actualLeft = metrics.actualBoundingBoxLeft ?? 0;
        const actualRight = metrics.actualBoundingBoxRight ?? metrics.width;
        const actualAscent = metrics.actualBoundingBoxAscent ?? numericFontSize;
        const actualDescent = metrics.actualBoundingBoxDescent ?? numericFontSize * 0.2;
        
        const lineWidth = Math.ceil(actualLeft + actualRight);
        const lineHeight = Math.ceil(actualAscent + actualDescent);
        
        maxWidth = Math.max(maxWidth, lineWidth);
        totalHeight += lineHeight * 1.2; // Add line spacing
        
        return {
          text: line,
          width: lineWidth,
          height: lineHeight,
          ascent: actualAscent,
          descent: actualDescent,
          left: actualLeft,
          right: actualRight
        };
      });

      const extraWidthBuffer = 10;
      const offscreenWidth = maxWidth + extraWidthBuffer;
      const offscreenHeight = totalHeight;

      offscreen.width = offscreenWidth;
      offscreen.height = offscreenHeight;

      // Render each line to the offscreen canvas
      let yPosition = 0;
      lineMetrics.forEach(metrics => {
        const xOffset = textAlign === 'center' 
          ? (offscreenWidth - metrics.width) / 2 
          : extraWidthBuffer / 2;
          
        yPosition += metrics.ascent;
        
        offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;
        offCtx.textBaseline = "alphabetic";
        offCtx.fillStyle = color;
        offCtx.fillText(metrics.text, xOffset, yPosition);
        
        yPosition += metrics.descent + (metrics.height * 0.2); // Add line spacing
      });

      const horizontalMargin = 50;
      const verticalMargin = 20;
      canvas.width = offscreenWidth + horizontalMargin * 2;
      canvas.height = offscreenHeight + verticalMargin * 2;
      ctx.translate(horizontalMargin, verticalMargin);

      const interactiveLeft = horizontalMargin;
      const interactiveTop = verticalMargin;
      const interactiveRight = interactiveLeft + offscreenWidth;
      const interactiveBottom = interactiveTop + offscreenHeight;

      let isHovering = false;
      const fuzzRange = 30;

      const run = () => {
        if (isCancelled) return;
        ctx.clearRect(
          -fuzzRange,
          -fuzzRange,
          offscreenWidth + 2 * fuzzRange,
          offscreenHeight + 2 * fuzzRange
        );
        const intensity = isHovering ? hoverIntensity : baseIntensity;
        for (let j = 0; j < offscreenHeight; j++) {
          const dx = Math.floor(intensity * (Math.random() - 0.5) * fuzzRange);
          ctx.drawImage(
            offscreen,
            0,
            j,
            offscreenWidth,
            1,
            dx,
            j,
            offscreenWidth,
            1
          );
        }
        animationFrameId = window.requestAnimationFrame(run);
      };

      run();

      const isInsideTextArea = (x, y) => {
        return (
          x >= interactiveLeft &&
          x <= interactiveRight &&
          y >= interactiveTop &&
          y <= interactiveBottom
        );
      };

      const handleMouseMove = (e) => {
        if (!enableHover) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        isHovering = isInsideTextArea(x, y);
      };

      const handleMouseLeave = () => {
        isHovering = false;
      };

      const handleTouchMove = (e) => {
        if (!enableHover) return;
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        isHovering = isInsideTextArea(x, y);
      };

      const handleTouchEnd = () => {
        isHovering = false;
      };

      if (enableHover) {
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", handleMouseLeave);
        canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
        canvas.addEventListener("touchend", handleTouchEnd);
      }

      const cleanup = () => {
        window.cancelAnimationFrame(animationFrameId);
        if (enableHover) {
          canvas.removeEventListener("mousemove", handleMouseMove);
          canvas.removeEventListener("mouseleave", handleMouseLeave);
          canvas.removeEventListener("touchmove", handleTouchMove);
          canvas.removeEventListener("touchend", handleTouchEnd);
        }
      };

      canvas.cleanupFuzzyText = cleanup;
    };

    init();

    return () => {
      isCancelled = true;
      window.cancelAnimationFrame(animationFrameId);
      if (canvas && canvas.cleanupFuzzyText) {
        canvas.cleanupFuzzyText();
      }
    };
  }, [
    children,
    fontSize,
    fontWeight,
    fontFamily,
    color,
    enableHover,
    baseIntensity,
    hoverIntensity,
    textAlign,
  ]);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        maxWidth, 
        width: '100%', 
        textAlign,
        padding: '0 20px'
      }}
    >
      <canvas ref={canvasRef} style={{ maxWidth: '100%', margin: '0 auto' }} />
    </div>
  );
};

export default FuzzyText;
