import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames:string[] = ['spiderman','sheHulk','Hulk','Thor'];

  heroeBorrado?:string;

  removeLastHeroe():void {
    this.heroeBorrado = this.heroNames.pop();
  }

}
