type WeatherDataType = {
    latitude: number
    longitude: number
    generationtime_ms: number
    utc_offset_seconds:number
    timezone: string
    timezone_abbreviation: string
    elevation:number
    hourly_units: HourlyUnitsType
    hourly: HourlyType
}

type HourlyUnitsType = {
    time: string
    temperature_2m: string
    precipitation: string
    rain: string
    wind_speed_10m: string
}

type HourlyType = {
    precipitation: number[]
    rain: number[]
    time: string[]
    temperature_2m: number[]
    wind_speed_10m: number[]
}

export {type WeatherDataType}