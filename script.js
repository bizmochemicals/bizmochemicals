let cart = [];
let selectedProduct = "";
let selectedSize = "";
let selectedFlavour = "";
let modalQty = 1;


/* =========================
   BIZMO ORDER API
========================= */

const BIZMO_ORDER_API_URL =
	"https://script.google.com/macros/s/AKfycby_AQMbH9dFbgNmpDoFK4X4azUi_1Z7ZnY80UBpg0zM5HI8oqXaag_176UGJWpP5jw/exec";

let bizmoPendingOrder = null;
let bizmoOrderSaving = false;


/* =========================
   PAGE SCROLL LOCK
========================= */

function lockPageScroll() {
	document.body.classList.add(
		"page-scroll-locked"
	);
}

function unlockPageScroll() {
	document.body.classList.remove(
		"page-scroll-locked"
	);
}

function updatePageScrollLock() {

	const menuOpen =
		document
			.getElementById("navMenu")
			?.classList.contains("show");

	const cartOpen =
		document
			.getElementById("cartDrawer")
			?.classList.contains("open");

	const productModalOpen =
		document
			.getElementById("productModal")
			?.classList.contains("show");

	const checkoutOpen =
		document
			.getElementById("checkoutModal")
			?.classList.contains("show");

	const orderConfirmOpen =
		document
			.getElementById("bizmoOrderConfirm")
			?.classList.contains("show");

	const editConfirmOpen =
		document
			.getElementById("bizmoEditConfirm")
			?.classList.contains("show");

	const successOpen =
		document
			.getElementById("bizmoOrderSuccess")
			?.classList.contains("show");

	const myOrdersOpen =
		document
			.getElementById("myOrdersModal")
			?.classList.contains("show");

	const whatsappThanksOpen =
		document
			.getElementById("bizmoWhatsappThanks")
			?.classList.contains("show");

	if (
		menuOpen ||
		cartOpen ||
		productModalOpen ||
		checkoutOpen ||
		orderConfirmOpen ||
		editConfirmOpen ||
		successOpen ||
		myOrdersOpen ||
		whatsappThanksOpen
	) {
		lockPageScroll();
	} else {
		unlockPageScroll();
	}
}


/* =========================