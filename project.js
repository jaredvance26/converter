

// let f = 5
// let c = (f - 32) * 5/9;
// console.log(c);
const button = document.querySelector('#submit')

let convert = (f) => {
    return((f - 32) * 5/9);
};
    
let calculation = () => {
    let fahrenheit = parseInt(document.querySelector('#fahrenheit').value);
    let conversion = convert(fahrenheit);

    document.querySelector('#conversion').value = Math.round(conversion);  
};

button.addEventListener('click', calculation);

