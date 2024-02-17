import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://jledesma:B4jwjMUH9vTuC0cc@spartanserver.c8ydza9.mongodb.net/'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
