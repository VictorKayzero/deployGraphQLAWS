import { Args, Query,Resolver,Int } from '@nestjs/graphql';
import { authors,books,reviews } from './entity/md1.entity';
import { Md1Service } from './md1.service';


@Resolver()
export class Md1Resolver {

    constructor(
        private readonly md1Service: Md1Service
    ){}

    @Query(()=>String)
    hola():string{
        return 'kayzero ingeniero'
    }

    @Query(()=>[authors])
    authors(
        @Args ('id',{nullable:true, type:()=> Int}) id: number ,
        @Args ('name',{nullable:true, type:()=> String}) name: String 
    ):authors[]{
        return this.md1Service.findAllAuthors(id,name);
    } 

    @Query(()=>[books])
    Books():books[]{
        return this.md1Service.findAllBooks();
    }

    @Query(()=>[reviews])
    reviews():reviews[]{
        return this.md1Service.findAllReviews();
    }
}
