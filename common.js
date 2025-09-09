document.addEventListener("DOMContentLoaded", function () {
  // ======= 訂閱功能 =======
  const subscribeBtn = document.getElementById("subscribe-btn");
  const subscribeInput = document.getElementById("subscribe-email");

  if (subscribeBtn && subscribeInput) {
    subscribeBtn.addEventListener("click", function () {
      const email = subscribeInput.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // 移除之前的錯誤樣式和訊息
      subscribeInput.classList.remove("error");
      const oldError = document.getElementById("subscribe-error");
      if (oldError) oldError.remove();

      if (!emailPattern.test(email)) {
        // 顯示錯誤訊息
        subscribeInput.classList.add("error");
        const errorMsg = document.createElement("p");
        errorMsg.textContent = "Please enter a valid email address.";
        errorMsg.style.color = "red";
        errorMsg.id = "subscribe-error";
        subscribeInput.insertAdjacentElement("afterend", errorMsg);
        return;
      }

      alert("Thank you for subscribing.");
      subscribeInput.value = "";
    });
  }

  // ======= 聯絡表單功能 =======
  const contactForm = document.getElementById("contact-form");
     if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    if (!contactForm.checkValidity()) {
      // 讓瀏覽器自動顯示錯誤提示，不要跳出 alert
      return;
    }
    event.preventDefault(); // 成功驗證後才阻止提交
    alert("Thank you for your message.");
  });
 }
  

  // ======= 購物車功能 =======
  let cartCount = 0;

  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      cartCount++;
      alert("Item added to the cart.");
    });
  });

  const clearCartBtn = document.getElementById("clear-cart");
  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", function () {
      if (cartCount > 0) {
        cartCount = 0;
        alert("Cart cleared.");
      } else {
        alert("No items to clear.");
      }
    });
  }

  const processOrderBtn = document.getElementById("process-order");
  if (processOrderBtn) {
    processOrderBtn.addEventListener("click", function () {
      if (cartCount > 0) {
        alert("Thank you for your order.");
        cartCount = 0;
      } else {
        alert("Cart is empty.");
      }
    });
  }

  const viewCartBtn = document.getElementById("view-cart");
if (viewCartBtn) {
  viewCartBtn.addEventListener("click", function () {
    if (cartCount > 0) {
      alert(`You have ${cartCount} item(s) in your cart.`);
    } else {
      alert("Your cart is empty.");
    }
  });
}
});
