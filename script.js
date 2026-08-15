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
            const state = inputs[2].value.trim();
            const city = inputs[3].value.trim();
            const quantity = inputs[4].value.trim();
            const price = inputs[5].value.trim();
            const size = inputs[6].value.trim();
            const condition = select.value;
            const extraInfo = textarea.value.trim();

            const message = `Namaste Gyaniram & Sons,

Mujhe Iron Drum sell karne ki inquiry karni hai.

Seller Name: ${sellerName}
Mobile Number: ${mobile}
State: ${state}
City / Village: ${city}
Drum Quantity: ${quantity}
Expected Price Per Drum: ₹${price}
Drum Size / Capacity: ${size}
Drum Condition: ${condition}
Extra Information: ${extraInfo}`;

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


    // OPEN PAYMENT POPUP

    if (paymentButton && paymentModal) {

        paymentButton.addEventListener("click", function () {

            paymentModal.style.display = "flex";

        });

    }


    // CLOSE PAYMENT POPUP

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

    // COPY UPI NUMBER

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
function openWhyPopup(type) {
    let title = "";
    let message = "";

    if (type === "delivery") {
        title = "🇮🇳 All India Delivery";
        message = "Gyaniram & Sons India ke different locations par poultry farm supplies ki delivery provide karta hai. Delivery availability location aur order quantity par depend karti hai.";
    }

    if (type === "bulk") {
        title = "📦 Bulk Orders";
        message = "Poultry farms, dealers aur businesses ke liye bulk quantity orders available hain. Apni requirement aur quantity ke liye directly humse contact karein.";
    }

    if (type === "contact") {
        title = "🤝 Direct Contact";
        message = "Product ki price, availability, quantity ya delivery ke baare mein information lene ke liye directly Gyaniram & Sons se contact karein.";
    }

    alert(title + "\n\n" + message);
}
function openWhyPopup(type) {

    if (type === "delivery") {
        alert("🇮🇳 All India Delivery\n\nGyaniram & Sons India ke different locations par poultry farm supplies ki delivery provide karta hai.\n\nDelivery availability location aur order quantity par depend karti hai.");
    }

    if (type === "bulk") {
        alert("📦 Bulk Orders\n\nPoultry farms aur dealers ke liye bulk quantity orders available hain.\n\nApni requirement aur quantity ke liye directly humse contact karein.");
    }

    if (type === "contact") {
        alert("🤝 Direct Contact\n\nProduct ki price, availability, quantity ya delivery ke baare mein information lene ke liye directly Gyaniram & Sons se contact karein.");
    }

}
function openProductPopup(product) {

    let title = "";
    let details = {};

    if (product === "gram") {
        title = "🏭 Gram-Bhati";
        details = {
            price: "Price quantity aur model ke according available hai.",
            material: "New material aur purane iron drum se bani gram-bhati available hai.",
            size: "Different sizes aur requirements ke according.",
            order: "Availability aur order quantity ke liye inquiry karein."
        };
    }

    if (product === "tarpaulin") {
        title = "🟫 Tarpaulin";
        details = {
            price: "Price size aur quantity ke according available hai.",
            material: "Bori material aur plastic tarpaulin available hai.",
            size: "Different sizes available hain.",
            order: "Available size aur quantity ke liye inquiry karein."
        };
    }

    if (product === "feeder") {
        title = "🟥 Poultry Feeder";
        details = {
            price: "Price size aur quantity ke according available hai.",
            material: "Poultry farm use ke liye suitable material.",
            size: "Different sizes available hain.",
            order: "Availability aur quantity ke liye inquiry karein."
        };
    }

    if (product === "drum") {
        title = "🛢️ Iron Drum";
        details = {
            price: "Price size, condition aur quantity ke according.",
            material: "Different condition ke iron drums available hain.",
            size: "Different sizes aur capacities available hain.",
            order: "Available drums aur quantity ke liye inquiry karein."
        };
    }

    let popup = document.createElement("div");

    popup.innerHTML = `
        <div class="product-popup-overlay">

            <div class="product-popup">

                <button class="popup-close"
                    onclick="this.closest('.product-popup-overlay').remove()">
                    ×
                </button>

                <div class="popup-icon">📦</div>

                <h2>${title}</h2>

                <p class="popup-subtitle">
                    Product ki detail dekhne ke liye option select karein.
                </p>

                <div class="popup-options">

                    <button onclick="showProductDetail('${product}', 'price')">
                        <span>💰</span>
                        <strong>Price</strong>
                        <small>Price details</small>
                    </button>

                    <button onclick="showProductDetail('${product}', 'material')">
                        <span>🧱</span>
                        <strong>Material</strong>
                        <small>Material details</small>
                    </button>

                    <button onclick="showProductDetail('${product}', 'size')">
                        <span>📏</span>
                        <strong>Size</strong>
                        <small>Size / Capacity</small>
                    </button>

                    <button onclick="showProductDetail('${product}', 'order')">
                        <span>📦</span>
                        <strong>Order</strong>
                        <small>Availability</small>
                    </button>

                </div>

            </div>

        </div>
    `;

    document.body.appendChild(popup);

    window.productDetails = details;
}


