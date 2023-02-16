import { Injectable, NotFoundException } from '@nestjs/common';
import { authors,books,reviews } from './entity/md1.entity';

@Injectable()
export class Md1Service {

    private md1Authors: authors[] =[
        {
            id: 1,
            name: "Issac Asimov"
          },
          {
            id: 2,
            name: 'Dan Brown'
          },
          {
            id: 3,
            name: 'Alexandre Dumas'
          }
    ];

    findAllAuthors(id: number,name : String){

        if(id!=null){
            const autor =this.md1Authors.find( i => i.id === id);
            
            if(!autor) throw new NotFoundException(`Autor con ID [${id}] no existe`)

            return [autor];
        }

        if(name!=null){

            const autor =this.md1Authors.find( i => i.name === name);
            
            if(!autor) throw new NotFoundException(`Autor con NOMBRE [${name}] no existe`)

            return [autor];
        }
        return this.md1Authors;
    }

    private md1Books: books[] =[
        {
            id: 1,
            title: 'Robot Dreams',
            author: 1
          },
          {
            id: 2,
            title: 'The Starts, Like Dust',
            author: 1
          },
          {
            id: 3,
            title: 'Digital Fortress',
            author: 2
          },
          {
            id: 4,
            title: 'The Three Mosketeers',
            author: 3
          }
    ];

    findAllBooks(){
        return this.md1Books;
    }

    private md1Reviews: reviews[] =[
        
    {
        id: 1,
        text: 'Awesome Book!',
        book: 1 
      },
      {
        id: 2,
        text: 'Great Book!',
        book: 1
      },
      {
        id: 3,
        text: 'Amazing Book!',
        book: 2
      },
      {
        id: 4,
        text: 'Fantastic Book!',
        book: 3
      }
    ];
    
    findAllReviews(){
        return this.md1Reviews;
    }
}
