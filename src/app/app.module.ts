import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatInputModule } from  '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';


import {MatTabsModule} from '@angular/material/tabs';
import {TextFieldModule} from '@angular/cdk/text-field';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

//paginas

import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ContatoComponent } from './views/contato/contato.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/login/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    JogosComponent,
    FooterComponent,
    ContatoComponent,
    ComponentesComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule, 
    MatGridListModule,
    MatDividerModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatTabsModule,
    TextFieldModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
