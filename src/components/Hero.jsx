import React from "react";
import Particles from "./Particles";
import TechScroller from "./TechScroller";

const Hero = () => {
  return (
    <section id="accueil" className="h-screen w-full flex items-center p-20">
      <div className="h-full w-full flex flex-col justify-between">
        {/* Première ligne */}
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col justify-between p-10 col-span-2 h-full bg-[var(--couleur-container)] rounded-3xl border border-[var(--couleur-border)] relative overflow-hidden" style={{ minHeight: "300px" }}>
            <div className="absolute inset-0 z-0 w-full h-full">
              <Particles
                particleColors={["#ffffff", "#ffffff"]}
                particleCount={150}
                particleSpread={10}
                speed={0.08}
                particleBaseSize={80}
                moveParticlesOnHover={true}
                alphaParticles={true}
                disableRotation={false}
              />
            </div>
            <div>
              <div className="z-10 text-[var(--couleur-texte)] text-left text-lg">
                Luca Fourfooz
              </div>
              <div className="z-10 text-[var(--couleur-texte)] text-left text-base">
                Etudiant au CESI
              </div>
            </div>
            <div className="z-10 text-[var(--couleur-texte)] text-left text-4xl">
              Étudiant en prépa ingénieur, spécialité informatique
            </div>
            <div className="z-10 text-[var(--couleur-texte)] text-left text-lg">
              Bonjour, je m'appelle Luca. J'adore explorer de nouvelles
              technologies et créer des solutions innovantes. Lorsque je ne suis
              pas en train de concevoir, j'aime le surf et jouer à des jeux vidéo
              !
            </div>
          </div>

          <div className="h-full bg-[var(--couleur-container)] rounded-3xl border border-[var(--couleur-border)] relative overflow-hidden" style={{ minHeight: "350px" }}>
            <div className="absolute inset-0 z-0 w-full h-full">
              <Particles
                particleColors={["#ffffff", "#ffffff"]}
                particleCount={100}
                particleSpread={8}
                speed={0.1}
                particleBaseSize={60}
                moveParticlesOnHover={true}
                alphaParticles={true}
              />
            </div>
            <img src="src\assets\images\pp.png" alt="" className="absolute inset-0 z-10 w-auto h-full m-auto" />
            <img src="src\assets\images\Logo_cesi_2022.png" alt="" className="absolute top-5 right-5 z-10 w-20 rounded-xl rotate-[25deg]" />
          </div>
        </div>

        {/* Deuxième ligne */}
        <div className="grid grid-cols-3 gap-4 mt-16">
          <div className="h-full bg-[var(--couleur-container)] rounded-3xl border border-[var(--couleur-border)] relative overflow-hidden" style={{ minHeight: "350px" }}>
            <div className="absolute inset-0 z-0 w-full h-full">
              <Particles
                particleColors={["#ffffff", "#ffffff"]}
                particleCount={80}
                particleSpread={7}
                speed={0.09}
                particleBaseSize={70}
                moveParticlesOnHover={true}
                alphaParticles={true}
              />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <div className="w-full overflow-hidden">
                <TechScroller />
              </div>
            </div>
          </div>

          <div className="h-full bg-[var(--couleur-container)] rounded-3xl border border-[var(--couleur-border)] relative overflow-hidden" style={{ minHeight: "350px" }}>
            <div className="absolute inset-0 z-0 w-full h-full">
              <Particles
                particleColors={["#ffffff", "#ffffff"]}
                particleCount={90}
                particleSpread={9}
                speed={0.11}
                particleBaseSize={75}
                moveParticlesOnHover={true}
                alphaParticles={true}
              />
            </div>
            <div className="relative z-10 p-6 text-[var(--couleur-texte)]">
              04
            </div>
          </div>

          <div className="h-full bg-[var(--couleur-container)] rounded-3xl border border-[var(--couleur-border)] relative overflow-hidden" style={{ minHeight: "350px" }}>
            <div className="absolute inset-0 z-0 w-full h-full">
              <Particles
                particleColors={["#ffffff", "#ffffff"]}
                particleCount={110}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={80}
                moveParticlesOnHover={true}
                alphaParticles={true}
              />
            </div>
            <div className="relative z-10 p-6 text-[var(--couleur-texte)]">
              05
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
