document.querySelector(".hamburger").addEventListener("click", function () {
  const links = document.querySelector(".nav-links");
  const isExpanded = links.style.display === "block";
  links.style.display = isExpanded ? "none" : "block";
  this.setAttribute("aria-expanded", !isExpanded);
});

function setupSlides() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    let currentImageIndex = 0;
    const images = card.querySelectorAll("img"); // Get all images in the card
    const totalImages = images.length;

    card.querySelector(".prev").addEventListener("click", function () {
      images[currentImageIndex].style.display = "none";
      currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
      images[currentImageIndex].style.display = "block";
    });

    card.querySelector(".next").addEventListener("click", function () {
      images[currentImageIndex].style.display = "none";
      currentImageIndex = (currentImageIndex + 1) % totalImages;
      images[currentImageIndex].style.display = "block";
    });
  });
}








//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////cart control////////////////////////////////////////////////////////////////////////

function showNotification() {
    const notification = document.getElementById('notification');
    notification.style.display = 'block';  // Show the notification
    setTimeout(() => {
        notification.style.display = 'none';  // Hide after 2 seconds
    }, 2000);
}

function setupCart() {
    const addToCartButtons = document.querySelectorAll('.card button');
    const cartCountElement = document.getElementById('cart-count');

    // Update the display initially from local storage
    updateCartDisplay(parseInt(localStorage.getItem('cartCount')) || 0);

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Read the current count directly from local storage each time
            let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
            cartCount++;  // Increase cart count
            localStorage.setItem('cartCount', cartCount);  // Update the count in local storage
            updateCartDisplay(cartCount);  // Update display
            showNotification();  // Show the pop-up notification
        });
    });
}





function setupCartInteraction() {
    const cartIcon = document.querySelector('.cart-btn'); // Adjust selector as needed
    if (cartIcon) {
        cartIcon.addEventListener('click', function() {
            resetCart();
        });
    }
}

function resetCart() {
    localStorage.setItem('cartCount', 0);  // Reset the count in local storage
    updateCartDisplay(0);  // Update the cart count display
}


function updateCartDisplay(count) {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = count;  // Update the display with the new count
    }
}


document.addEventListener('DOMContentLoaded', function() {
    setupSlides();
    setupCart();
    setupCartInteraction();  // Setup the cart interaction
});


function resetCart() {
    if (confirm("Are you sure you want to clear the cart?")) {
        localStorage.setItem('cartCount', 0);  // Reset the count in local storage
        updateCartDisplay(0);  // Update the cart count display
    }
}







///////////////////////////////////////////////////////////////////////////////
//////////////subscribe button///////////////////////////////////////////////



function displayThankYou() {
    // Trigger confetti to burst across the screen
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Show the alert message
    alert("Thank You for subscribing, You will now receive our newsletter");
}






