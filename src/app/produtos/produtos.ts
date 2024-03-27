export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Mouse Gamer Bright Light, LED, 2400DPI, 6 Botões, Preto - 0447", preco: 38.90, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-gamer.jpeg", quantidadeEstoque: 10 },
    { id: 2, descricao: "Monitor LG 27 IPS, Full HD, HDMI, VESA, Ajuste de Ângulo, FreeSync, Bordas Finas - 27MP400-B", preco: 798.99, descricaoPreco: "À vista no PIX", imagem: "./assets/monitor-27.jpeg", quantidadeEstoque: 10 },
    { id: 3, descricao: "Teclado Mecânico Gamer Redragon Fizz, RAINBOW, Switch Blue, ABNT 2, Black, K617-R-B (PT-BLUE)", preco: 178.99, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-gamer.jpeg", quantidadeEstoque: 10 },
    { id: 4, descricao: "Headset Gamer Bright, RGB, 7.1, USB, Microfone, LED, Preto - 0592", preco: 178.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-gamer.jpeg", quantidadeEstoque: 10 },
    { id: 5, descricao: "Notebook Samsung Book KP3BR, Intel Celeron 6305, 4GB, 256GB SSD, 15,6” Full HD, Windows 11, Cinza Chumbo - 550XDA-KP3", preco: 1828.99, descricaoPreco: "À vista no PIX", imagem: "./assets/notebook-samsung.jpeg", quantidadeEstoque: 10 },
    { id: 6, descricao: "Placa de Vídeo Palit NVIDIA GeForce GT 1030, 2GB DDR4, 64 Bits, Low Profile - NEC103000646-1082F", preco: 478.99, descricaoPreco: "À vista no PIX", imagem: "./assets/placa-video.jpeg", quantidadeEstoque: 10 },
    { id: 7, descricao: "Processador AMD Ryzen 7 5700G, AM4, Cache 20Mb, 3.8GHz (4.6GHz Max Turbo) - 100-100000263BOX", preco: 1278.99, descricaoPreco: "À vista no PIX", imagem: "./assets/ryzen.jpeg", quantidadeEstoque: 10 },
    { id: 8, descricao: "Placa Mãe MSI Pro B550M-P GEN3, Chipset B550, AMD AM4, mATX, DDR4, DVI HDMI", preco: 818.99, descricaoPreco: "À vista no PIX", imagem: "./assets/placa-am4.jpeg", quantidadeEstoque: 10 },
    { id: 9, descricao: "Gabinete Gamer Bluecase BG-024W, Lateral De Vidro Temperado, Sem Fonte, Branco - BG024WGCASE", preco: 149.99, descricaoPreco: "À vista no PIX", imagem: "./assets/gabinete-gamer.jpeg", quantidadeEstoque: 10 },
    { id: 10, descricao: "SSD Redragon Blaze, 1TB, M.2 2280 NVMe PCIe 4.0, Leitura 7450MB/s, Gravação 6600MB/s - GD-707", preco: 548.99, descricaoPreco: "À vista no PIX", imagem: "./assets/ssd-redragon.jpeg", quantidadeEstoque: 10 },
    { id: 11, descricao: "Memória Kingston Fury Beast EXPO, 16GB, 5200Mhz, DDR5, Preto - KF552C36BBE-16", preco: 518.99, descricaoPreco: "À vista no PIX", imagem: "./assets/memoria-ddr5.jpeg", quantidadeEstoque: 10 },
    { id: 12, descricao: "Processador Intel Core i9-10900KF, LGA 1200, Cache 20Mb, 3.70GHz (5.3GHz Max Turbo) - BX8070110900KF", preco: 2449.99, descricaoPreco: "À vista no PIX", imagem: "./assets/core-i9.jpeg", quantidadeEstoque: 10 }
]