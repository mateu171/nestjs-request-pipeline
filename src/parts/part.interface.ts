import { Condition } from "../dto/condition";

export interface Part {
    id: string;
    title: string,
    price: number,
    oemCode: string,
    condition: Condition,
    carBrand: string
}