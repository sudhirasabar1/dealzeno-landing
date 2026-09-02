/*
  APNA AFFILIATE LINK YAHAN PASTE KAREIN
*/

const affiliateLink = "https://bitli.in/t64sw0Q";

const productLink = document.getElementById("productLink");

if (affiliateLink.startsWith("http")) {
    productLink.href = affiliateLink;
} else {
    productLink.href = "#";
}
