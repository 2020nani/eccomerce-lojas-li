import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { ProdutosService } from '../shared/services/produtos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private produtoService: ProdutosService
  ) {}

  quantidadeEncomendas: number = 0;

  ngOnInit(): void {}

  ngAfterContentChecked(): void {
    this.quantidadeEncomendas = this.produtoService.getEncomenda().length;
  }

  logout() {
    this.authService.fazerLogout();
    localStorage.clear();
  }
}
