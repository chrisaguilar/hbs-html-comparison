$.get('/api/animals')
    .then(animals => {
        for (const animal of animals) {
            $('tbody').append(`
                <tr>
                    <td>${animal.id}</td>
                    <td>
                        <a href="/animal?animal_id=${animal.id}">${animal.name}</a>
                    </td>
                    <td>${animal.sound}</td>
                </tr>
            `);
        }
    })
    .catch(console.error);
