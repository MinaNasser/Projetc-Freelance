const search = document.getElementById('search');
const icon = document.getElementById('icon');
const cut = document.getElementById('cut');
const sanjay = document.getElementById('sanjay');
const navbar = document.getElementById('navbar');

icon.addEventListener('click',()=>{
    search.style.display='block';
    search.style.display='flex';
    navbar.style.display='none';
})

cut.addEventListener('click',()=>{
   search.style.display='none';
   sanjay.value="";
   navbar.style.display='block';
})