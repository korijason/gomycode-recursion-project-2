function ticketPrice(age) {
  if (age <= 12) return 10;
  if (age >= 13 && age <= 17) return 15;
  if (age >= 18) return 20;
}

function calculateTicketPrice() {
  const age = document.getElementById("ageInput").value;
  const price = ticketPrice(age);
  document.getElementById(
    "ticketPriceResult"
  ).innerText = `Your ticket price is $${price}.`;
}
