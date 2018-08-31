function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return false;
}

const animal_id = getQueryVariable('animal_id');

$.get(`/api/animals/${animal_id}`)
    .then(animal => {
        $('#name').text(animal.name);
        $('#id').text(animal.id);
        $('#sound').text(animal.sound);
    })
    .catch(console.error);
