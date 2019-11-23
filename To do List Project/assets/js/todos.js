// Complete a ToDO by clickin on it.

$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});
// Remove a To-Do by clicking on X icon.
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text']").keypress(function (event) {

    if (event.which === 13) {
        //getting text from input
        var todotext = $(this).val();
        $(this).val("");
        //create li and add to ul
        $("ul").append("<li><span>X</span> " + todotext + "</li>");

    }

});