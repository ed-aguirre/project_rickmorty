import { Component, OnInit } from '@angular/core';
import { RMApiService } from 'src/app/services/rmapi.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  currentPage:number = 1;
  limit:number = 0;
  total:number = 826;
  limitInPage: number = 10;
  lastId:number = 0;


  allCharacters:any = [];
  tenCharacters:any = [];
  constructor(private RMApi: RMApiService){ }
  
  ngOnInit(): void {
    this.getList();
  }

  changePage(page: number) {
      this.currentPage = page;
      this.getNextPage(Math.ceil(page/2));
      if(page % 2 == 0){
        this.limit = 10;
        this.limitInPage = 20;
      }else{
        this.limit = 0;
        this.limitInPage = 10;
      }
      //console.log(this.tenCharacters[this.tenCharacters.length-1].id);
      
  }

  getList(){
    this.RMApi.getCharacters()
    .subscribe(data => {
      this.allCharacters = data;
      console.log(this.allCharacters);
      this.getOnlyTen(this.allCharacters);
    })
  }

  getOnlyTenPage(data:any, page: number){
    console.log('hola');
    let val = (page * 10) - 10;
    this.tenCharacters = [];

    this.total = data.info['count'];
    //console.log(data.info['count'])
    for (let index = val; index <= page; index++) {
      this.tenCharacters.push(data.results[index]);
      console.log(data.results[index])
    }
  }

  getOnlyTen(data:any){
    //console.log(data.info['count'])
    this.tenCharacters = [];
    data.results.forEach((element: {results:any}) => {
      this.tenCharacters.push(element);
    });
  }

  getNextPage(page:number){
    this.RMApi.getNextPageCharacters(page)
      .subscribe(data => {
        this.allCharacters = data;
        console.log(this.allCharacters);
        this.getOnlyTen(this.allCharacters);
      })
  }



}
