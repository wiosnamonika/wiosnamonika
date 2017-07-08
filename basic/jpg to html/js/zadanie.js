document.addEventListener("DOMContentLoaded", function () {



    var hidden = false;

    setInterval(function () {
        document.querySelector("a.contest").style.visibility = hidden ? "visible" : "hidden";
        hidden = !hidden;
    }, 3000);


    //ZOOM part

    var allLi = document.querySelectorAll('.gallery img'); //robimy na img nie mamy potrzeby
    //na li poniewaz naszym thisem,naszym kontekstem od razu jest img
    //var images = document.querySelectorAll('img');

    for (var i = 0; i < allLi.length; i++) {
        allLi[i].addEventListener('click', function (el) {
            el.preventDefault();
            //przy kliknieciu na ktorekolwiek ze zdjec dodajemy nowy element

            console.log(this);
            var new_url = this.getAttribute('src');
            var new_tag = document.querySelector('body'); //musimy powiedziec elementowi gdzie ma dodac
            var new_div = document.createElement('div');
            var new_img = document.createElement('img');
            var button = document.createElement('button');
            new_img.setAttribute('src', new_url);
            button.classList.add('close');
            button.innerText = 'close';
            new_div.classList.add('fullScreen');
            new_div.appendChild(button);
            new_div.appendChild(new_img);

            new_tag.appendChild(new_div);


            var closeBtn = document.querySelectorAll('.close');
            closeBtn.forEach((el) => {
                el.addEventListener('click', function () {
                    console.log(el.parentNode.parentNode.removeChild(new_div));
                })
            })
            //wchodzi sie wyzej niz jest ten element , nie na poziom element
        })
    }

    //formularz kontakt

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
