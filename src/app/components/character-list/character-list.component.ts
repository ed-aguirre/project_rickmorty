import { Component, OnInit } from '@angular/core';
import { RMApiService } from 'src/app/services/rmapi.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  

  allCharacters:any = [];
  tenCharacters:any = [];
  constructor(private RMApi: RMApiService){ }
  
  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.RMApi.getCharacters()
    .subscribe(data => {
      this.allCharacters = data;
      console.log(this.allCharacters);
      this.allCharacters.results.forEach((element: { results: any; }) => {
        if(this.tenCharacters.length < 10){
          this.tenCharacters.push(element);
        }
      });
    })
  }



}
