var lat=-32.902530;
var lon=-68.878391;

var mymap = L.map('mapid').setView([lat, lon], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoiZ2FicmllbDE5MjUiLCJhIjoiY2sxaGlzbXVqMDd5bDNicGs1d2x0Y2h5MiJ9.k3AyJEXdfRX7Ai5MdXGasQ'
}).addTo(mymap);
// var marker = L.marker([lat,lon]).addTo(mymap);
// marker.bindPopup("<b>hola soy un popup</b><br />Estoy bien chido");
function agregar(){
var descripcion = document.getElementById("descripcion-map").value;
var direccion = document.getElementById("direccion-map").value;
var telefono = document.getElementById("telefono-map").value;
var longitud = document.getElementById("longitud-map").value;
var latitud = document.getElementById("latitud-map").value;
var categoria = document.getElementById("categoria-map").value;

this.mymap.setView([latitud, longitud], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoiZ2FicmllbDE5MjUiLCJhIjoiY2sxaGlzbXVqMDd5bDNicGs1d2x0Y2h5MiJ9.k3AyJEXdfRX7Ai5MdXGasQ'
}).addTo(mymap);

var marker = L.marker([latitud,longitud]).addTo(mymap);
marker.bindPopup("<h2>("+latitud+","+longitud+")</h2><br /><h3>"+direccion+"</h3><br /><h3>"+descripcion+"</h3><br /><h3>"+telefono+"</h3>"+"<br /><h3>"+categoria+"</h3>");
}
var popup = L.popup();
// capturo la longitud y latitud
function capturalatlng(e) {
	// console.log(e);
	var longi = document.getElementById("longitud-map");
	var lati = document.getElementById("latitud-map");
	longi.value=trunc(e.latlng.lng,5);
	lati.value=trunc(e.latlng.lat,5);

}


mymap.on('click', capturalatlng);

// truncando numeros
function trunc (x, posiciones = 0) {
  var s = x.toString()
  var l = s.length
  var decimalLength = s.indexOf('.') + 1
  var numStr = s.substr(0, decimalLength + posiciones)
  return Number(numStr)
}
