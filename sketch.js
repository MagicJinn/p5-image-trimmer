// "Config"
var inputNumber = 96 // The amount of images you will process
var trimAmount = 10 // Amount of pixels you want trimmed from EACH SIDE
var sourceDestination = "input/borders" // Input folder, must be subdirectory

// Don't touch
var fileList = []
var images = []

function preload() {
  // Load the list of files from the folder
  for (let i = 0; i < inputNumber; i++) { //
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
  let currentImage = frameCount - 1 // Starts at 0, increases every frame
  if (currentImage < images.length) { // Processes your images
    createCanvas(images[currentImage].width - trimAmount * 2, images[currentImage].height - trimAmount * 2); // Sets canvas to the image's size - the trim amount x2
    image(images[currentImage], -trimAmount, -trimAmount);
    saveCanvas('images/borderless/borderless' + [currentImage + 1], 'jpg'); // Saves your image as a .jpg
  }
}