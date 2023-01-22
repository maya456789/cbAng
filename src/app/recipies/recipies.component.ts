import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute ,ParamMap} from '@angular/router';

export interface PeriodicElement {
  name: string;
  id: number;
  recipe: string;
  desc:string;
  img_url:string;
}

/*const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];*/

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'recipe','desc','img_url'];
  dataSource!: MatTableDataSource<PeriodicElement>;

  constructor(private recipeservice:RecipeService,private route:Router){

  }

  ngOnInit(): void {
    this.recipeservice.getRecipe().pipe(first()).subscribe(
      (res)=>{
        this.dataSource=new MatTableDataSource(res.record);

        console.log("Get Recipe response::",res.record);
      }
    )
  }

  public recipeCreator(data:any){
    console.log('row data :',data.recipe.id);
    let rid=data.recipe.id;
    this.route.navigate( ['homepage/recipie_detail'], { queryParams: { id:rid}} )
  }
}
