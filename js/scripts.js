$(document).ready(function() {
    $("#blanks form").submit(function() {
        var person1Input = $(".person1").val();
        var person2Input = $(".person2").val();
        var animalInput = $(".animal").val();
        var exclamationInput = $(".exclamation").val();
        var verbInput = $(".verb").val();
        var nounInput = $(".noun").val();

        $(".person1").append("person1Input");
        $(".person2").append("person2Input");
        $(".animal").append("animalInput");
        $(".exclamation").append("exclamationInput");
        $(".verb").append("verbInput");
        $(".noun").append("nounInput");

        $("#story").show();

        event.preventDefault();
    });
});
