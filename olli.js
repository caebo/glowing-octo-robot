document.getElementsByTagName('head')[0].innerHTML += '<meta name="viewport" content="width=device-width, initial-scale=1.0" />';

function setze(id, value) {
    let element = document.getElementById(id);
    if (element)
      element.innerHTML = value;
    return (element != null);
}

function frage(q) {
    return window.prompt(q);
}

function fromStorage(name, question) {
    let val = localStorage[name];
    if (val == undefined && question!=null) {
        val = window.prompt(question);
        localStorage[name] = val;
    }
    return val;
}


async function getApi() {
  let key = fromStorage("APIkey", "Geben Sie ihren API-Key an:");
  let loc = fromStorage("locations", "[{\"lat\": 54.32, \"lon\": 10.14, \"name\": \"Kiel\"}]");
  loc = JSON.parse(loc);
  lat = loc[0]["lat"];
  lon = loc[0]["lon"];
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`);
  var data = await response.json();
  return data;
}


function  Wetter(lat, lon, key) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`).then(x => x.json());
}
