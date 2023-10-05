      
      
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