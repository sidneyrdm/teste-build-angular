import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/produtos.service';
import { IProduto, IProdutoCarrinho } from '../produtos';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { CarrinhoService } from 'src/app/carrinho.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {


  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtoService: ProdutosService, 
    private route: ActivatedRoute, 
    private notificationService: NotificationService,
    private carrinhoService: CarrinhoService
    ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = routeParams.get('id');
    this.produto = this.produtoService.getOne(Number(produtoId));
  }

  adicionarAoCarrinho(){
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    this.carrinhoService.adicionarAoCarrinho(produto);
    this.notificationService.notificar("produto adicionado ao carrinho!");
  }

}
