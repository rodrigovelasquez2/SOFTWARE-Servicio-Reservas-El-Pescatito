document.addEventListener("DOMContentLoaded", () => {
  const reservationForm = document.getElementById("reservationForm");
  const reservationsTableBody = document.querySelector("#reservationsTable tbody");
  const reservedSeatsContainer = document.getElementById("reservedSeatsContainer");

  reservationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const seats = document.getElementById("seats").value;

    // Assign a random color for each reservation
    const reservationColor = getRandomColor();

    // Create a new row in the reservations table
    const newRow = reservationsTableBody.insertRow();
    newRow.innerHTML = `<td>${reservationsTableBody.rows.length + 1}</td>
                        <td>${name}</td>
                        <td>${email}</td>
                        <td>${seats}</td>
                        <td><div class="reservation-color" style="background-color: ${reservationColor};"></div></td>`;

    // Create a reserved seat icon
    const reservedSeat = document.createElement("div");
    reservedSeat.className = "reserved-seat";
    reservedSeat.style.backgroundColor = reservationColor;
    reservedSeat.addEventListener("click", () => showReservationDetails(name, email, seats, reservationColor));
    reservedSeatsContainer.appendChild(reservedSeat);

    // Clear the form
    reservationForm.reset();
  });

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function showReservationDetails(name, email, seats, color) {
    alert(`Detalles de la Reserva:
    Nombre: ${name}
    Correo: ${email}
    Número de Mesa: ${seats}
    Color: ${color}`);
  }
});
