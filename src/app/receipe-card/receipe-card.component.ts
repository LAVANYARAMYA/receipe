import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-receipe-card',
  templateUrl: './receipe-card.component.html',
  styleUrls: ['./receipe-card.component.css']
})
export class ReceipeCardComponent {

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

}
