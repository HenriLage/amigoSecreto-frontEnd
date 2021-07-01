import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { PessoaService } from 'src/app/core/pessoa.service';

@Component({
  selector: 'app-exclui-pessoa',
  templateUrl: './exclui-pessoa.component.html',
  styleUrls: ['./exclui-pessoa.component.css'],
})
export class ExcluiPessoaComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ExcluiPessoaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public pessoaService: PessoaService
  ) {}

  ngOnInit(): void {}

  cancelar(): void {
    this.dialogRef.close();
  }
  confirmar(): void {
    this.pessoaService.excluir(this.data.id).subscribe();
  }
}
