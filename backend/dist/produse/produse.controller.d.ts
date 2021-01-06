import { CreateProdusDto } from './dto/create-produs.dto';
import { Produs } from './interfaces/produs.interface';
import { ProduseService } from './produse.service';
export declare class ProduseController {
    private produseService;
    constructor(produseService: ProduseService);
    create(createProdusDto: CreateProdusDto): Promise<void>;
    findAll(): Promise<Produs[]>;
    findOne(params: any): Promise<Produs>;
    update(params: any, updatedProdusDto: CreateProdusDto): Promise<void>;
    deleteOne(params: any): Promise<Produs>;
}
