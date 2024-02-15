
// change color
function changeColor(){
    const bgColor = randomRgbColorGenerate();
    const colorBox = document.getElementById('color-box');
    colorBox.style.backgroundColor = bgColor;

    // show color code
    
}
// generate random rgb color
function randomRgbColorGenerate(elementId){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    const rgbColor = `rgb(${red},${green},${blue})`;
    // show color code
    const colorCode = document.getElementById('show-color-code');
    colorCode.innerText = rgbColor;
    return rgbColor;
}