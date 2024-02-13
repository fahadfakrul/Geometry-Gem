function calculateRectangleArea() {
  const rectangleWidthInput = document.getElementById("rectangle-width");
  const rectangleWidthText = rectangleWidthInput.value;
  const width = parseFloat(rectangleWidthText);
  console.log(width);

  const rectangleLengthInput = document.getElementById("rectangle-length");
  const rectangleLengthText = rectangleLengthInput.value;
  const length = parseFloat(rectangleLengthText);
  console.log(length);

  // calculate area
  const area = width * length;
  console.log("area of the rectangle is:", area);

  // display area
  const rectangleAreaSpan = document.getElementById("rectangle-area");
  rectangleAreaSpan.innerText = area;

  const resultContainer = document.getElementById("resultContainer");
  resultContainer.style.width = "400px";
  resultContainer.style.fontSize = "16px";
  const rectangleAreaM2 = area / 10000;
  resultContainer.innerHTML = `<p>Rectangle Area: ${rectangleAreaM2.toFixed(
    2
  )} m<sup>2</sup>/ ${area.toFixed(2)} cm<sup>2</sup></p>`;
}
