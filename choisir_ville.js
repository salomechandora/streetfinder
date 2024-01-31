var mymap = L.map('mapid').setView([46.875378329598036, 2.565228180873064], 6);
layer=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', maxZoom: 22, maxNativeZoom :19,
}).addTo(mymap);


var LyonIcon = L.icon({
    iconUrl: 'Blason_Ville_fr_Lyon.svg',
    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
});

var RennesIcon = L.icon({
    iconUrl: 'Blason_Ville_fr_Rennes.svg',
    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
});

L.marker([45.75728373443727, 4.849433898925782], {icon: LyonIcon}).addTo(mymap)
    .bindPopup('<button onclick="choisir_Lyon">Choisir Lyon</button>')
    .openPopup();

L.marker([48.11105621460431, -1.676739113603782], {icon: RennesIcon}).addTo(mymap)
    .bindPopup('<button onclick="choisir_Rennes">Choisir Rennes</button>')
    .openPopup();

function choisir_Lyon(){
    localStorage.setItem("lieu", "Lyon");
    document.location.href = "./retrouver_les_rues.html";
}

function choisir_Rennes(){
    localStorage.setItem("lieu", "Rennes");
    document.location.href = "./retrouver_les_rues.html";
}