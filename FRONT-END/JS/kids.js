let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll(".add-to-cart").forEach(button => {

  button.addEventListener("click", () => {

    const name = button.dataset.name;
    const price = button.dataset.price;
    const image = button.dataset.image;

    const product = {
      name,
      price: Number(price),
      image,
      quantity: 1
    };

    const existing = cart.find(item => item.name === name);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart ✅");
  });

});