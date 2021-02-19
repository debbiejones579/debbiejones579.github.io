let now = new Date();
      let month = now.getMonth();
      let dayOfMonth = now.getDate();
      let dayOfWeek = now.getDay();
      let message = "placeholder";

      if (
        dayOfWeek == 6 ||
        dayOfWeek == 0 ||
        (month == 0 && dayOfMonth == 1) ||
        (month == 6 && dayOfMonth == 4) ||
        (month == 11 && dayOfMonth == 25)
      ) {
        message = "Sleep In";
      } else {
        message = "Get Up!";
      }

      document.getElementById("output").innerHTML = message;
    
                
        