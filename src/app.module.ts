import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonModule } from './person/person.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://jledesma:B4jwjMUH9vTuC0cc@spartanserver.c8ydza9.mongodb.net/'),
    PersonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
