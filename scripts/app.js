// define globals
var weekly_quakes_endpoint = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson'

axios.get(weekly_quakes_endpoint)
  .then(res => {
    let earthLoc = document.getElementById('info')
    var quakes = res.data.features
    quakes.forEach(i => {
      let title = document.createElement('p')
      titlesrc = i.properties.title
      earthLoc.appendChild(title)
      title.innerHTML = titlesrc
      console.log("Let's get coding!")
      console.log(title.src)
    })
  })
