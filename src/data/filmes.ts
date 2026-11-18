import type { Filme } from '@/types/filme';

export const FILMES: readonly Filme[] = [
    {
        slug: 'the-godfather',
        tituloOriginal: 'The Godfather',
        dataLancamento: '1972-03-24',
        nota: 9.2,
        duracaoMin: 175,
        generos: ['crime', 'drama'],
        direcao: 'Francis Ford Coppola',
        elenco: ['Marlon Brando', 'Al Pacino', 'James Caan'],
        pais: 'US',
        classificacao: '16',
        poster: '/posters/the-godfather.jpg',
        traducoes: {
            'pt-BR': {
                titulo: 'O Poderoso Chefão',
                sinopseCurta:
                    'O herdeiro relutante de uma família mafiosa é arrastado ' +
                    'para o centro do poder.',
                sinopse:
                    'O patriarca de uma família mafiosa de Nova York tenta manter o ' +
                    'controle dos negócios em meio a uma guerra entre clãs. O filho mais ' +
                    'novo, que sempre quis distância desse mundo, acaba assumindo um papel ' +
                    'que nunca imaginou.',
            },
            en: {
                titulo: 'The Godfather',
                sinopseCurta:
                    'The reluctant heir of a crime family is pulled into ' +
                    'the center of power.',
                sinopse:
                    'The patriarch of a New York crime family struggles to keep control of ' +
                    'the business during a war between rival clans. His youngest son, who ' +
                    'always wanted to stay away from that world, ends up taking on a role he ' +
                    'never imagined.',
            },
            es: {
                titulo: 'El padrino',
                sinopseCurta:
                    'El heredero reacio de una familia mafiosa es arrastrado ' +
                    'al centro del poder.',
                sinopse:
                    'El patriarca de una familia mafiosa de Nueva York intenta mantener el ' +
                    'control del negocio en medio de una guerra entre clanes. Su hijo menor, ' +
                    'que siempre quiso mantenerse lejos de ese mundo, termina asumiendo un ' +
                    'papel que nunca imaginó.',
            },
        },
    },
    {
        slug: 'home-alone',
        tituloOriginal: 'Home Alone',
        dataLancamento: '1990-11-16',
        nota: 7.7,
        duracaoMin: 103,
        generos: ['comedia'],
        direcao: 'Chris Columbus',
        elenco: ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'],
        pais: 'US',
        classificacao: 'L',
        poster: '/posters/home-alone.jpg',
        traducoes: {
            'pt-BR': {
                titulo: 'Esqueceram de Mim',
                sinopseCurta:
                    'Esquecido em casa nas férias de Natal, um menino precisa ' +
                    'enfrentar dois ladrões.',
                sinopse:
                    'Na correria para uma viagem de fim de ano, uma família grande deixa o ' +
                    'filho de oito anos para trás. Sozinho em casa, ele aproveita a liberdade ' +
                    'até descobrir que dois ladrões planejam invadir a vizinhança, e decide ' +
                    'defender a casa com armadilhas.',
            },
            en: {
                titulo: 'Home Alone',
                sinopseCurta:
                    'Left home alone over Christmas, a young boy must face ' +
                    'two burglars.',
                sinopse:
                    'In the rush to leave on a holiday trip, a large family leaves their ' +
                    'eight-year-old son behind. Alone in the house, he enjoys his freedom ' +
                    'until he learns that two burglars plan to rob the neighborhood, and he ' +
                    'decides to defend his home with traps.',
            },
            es: {
                titulo: 'Mi pobre angelito',
                sinopseCurta:
                    'Olvidado en casa en Navidad, un niño debe enfrentarse ' +
                    'a dos ladrones.',
                sinopse:
                    'Con las prisas de un viaje de fin de año, una familia numerosa deja ' +
                    'atrás a su hijo de ocho años. Solo en casa, él disfruta de su libertad ' +
                    'hasta descubrir que dos ladrones planean asaltar el vecindario, y decide ' +
                    'defender la casa con trampas.',
            },
        },
    },
    {
        slug: 'die-hard',
        tituloOriginal: 'Die Hard',
        dataLancamento: '1988-07-15',
        nota: 8.2,
        duracaoMin: 132,
        generos: ['acao', 'suspense'],
        direcao: 'John McTiernan',
        elenco: ['Bruce Willis', 'Alan Rickman', 'Bonnie Bedelia'],
        pais: 'US',
        classificacao: '16',
        poster: '/posters/die-hard.jpg',
        traducoes: {
            'pt-BR': {
                titulo: 'Duro de Matar',
                sinopseCurta:
                    'Um policial preso em um arranha-céu enfrenta sozinho ' +
                    'um grupo de assaltantes.',
                sinopse:
                    'Um policial de Nova York viaja a Los Angeles para tentar se reconciliar ' +
                    'com a esposa durante a festa de Natal da empresa dela. Quando um grupo ' +
                    'armado toma o prédio e faz reféns, ele passa a agir sozinho, descalço e ' +
                    'sem reforços.',
            },
            en: {
                titulo: 'Die Hard',
                sinopseCurta:
                    'A cop trapped in a skyscraper takes on a group of armed ' +
                    'robbers by himself.',
                sinopse:
                    'A New York cop travels to Los Angeles hoping to reconcile with his wife ' +
                    'at her company Christmas party. When an armed group seizes the building ' +
                    'and takes hostages, he fights back alone, barefoot and without backup.',
            },
            es: {
                titulo: 'Duro de matar',
                sinopseCurta:
                    'Un policía atrapado en un rascacielos se enfrenta solo ' +
                    'a un grupo de asaltantes.',
                sinopse:
                    'Un policía de Nueva York viaja a Los Ángeles para intentar reconciliarse ' +
                    'con su esposa durante la fiesta de Navidad de la empresa donde ella ' +
                    'trabaja. Cuando un grupo armado toma el edificio y retiene rehenes, él ' +
                    'actúa por su cuenta, descalzo y sin refuerzos.',
            },
        },
    },
    {
        slug: 'spirited-away',
        tituloOriginal: 'Sen to Chihiro no Kamikakushi',
        dataLancamento: '2001-07-20',
        nota: 8.6,
        duracaoMin: 125,
        generos: ['animacao', 'fantasia'],
        direcao: 'Hayao Miyazaki',
        elenco: ['Rumi Hiiragi', 'Miyu Irino', 'Mari Natsuki'],
        pais: 'JP',
        classificacao: 'L',
        poster: '/posters/spirited-away.jpg',
        traducoes: {
            'pt-BR': {
                titulo: 'A Viagem de Chihiro',
                sinopseCurta:
                    'Uma menina fica presa em um mundo de espíritos e precisa ' +
                    'salvar os pais.',
                sinopse:
                    'Durante uma mudança, uma menina de dez anos e os pais entram em uma ' +
                    'cidade abandonada que, ao anoitecer, se revela um mundo de espíritos. ' +
                    'Com os pais transformados em porcos, ela aceita trabalhar em uma casa ' +
                    'de banhos mágica enquanto procura um jeito de libertá-los.',
            },
            en: {
                titulo: 'Spirited Away',
                sinopseCurta:
                    'A young girl gets trapped in a world of spirits and must ' +
                    'save her parents.',
                sinopse:
                    'While moving to a new town, a ten-year-old girl and her parents wander ' +
                    'into an abandoned town that turns into a world of spirits at nightfall. ' +
                    'With her parents turned into pigs, she takes a job at a magical ' +
                    'bathhouse while searching for a way to free them.',
            },
            es: {
                titulo: 'El viaje de Chihiro',
                sinopseCurta:
                    'Una niña queda atrapada en un mundo de espíritus y debe ' +
                    'salvar a sus padres.',
                sinopse:
                    'Durante una mudanza, una niña de diez años y sus padres entran en un ' +
                    'pueblo abandonado que, al anochecer, se revela como un mundo de ' +
                    'espíritus. Con sus padres convertidos en cerdos, ella acepta trabajar en ' +
                    'una casa de baños mágica mientras busca la forma de liberarlos.',
            },
        },
    },
    {
        slug: 'eternal-sunshine-of-the-spotless-mind',
        tituloOriginal: 'Eternal Sunshine of the Spotless Mind',
        dataLancamento: '2004-03-19',
        nota: 8.3,
        duracaoMin: 108,
        generos: ['romance', 'ficcao', 'drama'],
        direcao: 'Michel Gondry',
        elenco: ['Jim Carrey', 'Kate Winslet', 'Kirsten Dunst'],
        pais: 'US',
        classificacao: '14',
        poster: '/posters/eternal-sunshine-of-the-spotless-mind.jpg',
        traducoes: {
            'pt-BR': {
                titulo: 'Brilho Eterno de uma Mente sem Lembranças',
                sinopseCurta:
                    'Após o fim de um namoro, um homem decide apagar a ex ' +
                    'da memória.',
                sinopse:
                    'Ao descobrir que a ex-namorada apagou todas as lembranças do ' +
                    'relacionamento, um homem tímido decide passar pelo mesmo procedimento. ' +
                    'No meio do processo, revivendo cada memória antes que ela suma, ele ' +
                    'percebe que não quer esquecê-la.',
            },
            en: {
                titulo: 'Eternal Sunshine of the Spotless Mind',
                sinopseCurta:
                    'After a breakup, a man decides to erase his former ' +
                    'girlfriend from his memory.',
                sinopse:
                    'When he finds out that his former girlfriend has erased every memory of ' +
                    'their relationship, a shy man decides to undergo the same procedure. ' +
                    'Halfway through, reliving each memory before it fades, he realizes he ' +
                    'does not want to forget her.',
            },
            es: {
                titulo: 'Eterno resplandor de una mente sin recuerdos',
                sinopseCurta:
                    'Tras una ruptura, un hombre decide borrar a su exnovia ' +
                    'de la memoria.',
                sinopse:
                    'Al descubrir que su exnovia borró todos los recuerdos de la relación, ' +
                    'un hombre tímido decide someterse al mismo procedimiento. A mitad del ' +
                    'proceso, reviviendo cada recuerdo antes de que desaparezca, se da ' +
                    'cuenta de que no quiere olvidarla.',
            },
        },
    },
    {
        slug: 'cidade-de-deus',
        tituloOriginal: 'Cidade de Deus',
        dataLancamento: '2002-08-30',
        nota: 8.6,
        duracaoMin: 130,
        generos: ['crime', 'drama'],
        direcao: 'Fernando Meirelles, Kátia Lund',
        elenco: ['Alexandre Rodrigues', 'Leandro Firmino', 'Phellipe Haagensen'],
        pais: 'BR',
        classificacao: '18',
        poster: '/posters/cidade-de-deus.jpg',
        traducoes: {
            'pt-BR': {
                titulo: 'Cidade de Deus',
                sinopseCurta:
                    'Dois jovens de uma comunidade carioca seguem caminhos ' +
                    'opostos ao longo de duas décadas.',
                sinopse:
                    'Entre os anos 1960 e 1980, um garoto que sonha ser fotógrafo acompanha ' +
                    'o crescimento da violência na comunidade onde vive, no Rio de Janeiro. ' +
                    'Enquanto ele tenta escapar pela câmera, um conhecido de infância se ' +
                    'torna o traficante mais temido da região.',
            },
            en: {
                titulo: 'City of God',
                sinopseCurta:
                    'Two young men from a Rio de Janeiro neighborhood follow ' +
                    'opposite paths over two decades.',
                sinopse:
                    'From the 1960s to the 1980s, a boy who dreams of becoming a ' +
                    'photographer watches violence grow in his Rio de Janeiro neighborhood. ' +
                    'While he tries to escape through his camera, a childhood acquaintance ' +
                    'becomes the most feared drug lord in the area.',
            },
            es: {
                titulo: 'Ciudad de Dios',
                sinopseCurta:
                    'Dos jóvenes de un barrio de Río de Janeiro siguen caminos ' +
                    'opuestos a lo largo de dos décadas.',
                sinopse:
                    'Entre los años sesenta y ochenta, un chico que sueña con ser fotógrafo ' +
                    've crecer la violencia en el barrio donde vive, en Río de Janeiro. ' +
                    'Mientras intenta escapar a través de su cámara, un conocido de la ' +
                    'infancia se convierte en el narcotraficante más temido de la zona.',
            },
        },
    },
    {
        slug: 'central-do-brasil',
        tituloOriginal: 'Central do Brasil',
        dataLancamento: '1998-04-03',
        nota: 8.0,
        duracaoMin: 110,
        generos: ['drama'],
        direcao: 'Walter Salles',
        elenco: ['Fernanda Montenegro', 'Vinícius de Oliveira', 'Marília Pêra'],
        pais: 'BR',
        classificacao: '12',
        poster: '/posters/central-do-brasil.jpg',
        traducoes: {
            'pt-BR': {
                titulo: 'Central do Brasil',
                sinopseCurta:
                    'Uma ex-professora amarga atravessa o sertão ao lado de ' +
                    'um menino em busca do pai.',
                sinopse:
                    'Na estação Central do Brasil, uma ex-professora ganha a vida escrevendo ' +
                    'cartas para quem não sabe ler. Quando uma de suas clientes morre, ela ' +
                    'acaba acompanhando o filho dela, um menino de nove anos, numa viagem ao ' +
                    'Nordeste atrás do pai que ele nunca conheceu.',
            },
            en: {
                titulo: 'Central Station',
                sinopseCurta:
                    'A bitter former teacher crosses the Brazilian backlands ' +
                    'with a boy searching for his father.',
                sinopse:
                    'At the Central do Brasil train station, a former teacher earns a ' +
                    'living writing letters for people who cannot read. When one of her ' +
                    'clients dies, she reluctantly takes the nine-year-old boy left behind ' +
                    'on a journey to northeastern Brazil to find the father he never met.',
            },
            es: {
                titulo: 'Estación Central',
                sinopseCurta:
                    'Una exmaestra amargada atraviesa el interior de Brasil ' +
                    'junto a un niño que busca a su padre.',
                sinopse:
                    'En la estación Central do Brasil, una exmaestra se gana la vida ' +
                    'escribiendo cartas para quienes no saben leer. Cuando una de sus ' +
                    'clientas muere, termina acompañando a su hijo de nueve años en un viaje ' +
                    'al noreste del país en busca del padre que él nunca conoció.',
            },
        },
    },
    {
        slug: 'parasite',
        tituloOriginal: 'Gisaengchung',
        dataLancamento: '2019-05-30',
        nota: 8.5,
        duracaoMin: 132,
        generos: ['suspense', 'drama', 'comedia'],
        direcao: 'Bong Joon-ho',
        elenco: ['Song Kang-ho', 'Lee Sun-kyun', 'Cho Yeo-jeong'],
        pais: 'KR',
        classificacao: '16',
        poster: '/posters/parasite.jpg',
        traducoes: {
            'pt-BR': {
                titulo: 'Parasita',
                sinopseCurta:
                    'Uma família pobre se infiltra, um a um, na casa de uma ' +
                    'família rica.',
                sinopse:
                    'Vivendo em um porão apertado em Seul, uma família desempregada vê uma ' +
                    'chance quando o filho consegue um emprego de professor particular na ' +
                    'casa de uma família rica. Aos poucos, todos arrumam um jeito de ' +
                    'trabalhar ali, até que um segredo escondido na mansão muda tudo.',
            },
            en: {
                titulo: 'Parasite',
                sinopseCurta:
                    'A poor family infiltrates the home of a wealthy family, ' +
                    'one member at a time.',
                sinopse:
                    'Living in a cramped basement in Seoul, an unemployed family sees an ' +
                    'opportunity when the son lands a tutoring job at the home of a wealthy ' +
                    'family. One by one, they all find a way to work there, until a secret ' +
                    'hidden in the mansion changes everything.',
            },
            es: {
                titulo: 'Parásitos',
                sinopseCurta:
                    'Una familia pobre se infiltra, uno a uno, en la casa de ' +
                    'una familia rica.',
                sinopse:
                    'Viviendo en un sótano estrecho en Seúl, una familia desempleada ve una ' +
                    'oportunidad cuando el hijo consigue trabajo como profesor particular en ' +
                    'la casa de una familia rica. Poco a poco, todos encuentran la manera de ' +
                    'trabajar allí, hasta que un secreto escondido en la mansión lo cambia ' +
                    'todo.',
            },
        },
    },
    {
        slug: 'the-fellowship-of-the-ring',
        tituloOriginal: 'The Lord of the Rings: The Fellowship of the Ring',
        dataLancamento: '2001-12-19',
        nota: 8.9,
        duracaoMin: 178,
        generos: ['aventura', 'fantasia'],
        direcao: 'Peter Jackson',
        elenco: ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen'],
        pais: 'NZ',
        classificacao: '12',
        poster: '/posters/the-fellowship-of-the-ring.jpg',
        traducoes: {
            'pt-BR': {
                titulo: 'O Senhor dos Anéis: A Sociedade do Anel',
                sinopseCurta:
                    'Um jovem hobbit parte em uma jornada para destruir um ' +
                    'anel de poder.',
                sinopse:
                    'Um hobbit recebe de herança um anel que pertence a um senhor sombrio e ' +
                    'que pode condenar toda a Terra-média. Ao lado de um grupo de aliados, ' +
                    'ele parte em uma longa jornada para destruí-lo no único lugar onde isso ' +
                    'é possível.',
            },
            en: {
                titulo: 'The Lord of the Rings: The Fellowship of the Ring',
                sinopseCurta:
                    'A young hobbit sets out on a journey to destroy a ring ' +
                    'of power.',
                sinopse:
                    'A hobbit inherits a ring that belongs to a dark lord and could doom all ' +
                    'of Middle-earth. Joined by a group of allies, he sets out on a long ' +
                    'journey to destroy it in the only place where that is possible.',
            },
            es: {
                titulo: 'El Señor de los Anillos: La Comunidad del Anillo',
                sinopseCurta:
                    'Un joven hobbit emprende un viaje para destruir un anillo ' +
                    'de poder.',
                sinopse:
                    'Un hobbit hereda un anillo que pertenece a un señor oscuro y que puede ' +
                    'condenar a toda la Tierra Media. Junto a un grupo de aliados, emprende ' +
                    'un largo viaje para destruirlo en el único lugar donde eso es posible.',
            },
        },
    },
    {
        slug: 'amelie',
        tituloOriginal: "Le Fabuleux Destin d'Amélie Poulain",
        dataLancamento: '2001-04-25',
        nota: 8.3,
        duracaoMin: 122,
        generos: ['comedia', 'romance'],
        direcao: 'Jean-Pierre Jeunet',
        elenco: ['Audrey Tautou', 'Mathieu Kassovitz', 'Rufus'],
        pais: 'FR',
        classificacao: '14',
        poster: '/posters/amelie.jpg',
        traducoes: {
            'pt-BR': {
                titulo: 'O Fabuloso Destino de Amélie Poulain',
                sinopseCurta:
                    'Uma jovem tímida de Paris decide mudar, em segredo, a ' +
                    'vida das pessoas à sua volta.',
                sinopse:
                    'Garçonete em um café de Montmartre, uma jovem reservada encontra uma ' +
                    'caixa de lembranças escondida no seu apartamento e resolve devolvê-la ' +
                    'ao dono. A experiência a inspira a interferir, em segredo, na vida dos ' +
                    'vizinhos, enquanto foge da própria chance de ser feliz.',
            },
            en: {
                titulo: 'Amélie',
                sinopseCurta:
                    'A shy young woman in Paris secretly sets out to change ' +
                    'the lives of those around her.',
                sinopse:
                    'A reserved waitress at a Montmartre café finds a box of keepsakes ' +
                    'hidden in her apartment and decides to return it to its owner. The ' +
                    'experience inspires her to secretly meddle in the lives of her ' +
                    'neighbors, while avoiding her own chance at happiness.',
            },
            es: {
                titulo: 'Amélie',
                sinopseCurta:
                    'Una joven tímida de París decide cambiar en secreto la ' +
                    'vida de quienes la rodean.',
                sinopse:
                    'Camarera en un café de Montmartre, una joven reservada encuentra una ' +
                    'caja de recuerdos escondida en su apartamento y decide devolverla a su ' +
                    'dueño. La experiencia la inspira a intervenir en secreto en la vida de ' +
                    'sus vecinos, mientras evita su propia oportunidad de ser feliz.',
            },
        },
    },
    {
        slug: 'back-to-the-future',
        tituloOriginal: 'Back to the Future',
        dataLancamento: '1985-07-03',
        nota: 8.5,
        duracaoMin: 116,
        generos: ['aventura', 'comedia', 'ficcao'],
        direcao: 'Robert Zemeckis',
        elenco: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
        pais: 'US',
        classificacao: '10',
        poster: '/posters/back-to-the-future.jpg',
        traducoes: {
            'pt-BR': {
                titulo: 'De Volta para o Futuro',
                sinopseCurta:
                    'Um adolescente volta acidentalmente aos anos 1950 e ' +
                    'atrapalha o encontro dos próprios pais.',
                sinopse:
                    'Um adolescente é enviado por acidente de 1985 para 1955 em uma máquina ' +
                    'do tempo criada por um cientista excêntrico. Ao interferir sem querer ' +
                    'no primeiro encontro dos pais, ele precisa reaproximá-los antes que ' +
                    'deixe de existir e ainda encontrar um jeito de voltar.',
            },
            en: {
                titulo: 'Back to the Future',
                sinopseCurta:
                    'A teenager accidentally travels back to the 1950s and ' +
                    'disrupts how his parents met.',
                sinopse:
                    'A teenager is accidentally sent from 1985 to 1955 in a time machine ' +
                    'built by an eccentric scientist. After unintentionally interfering with ' +
                    'the first meeting of his parents, he must bring them together before he ' +
                    'ceases to exist, and still find a way back home.',
            },
            es: {
                titulo: 'Volver al futuro',
                sinopseCurta:
                    'Un adolescente viaja por accidente a los años cincuenta y ' +
                    'estropea el encuentro de sus propios padres.',
                sinopse:
                    'Un adolescente es enviado por accidente de 1985 a 1955 en una máquina ' +
                    'del tiempo creada por un científico excéntrico. Tras interferir sin ' +
                    'querer en el primer encuentro de sus padres, debe volver a unirlos ' +
                    'antes de dejar de existir y, además, encontrar la forma de regresar.',
            },
        },
    },
    {
        slug: 'the-silence-of-the-lambs',
        tituloOriginal: 'The Silence of the Lambs',
        dataLancamento: '1991-02-14',
        nota: 8.6,
        duracaoMin: 118,
        generos: ['suspense', 'crime'],
        direcao: 'Jonathan Demme',
        elenco: ['Jodie Foster', 'Anthony Hopkins', 'Scott Glenn'],
        pais: 'US',
        classificacao: '18',
        poster: '/posters/the-silence-of-the-lambs.jpg',
        traducoes: {
            'pt-BR': {
                titulo: 'O Silêncio dos Inocentes',
                sinopseCurta:
                    'Uma agente em treinamento pede ajuda a um psiquiatra ' +
                    'preso para capturar um assassino.',
                sinopse:
                    'Uma jovem agente do FBI recebe a missão de entrevistar um psiquiatra ' +
                    'brilhante e perigoso, preso por seus crimes, para entender um assassino ' +
                    'em série que continua à solta. Em troca de pistas, ele exige que ela ' +
                    'revele detalhes do próprio passado.',
            },
            en: {
                titulo: 'The Silence of the Lambs',
                sinopseCurta:
                    'An FBI trainee seeks help from an imprisoned psychiatrist ' +
                    'to catch a killer.',
                sinopse:
                    'A young FBI trainee is assigned to interview a brilliant and dangerous ' +
                    'psychiatrist, imprisoned for his crimes, to understand a serial killer ' +
                    'who is still at large. In exchange for clues, he demands that she ' +
                    'reveal details about her own past.',
            },
            es: {
                titulo: 'El silencio de los inocentes',
                sinopseCurta:
                    'Una agente en formación pide ayuda a un psiquiatra ' +
                    'encarcelado para atrapar a un asesino.',
                sinopse:
                    'Una joven agente del FBI recibe la misión de entrevistar a un ' +
                    'psiquiatra brillante y peligroso, encarcelado por sus crímenes, para ' +
                    'entender a un asesino en serie que sigue suelto. A cambio de pistas, él ' +
                    'exige que ella le revele detalles de su propio pasado.',
            },
        },
    },
    {
        slug: 'toy-story',
        tituloOriginal: 'Toy Story',
        dataLancamento: '1995-11-22',
        nota: 8.3,
        duracaoMin: 81,
        generos: ['animacao', 'aventura', 'comedia'],
        direcao: 'John Lasseter',
        elenco: ['Tom Hanks', 'Tim Allen', 'Don Rickles'],
        pais: 'US',
        classificacao: 'L',
        poster: '/posters/toy-story.jpg',
        traducoes: {
            'pt-BR': {
                titulo: 'Toy Story',
                sinopseCurta:
                    'Um boneco caubói disputa o posto de brinquedo favorito ' +
                    'com um astronauta recém-chegado.',
                sinopse:
                    'Os brinquedos de um menino ganham vida quando ninguém está olhando, e o ' +
                    'caubói Woody é o favorito há anos. A chegada de um patrulheiro espacial ' +
                    'moderno abala essa posição, e a rivalidade acaba deixando os dois ' +
                    'perdidos longe de casa.',
            },
            en: {
                titulo: 'Toy Story',
                sinopseCurta:
                    'A cowboy doll competes with a newly arrived space ranger ' +
                    'for the title of favorite toy.',
                sinopse:
                    'The toys of a young boy come to life when no one is watching, and the ' +
                    'cowboy Woody has been his favorite for years. The arrival of a modern ' +
                    'space ranger shakes things up, and their rivalry leaves both of them ' +
                    'lost far from home.',
            },
            es: {
                titulo: 'Toy Story',
                sinopseCurta:
                    'Un muñeco vaquero compite por ser el juguete favorito con ' +
                    'un astronauta recién llegado.',
                sinopse:
                    'Los juguetes de un niño cobran vida cuando nadie los ve, y el vaquero ' +
                    'Woody es el favorito desde hace años. La llegada de un moderno guardián ' +
                    'espacial sacude esa posición, y la rivalidad termina dejando a ambos ' +
                    'perdidos lejos de casa.',
            },
        },
    },
    {
        slug: 'notting-hill',
        tituloOriginal: 'Notting Hill',
        dataLancamento: '1999-05-21',
        nota: 7.2,
        duracaoMin: 124,
        generos: ['romance', 'comedia'],
        direcao: 'Roger Michell',
        elenco: ['Julia Roberts', 'Hugh Grant', 'Rhys Ifans'],
        pais: 'GB',
        classificacao: '12',
        poster: '/posters/notting-hill.jpg',
        traducoes: {
            'pt-BR': {
                titulo: 'Um Lugar Chamado Notting Hill',
                sinopseCurta:
                    'O dono de uma pequena livraria se apaixona por uma das ' +
                    'maiores estrelas de Hollywood.',
                sinopse:
                    'A vida pacata do dono de uma livraria de viagens em Londres muda quando ' +
                    'uma famosa atriz de Hollywood entra na loja. Entre encontros secretos e ' +
                    'a perseguição da imprensa, os dois tentam descobrir se um romance entre ' +
                    'mundos tão diferentes pode dar certo.',
            },
            en: {
                titulo: 'Notting Hill',
                sinopseCurta:
                    'The owner of a small bookshop falls for one of the ' +
                    'biggest stars in Hollywood.',
                sinopse:
                    'The quiet life of a travel bookshop owner in London changes when a ' +
                    'famous Hollywood actress walks into his store. Between secret meetings ' +
                    'and relentless press attention, they try to find out whether a romance ' +
                    'between such different worlds can work.',
            },
            es: {
                titulo: 'Un lugar llamado Notting Hill',
                sinopseCurta:
                    'El dueño de una pequeña librería se enamora de una de las ' +
                    'mayores estrellas de Hollywood.',
                sinopse:
                    'La vida tranquila del dueño de una librería de viajes en Londres cambia ' +
                    'cuando una famosa actriz de Hollywood entra en su tienda. Entre ' +
                    'encuentros secretos y el acoso de la prensa, ambos intentan descubrir si ' +
                    'un romance entre mundos tan distintos puede funcionar.',
            },
        },
    },
    {
        slug: 'airplane',
        tituloOriginal: 'Airplane!',
        dataLancamento: '1980-07-02',
        nota: 7.7,
        duracaoMin: 88,
        generos: ['comedia'],
        direcao: 'Jim Abrahams, David Zucker, Jerry Zucker',
        elenco: ['Robert Hays', 'Julie Hagerty', 'Leslie Nielsen'],
        pais: 'US',
        classificacao: '12',
        poster: '/posters/airplane.jpg',
        traducoes: {
            'pt-BR': {
                titulo: 'Apertem os Cintos... O Piloto Sumiu!',
                sinopseCurta:
                    'Um ex-piloto com medo de voar precisa pousar um avião ' +
                    'depois que a tripulação adoece.',
                sinopse:
                    'Um ex-piloto traumatizado embarca em um voo só para tentar reconquistar ' +
                    'a namorada, que é comissária de bordo. Quando os pilotos passam mal após ' +
                    'o jantar, ele é o único capaz de pousar o avião, numa sequência de ' +
                    'piadas que parodiam filmes de desastre.',
            },
            en: {
                titulo: 'Airplane!',
                sinopseCurta:
                    'A former pilot afraid of flying must land a plane after ' +
                    'the crew falls ill.',
                sinopse:
                    'A traumatized former pilot boards a flight only to win back his ' +
                    'girlfriend, a flight attendant. When the pilots get sick after dinner, ' +
                    'he is the only one who can land the plane, in a nonstop string of gags ' +
                    'parodying disaster movies.',
            },
            es: {
                titulo: '¿Y dónde está el piloto?',
                sinopseCurta:
                    'Un expiloto con miedo a volar debe aterrizar un avión ' +
                    'después de que la tripulación enferma.',
                sinopse:
                    'Un expiloto traumatizado sube a un vuelo solo para intentar reconquistar ' +
                    'a su novia, que es azafata. Cuando los pilotos enferman tras la cena, él ' +
                    'es el único capaz de aterrizar el avión, en una cadena de chistes que ' +
                    'parodian las películas de catástrofes.',
            },
        },
    },
];