function showProductDetail(product, type) {

    let details = window.productDetails;

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

    if (product === "gram") productName = "Gram-Bhati";
    if (product === "tarpaulin") productName = "Tarpaulin";
    if (product === "feeder") productName = "Poultry Feeder";
    if (product === "drum") productName = "Iron Drum";

    let message =
        "Namaste Gyaniram & Sons, mujhe " +
        productName +
        " ke " +
        title.replace(/[^a-zA-Z ]/g, "") +
        " ke baare mein inquiry karni hai.";

    let popup = document.createElement("div");

    popup.innerHTML = `
        <div class="product-popup-overlay">

            <div class="product-detail-popup">

                <button class="popup-close"
                    onclick="this.closest('.product-popup-overlay').remove()">
                    ×
                </button>

                <div class="popup-icon">📋</div>

                <h2>${title}</h2>

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

    if (product === "tarpaulin") {
        title = "🟫 Tarpaulin";
        material = "Bori material aur plastic tarpaulin.";
        size = "Different sizes available.";
        price = "Price size aur quantity ke according.";
    }

    if (product === "feeder") {
        title = "🟥 Poultry Feeder";
        material = "Poultry farm use ke liye suitable material.";
        size = "Different sizes available.";
        price = "Price size aur quantity ke according.";
    }

    if (product === "drum") {
        title = "🛢️ Iron Drum";
        material = "Iron drum different conditions mein available.";
        size = "Different sizes aur capacities available.";
        price = "Price size, condition aur quantity ke according.";
    }

    let popup = document.createElement("div");

    popup.innerHTML = `
        <div style="
            position:fixed;
            inset:0;
            background:rgba(0,0,0,0.65);
            display:flex;
            align-items:center;
            justify-content:center;
            z-index:9999;
            padding:20px;
        ">

            <div style="
                background:white;
                width:100%;
                max-width:430px;
                border-radius:18px;
                padding:25px;
                position:relative;
                text-align:center;
            ">

                <button onclick="this.closest('div[style*=fixed]').remove()"
                    style="
                        position:absolute;
                        right:15px;
                        top:12px;
                        border:none;
                        background:none;
                        font-size:25px;
                        cursor:pointer;
                    ">
                    ×
                </button>

                <h2>${title}</h2>

                <p>Product ki detail dekhne ke liye option select karein.</p>

                <div style="
                    display:grid;
                    grid-template-columns:1fr 1fr;
                    gap:12px;
                    margin-top:20px;
                ">

                    <button onclick="showProductDetail('Price', '${price}', '${product}')">
                        💰<br>Price
                    </button>

                    <button onclick="showProductDetail('Material', '${material}', '${product}')">
                        🧱<br>Material
                    </button>

                    <button onclick="showProductDetail('Size / Capacity', '${size}', '${product}')">
                        📏<br>Size
                    </button>

                    <button onclick="showProductDetail('Order / Availability', 'Product ki availability aur quantity ke liye humse WhatsApp par inquiry karein.', '${product}')">
                        📦<br>Order
                    </button>

                </div>

            </div>

        </div>
    `;

    document.body.appendChild(popup);
}


function showProductDetail(title, detail, product) {

    let message = "";

    if (product === "gram") {
        message = "Namaste Gyaniram & Sons, mujhe Gram-Bhati ke baare mein inquiry karni hai.";
    }

    if (product === "tarpaulin") {
        message = "Namaste Gyaniram & Sons, mujhe Tarpaulin ke baare mein inquiry karni hai.";
    }

    if (product === "feeder") {
        message = "Namaste Gyaniram & Sons, mujhe Poultry Feeder ke baare mein inquiry karni hai.";
    }

    if (product === "drum") {
        message = "Namaste Gyaniram & Sons, mujhe Iron Drum ke baare mein inquiry karni hai.";
    }

    let popup = document.createElement("div");

    popup.innerHTML = `
        <div style="
            position:fixed;
            inset:0;
            background:rgba(0,0,0,0.65);
            display:flex;
            align-items:center;
            justify-content:center;
            z-index:10000;
            padding:20px;
        ">

            <div style="
                background:white;
                width:100%;
                max-width:400px;
                border-radius:18px;
                padding:25px;
                text-align:center;
            ">

                <h2>${title}</h2>

                <p style="margin:20px 0;">
                    ${detail}
                </p>

                <a href="https://wa.me/918708098125?text=${encodeURIComponent(message)}"
                   target="_blank"
                   style="
                       display:inline-block;
                       background:#25D366;
                       color:white;
                       padding:12px 20px;
                       border-radius:10px;
                       text-decoration:none;
                       font-weight:bold;
                   ">
                    🟢 WhatsApp par Inquiry Karein
                </a>

                <br><br>

                <button onclick="this.closest('div[style*=fixed]').remove()"
                    style="
                        padding:9px 18px;
                        border:1px solid #ccc;
                        border-radius:8px;
                        background:white;
                        cursor:pointer;
                    ">
                    Close
                </button>

            </div>

        </div>
    `;

    document.body.appendChild(popup);
}

    if (product === "tarpaulin") {
        title = "🟫 Tarpaulin";
        description = "Tarpaulin ke baare mein details ke liye neeche options dekhein.";
        whatsappMessage = "Namaste Gyaniram & Sons, mujhe Tarpaulin ke baare mein inquiry karni hai.";
    }

    if (product === "feeder") {
        title = "🟥 Poultry Feeder";
        description = "Poultry Feeder ke baare mein details ke liye neeche options dekhein.";
        whatsappMessage = "Namaste Gyaniram & Sons, mujhe Poultry Feeder ke baare mein inquiry karni hai.";
    }

    if (product === "drum") {
        title = "🛢️ Iron Drum";
        description = "Iron Drum ke baare mein details ke liye neeche options dekhein.";
        whatsappMessage = "Namaste Gyaniram & Sons, mujhe Iron Drum ke baare mein inquiry karni hai.";
    }

    alert(
        title +
        "\n\n" +
        description +
        "\n\n" +
        "💰 Price\n" +
        "🧱 Material\n" +
        "📏 Size / Capacity\n" +
        "📦 Order / Availability\n\n" +
        "WhatsApp inquiry ke liye OK dabayein."
    );

    window.open(
        "https://wa.me/918708098125?text=" +
        encodeURIComponent(whatsappMessage),
        "_blank"
    );
}
