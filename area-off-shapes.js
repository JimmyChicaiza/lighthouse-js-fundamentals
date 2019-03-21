// area off shapes

function calculateRectangleArea(length, width) {

  if ((length * width) > 0) {
    return length * width;
  }
}

function calculateTriangleArea(base, height) {

  if ((base * height) > 0) {
    return base * height / 2;
  }
}

function calculateCircleArea(radius) {

  if (radius > 0) {
    return Math.PI * radius * radius;
  }
}

console.log(calculateRectangleArea(10, 5));
console.log(calculateRectangleArea(1.5, 2.5));
console.log(calculateRectangleArea(10, -5));

console.log(calculateTriangleArea(10, 5));
console.log(calculateTriangleArea(3, 2.5));
console.log(calculateTriangleArea(10, -5));

console.log(calculateCircleArea(10));
console.log(calculateCircleArea(3.5));
console.log(calculateCircleArea(-1));