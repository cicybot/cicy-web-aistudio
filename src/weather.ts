import { createIcons, Search, MapPin, Wind, Droplets, Thermometer, Calendar, Sun, Cloud, CloudRain, CloudLightning, Snowflake, ArrowLeft, Zap } from 'lucide';

createIcons({
  icons: { Search, MapPin, Wind, Droplets, Thermometer, Calendar, Sun, Cloud, CloudRain, CloudLightning, Snowflake, ArrowLeft, Zap }
});

const getWeatherIcon = (code: number) => {
  if (code === 0) return 'sun';
  if (code >= 1 && code <= 3) return 'cloud';
  if (code >= 45 && code <= 48) return 'cloud';
  if (code >= 51 && code <= 67) return 'cloud-rain';
  if (code >= 71 && code <= 77) return 'snowflake';
  if (code >= 80 && code <= 82) return 'cloud-rain';
  if (code >= 85 && code <= 86) return 'snowflake';
  if (code >= 95 && code <= 99) return 'cloud-lightning';
  return 'sun';
};

const getWeatherDesc = (code: number) => {
  if (code === 0) return 'Clear sky';
  if (code === 1) return 'Mainly clear';
  if (code === 2) return 'Partly cloudy';
  if (code === 3) return 'Overcast';
  if (code >= 45 && code <= 48) return 'Fog';
  if (code >= 51 && code <= 55) return 'Drizzle';
  if (code >= 61 && code <= 65) return 'Rain';
  if (code >= 71 && code <= 75) return 'Snow';
  if (code >= 95) return 'Thunderstorm';
  return 'Unknown';
};

const fetchWeather = async (lat: number, lon: number, name: string) => {
  try {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`);
    const data = await res.json();
    
    document.getElementById('current-temp')!.textContent = `${Math.round(data.current.temperature_2m)}°`;
    document.getElementById('current-condition')!.textContent = getWeatherDesc(data.current.weather_code);
    document.getElementById('current-wind')!.textContent = `${data.current.wind_speed_10m} km/h`;
    document.getElementById('current-humidity')!.textContent = `${data.current.relative_humidity_2m}%`;
    document.getElementById('current-feels-like')!.textContent = `${Math.round(data.current.apparent_temperature)}°`;
    document.getElementById('current-location')!.textContent = name;
    document.getElementById('location-text')!.textContent = name;

    const currentIcon = document.getElementById('current-icon');
    if (currentIcon) {
      const iconName = getWeatherIcon(data.current.weather_code);
      currentIcon.setAttribute('data-lucide', iconName);
    }

    const forecastList = document.getElementById('forecast-list')!;
    forecastList.innerHTML = '';
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(data.daily.time[i]);
      const dayName = i === 0 ? 'Today' : date.toLocaleDateString('en-US', { weekday: 'short' });
      const icon = getWeatherIcon(data.daily.weather_code[i]);
      const maxTemp = Math.round(data.daily.temperature_2m_max[i]);
      const minTemp = Math.round(data.daily.temperature_2m_min[i]);
      
      forecastList.innerHTML += `
        <div class="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
          <span class="w-16 font-medium text-slate-300">${dayName}</span>
          <i data-lucide="${icon}" class="w-5 h-5 text-emerald-400"></i>
          <div class="flex gap-4 w-24 justify-end">
            <span class="font-bold text-white">${maxTemp}°</span>
            <span class="text-slate-500 font-medium">${minTemp}°</span>
          </div>
        </div>
      `;
    }
    
    createIcons({
      icons: { Search, MapPin, Wind, Droplets, Thermometer, Calendar, Sun, Cloud, CloudRain, CloudLightning, Snowflake, ArrowLeft, Zap }
    });
  } catch (e) {
    console.error("Failed to fetch weather", e);
  }
};

const searchCity = async (query: string) => {
  try {
    const btn = document.getElementById('search-btn')!;
    const originalText = btn.textContent || 'Search';
    btn.textContent = '...';
    
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1&language=en&format=json`);
    const data = await res.json();
    
    btn.textContent = originalText;
    
    if (data.results && data.results.length > 0) {
      const city = data.results[0];
      fetchWeather(city.latitude, city.longitude, `${city.name}, ${city.country_code}`);
      (document.getElementById('search-input') as HTMLInputElement).value = '';
    } else {
      alert('City not found. Please try another search.');
    }
  } catch (e) {
    console.error("Geocoding failed", e);
  }
};

// Initial load (San Francisco)
fetchWeather(37.7749, -122.4194, "San Francisco, US");

document.getElementById('search-btn')?.addEventListener('click', () => {
  const input = document.getElementById('search-input') as HTMLInputElement;
  if (input.value) searchCity(input.value);
});

document.getElementById('search-input')?.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const input = e.target as HTMLInputElement;
    if (input.value) searchCity(input.value);
  }
});
