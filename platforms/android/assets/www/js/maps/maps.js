function getDirectionsFromCurrentLocation(destination, travelMode){
	if (navigator.geolocation){
		console.log("Geolocation is supported");
		navigator.geolocation.getCurrentPosition(function(position){
			console.log("Current position is: " + position);
			var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			console.log("Current position is: " + pos);
			getDirections(pos, destination, travelMode);
		},
		function(error){
			console.log("Error retrieving geolocation: " + error.message + "(" + error.code + ")");
		});
	}
	else{
		// Browser does not support geolocation
		console.log("Browser does not support geolocation");
	}
}

function getDirections(origin, destination, travelMode){
	var bounds = new google.maps.LatLngBounds();
	bounds.extend(origin);
	bounds.extend(destination);
	var directionsService = new google.maps.DirectionsService();
	
	if (!travelMode){
		travelMode = google.maps.TravelMode.DRIVING;
	}
	console.log("Trying to get directions from " + origin + " to " + destination);
	// Assign map to directions renderer object 
	directionsDisplay = new google.maps.DirectionsRenderer();
	map = new google.maps.Map(document.getElementById("map-canvas"));
	directionsDisplay.setMap(map);
  
	var request = {
		origin: origin,
		destination: destination,
		travelMode: travelMode
	};
	
	
	directionsService.route(request, function(result, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(result);
		}
	});

	var centerPos = new google.maps.LatLng((origin.lat() + destination.lat()) / 2, (origin.lng() + destination.lng()) / 2)
	console.log("origin.lat() is: " + origin.lat());
	console.log("centerPos is: " + centerPos);
	
	// Resize the map as soon it is fully loaded
	google.maps.event.addListenerOnce(map, "idle", function(){
		google.maps.event.trigger(map, 'resize');
		map.fitBounds(bounds);
		$("#map-loading").hide();
	})
}

function showMap(container, latitude, longitude, markerText){
	
	var latLng = new google.maps.LatLng(latitude, longitude);
	var containerId = container.attr('id');
	console.log("showing map at " + latLng + " with text " + markerText + " in container " + containerId);
	
	// Set map options
	var mapOptions = {
		center: latLng,
		mapTypeId: google.maps.MapTypeId.HYBRID,
		scrollwheel: false,
		zoom: 14
	};
	
	// map has been declared globally
	map = new google.maps.Map(container[0], mapOptions);
	
		// Resize the map as soon it is fully loaded
	google.maps.event.addListenerOnce(map, "idle", function(){
		// Trigger resize event and set position again in order to display the map correctly on mobile devices
		google.maps.event.trigger(map, 'resize');
		map.setCenter(latLng);
		// Define and show marker
		marker = new google.maps.Marker({ 
			position: map.getCenter(),
			map: map,
			title: markerText
		});
		// Define info window
		infoWindow = new google.maps.InfoWindow({
			//map: map,
			//position: map.getCenter(),
			content: "<div>" + markerText + "</div>"
		});
		// Add click event handler in order to show the info window when a users click/taps the marker
		google.maps.event.addListener(marker, "click", function(){
			infoWindow.open(map, marker);
		});
		$("#map-loading").hide();
	})
	
	// This is the jQuery UI Map Plugin stuff that we do not really need...
	//'addMarker', { 'position': latLng, 'bounds': true }
//	container.gmap(mapOptions).click(function () {
//		$('#' + containerId).gmap('openInfoWindow', { 'content': markerText }, this);
//    });
	// Refresh the map in order to render it correctly
//	container.gmap('refresh');
}