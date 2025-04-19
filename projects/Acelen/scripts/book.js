document.addEventListener("DOMContentLoaded", () => {

    const clinicSelection = document.getElementById("clinic");

    const clinic1 = { address: "Acelen Clinic Mawson Lakes", coords: [-34.809790, 138.616930], select: "clinic1" };
    const clinic2 = { address: "Acelen Clinic Parafield Gardens", coords: [-34.791160, 138.615940], select: "clinic2" };

    // Initialize the map (from open street map)
    const tileLayerLink = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const map = L.map('map').setView(clinic1.coords, 16);

    //OSM tile layer
    L.tileLayer(tileLayerLink, {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    //on hover event for displaying markers
    openPop = (event) => {
        event.target.openPopup();
    }
    closePop = (event) => {
        event.target.closePopup();
    }

    //clinic 1 marker
    const clinic1Marker = L.marker(clinic1.coords).addTo(map);
    clinic1Marker.bindPopup(`<b>${clinic1.address}</b>`);
    clinic1Marker.on("mouseover", openPop);
    clinic1Marker.on("mouseout", closePop);

    //clinic 2 marker
    const clinic2Marker = L.marker(clinic2.coords).addTo(map);
    clinic2Marker.bindPopup(`<b>${clinic2.address}</b>`);
    clinic2Marker.on("mouseover", openPop);
    clinic2Marker.on("mouseout", closePop);

    //selection on change event listener
    clinicSelection.addEventListener("change", (event) => {
        if (event.target.value === clinic1.select) {
            map.setView(clinic1.coords, 16);
        } else if (event.target.value === clinic2.select) {
            map.setView(clinic2.coords, 16);
        } else {
            console.log("cant find the address matey mate")
        }

    })


});

//form submit (currently set to prevent default event and display alert)
document.getElementById('BookingForm').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thankyou, we will get back to you shortly.');
});