import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutospromocaoComponent } from './produtospromocao.component';

describe('ProdutospromocaoComponent', () => {
  let component: ProdutospromocaoComponent;
  let fixture: ComponentFixture<ProdutospromocaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutospromocaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutospromocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
