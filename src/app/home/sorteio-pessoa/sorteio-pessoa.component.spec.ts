import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteioPessoaComponent } from './sorteio-pessoa.component';

describe('SorteioPessoaComponent', () => {
  let component: SorteioPessoaComponent;
  let fixture: ComponentFixture<SorteioPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorteioPessoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SorteioPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
