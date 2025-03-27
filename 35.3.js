const products = [
  {
    id: 1,
    name: "Laptop Dell XPS 15",
    price: 35990000,
    image:
      "https://th.bing.com/th/id/R.dd66a48254aca2d1e37b8887993a100c?rik=Ileg6QdLFs2iTA&pid=ImgRaw&r=0",
    description:
      "Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.",
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 Ultra",
    price: 2899000,
    image:
      "https://th.bing.com/th/id/OIP.n5ZE0e4C910Ed2cLhNKjPAHaEK?rs=1&pid=ImgDetMain",
    description:
      "Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.",
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    price: 119900,
    image:
      "https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all",
    description:
      "Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.",
  },
  {
    id: 6,
    name: "Loa JBL Charge 5",
    price: 39900,
    image:
      "https://th.bing.com/th/id/OIP.kNp66Lw41hQJBWsxrddSZQHaHa?rs=1&pid=ImgDetMain",
    description: "Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.",
  },
];
localStorage.setItem(`products`, JSON.stringify(products));

function renderProducts(renderProducts = products) {
  let productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = "";
  renderProducts.forEach((item) => {
    productsContainer.innerHTML += `<div class="col">
                      <div class="card">
                          <img src="${item.image}"
                              class="card-img-top" alt="Laptop Dell XPS 15">
                          <div class="card-body">
                              <h5 class="card-title">${item.name}</h5>
                              <p class="card-text">${item.description}</p>
                              <p><strong>${item.price} VND</strong></p>
                              <button class="btn btn-primary">Buy</button>
                          </div>
                      </div>
                </div>`;
  });
}

function searchProducts() {
  let input = document.getElementById("input").value;
  let searchProducts = products.filter((item) => item.name.includes(input));
  renderProducts(searchProducts);
}
renderProducts();
