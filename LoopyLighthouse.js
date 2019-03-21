
for (var i = 100; i <= 200; i++) {
  var three = (i % 3 == 0);
  var four = (i % 4 == 0);
  var both = (i % 3 == 0) && (i % 4 == 0);

  if (both) {
     console.log("LoopyLighthouse");
     } else if (three) {
     console.log("Loopy");
   } else if (four) {
     console.log("Lighthouse");
  } else {
  console.log(i);
   }
}
