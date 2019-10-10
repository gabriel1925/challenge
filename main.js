var lat=-32.902530;
var lon=-68.878391;
// inicio los controles
var mymap = L.map('mapid').setView([lat, lon], 13);
// los mosaicos iniciales
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoiZ2FicmllbDE5MjUiLCJhIjoiY2sxaGlzbXVqMDd5bDNicGs1d2x0Y2h5MiJ9.k3AyJEXdfRX7Ai5MdXGasQ'
}).addTo(mymap);
// var marker = L.marker([lat,lon]).addTo(mymap);
// marker.bindPopup("<b>hola soy un popup</b><br />Estoy bien chido");
function agregar(){
	// tomo todos los valores del form
	var descripcion = document.getElementById("descripcion-map").value;
	var direccion = document.getElementById("direccion-map").value;
	var telefono = document.getElementById("telefono-map").value;
	var longitud = document.getElementById("longitud-map").value;
	var latitud = document.getElementById("latitud-map").value;
	var categoria = document.getElementById("categoria-map").value;
	// hago validacion de que no esten vacios

	if (descripcion==""){
		alert("colocar descripcion");
	}else{
		if (direccion=="") {
			alert("colocar direccion");
		}else{
			if (telefono="") {
				alert("colocar telefono");
			}else{
				// inicio en la latitud y longitud colocada en el form
				this.mymap.setView([latitud, longitud], 13);
				// tuve que iniciar los mosaicos de vuelta
				L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
					attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
					maxZoom: 18,
					id: 'mapbox.streets',
					accessToken: 'pk.eyJ1IjoiZ2FicmllbDE5MjUiLCJhIjoiY2sxaGlzbXVqMDd5bDNicGs1d2x0Y2h5MiJ9.k3AyJEXdfRX7Ai5MdXGasQ'
				}).addTo(mymap);

				// agregamos los marcadores

				var marker = this.L.marker([latitud,longitud]).addTo(mymap);
				marker.bindPopup("<h2>("+latitud+","+longitud+")</h2><h3>"+direccion+"</h3><h3>"+descripcion+"</h3><h3>"+telefono+"</h3>"+"<h3>"+categoria+"</h3>").openPopup();
				console.log(marker);
			}
		}
	}
}
// capturo la longitud y latitud de los click dados en el mapa
function capturalatlng(e) {
	// console.log(e);
	console.log(e)
	var longi = document.getElementById("longitud-map");
	var lati = document.getElementById("latitud-map");
	longi.value=trunc(e.latlng.lng,4);
	lati.value=trunc(e.latlng.lat,4);


}

mymap.on('click', capturalatlng);

// truncando numeros para que evitar errores 
function trunc (x, posiciones = 0) {
  var s = x.toString();
  var l = s.length;
  var decimalLength = s.indexOf('.') + 1;
  var numStr = s.substr(0, decimalLength + posiciones);
  return Number(numStr);
}
