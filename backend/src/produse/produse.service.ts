import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Produs } from './interfaces/produs.interface';
import { CreateProdusDto } from './dto/create-produs.dto';


@Injectable()
export class ProduseService {
  constructor(
    @Inject('PRODUS_MODEL')
    private produsModel: Model<Produs>,
  ) {}

  async create(createProdusDto: CreateProdusDto): Promise<Produs> {
    const createdProdus = new this.produsModel(createProdusDto);
    return createdProdus.save();
  }

  async findAll(): Promise<Produs[]> {
    return this.produsModel.find({isDeleted: false}).exec();
  }

  async findOne(id: string): Promise<Produs> {
    return this.produsModel.findById(id).exec();
  }

  async update(id: string, updatedProdusDto: CreateProdusDto): Promise<Produs> {
    return this.produsModel.findByIdAndUpdate(id, updatedProdusDto, {useFindAndModify: false}).exec();
  }

  async delete(id: string): Promise<Produs> {
    return this.produsModel.findByIdAndUpdate(id, {isDeleted: true}, {useFindAndModify: false}).exec();
  }

}
