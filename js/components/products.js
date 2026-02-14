let productWrapper = document.getElementById("productWrapper");
let popupWrapper = document.querySelector(".popup-wrapper");
// let popupContent = document.querySelector(".popup-content");

let listOfproducts = [
  {
    id: 1,
    name: "Orange Wide Leg",
    price: "980,00€",
    description:
      "This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.",
    variants: ["Red", "Black"],
    image: "assets/product-1.png",
  },
  {
    id: 2,
    name: "Tailored Jacket",
    price: "980,00€",
    description:
      "This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.",
    variants: ["Blue", "Black"],
    image: "assets/product-2.png",
  },

  {
    id: 3,
    name: "Accordion Pleated Dress",
    price: "980,00€",
    description:
      "This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.",
    variants: ["Green", "Black"],
    image: "assets/product-3.png",
  },
  {
    id: 4,
    name: "Green Trench Coat",
    price: "980,00€",
    description:
      "This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.",
    variants: ["Orange", "Black"],
    image: "assets/product-4.png",
  },
  {
    id: 5,
    name: "Tennis Blue T-Shirt",
    price: "980,00€",
    description:
      "This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.",
    variants: ["Blue", "Violet"],
    image: "assets/product-5.png",
  },
  {
    id: 6,
    name: "Long Sleeve Tennis Top",
    price: "980,00€",
    description:
      "This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.",
    variants: ["Pink", "Black"],
    image: "assets/product-6.png",
  },
];

let selectedProduct = null;

function getRandomNumber() {
  return Math.ceil(Math.random() * 40) + 40;
}

function renderProducts() {
  listOfproducts.forEach((product) => {
    let productCard = document.createElement("div");

    productCard.classList.add("product-card");

    let productImage = document.createElement("img");
    productImage.classList.add("product-image");
    productImage.src = product.image;
    productImage.alt = product.name;

    const randomTop = getRandomNumber();
    const randomLeft = getRandomNumber();

    let productPlusIcon = document.createElement("img");
    productPlusIcon.classList.add("product-plus-icon");
    productPlusIcon.src = "assets/plus-icon.png";
    productPlusIcon.alt = "plus-icon";
    productPlusIcon.style.top = `${randomTop}%`;
    productPlusIcon.style.left = `${randomLeft}%`;

    productPlusIcon.addEventListener("click", () => {
      selectedProduct = product;
      togglePopup();
      renderPopup();
    });

    productCard.appendChild(productPlusIcon);

    productCard.appendChild(productImage);

    productWrapper.appendChild(productCard);
  });
}

renderProducts();

function togglePopup() {
  popupWrapper.classList.toggle("popup-visibility");
}

let isDropdownOpen = false;

popupWrapper.addEventListener("click", (e) => {
  if (isDropdownOpen) return;
  if (e.target === popupWrapper) {
    togglePopup();
    popupWrapper.innerHTML = "";
    isDropdownOpen = false;
  }
});

function renderDropdown(container) {
  isDropdownOpen = false;

  let dropdown = document.createElement("div");
  dropdown.classList.add("sizes-dropdown");

  let selectedSize = document.createElement("div");
  selectedSize.innerText = "Choose your size";
  selectedSize.classList.add("selected-size");
  dropdown.appendChild(selectedSize);

  selectedSize.addEventListener("click", () => {
    dropdownOptionsContainer.style.display =
      dropdownOptionsContainer.style.display === "block" ? "none" : "block";

    isDropdownOpen = !isDropdownOpen;
    console.log("isDropdownOpen", isDropdownOpen);
  });

  let dropdownOptionsContainer = document.createElement("div");
  dropdownOptionsContainer.classList.add("dropdown-options-container");
  dropdown.appendChild(dropdownOptionsContainer);

  let options = ["XS", "S", "M", "L", "XL"];

  options.forEach((option) => {
    let dropdownOption = document.createElement("div");
    dropdownOption.classList.add("dropdown-option");
    dropdownOption.innerText = option;
    dropdownOptionsContainer.appendChild(dropdownOption);

    dropdownOption.addEventListener("click", () => {
      selectedSize.innerText = option;
      dropdownOptionsContainer.style.display = "none";
      isDropdownOpen = false;

      console.log("isDropdownOpen", isDropdownOpen);
    });
  });

  container.appendChild(dropdown);

  window.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdownOptionsContainer.style.display = "none";
      isDropdownOpen = false;
    }
  });
}

