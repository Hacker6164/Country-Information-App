  // Your code here
  let con = document.getElementById("con-Name");
  const getcnInfo = (k) => {


    fetch('https://restcountries.com/v3.1/name/' + k + '?fullText=true')
      .then(response => response.json())
      .then(response => {
        con.innerHTML = response[0].name.common; //India
        capital.innerHTML =  response[0].capital[0]; //capital
        continent.innerHTML = response[0].continents[0]; //Continent
        currency.innerHTML = Object.keys(response[0].currencies)[0]; //currency code
       
        document.getElementById("flag").src = response[0].flags.svg;
        languages.innerHTML =  Object.values(response[0].languages).toString().split(",").join(", ");
      });
  }

  srch.addEventListener("click", () => {
    getcnInfo(Inp.value);
  })
  getcnInfo("India");


