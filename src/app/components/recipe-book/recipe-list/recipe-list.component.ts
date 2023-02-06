import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  reciples: Recipe[] = [
    new Recipe('A test reciple', 'This is simply a test', 'https://www.google.com/search?q=recipe&rlz=1C1CHBF_enUS924US924&sxsrf=AJOqlzVrAmM03mA71H2aZiFrKV03H29X0g:1675657633719&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiBgJeQh4D9AhV7jokEHdO6Dn0Q_AUoAXoECAEQAw&biw=2560&bih=1297&dpr=1#imgrc=v4k6d-HqJChBPM')
  ];

  constructor() { }

  ngOnInit() {

  }
}
