// Node modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Local components
import { AppComponent } from './app.component';
import { ServerComponent } from './lecture/server/server.component';
import { WarningComponent } from './alerts/warning/warning.component';
import { SuccessComponent } from './alerts/success/success.component';
import { AssignmentTwoComponent } from './assignment/assignment-two/assignment-two.component';
import { AssignmentThreeComponent } from './assignment/assignment-three/assignment-three.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { S5AppComponent } from './lecture/section-5/s5-app/s5-app.component';
import { S5CockpitComponent } from './lecture/section-5/s5-cockpit/s5-cockpit.component';
import { S5ServerComponent } from './lecture/section-5/s5-server/s5-server.component';
@NgModule({
   declarations: [
      AppComponent,
      ServerComponent,
      WarningComponent,
      SuccessComponent,
      AssignmentTwoComponent,
      AssignmentThreeComponent,
      HeaderComponent,
      RecipesComponent,
      RecipeListComponent,
      RecipeDetailComponent,
      RecipeItemComponent,
      ShoppingListComponent,
      ShoppingEditComponent,
      S5AppComponent,
      S5CockpitComponent,
      S5ServerComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      // Add the NGX dropdown module - https://valor-software.com/ngx-bootstrap/#/dropdowns
      BsDropdownModule.forRoot()
   ],
   providers: [
      DatePipe
   ],
   // When the module is loaded, its gonna bootstrap the AppComponent which is the app.component.ts
   bootstrap: [AppComponent]
})
export class AppModule { }
