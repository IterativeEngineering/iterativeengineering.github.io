// window.addEventListener('DOMContentLoaded', loadMap);

function loadMap() {
    var officeCoords = [50.305302, 18.771026];
    var map = L.map('footer-map', {zoomControl: false}).setView(officeCoords, 6);
    var myIcon = L.icon({
        iconUrl: 'assets/leaflet/images/marker-icon.png',
        iconSize: [32, 37],
    });
    L.tileLayer("https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png", {
        maxZoom: 18,
        attribution: '© <a href="http://maps.stamen.com" target="_blank">Stamen</a>, © <a href="https://www.openstreetmap.org" target="_blank">OSM</a>',
        id: "mapbox.streets"
    }).addTo(map),
    L.marker(officeCoords, { icon: myIcon }).addTo(map);
    map._handlers.forEach(function(handler) {
        handler.disable();

    });
}