function scuberGreetingForFeet(rideLength){
  if (rideLength <= 400) {
    return `This one is on me!`;
  } 
  else if (rideLength > 400 && rideLength <= 2000 ) {
    return `That will be twenty bucks.`;
  }
  else if (rideLength > 2000 && rideLength <= 2500) {
    return `I will gladly take your thirty bucks.`;
  }
  else if (rideLength > 2500) {
    return `No can do.`;
  }
}

function ternaryCheckCity(city){
  if (city === `NYC`) {
    return `Ok, sounds good.`;
  } else {
    return `No go.`;
  }
}

function switchOnCharmFromTip(expectedTip){
  if (expectedTip === `generous`) {
    return `Thank you so much.`;
  } else if (expectedTip === `not as generous`) {
    return `Thank you.`;
  } else {
    return `Bye.`;
  }
}