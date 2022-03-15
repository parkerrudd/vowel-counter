const checkButton = document.querySelector('[data-check-button')
const inputField = document.querySelector('[data-input-field]')

function vowelCounter(str) {
    let vowels = "aeiou"; 
    let count = 0; 

    for(let i = 0; i < str.length; i++) {
        if(vowels.indexOf(str[i]) > -1) {
            count++; 
        }
    }
    
    return count; 
}

checkButton.addEventListener('click', () => {
    let text = vowelCounter(inputField.value);
    alert(`This text contains ${text} vowels`); 
})