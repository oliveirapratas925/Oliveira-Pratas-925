/* ==========================================================================
   SCRIPT OLIVEIRA PRATAS 925 - ATUALIZADO (IMAGEM + VÍDEO + LIMPA PRATAS)
   ========================================================================== */

// BASE DE DADOS OFICIAL DE PRODUTOS
const PRODUCTS = [
    // ALIANÇAS
    { id: 1, name: "Aliança 4mm de Compromisso e Namoro em Prata 950 Legítima", price: 350, category: "ALIANÇAS", image: "Aliança 4mm De Compromisso E Namoro Em Prata 950 Legítima.png", isBestSeller: false },
    { id: 2, name: "Aliança de Namoro Compromisso Prata 950 Diamantada 3mm", price: 270, category: "ALIANÇAS", image: "Aliança De Namoro Compromisso Prata 950 Diamantada 3mm.png", isBestSeller: false },
    { id: 3, name: "Aliança de Namoro Zircônia Rosa em Prata 950 + Solitário", price: 285, category: "ALIANÇAS", image: "Aliança De Namoro Zircônia Rosa Em Prata 950 + Solitário.png", isBestSeller: false },
    { id: 4, name: "Aliança Prata 950 Namoro + Anel Solitário", price: 349, category: "ALIANÇAS", image: "Aliança Prata 950 Namoro + Anel Solitário.png", isBestSeller: false },
    { id: 5, name: "Alianças Coração Fio de Ouro + Solitário", price: 450, category: "ALIANÇAS", image: "Alianças Coração Fio De Ouro - Prata 950 Com Anel Solitário.png", isBestSeller: false },
    { id: 6, name: "Alianças de Namoro com Pedra Roxa + Solitário", price: 299, category: "ALIANÇAS", image: "Alianças De Namoro Com Pedra Roxa Prata 950 + Anel Solitário.png", isBestSeller: false },
    { id: 7, name: "Alianças de Namoro com Pedras de Zircônia Prata 950 – 5mm", price: 595, category: "ALIANÇAS", image: "Alianças De Namoro Com Pedras De Zircônia Prata 950- 5mm.png", isBestSeller: false },
    { id: 8, name: "Alianças de Namoro Prata 950 Fina com Pedra Zircônia", price: 300, category: "ALIANÇAS", image: "Alianças De Namoro Prata 950 Fina Com Pedra Zircônia.png", isBestSeller: false },
    { id: 9, name: "Alianças de Namoro Prata Legítima 2mm + Caixinha", price: 250, category: "ALIANÇAS", image: "Alianças De Namoro Prata Legítima 2mm + Caixinha.png", isBestSeller: false },
    { id: 10, name: "Alianças Namoro Compromisso Prata 950 Chanfradas Polidas", price: 195, category: "ALIANÇAS", image: "Alianças Namoro Compromisso Em Prata 950 Chanfradas Polidas.png", isBestSeller: false },
    { id: 11, name: "Alianças Pedra Roxa/Lilás + Solitário", price: 350, category: "ALIANÇAS", image: "Alianças Pedra Roxa lilás Prata 950 Legítima + Solitário.png", isBestSeller: false },
    { id: 12, name: "Par Aliança Prata 7mm Chanfrada + Solitário", price: 300, category: "ALIANÇAS", image: "Par Aliança Prata 7mm Chanfrada E Solitário Namoro.png", isBestSeller: false },
    { id: 13, name: "Par Aliança Prata 950 4mm + Solitário", price: 300, category: "ALIANÇAS", image: "Par Aliança Prata 950 Legitima 4mm Compromisso Com Solitário.png", isBestSeller: false },
    { id: 14, name: "Par De Aliança De Namoro Com Pedra Alianças De Prata 950", price: 349, category: "ALIANÇAS", image: "Par De Aliança De Namoro Com Pedra Alianças De Prata 950.png", isBestSeller: false },
    { id: 15, name: "Par de Aliança de Namoro com Pedra Zircônia Roxa", price: 399, category: "ALIANÇAS", image: "Par De Aliança De Namoro Com Pedra De Zircônia Roxa Prata 950.png", isBestSeller: false },
    { id: 16, name: "Par de Alianças 1/2 Cana Diamantado", price: 194, category: "ALIANÇAS", image: "Par De Alianças Meia Cana Com Diamantado Prata 950 Legítima.png", isBestSeller: false },
    { id: 17, name: "Par de Alianças com Pedra Zircônia Roxa + Solitário", price: 399, category: "ALIANÇAS", image: "Par de Alianças Com Pedra Zircônia Roxa + Anel Solitário.png", isBestSeller: false },
    { id: 18, name: "Par de Alianças de Namoro com Anel Solitário", price: 249, category: "ALIANÇAS", image: "Par De Alianças De Namoro Com Anel Solitário.png", isBestSeller: false },
    { id: 19, name: "Par de Alianças de Namoro Cravejada + Solitário", price: 399, category: "ALIANÇAS", image: "Par De Alianças De Namoro Cravejada Prata 950 Com Solitário.png", isBestSeller: false },
    { id: 20, name: "Par de Alianças de Namoro Prata 950 Arredondada Polida", price: 199, category: "ALIANÇAS", image: "Par De Alianças De Namoro Prata 950 Arredondada Polida.png", isBestSeller: false },

    // ANÉIS
    { id: 22, name: "Anel Coroa azul bb", price: 60, category: "ANÉIS", image: "Anel Coroa azul bb.jpg", isBestSeller: false },
    { id: 23, name: "Anel de Prata 925 coração torcido", price: 50, category: "ANÉIS", image: "Anel de Prata 925 coração Torçido.jpg", isBestSeller: false },
    { id: 24, name: "Anel de Prata 925 Solitário", price: 50, category: "ANÉIS", image: "Anel de Prata 925 Solitário.jpg", isBestSeller: true },
    { id: 25, name: "Anel Love Cravejado", price: 65, category: "ANÉIS", image: "Anel Love Cravejado.jpg", isBestSeller: false },
    { id: 27, name: "Anel Trevo de Corações", price: 60, category: "ANÉIS", image: "Anel Trevo de Corações.jpg", isBestSeller: false },
    { id: 28, name: "Anel Amor 5,5mm", price: 60, category: "ANÉIS", image: "Anel Amor 5,5mm Prata 925.jpg", isBestSeller: false },
    { id: 29, name: "Anel Concha", price: 50, category: "ANÉIS", image: "Anel Concha.jpg", isBestSeller: false },
    { id: 30, name: "Anel Corações", price: 80, category: "ANÉIS", image: "Anel Corações.jpg", isBestSeller: false },
    { id: 31, name: "Anel Corações Cravejado", price: 65, category: "ANÉIS", image: "anel corações cravejado prata 925 (1).webp", isBestSeller: false },
    { id: 32, name: "Anel trevo cravejado prata 925", price: 65, category: "ANÉIS", image: "Anel trevo cravejado prata 925.webp", isBestSeller: false },
    { id: 33, name: "Anel Quadrado", price: 70, category: "ANÉIS", image: "Anel Quadrado.jpg", isBestSeller: false },

    // DEDEIRAS
    { id: 35, name: "Anel de prata 925 Flamengo", price: 270, category: "DEDEIRAS", image: "Anel de prata 925 Flamengo.png", isBestSeller: true },
    { id: 36, name: "Anel Folha", price: 200, category: "DEDEIRAS", image: "Anel Folha.png", isBestSeller: true },

    // BRINCOS
    { id: 37, name: "Brinco Redondo 12mm", price: 80, category: "BRINCOS", image: "Brinco Redondo 12mm de Prata 925.png", isBestSeller: true },
    { id: 38, name: "Brinco Redondo Argola Torcida", price: 30, category: "BRINCOS", image: "Brinco Redondo Argola Torcida Prata 925.png", isBestSeller: true },
    { id: 41, name: "Par de Brincos Argola Click + Cruz", price: 80, category: "BRINCOS", image: "Par de Brincos Argola Click com Pingente Cruz Cravejada.png", isBestSeller: true },
    { id: 42, name: "Trio de brincos bolinhas", price: 40, category: "BRINCOS", image: "Trio de brincos bolinhas.jpg", isBestSeller: false },
    { id: 43, name: "Trio de Brincos Redondo Royal", price: 40, category: "BRINCOS", image: "Trio de Brincos Redondo Royal.png", isBestSeller: false },
    { id: 44, name: "Brinco Baby Cruz", price: 40, category: "BRINCOS", image: "Brinco Baby Cruz.jpg", isBestSeller: false },
    { id: 45, name: "Par Brinco Coração 4mm", price: 30, category: "BRINCOS", image: "Par Brinco Coração 4mm.png", isBestSeller: true },
    { id: 46, name: "Par Brincos Coração Argola Torcida", price: 30, category: "BRINCOS", image: "Par Brincos Coração Argola Torcida.jpg", isBestSeller: false },
    { id: 47, name: "Par Brincos Cravejado Batimentos", price: 50, category: "BRINCOS", image: "Par Brincos Cravejado Batimentos.jpg", isBestSeller: true },
    { id: 48, name: "Par de Brincos Argola Infinito", price: 40, category: "BRINCOS", image: "Par de Brincos Argola Infinito.jpg", isBestSeller: false },
    { id: 49, name: "Trio Quadrado 3, 4 e 5mm", price: 50, category: "BRINCOS", image: "Trio Quadrado 3, 4 e 5mm.jpg", isBestSeller: false },
    { id: 50, name: "Trio Redondo Pedra Verde 3, 4 e 5mm", price: 40, category: "BRINCOS", image: "Trio Redondo Pedra Verde 3, 4 e 5mm.jpg", isBestSeller: false },

    // COLARES FEMININO
    { id: 52, name: "Choker de Prata 925 Corações Verde", price: 130, category: "COLARES FEMININO", image: "Choker de Prata 925 Corações Verde.jpg", isBestSeller: true },
    { id: 53, name: "Choker de Prata 925 Love", price: 130, category: "COLARES FEMININO", image: "Choker de Prata 925 Love.jpg", isBestSeller: true },
    { id: 54, name: "Colar Barbie", price: 99, category: "COLARES FEMININO", image: "Colar Barbie em Prata 925 Legítima.jpg", isBestSeller: false },
    { id: 55, name: "Colar Borboleta com Zircônias Coloridas", price: 99, category: "COLARES FEMININO", image: "Colar Borboleta Prata 925 Legítima Com Zircônias Coloridas.jpg", isBestSeller: false },
    { id: 56, name: "Colar Cravejado importado (2)", price: 700, category: "COLARES FEMININO", image: "Colar Cravejado importado (2).jpg", isBestSeller: true },
    { id: 57, name: "Colar Singapura + Coração Cravejado", price: 190, category: "COLARES FEMININO", image: "Colar de Prata 925 Feminino - Corrente Singapura com Pingente Coração Cravejado.jpg", isBestSeller: true },
    { id: 58, name: "Colar Bailarina Cravejada", price: 99, category: "COLARES FEMININO", image: "Colar De Prata 925 Legítima Bailarina Cravejada Zircônia.jpg", isBestSeller: false },
    { id: 59, name: "Colar Modelo Pipoca", price: 100, category: "COLARES FEMININO", image: "Colar de Prata 925 Modelo Pipoca.jpg", isBestSeller: false },
    { id: 60, name: "Colar Mandala Abençoada por Deus", price: 99, category: "COLARES FEMININO", image: "Colar em Prata 925 Legítima - Pingente Mandala Abençoada por Deus.jpg", isBestSeller: false },
    { id: 61, name: "Colar Menino", price: 99, category: "COLARES FEMININO", image: "Colar Menino em Prata 925 Legítima.jpg", isBestSeller: false },
    { id: 62, name: "Colar Dois Corações Entrelaçados", price: 99, category: "COLARES FEMININO", image: "Colar Prata 925 com Pingente de Dois Corações Entrelaçados.jpg", isBestSeller: false },
    { id: 63, name: "Colar Patinha", price: 99, category: "COLARES FEMININO", image: "Colar Prata 925 Legítima Pingente Patinha Pet Zircônias Pretas.jpg", isBestSeller: false },
    { id: 64, name: "Conjunto Coração Verde Esmeralda", price: 100, category: "COLARES FEMININO", image: "CONJUNTO CORAÇÃO VERDE ESMERALDA EM PRATA 925.jpeg", isBestSeller: true },
    { id: 66, name: "Conjunto Ponto de Luz Verde Esmeralda", price: 99, category: "COLARES FEMININO", image: "Conjunto Ponto de Luz Prata 925 Verde Esmeralda (Colar + Brincos).jpg", isBestSeller: false },
    { id: 67, name: "Conjunto Coração Prata 925 Legítima - Colar Veneziana + Brincos Azul Turquesa", price: 99, category: "COLARES FEMININO", image: "Conjunto Coração Prata 925 Legítima - Colar Veneziana + Brincos Azul Turquesa.jpg", isBestSeller: true },
    { id: 68, name: "Gargantilha 6 Fios", price: 550, category: "COLARES FEMININO", image: "Gargantilha 6 Fios em Prata 925.jpg", isBestSeller: true },
    { id: 69, name: "Gargantilha Aspiral 45cm 2,5mm", price: 140, category: "COLARES FEMININO", image: "Gargantilha Aspiral 45cm 2,5mm.jpg", isBestSeller: false },
    { id: 70, name: "Gargantilha Coração Rosa", price: 120, category: "COLARES FEMININO", image: "Gargantilha Coração Rosa.jpg", isBestSeller: false },
    { id: 71, name: "Gargantilha Pingente Menina", price: 99, category: "COLARES FEMININO", image: "Gargantilha Pingente Menina Prata 925 Italiana.jpg", isBestSeller: false },
    { id: 72, name: "Terço de Prata 925", price: 160, category: "COLARES FEMININO", image: "Terço de Prata 925 corrente fina bolinha 2.5mm.jpg", isBestSeller: false },
    { id: 73, name: "Colar Coração Roxo", price: 120, category: "COLARES FEMININO", image: "Colar Coração Roxo.jpg", isBestSeller: true },

    // CORRENTES MASCULINAS
    { id: 74, name: "Colar Baiano 2mm 70cm", price: 249, category: "CORRENTES MASCULINAS", image: "Colar baiano 2mm 70cm Prata 925.png", isBestSeller: false },
    { id: 75, name: "Corrente Bismack 3mm – 70cm", price: 249, category: "CORRENTES MASCULINAS", image: "Corrente Bismack 3mm - 70cm Prata 925.png", isBestSeller: false },
    { id: 76, name: "Corrente Grumet 7mm – 80cm", price: 999, category: "CORRENTES MASCULINAS", image: "Corrente Grumet 7mm - 80cm Prata 925.png", isBestSeller: false },
    { id: 77, name: "Corrente Grumet 10mm 70cm", price: 1400, category: "CORRENTES MASCULINAS", image: "Corrente Grumet 10mm 70cm.jpg", isBestSeller: false },
    { id: 78, name: "Corrente Grumet 7,3mm 70cm com Fecho Gaveta", price: 849, category: "CORRENTES MASCULINAS", image: "Corrente Grumet em Prata 925 - Fecho Gaveta.jpeg", isBestSeller: false },
    { id: 79, name: "Corrente Gucci 3,5mm – 70cm", price: 299, category: "CORRENTES MASCULINAS", image: "Corrente Gucci 3,5mm - 70cm Prata 925.png", isBestSeller: false },
    { id: 80, name: "Corrente Piastrine 3,5mm – 70cm", price: 399, category: "CORRENTES MASCULINAS", image: "Corrente Piastrine 3,5mm - 70cm Prata 925.png", isBestSeller: false },
    { id: 81, name: "Corrente Grumet 1,5mm 70cm", price: 100, category: "CORRENTES MASCULINAS", image: "Corrente Grumet 1,5mm 70cm.jpg", isBestSeller: false },
    { id: 82, name: "Corrente Grumet 3mm 70cm", price: 300, category: "CORRENTES MASCULINAS", image: "Corrente Grumet 3mm 70cm.jpg", isBestSeller: false },
    { id: 83, name: "Corrente Terço Grande", price: 250, category: "CORRENTES MASCULINAS", image: "Corrente Terço Grande.jpg", isBestSeller: false },

    // PINGENTES
    { id: 84, name: "Pingente Abençoada", price: 50, category: "PINGENTES", image: "Pingente Abençoada.jpg", isBestSeller: false },
    { id: 85, name: "Pingente Bailarina", price: 50, category: "PINGENTES", image: "Pingente Bailarina.jpg", isBestSeller: false },
    { id: 86, name: "Pingente Barbie", price: 50, category: "PINGENTES", image: "Pingente Barbie em Prata 925 com Detalhe em Resina (2).jpg", isBestSeller: false },
    { id: 87, name: "Pingente Borboleta Cravejado", price: 50, category: "PINGENTES", image: "Pingente Borboleta Cravejado.jpg", isBestSeller: false },
    { id: 88, name: "Pingente Coração Duplo", price: 50, category: "PINGENTES", image: "Pingente Coraçao duplo.jpg", isBestSeller: false },
    { id: 89, name: "Pingente Coroa", price: 60, category: "PINGENTES", image: "Pingente Coroa em Prata 925 (2).jpg", isBestSeller: false },
    { id: 90, name: "Pingente Cruz Palito", price: 50, category: "PINGENTES", image: "Pingente Cruz Palito.jpg", isBestSeller: true },
    { id: 91, name: "Pingente Cavalo", price: 50, category: "PINGENTES", image: "Pingente de Prata 925 Cavalo.jpeg", isBestSeller: false },
    { id: 92, name: "Pingente Yin & Yang", price: 85, category: "PINGENTES", image: "Pingente de Prata 925 Ing & Yang.jpg", isBestSeller: false },
    { id: 93, name: "Pingente Jacaré embaixo do Coqueiro", price: 85, category: "PINGENTES", image: "Pingente de Prata 925 Jacaré em Baixo do Coqueiro.jpg", isBestSeller: false },
    { id: 94, name: "Pingente Jacaré Lacoste", price: 60, category: "PINGENTES", image: "Pingente de prata 925 Jacare lacoste.jpg", isBestSeller: false },
    { id: 95, name: "Pingente Oakley", price: 50, category: "PINGENTES", image: "Pingente de Prata 925 Oakley.jpeg", isBestSeller: false },
    { id: 96, name: "Pingente Fé", price: 100, category: "PINGENTES", image: "Pingente Fé Prata 925.jpg", isBestSeller: false },
    { id: 97, name: "Pingente Flamengo", price: 90, category: "PINGENTES", image: "Pingente Flamengo.jpg", isBestSeller: false },
    { id: 98, name: "Pingente Flor", price: 76.50, category: "PINGENTES", image: "Pingente Flor.jpg", isBestSeller: false },
    { id: 99, name: "Pingente Leão da Tribo de Judá", price: 60, category: "PINGENTES", image: "Pingente Leão da Tribo de Judá.jpg", isBestSeller: false },
    { id: 100, name: "Pingente Menino Cravejado", price: 50, category: "PINGENTES", image: "Pingente Menino em Prata 925 com Pedras Cravejadas (2).jpg", isBestSeller: false },
    { id: 101, name: "Pingente Patinha", price: 50, category: "PINGENTES", image: "Pingente Patinha.jpg", isBestSeller: false },
    { id: 102, name: "Pingente Tio Patinhas", price: 135, category: "PINGENTES", image: "Pingente Tio Patinhas.jpg", isBestSeller: false },
    { id: 103, name: "Pingente Cifrão Cravejado", price: 100, category: "PINGENTES", image: "Pingente Cifrão Cravejado.jpg", isBestSeller: false },
    { id: 104, name: "Pingente Cifrão", price: 70, category: "PINGENTES", image: "Pingente Cifrão.jpg", isBestSeller: false },
    { id: 105, name: "Pingente Cruz 3D", price: 50, category: "PINGENTES", image: "Pingente Cruz 3D.jpg", isBestSeller: false },
    { id: 106, name: "Pingente Cruz Celta", price: 50, category: "PINGENTES", image: "Pingente Cruz Celta.jpg", isBestSeller: false },
    { id: 107, name: "Pingente Fé Pequeno", price: 60, category: "PINGENTES", image: "Pingente Fe Pequeno.jpg", isBestSeller: false },
    { id: 108, name: "Pingente Fuzil", price: 60, category: "PINGENTES", image: "Pingente Fuzil.jpg", isBestSeller: false },
    { id: 109, name: "Pingente Globo Lost", price: 35, category: "PINGENTES", image: "Pingente Globo Lost.jpg", isBestSeller: false },
    { id: 110, name: "Pingente São Jorge", price: 50, category: "PINGENTES", image: "Pingente São Jorge.jpg", isBestSeller: false },

    // PULSEIRAS MASCULINAS
    { id: 111, name: "Pulseira Grumet elo duplo 3,5mm", price: 149, category: "PULSEIRAS MASCULINAS", image: "Pulseira Grumet elo duplo 3,5mm Prata 925.jpg", isBestSeller: true },
    { id: 112, name: "Pulseira 8,2mm", price: 299, category: "PULSEIRAS MASCULINAS", image: "pulseira8,2mm.jpg", isBestSeller: true },
    { id: 113, name: "Pulseira Esteira 2,4mm", price: 99, category: "PULSEIRAS MASCULINAS", image: "pulseira esteira 2,4mm.jpg", isBestSeller: true },
    { id: 114, name: "Pulseira Grumet Elo Duplo 2mm", price: 80, category: "PULSEIRAS MASCULINAS", image: "Pulseira Grumet elo duplo 2mm.jpg", isBestSeller: true },
    { id: 115, name: "Pulseira Tripla", price: 90, category: "PULSEIRAS MASCULINAS", image: "Pulseira Tripla.jpg", isBestSeller: true },

    // PULSEIRAS FEMININAS
    { id: 116, name: "Pulseira Bolinhas 4mm 18cm", price: 100, category: "PULSEIRAS FEMININAS", image: "Pulseira Bolinhas 4mm 18cm 6.2g.jpg", isBestSeller: true },
    { id: 117, name: "Pulseira Coração Vermelho", price: 70, category: "PULSEIRAS FEMININAS", image: "pulseira coração vermelho.jpg", isBestSeller: true },
    { id: 118, name: "Pulseira de Prata 925 com Pingentes Delicados", price: 150, category: "PULSEIRAS FEMININAS", image: "Pulseira de Prata 925 com Pingentes Delicados.jpeg", isBestSeller: true },
    { id: 119, name: "Pulseira Dupla com Pingentes Delicados", price: 150, category: "PULSEIRAS FEMININAS", image: "Pulseira Dupla em Prata 925 Com Pingentes Delicados.jpeg", isBestSeller: true },
    { id: 120, name: "Pulseira Prata 925 com Pedras Verdes", price: 70, category: "PULSEIRAS FEMININAS", image: "Pulseira Prata 925 com Pedras Verdes.jpg", isBestSeller: true },
    { id: 121, name: "Pulseira Feminina Bolinhas", price: 129, category: "PULSEIRAS FEMININAS", image: "pulseira feminina bolinhas.jpg", isBestSeller: true },
    { id: 122, name: "Pulseira Prata 925 com Pedras Zircônia Branca", price: 70, category: "PULSEIRAS FEMININAS", image: "Pulseira Prata 925 com Pedras Zircônia Branca .jpg", isBestSeller: true },
    { id: 123, name: "Pulseira Trançada 8 Fios", price: 297, category: "PULSEIRAS FEMININAS", image: "pulseira trançada 8 fios.jpg", isBestSeller: true },

    // BRACELETES
    { id: 124, name: "Bracelete Arredondado com Trava", price: 100, category: "BRACELETES", image: "Bracelete Arredondado com trava prata 925.png", isBestSeller: true },
    { id: 125, name: "Bracelete Fio Torcido / Fecho de Prata 925 Pequeno", price: 80, category: "BRACELETES", image: "Bracelete fio Torçido prata 925.png", isBestSeller: true },
    { id: 126, name: "Bracelete Regulável Coração Infinito", price: 70, category: "BRACELETES", image: "Bracelete Regulavel Coração infinito.jpg", isBestSeller: true },

    // TORNOZELEIRAS
    { id: 127, name: "Tornozeleira Calda", price: 75, category: "TORNOZELEIRAS", image: "Tornozeleira Calda Prata 925.jpg", isBestSeller: true },
    { id: 128, name: "Tornozeleira Coração Origami", price: 75, category: "TORNOZELEIRAS", image: "Tornozeleira Coração Origami Prata 925.jpg", isBestSeller: true },
    { id: 129, name: "Tornozeleira Gota Verde", price: 75, category: "TORNOZELEIRAS", image: "Tornozeleira de Prata 925 gota Verde.jpg", isBestSeller: true },

    // CUIDADOS
    { id: 130, name: "Limpa Pratas", price: 25, category: "CUIDADOS", image: "Limpa Pratas.jpg", isBestSeller: true },
    { id: 131, name: "Fecho de Prata 925 Pequeno", price: 30, category: "CUIDADOS", image: "Fecho de prata 925 pequeno.webp", isBestSeller: true },

    // PIERCINGS
    { id: 132, name: "Piercing Pedrinha de Nariz", price: 30, category: "PIERCINGS", image: "Piercing Pedrinha nariz na Prata 925.webp", isBestSeller: true },
    { id: 133, name: "Par Piercing Mamilo", price: 90, category: "PIERCINGS", image: "Par Piercing Mamilo.png", isBestSeller: false },
    { id: 134, name: "Piercing Argola com Flor", price: 30, category: "PIERCINGS", image: "Piercing Argola com Flor.png", isBestSeller: false },
    { id: 135, name: "Piercing Argola Lisa", price: 30, category: "PIERCINGS", image: "Piercing Argola Lisa.png", isBestSeller: false },
    { id: 136, name: "Piercing Nariz Argola Coração", price: 30, category: "PIERCINGS", image: "Piercing Nariz Argola Coração.png", isBestSeller: false }
];

