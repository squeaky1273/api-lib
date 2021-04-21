// Functions
function getWeather(zip, apiKey, units='imperial') {
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    
    const resPromise = fetch(path)
    const jsonPromise = resPromise.then(res => res.json()) 
    return jsonPromise               
    
    // return fetch(path).then(res => res.json())      // connect to server recieve response
      
  }

export {
    getWeather
}