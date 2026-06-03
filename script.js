// Base de dados de receitas
const receitas = {
    1: {
        titulo: "Bolo de Milho",
        tipo: "doce",
        ingredientes: [
            "4 espigas de milho fresco do campo",
            "200g de farinha de trigo integral",
            "3 ovos caipiras",
            "150g de açúcar cristal",
            "100ml de leite fresco",
            "100g de manteiga caseira",
            "1 colher de sopa de fermento em pó",
            "Uma pitada de sal marinho"
        ],
        origem: [
            "Milho: Colha na época de colheita (verão)",
            "Ovos: De galinhas criadas soltas",
            "Leite: Ordenha matinal de vacas leiteiras",
            "Manteiga: Feita em casa a partir do leite fresco"
        ],
        modo_preparo: [
            "Retire os grãos do milho e bata no liquidificador com o leite",
            "Em uma tigela, misture a manteiga com o açúcar até ficar cremoso",
            "Adicione os ovos um a um, mexendo bem",
            "Misture a polpa de milho com leite",
            "Peneira a farinha com o fermento e sal",
            "Combine os ingredientes secos com os úmidos",
            "Despeje em forma untada e enfarinhada",
            "Asse a 180°C por 45 minutos até dourar",
            "Deixe esfriar antes de desenformar"
        ],
        tempo: "1 hora",
        dica: "O bolo de milho fica melhor com milho recém-colhido. Para preservar, guarde em vidro bem fechado por até 3 dias."
    },
    2: {
        titulo: "Bolo de Banana com Canela",
        tipo: "doce",
        ingredientes: [
            "6 bananas d'água colhidas no pomar",
            "200g de farinha de trigo integral",
            "3 ovos",
            "200g de açúcar demerara",
            "100g de manteiga derretida",
            "100ml de leite",
            "2 colheres de chá de canela em pó",
            "1 colher de sopa de fermento em pó",
            "1 colher de chá de sal"
        ],
        origem: [
            "Bananas: Colhidas direto da bananeira quando bem maduras",
            "Canela: Especiaria que ressalta o sabor natural da banana",
            "Ovos e leite: De origem animal criado naturalmente"
        ],
        modo_preparo: [
            "Amasse bem 5 bananas maduras com um garfo",
            "Misture a manteiga com o açúcar demerara",
            "Incorpore os ovos um a um mexendo bem",
            "Misture a banana amassada",
            "Peneira farinha, fermento, sal e canela",
            "Alterne ingredientes secos com o leite",
            "Fatie meia banana e distribua no fundo da forma",
            "Despeje a massa sobre as bananas",
            "Asse a 180°C por 50 minutos"
        ],
        tempo: "1 hora e 15 minutos",
        dica: "Use bananas bem maduras para um bolo mais macio e doce. A canela combina perfeitamente com a banana natural."
    },
    3: {
        titulo: "Broa de Milho",
        tipo: "doce",
        ingredientes: [
            "2 xícaras de fubá de milho moído na fazenda",
            "1 xícara de farinha de trigo",
            "200g de açúcar mascavo",
            "3 ovos",
            "100ml de óleo de girassol",
            "100ml de leite fresco",
            "1 colher de sopa de fermento",
            "Sal a gosto",
            "1 colher de chá de vanilla natural"
        ],
        origem: [
            "Fubá: Milho moído em moenda tradicional",
            "Açúcar mascavo: Menos processado, mantém nutrientes",
            "Óleo de girassol: Prensado naturalmente"
        ],
        modo_preparo: [
            "Em uma tigela, misture fubá, farinha, açúcar e sal",
            "Em outra, bata os ovos com o óleo e leite",
            "Combine os ingredientes úmidos com os secos",
            "Adicione a vanilla",
            "Incorpore delicadamente o fermento",
            "Despeje em forma redonda untada",
            "Asse a 175°C por 40 minutos",
            "A broa está pronta quando um palito sair seco"
        ],
        tempo: "1 hora",
        dica: "A broa é uma receita tradicional do interior. Serve para café da tarde ou lanche. Fica ótima acompanhada de queijo caseiro."
    },
    4: {
        titulo: "Bolo de Abóbora",
        tipo: "doce",
        ingredientes: [
            "600g de abóbora cabotiá ralada",
            "250g de farinha integral",
            "3 ovos",
            "150g de açúcar cristal",
            "80g de manteiga",
            "100ml de leite",
            "1 colher de chá de gengibre ralado fresco",
            "1 colher de chá de canela",
            "1 colher de sopa de fermento",
            "Sal marinho"
        ],
        origem: [
            "Abóbora: Plantada na horta, colhida quando bem madura",
            "Gengibre: Cultivado na propriedade",
            "Especiarias que potencializam o sabor natural"
        ],
        modo_preparo: [
            "Descasque a abóbora e rale em ralador grosso",
            "Esprema bem para remover o excesso de água",
            "Misture manteiga com açúcar até ficar cremoso",
            "Adicione os ovos um a um",
            "Junte a abóbora ralada e o gengibre",
            "Peneira a farinha com fermento, canela e sal",
            "Misture os ingredientes secos com os úmidos",
            "Adicione o leite aos poucos",
            "Despeje em forma e asse a 180°C por 50 minutos"
        ],
        tempo: "1 hora e 20 minutos",
        dica: "Este bolo é nutritivo e com baixa quantidade de gordura. O gengibre dá um toque especial muito agradável."
    },
    5: {
        titulo: "Pão de Queijo Caseiro",
        tipo: "doce",
        ingredientes: [
            "500g de polvilho azedo caseiro",
            "200g de queijo meia cura ralado",
            "200g de polvilho doce",
            "150g de manteiga em temperatura ambiente",
            "4 ovos",
            "200ml de leite integral",
            "1 colher de chá de sal fino",
            "Salsa fresca picada (opcional)"
        ],
        origem: [
            "Polvilho: Extraído de mandioca brava local",
            "Queijo: Produzido na própria fazenda",
            "Manteiga: Feita artesanalmente em casa"
        ],
        modo_preparo: [
            "Misture os dois tipos de polvilho em uma tigela grande",
            "Ferva o leite com a manteiga",
            "Despeje o leite quente sobre o polvilho",
            "Mexa bem até incorporar",
            "Deixe esfriar um pouco",
            "Adicione os ovos um a um",
            "Misture o queijo ralado e o sal",
            "Coloque em formas e asse a 200°C por 25-30 minutos",
            "Deve ficar crocante por fora e macio por dentro"
        ],
        tempo: "1 hora",
        dica: "O segredo do pão de queijo é o polvilho azedo de qualidade. Sirva quente para melhor sabor. Congela bem em potes."
    },
    6: {
        titulo: "Bolo de Mel e Milho",
        tipo: "doce",
        ingredientes: [
            "4 espigas de milho fresco",
            "300ml de mel natural do apiário",
            "200g de farinha de trigo integral",
            "3 ovos",
            "100g de manteiga",
            "150ml de leite",
            "1 colher de chá de canela",
            "Meia colher de chá de noz-moscada",
            "1 colher de sopa de fermento",
            "Sal"
        ],
        origem: [
            "Mel: Colhido direto do apiário, puro e sem processamento",
            "Milho: Colhido no período de safra",
            "Especiarias que ressaltam a doçura natural do mel"
        ],
        modo_preparo: [
            "Bata o milho fresco no liquidificador com o leite",
            "Peneira a farinha, fermento, sal e especiarias",
            "Misture manteiga com mel até formar uma pasta",
            "Incorpore os ovos um a um",
            "Alterne ingredientes secos com a polpa de milho",
            "Despeje em forma untada",
            "Asse a 175°C por 45-50 minutos",
            "Deixe esfriar na forma"
        ],
        tempo: "1 hora e 15 minutos",
        dica: "O mel natural substitui perfeitamente o açúcar refinado. Este bolo fica naturalmente doce e com uma textura muito macia."
    },
    7: {
        titulo: "Polenta Cremosa",
        tipo: "salgado",
        ingredientes: [
            "4 xícaras de caldo de carne caseiro",
            "1 xícara de fubá de milho",
            "200ml de leite fresco integral",
            "100g de manteiga caseira",
            "100g de queijo meia cura ralado",
            "2 dentes de alho picado",
            "Sal marinho e pimenta do reino a gosto",
            "Salsinha fresca (opcional)"
        ],
        origem: [
            "Fubá: Moído localmente a partir de milho da safra",
            "Caldo: Feito com ossos e carnes do próprio rebanho",
            "Manteiga e queijo: Produtos de origem animal local"
        ],
        modo_preparo: [
            "Ferva o caldo de carne em uma panela grande",
            "Adicione o alho picado",
            "Despeje o fubá lentamente, mexendo constantemente para evitar grumos",
            "Continue mexendo até começar a desgrudar das laterais (15-20 minutos)",
            "Junte o leite e a manteiga",
            "Mexa bem até incorporar",
            "Adicione o queijo ralado",
            "Tempere com sal e pimenta",
            "Sirva quente, pode colocar queijo derretido por cima"
        ],
        tempo: "45 minutos",
        dica: "A polenta cremosa é confortante e nutritiva. Pode ser servida como prato principal ou acompanhamento para carnes."
    },
    8: {
        titulo: "Massa Caseira com Tomate",
        tipo: "salgado",
        ingredientes: [
            "500g de tomate caqui do pomar",
            "400g de farinha de trigo integral",
            "3 ovos",
            "50g de manteiga",
            "50ml de água",
            "2 dentes de alho amassado",
            "Sal e pimenta",
            "Orégano e manjericão frescos da horta"
        ],
        origem: [
            "Tomates: Cultivados no pomar sem agrotóxicos",
            "Ovos: De galinhas criadas soltas",
            "Ervas: Colhidas frescas do jardim"
        ],
        modo_preparo: [
            "Ferva os tomates e retire a pele",
            "Passe no ralador ou processador",
            "Tempere o molho com alho, sal, pimenta, orégano e manjericão",
            "Cozinhe em fogo baixo por 20 minutos",
            "Faça um poço com a farinha em uma superfície limpa",
            "Coloque os ovos no centro",
            "Misture os ovos com a farinha e a água",
            "Trabalhe a massa até ficar macia e homogênea",
            "Deixe descansar 30 minutos envolvida em plástico",
            "Abra e corte no formato desejado",
            "Cozinhe em água com sal até flutuar"
        ],
        tempo: "1 hora e 30 minutos",
        dica: "Tomate natural faz toda a diferença no sabor. Essa massa é perfeita com molho de tomate caseiro fresco."
    },
    9: {
        titulo: "Pão de Milho",
        tipo: "salgado",
        ingredientes: [
            "3 xícaras de farinha de trigo integral",
            "1 xícara de fubá de milho",
            "1 colher de sopa de sal",
            "1 colher de sopa de açúcar demerara",
            "2 colheres de sopa de fermento fresco",
            "1 xícara de leite morno",
            "2 colheres de sopa de óleo de girassol",
            "1 ovo para passar por cima"
        ],
        origem: [
            "Fubá: Moído artesanalmente",
            "Fermento: Preparado em casa ou adquirido fresco",
            "Ingredientes integrais que mantêm todas as propriedades"
        ],
        modo_preparo: [
            "Dilua o fermento no leite morno com o açúcar",
            "Deixe repousar 5 minutos até formar espuma",
            "Misture a farinha com o fubá e o sal",
            "Faça um poço e despeje o fermento ativo",
            "Adicione o óleo",
            "Trabalhe até formar uma massa lisa",
            "Deixe crescer por 1 hora em local quente",
            "Divida em bolinhas e coloque em assadeira untada",
            "Deixe crescer novamente por 30 minutos",
            "Passe ovo na superfície",
            "Asse a 200°C por 30-35 minutos"
        ],
        tempo: "2 horas",
        dica: "O pão de milho é nutritivo e integral. O fubá dá uma cor especial e sabor inconfundível. Melhor consumir no dia."
    },
    10: {
        titulo: "Feijão à Moda Antiga",
        tipo: "salgado",
        ingredientes: [
            "500g de feijão carioca seco colhido na fazenda",
            "1 osso com carne",
            "200g de linguiça caseira fumada",
            "4 dentes de alho amassado",
            "2 cebolas picadas",
            "3 tomates picados",
            "Sal e pimenta do reino",
            "Cominho a gosto",
            "Salsinha fresca",
            "Óleo de girassol"
        ],
        origem: [
            "Feijão: Seco na propriedade durante a colheita",
            "Carnes: Do próprio rebanho, processadas localmente",
            "Hortaliças: Cultivadas na horta caseira"
        ],
        modo_preparo: [
            "Deixe o feijão de molho na noite anterior",
            "Cozinhe o feijão com água e sal até ficar macio",
            "Em outra panela, aqueça o óleo",
            "Refogue a cebola e o alho até dourar",
            "Adicione o tomate e cozinhe até amolecer",
            "Adicione o feijão já cozido com seu caldo",
            "Coloque o osso com carne e a linguiça",
            "Tempere com cominho, sal e pimenta",
            "Deixe cozinhar por 40 minutos",
            "Ajuste temperos se necessário",
            "Finalize com salsinha fresca"
        ],
        tempo: "2 horas (sem contar o tempo de molho)",
        dica: "Este é um prato tradicional que alimenta gerações. Melhor feito em quantidade para render vários dias na geladeira."
    },
    11: {
        titulo: "Caldo de Abóbora e Milho",
        tipo: "salgado",
        ingredientes: [
            "800g de abóbora cabotiá em cubos",
            "4 espigas de milho fresco",
            "1 cebola média picada",
            "3 dentes de alho amassado",
            "1 cenoura cortada",
            "2 batatas picadas",
            "1 litro de caldo de carne caseiro",
            "Sal e pimenta",
            "Salsa fresca",
            "2 colheres de sopa de azeite"
        ],
        origem: [
            "Abóbora e milho: Colhidos direto da horta",
            "Hortaliças: Todas cultivadas localmente",
            "Caldo: Feito em casa a partir de ossos e carnes"
        ],
        modo_preparo: [
            "Retire os grãos de milho da espiga",
            "Aqueça o azeite em uma panela grande",
            "Refogue a cebola e alho até dourar",
            "Adicione a cenoura e deixe cozinhar 5 minutos",
            "Junte a abóbora e as batatas",
            "Despeje o caldo quente",
            "Deixe fervir até as verduras amolecerem",
            "Adicione o milho fresco",
            "Cozinhe por mais 10 minutos",
            "Tempere com sal e pimenta",
            "Finalize com salsa fresca"
        ],
        tempo: "45 minutos",
        dica: "Um caldo reconfortante e nutritivo. Perfeito para dias frios. Pode ser congelado para consumo posterior."
    },
    12: {
        titulo: "Milho Verde com Manteiga",
        tipo: "salgado",
        ingredientes: [
            "6 espigas de milho fresco",
            "150g de manteiga caseira",
            "Sal marinho",
            "Pimenta do reino fresca",
            "Salsa ou cebolinha fresca",
            "Alho (opcional)"
        ],
        origem: [
            "Milho: Colhido no auge do verde, no pico de frescor",
            "Manteiga: Derivada do leite fresco ordenhado",
            "Ervas: Frescas do jardim"
        ],
        modo_preparo: [
            "Descasque e limpe o milho",
            "Ferva água com sal em uma panela grande",
            "Coloque as espigas na água fervente",
            "Cozinhe por 7-10 minutos até ficar macio",
            "Retire e deixe escorrer bem",
            "Derreta a manteiga com um pouco de alho amassado (se desejar)",
            "Passe cada espiga na manteiga derretida",
            "Polvilhe com sal fino, pimenta e ervas frescas",
            "Sirva enquanto está bem quente"
        ],
        tempo: "20 minutos",
        dica: "Simplificar é a arte. Um milho fresco de qualidade com manteiga caseira é uma delícia incomparável. Coma logo após cozer."
    }
};

