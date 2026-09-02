// ==============================
// DEALZENO LINKS
// ==============================

// 1. Monetag Direct Link
const MONETAG_LINK = "https://omg10.com/4/11706929";

// 2. Affiliate Product Link
// Har baar sirf ye link change karna hai
const AFFILIATE_LINK = "PASTE-YOUR-AFFILIATE-LINK-HERE";

// 3. Telegram Channel Link
// Yahan apna Telegram channel link daalo
const TELEGRAM_LINK = "https://t.me/YOUR_CHANNEL";


// ==============================
// CONNECT 3 BUTTONS
// ==============================

document.addEventListener("DOMContentLoaded", function () {

    const adButton = document.getElementById("adButton");
    const productButton = document.getElementById("productLink");
    const telegramButton = document.getElementById("telegramLink");

    // Monetag button
    if (adButton) {
        adButton.href = MONETAG_LINK;
    }

    // Affiliate product button
    if (productButton) {
        productButton.href = AFFILIATE_LINK;
    }

    // Telegram button
    if (telegramButton) {
        telegramButton.href = TELEGRAM_LINK;
    }

});
