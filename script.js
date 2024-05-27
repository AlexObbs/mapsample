// Initialize the map
var map = L.map('map').setView([20, 0], 2);  // Center at latitude 20, longitude 0

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add country name labels using tooltips
var countries = [
    { coords: [51.505, -0.09], name: 'United Kingdom' },
    { coords: [40.7128, -74.0060], name: 'United States' },
    { coords: [41.726931, -49.948253], name: 'North Atlantic Ocean' }  // Approximate location of the Titanic wreck
];

countries.forEach(function(country) {
    L.marker(country.coords, { opacity: 0 }).addTo(map)  // Invisible marker for country name
        .bindTooltip(country.name, { permanent: true, direction: 'center', className: 'country-label' }).openTooltip();
});

// Add clickable points with labels and popups
var points = [
    { coords: [51.505, -0.09], article: 'https://en.wikipedia.org/wiki/London', label: 'London' },
    { coords: [40.7128, -74.0060], article: 'https://en.wikipedia.org/wiki/New_York_City', label: 'New York City' },
    { coords: [41.726931, -49.948253], article: 'https://en.wikipedia.org/wiki/Wreck_of_the_RMS_Titanic', label: 'Titanic Wreck' }  // Approximate coordinates of the Titanic wreck
];

points.forEach(function(point) {
    var marker = L.marker(point.coords).addTo(map);
    marker.bindTooltip(point.label, { permanent: true, direction: 'right' }).openTooltip();
    marker.bindPopup('<a href="' + point.article + '" target="_blank">Read Article</a>');
});

// Add lines indicating routes
var routes = [
    [[51.505, -0.09], [40.7128, -74.0060]],  // Example route from London to New York
    [[40.7128, -74.0060], [41.726931, -49.948253]]  // Example route from New York to Titanic Wreck
];

routes.forEach(function(route) {
    L.polyline(route, { color: 'blue' }).addTo(map);
});
