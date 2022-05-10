export interface WeatherPost {
    id: number;
    hour: string;
    date: string;
    country: string;
    status: string;
    city: string;
    urlSprinkler: string
}

export interface DronePost {
    id: number;
    hour: Date;
    date: Date;
    country: string;
    status: string;
    city: string;
    urlDrone: string
}
export interface getCoord {
    lat: any;
    lon: any;
}