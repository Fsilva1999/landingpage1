import Jimp from "jimp";

async function run() {
  try {
    const image = await Jimp.read("src/assets/logo-emprestfacil.png");

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // The background in the uploaded image isn't pure white.
      // Often logos have F4F5F7 or similar. Let's make anything very bright transparent.
      // E.g., > 220
      if (red > 220 && green > 220 && blue > 220) {
        // Also apply an alpha gradient for antialiasing
        // The closer to 255, the more transparent
        const avg = (red + green + blue) / 3;
        if (avg >= 240) {
            this.bitmap.data[idx + 3] = 0; // Fully transparent
        } else {
            // Anti-aliasing edge
            const alpha = Math.max(0, 255 - ((avg - 220) * (255 / 20)));
            this.bitmap.data[idx + 3] = Math.min(this.bitmap.data[idx + 3], alpha);
        }
      }
    });

    await image.writeAsync("src/assets/logo-emprestfacil-transparent.png");
    console.log("Image processed successfully.");
  } catch (error) {
    console.error("Error processing image:", error);
  }
}

run();
