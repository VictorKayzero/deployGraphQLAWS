import { Field, Int,ObjectType } from "@nestjs/graphql";

@ObjectType()

export class authors{
    @Field(()=>Int)
    id: number;

    @Field(()=>String)
    name: String;

}

@ObjectType()
export class books{
    @Field(()=>Int)
    id: number;

    @Field(()=>String)
    title: String;
    
    @Field(()=>Int)
    author: number;
    
}

@ObjectType()
export class reviews{
    @Field(()=>Int)
    id: number;

    @Field(()=>String)
    text: String;
    
    @Field(()=>Int)
    book: number;
    
}