let albums = []
let error = false;

function searchDeezer(query) {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + query, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "5107a355f0mshff5e59e28a599d4p147358jsn70be46886c1a",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
    }
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("resolved");

      if (data.data) {
        const obj = { title: query, albums: data.data };
        albums.push(obj);
        console.log(albums);
      } else {
        error = true;
      }
    })
    .catch(err => {
      console.log("rejected");
      console.error(err);
    });
}

function singleAlbum(album) {
  return ` <div class="col-sm d-flex">
    <a class="cardBg" href="artist.html"><div class="card" style="width: 100px !important">
      <img
        class="card-img-top-recently"
        src="/Assets/falloutboy.png"
        alt="Card image cap"
      />
      <div class="card-body-recently">
        <h5 class="card-title">Fall Out Boy</h5>
        <p class="card-text-recently">Greatest Hits</p>
      </div>
    </div></a>
  </div>`;
}

function AlbumsRow(title, albumsHTML) {
  return `  <div class="container recentlyPlayedTxt">
    <h7>${title}</h7>
  </div>
  <div class="container-fluid-recently recentlyPlayedOptions">
    <div class="row row-cols-8">
      
        ${albumsHTML}
      
    </div>
  </div>`;
}

window.onload = function () {

  searchDeezer("Metallica");
  searchDeezer("Behemoth");
  searchDeezer("Eminem");

  const renderLink = document.querySelector("#render");
  renderLink.addEventListener('click', function () {
    alert("Render is clicked!");
    let pageContent = document.querySelector(".mainSection");
    let pageContentHTML = "";
    pageContent.childNodes.forEach((node, index) => {
      if (index !== 0) {
        node.remove();
      }
    });
    albums.forEach((albumResult) => {
      let rowContent = "";
      const title = albumResult.title;
      const data = albumResult.albums;

      data.forEach((result) => {
        const title = result.title_short;
        const cover = result.album.cover_medium;
        const id = result.album.id;
        const album = { cover, title, id };
        rowContent += SingleAlbum(album);
      });
      pageContentHTML += AlbumsRow(title, rowContent);
      rowContent = "";
    });
    pageContent.innerHTML += pageContentHTML;
  });

  getArtist();
};

const getArtist = () => {
  const artists = document.querySelectorAll(".card-title");
  for (let artist of artists) {
    artist.addEventListener('click', () => {
      getArtistByName(artist.innerHTML);
    })
  }
}

const getArtistByName = (name) => {
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${name}`)
    .then(response => response.json())
    .then(data => {
      console.log(data.data[0].artist.id)
      window.location.href = `artist.html?artist=${data.data[0].artist.id}`;
    })
    .catch(err => {
      return console.log(err)
    })
}


// audio files

const audio = new Audio("/assets/louis.wav");

const audio2 = new Audio("/assets/iron.wav");

const audio3 = new Audio("/assets/The Beatles - Come Together.wav");

const audio4 = new Audio("/assets/poppacut.wav");

const audio5 = new Audio("/assets/korn.wav");

const audio6 = new Audio("/assets/pressure.wav");
