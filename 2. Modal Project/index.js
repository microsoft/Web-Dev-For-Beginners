      let Btn = document.getElementById("open");
      let mBtn = document.getElementById("Modal");
      let closeBtn = document.getElementById("xbtn");
      closeBtn.addEventListener("click", function(e) {
          mBtn.style.display = "none";
          Btn.style.display = "block";

      })
      Btn.addEventListener("click", function(e) {
          mBtn.style.display = "block";
          Btn.style.display = "none";
      })