import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {


  receipes:any;

   @Input() receipe={
    "id": "100",
    "name": "Chicken Rice",
    "poster": "https://th.bing.com/th/id/OIP.foSWCBsiSQym4ehEoExeLQHaKo?w=202&h=290&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "rating": 8.8,
    "summary": "Hainanese chicken rice is a dish of poached chicken and seasoned rice, served with chilli sauce and usually with cucumber garnishes.",
    "trailer": "https://www.youtube.com/embed/AG-L71lGvdI",
    "ingredients":"chicken,rice"

  }


       constructor( private http: HttpClient,private fb: FormBuilder) {
    
       }
       searchForm=this.fb.group({
         Ingredients: [''],
       });
     
     
       ngOnInit()
       {
          this.searchForm
          .get('Ingredients')
          ?.valueChanges.pipe(
           debounceTime(1000),
           distinctUntilChanged(),
           switchMap((val)=>this.search(val as string)))
           
          
          .subscribe((value:any)=>
          {
           this.receipes=value;
     
          });
     }
     
         search(receipe: string)
          {
             return this.http.get(`https://648a951417f1536d65e94e85.mockapi.io/receipes?ingredients=${receipe}`);
         //     if(this.receipes.ingredients===receipe)
         //     {
         //       console.log(this.receipes.name);
         //       return this.receipes.name;
         //     }
         //  }
     
          }
     
}
