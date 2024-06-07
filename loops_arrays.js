// let favSong = ["ebenezer", "johnny", "coming - home"];

// console.log(favSong);

// let favSong = ["ebenezer", "johnny", "coming - home"];

// favSong.push("blessings");

// console.log(favSong);

// const favMovie = ["Batman", "See finish", "Rush hour"];

// console.log(favMovie[0]);
// console.log(favMovie[1]);
// console.log(favMovie[2]);

// for (let i = 0; i < favMovie.length; i++) {
//   console.log(favMovie[i]);
// }

// Activity 5

for (let i = 0; i < 6; i++) {
  // Random number generated between 1 and 39
  let randomNumber = Math.floor(Math.random() * 39) + 1;

  // Random number if divisible by 7
  if (randomNumber % 7 === 0) {
    console.log(`${randomNumber} is divisible by 7.`);
  } else {
    console.log(`${randomNumber} is not divisible by 7.`);
  }
}

