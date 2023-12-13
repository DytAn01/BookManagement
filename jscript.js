//------------------------------User-----------------------------------------------------
// Sử dụng JavaScript để ẩn sub-user khi click ra ngoài
/*document.addEventListener('click', function (e) {
    var userMenu = document.querySelector('.user-menu');
    if (!userMenu.contains(e.target)) {
        var subUser = document.querySelector('.sub-user');
        subUser.style.display = 'none';
    }
});

// Hiển thị/ẩn sub-user khi click vào user-icon
document.querySelector('.user-icon').addEventListener('click', function (e) {
    e.preventDefault(); // Ngăn chặn mặc định của thẻ a
    var subUser = document.querySelector('.sub-user');
    subUser.style.display = subUser.style.display === 'block' ? 'none' : 'block';
});

*/
//------------------------------Validate Form--------------------------------------------------------

function openForm(formId) {
    document.getElementById(formId).style.left = '50%';
    document.querySelector('.overlay').style.display = 'block';
}

function closeForm(formId) {
    document.getElementById(formId).style.left = '-100%';
    document.querySelector('.overlay').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    var userIcon = document.getElementById("userIcon");
    var subUser = document.getElementById("subUser");
    var loginButton = document.getElementById("loginButton");
    var registerButton = document.getElementById("registerButton");
    var validateContainer = document.querySelector(".validate-container");
    var signUpContainer = document.getElementById("registerForm");
    var signInContainer = document.getElementById("loginForm");

    userIcon.addEventListener("click", function (event) {
        // Ngăn chặn sự kiện click lan ra các phần tử khác
        event.stopPropagation();

        subUser.style.display = "none"; // Ẩn subUser khi click vào userIcon
        hideFormContainer(validateContainer);
        hideFormContainer(signUpContainer);
        hideFormContainer(signInContainer);
    });

    function showFormContainer(formContainer) {
        formContainer.style.left = "50%"; // Move the form to the center
        formContainer.style.transform = "translate(-50%, -50%)";
        document.querySelector('.overlay').style.display = 'block';
        formContainer.classList.add("show");
    }

    function hideFormContainer(formContainer) {
        formContainer.classList.remove("show");
        setTimeout(function () {
            formContainer.style.left = '-100%'; // Move the form off-screen
            document.querySelector('.overlay').style.display = 'none';
        }, 300); // Đảm bảo kết thúc hiệu ứng trước khi ẩn form
    }

    loginButton.addEventListener("click", function () {
        hideFormContainer(signUpContainer);
        showFormContainer(signInContainer);
    });

    registerButton.addEventListener("click", function () {
        hideFormContainer(signInContainer);
        showFormContainer(signUpContainer);
    });

    var closeButtons = document.querySelectorAll(".closeBtn");

    closeButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.stopPropagation();
            var formContainer = this.closest(".form-container");
            hideFormContainer(formContainer);
        });
    });

    // Đóng form đăng nhập/đăng ký khi click bất kỳ nơi nào trên trang
    document.addEventListener("click", function () {
        hideFormContainer(validateContainer);
        hideFormContainer(signUpContainer);
        hideFormContainer(signInContainer);
    });
});


