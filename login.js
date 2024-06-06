
const user = localStorage.getItem('user')

const form1 = document.querySelector('#form1')
const email = document.querySelector('#email')
const password = document.querySelector('#pass')





const arr = [];
form1.addEventListener('submit', function (event) {
    // event.preventDefault();
   
    arr.push({
        email:email.value,
        password:password.value,
        
        
    })

   if (user === email && password) {
        alert('Login successful');
        
    } else if ( user === null) {
        alert('please register first');

    }else {
        alert('Incorrect email or password');

    }

    // console.log(arr);
});



