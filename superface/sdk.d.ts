export { WeatherCurrentCityProfile } from "./types/weather/current-city";
export declare const SuperfaceClient: new () => import("@superfaceai/one-sdk/dist/client/client").TypedSuperfaceClient<{
    "weather/current-city": {
        GetCurrentWeatherInCity: [import("./types/weather/current-city").WeatherCurrentCityGetCurrentWeatherInCityInput, import("./types/weather/current-city").WeatherCurrentCityGetCurrentWeatherInCityResult];
    };
}>;
export declare type SuperfaceClient = InstanceType<typeof SuperfaceClient>;
