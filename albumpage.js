let getalbums = [];
let jumbotron = document.getElementById("display");
window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/album/75621062") //get all products using API
    .then((Response) => {
      return Response.json();
    })
    .then((albums) => {
      getalbums = albums;

      displayAlbum(albums);
      console.log(albums.title);
    })
    .catch((err) => {
      console.log(err);
    });
};

function displayAlbum(music) {
  jumbotron.innerHTML = `
  <div class="d-flex flex-wrap">

  <img src="${music.cover}" class="shadow-lg p-2 m-2 mb-0" width="200px" alt="">
</div>
<div class="align-self-end">
  <p class="lead text-light">Album</p>
  <h2 class="display-6">"${music.title}"</h2>
  <h6 class="p-1 pl-0" style="font-size: 10px;"><i class="fas fa-lg fa-user-circle"></i><span
          class="p-1">Queen</span><span class="text-muted"> . 2018 . 22 songs, 1 hr 19
          min</span></h6>
</div>
  `;
}