//------------------------------Product------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const productContainer = document.getElementById("productContainer");
  const sortProducts = document.getElementById("sortProducts");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const categoryLinks = document.querySelectorAll(".cartegory-left-li a");
  const itemsPerPage = 9; // Số sản phẩm mỗi trang
  let currentPage = 1; // Trang hiện tại
  const products = [
    {
      id: "001",
      name: "Cà phê đen",
      type: "cafe",
      price: "29.000",
      image: "5x5/CF Đen.png",
    },
    {
      id: "002",
      name: "Cà phê sữa",
      type: "cafe",
      price: "35.000",
      image: "5x5/NA.jpg",
    },
    {
      id: "003",
      name: "Cà phê trứng",
      type: "cafe",
      price: "59.000",
      image: "5x5/NA.jpg",
    },
    {
      id: "004",
      name: "Cà phê sữa dừa",
      type: "cafe",
      price: "45.000",
      image: "5x5/CF Sữa dừa.png",
    },
    {
      id: "005",
      name: "Cà phê sữa tươi",
      type: "cafe",
      price: "39.000",
      image: "5x5/NA.jpg",
    },
    {
      id: "006",
      name: "Cacao",
      type: "cafe",
      price: "49.000",
      image: "5x5/Cacao.png",
    },
    {
      id: "007",
      name: "Matcha Latte",
      type: "cafe",
      price: "49.000",
      image: "5x5/Matcha Latte.png",
    },
    {
      id: "008",
      name: "Americano",
      type: "cafe",
      price: "39.000",
      image: "5x5/CF Đen.png",
    },
    {
      id: "009",
      name: "Espresso",
      type: "cafe",
      price: "39.000",
      image: "5x5/Na.jpg",
    },
    {
      id: "010",
      name: "Cappuccino",
      type: "cafe",
      price: "59.000",
      image: "5x5/CF Cappuccino.png",
    },
    {
      id: "011",
      name: "Latte",
      type: "cafe",
      price: "59.000",
      image: "5x5/CF Cappuccino.png",
    },
    {
      id: "012",
      name: "Blooming March(Táo-dâu-thơm)",
      type: "juice",
      price: "45.000",
      image: "5x5/NE Táo dâu thơm.png",
    },
    {
      id: "013",
      name: "Maybee(Táo-thơm-chanh dây)",
      type: "juice",
      price: "45.000",
      image: "5x5/NE Táo thơm chanh dây.png",
    },
    {
      id: "014",
      name: "Nước ép Chanh dây",
      type: "juice",
      price: "39.000",
      image: "5x5/NE Chanh dây.png",
    },
    {
      id: "015",
      name: "Nước ép Cam Hạt Chia",
      type: "juice",
      price: "39.000",
      image: "5x5/NE Cam tươi.png",
    },
    {
      id: "016",
      name: "Nước ép Táo",
      type: "juice",
      price: "39.000",
      image: "5x5/NE Táo.png",
    },
    {
      id: "017",
      name: "Nước ép Dưa Hấu",
      type: "juice",
      price: "39.000",
      image: "5x5/NE Dưa hấu.png",
    },
    {
      id: "018",
      name: "Nước ép Thơm",
      type: "juice",
      price: "39.000",
      image: "5x5/NE Thơm.png",
    },
    {
      id: "019",
      name: "Nước ép Dâu",
      type: "juice",
      price: "39.000",
      image: "5x5/NE Dâu.png",
    },
    {
      id: "020",
      name: "Sữa chua Dưa Lưới",
      type: "yogurt",
      price: "49.000",
      image: "5x5/SC Dưa lưới.png",
    },
    {
      id: "021",
      name: "Sữa chua Nha Đam",
      type: "yogurt",
      price: "39.000",
      image: "5x5/SC Nha đam.png",
    },
    {
      id: "022",
      name: "Sữa chua Ổi Hồng",
      type: "yogurt",
      price: "49.000",
      image: "5x5/SC Ổi hồng.png",
    },
    {
      id: "023",
      name: "Sữa chua Mâm Xôi",
      type: "yogurt",
      price: "49.000",
      image: "5x5/SC Mâm xôi.png",
    },
    {
      id: "024",
      name: "Sữa chua Xoài",
      type: "yogurt",
      price: "49.000",
      image: "5x5/SC Xoài.png",
    },
    {
      id: "025",
      name: "Trà Đào Dưa Lưới",
      type: "tea",
      price: "55.000",
      image: "5x5/T Đào dưa lưới.png",
    },
    {
      id: "026",
      name: "Trà Đào",
      type: "tea",
      price: "49.000",
      image: "5x5/T Đào.png",
    },
    {
      id: "027",
      name: "Trà Kiều Mạch Foam",
      type: "tea",
      price: "55.000",
      image: "5x5/T Kiều mạch foam.png",
    },
    {
      id: "028",
      name: "Trà Kiwi Hạt Chia",
      type: "tea",
      price: "49.000",
      image: "5x5/T Kiwi hạt chia.png",
    },
    {
      id: "029",
      name: "Trà Lài Búp Trắng",
      type: "tea",
      price: "45.000",
      image: "5x5/T Lài búp trắng foam.png",
    },
    {
      id: "030",
      name: "Trà Ổi Hồng Dưa Lưới",
      type: "tea",
      price: "55.000",
      image: "5x5/T Ổi hồng dưa lưới.png",
    },
    {
      id: "031",
      name: "Trà Ổi Hồng Thanh Long",
      type: "tea",
      price: "55.000",
      image: "5x5/T Ổi hồng thanh long.png",
    },
    {
      id: "032",
      name: "Trà Vải Nha Đam",
      type: "tea",
      price: "55.000",
      image: "5x5/T Vải nha đam.png",
    },
    {
      id: "033",
      name: "Trà sữa Bạc Hà",
      type: "tea",
      price: "55.000",
      image: "5x5/TS Bạc hà.png",
    },
    {
      id: "034",
      name: "Hồng Trà sữa Truyền Thống",
      type: "milktea",
      price: "55.000",
      image: "5x5/TS Hồng trà sữa truyền thống.png",
    },
    {
      id: "035",
      name: "Chanh Tuyết",
      type: "iceblended",
      price: "39.000",
      image: "5x5/ĐX Chanh tuyết.png",
    },
    {
      id: "036",
      name: "Chanh Tuyết Bạc Hà",
      type: "iceblended",
      price: "39.000",
      image: "5x5/ĐX Chanh tuyết bạc hà.png",
    },
    {
      id: "037",
      name: "Matcha Đá Xay",
      type: "iceblended",
      price: "55.000",
      image: "5x5/ĐX Matcha.png",
    },
    {
      id: "038",
      name: "Oreo Choco Đá Xay",
      type: "iceblended",
      price: "55.000",
      image: "5x5/ĐX Oreo choco.png",
    },
    {
      id: "039",
      name: "Phô Mai Chuối Đá Xay",
      type: "iceblended",
      price: "55.000",
      image: "5x5/ĐX Phô mai.png",
    },
  ];
  localStorage.setItem("products", JSON.stringify(products));
  let retrieveProductData = JSON.parse(localStorage.getItem("products"));
  console.log(retrieveProductData);
  // Hiển thị tất cả sản phẩm khi trang được tải
  showProducts(products);
  searchInput.addEventListener("input", function () {
    searchProducts();
  });
  function showSearchResults(results) {
    // Hiển thị kết quả tìm kiếm trong pop-up
    searchResults.innerHTML = "";

    if (results.length === 0) {
      searchResults.style.display = "none";
      return;
    }

    results.forEach((product) => {
      const resultItem = document.createElement("div");
      resultItem.className = "search-result-item";
      resultItem.textContent = product.name;

      resultItem.addEventListener("click", function () {
        // Xử lý khi người dùng chọn một kết quả tìm kiếm
        // Ở đây, bạn có thể chuyển hướng hoặc thực hiện hành động mong muốn
        alert(`Bạn đã chọn: ${product.name}`);
      });

      searchResults.appendChild(resultItem);
    });

    searchResults.style.display = "block";
  }

  function searchProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );
    showSearchResults(filteredProducts);
  }

  // Đóng pop-up khi click bất kỳ nơi nào trên trang
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".search-bar")) {
      searchResults.style.display = "none";
    }
  });

  function createProductElement(product) {
    const productElement = document.createElement("div");
    productElement.className = "product";

    productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h1>${product.name}</h1>
            <p>${product.price}</p>
            <button onclick="showProductDetail('${product.name}', '${product.price}', '${product.image}')">Xem chi tiết</button>
        `;

    return productElement;
  }
  ///////Sản phẩm theo danh mục
  const productsInLocalStorage = JSON.parse(localStorage.getItem('products')) || [];

  // Thêm sự kiện click cho mỗi liên kết danh mục
  categoryLinks.forEach(link => {
      link.addEventListener('click', function (event) {
          event.preventDefault();

          const selectedCategory = this.dataset.category;

          // Lọc sản phẩm từ Local Storage theo danh mục được chọn
          const productsInCategory = productsInLocalStorage.filter(product => product.type === selectedCategory);

          // Gọi hàm để hiển thị sản phẩm thuộc danh mục được chọn
          showProducts(productsInCategory);
      });
  });

  // Hàm hiển thị danh sách sản phẩm
  function showProducts(productsToShow) {
      // Xóa nội dung hiện tại trong container
      productContainer.innerHTML = '';

      // Hiển thị sản phẩm thuộc danh mục được chọn
      productsToShow.forEach(product => {
          const productElement = createProductElement(product);
          productContainer.appendChild(productElement);
      });
      console.log('Sản phẩm hiển thị:', productsToShow);
  }

  // Hàm tạo phần tử sản phẩm
  function createProductElement(product) {
      const productElement = document.createElement('div');
      productElement.className = 'product';
      productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h1>${product.name}</h1>
          <p>${product.price}</p>
          <button onclick="showProductDetail('${product.name}', '${product.price}', '${product.image}')">Xem chi tiết</button>
      `;
      return productElement;
  }

  // Hàm hiển thị chi tiết sản phẩm (bạn có thể thực hiện theo nhu cầu của bạn)
  function showProductDetail(name, price, image) {
      alert(`Tên: ${name}\nGiá: ${price}\nẢnh: ${image}`);
  }
