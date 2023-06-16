import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
   receipes:any;

  

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
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((val)=>this.search(val as string)))
      
     
     .subscribe((value:any)=>
     {
      this.receipes=value;
     });
}

    search(receipe: string)
     {
        return this.http.get(`https://648a951417f1536d65e94e85.mockapi.io/receipes`);
     }

}
