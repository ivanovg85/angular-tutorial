import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_auto,w_610/v1/hellofresh_s3/image/5dcc139c96d0db43857c2eb3-a12c2ae7.jpg"
    ),
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_auto,w_610/v1/hellofresh_s3/image/5dcc139c96d0db43857c2eb3-a12c2ae7.jpg"
    )
  ];

  constructor() {}

  ngOnInit(): void {}
}
