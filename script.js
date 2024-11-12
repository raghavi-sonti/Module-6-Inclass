// Get elements
const colorButton = document.getElementById('colorButton');
const submitButton = document.getElementById('submitButton');
const textInput = document.getElementById('textInput');
const lastModified = document.getElementById('lastModified');

// Roll-over effect on images
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

// Event listener for the color button
colorButton.addEventListener('click', function() {
    this.style.backgroundColor = getRandomColor();
});

// Event listener for the submit button (input field)
submitButton.addEventListener('click', function() {
    const inputText = textInput.value;
    
    // Check if the input field is empty
    if (inputText === '') {
        alert('Please enter some text!');
    } else {
        alert('You entered: ' + inputText);
    }
});

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Update last modified date in footer
lastModified.textContent = "Last modified: " + document.lastModified;
