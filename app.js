const seatingMap = document.getElementById('seating-map');

// Mapa de asientos generado dinámicamente (ejemplo de 4 filas y 10 columnas)
const rows = 4;
const cols = 10;

// Función para generar los asientos en el DOM
function generateSeatingMap() {
    seatingMap.innerHTML = '';  // Limpiar el mapa actual

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const seatElement = document.createElement('div');
            seatElement.classList.add('seat', 'libre'); // Todos los asientos inician como "libres"
            seatElement.setAttribute('data-row', i);
            seatElement.setAttribute('data-seat', j);

            // Hacer que los asientos "libres" sean seleccionables
            seatElement.addEventListener('click', function () {
                this.classList.toggle('selected');
            });

            seatingMap.appendChild(seatElement);
        }
    }
}

// Inicialización del mapa de asientos
generateSeatingMap();

document.getElementById('confirmar').addEventListener('click', function() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    if (selectedSeats.length > 0) {
        alert(`Has seleccionado ${selectedSeats.length} asiento(s).`);
    } else {
        alert("No has seleccionado ningún asiento.");
    }
});