////////////////////////////////////////////////////////////////
  function showProducts(productsToShow) {
    // Xóa các sản phẩm hiện tại trong container
    productContainer.innerHTML = "";

    // Hiển thị các sản phẩm trên trang
    productsToShow.forEach((product) => {
      const productElement = createProductElement(product);
      productContainer.appendChild(productElement);
    });
  }

  function createProductElement(product) {
    const productElement = document.createElement("div");
    productElement.className = "product";

    productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <p>${product.type}</p>
        `;

    return productElement;
  }

  // Hiển thị tất cả sản phẩm khi trang được tải
  showProducts(products);
  console.log(showProducts);

  // Lắng nghe sự kiện khi thay đổi sắp xếp
  sortProducts.addEventListener("change", function () {
    const selectedOption = sortProducts.value;
    const sortedProducts = sortProductsList(products, selectedOption);
    showProducts(sortedProducts);
  });
  function showSearchResults(results) {
    // Hiển thị kết quả tìm kiếm trong pop-up
    searchResults.innerHTML = "";

    if (results.length === 0) {
      searchResults.style.display = "none";
      return;
    }

    results.forEach((product) => {
      const resultItem = document.createElement("div");
      resultItem.className = "search-result-item";
      resultItem.textContent = product.name;

      resultItem.addEventListener("click", function () {
        // Xử lý khi người dùng chọn một kết quả tìm kiếm
        // Ở đây, bạn có thể chuyển hướng hoặc thực hiện hành động mong muốn
        alert(`Bạn đã chọn: ${product.name}`);
      });

      searchResults.appendChild(resultItem);
    });

    searchResults.style.display = "block";
  }

  function searchProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );
    showSearchResults(filteredProducts);
  }

  // Đóng pop-up khi click bất kỳ nơi nào trên trang
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".search-bar")) {
      searchResults.style.display = "none";
    }
  });
  // Hàm hiển thị danh sách sản phẩm
  function showProducts(productsToShow) {
    // Xóa nội dung hiện tại trong container
    productContainer.innerHTML = "";

    // Tính chỉ số bắt đầu và kết thúc của sản phẩm trên trang hiện tại
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Hiển thị từng sản phẩm trong phạm vi trang hiện tại
    const productsToDisplay = productsToShow.slice(startIndex, endIndex);
    productsToDisplay.forEach((product) => {
      const productItem = document.createElement("div");
      productItem.className = "cartegory-right-content-item";

      productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h1>${product.name}</h1>
                <p>${product.price}</p>
                <button class="addToCartBtn">Thêm vào giỏ hàng</button>
            `;

      productContainer.appendChild(productItem);
    });

    // Hiển thị phân trang
    displayPagination(Math.ceil(productsToShow.length / itemsPerPage));
  }

  // Hàm sắp xếp danh sách sản phẩm
  function sortProductsList(productsToSort, sortBy) {
    if (sortBy === "highToLow") {
      return productsToSort.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
    } else if (sortBy === "lowToHigh") {
      return productsToSort.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
    } else {
      return productsToSort;
    }
  }

  // Hàm hiển thị phân trang
  function displayPagination(totalPages) {
    const paginationContainer = document.getElementById("paginationContainer");
    paginationContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
      const pageItem = document.createElement("span");
      pageItem.textContent = i;
      pageItem.className =
        i === currentPage ? "pagination-button active" : "pagination-button";

      pageItem.addEventListener("click", function () {
        currentPage = i;
        // Gọi hàm hiển thị sản phẩm với chỉ số bắt đầu và kết thúc tương ứng với trang hiện tại
        showProducts(products);
      });

      paginationContainer.appendChild(pageItem);
    }
  }
});

