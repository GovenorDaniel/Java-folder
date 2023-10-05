      
      
        let identify = document.getElementById("identify")
        let imageContainer = document.getElementById("image-container");
        let image = document.getElementById("image");
        let start = document.getElementById("start");
        let resultElement = document.getElementById("result");
        let list = document.getElementById('list')
        let elephant = document.getElementById('ele')
        let cat = document.getElementById('cat')
        let dog = document.getElementById('dog')
        let car = document.getElementById('car')
        let banana = document.getElementById('banana')


        
      
         
    
        

        function changeImage(){

            image.src = "images/cat.jpg"

             document.getElementById("identify").innerHTML= "Identify the Object Below"


        }




        let objectsToIdentify = ("cat", "dog", "elephant", "banana")
        <img src="images/cat.jpg" alt="Cat" class="image">,
         <img src="images/dog.jpg" alt="Dog" class="image">,
         <img src="images/ele.jpg" alt="Elephant" class="image">,
         <img src="images/banana.jpg" alt="Banana" class="image">,























        async function loadMobileNet() {
            mobilenet = await mobilenet.load();
            loadNextObject();
        }

        async function loadNextObject() {
            if (currentObjectIndex < objectsToIdentify.length) {
                const object = objectsToIdentify[currentObjectIndex];
                resultElement.textContent = "";
                imageElement.src = `images/${object}.jpg`; // Change the path to your image directory
                currentObjectIndex++;
            } else {
                resultElement.textContent = "Game Over!";
                nextButton.disabled = true;
            }
        }

        nextButton.addEventListener("click", () => {
            identifyObject();
        });

        async function identifyObject() {
            if (mobilenet && imageElement.complete) {
                const predictions = await mobilenet.classify(imageElement);
                const topPrediction = predictions[0];
                resultElement.textContent = `I see a "${topPrediction.className}" with ${Math.round(
                    topPrediction.probability * 100
                )}% confidence.`;
            } else {
                resultElement.textContent = "Model or image not loaded.";
            }
        }

        loadMobileNet();



        
