document.getElementById('checkWeatherButton').addEventListener('click', function() {
    var button = document.getElementById('checkWeatherButton');
    var loadingPopup = document.getElementById('loadingPopup');
    var resultPopup = document.getElementById('resultPopup');
  
    button.style.display = "none";
    loadingPopup.style.display = "flex";
  
    setTimeout(function() {
      loadingPopup.style.display = "none";
      resultPopup.style.display = "flex";
    }, 3000);
  });
  