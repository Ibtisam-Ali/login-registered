const form = document.querySelector('form')
const name = document.querySelector('#name')
const email = document.querySelector('#email')




const arr = [];
form.addEventListener('submit', function (event) {
    event.preventDefault();
    arr.push({
        Email:email.value,
        Password:pass.value,
        
    });
    console.log(arr);
});


// form.addEventListener('submit',function (event) {
//     if (email.value === arr.lenght) {
//         console.log('you have already registered');

        
//     }else{
//         console.log("First registeration then login");
//     }
    
    
// })
   



