import { useState } from 'react'
import WeatherCard from '../components/WeatherCard'
import { getWeatherData } from '../data/weatherDemoData'

export default function WeatherGuidance() {
  const defaultCity = 'Hyderabad'
  const [city, setCity] = useState(defaultCity)
  const [searchCity, setSearchCity] = useState(defaultCity)
  const [weather, setWeather] = useState(getWeatherData(defaultCity))

  const handleSearch = (event) => {
    event.preventDefault()
    const nextCity = searchCity.trim() || defaultCity
    setCity(nextCity)
    setWeather(getWeatherData(nextCity))
  }

  return (
    <div className="page-shell">
      <div className="page-header">
        <span className="eyebrow">AGRICULTURE INTELLIGENCE</span>
        <h1>Weather Guidance</h1>
      </div>

      <section className="card weather-search-card">
        <h2>Check your field conditions</h2>
        <form className="inline-search" onSubmit={handleSearch}>
          <input
            type="text"
            value={searchCity}
            onChange={(event) => setSearchCity(event.target.value)}
            aria-label="Search city"
          />
          <button type="submit" className="primary-btn">Search</button>
        </form>
      </section>

      <div className="weather-layout">
        <WeatherCard data={weather} />

        <section className="card tip-card">
          <div className="small-heading">FARMING TIP</div>
          <p className="farm-tip">{weather.tip}</p>
          <div className="field-advice-box">
            <span>Field advice</span>
            <p>{weather.fieldAdvice}</p>
          </div>
        </section>
      </div>
    </div>
  )
}
