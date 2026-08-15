document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // DRUM SELL FORM → WHATSAPP
    // ==============================

    const sellForm = document.getElementById("sellDrumForm");

    if (sellForm) {

        sellForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const inputs = sellForm.querySelectorAll("input");
            const select = sellForm.querySelector("select");
            const textarea = sellForm.querySelector("textarea");

            const sellerName = inputs[0].value.trim();
            const mobile = inputs[1].value.trim();
            const state = select.value;
            const city = inputs[2].value.trim();
            const quantity = inputs[3].value.trim();
            const price = inputs[4].value.trim();
            const size = inputs[5].value.trim();
            const condition = textarea ? textarea.value.trim() : "";

            const message = `Namaste Gyaniram & Sons,

Mujhe Iron Drum sell karne ki inquiry karni hai.

Seller Name: ${sellerName}
Mobile Number: ${mobile}
State: ${state}
City / Village: ${city}
Drum Quantity: ${quantity}
Expected Price Per Drum: ₹${price}
Drum Size / Capacity: ${size}
Drum Condition: ${condition}`;

            const whatsappURL =
                "https://wa.me/918708098125?text=" +
                encodeURIComponent(message);

            window.open(whatsappURL, "_blank");

        });

    }


    // ==============================
    // PAYMENT POPUP
    // ==============================

    const paymentButton =
        document.getElementById("paymentButton");

    const paymentModal =
        document.getElementById("paymentModal");

    const paymentClose =
        document.getElementById("paymentClose");

    const copyUpiNumber =
        document.getElementById("copyUpiNumber");


    if (paymentButton && paymentModal) {

        paymentButton.addEventListener("click", function () {

            paymentModal.style.display = "flex";

        });

    }


    if (paymentClose && paymentModal) {

        paymentClose.addEventListener("click", function () {

            paymentModal.style.display = "none";

        });

    }


    if (paymentModal) {

        paymentModal.addEventListener("click", function (event) {

            if (event.target === paymentModal) {

                paymentModal.style.display = "none";

            }

        });

    }


    // ==============================
    // COPY UPI NUMBER
    // ==============================

    if (copyUpiNumber) {

        copyUpiNumber.addEventListener("click", function () {

            navigator.clipboard.writeText("8708098125");

            copyUpiNumber.textContent = "✅ Number Copied";

            setTimeout(function () {

                copyUpiNumber.textContent =
                    "📋 Number Copy Karein";

            }, 2000);

        });

    }

});


// ==================================================
// WHY CHOOSE US POPUP
// ==================================================

function openWhyPopup(type) {

    let title = "";
    let message = "";

    if (type === "delivery") {

        title = "🇮🇳 All India Delivery";

        message =
            "Gyaniram & Sons India ke different locations par poultry farm supplies ki delivery provide karta hai.\n\nDelivery availability location aur order quantity par depend karti hai.";

    }


    if (type === "bulk") {

        title = "📦 Bulk Orders";

        message =
            "Poultry farms, dealers aur businesses ke liye bulk quantity orders available hain.\n\nApni requirement aur quantity ke liye directly humse contact karein.";

    }


    if (type === "contact") {

        title = "🤝 Direct Contact";

        message =
            "Product ki price, availability, quantity ya delivery ke baare mein information lene ke liye directly Gyaniram & Sons se contact karein.";

    }


    alert(title + "\n\n" + message);

}


// ==================================================
// PRODUCT POPUP
// ==================================================

