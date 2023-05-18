function getPrice(field) {
    return field.placeholder || 0;
}

function getQuantity(field) {
    return parseFloat(field.value, 10) || 0;
}

function getItemTotal(field) {
    return getPrice(field) * getQuantity(field);
}

function hideClass(el) {
    el.style.display = "none";
}

function showClass(el) {
    el.style.display = "block";
}

function showReset() {
	var button = document.getElementById("reset");
	button.style = "position: absolute; left: 50%; transform: translateX(-50%);"
}

function resetQuantity(field) {
	field.value = ""
}

function reset() {
	var field,
	    button = document.getElementById("reset"),
	    total = document.getElementById('totalPrice');
	for (i = 0; i < items.length; i += 1) {
        item = items[i];
        field = form.elements[item + 'qty'];
        resetQuantity(field);
    }
    total.style.display = "none";
    button.style.display = "none";
}

function updateTotal(el, amount) {
    hideClass(el);
    if (amount > 0) {
        showClass(el);
        showReset();
        el.innerHTML = "Your Order Total is $" + amount.toFixed(2);
    }
}
    
function forEachFormItem(form, func) {
    var i,
        item,
        field,
        result = 0;
    for (i = 0; i < items.length; i += 1) {
        item = items[i];
        field = form.elements[item + 'qty'];
        result += func(field);
    }
    return result;
}

function calculateTotal() {
    var form = this,
        total = 0,
        priceField = form.priceField;
    
    total = forEachFormItem(form, getItemTotal);
    updateTotal(priceField, total);
}

const items = ['walnut', 'horn', 'gcookie', 'hcookie', 'acorn', 'chocprune', 'macaron', 'crunchypuff', 'peach', 'lemon', 'chestnut', 'tower', 'pavlova', 'cakepop', 'minicupcake', 'cheesecake', 'prunecup', 'cupcake', 'tiramisucup', 'tart', 'sccake', 'lccake', 'sscake', 'lscake', 'sdcake'];
const form = document.getElementById('order');
form.priceField = document.getElementById('totalPrice');
form.addEventListener('change', calculateTotal);
