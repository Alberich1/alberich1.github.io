document.addEventListener('DOMContentLoaded', function() {
    var map2 = L.map('map2').setView([34.0091, -84.35867], 18);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map2);

    var marker2 = L.marker([34.0091, -84.35867]).addTo(map2);
    marker2.bindPopup("Details for Map 2.");
});
