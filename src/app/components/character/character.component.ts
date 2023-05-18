import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  @Input() character:any = [];
  //test = "https:" + "//rickandmortyapi.com/api/character/";

  constructor(){
    
  }
}
