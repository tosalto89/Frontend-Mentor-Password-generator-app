/*Initializing my bindings*/
let myChecks = document.querySelectorAll('.myCheck');
let pwdResult = document.getElementById('password__result');
let pwdStrength = document.querySelector('.strengthLevel');
let pwdBars = document.querySelectorAll('.output__graph');
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let btn = document.getElementById("btn");
let passwordArray = [];
let newPassword = passwordArray.join("");


/*prevent the form from redirecting*/
document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
})

/*Generate random password*/
/*setting my Arrays*/
const lowerLetters = [...'abcdefghijklmnopqrstuvwxyz'];
const upperLetters = [];
const numberList = [];
const symbolsList = [...'!@#$%^&*()_+-=[]{};\':"\\|,.<>/?~'];

for (let i = 0; i <= 9; i++) {
    numberList.push(i);
}

lowerLetters.forEach(element =>
    upperLetters.push(element.toUpperCase())
)

if (document.getElementById('result').innerHTML === '') {
    document.getElementById('result').innerHTML = '0';
} else {
    document.getElementById('result').innerHTML = document.getElementById('result').innerHTML;
}
/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('length').innerHTML = charLength;
    return charLength;
}

let charLengthNum = parseInt(charLength());

document.getElementById('length').addEventListener('change', function() {
    charLengthNum = document.getElementById('length').value;
    document.getElementById('length').innerHTML = charLength;
    charLengthNum = parseInt(charLengthNum);
    return charLength;
});




/*Toggling all checboxes*/

let lowercaseValue;
btn.disabled = true;

lowercase.addEventListener('change', function() {
    if (this.checked === true) {
        btn.disabled = false;
        return lowercaseValue = true;
    } else {
        btn.disabled = true;
        passwordArray = [];
        return lowercaseValue = false;
    }

})


let uppercaseValue;

uppercase.addEventListener('change', function() {

    if (this.checked === true) {
        btn.disabled = false;
        return uppercaseValue = true;
    } else {
        btn.disabled = true;
        passwordArray = [];
        return uppercaseValue = false;
    }
});

let numbersValue;

numbers.addEventListener('change', function() {

    if (this.checked === true) {
        btn.disabled = false;
        return numbersValue = true;
    } else {
        btn.disabled = true;
        passwordArray = [];
        return numbersValue = false;
    }
});


let symbolsValue;

symbols.addEventListener('change', function() {

    if (this.checked === true) {
        btn.disabled = false;
        return symbolsValue = true;
    } else {
        btn.disabled = true;
        passwordArray = [];
        return symbolsValue = false;
    }
});

/*Creating the Password*/

