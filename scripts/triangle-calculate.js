function calculateTriangleArea() {
  // get base
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  console.log(base);

  // get height
  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);
  console.log(height);

  // calculate area
  const area = 0.5 * base * height;
  console.log("area of the triangle is:", area);

  // display area
  const triangleAreaSpan = document.getElementById("triangle-area");
  triangleAreaSpan.innerText = area;

  const resultContainer = document.getElementById("resultContainer");
  resultContainer.style.width = "400px";
  resultContainer.style.fontSize = "16px";
  const triangleAreaM2 = area / 10000;
  resultContainer.innerHTML = `<p>Triangle Area: ${triangleAreaM2.toFixed(
    2
  )} m<sup>2</sup>/ ${area.toFixed(2)} cm<sup>2</sup></p>`;
}
