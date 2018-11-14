// node selection, convertion to an array
const timeStamps = [...document.querySelectorAll("[data-time]")];

const seconds = timeStamps
  // maping to extract data from data-time
  .map(time => time.dataset.time)
  //   maping to split items in array to minutes and seconds using split() method
  .map(time => {
    //   destructuring array
    const [mins, secs] = time
      .split(":")
      // conversion from strings to numbers
      .map(parseFloat);
    // conversion to seconds/summing values
    const timeSum = mins * 60 + secs;
    return timeSum;
  });
// using reduce() method to summ values
let secondsSum = seconds.reduce((total, seconds) => total + seconds);
console.log(secondsSum);

let hoursLeft = Math.floor(secondsSum / 3600);
console.log(hoursLeft);

let minutesLeft = Math.floor((secondsSum % 3600) / 60);
console.log(minutesLeft);

let secondsLeft = minutesLeft % 60;
console.log(secondsLeft);

console.log(`Time: ${hoursLeft} : ${minutesLeft} : ${secondsLeft}`);