btn.addEventListener('click', function() {

    for (let i = 0; i < charLengthNum; i++) {

        /*extract the checkboxes values*/
        uppercaseValue = document.getElementById('uppercase').checked;
        lowercaseValue = document.getElementById('lowercase').checked;
        numbersValue = document.getElementById('numbers').checked;
        symbolsValue = document.getElementById('symbols').checked;

        /*initializing the indexes*/

        let typeOfCharIndice;
        let randomLetterIndiceLower;
        let randomLetterIndiceUpper;
        let randomLetterIndiceNumbers;
        let randomLetterIndiceSymbols;
        let randomLetter;


        /*programming individual checks*/
        if ((lowercaseValue === true) && (uppercaseValue === false) && (numbersValue === false) && (symbolsValue === false)) {
            randomLetterIndiceLower = Math.floor(Math.random() * lowerLetters.length);
            typeOfCharIndice = 2;
            randomLetter = lowerLetters[randomLetterIndiceLower];
            passwordArray.push(randomLetter);
        } else if ((uppercaseValue === true) && (lowercaseValue === false) && (numbersValue === false) && (symbolsValue === false)) {
            randomLetterIndiceUpper = Math.floor(Math.random() * upperLetters.length);
            typeOfCharIndice = 1;
            randomLetter = upperLetters[randomLetterIndiceUpper];
            passwordArray.push(randomLetter);
        } else if ((uppercaseValue === false) && (lowercaseValue === false) && (numbersValue === true) && (symbolsValue === false)) {
            randomLetterIndiceNumbers = Math.floor(Math.random() * numberList.length);
            typeOfCharIndice = 3;
            randomLetter = numberList[randomLetterIndiceNumbers];
            passwordArray.push(randomLetter);

        } else if ((uppercaseValue === false) && (lowercaseValue === false) && (numbersValue === false) && (symbolsValue === true)) {
            randomLetterIndiceSymbols = Math.floor(Math.random() * symbolsList.length);
            typeOfCharIndice = 4;
            randomLetter = symbolsList[randomLetterIndiceSymbols];
            passwordArray.push(randomLetter);

            /*programming two checks at the time*/

        } else if ((lowercaseValue === true) && (uppercaseValue === true) && (numbersValue === false) && (symbolsValue === false)) {
            typeOfCharIndice = Math.floor(Math.random() * (2 - 1 + 1) + 1);
            randomLetterIndiceLower = Math.floor(Math.random() * lowerLetters.length);
            randomLetterIndiceUpper = Math.floor(Math.random() * upperLetters.length);
            switch (typeOfCharIndice) {
                case 1:
                    randomLetter = upperLetters[randomLetterIndiceUpper];
                    passwordArray.push(randomLetter);
                    break;
                case 2:
                    randomLetter = lowerLetters[randomLetterIndiceLower];
                    passwordArray.push(randomLetter);
                    break;

                default:
                    break;
            }


        } else if ((lowercaseValue === false) && (uppercaseValue === false) && (numbersValue === true) && (symbolsValue === true)) {
            typeOfCharIndice = Math.floor(Math.random() * (2 - 1 + 1) + 1);
            randomLetterIndiceNumbers = Math.floor(Math.random() * numberList.length);
            randomLetterIndiceSymbols = Math.floor(Math.random() * symbolsList.length);

            switch (typeOfCharIndice) {
                case 1:
                    randomLetter = numberList[randomLetterIndiceNumbers];
                    passwordArray.push(randomLetter);
                    break;
                case 2:
                    randomLetter = symbolsList[randomLetterIndiceSymbols];
                    passwordArray.push(randomLetter);
                    break;

                default:
                    break;
            }

        } else if ((lowercaseValue === true) && (uppercaseValue === false) && (numbersValue === false) && (symbolsValue === true)) {
            typeOfCharIndice = Math.floor(Math.random() * (2 - 1 + 1) + 1);
            randomLetterIndiceLower = Math.floor(Math.random() * lowerLetters.length);
            randomLetterIndiceSymbols = Math.floor(Math.random() * symbolsList.length);

            switch (typeOfCharIndice) {
                case 1:
                    randomLetter = lowerLetters[randomLetterIndiceLower];
                    passwordArray.push(randomLetter);
                    break;
                case 2:
                    randomLetter = symbolsList[randomLetterIndiceSymbols];
                    passwordArray.push(randomLetter);
                    break;

                default:
                    break;
            }


        } else if ((lowercaseValue === true) && (uppercaseValue === false) && (numbersValue === true) && (symbolsValue === false)) {
            typeOfCharIndice = Math.floor(Math.random() * (2 - 1 + 1) + 1);
            randomLetterIndiceLower = Math.floor(Math.random() * lowerLetters.length);
            randomLetterIndiceNumbers = Math.floor(Math.random() * numberList.length);

            switch (typeOfCharIndice) {
                case 1:
                    randomLetter = lowerLetters[randomLetterIndiceLower];
                    passwordArray.push(randomLetter);
                    break;
                case 2:
                    randomLetter = numberList[randomLetterIndiceNumbers];
                    passwordArray.push(randomLetter);
                    break;

                default:
                    break;
            }


        } else if ((lowercaseValue === false) && (uppercaseValue === true) && (numbersValue === true) && (symbolsValue === false)) {

            typeOfCharIndice = Math.floor(Math.random() * (2 - 1 + 1) + 1);
            randomLetterIndiceUpper = Math.floor(Math.random() * upperLetters.length);
            randomLetterIndiceNumbers = Math.floor(Math.random() * numberList.length);

            switch (typeOfCharIndice) {
                case 1:
                    randomLetter = upperLetters[randomLetterIndiceUpper];
                    passwordArray.push(randomLetter);
                    break;
                case 2:
                    randomLetter = numberList[randomLetterIndiceNumbers];
                    passwordArray.push(randomLetter);
                    break;

                default:
                    break;
            }
        } else if ((lowercaseValue === false) && (uppercaseValue === true) && (numbersValue === false) && (symbolsValue === true)) {

            typeOfCharIndice = Math.floor(Math.random() * (2 - 1 + 1) + 1);
            randomLetterIndiceUpper = Math.floor(Math.random() * upperLetters.length);
            randomLetterIndiceSymbols = Math.floor(Math.random() * symbolsList.length);

            switch (typeOfCharIndice) {
                case 1:
                    randomLetter = upperLetters[randomLetterIndiceUpper];
                    passwordArray.push(randomLetter);
                    break;
                case 2:
                    randomLetter = symbolsList[randomLetterIndiceSymbols];
                    passwordArray.push(randomLetter);
                    break;

                default:
                    break;
            }

            /*programming three checks at the time*/

        } else if (((lowercaseValue === true) && (uppercaseValue === true) && (numbersValue === true) && (symbolsValue === false))) {
            typeOfCharIndice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
            randomLetterIndiceLower = Math.floor(Math.random() * lowerLetters.length);
            randomLetterIndiceUpper = Math.floor(Math.random() * upperLetters.length);
            randomLetterIndiceNumbers = Math.floor(Math.random() * numberList.length);

            switch (typeOfCharIndice) {
                case 1:
                    randomLetter = upperLetters[randomLetterIndiceUpper];
                    passwordArray.push(randomLetter);
                    break;
                case 2:
                    randomLetter = lowerLetters[randomLetterIndiceLower];
                    passwordArray.push(randomLetter);
                    break;
                case 3:
                    randomLetter = numberList[randomLetterIndiceNumbers];
                    passwordArray.push(randomLetter);
                    break;

                default:
                    break;
            }

        } else if (((lowercaseValue === false) && (uppercaseValue === true) && (numbersValue === true) && (symbolsValue === true))) {
            typeOfCharIndice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
            randomLetterIndiceSymbols = Math.floor(Math.random() * symbolsList.length);
            randomLetterIndiceUpper = Math.floor(Math.random() * upperLetters.length);
            randomLetterIndiceNumbers = Math.floor(Math.random() * numberList.length);

            switch (typeOfCharIndice) {
                case 1:
                    randomLetter = upperLetters[randomLetterIndiceUpper];
                    passwordArray.push(randomLetter);
                    break;
                case 2:
                    randomLetter = symbolsList[randomLetterIndiceSymbols];
                    passwordArray.push(randomLetter);
                    break;
                case 3:
                    randomLetter = numberList[randomLetterIndiceNumbers];
                    passwordArray.push(randomLetter);
                    break;

                default:
                    break;
            }

        } else if (((lowercaseValue === true) && (uppercaseValue === false) && (numbersValue === true) && (symbolsValue === true))) {
            typeOfCharIndice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
            randomLetterIndiceLower = Math.floor(Math.random() * lowerLetters.length);
            randomLetterIndiceSymbols = Math.floor(Math.random() * symbolsList.length);
            randomLetterIndiceNumbers = Math.floor(Math.random() * numberList.length);

            switch (typeOfCharIndice) {
                case 1:
                    randomLetter = lowerLetters[randomLetterIndiceLower];
                    passwordArray.push(randomLetter);
                    break;
                case 2:
                    randomLetter = symbolsList[randomLetterIndiceSymbols];
                    passwordArray.push(randomLetter);
                    break;
                case 3:
                    randomLetter = numberList[randomLetterIndiceNumbers];
                    passwordArray.push(randomLetter);
                    break;

                default:
                    break;
            }


        } else if (((lowercaseValue === true) && (uppercaseValue === true) && (numbersValue === true) && (symbolsValue === false))) {
            typeOfCharIndice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
            randomLetterIndiceLower = Math.floor(Math.random() * lowerLetters.length);
            randomLetterIndiceUpper = Math.floor(Math.random() * upperLetters.length);
            randomLetterIndiceNumbers = Math.floor(Math.random() * numberList.length);

            switch (typeOfCharIndice) {
                case 1:
                    randomLetter = upperLetters[randomLetterIndiceUpper];
                    passwordArray.push(randomLetter);
                    break;
                case 2:
                    randomLetter = lowerLetters[randomLetterIndiceLower];
                    passwordArray.push(randomLetter);
                    break;
                case 3:
                    randomLetter = numberList[randomLetterIndiceNumbers];
                    passwordArray.push(randomLetter);
                    break;

                default:
                    break;
            }
        } else if (((lowercaseValue === true) && (uppercaseValue === true) && (numbersValue === false) && (symbolsValue === true))) {
            typeOfCharIndice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
            randomLetterIndiceLower = Math.floor(Math.random() * lowerLetters.length);
            randomLetterIndiceUpper = Math.floor(Math.random() * upperLetters.length);
            randomLetterIndiceNumbers = Math.floor(Math.random() * symbolsList.length);

            switch (typeOfCharIndice) {
                case 1:
                    randomLetter = upperLetters[randomLetterIndiceUpper];
                    passwordArray.push(randomLetter);
                    break;
                case 2:
                    randomLetter = lowerLetters[randomLetterIndiceLower];
                    passwordArray.push(randomLetter);
                    break;
                case 3:
                    randomLetter = symbolsList[randomLetterIndiceNumbers];
                    passwordArray.push(randomLetter);
                    break;

                default:
                    break;
            }


            /*all checks are programmed*/
        } else {
            typeOfCharIndice = Math.floor(Math.random() * (4 - 1 + 1) + 1);
            randomLetterIndiceLower = Math.floor(Math.random() * lowerLetters.length);
            randomLetterIndiceUpper = Math.floor(Math.random() * upperLetters.length);
            randomLetterIndiceSymbols = Math.floor(Math.random() * symbolsList.length);
            randomLetterIndiceNumbers = Math.floor(Math.random() * numberList.length);


            switch (typeOfCharIndice) {
                case 1:
                    randomLetter = upperLetters[randomLetterIndiceUpper];
                    passwordArray.push(randomLetter);
                    break;
                case 2:
                    randomLetter = lowerLetters[randomLetterIndiceLower];
                    passwordArray.push(randomLetter);
                    break;
                case 3:
                    randomLetter = numberList[randomLetterIndiceNumbers];
                    passwordArray.push(randomLetter);
                    break;
                case 4:
                    randomLetter = symbolsList[randomLetterIndiceSymbols];
                    passwordArray.push(randomLetter);
                    break;

                default:
                    break;
            }
        }

        /*creating the password*/

        newPassword = passwordArray.join("");

        // console.log(lowercaseValue);
        // console.log(uppercaseValue);
        // console.log(numbersValue);
        // console.log(symbolsValue);
        // console.log(passwordArray);
        // console.log(typeOfCharIndice);
    }
    /*resetting the password after each click*/
    passwordArray = [];
    // console.log(newPassword);
    // console.log(passwordArray);
    document.getElementById('password__result').value = newPassword;

})

