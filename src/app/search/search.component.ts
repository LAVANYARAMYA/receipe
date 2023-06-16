import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  // receipes:any;

  receipes=[{
    name:"tomato rice",
    ingredients:'tomato*rice',
    instructions:"Wash and drain the basmati rice and soak for about 20 minutes. Take a deep pan, put it on medium flame and pour water into it. Bring it to a boil, and then add the soaked rice. Cover the pan with a lid and cook on medium flame till the rice becomes soft, but not mushy",
    servingsize:2,
    preptime:30
  },
  {
    name:"tomato curry",
    ingredients:'tomato*rice*veg',
    instructions:"Wash and drain the basmati rice and soak for about 20 minutes. Take a deep pan, put it on medium flame and pour water into it. Bring it to a boil, and then add the soaked rice. Cover the pan with a lid and cook on medium flame till the rice becomes soft, but not mushy",
    servingsize:3,
    preptime:20
  }];

  constructor( private fb: FormBuilder) {
    
  }
  searchForm=this.fb.group({
    Ingredients: [''],
  });

}
