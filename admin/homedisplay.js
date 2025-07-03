// This function will list all images in the folder and display them on the page
function showFirebaseImages() {
  const storageRef = firebase.storage().ref('carousel-images'); // folder name
  const imageGrid = document.getElementById('imageGrid'); // div to show images

  imageGrid.innerHTML = "Loading images...";
  storageRef.listAll()
    .then((res) => {
      imageGrid.innerHTML = ""; // clear loading text
      if (res.items.length === 0) {
        imageGrid.innerHTML = "No images found.";
      }
      res.items.forEach((itemRef) => {
        // Get the download URL for each file
        itemRef.getDownloadURL().then((url) => {
          const img = document.createElement('img');
          img.src = url;
          img.alt = itemRef.name;
          img.style.width = "220px"; // or as you wish
          img.style.margin = "10px";
          imageGrid.appendChild(img);
        });
      });
    })
    .catch((error) => {
      imageGrid.innerHTML = "Error loading images: " + error.message;
    });
}

// Run the function after the page loads
window.addEventListener('DOMContentLoaded', showFirebaseImages);