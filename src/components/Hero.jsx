import React, { useState } from "react";
import Particles from "./Particles";
import TechScroller from "./TechScroller";

const Hero = () => {
  const [enableHover, setEnableHover] = useState(true);
  const [hoverIntensity, setHoverIntensity] = useState(0.5);

  return (
    <section id="accueil" className="h-full w-full flex items-center p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
      <div className="h-full w-full flex flex-col justify-between">
        {/* Première ligne */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          <div
            className="flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-10 lg:col-span-2 h-full bg-[var(--couleur-container)] rounded-3xl border border-[var(--couleur-border)] relative overflow-hidden"
            style={{ minHeight: "300px" }}
          >
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
              pas en train de concevoir, j'aime le surf et jouer à des jeux
              vidéo !
            </div>
          </div>

          <div
            className="h-full bg-[var(--couleur-container)] rounded-3xl border border-[var(--couleur-border)] relative overflow-hidden"
            style={{ minHeight: "350px" }}
          >
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
            <img
              src={`${import.meta.env.DEV ? '' : '/portfolio-react'}/images/pp.png`}
              alt=""
              className="absolute inset-0 z-10 w-auto h-full m-auto"
            />
            <img
              src={`${import.meta.env.DEV ? '' : '/portfolio-react'}/images/Logo_cesi_2022.png`}
              alt=""
              className="absolute top-5 right-5 z-10 w-20 rounded-xl rotate-[25deg]"
            />
          </div>
        </div>

        <div className="w-full h-full flex items-center justify-center relative z-10 top-0 left-0 p-8 sm:p-12 md:p-16">
          <h1 className="text-[var(--couleur-texte)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide text-glow">
            Bienvenue sur mon portfolio
          </h1>
        </div>

        {/* Deuxième ligne */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a href="/portfolio-react/competences" className="block">
            <div
              className="h-full bg-[var(--couleur-container)] rounded-3xl border border-[var(--couleur-border)] relative overflow-hidden group cursor-pointer"
              style={{ minHeight: "350px" }}
            >
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
                <div className="w-full overflow-hidden m-auto">
                  <TechScroller />
                </div>
                <div className="flex justify-between items-center gap-2 w-full p-4">
                  <div className="z-10 text-[var(--couleur-texte)] text-left text-xl sm:text-2xl md:text-3xl">
                    Compétences
                  </div>
                  <div className="border border-white p-[5px] h-[36px] w-[36px] flex items-center justify-center rounded-[20px] transition-transform duration-300 ease-in-out group-hover:rotate-[-45deg]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="none"
                      viewBox="0 0 22 16"
                    >
                      <path
                        fill="#fff"
                        d="M1 7a1 1 0 0 0 0 2V7Zm20.707 1.707a1 1 0 0 0 0-1.414L15.343.929a1 1 0 1 0-1.414 1.414L19.586 8l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364ZM1 9h20V7H1v2Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href="/portfolio-react/projets" className="block">
            <div
              className="h-full bg-[var(--couleur-container)] rounded-3xl border border-[var(--couleur-border)] relative overflow-hidden group cursor-pointer"
              style={{ minHeight: "350px" }}
            >
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
                <img
                  src={`${import.meta.env.DEV ? '' : '/portfolio-react'}/images/pc-projet.png`}
                  alt=""
                  className="w-2/3 m-auto"
                />
                <div className="flex justify-between items-center gap-2 w-full p-4">
                  <div className="z-10 text-[var(--couleur-texte)] text-left text-lg sm:text-xl md:text-2xl">
                    Projets
                  </div>
                  <div className="border border-white p-[5px] h-[36px] w-[36px] flex items-center justify-center rounded-[20px] transition-transform duration-300 ease-in-out group-hover:rotate-[-45deg]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="none"
                      viewBox="0 0 22 16"
                    >
                      <path
                        fill="#fff"
                        d="M1 7a1 1 0 0 0 0 2V7Zm20.707 1.707a1 1 0 0 0 0-1.414L15.343.929a1 1 0 1 0-1.414 1.414L19.586 8l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364ZM1 9h20V7H1v2Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href="/portfolio-react/contact" className="block">
            <div
              className="h-full bg-[var(--couleur-container)] rounded-3xl border border-[var(--couleur-border)] relative overflow-hidden group cursor-pointer"
              style={{ minHeight: "350px" }}
            >
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-1/2 m-auto"
                  fill="none"
                  viewBox="0 0 18 14"
                >
                  <path
                    fill="#fff"
                    d="M1.616 14c-.46 0-.845-.154-1.153-.462-.308-.308-.462-.693-.463-1.154V1.616C0 1.156.154.771.463.463A1.569 1.569 0 0 1 1.615 0h14.77c.46 0 .844.154 1.152.463.308.309.462.693.463 1.153v10.769c0 .46-.154.844-.463 1.153a1.56 1.56 0 0 1-1.152.462H1.616ZM9 7.116 1 1.885v10.5c0 .18.058.327.173.442a.6.6 0 0 0 .443.173h14.769c.18 0 .327-.058.442-.173a.6.6 0 0 0 .173-.443v-10.5L9 7.116ZM9 6l7.692-5H1.308L9 6ZM1 1.885V1v11.385c0 .18.058.327.173.442a.6.6 0 0 0 .443.173H1V1.885Z"
                  />
                </svg>{" "}
                <div className="flex justify-between items-center gap-2 w-full p-4">
                  <div className="z-10 text-[var(--couleur-texte)] text-left text-lg sm:text-xl md:text-2xl">
                    Contact
                  </div>
                  <div className="border border-white p-[5px] h-[36px] w-[36px] flex items-center justify-center rounded-[20px] transition-transform duration-300 ease-in-out group-hover:rotate-[-45deg]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="none"
                      viewBox="0 0 22 16"
                    >
                      <path
                        fill="#fff"
                        d="M1 7a1 1 0 0 0 0 2V7Zm20.707 1.707a1 1 0 0 0 0-1.414L15.343.929a1 1 0 1 0-1.414 1.414L19.586 8l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364ZM1 9h20V7H1v2Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