// TAXAS DE CARTÃO DE CRÉDITO
const CREDIT_RATES = {
    1: 3.09, 2: 3.04, 3: 3.34, 4: 5.24, 5: 5.34,
    6: 5.44, 7: 6.59, 8: 6.78, 9: 7.47, 10: 8.15
};

// ESTADO DA APLICAÇÃO
let cart = JSON.parse(localStorage.getItem('op_cart')) || [];
let favorites = JSON.parse(localStorage.getItem('op_favs')) || [];
let activeCategory = 'TODOS';

// RASTREABILIDADE GA4
function trackGA4Event(eventName, params = {}) {
    if (typeof gtag === 'function') {
        gtag('event', eventName, params);
    }
}

// INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderCatalog();
    renderBestSellers();
    renderLimpaPratasCard();
    updateBadges();
    injectImageModalHTML();
});

// MENU MOBILE
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// RENDERIZAR CARD DO LIMPA PRATAS LOGO ABAIXO DO VÍDEO
function renderLimpaPratasCard() {
    const container = document.getElementById('limpaPratasCardContainer');
    if (!container) return;

    const limpaPratasProduct = PRODUCTS.find(p => p.id === 130);
    if (limpaPratasProduct) {
        container.innerHTML = createProductCardHTML(limpaPratasProduct);
    }
}

