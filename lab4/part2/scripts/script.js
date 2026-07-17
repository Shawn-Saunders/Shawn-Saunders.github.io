/*
    Name: Shawn Saunders
    Date: 7/17/2026
    File: script.js
    Javascript for the Interactive gallery of images 
*/
const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// create image objects
const images = [
    {
        filename: "eye.jpg",
        alt: "Closeup of a human eye"
    },{
        filename: "rock.jpg",
        alt: "Rock that looks like a wave"
    },{
        filename: "flower.jpg",
        alt: "Purple and white pansies"
    },{
        filename: "egypt.jpg",
        alt: "Section of wall from a pharaoh's tomb"
    },{
        filename: "moth.jpg",
        alt: "Large moth on a leaf"
    }
]

// create baseURL
const baseURL = "./images/";

// create each image and display them

for (const image of images) {
    // create img element
    const newImage = document.createElement("img");

    // conat the src path for the object
    newImage.src = `${baseURL}${image.filename}`;

    // give each object the alt text
    newImage.alt = image.alt;

    // let the element be accessed with "tab"
    newImage.tabIndex = "0";

    // append the image to thumbBar
    thumbBar.appendChild(newImage);

    // click listener
    newImage.addEventListener("click", updateDisplayedImage)
}

// display the pictures when clicked
function updateDisplayedImage(image){
    displayedImage.src = image.target.src;
    displayedImage.alt = image.target.src;
}

btn.addEventListener("click", function() {
    // get the class name of the button
    const currentClass = btn.getAttribute('class');

    // check if the button is dark, if not assume it's light
    if (currentClass === "dark"){
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0.5)';
        btn.classList.toggle("dark");
    } else {
        btn.textContent = "Darken";
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0)';
        btn.classList.toggle("dark");
    }
});
