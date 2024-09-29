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

document.querySelector('.dropdown').addEventListener('click', function () {
    this.classList.toggle('active');
});

// Seleccionamos los botones de confirmación y de pagar
const confirmBtn = document.querySelector('.confirm-btn');
const payBtn = document.querySelector('.pay-btn');

// Añadimos un evento de clic al botón de confirmación
confirmBtn.addEventListener('click', function () {
    // Cambia el estilo del botón de confirmación
    this.classList.toggle('active');
    // Habilita el botón de pagar y cambia su estilo
    if (this.classList.contains('active')) {
        payBtn.classList.add('active');
        payBtn.disabled = false;
    } else {
        payBtn.classList.remove('active');
        payBtn.disabled = true;
    }
});

// Añadimos un evento de clic al botón de pagar
payBtn.addEventListener('click', function () {
    if (payBtn.classList.contains('active')) {
        // Redirige a otra página, por ejemplo, página de confirmación de pago
        window.location.href = 'pagina-confirmacion.html';
    }
});
s

