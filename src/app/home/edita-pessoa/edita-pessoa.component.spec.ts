import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaPessoaComponent } from './edita-pessoa.component';

describe('EditaPessoaComponent', () => {
  let component: EditaPessoaComponent;
  let fixture: ComponentFixture<EditaPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaPessoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