function renderPopupBottomSection(popupContent) {
  let popupBottomSection = document.createElement("div");
  popupBottomSection.classList.add("popup-bottom-section");
  popupContent.appendChild(popupBottomSection);

  let addToCartButton = document.createElement("div");
  addToCartButton.classList.add(
    "basic-button-wrapper",
    "invert-button-styles",
    "add-to-cart-button",
  );

  let addToCartButtonText = document.createElement("div");
  addToCartButtonText.innerText = "Add to Cart";
  addToCartButtonText.classList.add("button-text");

  let arrowRightIcon = document.createElement("img");
  arrowRightIcon.src = "assets/icon-arrow.svg";
  arrowRightIcon.alt = "arrow-right-icon";
  arrowRightIcon.classList.add("arrow-icon-right");
  addToCartButton.appendChild(addToCartButtonText);
  addToCartButton.appendChild(arrowRightIcon);
  popupBottomSection.appendChild(addToCartButton);
}

function renderProductInfo(popupTopSection) {
  let productDetailsContainer = document.createElement("div");
  productDetailsContainer.classList.add("product-details");
  popupTopSection.appendChild(productDetailsContainer);

  let productImageContainer = document.createElement("div");
  productImageContainer.classList.add("product-image-container");

  let productImage = document.createElement("img");
  productImage.src = selectedProduct.image;
  productImage.alt = selectedProduct.name;
  productImage.classList.add("popup-product-image");

  productDetailsContainer.appendChild(productImageContainer);
  productImageContainer.appendChild(productImage);

  let productInfoContainer = document.createElement("div");
  productInfoContainer.classList.add("product-info-container");

  productDetailsContainer.appendChild(productInfoContainer);

  let productName = document.createElement("div");
  productName.innerText = selectedProduct.name;
  productName.classList.add("popup-product-name");
  productInfoContainer.appendChild(productName);

  let productPrice = document.createElement("div");
  productPrice.innerText = selectedProduct.price;
  productPrice.classList.add("popup-product-price");
  productInfoContainer.appendChild(productPrice);

  let productDescription = document.createElement("div");
  productDescription.innerText = selectedProduct.description;
  productDescription.classList.add("popup-product-description");
  productInfoContainer.appendChild(productDescription);
}

function renderVariantOptions(popupTopSection) {
  let selectedVariant = selectedProduct.variants[0];
  let colorContainer = document.createElement("div");
  colorContainer.classList.add("color-container");
  popupTopSection.appendChild(colorContainer);

  colorContainer.innerText = "Colors:";

  let colorOptionsContainer = document.createElement("div");
  colorOptionsContainer.classList.add("color-options-container");
  colorContainer.appendChild(colorOptionsContainer);

  selectedProduct.variants.forEach((variant) => {
    let colorOptionContainer = document.createElement("div");
    colorOptionContainer.classList.add("color-option-container");
    colorOptionsContainer.appendChild(colorOptionContainer);

    let colorOption = document.createElement("div");
    colorOption.classList.add("color-option");
    colorOption.innerText = variant;
    colorOptionContainer.appendChild(colorOption);

    let colorLabel = document.createElement("div");
    colorLabel.classList.add("color-label");
    colorLabel.style.backgroundColor = variant.toLowerCase();
    colorOptionContainer.appendChild(colorLabel);

    colorOptionContainer.addEventListener("click", () => {
      selectedVariant = variant;

      colorOptionContainer.classList.toggle("selected-color-option");
      colorOption.classList.toggle("selected-color");
    });
  });
}

function renderPopup() {
  let popupContent = document.createElement("div");
  popupContent.classList.add("popup-content");
  popupWrapper.appendChild(popupContent);

  let popupTopSection = document.createElement("div");
  popupTopSection.classList.add("popup-top-section");
  popupContent.appendChild(popupTopSection);

  let closeIcon = document.createElement("div");
  closeIcon.classList.add("close-icon");
  closeIcon.innerHTML = "X";

  closeIcon.addEventListener("click", () => {
    popupWrapper.innerHTML = "";
    togglePopup();
  });

  popupTopSection.appendChild(closeIcon);

  renderProductInfo(popupTopSection);

  renderVariantOptions(popupTopSection);

  let SizesContainer = document.createElement("div");
  SizesContainer.classList.add("sizes-container");

  let sizesLabel = document.createElement("div");
  sizesLabel.classList.add("sizes-label");
  sizesLabel.innerText = "Sizes";
  SizesContainer.appendChild(sizesLabel);

  popupTopSection.appendChild(SizesContainer);

  renderDropdown(SizesContainer);

  renderPopupBottomSection(popupContent);
}
