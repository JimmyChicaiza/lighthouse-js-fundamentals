

function loopyLighthouse(range, multiple, words) {


  for (var i = range[0]; i <= range[1]; i++) {

  var both = (i % multiple[0] === 0) && (i % multiple[1] === 0);
  var firstMult = (i % multiple[0] === 0);
  var secondMult = (i % multiple[1] === 0);

   if (both) {
     console.log(words[0] + words[1]);
     } else if (firstMult) {
     console.log(words[0]);
   } else if (secondMult) {
     console.log(words[1]);
  } else {
  console.log(i);
   }
}
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);



  /*
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

}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);




function loopyLighthouse(range, multiple, words) {

for (var i = 15; i <= 90; i++) {
  var two = (i % 2 == 0);
  var five = (i % 5 == 0);
  var both = (i % 2 == 0) && (i % 5 == 0);

  if (both) {
     console.log("BattyBeacon");
     } else if (two) {
     console.log("Batty");
   } else if (five) {
     console.log("Beacon");
  } else {
  console.log(i);
   }
}

}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);






function loopyLighthouse(range, multiple, words) {

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

}
*/