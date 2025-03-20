// I'm re-exporting the Banner component from this folder
// This allows me to import it cleanly from the parent "components" folder 
// without needing to reference the full path like "./Banner/Banner"
// The index.jsx becomes the single entry point to the whole folder.

export { default } from './Banner';