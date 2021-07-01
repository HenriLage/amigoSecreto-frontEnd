import { PessoaService } from './core/pessoa.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './shared/components/topo/topo.component';
import { RodapeComponent } from './shared/components/rodape/rodape.component';

import { ListaPessoasComponent } from './home/lista-pessoas/lista-pessoas.component';
import { CadastraPessoaComponent } from './home/cadastra-pessoa/cadastra-pessoa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogSucessoComponent } from './shared/components/dialog-sucesso/dialog-sucesso.component';
import { EditaPessoaComponent } from './home/edita-pessoa/edita-pessoa.component';
import { ExcluiPessoaComponent } from './home/exclui-pessoa/exclui-pessoa.component';
import { DialogErroComponent } from './shared/components/dialog-erro/dialog-erro.component';
import { SorteioPessoaComponent } from './home/sorteio-pessoa/sorteio-pessoa.component';
import { SobreComponent } from './home/sobre/sobre.component';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    ListaPessoasComponent,
    CadastraPessoaComponent,
    DialogSucessoComponent,
    DialogErroComponent,
    EditaPessoaComponent,
    ExcluiPessoaComponent,
    SorteioPessoaComponent,
    SobreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  exports: [

  ],
  providers: [PessoaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
