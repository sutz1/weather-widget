export interface WeatherData {
    name: string;
    main: {
        feels_like: number;
        temp: number;
    };
    weather : {
        description: string;
    }[]
}