console.log("Hello")

/*
make submit button
make type work


*/

const app = {
  data: {
    url: "https://itunes.apple.com/search?term=",
    urlLimit: "&limit=12",
    musicList: []
  },

  addEventListeners: function () {
    // submit search button
    // previe buttom

    let previewButtons = document.querySelectorAll(".previewButton")
    for (let button of previewButtons) {
      button.addEventListener("click", event => {
        event.preventDefault()
        console.log("preview button")
      })
    }
  },

  search: function () {
    this.data.musicList = []
    fetch(this.data.url + "riell" + this.data.urlLimit, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(r => r.json())
      .then(response => {
        this.data.musicList = []
        for (let song of response.results) {
          this.data.musicList.push(song)
        }
        console.log("fetch search done")
        this.generateHTML()
      })
  },

  generateHTML: function () {
    let container = document.getElementById("listContainer")
    console.log("make html")
    container.innerHTML = ""
    for (let song of this.data.musicList) {
      container.innerHTML += `
        <div class="musicBlock">
        <img src="${song.artworkUrl100}">
        <h3>${song.trackName}</h2>
        <p>${song.artistName}</p>
        <p>${song.collectionName}</p>
        <button class="previewButton" data-id="${song.trackID}"> Preview </button>
        </div>
        `
    }
  },

  main: function () {
    this.search()
    console.log("Main")
  }
}

app.main()
