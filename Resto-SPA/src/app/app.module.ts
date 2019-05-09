// Node modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

// Local components
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { WarningComponent } from './alerts/warning/warning.component';
import { SuccessComponent } from './alerts/success/success.component';
import { AssignmentTwoComponent } from './assignment/assignment-two/assignment-two.component';
import { AssignmentThreeComponent } from './assignment/assignment-three/assignment-three.component';

@NgModule({
   declarations: [
      AppComponent,
      ServerComponent,
      WarningComponent,
      SuccessComponent,
      AssignmentTwoComponent,
      AssignmentThreeComponent
   ],
   imports: [
      BrowserModule,
      FormsModule
   ],
   providers: [
      DatePipe
   ],
   // We are telling Angular which component to bootstrap at the
   // start of the application
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
