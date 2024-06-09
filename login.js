
const user = JSON.parse(localStorage.getItem('user'))

const form1 = document.querySelector('#form1')
const email = document.querySelector('#email')
const password = document.querySelector('#pass')





const arr = [];
form1.addEventListener('submit', function (event) {
    event.preventDefault()

   
    // arr.push({
    //     email:email.value,
    //     password:password.value,
        
        
    // })

        

     if (user[0].email === email.value 
        && user[0].password === password.value) {
        alert('Login successful');
        
    }else {
        alert('Incorrect email or password');

    }

    // console.log(arr);
});






