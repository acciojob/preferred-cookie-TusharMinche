function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // Apply preferences
    function update(fontSize, fontColor) {
      document.getElementById("fontsize").value = parseInt(fontSize);
      document.getElementById("fontcolor").value = fontColor;
      document.documentElement.style.setProperty("--fontsize", fontSize);
      document.documentElement.style.setProperty("--fontcolor", fontColor);
    }

    // On page load → apply saved cookies
    window.onload = () => {
      const savedSize = getCookie("fontsize") || "16px";
      const savedColor = getCookie("fontcolor") || "#000000";
      update(savedSize, savedColor);
    };

    // Save preferences on submit
    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault(); // prevent page reload
      const fontSize = document.getElementById("fontsize").value + "px";
      const fontColor = document.getElementById("fontcolor").value;
      document.cookie = `fontsize=${fontSize}; path=/`;
      document.cookie = `fontcolor=${fontColor}; path=/`;
      update(fontSize, fontColor);
    });