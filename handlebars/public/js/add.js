$("#add-animal").on("submit", function (e) {
    e.preventDefault();

    const name = $("#name").val().trim();
    const sound = $("#sound").val().trim();

    const animal = {
        name: name,
        sound: sound
    };

    $.post("/api/animals", animal).then(res => console.log(res)).catch(err => console.error(err));
});
