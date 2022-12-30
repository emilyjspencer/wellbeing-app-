import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LogoutComponent } from './logout/logout.component';
import { TabsListComponent } from './tabs/tabs-list/tabs-list.component';
import { TabComponent } from './tabs/tab/tab.component';
import { ModalContainerComponent } from './modals/modal-container/modal-container/modal-container.component';
import { ModalComponent } from './modals/modal/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LogoutComponent,
    TabsListComponent,
    TabComponent,
    ModalContainerComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
