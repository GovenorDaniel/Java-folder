// Declare the currentImageId variable
let score = 0;
let currentImageId;
let isFirstImage = true; // Variable to track if it's the first image

// Array of image URLs
let imageToshow = [
    'images/cat.jpg', 
    'images/elephant.jpg',
    'images/dog.jpg',
    'images/butterfly.jpg',
    'images/fox.jpg',
    'images/lizard.jpg',
    'images/lion.jpg',
    'images/car.jpg',
    'images/bear.jpg',
    'images/banana.jpg'
];

// Declare allImages outside of the function
let allImages;

// Function to shuffle the imageToshow array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Update the changeRandomImage function
function changeRandomImage() {
    let imageDisplay = document.getElementById('imagedisplay');
    let loadingIndicator = document.getElementById('loading'); // Get the loading indicator element
    let randomIndex;

    // Show the loading indicator while loading
    loadingIndicator.style.display = 'block';

    // Create a new img element
    let imgElement = new Image();

    if (isFirstImage) {
        // Display a blank image for the first time
        imageDisplay.src = 'images/blank.jpg';
        isFirstImage = false;
    } else {
        // Generate a random index for subsequent images
        randomIndex = Math.floor(Math.random() * imageToshow.length);
        imageToshow = shuffleArray(imageToshow); // Reshuffle the imageToshow array
        allImages = imageToshow[randomIndex]; // Assign to allImages variable

        // Extract the ID from the image URL by splitting the URL at the last '/' and removing the file extension
        currentImageId = allImages.split('/').pop().split('.')[0];

        // Set the image source
        imgElement.src = allImages;

        // Resize the image by setting width and height attributes
        imgElement.width = 450; // Change this value to the desired width
        imgElement.height = 340; // Change this value to the desired height

        // Clear the previous image(s) and append the new one
        imageDisplay.innerHTML = '';
        imageDisplay.appendChild(imgElement);

        // After loading, hide the loading indicator
        loadingIndicator.style.display = 'none';
    }
}

      

// Add a click event listener to the "Generate Image" button
let changeImageButton = document.getElementById('changeImageButton');
changeImageButton.addEventListener('click', changeRandomImage);

// Initially load a random image
changeRandomImage();

// Add event listeners to the buttons for object identification
document.getElementById('cat').addEventListener('click', () => identifyObject('cat'));
document.getElementById('ele').addEventListener('click', () => identifyObject('ele'));
document.getElementById('dog').addEventListener('click', () => identifyObject('dog'));
document.getElementById("butterfly").addEventListener('click', () => identifyObject('butterfly'));
document.getElementById('fox').addEventListener('click', () => identifyObject('fox'));
document.getElementById('lizard').addEventListener('click', () => identifyObject('lizard'));
document.getElementById('lion').addEventListener('click', () => identifyObject('lion'));
document.getElementById('car').addEventListener('click', () => identifyObject('car'));
document.getElementById('bear').addEventListener('click', () => identifyObject('bear'));
document.getElementById('banana').addEventListener('click', () => identifyObject('banana'));

// Function to check if the clicked button matches the current image
function identifyObject(clickedObject) {
    console.log('currentImageId:', currentImageId);
    console.log('clickedObject:', clickedObject);

    let display = document.getElementById('display'); // Define the 'display' variable

    if (currentImageId === clickedObject) {
        display.innerText = ('Excellent Work! Keep it Up');
    } else {
        display.innerText = ('Try Again you can do it.');
    }
}

// Restart button click event
let restartButton = document.getElementById('restart');
restartButton.addEventListener('click', function (event) {
    event.preventDefault();
    location.reload();
});

// Initially, hide the loading indicator
document.getElementById('loading').style.display = 'load';



// Update the button creation logic
let buttonsContainer = document.getElementById('buttonsContainer');

imageToshow.forEach((image, index) => {
    let button = document.createElement('button');
    button.textContent = `Button ${index + 1}`;
    button.addEventListener('click', () => identifyObject(image.split('/').pop().split('.')[0])); // Get the object ID from the image URL
    buttonsContainer.appendChild(button);
});

// Initially load a random image
changeRandomImage();



