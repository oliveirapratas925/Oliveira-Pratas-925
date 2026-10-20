/* ==========================================================================
   SCRIPT OLIVEIRA PRATAS 925 - COM URL INDIVIDUAL DE PRODUTOS
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
    { id: 60, name: "Colar Mandala Abençoada por Deus", price: 99, category: "COLARES FEMININO", image: "Colar em Prata 925 Legítima - Pingente Mandala Abençoada por Deus.jpg", isBestSeller: false },
    { id: 61, name: "Colar Menino", price: 99, category: "COLARES FEMININO", image: "Colar Menino em Prata 925 Legítima.jpg", isBestSeller: false },
    { id: 62, name: "Colar Dois Corações Entrelaçados", price: 99, category: "COLARES FEMININO", image: "Colar Prata 925 com Pingente de Dois Corações Entrelaçados.jpg", isBestSeller: false },
    { id: 63, name: "Colar Patinha", price: 99, category: "COLARES FEMININO", image: "Colar Prata 925 Legítima Pingente Patinha Pet Zircônias Pretas.jpg", isBestSeller: false },
    { id: 64, name: "Conjunto Coração Verde Esmeralda", price: 100, category: "COLARES FEMININO", image: "CONJUNTO CORAÇÃO VERDE ESMERALDA EM PRATA 925.jpeg", isBestSeller: true },
    { id: 66, name: "Conjunto Ponto de Luz Verde Esmeralda", price: 99, category: "COLARES FEMININO", image: "Conjunto Ponto de Luz Prata 925 Verde Esmeralda (Colar + Brincos).jpg", isBestSeller: false },
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
    { id: 81, name: "Corrente Grumet 1,5mm 70cm", price: 80, category: "CORRENTES MASCULINAS", image: "Corrente Grumet 1,5mm 70cm.jpg", isBestSeller: false },
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
    
    // Verifica se a URL possui um ID de produto específico (ex: ?produto=37)
    checkUrlForProduct();
});

// FUNÇÃO PARA LER O PRODUTO DA URL E ABRIR O ZOOM OU ROLAR ATÉ ELE
function checkUrlForProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('produto');
    
    if (productId) {
        const product = PRODUCTS.find(p => p.id == productId);
        if (product) {
            // Aguarda um instante para garantir o carregamento do DOM e abre o zoom do produto direto
            setTimeout(() => {
                openImageZoom(product.image, product.name, product.id);
            }, 400);
        }
    }
}

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
    if (!grid) return;
    
    const bestSellers = PRODUCTS.filter(p => p.isBestSeller);
    grid.innerHTML = bestSellers.map(product => createProductCardHTML(product)).join('');
}

function createProductCardHTML(product) {
    const isFav = favorites.includes(product.id);
    return `
        <div class="product-card">
            <div class="product-img-wrapper" style="cursor: pointer;" onclick="openImageZoom('${product.image}', '${product.name}', ${product.id})" title="Clique para ver a imagem inteira e copiar o link">
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

// CRIAR MODAL DE ZOOM DE IMAGEM E BOTÃO DE COPIAR LINK DO PRODUTO
function injectImageModalHTML() {
    if (document.getElementById('imageZoomModal')) return;
    const modalHtml = `
        <div id="imageZoomModal" class="modal" style="display: none; position: fixed; z-index: 99999; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.9); align-items: center; justify-content: center; padding: 20px;">
            <span onclick="closeImageZoom()" style="position: absolute; top: 20px; right: 30px; color: #fff; font-size: 40px; font-weight: bold; cursor: pointer; z-index: 100000;">&times;</span>
            <div style="text-align: center; max-width: 90%; max-height: 90%;">
                <img id="zoomModalImg" src="" alt="Zoom" style="max-width: 100%; max-height: 70vh; object-fit: contain; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
                <p id="zoomModalTitle" style="color: #fff; margin-top: 15px; font-size: 1.1rem; font-weight: 600;"></p>
                
                <!-- BOTÃO PARA COPIAR O LINK INDIVIDUAL DO PRODUTO PARA O WHATSAPP -->
                <div style="margin-top: 15px;">
                    <button id="copyProductLinkBtn" class="btn btn-silver" style="padding: 10px 20px; font-size: 0.9rem;" onclick="copyCurrentProductLink()">
                        🔗 Copiar Link da Peça para o WhatsApp
                    </button>
                    <span id="copyFeedback" style="display: block; color: #25d366; font-size: 0.85rem; margin-top: 5px; height: 20px;"></span>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

let currentZoomProductId = null;

function openImageZoom(imgSrc, imgTitle, productId) {
    const modal = document.getElementById('imageZoomModal');
    const modalImg = document.getElementById('zoomModalImg');
    const modalTitle = document.getElementById('zoomModalTitle');
    
    currentZoomProductId = productId;
    modal.style.display = 'flex';
    modalImg.src = imgSrc;
    modalTitle.innerText = imgTitle;
    document.getElementById('copyFeedback').innerText = '';

    // Atualiza a URL do navegador sem recarregar a página para gerar o link individual
    if (productId) {
        const newUrl = `${window.location.pathname}?produto=${productId}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    }
}

function closeImageZoom() {
    const modal = document.getElementById('imageZoomModal');
    if (modal) {
        modal.style.display = 'none';
        // Limpa o parâmetro da URL ao fechar o zoom se desejar
        window.history.pushState({ path: window.location.pathname }, '', window.location.pathname);
    }
}

function copyCurrentProductLink() {
    if (!currentZoomProductId) return;
    
    const productUrl = `${window.location.origin}${window.location.pathname}?produto=${currentZoomProductId}`;
    
    navigator.clipboard.writeText(productUrl).then(() => {
        const feedback = document.getElementById('copyFeedback');
        feedback.innerText = '✅ Link copiado com sucesso! Cole direto no WhatsApp.';
        setTimeout(() => {
            feedback.innerText = '';
        }, 4000);
    }).catch(err => {
        console.error('Erro ao copiar link: ', err);
    });
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
                onclick="openImageZoom('${p.image}', '${p.name}', ${p.id})"
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
                <img src="${product.image}" class="cart-item-img" alt="${product.name}" style="object-fit: contain; background: #121216; cursor: pointer;" onclick="openImageZoom('${product.image}', '${product.name}', ${product.id})" onerror="this.onerror=null; this.src='https://via.placeholder.com/50/222/fff?text=Joia';">
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

// LÓGICA DA ROLETA EXCLUSIVA COM TEMPORIZADOR DE 24 HORAS
function openGame(gameKey) {
    trackGA4Event('inicio_jogo', { game: 'roulette' });
    const modal = document.getElementById('gameModal');
    const container = document.getElementById('gameContainer');
    modal.classList.add('active');

    renderRouletteGame(container);
}

function closeGameModal() {
    document.getElementById('gameModal').classList.remove('active');
}

// JOGO: ROLETA DE DESCONTOS (COM CONTROLE DE 24H E TEMPORIZADOR)
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

    const sliceAngle = 360 / prizes.length;

    const conicGradient = prizes.map((p, i) => {
        const start = i * sliceAngle;
        const end = (i + 1) * sliceAngle;
        return `${p.color} ${start}deg ${end}deg`;
    }).join(', ');

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
                ">${p.label}</span>
            </div>
        `;
    }).join('');

    const lastSpinTime = localStorage.getItem('oliveira_last_spin');
    const now = new Date().getTime();
    const cooldownTime = 24 * 60 * 60 * 1000;
    let timeRemaining = lastSpinTime ? cooldownTime - (now - parseInt(lastSpinTime)) : 0;

    if (timeRemaining > 0) {
        container.innerHTML = `
            <div class="game-box" style="text-align: center; padding: 25px;">
                <h2>⏳ Volte em breve!</h2>
                <p style="margin: 15px 0 10px; color: var(--text-secondary);">Você já girou a roleta recentemente. Um novo giro estará disponível em:</p>
                <div id="rouletteTimer" style="font-size: 24px; font-weight: bold; color: #00a88f; margin: 20px 0;">--:--:--</div>
                <p style="font-size: 13px; color: var(--text-secondary);">Aproveite seu desconto atual no carrinho!</p>
            </div>
        `;

        const timerInterval = setInterval(() => {
            const currentNow = new Date().getTime();
            const currentRemaining = cooldownTime - (currentNow - parseInt(localStorage.getItem('oliveira_last_spin')));

            if (currentRemaining <= 0) {
                clearInterval(timerInterval);
                renderRouletteGame(container);
                return;
            }

            const hours = Math.floor((currentRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((currentRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((currentRemaining % (1000 * 60)) / 1000);

            const timerEl = document.getElementById('rouletteTimer');
            if (timerEl) {
                timerEl.innerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            }
        }, 1000);

        return;
    }

    container.innerHTML = `
        <div class="game-box" style="text-align: center; padding: 20px;">
            <h2>🎰 Roleta de Descontos</h2>
            <p style="margin-bottom: 20px; color: var(--text-secondary);">Gire e ganhe um cupom de desconto exclusivo!</p>
            
            <div style="position: relative; width: 280px; height: 280px; margin: 0 auto 20px;">
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

        const centerAngle = winningIndex * sliceAngle + (sliceAngle / 2);
        const targetDegrees = 3600 + (360 - centerAngle);

        wheel.style.transform = `rotate(${targetDegrees}deg)`;

        localStorage.setItem('oliveira_last_spin', new Date().getTime().toString());

        setTimeout(() => {
            container.innerHTML = `
                <div style="text-align: center; padding: 25px;">
                    <h2 style="font-size: 22px; margin-bottom: 15px;">Parabéns! 🎉</h2>
                    <p style="font-size: 18px; margin-bottom: 10px;">Você ganhou <strong>${winningPrize.label} de desconto</strong>!</p>
                    <p style="color: var(--text-secondary); margin-bottom: 25px;">Utilize no seu carrinho antes de finalizar a compra. Volte em 24h para girar novamente!</p>
                </div>
            `;
        }, 4200);
    };
}
function closeImageZoom() {
    const modal = document.getElementById('imageZoomModal');
    if (modal) {
        modal.style.display = 'none';
        window.history.pushState({ path: window.location.pathname }, '', window.location.pathname);
    }
}

function copyCurrentProductLink() {
    if (!currentZoomProductId) return;
    
    const productUrl = `${window.location.origin}${window.location.pathname}?produto=${currentZoomProductId}`;
    
    navigator.clipboard.writeText(productUrl).then(() => {
        const feedback = document.getElementById('copyFeedback');
        feedback.innerText = '✅ Link copiado com sucesso! Cole direto no WhatsApp.';
        setTimeout(() => {
            feedback.innerText = '';
        }, 4000);
    }).catch(err => {
        console.error('Erro ao copiar link: ', err);
    });
}

// FUNÇÃO PARA AMPLIAR AINDA MAIS A IMAGEM AO CLICAR NELA (ZOOM INTERNO)
function toggleImageZoom(imgElement) {
    if (imgElement.style.transform === 'scale(1.8)') {
        imgElement.style.transform = 'scale(1)';
        imgElement.style.cursor = 'zoom-in';
    } else {
        imgElement.style.transform = 'scale(1.8)';
        imgElement.style.cursor = 'zoom-out';
    }
}
