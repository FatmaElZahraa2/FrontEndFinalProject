async function getCategories() {
    try {
        const response = await fetch('https://dummyjson.com/products?limit=1000');
        const data = await response.json();
        const allProducts = data.products;
        console.log(allProducts)
        const uniqueCategories = [];
        const fashionCategories = [
            "mens-shirts",
            "mens-shoes",
            "mens-watches",
            "womens-dresses",
            "womens-shoes",
            "womens-watches",
            "womens-bags",
            "womens-jewellery",
            "sunglasses",
            "fragrances"
        ];
        const seen = new Set();

        allProducts.forEach(product => {
            if (!seen.has(product.category)) {
                seen.add(product.category);
                uniqueCategories.push(product);
            }
        });
        uniqueCategories.sort(() => Math.random() - 0.5);
        const wrapper = document.getElementById('category-list');

        wrapper.innerHTML = uniqueCategories.map(item => `
      <div class="swiper-slide">
        <div class="cat-card">
          <div class="image-holder">
            <img src="${item.thumbnail}" alt="${item.category}">
          </div>
          <p class="CategoryName">${item.category.replace('-', ' ')}</p>
        </div>
      </div>
    `).join('');

        // 3. Initialize Swiper
        new Swiper(".categorySwiper", {
            slidesPerView: 2,
            spaceBetween: 20,
            navigation: {
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
            },
            breakpoints: {
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 6 } // Shows 6 items like your image
            }
        });

    } catch (error) {
        console.error("Error loading categories:", error);
    }
}

getCategories();

 localStorage.setItem("ChosenProduuctID", 185)