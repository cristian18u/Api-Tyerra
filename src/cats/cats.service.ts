import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './schemas/cat.schema';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
    constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) { }

    async create(createCatDto: CreateCatDto): Promise<Cat> {
        const createdCat = new this.catModel(createCatDto);
        return createdCat.save();
    }

    async findAll(): Promise<Cat[]> {
        return this.catModel.find().exec();
    }
    async findOne(id: string): Promise<Cat> {
        return this.catModel.findOne({ _id: id }).exec();
    }

    async delete(id: string) {
        const deletedCat = await this.catModel
            .findByIdAndRemove({ _id: id })
            .exec();
        return deletedCat;
    }
}
