window.onload = () => {
    getArtistById();
}

const getArtistById = () => {
    let params = new URLSearchParams(document.location.search.substring(1));
    let name = params.get("artist");
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${name}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            updateArtist(data)
        })
        .catch(err => {
            return console.log(err)
        })
}

const updateArtist = (data) => {
    document.title = `${data.name} | Spotify`
    document.querySelector(".card-title.artist-page").innerHTML = data.name;
    document.querySelector(".card-img.card-img-tittle").src = data.picture_xl;
}
