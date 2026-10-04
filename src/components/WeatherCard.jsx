export default function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <div className="weather-title-row">
        <span className="eyebrow subtle">CURRENT WEATHER</span>
      </div>

      <div className="weather-main">
        <div className="weather-temp">{data.temperature}</div>
        <div className="weather-meta">
          <div>
            <span>Rain prediction</span>
            <strong>{data.rainChance}</strong>
          </div>
          <div>
            <span>Humidity</span>
            <strong>{data.humidity}</strong>
          </div>
          <div>
            <span>Wind speed</span>
            <strong>{data.windSpeed}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
