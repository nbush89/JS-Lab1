let name = "Nicole Bush";
let age = 30;
let birthday = "June 23";
let detroitGC = true;
let lifeEvents = [
  "I was born in Zurich, Switzerland",
  "I went to EMU",
  "I lived in Bangkok for 2 years",
  "I have a degree in Psychology"
];
if (detroitGC) {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan.`
  );
} else {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Grand 
    Rapids, Michigan. I am currently ${age} years old and my 
    birthday is on ${birthday}.`
  );
}
for (i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}
let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
  } else {
    counter++;
    console.log(
      `5 === 5 it took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}
