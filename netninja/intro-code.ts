const character = 'mario';

console.log(character);

//grabs a collection of all input elements
const inputs = document.querySelectorAll('input');

//callback function to cycle through each input (arrow notation)
inputs.forEach(input => {
  console.log(input);
});

