import { Teacher } from "./teacher";

export interface Class {
    id: number;
    subject: string;
    cost: number;
    user: Teacher;
}