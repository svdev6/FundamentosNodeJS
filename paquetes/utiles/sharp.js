const sharp = require('sharp');

sharp('adidas.png')
    .resize(80)
    .grayscale()
    .toFile('adidas-small-bw.png', (err, info) => {
        console.log(info);
    });