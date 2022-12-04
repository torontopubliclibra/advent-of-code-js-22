// establish input
const input = document.querySelector("body").innerHTML.trim().split('\n');

console.log(input);

// establish outcome score
const outcomeScore = {
  A: { X: 3, Y: 6, Z: 0 },
  B: { X: 0, Y: 3, Z: 6 },
  C: { X: 6, Y: 0, Z: 3 },
};

// esablish shape score
const shapeScore = { X: 1, Y: 2, Z: 3 };

// choose shape to end on
const chooseShape = {
  A: { X: 'Z', Y: 'X', Z: 'Y' },
  B: { X: 'X', Y: 'Y', Z: 'Z' },
  C: { X: 'Y', Y: 'Z', Z: 'X' },
};

// solve score function
solve = (input, part) => {
  
  // establish initial score
  let score = 0;

  let counter = 0;

  // loop through each line
  for (let line of input) {

    // split each line into 2 moves
    let [opponent, player] = line.split(' ');

    // for each of the lines
    if (counter < 2500){

      // in part 2
      if (part === 2){

        // choose shape
        player = chooseShape[opponent][player]

      };

      // calculate and add up the score
      score += outcomeScore[opponent][player] + shapeScore[player];

    }

    // add to counter
    counter++

  }
  
  // log final score
  console.log(score);
}

// run solve score function
solve(input, 1);
solve(input, 2)