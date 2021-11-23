/* eslint-env jquery, browser */

$(document).ready(function () {
    $("#cherry-tomatoes-button").click(function () {
        $("#cherry-tomatoes").show();
        $("#rocket").hide();
        $("#rocket-button").removeClass("calander-button-active");
        $("#cherry-tomatoes-button").addClass("calander-button-active");
        $("#rocket-button").addClass("calander-button");
    });
    $("#rocket-button").click(function () {
        $("#cherry-tomatoes").hide();
        $("#rocket").show();
        $("#cherry-tomatoes-button").removeClass("calander-button-active");
        $("#cherry-tomatoes-button").addClass("calander-button");
        $("#rocket-button").addClass("calander-button-active");
    });

    /* carousel show and hide */
    $("#allseeds").click(function () {
        $("#allseeds").addClass("underline");
        $("#fruitseeds").removeClass("underline");
        $("#vegseeds").removeClass("underline");
        $("#herbseeds").removeClass("underline");
        $(".catfruit").show();
        $(".catveg").show();
        $(".catherbs").show();
    });

    $("#fruitseeds").click(function () {
        $("#fruitseeds").addClass("underline");
        $("#allseeds").removeClass("underline");
        $("#vegseeds").removeClass("underline");
        $("#herbseeds").removeClass("underline");
        $(".catfruit").show();
        $(".catveg").hide();
        $(".catherbs").hide();
    });

    $("#vegseeds").click(function () {
        $("#vegseeds").addClass("underline");
        $("#allseeds").removeClass("underline");
        $("#fruitseeds").removeClass("underline");
        $("#herbseeds").removeClass("underline");
        $(".catfruit").hide();
        $(".catveg").show();
        $(".catherbs").hide();
    });

    $("#herbseeds").click(function () {
        $("#herbseeds").addClass("underline");
        $("#allseeds").removeClass("underline");
        $("#fruitseeds").removeClass("underline");
        $("#vegseeds").removeClass("underline");
        $(".catfruit").hide();
        $(".catveg").hide();
        $(".catherbs").show();
    });
});

//Get the button:
mybutton = document.getElementById("to-top-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
