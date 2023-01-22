import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http:HttpClient) { }

  public getRecipe():Observable<any>{
    return this.http.get(`${environment.API_GETRECIPE}`).pipe(
      map((prod)=>{
         return prod;
      })
    )
  }

  public getRecipeDetail(recipeid:any):Observable<any>{
    return this.http.post(`${environment.API_GETRECIPEDETAIL}`,{recipeid}).pipe(
      map((prod)=>{
         return prod;
      })
    )
  }
}