function openProductPopup(product) {

    let title = "";
    let details = {};


    // GRAM-BHATI

    if (product === "gram") {

        title = "🏭 Gram-Bhati";

        details = {

            price:
                "Price quantity aur model ke according available hai.",

            material:
                "New material aur purane iron drum se bani Gram-Bhati available hai.",

            size:
                "Different sizes aur requirements ke according available.",

            order:
                "Availability aur order quantity ke liye inquiry karein."

        };

    }


    // TARPAULIN

    if (product === "tarpaulin") {

        title = "🟫 Tarpaulin";

        details = {

            price:
                "Price size aur quantity ke according available hai.",

            material:
                "Bori material aur plastic tarpaulin available hai.",

            size:
                "Different sizes available hain.",

            order:
                "Available size aur quantity ke liye inquiry karein."

        };

    }


    // POULTRY FEEDER

    if (product === "feeder") {

        title = "🟥 Poultry Feeder";

        details = {

            price:
                "Price size aur quantity ke according available hai.",

            material:
                "Poultry farm use ke liye suitable material.",

            size:
                "Different sizes available hain.",

            order:
                "Availability aur quantity ke liye inquiry karein."

        };

    }


    // IRON DRUM

    if (product === "drum") {

        title = "🛢️ Iron Drum";

        details = {

            price:
                "Price size, condition aur quantity ke according.",

            material:
                "Different condition ke iron drums available hain.",

            size:
                "Different sizes aur capacities available hain.",

            order:
                "Available drums aur quantity ke liye inquiry karein."

        };

    }


    // Product details save

    window.productDetails = details;


    // Create popup

    let popup = document.createElement("div");


    popup.innerHTML = `

        <div class="product-popup-overlay">

            <div class="product-popup">

                <button
                    class="popup-close"
                    onclick="this.closest('.product-popup-overlay').remove()">
                    ×
                </button>


                <div class="popup-icon">
                    📦
                </div>


                <h2>
                    ${title}
                </h2>


                <p class="popup-subtitle">
                    Product ki detail dekhne ke liye option select karein.
                </p>


                <div class="popup-options">


                    <button
                        onclick="showProductDetail('${product}', 'price')">

                        <span>💰</span>

                        <strong>
                            Price
                        </strong>

                        <small>
                            Price details
                        </small>

                    </button>


                    <button
                        onclick="showProductDetail('${product}', 'material')">

                        <span>🧱</span>

                        <strong>
                            Material
                        </strong>

                        <small>
                            Material details
                        </small>

                    </button>


                    <button
                        onclick="showProductDetail('${product}', 'size')">

                        <span>📏</span>

                        <strong>
                            Size
                        </strong>

                        <small>
                            Size / Capacity
                        </small>

                    </button>


                    <button
                        onclick="showProductDetail('${product}', 'order')">

                        <span>📦</span>

                        <strong>
                            Order
                        </strong>

                        <small>
                            Availability
                        </small>

                    </button>


                </div>

            </div>

        </div>

    `;


    document.body.appendChild(popup);

}


// ==================================================
// PRODUCT DETAIL POPUP
// ==================================================

function showProductDetail(product, type) {

    const details = window.productDetails;


    let title = "";
    let detail = "";


    if (type === "price") {

        title = "💰 Price";

        detail = details.price;

    }


    if (type === "material") {

        title = "🧱 Material";

        detail = details.material;

    }


    if (type === "size") {

        title = "📏 Size / Capacity";

        detail = details.size;

    }


    if (type === "order") {

        title = "📦 Order / Availability";

        detail = details.order;

    }


    let productName = "";


    if (product === "gram") {

        productName = "Gram-Bhati";

    }


    if (product === "tarpaulin") {

        productName = "Tarpaulin";

    }


    if (product === "feeder") {

        productName = "Poultry Feeder";

    }


    if (product === "drum") {

        productName = "Iron Drum";

    }


    const message =
        "Namaste Gyaniram & Sons, mujhe " +
        productName +
        " ke " +
        title.replace(/[^a-zA-Z ]/g, "") +
        " ke baare mein inquiry karni hai.";


    let popup = document.createElement("div");


    popup.innerHTML = `

        <div class="product-popup-overlay">

            <div class="product-detail-popup">


                <button
                    class="popup-close"
                    onclick="this.closest('.product-popup-overlay').remove()">
                    ×
                </button>


                <div class="popup-icon">
                    📋
                </div>


                <h2>
                    ${title}
                </h2>


                <p class="detail-text">
                    ${detail}
                </p>


                <a
                    href="https://wa.me/918708098125?text=${encodeURIComponent(message)}"
                    target="_blank"
                    class="whatsapp-button">

                    🟢 WhatsApp par Inquiry Karein

                </a>


                <button
                    class="back-button"
                    onclick="this.closest('.product-popup-overlay').remove()">

                    ← Back

                </button>


            </div>

        </div>

    `;


    document.body.appendChild(popup);

}
