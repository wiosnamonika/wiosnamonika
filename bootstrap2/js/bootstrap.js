
    

$(window).load(function () {
    var st;
    $('#carousel').on('slid.bs.carousel', function () {
        //   debugger;
        var newinterval = $('#carousel .carousel-inner').find('.active').attr('interval');

        $('#carousel').carousel("pause");
        clearTimeout(st);
        st = setTimeout("$('#carousel').carousel()", newinterval);

        // $('#carousel').carousel({ interval: newinterval });
    });

    $(document).ready(function () {

        $('#contact').validate({
            rules: {
                name: {
                    minlength: 2,
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    minlength: 2,
                    required: true
                }
            },
            highlight: function (element) {
                $(element).closest('.control-group').removeClass('success').addClass('error');
            },
            success: function (element) {
                element
                    .text('OK!').addClass('valid')
                    .closest('.control-group').removeClass('error').addClass('success');
            }
        });
    });
});