// RENDERIZAR CATEGORIAS
function renderCategories() {
    const categoriesContainer = document.getElementById('categoriesContainer');
    const categories = ['TODOS', ...new Set(PRODUCTS.map(p => p.category))];
    
    categoriesContainer.innerHTML = categories.map(cat => `
        <button class="cat-btn ${cat === activeCategory ? 'active' : ''}" onclick="selectCategory('${cat}')">
            ${cat}
        </button>
    `).join('');
}

function selectCategory(cat) {
    activeCategory = cat;
    renderCategories();
    filterCatalog();
}

// RENDERIZAR CATÁLOGO E DESTAQUES
function renderCatalog(items = PRODUCTS) {
    const catalogGrid = document.getElementById('catalogGrid');
    
    let filtered = items;
    if (activeCategory !== 'TODOS') {
        filtered = items.filter(p => p.category === activeCategory);
    }

    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    if (searchTerm) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm));
    }

    if (filtered.length === 0) {
        catalogGrid.innerHTML = `<p class="text-center" style="grid-column: 1/-1; color: var(--text-secondary);">Nenhum produto encontrado.</p>`;
        return;
    }

    catalogGrid.innerHTML = filtered.map(product => createProductCardHTML(product)).join('');
}

function renderBestSellers() {
    const grid = document.getElementById('bestSellersGrid');
    if (!grid) return; // Proteção para não dar erro se o elemento não existir
    
    const bestSellers = PRODUCTS.filter(p => p.isBestSeller);
    grid.innerHTML = bestSellers.map(product => createProductCardHTML(product)).join('');
}

