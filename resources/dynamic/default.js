function CheckResponse()
{
    var response = grecaptcha.getResponse();

    if (response.length == 0) {
        alert("Please confirm you are not a robot.");
    }
    else {
        $('input[name="Next"]').click();
        $("input[name='Next']").removeAttr("disabled");
    }
}

$(document).ready(function() { 
	$("input[name='Next']").attr("disabled", 'disabled');
})