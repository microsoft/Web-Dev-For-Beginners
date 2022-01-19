      let low = document.getElementById("button-l");
      let add = document.getElementById("button-2");
      let num = document.getElementById("number");
      let val = num.innerText;
      console.log(val);
      low.addEventListener("click", function(e) {
          val = val - 1;

          num.innerText = val;

      });
      add.addEventListener("click", function(e) {
          val = val + 1;

          num.innerText = val;

      });