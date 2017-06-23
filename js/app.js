document.addEventListener('DOMContentLoaded', function(){
    var button1 = document.getElementById('prevPicture');
    var button2 = document.getElementById('nextPicture');
    
    var allLi = document.querySelectorAll('.slider li');
    
    var numbers = 0;
    
    console.log(button1, button2, allLi, numbers);
    
    var table = allLi[0].classList.add('visible');
    console.log(table);
    
    button1.addEventListener('click', function(event){
        event.preventDefault();
        allLi[numbers].classList.remove('visible');
        
        numbers++;
        console.log('zwiekszamy' + numbers);
        if(numbers>=allLi.length){
            numbers = allLi.length - 1;
            
            console.log('zmniejszamy bo poza ' + numbers);
            
        }
        allLi[numbers].classList.add('visible');
        
        
        
    })
    
    button2.addEventListener('click', function(event){
        event.preventDefault();
        allLi[numbers].classList.remove('visible');
        numbers--;
        if(numbers<0){
            numbers=0;
            
        }
        allLi[numbers].classList.add('visible');
    })
    
    
        var form = document.querySelector('form');


    var emailElem = form.elements.email; 
    var nameElem = form.elements.name;


    var errorMsg = form.querySelector('.error-message');
    var successMsg = form.querySelector('.success-message');

    form.addEventListener('submit', function (event) { //form ZAWSZE JEST NA SUBMIT nie na clicku!!
        event.preventDefault();
        var errorText = '';
        //teraz sprawdzamy czy jest jakas klasa w css prygotowana.dopisujemy recznie klase box error
        //        //klasa dodana po to ze jak niespelni kryteriow to pojawi sie pole na czerwone


        if (nameElem.value.trim().length <= 6) {
            nameElem.classList.add('box-error');
            errorText += 'Twoje imię i nazwisko jest za krótkie<br>';
        } else {
            nameElem.classList.remove('box-error');
        }
        
        if (emailElem.value.indexOf('@') == -1) {
            emailElem.classList.add('box-error');
            errorText += 'Email musi posiadać znak @<br>';
        } else {
            emailElem.classList.remove('box-error'); //zabezpieczenie 
        }


        errorMsg.innerHTML = errorText;
        //innerHTML bo chcemy zeby pola byly w kolejnych linijkach
        if (errorMsg.innerHTML.trim().length == 0) {
            successMsg.innerText = 'Wiadomość wysłano';
            form.submit();

        }
    });
    
    
    
}) //koniec funkcji