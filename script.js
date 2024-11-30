const textarea1 = document.getElementById('textarea');

const totalcount = document.getElementById('total-characters');

const remainingcount = document.getElementById('remaining-characters');


textarea1.addEventListener('keyup', (e) => {
   updateCounter()
});


function updateCounter() {
   totalcount.innerText = textarea1.value.length;
   
   remainingcount.innerText = textarea1.getAttribute('maxlength') - textarea1.value.length;
}

