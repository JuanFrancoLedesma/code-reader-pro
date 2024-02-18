import { Prop, Schema, SchemaFactory, SchemaOptions } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({timestamps: true})
export class Person extends Document {

    @Prop({
        required: true,
        minlength: 2,
    })
    firstNames: string;

    @Prop({
        required: true,
        minlength: 2,
    })
    lastNames: string;

    @Prop({
        required: true,
        minlength: 2,
    })
    city: string;

    @Prop({
        required: true,
        minlength: 2,
    })
    street: string;

    @Prop({
        required: true,
    })
    number: number;

    @Prop({
        required: true,
    })
    phoneNumber: number;

    @Prop({
        required: true,
    })
    email: string;

    @Prop({
        required: true,
    })
    dni: number;

    @Prop({
        required: true,
    })
    occupation: string;

    @Prop({
        validate: {
            validator: (value: number[]) => value.length > 0,
            message: 'Each person needs at least one emergency contact'
        }
    })
    emergencyContacts: number[];

    @Prop({
        default: true,
    })
    isActive: boolean;


}


export const PersonSchema = SchemaFactory.createForClass(Person);
