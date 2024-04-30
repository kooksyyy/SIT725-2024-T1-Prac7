const cardList = [
    {
        title: "Kitten 2",
        image: "/images/kitten1.png",
        link: "About Kitten 2",
        desciption: "This is another cute cat."
    },
    {
        title: "Kitten 3",
        image: "/images/kitten2.png",
        link: "About Kitten 3",
        desciption: "Also an adorable cat."
    }
]
const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}

const submitForm = () => {
    let formData = {};
    formData.title = $('#title').val();
    formData.image = $('#image').val();
    formData.link = $('#link').val();
    formData.desciption = $('#desciption').val();

    console.log("Form Data: ", formData);
    addCat(formData);
}

const addCat = (cat) => {
    $.ajax({
        url: 'api/cats',
        data: cat,
        type: 'POST',
        success: (result) => {
            alert(result.message);
            location.reload();
        }
    });
}

const getCats = () => {
    $.get('/api/cats', (response) => {
        if (response.statusCode === 200) {
            addCards(response.data);
        }
    })
}

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text">' + item.desciption + '</p>' +
            '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}

let socket = io();
socket.on('number', (msg) => {
    console.log('Random number: ' + msg);
})



$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('.modal').modal();

    getCats();

    $('#formSubmit').click(() => {
        submitForm();
    })

});

