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
  mobileOptimized = false,
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

      // Adjust intensity for mobile devices
      let actualBaseIntensity = baseIntensity;
      let actualHoverIntensity = hoverIntensity;
      
      if (mobileOptimized && window.innerWidth < 768) {
        actualBaseIntensity = Math.min(0.05, baseIntensity);
        actualHoverIntensity = Math.min(0.1, hoverIntensity);
      }

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
        
        totalHeight += lineHeight;
        maxWidth = Math.max(maxWidth, lineWidth);
        
        return {
          text: line,
          width: lineWidth,
          height: lineHeight,
          ascent: actualAscent,
          descent: actualDescent,
        };
      });
      
      // Add some spacing between lines (20% of font size)
      const lineSpacing = numericFontSize * 0.2;
      totalHeight += lineSpacing * (lines.length - 1);
      
      // Set canvas dimensions
      const offscreenWidth = maxWidth;
      const offscreenHeight = totalHeight;
      
      offscreen.width = offscreenWidth;
      offscreen.height = offscreenHeight;
      
      // Draw text on offscreen canvas
      offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;
      offCtx.fillStyle = color;
      offCtx.textBaseline = "alphabetic";
      
      let y = 0;
      lineMetrics.forEach((metrics, i) => {
        const x = textAlign === "center" 
          ? (offscreenWidth - metrics.width) / 2 
          : textAlign === "right" 
            ? offscreenWidth - metrics.width 
            : 0;
        
        y += metrics.ascent;
        offCtx.fillText(metrics.text, x, y);
        y += metrics.descent + (i < lineMetrics.length - 1 ? lineSpacing : 0);
      });
      
      // Set main canvas size
      const fuzzRange = Math.max(10, numericFontSize / 10);
      canvas.width = offscreenWidth + 2 * fuzzRange;
      canvas.height = offscreenHeight + 2 * fuzzRange;
      
      // Set container dimensions to match canvas
      container.style.width = `${canvas.width}px`;
      container.style.height = `${canvas.height}px`;
      
      // Clear context after resize
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set up event listeners for hover effect
      let isHovering = false;

      const render = () => {
        if (isCancelled) return;
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Get current intensity
        let currentIntensity = actualBaseIntensity;
        if (isHovering && enableHover) {
          currentIntensity = actualHoverIntensity;
        }
        
        // Draw text with fuzzy effect
        const fuzzRange = Math.max(10, numericFontSize / 10);
        ctx.save();
        ctx.fillStyle = color;
        
        // Draw the text with a slight offset based on intensity
        ctx.drawImage(
          offscreen,
          Math.floor(currentIntensity * (Math.random() - 0.5) * fuzzRange),
          Math.floor(currentIntensity * (Math.random() - 0.5) * fuzzRange),
          offscreenWidth,
          offscreenHeight,
          fuzzRange,
          fuzzRange,
          offscreenWidth,
          offscreenHeight
        );
        
        ctx.restore();
      };

      const run = () => {
        if (isCancelled) return;
        render();
        animationFrameId = window.requestAnimationFrame(run);
      };

      const handleMouseEnter = () => {
        isHovering = true;
      };

      const handleMouseLeave = () => {
        isHovering = false;
      };

      if (enableHover) {
        canvas.addEventListener("mouseenter", handleMouseEnter);
        canvas.addEventListener("mouseleave", handleMouseLeave);
      }

      // Start animation
      run();

      return () => {
        isCancelled = true;
        if (animationFrameId) {
          window.cancelAnimationFrame(animationFrameId);
        }
        if (enableHover) {
          canvas.removeEventListener("mouseenter", handleMouseEnter);
          canvas.removeEventListener("mouseleave", handleMouseLeave);
        }
      };
    };

    init();

    return () => {
      isCancelled = true;
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
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
    mobileOptimized,
  ]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        maxWidth,
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
        }}
      />
    </div>
  );
};

export default FuzzyText;
