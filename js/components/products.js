let productWrapper = document.getElementById("productWrapper");

let listOfproducts = [
  {
    id: 1,
    name: "Orange Wide Leg",
    price: "980,00€",
    description:
      "This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.",
    variants: ["Blue", "Black"],
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
    variants: ["Blue", "Black"],
    image: "assets/product-3.png",
  },
  {
    id: 4,
    name: "Green Trench Coat",
    price: "980,00€",
    description:
      "This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.",
    variants: ["Blue", "Black"],
    image: "assets/product-4.png",
  },
  {
    id: 5,
    name: "Tennis Blue T-Shirt",
    price: "980,00€",
    description:
      "This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.",
    variants: ["Blue", "Black"],
    image: "assets/product-5.png",
  },
  {
    id: 6,
    name: "Long Sleeve Tennis Top",
    price: "980,00€",
    description:
      "This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.",
    variants: ["Blue", "Black"],
    image: "assets/product-6.png",
  },
];


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
      console.log(product)
    })

    productCard.appendChild(productPlusIcon);

    productCard.appendChild(productImage);

    productWrapper.appendChild(productCard);
  });
}

renderProducts();

