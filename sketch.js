let sourceDestination = "input/borders"
let fileList = []
var images = []

function preload() {
  // Load the list of files from the folder
  for (let i = 0; i < 96; i++) {
    fileList[i] = `image${i+1}.png`
  }

  // Iterate through the list of files
  for (let i = 0; i < fileList.length; i++) {
    // Check if the file is an image
    if (fileList[i].endsWith(".png")) {
      // Load the image
      images[i] = loadImage(`${sourceDestination}/${fileList[i]}`);
    }
  }
}

function draw() {
  let currentImage = frameCount - 1
  if (currentImage < images.length) {
    createCanvas(images[currentImage].width - 20, images[currentImage].height - 20);
    image(images[currentImage], -10, -10);
    saveCanvas('images/borderless/borderless' + [currentImage + 1], 'jpg');
  }
}