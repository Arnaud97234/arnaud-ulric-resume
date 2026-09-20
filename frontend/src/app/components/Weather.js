"use client";

import { useEffect, useState } from "react";
import { fetchWeatherApi } from "openmeteo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCloud,
  faCloudRain,
  faSnowflake,
  faBolt,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";

const PARIS_LAT = 48.8566;
const PARIS_LON = 2.3522;

// WMO weather codes -> icon
const WEATHER_ICONS = {
  0: faSun,
  1: faSun,
  2: faCloud,
  3: faCloud,
  45: faSmog,
  48: faSmog,
  51: faCloudRain,
  61: faCloudRain,
  63: faCloudRain,
  65: faCloudRain,
  71: faSnowflake,
  73: faSnowflake,
  75: faSnowflake,
  95: faBolt,
};

const getWeatherIcon = (code) => WEATHER_ICONS[code] || faCloud;

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const params = {
          latitude: PARIS_LAT,
          longitude: PARIS_LON,
          current: ["temperature_2m", "weather_code"],
          timezone: "Europe/Paris",
        };
        const url = "https://api.open-meteo.com/v1/forecast";
        const responses = await fetchWeatherApi(url, params);
        const current = responses[0].current();

        setWeather({
          temperature: current.variables(0).value(),
          weatherCode: current.variables(1).value(),
        });
      } catch (err) {
        console.error("Failed to fetch weather:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading || !weather) return null;

  return (
    <div style={{ marginLeft: 10 }}>
      <FontAwesomeIcon icon={getWeatherIcon(Math.round(weather.weatherCode))} />
      <span>{Math.round(weather.temperature)}°C</span>
    </div>
  );
}
