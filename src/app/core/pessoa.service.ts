import { Pessoa } from 'src/app/core/pessoa';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const url = 'http://localhost:3000/pessoas/';
const urlSorteio = 'http://localhost:3000/sorteio';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  dataChange: BehaviorSubject<Pessoa[]> = new BehaviorSubject<Pessoa[]>([]);
  dialogData: any;

  constructor(private http: HttpClient) {}

  salvar(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(url, pessoa);
  }

  editar(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(url + pessoa.id, pessoa);
  }

  listar(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(url);
  }

  visualizar(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(url + id);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(url + id);
  }

  sortear(pessoa: Pessoa): Observable<Pessoa[]> {
    return this.http.put<Pessoa[]>(urlSorteio, pessoa);
  }

  getDialogData() {
    return this.dialogData;
  }
}
