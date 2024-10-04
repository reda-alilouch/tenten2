
function toggleDropdown() {
    const dropdownContent = document.getElementById("myDropdown");
    dropdownContent.classList.toggle("show");
  }
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (const dropdown of dropdowns) {
        if (dropdown.classList.add+("show")) {
          dropdown.classList.remove("show");
        }
      }
    }
  };
