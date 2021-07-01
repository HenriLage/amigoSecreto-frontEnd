import { Pessoa } from 'src/app/core/pessoa';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { PessoaService } from 'src/app/core/pessoa.service';
import { DialogSucessoComponent } from 'src/app/shared/components/dialog-sucesso/dialog-sucesso.component';

@Component({
  selector: 'app-cadastra-pessoa',
  templateUrl: './cadastra-pessoa.component.html',
  styleUrls: ['./cadastra-pessoa.component.css'],
})
export class CadastraPessoaComponent implements OnInit {
  id!: number;
  cadastro!: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);

  dialogRef!: MatDialogRef<CadastraPessoaComponent>;

  @ViewChild('emailInput') emailInput!: ElementRef<HTMLInputElement>;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private pessoaService: PessoaService
  ) {}

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  iniciarFormulario(): void {
    this.cadastro = this.fb.group({
      nome: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submit(): void {
    console.log(this.cadastro.value);
    const pessoa = this.cadastro.value as Pessoa;

    this.pessoaService.salvar(pessoa).subscribe();
    this.dialog.closeAll();
    this.dialog.open(DialogSucessoComponent);
  }
}
