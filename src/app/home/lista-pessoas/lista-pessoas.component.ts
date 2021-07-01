import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { SorteioPessoaComponent } from './../sorteio-pessoa/sorteio-pessoa.component';
import { EditaPessoaComponent } from './../edita-pessoa/edita-pessoa.component';
import { PessoaService } from './../../core/pessoa.service';
import { Pessoa } from 'src/app/core/pessoa';
import { CadastraPessoaComponent } from '../cadastra-pessoa/cadastra-pessoa.component';
import { ExcluiPessoaComponent } from '../exclui-pessoa/exclui-pessoa.component';


@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css'],
})
export class ListaPessoasComponent implements OnInit {
  pessoas: Pessoa[] = [];

  dataSource = new MatTableDataSource<Pessoa>(this.pessoas);

  displayedColumns: string[] = [
    'id',
    'nome',
    'email',
    'createdAt',
    'updatedAt',
    'gerenciar',
  ];

  id!: number;
  index!: number;
  pessoa!: Pessoa;
  nome_amigoSecreto!: string;

  dados: Pessoa[] = [];

  constructor(
    private pessoaService: PessoaService,
    private dialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getLista();

  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.nome.toLowerCase().includes(filter) || data.email.toLowerCase().includes(filter);
    };

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  getLista(): void {
    this.pessoaService.listar().subscribe((pessoas: Pessoa[]) => {
      this.pessoas = pessoas;
      this.dataSource = new MatTableDataSource(this.pessoas);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    this.changeDetectorRefs.detectChanges();
  }

  botaoCadastrar() {
    const dialogRef = this.dialog.open(CadastraPessoaComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  botaoEditar(i: number, id: number, nome: string, email: string): void {
    this.id = id;
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(EditaPessoaComponent, {
      data: { id: id, nome: nome, email: email },
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  botaoExcluir(i: number, id: number, nome: string, email: string) {
    this.index = i;
    this.id = id;
    const dialogRef = this.dialog.open(ExcluiPessoaComponent, {
      data: { id: id, nome: nome, email: email },
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  botaoSortear() {
    this.pessoaService.sortear(this.pessoa).subscribe();
    const dialogRef = this.dialog.open(SorteioPessoaComponent);
    console.log('Sorteio gerado');

    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }
}
