import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Person, PersonSchema } from './entities/person.entity';

@Module({
  controllers: [PersonController],
  providers: [PersonService],
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      {
        name: Person.name,
        schema: PersonSchema,
      }
    ])
  ],
  exports: [
    MongooseModule,
  ]
})
export class PersonModule {}
