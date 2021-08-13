let albums = []
let error = false;
let artistNames =[]

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
        src="${album.cover}"
        alt="Card image cap"
      />
      <div class="card-body-recently">
        <h5 class="card-title">${album.title}</h5>
        <p class="card-text-recently">Greatest Hits</p>
      </div>
    </div></a>
  </div>`;
}

function AlbumsRow(title, albumsHTML) {


    return `  <div class="container album-titles">
    <h7>${title}</h7>
  </div>
  <div class="container-fluid-recently recentlyPlayedOptions">
    <div class="row row-cols-8">

        ${albumsHTML}

    </div>
  </div>`;
}



function search() {
  const artists = document.querySelectorAll(".card-title");
  for (let artist of artists) {

      // console.log(artist.innerHTML);
      artistNames.push(artist.innerHTML);
      return `<a class="cardBg" href="#"><div class="card" style="width: 100px !important">
      <img
        class="card-img-top-recently"
        src="{${a;n}}"
        alt="Card image cap"
      />
      <div class="card-body-recently">
        <h5 class="card-title">${album.title}</h5>
        <p class="card-text-recently">Wrath</p>
      </div>
    </div>
  </div></a>
      `
  }
  console.log(artistNames)
}

function deleteItem(asin) {
  const index = shoppingCartList.findIndex((book) => book.asin === asin);

  if (index !== -1) {
    shoppingCartList.splice(index, 1);
  }

  refreshShoppingCartList();
}



window.onload = function() {

    searchDeezer("Metallica");
    // searchDeezer("Behemoth");
    // searchDeezer("Eminem");

    const renderLink = document.querySelector("#render");
    renderLink.addEventListener('click', function() {
        alert("Render is clicked!");
        let pageContent = document.querySelector(".mainSection");  // targeting main section
        let pageContentHTML = "";
        pageContent.childNodes.forEach((node, index) => {
            if (index !== 1) {
              node.remove();
            }
          });
          albums.forEach((albumResult) => {
            const title = albumResult.title;
            const data = albumResult.albums;
            pageContentHTML += AlbumsRow(title, '');
          });
           pageContent.innerHTML = pageContentHTML;
           pageContentHTML = `<a class="cardBg" href="#"><div class="card" style="width: 100px !important">
           <img
             class="card-img-top-recently"
             src="/Assets/log.jfif"
             alt="Card image cap"
           />
           <div class="card-body-recently">
             <h5 class="card-title">${albums.title}</h5>
             <p class="card-text-recently">Wrath</p>
           </div>
         </div>
       </div></a>`
        });
      };



























    const audio = new Audio("/assets/louis.wav");

    const audio2 = new Audio("/assets/iron.wav");

    const audio3 = new Audio("/assets/The Beatles - Come Together.wav");

    const audio4 = new Audio("/assets/poppacut.wav");

    const audio5 = new Audio("/assets/korn.wav");

    const audio6 = new Audio("/assets/pressure.wav");