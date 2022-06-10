async function getApi(url) {
  const response = await fetch (url);
  var data = await response.json();
  console.log(data);
  if (response) {
    hideloader();
  }
  show(data);
}

function start(lat, lon, key) {
    getApi(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`);
}
//~ start(54, 10, "f58e71a7e1d824962c0c8fe9a51d0d29");
document.getElementById("startButton").onclick = function () {
    var lat = document.getElementById("lat").value;
    var lon = document.getElementById("lon").value;
    var key = document.getElementById("key").value;
    start(lat, lon, key);
};
function hideloader() {
  document.getElementById("loading").style.display = "none";
  }
  
function show(data) {
  let tab = 
      `<tr>
        <th>Temperatur</th>
        <th>Druck</th>
        <th>Humidität</th>
       </tr>`;
  //for (let r of data.weather) {
  let r = data.main;
    tab +=  `<tr>
      <td>${r.temp}°C</td>
      <td>${r.pressure} hPa</td>
      <td>${r.humidity}%</td>
    </tr>`;
 // }
  document.getElementById("employees").innerHTML = tab;
}
