import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Pessoa } from 'src/app/core/pessoa';
import { PessoaService } from 'src/app/core/pessoa.service';

@Component({
  selector: 'app-edita-pessoa',
  templateUrl: './edita-pessoa.component.html',
  styleUrls: ['./edita-pessoa.component.css']
})
export class EditaPessoaComponent implements OnInit {

  pessoa!: Pessoa;
  id!: number;
  cadastro!: FormGroup;

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<EditaPessoaComponent>,
    private fb: FormBuilder,
    private pessoaService: PessoaService,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  iniciarFormulario(): void {
    this.cadastro = this.fb.group({
      id: this.data.id,
      nome: this.data.nome,
      email: this.data.email,
    })
  }

  formControl = new FormControl('');

  submit(): void {
    console.log(this.cadastro.value);
    const pessoa = this.cadastro.value as Pessoa;

    this.pessoaService.editar(pessoa).subscribe();
  }

  cancelar(): void {
    this.dialogRef.close();
  }


}
