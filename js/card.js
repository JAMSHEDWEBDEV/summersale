
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











//  function setCardPriceTotal(elementId,result){
//      const TotalPriceText = document.getElementById(elementId);
//      TotalPriceText.innerText = result;
//  } 

 

//  document.getElementById('first_img_click').addEventListener('click',function(){
//        const entryArea = document.getElementById('entry_area');
//        const cardName = document.getElementById('first_card_name').innerText;
//        const count = entryArea.childElementCount;
//        const p = document.createElement('p');
//        p.innerText = `${count +1}. ${cardName}`;
//        entryArea.appendChild(p);

//        const firstCardPrice = getCardPrice('first_card_tk');
//        const total = firstCardPrice.toFixed(2);
//        setCardPriceTotal('Total_price', total);

//        const purchaseBtn = document.getElementById('purchase_btn');
//        if(total > 0){
//           purchaseBtn.removeAttribute('disabled')
//        }else{
//           purchaseBtn.setAttribute('disabled', true);
//        }

//  }) 

//  document.getElementById('second_img_click').addEventListener('click',function(){
//       const firstCardPrice = getCardPrice('first_card_tk');
//       const secondCardPrice = getCardPrice('second_card_tk');
//       const totalPrice = firstCardPrice + secondCardPrice;
//       const total = totalPrice.toFixed(2);
//       setCardPriceTotal('Total_price',total);
      
//       const entryArea = document.getElementById('entry_area');
//       const cardName = document.getElementById('second_card_name').innerText;
//       const count = entryArea.childElementCount;
//       const p = document.createElement('p');
//       p.innerText = `${count +1}. ${cardName}`;
//       entryArea.appendChild(p);
//  })   
//  document.getElementById('third_img_click').addEventListener('click',function(){
//       const firstCardPrice = getCardPrice('first_card_tk');
//       const secondCardPrice = getCardPrice('second_card_tk');
//       const thirdCardPrice = getCardPrice('third_card_tk');
//       const totalPrice = firstCardPrice + secondCardPrice + thirdCardPrice;
//       const total = totalPrice.toFixed(2);
//       setCardPriceTotal('Total_price',total);
      
//       const entryArea = document.getElementById('entry_area');
//       const cardName = document.getElementById('third_card_name').innerText;
//       const count = entryArea.childElementCount;
//       const p = document.createElement('p');
//       p.innerText = `${count +1}. ${cardName}`;
//       entryArea.appendChild(p);

//       const applyBtn = document.getElementById('apply_btn');
//        if(total >= 100){
//         applyBtn.removeAttribute('disabled')
//        }else{
//         applyBtn.setAttribute('disabled', true);
//        }
//  }) 

// //  discount price 
// getPrice = function() {
//     var numVal1 = Number(document.getElementById("Total_price").innerText);
//     var numVal2 = Number(document.getElementById("Total_price").innerText) * 0.2;

//     var totalValue = numVal1 - (numVal1 * numVal2)
//     document.getElementById("total_balance").innerText = totalValue.toFixed(2);
// }

//  document.getElementById('apply_btn').addEventListener('click',function(){
//     getPrice();
       

//  })


 
//   document.getElementById('Total_price').addEventListener(function(event){
//      const totalPriceValue = event.target.innerText;
//      const totalPrice = parseFloat(totalPriceValue);
//      const purchaseBtn = document.getElementById('purchase_btn');
//      if(totalPrice >= 100){
//          purchaseBtn.removeAttribute('disabled')
//      }else{
//          purchaseBtn.setAttribute('disabled', true);
//      }
//   })