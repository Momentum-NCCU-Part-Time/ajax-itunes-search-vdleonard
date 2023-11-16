console.log("Hello")

/*
make submit button
make type work


*/

const app = {
  data: {
    url: "https://itunes.apple.com/search?term=",
    urlLimit: "&limit=12",
    searchTerm: "",
    musicList: []
  },

  addEventListeners: function () {
    // submit search button
    // previe buttom

    let previewButtons = document.querySelectorAll(".previewButton")
    for (let button of previewButtons) {
      button.addEventListener("click", event => {
        event.preventDefault()
        // make audio play previewUrl

        console.log("preview button")
      })
    }

    let subButtons = document.querySelectorAll(".submitButton")

    for (let subButton of subButtons) {
      subButton.addEventListener("click", event => {
        event.preventDefault()
        app.searchSubmit()

        console.log("submit button")
      })
    }
  },

  searchSubmit: function () {
    this.data.searchTerm = document.getElementById("searchInput").value
    console.log("search was: " + this.data.searchTerm)
    app.search()
  },

  search: function () {
    this.data.musicList = []
    fetch(this.data.url + this.data.searchTerm + this.data.urlLimit, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(r => r.json())
      .then(response => {
        this.data.musicList = []
        for (let song of response.results) {
          this.data.musicList.push(song)
        }
        console.log("fetch search done: -" + this.data.url + this.data.searchTerm + this.data.urlLimit + "-")

        this.generateHTML()
      })
  },

  generateHTML: function () {
    let container = document.getElementById("listContainer")
    console.log("make html")
    container.innerHTML = ""
    for (let song of this.data.musicList) {
      container.innerHTML += `
        <div class="musicBlock" data-id="${song.trackID}">
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
    app.addEventListeners()
    console.log("Main")
  }
}

app.main()
