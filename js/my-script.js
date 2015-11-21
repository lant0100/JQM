var currentPage;

$(document).ready(function () {
    if (localStorage.getItem('pages')) {
        currentPage = localStorage['pages'];
    } else {
        currentPage = "#t1";
    }

    $('#start-btn').on('click', function (event) {
        
        document.getElementById('start-btn').innerHTML = "Continue Tutorial!";

        event.preventDefault();

        $.mobile.changePage(currentPage);
    });

$('.next').on('click', setStorage);

$('.back').on('click', setStorage);

});

function setStorage(event) {

    event.preventDefault();

    currentPage = $(this).attr("href");

    $.mobile.changePage(currentPage);

    localStorage.setItem("pages", currentPage);
}