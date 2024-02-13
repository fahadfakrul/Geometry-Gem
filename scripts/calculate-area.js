// calculate by using function
function calculateParalellogramArea(){
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');
    const area = base * height;
    setInnerTextById('parallelogram-area', area);
}


function calculateRhombusArea(){
    const d1 = getInputValueById('rhombus-first-diagonal');
    const d2 = getInputValueById('rhombus-second-diagonal');
    const area = 0.5 * d1 * d2;
    setInnerTextById('rhombus-area', area);
}

function calculatePentagonArea(){
    const perimeter = getInputValueById('pentagon-perimeter');
    const apothem = getInputValueById('pentagon-apothem');
    const area = 0.5 * perimeter * apothem;
    setInnerTextById('pentagon-area', area);
}

function calculateEllipseArea(){
    const major = getInputValueById('ellipse-major-axis');
    const minor = getInputValueById('ellipse-minor-axis');
    const area = Math.PI * major * minor;
    setInnerTextById('ellipse-area',area.toFixed(2));
}

// get value function
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);

    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText=area;
}