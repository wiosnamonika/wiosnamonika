$(document).ready(function () {

    var st;
    $('#carousel').on('slid.bs.carousel', function () {
        //   debugger;
        var newinterval = $('#carousel .carousel-inner').find('.active').attr('interval');

        $('#carousel').carousel("pause");
        clearTimeout(st);
        st = setTimeout("$('#carousel').carousel()", newinterval);

    });

    var button = document.querySelector('#sub');
    var form = document.querySelector('form');
    var emailElem = $("#email");
    var nameElem = $("#name");


    var errorMsg = $('.error-message');
    var successMsg = form.querySelector('.success-message');

    button.addEventListener('click', function (event) {
        event.preventDefault();
        //form ZAWSZE JEST NA SUBMIT nie na clicku!!

        var errorText = '';



        if (nameElem.val().trim().length <= 6) {
            nameElem.addClass("box-error");
            errorText += 'Twoje imię i nazwisko jest za krótkie<br>';
        } else {
            nameElem.classList.remove('box-error');
        }

        if (emailElem.val().indexOf('@') == -1) {
            emailElem.addClass('box-error');
            errorText += 'Email musi posiadać znak @<br>';
        } else {
            emailElem.classList.remove('box-error'); //zabezpieczenie 
        }

        if (errorText != "") {
            errorMsg.html(errorText);

        } else {
            // json

            var url = "http://api.coderslab.pl/showpost.php";

            $.ajax({
                method: "POST",
                url: url,
                dataType: "json",
                data: car
            }).done(function (response) {
                console.log(response);
            });
        }
        //car api
        var url2 = 'https://api-st.cars.com/VehicleMarketSummary/1.0/rest/reports/vehicledetails/metrics';
        
        $.ajax({
                method: "GET",
                url: url2,
                dataType: "json",
                data: car
            }).done(function (response) {
                console.log(response);
            });
        }

        //response api klucz wartosc
        //for ladujesz po tablicy

    });



}) //koniec funkcji