/*copy to the clipboard*/
let clipboardCopy= document.getElementById('copyIcon');

 // Select the text field
 document.getElementById('password__result').select();
 document.getElementById('password__result').setSelectionRange(0, 99999); // For mobile devices

const copyContent = async () => {
    try {
        let copyPassword= document.getElementById('password__result').value;
      await navigator.clipboard.writeText(copyPassword);
      document.querySelector('.copied').setAttribute('style','visibility: visible')
      setTimeout(() => {
        document.querySelector('.copied').setAttribute('style','visibility: hidden')
      }, 3000);
    //   console.log('Content copied to clipboard');
    } catch (err) {
    //   console.error('Failed to copy: ', err);
    }
  }

const copy= async () =>{
    try {

        await  document.getElementById('password__result').select();
        document.execCommand('copyIcon');
        // console.log('Content copied to clipboard');

    } catch(err){
        // console.log('Failed to copy:', err);
    }
}



clipboardCopy.addEventListener('click', copyContent);


/*Determining the strength level*/


/*setting my requirements*/
let NumOfChar= document.getElementById('password__result').value.length;
let includeUpper=  () => {

    let  regex = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/g;
    
    let found= newPassword.match(regex);
    // console.log(found);
    if(found){
        return true;
    }
     return false;
}
let includeLower=  () => {

    let  regex = /[abcdefghijklmnopqrstuvwxyz]/g;
    
    let found= newPassword.match(regex);
    // console.log(found);
    if(found){
        return true;
    }
     return false;
 }
