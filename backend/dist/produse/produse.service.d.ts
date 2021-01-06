import { Model } from 'mongoose';
import { Produs } from './interfaces/produs.interface';
import { CreateProdusDto } from './dto/create-produs.dto';
export declare class ProduseService {
    private produsModel;
    constructor(produsModel: Model<Produs>);
    create(createProdusDto: CreateProdusDto): Promise<Produs>;
    findAll(): Promise<Produs[]>;
    findOne(id: string): Promise<Produs>;
    update(id: string, updatedProdusDto: CreateProdusDto): Promise<Produs>;
    delete(id: string): Promise<Produs>;
}
