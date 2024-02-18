import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Person } from './entities/person.entity';
import * as errorMessages from '../common/translations/errorMessages';
import * as utils from '../common/utils';

@Injectable()
export class PersonService {

  constructor(
    @InjectModel("Person")
    private readonly personModel: Model<Person>,
  ) { }

  async create(createPersonDto: CreatePersonDto) {
    try {
      utils.propsToLowerCase(createPersonDto, ['email']);
      const person = await this.personModel.create(createPersonDto);
      return person;
    } catch (e) {
      throw new InternalServerErrorException(errorMessages.CREATE_PERSON_ERROR)
    }
  }

  async findAll() {
    const allPerson: Person[] = await this.personModel.find();
    return allPerson;
  }

  async findOne(id: string) {
    const person: Person = await this.personModel.findById(id);
    if (!person) {
      throw new InternalServerErrorException(errorMessages.PERSON_NOT_FOUND);
    }
    return person;
  }

  async update(id: string, updatePersonDto: UpdatePersonDto) {
    let person = await this.findOne(id);
    utils.propsToLowerCase(updatePersonDto, ['email']);
    await person.updateOne(updatePersonDto);
    return {...person.toJSON(), ...updatePersonDto};
  }

  async remove(id: string) {
    
    const { deletedCount } = await this.personModel.deleteOne({ _id: id});

    if (deletedCount === 0) {
      throw new BadRequestException(`Person with ${id} not found`)
    }

    return;
  }


}

