const form = document.getElementById('form');
const openform = document.getElementById('openform');
const closeform = document.getElementById('closeform');


openform.addEventListener('click',()=>{
    form.style.display='block';
    document.body.style.backgroundColor='blue';
})
closeform.addEventListener('click',()=>{
    form.style.display='none';
    document.body.style.backgroundColor='black';
})

