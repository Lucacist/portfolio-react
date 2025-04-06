/**
 * Fonction pour importer statiquement toutes les images SVG du dossier
 */
export function importAllSvgs() {
  // Liste des SVG disponibles dans le dossier assets/svg
  const svgFiles = [
    'Adobe_XD.svg',
    'Arduino.svg',
    'C++.svg',
    'C.svg',
    'CSS.svg',
    'Figma.svg',
    'HTML.svg',
    'Inkscape.svg',
    'MySQL.svg',
    'React.svg',
    'Vue.js.svg',
    'bash.svg',
    'blender.svg',
    'github.svg',
    'javascript.svg',
    'nodejs.svg',
    'notion.svg',
    'php.svg',
    'python.svg'
  ];
  
  // Transformer les noms de fichiers en chemins complets pour Vite
  return svgFiles.map(file => `./src/assets/svg/${file}`);
}
