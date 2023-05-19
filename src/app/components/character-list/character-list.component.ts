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
  nextSearch:string = "";

  arrayQuery:string[] = []
  bandera = false;
  /* name:string = "";
  status:string = "";
  species:string = "";
  gender:string ="";
  type:string = ""; */


  allCharacters:any = [];
  tenCharacters:any = [];
  constructor(private RMApi: RMApiService){ }
  
  ngOnInit(): void {
    this.getList();
  }

  filterCharacter(){
    let fullQuery:string = "";
    for (let i = 0; i < this.arrayQuery.length; i++) {
      if(this.arrayQuery[i] !== undefined && i == 0){
        fullQuery += "&name=" + this.arrayQuery[i];
      }
      if(this.arrayQuery[i] !== undefined && i == 1){
        fullQuery += "&status=" + this.arrayQuery[i];
      }
      if(this.arrayQuery[i] !== undefined && i == 2){
        fullQuery += "&species=" + this.arrayQuery[i];
      }
      if(this.arrayQuery[i] !== undefined && i == 3){
        fullQuery += "&gender=" + this.arrayQuery[i];
      }
      if(this.arrayQuery[i] !== undefined && i == 4){
        fullQuery += "&type=" + this.arrayQuery[i];
      }
    }
    console.log(fullQuery.substring(1)); //remove the first '&'

    try {
      this.RMApi.getFilterCharacters(fullQuery)
      .subscribe(data => {
        this.bandera = false;

        this.allCharacters = data;
        this.nextSearch = this.allCharacters.info['next'];
        console.log(this.nextSearch);
        this.getOnlyTen(this.allCharacters);
      },(error) => {
        this.bandera = true;
        console.error('Search not found!')
      })
    } catch (error) {
      console.log(error)
    }
  }

  changePage(page: number) {
      this.currentPage = page;
      /* if(this.nextSearch !== ""){
        //this.getNextPageByUrl(this.nextSearch);
      } */
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
