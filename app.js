function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing){
        productNumber = parseInt(productNumber) + 1;
    } 
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }

    productInput.value = productNumber;

    // update Case Total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    // calculate total 
    calculateTotal();
}


function getInputValue(product){
    const phoneInput = document.getElementById(product + '-number');
    const phoneNumber = parseInt(phoneInput.value);
    return phoneNumber;
}

function calculateTotal (){
    const phoneTotal =  getInputValue('phone') * 1219;
    const caseTotal =  getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const taxFixed = tax.toFixed();
    const totalPrice = subTotal + tax;
    // update on html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxFixed;
    document.getElementById('total-amount').innerText = totalPrice;

}
// phone case increase Decrease Events  
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber( 'phone', '1219', true);
});

document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber( 'phone', '1219', false);
});

// handle case increase Decrease Events  
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', '59', true);
});

document.getElementById('case-minus').addEventListener('click',function(){
    updateProductNumber('case', '59', false);
})