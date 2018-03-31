import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Naadan chicken curry', 'Naadan chicken curry description', 'https://i.ytimg.com/vi/I5AAgRZhtIs/hqdefault.jpg'),
    new Recipe('Puttu and kadala', 'Puttu and kadala description', 'http://www.sailusfood.com/wp-content/uploads/2012/12/puttu-kadala-kerala-vegetarian-recipes.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
