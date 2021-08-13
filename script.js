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

window.onload = function() {

    searchDeezer("Metallica");
    searchDeezer("Behemoth");
    searchDeezer("Eminem");
  
    const renderLink = document.querySelector("#render");
    renderLink.addEventListener('click', function() {
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
      };


      function search(query) {
        if (query.length < 3) {
          filteredBooks = books;
          displayBooks();
          return;
        }

        filteredBooks = books.filter((book) =>
          book.title.toLowerCase().includes(query.toLowerCase())
        );

        console.log(filteredBooks);
        displayBooks(filteredBooks);
      }
/** <div class="mainSection">
    <div class="container-fluid">
      <div class="container goodMorningTxt">
        <h7>Good Morning</h7>
      </div>
    </div>
    <div class="container-fluid goodMorningOptions">
      <div class="row row-cols-5">
        <div class="col-sm col-md-2 col-lg-2 d-flex">
          <a onclick="audio.play ( )" class="cardHover louis" href="#"><div class="card">
            <div class="row">
              <div class="col">
                <img
                  class="cardTopImg"
                  src="Assets/Jazz.jfif"
                  class="img-fluid"
                  alt=""
                />
              </div>
           
              <div class="col colText">
                <div class="cardText armstrong">Louis Armstrong<audio  id="sound1" src="/Assets/iron.wav" preload="auto"></audio>
                  <button class="cardPlay" onclick="document.getElementById('sound1').play();"><img class="playButtonPng" src="Assets/play-button.png"></button></div>
              </div>
            </div>
          </div>
        </div>
      </a>
        <div class="col-sm col-md-2 col-lg-2 d-flex">
          <a onclick="audio2.play ( )" class="cardHover ironmaiden"  href="#"><div class="card">
            <div class="row">
              <div class="col">
                <img
                  class="cardTopImg"
                  src="Assets/ironmaiden.jfif"
                  class="img-fluid"
                  alt=""
                />
              </div>
            
              <div class="col colText">
                <div class="cardText d-flex">Iron Maiden </div>
               
              </div>
            </div>
          </div>
        </div>
      </a>
        <div class="col-sm col-md-2 col-lg-2 d-flex">
          <a onclick="audio3.play ( )" class="cardHover beatles" href="#"><div class="card">
            <div class="row">
              <div class="col">
                <img
                  class="cardTopImg"
                  src="Assets/beetles.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="col colText">
                <div class="cardText">The Beatles</div>
              </div>
            </div>
          </div>
        </div>
      </a>
        <div class="col-sm col-md-2 col-lg-2 d-flex">
          <a onclick="audio4.play ( )" class="cardHover biggie" href="#"><div class="card">
            <div class="row">
              <div class="col">
                <img
                  class="cardTopImg"
                  src="Assets/biggie.jfif"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="col colText">
                <div class="cardText">Biggie Smalls</div>
              </div>
            </div>
          </div>
        </div>
      </a>
        <div class="col-sm d-flex ">
          <a onclick="audio5.play ( )" class="cardHover korn" href="#"><div class="card">
            <div class="row">
              <div class="col">
                <img
                  class="cardTopImg"
                  src="Assets/KORN.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="col  colText">
                <div class="cardText ">Korn</div>
              </div>
            </div>
          </div>
        </div>
      </a>
        <div class="col-sm col-md-2 col-lg-2 d-flex">
          <a onclick="audio6.play ( )" class="cardHover skindred" href="#"> <div class="card">
            <div class="row">
              <div class="col">
                <img
                  class="cardTopImg"
                  src="Assets/skindred.jfif"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="col colText">
                <div class="cardText">Skindred</div>
              </div>
            </div>
          </div>
        </div>
      </a>
        <div class="col-sm col-md-2 col-lg-2 d-flex">
          <a onclick="audio7.play ( )" class="cardHover damageplan" href="#"><div class="card">
            <div class="row">
              <div class="col">
                <img
                  class="cardTopImg"
                  src="Assets/damageplan.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="col colText">
                <div class="cardText">Damageplan</div>
              </div>
            </div>
          </div>
        </div>
      </a>
        <div class="col-sm col-md-2 col-lg-2 d-flex">
          <a onclick="audio8.play ( )" class="cardHover kasabian" href="#"><div class="card">
            <div class="row">
              <div class="col">
                <img
                  class="cardTopImg"
                  src="Assets/kasabian.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="col colText">
                <div class="cardText">Kasabian</div>
              </div>
            </div>
          </div>
        </div>
      </a>
        <div class="col-sm col-md-2 col-lg-2 d-flex">
          <a onclick="audio9.play ( )" class="cardHover rollingstones" href="#"><div class="card">
            <div class="row">
              <div class="col">
                <img
                  class="cardTopImg"
                  src="Assets/rollingstones.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="col colText">
                <div class="cardText">The Rolling Stones</div>
              </div>
            </div>
          </div>
        </div>
      </a>
        <div class="col-sm col-md-2 col-lg-2 d-flex">
          <a onclick="audio10.play ( )" class="cardHover foof" href="#"><div class="card">
            <div class="row">
              <div class="col">
                <img
                  class="cardTopImg"
                  src="Assets/foofighters.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="col colText">
                <div class="cardText">Foo Fighters</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
    <div class="container-fluid">
      <div class="container recentlyPlayedTxt">
        <h7>Recently Played</h7>
      </div>
      <div class="seeAllRecently">
        <h9><a href="#">See all</a></h9>
      </div>
    </div>
    <div class="container-fluid-recently showsToTryOptions">
      <div class="row row-cols-8">
        <div class="col-sm d-flex">
          <a class="cardBg" href="#"><div class="card" style="width: 100px !important">
            <img
              class="card-img-top-recently"
              src="/Assets/coldplay.png"
              alt="Card image cap"
            />
            <div class="card-body-recently">
              <h5 class="card-title">Coldplay</h5>
              <p class="card-text-recently">A Head Full Of Dreams</p>
            </div>
          </div>
        </div></a>
        <div class="col-sm d-flex">
          <a class="cardBg" href="#"><div class="card" style="width: 100px !important">
            <img
              class="card-img-top-recently"
              src="/Assets/jcole.jpg"
              alt="Card image cap"
            />
            <div class="card-body-recently">
              <h5 class="card-title">J Cole</h5>
              <p class="card-text-recently">KOD</p>
            </div>
          </div>
        </div></a>
        <div class="col-sm d-flex">
          <a class="cardBg" href="#"><div class="card" style="width: 100px !important">
            <img
              class="card-img-top-recently"
              src="/Assets/QUEEN.jfif"
              alt="Card image cap"
            />
            <div class="card-body-recently">
              <h5 class="card-title">Queen</h5>
              <p class="card-text-recently">Hot Space</p>
            </div>
          </div>
        </div></a>
        <div class="col-sm d-flex">
          <a class="cardBg" href="#"><div class="card" style="width: 100px !important">
            <img
              class="card-img-top-recently"
              src="/Assets/log.jfif"
              alt="Card image cap"
            />
            <div class="card-body-recently">
              <h5 class="card-title">Lamb of God</h5>
              <p class="card-text-recently">Wrath</p>
            </div>
          </div>
        </div></a>
        <div class="col-sm d-flex">
          <a class="cardBg kanye" href="#"><div class="card" style="width: 100px !important">
            <img
              class="card-img-top-recently"
              src="/Assets/kanye.jpg"
              alt="Card image cap"
            />
            <div class="card-body-recently">
              <h5 class="card-title">Kanye West</h5>
              <p class="card-text-recently">Graduation</p>
            </div>
          </div>
        </div></a>
        <div class="col-sm d-flex">
          <a class="cardBg gorillaz" href="#"><div class="card" style="width: 100px !important">
            <img
              class="card-img-top-recently"
              src="/Assets/gorillaz.jpg"
              alt="Card image cap"
            />
            <div class="card-body-recently">
              <h5 class="card-title">Gorillaz</h5>
              <p class="card-text-recently">The Fall</p>
            </div>
          </div>
        </div></a>
        <div class="col-sm d-flex">
          <a class="cardBg steve" href="#"><div class="card" style="width: 100px !important">
            <img
              class="card-img-top-recently"
              src="/Assets/steve.jpg"
              alt="Card image cap"
            />
            <div class="card-body-recently">
              <h5 class="card-title">Steve Vai</h5>
              <p class="card-text-recently">The Ultra Zone</p>
            </div>
          </div>
        </div></a>
        <div class="col-sm d-flex">
          <a class="cardBg megadeth" href="#"><div class="card" style="width: 100px !important">
            <img
              class="card-img-top-recently"
              src="/Assets/megadeth.jpg"
              alt="Card image cap"
            />
            <div class="card-body-recently">
              <h5 class="card-title">Megadeth</h5>
              <p class="card-text-recently">Rust In Peace</p>
            </div>
          </div>
        </div></a>
      </div>
    </div>
    <div class="container-fluid">
      <div class="container showsToTryTxt">
        <h7>Shows to try</h7>
        <p>Podcasts we think you'll get hooked on.</p>
      </div>
      <div class="seeAllShowToTry">
        <h9><a href="#">See all</a></h9>
      </div>
    </div>
    <div class="container-fluid-recently recentlyPlayedOptions">
      <div class="row row-cols-8">
        <div class="col-sm d-flex">
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
          </div>
        </div></a>
        <div class="col-sm d-flex">
          <a class="cardBg" href="albumpage.html"><div class="card" style="width: 100px !important">
            <img
              class="card-img-top-recently"
              src="/Assets/queen.png"
              alt="Card image cap"
            />
            <div class="card-body-recently">
              <h5 class="card-title">Queen</h5>
              <p class="card-text-recently">Bohemian Rhapsody</p>
            </div>
          </div>
        </div></a>
        <div class="col-sm col- d-flex">
          <a class="cardBg" href="#"><div class="card" style="width: 100px !important">
            <img
              class="card-img-top-recently"
              src="/Assets/nas.jpg"
              alt="Card image cap"
            />
            <div class="card-body-recently">
              <h5 class="card-title">Nas</h5>
              <p class="card-text-recently">Illmatic</p>
            </div>
          </div>
        </div></a>
        <div class="col-sm col- d-flex">
          <a class="cardBg" href="#"><div class="card" style="width: 100px !important">
            <img
              class="card-img-top-recently"
              src="/Assets/snoopdogg.jpg"
              alt="Card image cap"
            />
            <div class="card-body-recently">
              <h5 class="card-title">Snoop Dogg</h5>
              <p class="card-text-recently">The Blue Carpet</p>
            </div>
          </div>
        </div></a>
        <div class="col-sm col- d-flex">
          <a class="cardBg jameroquai" href="#"><div class="card" style="width: 100px !important">
            <img
              class="card-img-top-recently"
              src="/Assets/jameroqai.jpg"
              alt="Card image cap"
            />
            <div class="card-body-recently">
              <h5 class="card-title">Jameroquai</h5>
              <p class="card-text-recently">Emergency on Planet Earth</p>
            </div>
          </div>
        </div></a>
        <div class="col-sm col- d-flex">
          <a class="cardBg nwa" href="#"><div class="card" style="width: 100px !important">
            <img
              class="card-img-top-recently"
              src="/Assets/NWA.jpg"
              alt="Card image cap"
            />
            <div class="card-body-recently">
              <h5 class="card-title">NWA</h5>
              <p class="card-text-recently">Compton Commodified</p>
            </div>
          </div>
        </div></a>
        <div class="col-sm  d-flex">
          <a class="cardBg icecube" href="#"><div class="card" style="width: 100px !important">
            <img
              class="card-img-top-recently"
              src="/Assets/icecube.jpg"
              alt="Card image cap"
            />
            <div class="card-body-recently">
              <h5 class="card-title">Ice Cube</h5>
              <p class="card-text-recently">Greatest Hits</p>
            </div>
          </div>
        </div></a>
        <div class="col-sm col- d-flex">
          <a class="cardBg qotsa" href="#"><div class="card" style="width: 100px !important">
            <img
              class="card-img-top-recently"
              src="/Assets/gotsa.png"
              alt="Card image cap"
            />
            <div class="card-body-recently">
              <h5 class="card-title">QOTSA</h5>
              <p class="card-text-recently">Songs For The Deaf</p>
            </div>
          </div></a>
        </div>
      </div>
    </div>
  </div> */






















    // fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-key": "5107a355f0mshff5e59e28a599d4p147358jsn70be46886c1a",
    //         "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
    //     }
    // })
    // .then((response) => response.json())
    // .then((data) => {
    //     console.log("resolved");
    //     if (data.data) {
    //         albums = data.data;
    //     } else {
    //         error = true;
    //     }
    // })
    // .catch(err => {
    //     console.log("rejected");
    //     console.error(err);
    // });

    // fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", {
	// "method": "GET",
	// "headers": {
	// 	"x-rapidapi-key": "5107a355f0mshff5e59e28a599d4p147358jsn70be46886c1a",
	// 	"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	// }
    // })
    // .then((response) => response.json())
    // .then((data) => {
    //     console.log("resolved");
    //     console.log(data);
    // })
    // .catch(err => {
    //     console.log("rejected");
    //     console.error(err);
    // });

    // fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=behemoth", {
	// "method": "GET",
	// "headers": {
	// 	"x-rapidapi-key": "5107a355f0mshff5e59e28a599d4p147358jsn70be46886c1a",
	// 	"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	// }
    // })
    // .then((response) => response.json())
    // .then((data) => {
    //     console.log("resolved");
    //     console.log(data);
    // })
    // .catch(err => {
    //     console.log("rejected");
	//     console.error(err);
    // });
    // };














    
    // audio files

    const audio = new Audio("/assets/louis.wav");

    const audio2 = new Audio("/assets/iron.wav");

    const audio3 = new Audio("/assets/The Beatles - Come Together.wav");

    const audio4 = new Audio("/assets/poppacut.wav");

    const audio5 = new Audio("/assets/korn.wav");

    const audio6 = new Audio("/assets/pressure.wav");