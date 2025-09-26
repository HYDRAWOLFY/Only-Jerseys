const whatsappNumber = "917449553359"; // your WhatsApp number

document.querySelectorAll(".buybtn").forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // stop default empty link

    const name = this.getAttribute("data-name");

    const message = `Hello! I want to order:\n\nProduct: ${name}`;
    const encodedMessage = encodeURIComponent(message);

    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Redirect
    window.open(url, "_blank");
  });
});
