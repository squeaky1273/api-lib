// Functions
function getWeatherByZip(apikey, zip, units = 'imperial') {
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${units}`
    return getWeather(path)
}
  
function getWeatherByCity(apikey, city, units = 'imperial') {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${units}`
    return getWeather(path)
}
  
function getWeatherByGeo(apikey, lat, lon, units = 'imperial') {
    const path = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=${units}`
    return getWeather(path)
}

async function getWeather(zip, apiKey, units='imperial') {
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    
    try {
        // try something here
        const res = await fetch(path)
        const json = await res.json()
        const weatherData = {
            code: json.cod,
            temp: json.main.temp,
            description: json.weather[0].description,
            name: json.name,
            feels_like: json.main.feels_like,
            temp_min: json.main.temp_min,
            temp_max: json.main.temp_max
        }
        return weatherData
    } catch(err) {
        // handle error here
        return err
    }
            
    
    // return fetch(path).then(res => res.json())      // connect to server recieve response
      
  }

export {
    getWeather
}