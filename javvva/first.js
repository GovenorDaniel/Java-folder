
// Array of image URLs


// ARRAY OF OBJECTS

let imageToshow = [
	{
		picturePath: 'images/cat.jpg', 
		soundPath: 'resources/cat_sound.mp3',
		
	},
	{
		picturePath: 'images/elephant.jpg',
		soundPath: 'resources/dog_sound.mp3',
		
	},
	{
		picturePath: 'images/dog.jpg',
		soundPath: 'resources/elephant_sound.mp3',
		
	},
	{
		picturePath: 'images/lion.jpg',
		soundPath: 'resources/lion_sound.mp3',
		
	},
];

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
        


