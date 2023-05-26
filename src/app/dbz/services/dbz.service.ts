import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})


export class DbzService {
  constructor() { }

  deleteCharacterById(id:string){
    // console.log( index , "este elemento fue borrado")
    // this.characters.splice(index,1);
    this.characters = this.characters.filter( character => character.id !== id );
  }

  addCharacter(character:Character):void{

   const newCharacter:Character = { id:uuid(),...character};

    this.characters.push(newCharacter);
  }

public characters:Character[] = [

  {
          id:uuid(),
    name:'krillin',
    power:1000
  },
    {
      id:uuid(),
      name:"goku",
      power:8500
    },
    {
          id:uuid(),
      name:'Vgeta',
      power:9000
    }

  ]

}
