const depart = document.getElementById("depart");
const reTurn = document.getElementById("return");
const what = document.getElementById("what");
const kurapika = document.getElementById("kurapika");

function dateLimit() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const minDate = `${year}-${month}-${day}`;

    depart.setAttribute('min', minDate);
    reTurn.setAttribute('min', minDate);
  }
  window.addEventListener('DOMContentLoaded', dateLimit);

  const mgaeroplano = [{Airplane: "sbcs2a",
                        departure: "Tarlac",
                        arrrival: "Zamboanga"
                        },
                      {Airplane: "sbcs3a",
                        departure: "Samar",
                        arrrival: "Manila"

                      },
                      {Airplane: "sbcs1a",
                      departure: "Singapore",
                      arrrival: "Bohol"
                      }]

function searchflight() {
    const currentValue = document.getElementById("what").value;
    const currentValues = document.getElementById("thehell").value;
                      
    const result = mgaeroplano.find(flight =>
    flight.departure === currentValue &&
    flight.arrrival === currentValues);
                      
    if (result) {
      kurapika.style.display = "block"; 
      kurapika.innerHTML = `Match found!<br> <br>Airplane: ${result.Airplane}`;
    } else {
      kurapika.style.display = "block";
      kurapika.textContent = "No matching flight found.";
    }
  }


let limiter = false;
    let lastLoggedValue = "";

    function tryds() {
      const what = document.getElementById("what");
      const currentValue = what.value;

      if (limiter && currentValue === lastLoggedValue) {
        return;
      }
      else if (what.value === "Origin"){
        return;
      }
      console.log(currentValue);
      limiter = true;
      lastLoggedValue = currentValue;
    }

    let limiter_haha = false;
    let lastLoggedValue_haha = "";
    
    function haha() {
      const thehell = document.getElementById("thehell");
      const currentValue = thehell.value;
    
      if (limiter_haha && currentValue === lastLoggedValue_haha) {
        return;
      }
      else if (thehell.value === "Destination"){
        return;
      }
    
      console.log(currentValue);
      limiter_haha = true;
      lastLoggedValue_haha = currentValue;
    }