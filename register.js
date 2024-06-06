const form = document.querySelector('form')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#pass')
const pass2 = document.querySelector('#pass2')
// const number = document.querySelector('#number')



const arr = [];
form.addEventListener('submit', function (event) {
    event.preventDefault();
    arr.push({
        Name:name.value,
        email:email.value,
        password:password.value,
        repassword:pass2.value
        // number:number.value,
    });
    console.log(arr);

   
    
})


form.addEventListener('submit', function (event) {
    event.preventDefault()
    localStorage.setItem('user', JSON.stringify(arr))
    
   
    name.value = ''
    email.value = ''
    password.value = ''
    pass2.value = ''

    alert('successfully registeration')
    window.location = 'login.html'
   

    
    
})





