console.log("Hello")

/*



*/

const app = {
  data: {
    url: "https://itunes.apple.com/search?term=",
    urlLimit: "&limit=5",
    musicList: []
  },

  addEventListeners: function () {
    // submit search button
    // previe buttom

    let previewButtons = document.querySelectorAll(".previewButton")
    for (let button of deleteButtons) {
      button.addEventListener("click", event => {
        event.preventDefault()
        console.log("preview button")
      })
    }
  },

  search: function () {
    fetch(this.data.url + "riell" + this.data.urlLimit, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(r => r.json())
      .then(response => {
        this.data.musicList = []
        for (let song of response) {
          this.data.musicList.push(song)
        }
        this.generateHTML()
        console.log("fetch search done")
      })
  },

  generateHTML: function () {
    let container = document.getElementById("listContainer")
    console.log("make html")
    container.innerHTML = ""
    for (let song of this.data.musicList) {
      container.innerHTML += `
        <div class="musicBlock">
        <img scr=${musicList.artworkUrl100}
        <h2>${musicList.trackName}</h2>
        <p>${musicList.artistName}</p>
        <p>${musicList.collectionName}</p>
        <button class="previewButton" data-id="${musicList.trackID}"> Preview </button>
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
