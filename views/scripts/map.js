function updateMarker() {
  fetch("https://coronavirus-tracker-api.herokuapp.com/confirmed")
    .then((response) => response.json())
    .then((rsp) => {
      rsp.locations.forEach((items) => {
        let latitude = items.coordinates.lat;
        let longitude = items.coordinates.long;
      });

      new mapboxgl.Marker({
        draggable: false,
      })
        .setLngLat([longitude, latitude])
        .addTo(map);
    });
}

updateMarker();
