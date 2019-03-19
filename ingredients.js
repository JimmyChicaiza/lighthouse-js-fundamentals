var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var allContents = 0
// Write a while loop that prints out the contents of ingredients:
while (allContents < 7) {
  console.log(ingredients[allContents]);
  allContents++
}
// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length; i++) {
    console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:


for (var j = ingredients.length - 1; j >= 0; j--) {
  console.log(ingredients[j]);
}
