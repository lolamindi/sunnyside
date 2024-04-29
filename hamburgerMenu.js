
  const menuCheckbox = document.getElementById('menuCheckbox');
  const menuContent = document.getElementById('menuContent');


  menuCheckbox.addEventListener('change', function() {
    if (this.checked) {
      menuContent.style.display = 'block';
    } else {
      menuContent.style.display = 'none';
    }
  });