function createProductCardHTML(product) {
    const isFav = favorites.includes(product.id);
    return `
        <div class="product-card">
            <div class="product-img-wrapper" style="cursor: pointer;" onclick="openImageZoom('${product.image}', '${product.name}')" title="Clique para ver a imagem inteira">
                <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy" style="object-fit: contain; background-color: #121216;" onerror="this.onerror=null; this.src='https://via.placeholder.com/150/222/fff?text=Joia';">
                <button class="fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${product.id})">
                    ${isFav ? '❤️' : '🤍'}
                </button>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
                <button class="add-cart-btn" onclick="addToCart(${product.id})">ADICIONAR AO CARRINHO</button>
            </div>
        </div>
    `;
}

function filterCatalog() {
    renderCatalog();
}

// CRIAR MODAL DE ZOOM DE IMAGEM DINAMICAMENTE
function injectImageModalHTML() {
    if (document.getElementById('imageZoomModal')) return;
    const modalHtml = `
        <div id="imageZoomModal" class="modal" style="display: none; position: fixed; z-index: 99999; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.9); align-items: center; justify-content: center; padding: 20px;">
            <span onclick="closeImageZoom()" style="position: absolute; top: 20px; right: 30px; color: #fff; font-size: 40px; font-weight: bold; cursor: pointer; z-index: 100000;">&times;</span>
            <div style="text-align: center; max-width: 90%; max-height: 90%;">
                <img id="zoomModalImg" src="" alt="Zoom" style="max-width: 100%; max-height: 80vh; object-fit: contain; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
                <p id="zoomModalTitle" style="color: #fff; margin-top: 15px; font-size: 1.1rem; font-weight: 600;"></p>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function openImageZoom(imgSrc, imgTitle) {
    const modal = document.getElementById('imageZoomModal');
    const modalImg = document.getElementById('zoomModalImg');
    const modalTitle = document.getElementById('zoomModalTitle');
    
    modal.style.display = 'flex';
    modalImg.src = imgSrc;
    modalTitle.innerText = imgTitle;
}

function closeImageZoom() {
    const modal = document.getElementById('imageZoomModal');
    if (modal) modal.style.display = 'none';
}

// LÓGICA DE FAVORITOS
function toggleFavorite(id) {
    const index = favorites.indexOf(id);
    if (index === -1) {
        favorites.push(id);
        trackGA4Event('favorito', { item_id: id });
    } else {
        favorites.splice(index, 1);
    }
    localStorage.setItem('op_favs', JSON.stringify(favorites));
    updateBadges();
    renderCatalog();
    renderBestSellers();
    renderLimpaPratasCard();
    if (document.getElementById('favModal').classList.contains('active')) {
        renderFavoritesModal();
    }
}

function openFavoritesModal() {
    renderFavoritesModal();
    document.getElementById('favModal').classList.add('active');
}

function closeFavoritesModal() {
    document.getElementById('favModal').classList.remove('active');
}

function renderFavoritesModal() {
    const container = document.getElementById('favItemsContainer');
    const favProducts = PRODUCTS.filter(p => favorites.includes(p.id));

    if (favProducts.length === 0) {
        container.innerHTML = `<p class="text-center" style="color: var(--text-secondary); padding: 20px 0;">Nenhum favorito salvo ainda.</p>`;
        return;
    }

    container.innerHTML = favProducts.map(p => `
        <div class="cart-item" style="display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <img 
                src="${p.image}" 
                alt="${p.name}" 
                style="width: 50px; height: 50px; object-fit: contain; background: #121216; border-radius: 6px; flex-shrink: 0; cursor: pointer;"
                onclick="openImageZoom('${p.image}', '${p.name}')"
                onerror="this.onerror=null; this.src='https://via.placeholder.com/50/222/fff?text=Joia';"
            >
            <div style="flex: 1; min-width: 0; padding-right: 5px;">
                <div style="font-weight: 600; font-size: 0.9rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: #ffffff;" title="${p.name}">${p.name}</div>
                <div style="color: var(--text-secondary, #aaa); font-size: 0.85rem; margin-top: 3px;">R$ ${p.price.toFixed(2).replace('.', ',')}</div>
            </div>
            <div style="display: flex; align-items: center; gap: 8px; flex-shrink: 0;">
                <button class="btn btn-primary" style="padding: 6px 12px; font-size: 0.8rem; height: 36px; white-space: nowrap;" onclick="addToCart(${p.id})">+ Carrinho</button>
                <button class="btn btn-danger" style="padding: 6px; font-size: 0.85rem; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;" onclick="toggleFavorite(${p.id})">✕</button>
            </div>
        </div>
    `).join('');
}

// LÓGICA DO CARRINHO
function addToCart(id) {
    const item = cart.find(c => c.id === id);
    if (item) {
        item.qty += 1;
    } else {
        cart.push({ id, qty: 1 });
    }
    localStorage.setItem('op_cart', JSON.stringify(cart));
    updateBadges();
    trackGA4Event('adicionar_ao_carrinho', { item_id: id });
    openCartModal();
}

function updateQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            cart = cart.filter(c => c.id !== id);
            trackGA4Event('remover_do_carrinho', { item_id: id });
        }
    }
    localStorage.setItem('op_cart', JSON.stringify(cart));
    updateBadges();
    renderCartModal();
}

function clearCart() {
    cart = [];
    localStorage.setItem('op_cart', JSON.stringify(cart));
    updateBadges();
    renderCartModal();
}

function updateBadges() {
    document.getElementById('favCount').innerText = favorites.length;
    document.getElementById('cartCount').innerText = cart.reduce((acc, i) => acc + i.qty, 0);
}

function openCartModal() {
    renderCartModal();
    document.getElementById('cartModal').classList.add('active');
}

function closeCartModal() {
    document.getElementById('cartModal').classList.remove('active');
}

function renderCartModal() {
    const container = document.getElementById('cartItemsContainer');
    if (cart.length === 0) {
        container.innerHTML = `<p class="text-center" style="color: var(--text-secondary); padding: 20px 0;">Seu carrinho está vazio.</p>`;
        document.getElementById('cartSummary').innerHTML = '';
        document.getElementById('checkoutSection').classList.add('hidden');
        return;
    }

    document.getElementById('checkoutSection').classList.remove('hidden');

    container.innerHTML = cart.map(item => {
        const product = PRODUCTS.find(p => p.id === item.id);
        const subtotal = product.price * item.qty;
        return `
            <div class="cart-item">
                <img src="${product.image}" class="cart-item-img" alt="${product.name}" style="object-fit: contain; background: #121216; cursor: pointer;" onclick="openImageZoom('${product.image}', '${product.name}')" onerror="this.onerror=null; this.src='https://via.placeholder.com/50/222/fff?text=Joia';">
                <div class="cart-item-details">
                    <div class="cart-item-title">${product.name}</div>
                    <div class="cart-item-price">R$ ${product.price.toFixed(2).replace('.', ',')} x ${item.qty} = <strong>R$ ${subtotal.toFixed(2).replace('.', ',')}</strong></div>
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="updateQty(${product.id}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button class="qty-btn" onclick="updateQty(${product.id}, 1)">+</button>
                    </div>
                </div>
                <button class="btn btn-danger" onclick="updateQty(${product.id}, -${item.qty})">✕</button>
            </div>
        `;
    }).join('');

    calculateCartTotals();
}

function calculateCartTotals() {
    let rawSubtotal = 0;
    let eligibleSubtotal = 0;

    cart.forEach(item => {
        const product = PRODUCTS.find(p => p.id === item.id);
        const itemTotal = product.price * item.qty;
        rawSubtotal += itemTotal;
        if (product.category !== 'ALIANÇAS') {
            eligibleSubtotal += itemTotal;
        }
    });

    const benefitPercent = parseFloat(localStorage.getItem('op_benefit_percent')) || 0;
    const discountAmount = eligibleSubtotal * (benefitPercent / 100);
    const subtotalAfterDiscount = rawSubtotal - discountAmount;

    const paymentMethod = document.getElementById('paymentMethod').value;
    let finalTotal = subtotalAfterDiscount;
    let installmentText = '';

    if (paymentMethod === 'credito') {
        const installments = parseInt(document.getElementById('installmentsSelect').value);
        const rate = CREDIT_RATES[installments] || 0;
        finalTotal = subtotalAfterDiscount * (1 + rate / 100);
        const installmentValue = finalTotal / installments;
        installmentText = `<div class="summary-row"><span>Parcelas (${installments}x):</span> <span>${installments}x de R$ ${installmentValue.toFixed(2).replace('.', ',')}</span></div>`;
    }

    const summaryHtml = `
        <div class="summary-row"><span>Subtotal:</span> <span>R$ ${rawSubtotal.toFixed(2).replace('.', ',')}</span></div>
        ${benefitPercent > 0 ? `<div class="summary-row" style="color: #25d366;"><span>Desconto Conquistado (${benefitPercent}%):</span> <span>- R$ ${discountAmount.toFixed(2).replace('.', ',')}</span></div>` : ''}
        ${installmentText}
        <div class="summary-row total"><span>Total Final:</span> <span>R$ ${finalTotal.toFixed(2).replace('.', ',')}</span></div>
    `;

    document.getElementById('cartSummary').innerHTML = summaryHtml;
}

function toggleDeliveryFields() {
    const opt = document.querySelector('input[name="deliveryOption"]:checked').value;
    const addr = document.getElementById('addressFields');
    const caldas = document.getElementById('caldasFields');
    const correios = document.getElementById('correiosFields');

    if (opt === 'caldas') {
        addr.classList.remove('hidden');
        caldas.classList.remove('hidden');
        correios.classList.add('hidden');
    } else if (opt === 'correios') {
        addr.classList.remove('hidden');
        caldas.classList.add('hidden');
        correios.classList.remove('hidden');
    } else {
        addr.classList.add('hidden');
    }
}

function updatePaymentDetails() {
    const paymentMethod = document.getElementById('paymentMethod').value;
    const wrapper = document.getElementById('installmentsWrapper');
    if (paymentMethod === 'credito') {
        wrapper.classList.remove('hidden');
    } else {
        wrapper.classList.add('hidden');
    }
    calculateCartTotals();
}

// FINALIZAR PEDIDO VIA WHATSAPP
function finalizeWhatsAppOrder() {
    if (cart.length === 0) return;

    trackGA4Event('inicio_checkout');

    let rawSubtotal = 0;
    let eligibleSubtotal = 0;

    let message = `*NOVO PEDIDO - OLIVEIRA PRATAS 925*\n\n`;
    message += `*ITENS DO PEDIDO:*\n`;

    cart.forEach(item => {
        const product = PRODUCTS.find(p => p.id === item.id);
        const itemTotal = product.price * item.qty;
        rawSubtotal += itemTotal;
        if (product.category !== 'ALIANÇAS') {
            eligibleSubtotal += itemTotal;
        }
        message += `• ${product.name}\n  Qtd: ${item.qty} | Valor un: R$ ${product.price.toFixed(2).replace('.', ',')} | Subtotal: R$ ${itemTotal.toFixed(2).replace('.', ',')}\n`;
    });

    const benefitPercent = parseFloat(localStorage.getItem('op_benefit_percent')) || 0;
    const discountAmount = eligibleSubtotal * (benefitPercent / 100);
    const subtotalAfterDiscount = rawSubtotal - discountAmount;

    message += `\n------------------------------\n`;
    message += `*SUBTOTAL:* R$ ${rawSubtotal.toFixed(2).replace('.', ',')}\n`;

    if (benefitPercent > 0) {
        message += `*PRÊMIO ROLETA:* ${benefitPercent}%\n`;
        message += `*DESCONTO APLICADO:* R$ ${discountAmount.toFixed(2).replace('.', ',')}\n`;
    }

    const paymentMethod = document.getElementById('paymentMethod').value;
    let finalTotal = subtotalAfterDiscount;

    message += `*FORMA DE PAGAMENTO:* `;
    if (paymentMethod === 'pix') message += `Pix\n`;
    if (paymentMethod === 'dinheiro') message += `Dinheiro\n`;
    if (paymentMethod === 'debito') message += `Cartão de Crédito/Débito\n`;
    if (paymentMethod === 'credito') {
        const installments = parseInt(document.getElementById('installmentsSelect').value);
        const rate = CREDIT_RATES[installments] || 0;
        finalTotal = subtotalAfterDiscount * (1 + rate / 100);
        const installmentValue = finalTotal / installments;
        message += `Cartão de Crédito (${installments}x de R$ ${installmentValue.toFixed(2).replace('.', ',')})\n`;
    }

    message += `*TOTAL FINAL:* R$ ${finalTotal.toFixed(2).replace('.', ',')}\n`;
    message += `------------------------------\n`;

    const deliveryOpt = document.querySelector('input[name="deliveryOption"]:checked').value;
    message += `*FORMA DE ENTREGA:* `;

    if (deliveryOpt === 'caldas') {
        const loc = document.getElementById('custLocation').value || 'Não informado';
        message += `Entrega em Caldas Novas (Grátis)\n*ENDEREÇO/LOCALIZAÇÃO:* ${loc}\n`;
    } else if (deliveryOpt === 'correios') {
        const cep = document.getElementById('custCep').value || '-';
        const street = document.getElementById('custStreet').value || '-';
        const num = document.getElementById('custNumber').value || '-';
        const quadra = document.getElementById('custQuadra').value || '-';
        const lote = document.getElementById('custLote').value || '-';
        message += `Correios\n*ENDEREÇO:* ${street}, Nº: ${num}, Quadra: ${quadra}, Lote: ${lote} - CEP: ${cep}\n`;
    } else {
        message += `Retirada Presencial (A combinar)\n`;
    }

    trackGA4Event('finalizacao');

    const whatsappUrl = `https://wa.me/5564992145149?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// LÓGICA DE JOGOS E ROLETA
function openGame(gameKey) {
    trackGA4Event('inicio_jogo', { game: gameKey });
    const modal = document.getElementById('gameModal');
    const container = document.getElementById('gameContainer');
    modal.classList.add('active');

    if (gameKey === 'memory') renderMemoryGame(container);
    else if (gameKey === 'quiz') renderQuizGame(container);
    else if (gameKey === 'wordsearch') renderWordSearchGame(container);
    else if (gameKey === 'challenge') renderChallengeGame(container);
    else if (gameKey === 'roulette') renderRouletteGame(container);
}

function closeGameModal() {
    document.getElementById('gameModal').classList.remove('active');
}

function finishMinigame(gameName) {
    trackGA4Event('conclusao_jogo', { game: gameName });
    const container = document.getElementById('gameContainer');
    container.innerHTML = `
        <div class="game-box">
            <h2>🎉 Parabéns! Você concluiu o ${gameName}!</h2>
            <p style="margin: 20px 0; color: var(--text-secondary);">Agora você foi liberado para girar a Roleta de Descontos e conquistar seu benefício exclusivo!</p>
            <button class="btn btn-silver" onclick="renderRouletteGame(document.getElementById('gameContainer'))">Ir para a Roleta de Descontos 🎡</button>
        </div>
    `;
}

// JOGO 1: MEMÓRIA (COM ROTAÇÃO ALEATÓRIA DE CARTAS A CADA INÍCIO)
function renderMemoryGame(container) {
    // Sorteia 4 produtos aleatórios do catálogo a cada partida
    const shuffledProducts = [...PRODUCTS].sort(() => Math.random() - 0.5);
    const sampleProducts = shuffledProducts.slice(0, 4);
    
    let cards = [...sampleProducts, ...sampleProducts].sort(() => Math.random() - 0.5);
    let flippedCards = [];
    let matchedPairs = 0;

    container.innerHTML = `
        <div class="game-box">
            <h2>💎 Jogo da Memória</h2>
            <p>Encontre os 4 pares de joias para avançar!</p>
            <div class="memory-board" id="memoryBoard"></div>
        </div>
    `;

    const board = document.getElementById('memoryBoard');
    cards.forEach((item, index) => {
        const cardEl = document.createElement('div');
        cardEl.className = 'memory-card';
        cardEl.dataset.id = item.id;
        cardEl.dataset.index = index;
        cardEl.innerHTML = `❓`;
        cardEl.onclick = () => {
            if (flippedCards.length < 2 && !cardEl.classList.contains('flipped')) {
                cardEl.classList.add('flipped');
                cardEl.innerHTML = `<img src="${item.image}" alt="Joia" style="object-fit: contain; width: 100%; height: 100%;" onerror="this.onerror=null; this.src='https://via.placeholder.com/50/222/fff?text=Joia';">`;
                flippedCards.push({ cardEl, item });

                if (flippedCards.length === 2) {
                    if (flippedCards[0].item.id === flippedCards[1].item.id) {
                        matchedPairs++;
                        flippedCards = [];
                        if (matchedPairs === 4) {
                            setTimeout(() => finishMinigame('Jogo da Memória'), 800);
                        }
                    } else {
                        setTimeout(() => {
                            flippedCards.forEach(c => {
                                c.cardEl.classList.remove('flipped');
                                c.cardEl.innerHTML = `❓`;
                            });
                            flippedCards = [];
                        }, 1000);
                    }
                }
            }
        };
        board.appendChild(cardEl);
    });
}

// JOGO 2: QUIZ (5 PERGUNTAS ALEATÓRIAS E CONTADOR DE ACERTOS)
function renderQuizGame(container) {
    const allQuestions = [
        { q: "Qual o teor de prata pura na Prata 925?", options: ["92,5%", "50%", "100%", "75%"], correct: "92,5%" },
        { q: "Qual desses cuidados ajuda a manter o brilho da prata?", options: ["Usar Limpa Pratas adequado", "Lavar com água salgada", "Guardar ao sol", "Usar perfume direto na peça"], correct: "Usar Limpa Pratas adequado" },
        { q: "A Prata 950 contém mais prata pura que a 925?", options: ["Sim, possui 95% de prata pura", "Não, é inferior", "São idênticas", "Depende do tamanho"], correct: "Sim, possui 95% de prata pura" },
        { q: "O escurecimento da prata (oxidação) é um processo normal?", options: ["Sim, é uma reação natural ao enxofre/suor", "Não, é defeito", "Só ocorre na prata falsa", "Nunca escurece"], correct: "Sim, é uma reação natural ao enxofre/suor" },
        { q: "Qual é o nome do produto indicado para devolver o brilho às suas joias?", options: ["Limpa Pratas", "Detergente de louça", "Álcool 70%", "Sabão em pó"], correct: "Limpa Pratas" },
        { q: "Qual o metal de liga mais comum usado na Prata 925?", options: ["Cobre", "Ouro", "Alumínio", "Ferro"], correct: "Cobre" },
        { q: "Como guardar suas joias de prata para evitar oxidação precoce?", options: ["Em local seco, fechado e longe da umidade", "Expostas ao ar livre", "No banheiro", "Junto com bijuterias"], correct: "Em local seco, fechado e longe da umidade" },
        { q: "O que a Zircônia representa nas joias em Prata 925?", options: ["Uma gema sintética de alto brilho que imita o diamante", "Um tipo de plástico", "Um metal pesado", "Uma tinta prateada"], correct: "Uma gema sintética de alto brilho que imita o diamante" }
    ];

    // Embaralha e seleciona 5 perguntas por partida
    const selectedQuestions = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 5);

    let currentStep = 0;
    let acertos = 0;

    function showQuestion() {
        const current = selectedQuestions[currentStep];
        // Embaralha as alternativas de resposta da pergunta atual
        const shuffledOptions = [...current.options].sort(() => Math.random() - 0.5);

        container.innerHTML = `
            <div class="game-box" style="text-align: center; padding: 20px;">
                <span style="font-size: 14px; color: var(--text-secondary);">Pergunta ${currentStep + 1} de ${selectedQuestions.length}</span>
                <h3 style="margin: 15px 0 20px;">${current.q}</h3>
                <div style="display: flex; flex-direction: column; gap: 10px; max-width: 400px; margin: 0 auto;">
                    ${shuffledOptions.map(opt => `
                        <button class="btn btn-outline" style="width: 100%; text-align: left; padding: 12px 15px;" onclick="checkQuizAnswer('${opt.replace(/'/g, "\\'")}')">
                            ${opt}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    window.checkQuizAnswer = (selectedOption) => {
        if (selectedOption === selectedQuestions[currentStep].correct) {
            acertos++;
        }

        currentStep++;

        if (currentStep < selectedQuestions.length) {
            showQuestion();
        } else {
            let mensagem = "";
            const porcentagem = (acertos / selectedQuestions.length) * 100;

            if (porcentagem === 100) {
                mensagem = "🏆 Perfeito! Você é um verdadeiro especialista em Prata 925!";
            } else if (porcentagem >= 60) {
                mensagem = "👏 Muito bom! Você tem ótimos conhecimentos sobre nossas joias!";
            } else {
                mensagem = "💡 Boa tentativa! Que tal ler nossas dicas sobre prata para acertar tudo na próxima?";
            }

            container.innerHTML = `
                <div style="text-align: center; padding: 25px;">
                    <h2 style="font-size: 22px; margin-bottom: 15px;">Fim do Quiz! 🎉</h2>
                    <p style="font-size: 18px; margin-bottom: 10px;">Você acertou <strong>${acertos}</strong> de <strong>${selectedQuestions.length}</strong> perguntas.</p>
                    <p style="color: var(--text-secondary); margin-bottom: 25px;">${mensagem}</p>
                    <button onclick="renderQuizGame(document.getElementById('gameContainer'))" class="btn btn-outline" style="width: 100%; max-width: 250px;">
                        Jogar Novamente 🔄
                    </button>
                </div>
            `;
        }
    };

    showQuestion();
}