let productsInLocalStorage = JSON.parse(localStorage.getItem("products")) || [];

//Giỏ hàng
document.addEventListener("DOMContentLoaded", function () {
  const cartIcon = document.getElementById("cartIcon");
  const cartCount = document.getElementById("cartCount");
  const addToCartBtns = document.querySelectorAll(".addToCartBtn");
  const cartContainer = document.getElementById("cartContainer");
  const closeCartBtn = document.querySelector(".closeBtn");
  const overlay = document.querySelector(".overlay");
  const cartContent = document.getElementById("cartContent");

  // Initialize cart count from local storage
  updateCartCount();

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  // Add click event to each "Add to Cart" button
  addToCartBtns.forEach((btn) => {
    btn.addEventListener("click", handleAddToCart);
  });

  // Add click event to open the cart
  cartIcon.addEventListener("click", showCart);

  // Add click event to close the cart
  closeCartBtn.addEventListener("click", hideCart);

  // Function to handle "Add to Cart" button click
  function handleAddToCart() {
    // Get product details from the clicked button's parent element
    const product = this.parentElement;
    const productId = product.dataset.id;
    const productName = product.dataset.name;
    const productPrice = parseFloat(product.dataset.price);
    const productImageURL = product.dataset.imageurl;

    // Add product to cart (in this example, we're using local storage)
    addToCart(productId, productName, productPrice, productImageURL);

    // Update cart count and display
    updateCartCount();

    updateCartContent();
  }
  let productsInLocalStorage =
    JSON.parse(localStorage.getItem("products")) || [];

  // Function to add a product to the cart
  function addToCart(id, name, price, imageURL) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.id === id);

    if (existingProduct) {
      // If the product is already in the cart, increase its quantity
      existingProduct.quantity += 1;
    } else {
      // If the product is not in the cart, add it
      cart.push({ id, name, price, quantity: 1, imageURL });
    }

    // Save the updated cart back to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // Function to update the cart count and display
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalCount;
  }

  function updateCartContent() {
    cartContent.innerHTML = "";

    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";
      cartItem.innerHTML = `
                <img src="${item.imageURL}" alt="${item.name}">
                <div>
                    <h3>${item.name}</h3>
                    <p>${item.price}</p>
                    <p>Quantity: ${item.quantity}</p>
                </div>
            `;
      cartContent.appendChild(cartItem);
    });
  }
  // Function to show the cart
  function showCart() {
    cartContainer.style.right = "0"; // Move the cart to the right
    overlay.style.display = "block";
  }

  // Function to hide the cart
  function hideCart() {
    cartContainer.style.right = "-1000px"; // Move the cart off-screen
    overlay.style.display = "none"; // Hide overlay
  }
  function showCloseButton() {
    closeCartBtn.style.display = "block";
  }

  // Function to hide the close button
  function hideCloseButton() {
    closeCartBtn.style.display = "none";
  }
  document.addEventListener("click", function (event) {
    if (!cartContainer.contains(event.target) && event.target !== cartIcon) {
      hideCart();
    }
  });
});
