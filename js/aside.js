document.addEventListener("DOMContentLoaded", function (event) {
    const showsSidebar = (toggleId, sideId, bodyId) => {
      const toggle = document.getElementById(toggleId),
        sidebar = document.getElementById(sideId),
        bodypd = document.getElementById(bodyId);
  
      // Validate that all variables exist
      if (toggle && sidebar && bodypd) {
        toggle.addEventListener("click", () => {
          // shows navbar
          sidebar.classList.toggle("shows");
          // change icon
          toggle.classList.toggle("fa");
          // add padding to body
          bodypd.classList.toggle("body-pd");
          // add padding to header
          // asidepd.classList.toggle("body-pd");
        });
      }
    };
  
    showsSidebar("aside-toggle", "sidebar", "body-pd");
  
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll(".side_link");
  
    function colorLink() {
      if (linkColor) {
        linkColor.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");
      }
    }
    linkColor.forEach((l) => l.addEventListener("click", colorLink));
  
    // Your code to run since DOM is loaded and ready
  });
  