const  includeSymbols= () => {

    let  regex = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g;
    
    let found= newPassword.match(regex);
    // console.log(found);
    if(found){
        return true;
    }
     return false;
 }

 const  includeNumbers= () => {

    let  regex = /[0-9]/g;
    
    let found= newPassword.match(regex);
    // console.log(found);
    if(found){
        return true;
    }
     return false;
 }

let strengthScore= []
/*bundle everything in a function*/
const countNumberOfParam= () => {
    let result= 0;
    let myUpper= includeUpper();
    let myLower= includeLower();
    let mySymbols= includeSymbols();
    let myNumbers= includeNumbers();
   
    if (myUpper === true){
        result+=1;
    }
    if(myLower === true){
        result+=1;
    }

    if(mySymbols === true){
        result+=1;
    }

    if(myNumbers === true){
        result+=1;
    }
    if (document.getElementById('password__result').value.length > 12){
        result+=1;
    }

    if(document.getElementById('password__result').value.length <= 6){
        result-= 1;
        // console.log(true) ;
        // console.log(document.getElementById('password__result').value.length);
        
    }

    let elements = document.getElementsByTagName('svg');

   
    strengthScore.push(result);

    /*Displaying strenght levels*/
    if(strengthScore[strengthScore.length-1] <= 1){
        document.querySelector('.strengthLevel').innerHTML= "Too Weak!";
        elements[0].style.backgroundColor = '#F54949';
        elements[0].style.borderColor = '#F54949';
        elements[1].style.backgroundColor = 'inherit';
        elements[1].style.borderColor = 'inherit';
        elements[2].style.backgroundColor = 'inherit';
        elements[2].style.borderColor = 'inherit';
        elements[3].style.backgroundColor = 'inherit';
        elements[3].style.borderColor = 'inherit';
    
    }else if(strengthScore[strengthScore.length-1] == 2){
        document.querySelector('.strengthLevel').innerHTML= "Weak";
        elements[0].style.backgroundColor = '#FB7B58';
        elements[0].style.borderColor = '#FB7B58';
        elements[1].style.backgroundColor = '#FB7B58';
        elements[1].style.borderColor = '#FB7B58';
        elements[2].style.backgroundColor = 'inherit';
        elements[2].style.borderColor = 'inherit';
        elements[3].style.backgroundColor = 'inherit';
        elements[3].style.borderColor = 'inherit';
    
     }else if(strengthScore[strengthScore.length-1] == 3){
        document.querySelector('.strengthLevel').innerHTML= "Medium";
        elements[0].style.backgroundColor = '#F7CD65';
        elements[0].style.borderColor = '#F7CD65';
        elements[1].style.backgroundColor = '#F7CD65';
        elements[1].style.borderColor = '#F7CD65';
        elements[2].style.backgroundColor = '#F7CD65';
        elements[2].style.borderColor = '#F7CD65';
        elements[3].style.backgroundColor = 'inherit';
        elements[3].style.borderColor = 'inherit';
    
        
     }else if(strengthScore[strengthScore.length-1] >= 4){
        document.querySelector('.strengthLevel').innerHTML= "Strong";
        elements[0].style.backgroundColor = '#A4FFAF';
        elements[0].style.borderColor = '#A4FFAF';
        elements[1].style.backgroundColor = '#A4FFAF';
        elements[1].style.borderColor = '#A4FFAF';
        elements[2].style.backgroundColor = '#A4FFAF';
        elements[2].style.borderColor = '#A4FFAF';
        elements[3].style.backgroundColor = '#A4FFAF';
        elements[3].style.borderColor = '#A4FFAF';
     }
    // console.log(`The strength score is ${result}`);
    return result;
}


 btn.addEventListener('click', countNumberOfParam);





//  document.querySelector('.output__graph').setAttribute('style', 'stroke:red');
for (let e of document.querySelectorAll('input[type="range')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}