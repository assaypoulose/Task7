// Fetching data from the API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Get all countries from the Asia continent/region using the filter function
    const asiaCountries = data.filter(country => country.region === 'Asia');

    console.log('Countries from Asia:', asiaCountries);

    // Get all countries with a population of less than 2 lakhs using the filter function
    const smallPopulationCountries = data.filter(country => country.population < 200000);

    console.log('Countries with population less than 2 lakhs:', smallPopulationCountries);

    // Print details (name, capital, flag) using forEach function

    data.forEach(country => {
        const name = country.name.common || 'N/A';
        const capital = country.capital[0] || 'N/A';
        const flag = country.flags && country.flags.svg ? country.flags.svg : 'N/A';
  
        console.log(`Name: ${name}, Capital: ${capital}, Flag: ${flag}`);
      });
    //data.forEach(country => {
    //  console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags[0]}`);
    //});


    
    // Print the total population of countries using reduce function
    const totalPopulation = data.reduce((accumulator, country) => accumulator + country.population, 0);

    console.log('Total population of countries:', totalPopulation);

    // Print the country which uses US Dollars as currency
    const usDollarCountry = data.find(country => country.currencies && country.currencies.USD);

    console.log('Country using US Dollars:', usDollarCountry);
  })
  .catch(error => console.error('Error fetching data:', error));
