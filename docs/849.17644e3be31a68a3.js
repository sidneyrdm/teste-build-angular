"use strict";(self.webpackChunkfundamentos_angular=self.webpackChunkfundamentos_angular||[]).push([[849],{1849:(x,p,i)=>{i.r(p),i.d(p,{ProdutosModule:()=>C});var u=i(6895),s=i(9541),o=i(1571);const g=[{id:1,descricao:"Mouse Gamer Bright Light, LED, 2400DPI, 6 Bot\xf5es, Preto - 0447",preco:38.9,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-gamer.jpeg",quantidadeEstoque:10},{id:2,descricao:"Monitor LG 27 IPS, Full HD, HDMI, VESA, Ajuste de \xc2ngulo, FreeSync, Bordas Finas - 27MP400-B",preco:798.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/monitor-27.jpeg",quantidadeEstoque:10},{id:3,descricao:"Teclado Mec\xe2nico Gamer Redragon Fizz, RAINBOW, Switch Blue, ABNT 2, Black, K617-R-B (PT-BLUE)",preco:178.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/teclado-gamer.jpeg",quantidadeEstoque:10},{id:4,descricao:"Headset Gamer Bright, RGB, 7.1, USB, Microfone, LED, Preto - 0592",preco:178.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/fone-gamer.jpeg",quantidadeEstoque:10},{id:5,descricao:"Notebook Samsung Book KP3BR, Intel Celeron 6305, 4GB, 256GB SSD, 15,6\u201d Full HD, Windows 11, Cinza Chumbo - 550XDA-KP3",preco:1828.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/notebook-samsung.jpeg",quantidadeEstoque:10},{id:6,descricao:"Placa de V\xeddeo Palit NVIDIA GeForce GT 1030, 2GB DDR4, 64 Bits, Low Profile - NEC103000646-1082F",preco:478.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/placa-video.jpeg",quantidadeEstoque:10},{id:7,descricao:"Processador AMD Ryzen 7 5700G, AM4, Cache 20Mb, 3.8GHz (4.6GHz Max Turbo) - 100-100000263BOX",preco:1278.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/ryzen.jpeg",quantidadeEstoque:10},{id:8,descricao:"Placa M\xe3e MSI Pro B550M-P GEN3, Chipset B550, AMD AM4, mATX, DDR4, DVI HDMI",preco:818.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/placa-am4.jpeg",quantidadeEstoque:10},{id:9,descricao:"Gabinete Gamer Bluecase BG-024W, Lateral De Vidro Temperado, Sem Fonte, Branco - BG024WGCASE",preco:149.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/gabinete-gamer.jpeg",quantidadeEstoque:10},{id:10,descricao:"SSD Redragon Blaze, 1TB, M.2 2280 NVMe PCIe 4.0, Leitura 7450MB/s, Grava\xe7\xe3o 6600MB/s - GD-707",preco:548.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/ssd-redragon.jpeg",quantidadeEstoque:10},{id:11,descricao:"Mem\xf3ria Kingston Fury Beast EXPO, 16GB, 5200Mhz, DDR5, Preto - KF552C36BBE-16",preco:518.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/memoria-ddr5.jpeg",quantidadeEstoque:10},{id:12,descricao:"Processador Intel Core i9-10900KF, LGA 1200, Cache 20Mb, 3.70GHz (5.3GHz Max Turbo) - BX8070110900KF",preco:2449.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/core-i9.jpeg",quantidadeEstoque:10}];let l=(()=>{class e{constructor(){this.produtos=g}getAll(){return this.produtos}getOne(t){return this.produtos.find(n=>n.id===t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function m(e,r){if(1&e&&(o.TgZ(0,"div",2)(1,"a",3),o._UZ(2,"img",4),o.TgZ(3,"h2",5),o._uU(4),o.qZA(),o.TgZ(5,"p",6),o._uU(6),o.qZA(),o.TgZ(7,"p",7),o._uU(8),o.qZA(),o.TgZ(9,"button",8),o._uU(10,"Comprar"),o.qZA()()()),2&e){const t=r.$implicit;o.xp6(1),o.MGl("routerLink","/produtos/",t.id,""),o.xp6(1),o.Q6J("src",t.imagem,o.LSH),o.xp6(2),o.Oqu(t.descricao),o.xp6(2),o.hij("R$ ",t.preco,""),o.xp6(2),o.Oqu(t.descricaoPreco)}}let P=(()=>{class e{constructor(t,n){this.produtoService=t,this.route=n}ngOnInit(){const t=this.produtoService.getAll();this.route.queryParamMap.subscribe(n=>{const c=n.get("descricao")?.toLowerCase();this.produtos=c?t.filter(d=>d.descricao.toLowerCase().includes(c)):t})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(l),o.Y36(s.gz))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-produtos"]],decls:2,vars:1,consts:[[1,"product-list"],["class","product-list__card",4,"ngFor","ngForOf"],[1,"product-list__card"],[1,"product-list__link",3,"routerLink"],[3,"src"],[1,"product-item__name"],[1,"product-item__price"],[1,"product-item__price-description"],["type","button",1,"btn","btn-primary"]],template:function(t,n){1&t&&(o.TgZ(0,"section",0),o.YNc(1,m,11,5,"div",1),o.qZA()),2&t&&(o.xp6(1),o.Q6J("ngForOf",n.produtos))},dependencies:[u.sg,s.yS],styles:[".product-list[_ngcontent-%COMP%]{padding:40px 0;width:-moz-fit-content;width:fit-content;display:flex;gap:20px;flex-flow:row wrap;justify-content:space-evenly;align-content:center}.product-list__card[_ngcontent-%COMP%]{box-sizing:border-box;padding:10px;border-radius:4px;flex:0 1 270px;height:500px;background-color:#fff;box-shadow:#63636333 0 2px 8px}.product-list__card[_ngcontent-%COMP%]:hover{outline:1px solid var(--blue);transform:scale(1.1);cursor:pointer}.product-list__link[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;row-gap:10px;text-decoration:none}.product-list__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px;width:250px;display:block}.product-item__name[_ngcontent-%COMP%]{max-width:30ch;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:16px;color:var(--blue)}.product-item__price[_ngcontent-%COMP%]{color:var(--orange);font-size:32px;font-weight:700}.product-item__price-deion[_ngcontent-%COMP%]{color:var(--gray);font-size:12px;font-weight:700}.product-item__buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px}.product-item__buy-button[_ngcontent-%COMP%]:hover{filter:brightness(1.1);cursor:pointer}"]}),e})();var h=i(8881);let f=(()=>{class e{constructor(t){this.snackBar=t}notificar(t){this.snackBar.open(t,"Ok",{duration:2e3,verticalPosition:"top",horizontalPosition:"center"})}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(h.ux))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var _=i(5087),a=i(433);const v=[{path:"",component:P},{path:":id",component:(()=>{class e{constructor(t,n,c,d){this.produtoService=t,this.route=n,this.notificationService=c,this.carrinhoService=d,this.quantidade=1}ngOnInit(){const n=this.route.snapshot.paramMap.get("id");this.produto=this.produtoService.getOne(Number(n))}adicionarAoCarrinho(){const t={...this.produto,quantidade:this.quantidade};this.carrinhoService.adicionarAoCarrinho(t),this.notificationService.notificar("produto adicionado ao carrinho!")}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(l),o.Y36(s.gz),o.Y36(f),o.Y36(_.e))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-detalhes-produto"]],decls:19,vars:8,consts:[[1,"product-container"],[1,"product-image__container"],[3,"src"],[1,"product-description__container"],[1,"product__name"],[1,"product__price"],["type","number","min","1","max","10",3,"ngModel","ngModelChange"],[1,"product__avaiability"],[1,"btn","btn-primary",3,"click"]],template:function(t,n){1&t&&(o.TgZ(0,"section",0)(1,"div",1),o._UZ(2,"img",2),o.qZA(),o.TgZ(3,"div",3)(4,"h2",4),o._uU(5),o.qZA(),o.TgZ(6,"h3",5),o._uU(7),o.ALo(8,"currency"),o.qZA(),o.TgZ(9,"p"),o._uU(10,"Estoque dispon\xedvel.: "),o.qZA(),o.TgZ(11,"label"),o._uU(12," Quantidade.: "),o.TgZ(13,"input",6),o.NdJ("ngModelChange",function(d){return n.quantidade=d}),o.qZA(),o._uU(14," unidade (s) "),o.qZA(),o.TgZ(15,"p",7),o._uU(16),o.qZA(),o.TgZ(17,"button",8),o.NdJ("click",function(){return n.adicionarAoCarrinho()}),o._uU(18,"Adicionar ao carrinho"),o.qZA()()()),2&t&&(o.xp6(2),o.Q6J("src",null==n.produto?null:n.produto.imagem,o.LSH),o.xp6(3),o.Oqu(null==n.produto?null:n.produto.descricao),o.xp6(2),o.Oqu(o.xi3(8,5,null==n.produto?null:n.produto.preco,"BRL")),o.xp6(6),o.Q6J("ngModel",n.quantidade),o.xp6(3),o.hij(" ",null==n.produto?null:n.produto.quantidadeEstoque," unidades em estoque "))},dependencies:[a.Fj,a.wV,a.JJ,a.qQ,a.Fd,a.On,u.H9],styles:[".product__container[_ngcontent-%COMP%]{display:flex;column-gap:20px;margin:20px 0}.product-image__container[_ngcontent-%COMP%]{align-self:center}img[_ngcontent-%COMP%]{width:350px;height:350px}.product__name[_ngcontent-%COMP%]{font-size:36px}.product__price[_ngcontent-%COMP%]{font-size:28px;font-weight:400;margin:20px 0}.product-description__container[_ngcontent-%COMP%]{border:1px solid var(--light-gray);border-radius:8px;padding:15px;flex:1}.product__avaiability[_ngcontent-%COMP%]{font-size:12px}label[_ngcontent-%COMP%]{margin:20px 0;display:block}input[_ngcontent-%COMP%]{width:30px;padding:5px}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}button[_ngcontent-%COMP%]:hover{filter:brightness(1.3)}"]}),e})()}];let M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[s.Bz.forChild(v),s.Bz]}),e})(),C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[u.ez,M,a.u5]}),e})()}}]);