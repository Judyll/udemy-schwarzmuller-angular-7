// Node modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Local components
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { WarningComponent } from './alerts/warning/warning.component';
import { SuccessComponent } from './alerts/success/success.component';
import { AssignmentTwoComponent } from './assignment/assignment-two/assignment-two.component';

@NgModule({
   declarations: [
      AppComponent,
      ServerComponent,
      WarningComponent,
      SuccessComponent,
      AssignmentTwoComponent
   ],
   imports: [
      BrowserModule,
      FormsModule
   ],
   providers: [],
   // We are telling Angular which component to bootstrap at the
   // start of the application
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
