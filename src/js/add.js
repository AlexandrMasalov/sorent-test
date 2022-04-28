const $formCity = document.formCity;

$formCity.addEventListener('keyup', (e) => {
  const $oldScript = document.getElementById('url');
  $oldScript.remove();
  const $script = document.createElement('script');
  $script.id = 'url';

  const city = e.target.value;
  
  $script.src = `https://kladr-api.ru/api.php?query=${city}&contentType=city&callback=gotCities`;
  document.body.append($script);
});

