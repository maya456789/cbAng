import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap, Router } from '@angular/router';
import { first } from 'rxjs';
import { RecipeService } from '../services/recipe.service';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  id: number;
  recipe: string;
  desc:string;
  img_url:string;
}

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  page:any;nmae:any;city:any;
  sub:any;

  displayedColumns: string[] = ['id', 'name', 'recipe','desc','ingredients','process','img_url'];
  dataSource!: MatTableDataSource<PeriodicElement>;

  constructor(private recipeservice:RecipeService,private arout:ActivatedRoute){}


  ngOnInit(): void {

    this.sub=this.arout.queryParams.subscribe(params=>{
      this.page=+params['id'];


    })
    console.log('RecipeDetail id :',this.page);

    this.recipeservice.getRecipeDetail(this.page).pipe(first()).subscribe(
      (res)=>{
        console.log("Detail Process :",res);
        this.dataSource=new MatTableDataSource(res.record);
      }
    )

  }
}
