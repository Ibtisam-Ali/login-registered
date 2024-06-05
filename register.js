const form = document.querySelector('form')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const pass = document.querySelector('#pass')
const number = document.querySelector('#number')



const arr = [];
form.addEventListener('submit', function (event) {
    event.preventDefault();
    arr.push({
        Name:name.value,
        Email:email.value,
        Password:pass.value,
        number:number.value,
    });
    console.log(arr);

   
    
})


form.addEventListener('submit', function (event) {
    event.preventDefault()
    localStorage.setItem('user', JSON.stringify(arr))
    
})

const user = JSON.parse(localStorage.getItem('user'))




