import React from "react";

const Hero = () => {
  return (
    <section
      id="accueil"
      className="h-screen w-full flex items-center p-20"
    >
      <div className='h-full w-full grid grid-cols-3 gap-4'>
        <div className="col-span-2 bg-[var(--couleur-container)] rounded-3xl border border-[var(--couleur-border)]">01</div>
        <div className="bg-[var(--couleur-container)] rounded-3xl border border-[var(--couleur-border)]">02</div>
        <div className="col-span-3 bg-[var(--couleur-container)] rounded-3xl border border-[var(--couleur-border)]">03</div>
        <div className="bg-[var(--couleur-container)] rounded-3xl border border-[var(--couleur-border)]">04</div>
        <div className="bg-[var(--couleur-container)] rounded-3xl border border-[var(--couleur-border)]">05</div>
        <div className="bg-[var(--couleur-container)] rounded-3xl border border-[var(--couleur-border)]">06</div>
      </div>
    </section>
  );
};

export default Hero;