// JOGO 3: CAÇA-PALAVRAS (GRID EXPANDIDO, DIREÇÕES VARIADAS E DISTRIBUIÇÃO DINÂMICA)
function renderWordSearchGame(container) {
    const wordPool = ["PRATA", "ANEL", "BRINCO", "COLAR", "JOIA", "PINGENTE", "CORRENTE", "PULSEIRA", "ALIANCA", "SOLITARIO", "CHOKER", "ZEBRA", "BRIO"];
    
    // Sorteia 6 palavras da lista
    const selectedWords = [...wordPool].sort(() => Math.random() - 0.5).slice(0, 6);
    
    const ROWS = 10;
    const COLS = 10;
    let grid = Array.from({ length: ROWS }, () => Array(COLS).fill(''));
    let placedWordDetails = [];

    // Direções: Horizontal (0,1), Vertical (1,0), Diagonal Abai-Dir (1,1), Diagonal Acim-Dir (-1,1)
    const directions = [
        { r: 0, c: 1 },
        { r: 1, c: 0 },
        { r: 1, c: 1 },
        { r: -1, c: 1 }
    ];

    // Tenta posicionar as palavras sorteadas no grid
    selectedWords.forEach(word => {
        let placed = false;
        let attempts = 0;

        while (!placed && attempts < 200) {
            attempts++;
            const dir = directions[Math.floor(Math.random() * directions.length)];
            const startRow = Math.floor(Math.random() * ROWS);
            const startCol = Math.floor(Math.random() * COLS);

            let endRow = startRow + dir.r * (word.length - 1);
            let endCol = startCol + dir.c * (word.length - 1);

            if (endRow >= 0 && endRow < ROWS && endCol >= 0 && endCol < COLS) {
                let fits = true;
                for (let i = 0; i < word.length; i++) {
                    let r = startRow + dir.r * i;
                    let c = startCol + dir.c * i;
                    if (grid[r][c] !== '' && grid[r][c] !== word[i]) {
                        fits = false;
                        break;
                    }
                }

                if (fits) {
                    let cells = [];
                    for (let i = 0; i < word.length; i++) {
                        let r = startRow + dir.r * i;
                        let c = startCol + dir.c * i;
                        grid[r][c] = word[i];
                        cells.push({ r, c });
                    }
                    placedWordDetails.push({ name: word, cells });
                    placed = true;
                }
            }
        }
    });

    // Preenche os espaços vazios com letras maiúsculas aleatórias
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === '') {
                grid[r][c] = alphabet[Math.floor(Math.random() * alphabet.length)];
            }
        }
    }

    let foundWords = [];

    let gridHtml = '';
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            gridHtml += `<div class="ws-cell" data-row="${r}" data-col="${c}" onclick="clickWordSearchCell(${r}, ${c})">${grid[r][c]}</div>`;
        }
    }

    container.innerHTML = `
        <div class="game-box">
            <h2>🔎 Caça-palavras da Prata</h2>
            <p style="font-size: 0.85rem; margin-bottom: 12px; color: var(--text-secondary);">Encontre as ${placedWordDetails.length} palavras no grid (horizontal, vertical e diagonal):</p>
            
            <div class="ws-grid-container" style="display: grid; grid-template-columns: repeat(${COLS}, 1fr); gap: 4px; max-width: 340px; margin: 0 auto 15px auto;">
                ${gridHtml}
            </div>

            <div style="display: flex; flex-wrap: wrap; gap: 6px; justify-content: center;">
                ${placedWordDetails.map(w => `<span id="ws-badge-${w.name}" style="padding: 4px 8px; background: rgba(255,255,255,0.1); border-radius: 12px; font-size: 0.75rem; color: #ccc;">${w.name}</span>`).join('')}
            </div>
        </div>
        <style>
            .ws-cell {
                aspect-ratio: 1;
                background: #2a2a35;
                color: #ffffff;
                font-weight: bold;
                font-size: 0.85rem;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 4px;
                cursor: pointer;
                user-select: none;
                transition: background 0.2s;
            }
            .ws-cell.selected {
                background: #25d366 !important;
                color: #000000 !important;
            }
            .ws-cell.found {
                background: #25d366 !important;
                color: #000000 !important;
            }
        </style>
    `;

    window.clickWordSearchCell = (r, c) => {
        const cellEl = document.querySelector(`.ws-cell[data-row="${r}"][data-col="${c}"]`);
        if (cellEl) {
            cellEl.classList.toggle('selected');
        }

        // Verifica se alguma palavra não encontrada foi completada
        placedWordDetails.forEach(wordObj => {
            if (!foundWords.includes(wordObj.name)) {
                let allSelected = true;
                wordObj.cells.forEach(cell => {
                    const el = document.querySelector(`.ws-cell[data-row="${cell.r}"][data-col="${cell.c}"]`);
                    if (!el || !el.classList.contains('selected')) {
                        allSelected = false;
                    }
                });

                if (allSelected) {
                    foundWords.push(wordObj.name);
                    const badge = document.getElementById(`ws-badge-${wordObj.name}`);
                    if (badge) {
                        badge.style.background = '#25d366';
                        badge.style.color = '#000';
                        badge.style.fontWeight = 'bold';
                        badge.innerHTML = `✓ ${wordObj.name}`;
                    }

                    wordObj.cells.forEach(cell => {
                        const el = document.querySelector(`.ws-cell[data-row="${cell.r}"][data-col="${cell.c}"]`);
                        if (el) el.classList.add('found');
                    });

                    if (foundWords.length === placedWordDetails.length) {
                        setTimeout(() => finishMinigame('Caça-palavras'), 600);
                    }
                }
            }
        });
    };
}

