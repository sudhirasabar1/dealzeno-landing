/*
  APNA AFFILIATE LINK YAHAN PASTE KAREIN
*/
const AFFILIATE_LINK = "PASTE-YOUR-AFFILIATE-LINK-HERE";

const TELEGRAM_LINK = "https://t.me/YOUR_CHANNEL";

document.getElementById("productLink").href = AFFILIATE_LINK;
document.getElementById("telegramLink").href = TELEGRAM_LINK;

const affiliateLink = "https://bitli.in/t64sw0Q";

const productLink = document.getElementById("productLink");

if (affiliateLink.startsWith("http")) {
    productLink.href = affiliateLink;
} else {
    productLink.href = "#";
}
