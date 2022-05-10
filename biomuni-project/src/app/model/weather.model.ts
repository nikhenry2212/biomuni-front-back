export interface Weather {
    base: string,
    main: Main,
    name: string,
    coord: any,
    sys: Sys,
    timezone: number,
    visibility: number,
    weather: [WeatherDescription]
}

export interface Main {
    feels_like: number,
    humidity: number,
    pressure: number,
    temp: number,
    temp_max: number,
    temp_min: number,
}
export interface Sys {
    country: string,
    id: number,
    sunrise: number,
    sunset: number,
    type: number,
}
export interface WeatherDescription {
    description: string,
    icon: string,
    id: number,
    main: string
}