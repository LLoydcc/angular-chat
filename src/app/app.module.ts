/** modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

/** fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCommentDots, faCircle, faUserCircle, faTimes, faImage } from '@fortawesome/free-solid-svg-icons';

/** components */
import { AppComponent } from './app.component';
import { ChatComponent } from '../components/chat/chat.component';
import { ChatMessageComponent } from '../components/chat-message/chat-message.component';

@NgModule({

  /** all components must be added to declarations. After the component is declarated
   *  we can use it everywhere we want. We can call a module with the help of the selector
   *  defined in every component. 
   */
  declarations: [
    AppComponent, 
    ChatComponent,
    ChatMessageComponent
  ],

  /** over here we need to put all Modules in, used within the application.  */
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],

  /** bootstrap means, this component will be rendered at first. It is declared as the 
   *  'root' of the angular application.
   */
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){

      /** Fontawesome imports need to be added to library over here. */
      library.add(faCommentDots, faCircle, faUserCircle, faTimes, faImage);
    }
 }
