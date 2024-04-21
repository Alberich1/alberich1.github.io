document.addEventListener('DOMContentLoaded', function() {
    var map1 = L.map('map1').setView([34.24856, -83.81467], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map1);

    var marker1 = L.marker([34.24856, -83.81467]).addTo(map1);
    marker1.bindPopup("Details for Map 1.");
});
