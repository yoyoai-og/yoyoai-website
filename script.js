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
    let description = "";
    let whatsappMessage = "";

    if (product === "gram") {
        title = "🏭 Gram-Bhati";
        description = "Gram-Bhati ke baare mein details ke liye neeche options dekhein.";
        whatsappMessage = "Namaste Gyaniram & Sons, mujhe Gram-Bhati ke baare mein inquiry karni hai.";
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
