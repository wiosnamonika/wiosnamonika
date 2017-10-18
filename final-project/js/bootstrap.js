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
    var message = $('textarea');
    console.log(message);


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

        if (message.val().length <= 20) {
            message.addClass('box-error');
            errorText += 'Pole wiadomość nie może być puste';
        } else {
            message.classList.remove('box-error');
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


    });


});

//car api


// variables for DOM
var ul = $("#car-date");

var url2 = 'https://api.spacexdata.com/v1/launches/latest';
console.log(url2);

var holidayUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/474/modelyear/2015?format=json';
//https://fipe.parallelum.com.br/api/v1/carros/marcas'

//'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/474/modelyear/2015?format=json';
//https://fipe.parallelum.com.br/api/v1/carros/marcas

function insertCar(items) {

    $.ajax({
        url: holidayUrl,
        dataType: 'json',
    }).done(function (response) {
        $("#load").hide();
        var li;
        var span;
        var counter = 0;
        console.log(response.Results);
        var item = null;
        for(var i = 0 ;i <items;i++){
            console.log(response.Results[i]);
            item = $("<li>"+response.Results[i].Make_Name+ " "+response.Results[i].Model_Name +"</li>");
            $("#car-date").append(item);
        }
        
//        for (var i = 0; i < response.length; i++) {
//            //console.log(response[i].nome);
//        }
//
//        li = $("<li>",{class: "holiday"});
//            span = $('<span>');
//            span.text(response[i].Make_Name + ' '+ response[i].Make_ID + response[i].Model_Name);
//            li.append(span);
//            ul.append(li);
    }).fail(function (response) {
        console.log(response);
    });
}

$("#load").on("click", function () {
    console.log($(this));
    $(this).text("Czekaj...");
    $(this).attr("disabled",true);
    insertCar(10);

});



//koniec funkcji
