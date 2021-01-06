import { Document } from 'mongoose';
export interface Produs extends Document {
    name: string;
    code: string;
    weight: number;
    price: number;
    color: string;
    isDeleted: boolean;
}
