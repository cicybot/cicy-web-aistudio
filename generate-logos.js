import sharp from 'sharp';
import fs from 'fs';

async function generateLogos() {
  const svg = fs.readFileSync('./public/logo.svg');
  
  await sharp(svg)
    .resize(512, 512)
    .png()
    .toFile('./public/logo.png');
    
  await sharp(svg)
    .resize(512, 512)
    .flatten({ background: '#000000' })
    .jpeg()
    .toFile('./public/logo.jpg');
    
  console.log('Logos generated successfully!');
}

generateLogos().catch(console.error);
