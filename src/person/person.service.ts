import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonService {

  constructor(
    @InjectModel("Person")
    private readonly personModel: Model<Person>,
  ){}

  async create(createPersonDto: CreatePersonDto) {
    try {
      createPersonDto.name = createPersonDto.name.toLowerCase();
      const person = await this.personModel.create(createPersonDto);
      return person;
    } catch (error) {
      throw new Error("Algo fallo")
    }
   
  }

  findAll() {
    return `This action returns all person`;
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
