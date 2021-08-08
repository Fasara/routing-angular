import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ComponentThreeComponent } from './component-three/component-three.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PostOneComponent } from './post-one/post-one.component';
import { PostTwoComponent } from './post-two/post-two.component';
import { PostThreeComponent } from './post-three/post-three.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentThreeComponent,
    HomeComponent,
    HeaderComponent,
    PostOneComponent,
    PostTwoComponent,
    PostThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
