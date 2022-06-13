import { Country } from "./country.model";
export interface City {
    id:number
    name:string
    country_id:number
    country:Country
}
