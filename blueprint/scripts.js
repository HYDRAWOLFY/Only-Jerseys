const products = [
    {
        name: "East Bengal Jersey / Home Kit",
        price: "₹250",
        image: "images/jersey-eastbengal.jpg",
        sizes: ["S", "M", "L", "XL"],
        },
        {
        name: "Real Madrid Jersey / Home Kit",
        price: "₹300",
        image: "images/jersey-realmadrid.jpg",
        sizes: ["S", "M", "L", "XL"],
        },
        {
        name: "Inter Miami Jersey / Home Kit",
        price: "₹500",
        image: "images/jersey-intermiami.jpg",
        sizes: ["S", "M", "L", "XL"],
        },
        {
        name: "Barcelona Retro Home Kit",
        price: "₹300",
        image: "images/jersey-barcelona.jpg",
        sizes: ["S", "M", "L", "XL"],
        },
        {
        name: "Mohun Bagan Jersey / Home Kit",
        price: "₹300",
        image: "images/jersey-mohunbagan.jpg",
        sizes: ["S", "M", "L", "XL"],
        },
      ];

    const productList = document.getElementById("product-list");

    const whatsappNumber = "917890211923"; // e.g., 919876543210

    products.forEach((p) => {
        const div = document.createElement("div");
        div.classList.add("product");

        let sizeOptions = "";
        let safeId = "";
        if (p.sizes) {
          safeId = `size-${p.name.replace(/\s|\/|-/g, "-")}`;
          sizeOptions = `
          <label for="${safeId}">Size:</label>
          <select id="${safeId}">
            ${p.sizes
              .map((size) => `<option value="${size}">${size}</option>`)
              .join("")}
          </select>
        `;
        }

        div.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        ${sizeOptions}
        <button class="buy-btn">Buy Now</button>
      `;

        div.querySelector(".buy-btn").addEventListener("click", () => {
          const size = safeId ? document.getElementById(safeId).value : "";
          const message = `Hi! I want to buy the ${p.name} ${
            size ? "(" + size + ")" : ""
          } priced at ${p.price}.`;
          const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            message
          )}`;
          window.open(url, "_blank");
        });

        productList.appendChild(div);
      });
 