// Função para mostrar/esconder categorias
function mostrarCategoria(categoria) {
    // Esconder todas as categorias
    document.querySelectorAll('.categoria-content').forEach(el => {
        el.classList.remove('active');
    });
    
    // Remover class active de todos os botões
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Mostrar categoria selecionada
    document.getElementById(categoria).classList.add('active');
    
    // Ativar botão clicado
    event.target.classList.add('active');
}

// Função para abrir receita no modal
function abrirReceita(id) {
    const receita = receitas[id];
    const modal = document.getElementById('receita-modal');
    const detalhes = document.getElementById('receita-detalhes');
    
    let html = `
        <h2 class="receita-titulo">🍽️ ${receita.titulo}</h2>
        
        <div class="receita-secao">
            <h3>⏱️ Tempo de Preparo</h3>
            <p><strong>${receita.tempo}</strong></p>
        </div>
        
        <div class="receita-secao">
            <h3>🥘 Ingredientes</h3>
            <ul class="receita-lista">
                ${receita.ingredientes.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
        </div>
        
        <div class="receita-secao">
            <h3>🌾 Onde Obter Cada Ingrediente</h3>
            <ul class="receita-lista">
                ${receita.origem.map(ori => `<li>${ori}</li>`).join('')}
            </ul>
        </div>
        
        <div class="receita-secao">
            <h3>👨‍🍳 Modo de Preparo</h3>
            <div class="receita-modo">
                <ol>
                    ${receita.modo_preparo.map(passo => `<li>${passo}</li>`).join('')}
                </ol>
            </div>
        </div>
        
        <div class="dica">
            <strong>💡 Dica da Casa:</strong> ${receita.dica}
        </div>
    `;
    
    detalhes.innerHTML = html;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Função para fechar modal
function fecharReceita() {
    const modal = document.getElementById('receita-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('receita-modal');
    if (event.target === modal) {
        fecharReceita();
    }
}

// Fechar modal ao pressionar ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        fecharReceita();
    }
});