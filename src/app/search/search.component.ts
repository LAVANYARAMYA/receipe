import { Component, Input } from '@angular/core';
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

   @Input() receipe={
        "name": "tomato rice",
        "ingredients": "tomato,rice",
        "imglink":"https://th.bing.com/th/id/R.b483a4b2a3ec58248e3045322615ff9a?rik=C%2fzjZRLzn87svg&riu=http%3a%2f%2fonedaycart.com%2fodcb%2fwp-content%2fuploads%2f2016%2f04%2fmaxresdefault1.jpg&ehk=2p0ZrfvEsujXDC35DaO5wmb3qPgBGimBrWk68DL%2bYg8%3d&risl=&pid=ImgRaw&r=0",
     
        "instructions": "Wash and drain the basmati rice and soak for about 20 minutes. Take a deep pan, put it on medium flame and pour water into it. Bring it to a boil, and then add the soaked rice. Cover the pan with a lid and cook on medium flame till the rice becomes soft, but not mushy",
        "servingsize": 2,
        "preptime": 30
       }


  //  receipes={
  //   "id":"",
  //   "name": "tomato rice",
  //   "ingredients": "tomato,rice",
  //   "instructions": "Wash and drain the basmati rice and soak for about 20 minutes. Take a deep pan, put it on medium flame and pour water into it. Bring it to a boil, and then add the soaked rice. Cover the pan with a lid and cook on medium flame till the rice becomes soft, but not mushy",
  //   "servingsize": 2,
  //   "preptime": 30
  // }

  

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
