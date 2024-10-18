document.addEventListener('DOMContentLoaded', function() {
  const headerText = document.querySelector('#index-header .header-text'); // Target by #index-header
  const subHeaderText = document.querySelector('#index-header .sub-header-text'); // Target by #index-header
  
  function updateHeader() {
    if (window.innerWidth <= 750) {
      headerText.innerHTML = 'HOME';  // Change header text
      subHeaderText.innerHTML = '';   // Remove sub-header text
    } else {
      headerText.innerHTML = 'LOOKING FOR QUALITY <br><span class="tab-space">PRINTING SERVICES?</span>';
      subHeaderText.innerHTML = 'WE PRINT YOUR IDEAS!';  // Restore sub-header text
    }
  }

  // Run on page load
  updateHeader();

  // Run when window is resized
  window.addEventListener('resize', updateHeader);
});

function toggleMobileMenu() {
  const nav = document.querySelector('.mobile-nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

function navigateToProduct() {
  const select = document.getElementById("product-dropdown");
  const selectedValue = select.value;
  if (selectedValue) {
    const target = document.querySelector(selectedValue);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
}

