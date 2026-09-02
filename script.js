/*
  APNA AFFILIATE LINK YAHAN PASTE KAREIN
*/

const affiliateLink = "PASTE_YOUR_AFFILIATE_LINK_HERE";

const productLink = document.getElementById("productLink");

if (affiliateLink.startsWith("http")) {
    productLink.href = affiliateLink;
} else {
    productLink.href = "#";
}
