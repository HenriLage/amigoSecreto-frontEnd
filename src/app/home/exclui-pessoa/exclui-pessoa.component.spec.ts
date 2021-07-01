import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluiPessoaComponent } from './exclui-pessoa.component';

describe('ExcluiPessoaComponent', () => {
  let component: ExcluiPessoaComponent;
  let fixture: ComponentFixture<ExcluiPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluiPessoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluiPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