// JOGO 4: DESAFIO DA PRATA (EXPANDIDO COM ROTAÇÃO E PERGUNTAS ALEATÓRIAS)
function renderChallengeGame(container) {
// Lista de desafios focada exclusivamente em Joias de Prata 925
    const allChallenges = [
        { q: "Qual destas peças é uma Corrente Grumet?", targetId: 76, options: [76, 24, 90, 105] },
        { q: "Qual destas peças é um Anel Solitário?", targetId: 24, options: [24, 35, 80, 111] },
        { q: "Qual destas peças é um Pingente Cruz Palito?", targetId: 90, options: [90, 84, 86, 95] },
        { q: "Qual destas peças é uma Pulseira Coração Vermelho?", targetId: 117, options: [117, 113, 120, 123] },
        { q: "Qual destas peças é um Piercing de Nariz?", targetId: 132, options: [132, 133, 37, 42] }
    ];

    // Sorteia 5 desafios aleatórios por partida
    const selectedChallenges = [...allChallenges].sort(() => Math.random() - 0.5).slice(0, 5);

    let step = 0;
    let acertos = 0; // Contador de acertos

    function showChallenge() {
        const current = selectedChallenges[step];
        // Embaralha a ordem das opções exibidas
        const shuffledOptions = [...current.options].sort(() => Math.random() - 0.5);
        const optProducts = shuffledOptions.map(id => PRODUCTS.find(p => p.id === id));

        container.innerHTML = `
            <div class="game-box">
                <h2>🥈 Desafio da Prata</h2>
                <p style="margin-bottom: 20px;">${current.q}</p>
                <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                    ${optProducts.map(p => `
                        <div style="cursor: pointer; border: 1px solid var(--border-color); padding: 10px; border-radius: 8px; width: 140px;" onclick="checkChallengeAnswer(${p.id})">
                            <img src="${p.image}" style="width: 100%; height: 100px; object-fit: contain; background: #121216; border-radius: 6px;" onerror="this.onerror=null; this.src='https://via.placeholder.com/100/222/fff?text=Joia';">
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    window.checkChallengeAnswer = (selectedId) => {
        if (selectedId === selectedChallenges[step].targetId) {
            acertos++;
        }

        step++;

        if (step < selectedChallenges.length) {
            showChallenge();
        } else {
            let mensagem = "";
            const porcentagem = (acertos / selectedChallenges.length) * 100;

            if (porcentagem === 100) {
                mensagem = "🏆 Mestre da Prata 925! Você acertou tudo!";
            } else if (porcentagem >= 60) {
                mensagem = "👏 Muito bem! Você conhece muito bem nossas joias!";
            } else {
                mensagem = "💡 Quase lá! Que tal dar uma olhada no nosso catálogo para conhecer mais?";
            }

            container.innerHTML = `
                <div style="text-align: center; padding: 25px;">
                    <h2 style="font-size: 22px; margin-bottom: 15px;">Fim do Desafio! 🎉</h2>
                    <p style="font-size: 18px; margin-bottom: 10px;">Você acertou <strong>${acertos}</strong> de <strong>${selectedChallenges.length}</strong> perguntas.</p>
                    <p style="color: var(--text-secondary); margin-bottom: 25px;">${mensagem}</p>
                    <button onclick="renderChallengeGame(document.getElementById('gameContainer'))" class="btn btn-outline" style="width: 100%; max-width: 250px;">
                        Jogar Novamente 🔄
                    </button>
                </div>
            `;
        }
    };

    showChallenge();
}

// JOGO 5: ROLETA DE DESCONTOS (ALINHAMENTO PERFEITO DE TEXTOS E CORES)
function renderRouletteGame(container) {
    const prizes = [
        { label: "8%", color: "#8cc63f" },
        { label: "10%", color: "#00a88f" },
        { label: "2%", color: "#009edb" },
        { label: "2%", color: "#2e3192" },
        { label: "5%", color: "#662d91" },
        { label: "8%", color: "#ec008c" },
        { label: "2%", color: "#f7941e" },
        { label: "10%", color: "#f15a24" },
        { label: "2%", color: "#ffcc00" },
        { label: "5%", color: "#a3d39c" }
    ];

    const sliceAngle = 360 / prizes.length; // 36deg por fatia

    // Constrói o gradiente cónico para as 10 fatias de cores
    const conicGradient = prizes.map((p, i) => {
        const start = i * sliceAngle;
        const end = (i + 1) * sliceAngle;
        return `${p.color} ${start}deg ${end}deg`;
    }).join(', ');

    // Gera os elementos de texto alinhados exatamente no meio de cada fatia
    const labelsHTML = prizes.map((p, i) => {
        const centerAngle = i * sliceAngle + (sliceAngle / 2);
        return `
            <div style="
                position: absolute;
                top: 0; left: 0; right: 0; bottom: 0;
                display: flex;
                justify-content: center;
                align-items: flex-start;
                padding-top: 18px;
                transform: rotate(${centerAngle}deg);
                transform-origin: 50% 50%;
                pointer-events: none;
            ">
                <span style="
                    color: #fff;
                    font-weight: bold;
                    font-size: 15px;
                    text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
                    transform: rotate(0deg);
                ">${p.label}</span>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <div class="game-box" style="text-align: center; padding: 20px;">
            <h2>🎰 Roleta de Descontos</h2>
            <p style="margin-bottom: 20px; color: var(--text-secondary);">Gire e ganhe um cupom de desconto exclusivo!</p>
            
            <div style="position: relative; width: 280px; height: 280px; margin: 0 auto 20px;">
                <!-- Marcador/Ponteiro Superior -->
                <div style="
                    position: absolute;
                    top: -12px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0; height: 0;
                    border-left: 12px solid transparent;
                    border-right: 12px solid transparent;
                    border-top: 20px solid #fff;
                    z-index: 10;
                    filter: drop-shadow(0px 2px 3px rgba(0,0,0,0.5));
                "></div>

                <!-- Roda da Roleta -->
                <div id="wheelDisk" style="
                    width: 100%; height: 100%;
                    border-radius: 50%;
                    background: conic-gradient(${conicGradient});
                    position: relative;
                    transition: transform 4s cubic-bezier(0.15, 0.99, 0.18, 1);
                    box-shadow: 0 4px 15px rgba(0,0,0,0.4);
                    overflow: hidden;
                ">
                    ${labelsHTML}
                </div>

                <!-- Botão Central Girar -->
                <button id="spinBtn" onclick="spinWheel()" style="
                    position: absolute;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    width: 70px; height: 70px;
                    border-radius: 50%;
                    background: #002266;
                    color: #fff;
                    border: 3px solid #fff;
                    font-weight: bold;
                    font-size: 14px;
                    cursor: pointer;
                    z-index: 5;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.4);
                ">Girar</button>
            </div>
        </div>
    `;

    let isSpinning = false;

    window.spinWheel = () => {
        if (isSpinning) return;
        isSpinning = true;

        const btn = document.getElementById('spinBtn');
        const wheel = document.getElementById('wheelDisk');
        btn.disabled = true;

        const winningIndex = Math.floor(Math.random() * prizes.length);
        const winningPrize = prizes[winningIndex];

        // Calcula a rotação para alinhar a fatia sorteada com o marcador superior (0 deg)
        const centerAngle = winningIndex * sliceAngle + (sliceAngle / 2);
        const targetDegrees = 3600 + (360 - centerAngle);

        wheel.style.transform = `rotate(${targetDegrees}deg)`;

        setTimeout(() => {
            container.innerHTML = `
                <div style="text-align: center; padding: 25px;">
                    <h2 style="font-size: 22px; margin-bottom: 15px;">Parabéns! 🎉</h2>
                    <p style="font-size: 18px; margin-bottom: 10px;">Você ganhou <strong>${winningPrize.label} de desconto</strong>!</p>
                    <p style="color: var(--text-secondary); margin-bottom: 25px;">Utilize no seu carrinho antes de finalizar a compra.</p>
                    <button onclick="renderRouletteGame(document.getElementById('gameContainer') || this.closest('.game-container') || this.parentElement.parentElement)" class="btn btn-outline" style="width: 100%; max-width: 250px;">
                        Girar Novamente 🔄
                    </button>
                </div>
            `;
        }, 4200);
    };
}
