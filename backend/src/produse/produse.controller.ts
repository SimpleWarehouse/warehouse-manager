import { Controller } from '@nestjs/common';
import { Get, Post, Put, Delete } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { CreateProdusDto } from './dto/create-produs.dto';
import { Produs } from './interfaces/produs.interface';
import { ProduseService } from './produse.service';

@Controller('produse')
export class ProduseController {
    constructor(private produseService: ProduseService) {}

    @Post()
    async create(@Body() createProdusDto: CreateProdusDto) {
      this.produseService.create(createProdusDto);
    }
  
    @Get()
    async findAll(): Promise<Produs[]> {
      return this.produseService.findAll();
    }

    @Get(':id')
    async findOne(@Param() params): Promise<Produs> {
      return this.produseService.findOne(params.id);
    }

    @Put(':id')
    async update(@Param() params, @Body() updatedProdusDto: CreateProdusDto) {
      this.produseService.update(params.id, updatedProdusDto);
    }

    @Delete(':id')
    async deleteOne(@Param() params){
      return this.produseService.delete(params.id);
    }
}
