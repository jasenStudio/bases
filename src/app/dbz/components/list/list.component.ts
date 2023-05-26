import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList:Character[] = [

  {
    name:'trunk',
    power:10
  }

]

@Output()
onDelete:EventEmitter<string> = new EventEmitter();

onDeleteCharacter( index:string ){

this.onDelete.emit(index);

  console.log(index)
}

}
