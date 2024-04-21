document.addEventListener('DOMContentLoaded', function() {
    var map3 = L.map('map3').setView([32.0703, -81.09641], 19);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map3);

    var marker3 = L.marker([32.0703, -81.09641]).addTo(map3);
    marker3.bindPopup("Details for Map 3.");
});
