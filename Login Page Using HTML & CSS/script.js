const form = document.getElementById('form');
const openbtn = document.getElementById('openbtn');
const closebtn = document.getElementById('closebtn');
const submit = document.getElementById('S-btn');

openbtn.addEventListener('click',()=>{
    form.style.display='block';

})

closebtn.addEventListener('click',()=>{
    form.style.display='none';
})


submit.addEventListener('click',()=>{
    form.style.display='none';
    alert('Succesfully Login!');
})