// Array of image URLs
const imageUrls = [
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

// Object to map buttons to images
const buttonToImageMap = {
    butterfly: '',
    lizard: '',
    lion: '',
    bear: '',
    fox: '',
    ele: '',
    cat: '',
    dog: '',
    car: '',
    banana: ''
}
    

// Function to generate and assign image randomly
function changeRandomImage() {
    const imageContainer = document.getElementById('imageContainer');
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const imageUrl = imageUrls[randomIndex];

    // Create an image element 
    const imgElement = document.createElement('img');

    // Set the image source and alt text
    imgElement.src = imageUrl;
    imgElement.alt = 'Random Image';

     // Resize the image by setting width and height attributes
     imgElement.width = 450; // Change this value to the desired width
    imgElement.height = 360; // Change this value to the desired height
    

    // Clear the previous image(s) and append the new one
    imageContainer.innerHTML = '';
    imageContainer.appendChild(imgElement);

     // Reset the feedback sentence
     const feedbackSentence = document.getElementById('lists,list');
     feedbackSentence.textContent = 'Click a button to confirm the image.';
 
     return imageUrl;
}


// Function to check if the button matches the assigned image
function checkImage(buttonId, imageUrl) {
    const assignedImageUrl = buttonToImageMap[buttonId];
    const feedbackSentence = document.getElementById('identity');

    if (assignedImageUrl === imageUrl) {
        feedbackSentence.textContent = 'Good';
    } else {
        feedbackSentence.textContent = 'Try again';
    }
}

// Add a click event listener to the button

changeImageButton.addEventListener('click', changeRandomImage);



// Add click event listeners to each button
const changeImageButton = document.getElementById('changeImageButton');
const butterfly = document.getElementById('butterfly');
const lizard = document.getElementById('lizard');
const lion = document.getElementById('lion');
const bear = document.getElementById('bear');
const fox = document.getElementById('fox');
const ele = document.getElementById('ele');
const cat = document.getElementById('cat');
const dog = document.getElementById('dog');
const car = document.getElementById('car');
const banana = document.getElementById('banana');

generateButton.addEventListener('click', () => {
    const imageUrl = assignRandomImage();
    buttonToImageMap.butterfly = 'images/cat.jpg';
    buttonToImageMap.lizard = 'images/elephant.jpg';
    buttonToImageMap.lion = 'images/dog.jpg';
    buttonToImageMap.bear = 'images/butterfly.jpg';
    buttonToImageMap.fox = 'images/fox.jpg';
    buttonToImageMap.ele = 'images/lizard.jpg';
    buttonToImageMap.cat = 'images/lion.jpg';
    buttonToImageMap.dog = 'images/car.jpg';
    buttonToImageMap.car = 'images/bear.jpg';
    buttonToImageMap.banana = 'images/banana.jpg';
});

butterfly.addEventListener('click', () => checkImage('butterfly', assignedImage.src));
lizard.addEventListener('click', () => checkImage('lizard', assignedImage.src));
lion.addEventListener('click', () => checkImage('lion', assignedImage.src));
bear.addEventListener('click', () => checkImage('bear', assignedImage.src));
fox.addEventListener('click', () => checkImage('fox', assignedImage.src));
ele.addEventListener('click', () => checkImage('ele', assignedImage.src));
cat.addEventListener('click', () => checkImage('cat', assignedImage.src));
dog.addEventListener('click', () => checkImage('dog', assignedImage.src));
car.addEventListener('click', () => checkImage('car', assignedImage.src));
banana.addEventListener('click', () => checkImage('banana', assignedImage.src));

// Initially load a random image
changeRandomImage();






let currentImageId; // Store the ID of the currently displayed image

function changeRandomImage() {
    let imageDisplay = document.getElementById('imagedisplay');
    let randomIndex = Math.floor(Math.random() * imageToshow.length);
    let allImages = imageToshow[randomIndex];

    // Extract the ID from the image filename (e.g., 'butterfly.jpg' -> 'butterfly')
    currentImageId = allImages.split('.')[0];

    // Create an image element
    let imgElement = document.createElement('img');

    // Set the image source and alt text
    imgElement.src = allImages;
    imgElement.alt = 'Random Image';

    // Resize the image by setting width and height attributes
    imgElement.width = 450; // Change this value to the desired width
    imgElement.height = 340; // Change this value to the desired height

    // Clear the previous image(s) and append the new one
    imageDisplay.innerHTML = '';
    imageDisplay.appendChild(imgElement);
}

// ...

// Add event listeners to the buttons for object identification
document.getElementById('butterfly').addEventListener('click', () => identifyObject('butterfly'));
document.getElementById('lizard').addEventListener('click', () => identifyObject('lizard'));
document.getElementById('lion').addEventListener('click', () => identifyObject('lion'));
document.getElementById('bear').addEventListener('click', () => identifyObject('bear'));
document.getElementById('fox').addEventListener('click', () => identifyObject('fox'));

// Function to check if the clicked button matches the current image
function identifyObject(clickedObject) {
    if (currentImageId === clickedObject) {
        alert('Excellent! You identified the object correctly.');
    } else {
        alert('Try again. You identified the wrong object.');
    }
}



// Add event listeners to the buttons for object identification
document.getElementById('butterfly').addEventListener('click', () => identifyObject('butterfly'));
document.getElementById('lizard').addEventListener('click', () => identifyObject('lizard'));
document.getElementById('lion').addEventListener('click', () => identifyObject('lion'));
document.getElementById('bear').addEventListener('click', () => identifyObject('bear'));
document.getElementById('fox').addEventListener('click', () => identifyObject('fox'));
document.getElementById('ele').addEventListener('click', () => identifyObject('ele'));
document.getElementById('cat').addEventListener('click', () => identifyObject('cat'));
document.getElementById('dog').addEventListener('click', () => identifyObject('dog'));
document.getElementById('car').addEventListener('click', () => identifyObject('car'));
document.getElementById('banana').addEventListener('click', () => identifyObject('banana'));




















 























