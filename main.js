$(document).ready(function() {
    $("form").submit(function (event) {
        event.preventDefault();

        const tarefa = $("#tarefa").val();
        $("ul").append(`<li>${tarefa}</li>`);
        $("#tarefa").val('');
        
        $("ul").on('click', 'li', function() {
            $(this).toggleClass("ok");
        })
    })
})