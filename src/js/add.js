const $formCity = document.formCity;

$formCity.addEventListener('keyup', (e) => {
  const $script = document.createElement('script');

  console.log(e.target.value);
  const city = e.target.value;
  
  $script.src = `https://kladr-api.ru/api.php?query=${city}&contentType=city&callback=gotCities`;
  document.body.append($script);
});

