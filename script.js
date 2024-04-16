//Declare variables to access elements in the index.html file
const numberInput = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const romanNumeralOutput = document.getElementById('output');

//Conversion function
const convertToRoman = input => {
  const romanEquivalences = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  const conversion = [];
  romanEquivalences.forEach(equivalence => {
    while(input >= equivalence[1]) {
      conversion.push(equivalence[0]);
      input -= equivalence[1];
    }
  });
  
  return conversion.join('');

};

//Determine input validity
const checkUserInput = () => {

  if (!numberInput.value) {
    romanNumeralOutput.innerHTML = `Please enter a valid number`;
  } else if (numberInput.value < 1) {
    romanNumeralOutput.innerHTML = `Please enter a number greater than or equal to 1`;
  } else if (numberInput.value >= 4000) {
    romanNumeralOutput.innerHTML = `Please enter a number less than or equal to 3999`;
  } else {
    romanNumeralOutput.innerHTML = convertToRoman(numberInput.value);
  }
};

convertButton.addEventListener("click", checkUserInput);

//Make "Enter" a convertButton shortcut
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});