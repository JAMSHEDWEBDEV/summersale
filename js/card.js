
let total = 0;
function getCardPrice(card){
    const productPrice = parseFloat(card.childNodes[5].childNodes[3].innerText.split(' ')[0])
    const cardName = card.childNodes[5].childNodes[1].innerText
   
    const cardsProduct =document.getElementById('product_entry_area');
    let p = document.createElement('li')
    p.innerText = cardName;
    cardsProduct.appendChild(p);
    
   //  total price count 
    total = parseFloat(total) + productPrice;
    let totalPrice = document.getElementById('Total_price');
    totalPrice.innerText = total.toFixed(2);

   //  apply button enable 
   const applyBtn = document.getElementById('apply_btn');
   if(total >= 200){
      applyBtn.disabled = false;
   }else{
      applyBtn.disabled = true;
   }

   // purchase button enable 
   const purchaseBtn = document.getElementById('purchase_btn');
   if(total > 0){
      purchaseBtn.disabled = false;
   }else{
      purchaseBtn.disabled = true;
   }
    
}

// discount and total count start 
document.getElementById('apply_btn').addEventListener('click',function(){
   const couponInputValue = document.getElementById('apply_input_value').value;
   const couponField = document.getElementById('coupon_field');
   const applyBtn = document.getElementById('apply_btn');
   if(couponInputValue === 'SELL200'){
      couponInputValue.value = '';
      applyBtn.disabled = true;
      couponField.style.display = 'none';

      // discount count start 
      const discountPrice = (20/100) * total;
      const netBalance = total - discountPrice;
      document.getElementById('discount_price').innerText = discountPrice.toFixed(2);
      document.getElementById('net_total_balance').innerText = netBalance.toFixed(2);
   } else{
      couponInputValue.value = '';
      couponField.style.display = 'block';
   }
})