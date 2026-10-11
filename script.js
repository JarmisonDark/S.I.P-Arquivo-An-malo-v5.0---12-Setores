// BANCO COMPLETO DE 12 FASES // 60 CASOS EXCLUSIVOS // DIFICULDADE PROGRESSIVA
const nomesSetores = [
    "FASE 1: SETOR VERDE (Ameaça Mínima)",
    "FASE 2: SETOR AMARELO (Ameaça Moderada)",
    "FASE 3: SETOR LARANJA (Ameaça Elevada)",
    "FASE 4: SETOR VERMELHO (Ameaça Severa)",
    "FASE 5: SETOR ROXO (Ameaça Crítica)",
    "FASE 6: BLACK SITE (Ameaça Apocalíptica)",
    "FASE 7: SETOR PRATA (Anomalias de Espaço)",
    "FASE 8: SETOR COBALTO (Ameaças Biológicas)",
    "FASE 9: SETOR OBSIDIANA (Ameaças Cognitivas)",
    "FASE 10: SETOR QUÂNTICO (Anomalias Temporais)",
    "FASE 11: SETOR ETER (Entidades Celestiais)",
    "FASE 12: VOID ABSOLUTO (Ponto Cero)"
];

const fasesCasos = [
    // FASE 1: SETOR VERDE
    [
        { id: "#101-SKW", especieCorreta: "skinwalker", protocoloCorreto: "isolamento", cifra: "SKW-99", cifraChave: "CADAVER_MIMETICO", freqCorreta: 70, resultadoTermico: "38.3°C. Rotação pélvica invertida.", resultadoAudio: "Vocalização humana duplicada em frequência.", mensagemSucesso: "[✓] METAMORFO ISOLADO COM SUCESSO.", mensagemErro: "[X] O METAMORFO FUGIU!", texto: "A vítima relatou ouvir a voz de seu irmão falecido.", chatRespostas: { p1: "Trocou de bípede para quadrúpede.", p2: "Sinal de rádio limpo.", p3: "Odor podre." } },
        { id: "#102-DIG", especieCorreta: "creepypasta", protocoloCorreto: "digital", cifra: "DIG-404", cifraChave: "SETOR_MEMORIA", freqCorreta: 30, resultadoTermico: "0.0°C física. Hardware superaquecido.", resultadoAudio: "Estática binária contínua.", mensagemSucesso: "[✓] SERVIDORES PURGADOS.", mensagemErro: "[X] CÓDIGO MALICIOSO EXECUTADO!", texto: "Arquivo executável travou a BIOS do terminal.", chatRespostas: { p1: "Inexistente fisicamente.", p2: "Interferência total no monitor.", p3: "Sem cheiro." } },
        { id: "#103-FLS", especieCorreta: "falso", protocoloCorreto: "quimico", cifra: "GAS-01", cifraChave: "HIPOXIA_CEREBRAL", freqCorreta: 50, resultadoTermico: "21.5°C estável. Ar com 120 PPM de CO.", resultadoAudio: "Apenas ruído elétrico.", mensagemSucesso: "[✓] VAZAMENTO SANADO.", mensagemErro: "[X] VÍTIMA INALOU MAIS GÁS!", texto: "Visões sombrias e dor de cabeça noturna.", chatRespostas: { p1: "Imóvel e sem massa.", p2: "Sem travamentos.", p3: "Monóxido de Carbono elevado." } },
        { id: "#104-ESP", especieCorreta: "espiritual", protocoloCorreto: "exorcismo", cifra: "POL-74", cifraChave: "GRADIENTE_GELIDO", freqCorreta: 20, resultadoTermico: "-14.2°C focalizado.", resultadoAudio: "Infrassom de 11Hz.", mensagemSucesso: "[✓] ANOMALIA ESPIRITUAL SELADA.", mensagemErro: "[X] CONGELAMENTO DESTRUIU AS JANELAS!", texto: "Móveis deslizaram sem força mecânica.", chatRespostas: { p1: "Forma translúcida.", p2: "Queda na tensão das lâmpadas.", p3: "Ponto de congelamento." } },
        { id: "#105-CRP", especieCorreta: "criptideo", protocoloCorreto: "isolamento", cifra: "BIO-88", cifraChave: "TECIDO_PREDADOR", freqCorreta: 80, resultadoTermico: "39.5°C biológico.", resultadoAudio: "Rosnado muscular agudo.", mensagemSucesso: "[✓] CRÍPTIDO INCINERADO.", mensagemErro: "[X] A CRIATURA ATACOU A EQUIPE!", texto: "Carcaças de rebanho com incisões no pescoço.", chatRespostas: { p1: "Animal pesado.", p2: "Eletrônicos normais.", p3: "Cheiro de almíscar." } }
    ],
    // FASE 2: SETOR AMARELO
    [
        { id: "#201-SKW", especieCorreta: "skinwalker", protocoloCorreto: "isolamento", cifra: "SKW-12", cifraChave: "MIMETISMO_ARCAICO", freqCorreta: 65, resultadoTermico: "37.9°C disforme.", resultadoAudio: "Falta de frequência respiratória no áudio.", mensagemSucesso: "[✓] METAMORFO NEUTRALIZADO.", mensagemErro: "[X] A ENTIDADE ENGANOU O PERÍMETRO!", texto: "Vigilante relatou diálogo com o parceiro ausente.", chatRespostas: { p1: "Quadrúpede alterando postura.", p2: "VHF gravado.", p3: "Odor de decomposição." } },
        { id: "#202-DIG", especieCorreta: "creepypasta", protocoloCorreto: "digital", cifra: "DIG-888", cifraChave: "ARQUIVO_MALICIOSO", freqCorreta: 35, resultadoTermico: "20.0°C no ambiente.", resultadoAudio: "Ruído de clock de CPU corrompido.", mensagemSucesso: "[✓] SERVIDOR REINICIADO E PURGADO.", mensagemErro: "[X] O CÓDIGO INFECTOU A REDE!", texto: "Imagens de salas vazias travam o disco rígido.", chatRespostas: { p1: "Sem corpo físico.", p2: "Corrupção de arquivos.", p3: "Sem variação química." } },
        { id: "#203-FLS", especieCorreta: "falso", protocoloCorreto: "quimico", cifra: "GAS-99", cifraChave: "ERGOSTEROIS_NEURO", freqCorreta: 50, resultadoTermico: "38.8°C febril humana.", resultadoAudio: "Apenas murmúrios da vítima.", mensagemSucesso: "[✓] SILO PURGADO E QUARENTENADO.", mensagemErro: "[X] SURTO PSICÓTICO CONTINUA!", texto: "Sussurros no trigo causados por fungos alucinógenos.", chatRespostas: { p1: "Tremores por toxina.", p2: "Sem falhas elétricas.", p3: "Toxinas no sangue." } },
        { id: "#204-ESP", especieCorreta: "espiritual", protocoloCorreto: "exorcismo", cifra: "POL-11", cifraChave: "RESONANCIA_FANTASMA", freqCorreta: 15, resultadoTermico: "-11.0°C localizado.", resultadoAudio: "Sons de piano sem toque mecânico.", mensagemSucesso: "[✓] POLTERGEIST SELADO COM SAL.", mensagemErro: "[X] RELÍQUIAS DESTRUIDAS!", texto: "Piano tocando sozinho em casarão histórico.", chatRespostas: { p1: "Massa incorpórea.", p2: "Interferência em câmeras.", p3: "Geada instantânea." } },
        { id: "#205-CRP", especieCorreta: "criptideo", protocoloCorreto: "isolamento", cifra: "BIO-03", cifraChave: "FORCA_MECANICA", freqCorreta: 85, resultadoTermico: "38.0°C mamífero.", resultadoAudio: "Batidas mecânicas pesadas.", mensagemSucesso: "[✓] BESTA NEUTRALIZADA.", mensagemErro: "[X] A CERCA FOI ROMPIDA!", texto: "Cerca de aço retorcida com pelos rígidos.", chatRespostas: { p1: "Estrutura óssea pesada.", p2: "Sem panes elétricas.", p3: "Cheiro de graxa e sangue." } }
    ],
    // FASE 3: SETOR LARANJA
    [
        { id: "#301-LIM", especieCorreta: "liminar", protocoloCorreto: "amnesia", cifra: "LIM-01", cifraChave: "GEOMETRIA_ABERRANTE", freqCorreta: 45, resultadoTermico: "Oscilação de 10°C para 40°C.", resultadoAudio: "Reversão temporal de fase.", mensagemSucesso: "[✓] LOOP QUARENTENADO.", mensagemErro: "[X] O CORREDOR EXPANDIU!", texto: "Corredor de 50m que se estendeu por 4km.", chatRespostas: { p1: "Paredes reconfiguráveis.", p2: "Relógios perderam o tempo.", p3: "Ar seco estático." } },
        { id: "#302-COG", especieCorreta: "cognitivo", protocoloCorreto: "amnesia", cifra: "COG-02", cifraChave: "PADRAO_INFECTANTE", freqCorreta: 90, resultadoTermico: "36.6°C normal.", resultadoAudio: "Harmônica indutora de transe.", mensagemSucesso: "[✓] SIMBOLO DESTRUÍDO.", mensagemErro: "[X] O SIMBOLO REPLICOU-SE NOS AGENTES!", texto: "Padrão no painel faz pessoas desenharem na pele.", chatRespostas: { p1: "Transe compulsivo.", p2: "Vídeo grava sem problemas.", p3: "Sem alterações de gás." } },
        { id: "#303-FLS", especieCorreta: "falso", protocoloCorreto: "quimico", cifra: "GAS-30", cifraChave: "REFRACAO_OPTICA", freqCorreta: 50, resultadoTermico: "14.0°C ambiente.", resultadoAudio: "Vento noturno comum.", mensagemSucesso: "[✓] ILUSÃO ESCLARECIDA.", mensagemErro: "[X] PÂNICO RECURSIVO NA RODOVIA!", texto: "Sombra gigante na pista gerada por faróis na névoa.", chatRespostas: { p1: "Sombra sem massa.", p2: "Navegação ok.", p3: "Umidade de 95%." } },
        { id: "#304-ESP", especieCorreta: "espiritual", protocoloCorreto: "exorcismo", cifra: "POL-30", cifraChave: "TENSAO_ECTOPLASMICA", freqCorreta: 25, resultadoTermico: "-13.5°C no necrotério.", resultadoAudio: "Impulso infrassônico.", mensagemSucesso: "[✓] CONGELAMENTO DISSIPADO.", mensagemErro: "[X] VIDROS ESTILHAÇADOS!", texto: "Frascos de vidro quebrados com congelamento repentino.", chatRespostas: { p1: "Ectoplasma visível.", p2: "Baterias descarregadas.", p3: "Cristais de gelo." } },
        { id: "#305-CRP", especieCorreta: "criptideo", protocoloCorreto: "isolamento", cifra: "BIO-30", cifraChave: "EXTRATO_MAMIFERO", freqCorreta: 75, resultadoTermico: "38.8°C mamífero.", resultadoAudio: "Onda de 8Hz a 12Hz.", mensagemSucesso: "[✓] ESPÉCIME DA AMAZÔNIA CAPTURADO.", mensagemErro: "[X] O CRÍPTIDO DESTRUIU O ACAMPAMENTO!", texto: "Árvores arranhadas a 3 metros de altura.", chatRespostas: { p1: "Organismo físico vivo.", p2: "Atenuação leve de rádio.", p3: "Mucosa com enxofre." } }
    ],
    // FASE 4: SETOR VERMELHO
    [
        { id: "#401-SKW", especieCorreta: "skinwalker", protocoloCorreto: "isolamento", cifra: "SKW-44", cifraChave: "REPRODUCAO_VOCAL", freqCorreta: 60, resultadoTermico: "38.1°C viva.", resultadoAudio: "Portadora vocal idêntica a gravação.", mensagemSucesso: "[✓] METAMORFO ELIMINADO.", mensagemErro: "[X] A COISA INVADIU A RESIDÊNCIA!", texto: "Cão doméstico emitindo frases completas.", chatRespostas: { p1: "Coluna distorcida.", p2: "Modulação AM ruidosa.", p3: "Cheiro de decomposição." } },
        { id: "#402-LIM", especieCorreta: "liminar", protocoloCorreto: "amnesia", cifra: "LIM-02", cifraChave: "REPETICAO_NULA", freqCorreta: 40, resultadoTermico: "18.0°C estático.", resultadoAudio: "Sem efeito Doppler.", mensagemSucesso: "[✓] RODOVIA BLOQUEADA.", mensagemErro: "[X] MAIS CARROS PRESO NO LOOP!", texto: "Quilômetro 142 repetindo-se continuamente.", chatRespostas: { p1: "Cenário idêntico.", p2: "GPS congelado.", p3: "Vento nulo." } },
        { id: "#403-FLS", especieCorreta: "falso", protocoloCorreto: "quimico", cifra: "GAS-44", cifraChave: "PRION_ENCEFALO", freqCorreta: 50, resultadoTermico: "40.2°C febril animal.", resultadoAudio: "Respiração acelerada.", mensagemSucesso: "[✓] PRÍON CONTIDO SANITARIAMENTE.", mensagemErro: "[X] NEGLIGÊNCIA SANITÁRIA!", texto: "Cervo doente sem medo de humanos (CWD).", chatRespostas: { p1: "Tremores neurológicos.", p2: "Câmeras ok.", p3: "Febre alta." } },
        { id: "#404-ESP", especieCorreta: "espiritual", protocoloCorreto: "exorcismo", cifra: "POL-44", cifraChave: "GRADIENTE_ECTO", freqCorreta: 10, resultadoTermico: "-15.1°C no porto.", resultadoAudio: "Variação de pressão acústica.", mensagemSucesso: "[✓] PORTUAL PURIFICADO.", mensagemErro: "[X] CONGELAMENTO TOTAL DO SETOR!", texto: "Guindastes pesados movidos sem energia elétrica.", chatRespostas: { p1: "Incorpóreo.", p2: "Sinal de TV cortado.", p3: "Geada espessa." } },
        { id: "#405-CRP", especieCorreta: "criptideo", protocoloCorreto: "isolamento", cifra: "BIO-44", cifraChave: "SECRECAO_PREDATORA", freqCorreta: 80, resultadoTermico: "39.0°C reptiliana.", resultadoAudio: "Garras raspando pedra.", mensagemSucesso: "[✓] PREDADOR REPTILIANO QUEIMADO.", mensagemErro: "[X] EMBOSCADA TÁTICA DA CRIATURA!", texto: "Ataques com extração completa de sangue em animais.", chatRespostas: { p1: "Reptil bípede.", p2: "Sem panes digitais.", p3: "Odor de bile." } }
    ],
    // FASE 5: SETOR ROXO
    [
        { id: "#501-SKW", especieCorreta: "skinwalker", protocoloCorreto: "isolamento", cifra: "SKW-55", cifraChave: "MIMETISMO_ESTRUTURAL", freqCorreta: 65, resultadoTermico: "36°C a 39°C variável.", resultadoAudio: "Sobreposição de rugido e fala.", mensagemSucesso: "[✓] METAMORFO DE ALTO NÍVEL MORTO.", mensagemErro: "[X] A COISA INFILTROU-SE COMO AGENTE!", texto: "Figura na trilha chamando os membros do grupo pelo nome.", chatRespostas: { p1: "Membros alongados.", p2: "Loop de voz no rádio.", p3: "Matéria podre." } },
        { id: "#502-COG", especieCorreta: "cognitivo", protocoloCorreto: "amnesia", cifra: "COG-55", cifraChave: "VETOR_SIMBOLICO", freqCorreta: 95, resultadoTermico: "22.0°C normal.", resultadoAudio: "Sem emissão acústica.", mensagemSucesso: "[✓] GRAFITE DESTRUÍDO COM ÁCIDO.", mensagemErro: "[X] TRANSMISSÃO VISUAL PARA A SEDE!", texto: "Grafite no teto da galeria faz pessoas se mutilarem.", chatRespostas: { p1: "Ação visual estrita.", p2: "Câmera grava sem falhas.", p3: "Ar limpo." } },
        { id: "#503-FLS", especieCorreta: "falso", protocoloCorreto: "quimico", cifra: "GAS-55", cifraChave: "VAPOR_INDUSTRIAL", freqCorreta: 50, resultadoTermico: "21.0°C regular.", resultadoAudio: "Barulho de compressores.", mensagemSucesso: "[✓] SOLVENTES PURGADOS.", mensagemErro: "[X] EXPLOSÃO DE VAPORES TÓXICOS!", texto: "Aparições em galpão provocadas por solvente neurotóxico.", chatRespostas: { p1: "Alucinação química.", p2: "Rede elétrica intacta.", p3: "Gás tóxico elevado." } },
        { id: "#504-ESP", especieCorreta: "espiritual", protocoloCorreto: "exorcismo", cifra: "POL-55", cifraChave: "PONTO_GELIDO_EXTREMO", freqCorreta: 15, resultadoTermico: "-10.5°C no bar.", resultadoAudio: "Vidros colidindo no ar.", mensagemSucesso: "[✓] ESPÍRITO EXORCIZADO.", mensagemErro: "[X] ESTRUTURAS DE MADEIRA ARREMESSADAS!", texto: "Garrafas arremessadas em saloon desativado.", chatRespostas: { p1: "Vulto sem massa.", p2: "Lâmpadas estourando.", p3: "Ponto congelante." } },
        { id: "#505-CRP", especieCorreta: "criptideo", protocoloCorreto: "isolamento", cifra: "BIO-55", cifraChave: "SINAL_AVIANO", freqCorreta: 85, resultadoTermico: "38.5°C quente.", resultadoAudio: "Bater de asas de alta energia.", mensagemSucesso: "[✓] CRIATURA ALADA CAPTURADA.", mensagemErro: "[X] A PONTE FOI DERRUBADA!", texto: "Criatura de grande envergadura na ponte metálica.", chatRespostas: { p1: "Corpo biológico pesado.", p2: "Picos de estática.", p3: "Odor de ozônio." } }
    ],
    // FASE 6: BLACK SITE
    [
        { id: "#601-SKW", especieCorreta: "skinwalker", protocoloCorreto: "isolamento", cifra: "BLACK-01", cifraChave: "SINTESE_ANOMALA", freqCorreta: 70, resultadoTermico: "39.8°C mutável.", resultadoAudio: "Voz do próprio diretor do site.", mensagemSucesso: "[✓] COBAIA CLONADA INCINERADA.", mensagemErro: "[X] A COBAIA ABRIU OS PORTÕES!", texto: "Metamorfo de laboratório usando comandos de voz para fugir.", chatRespostas: { p1: "Alteração de massa.", p2: "Sistemas liberados por voz.", p3: "Necrose e reagentes." } },
        { id: "#602-DIG", especieCorreta: "creepypasta", protocoloCorreto: "digital", cifra: "BLACK-02", cifraChave: "CORRUPCAO_SUBROTINA", freqCorreta: 30, resultadoTermico: "92.0°C nos servidores.", resultadoAudio: "Dados corrompidos na placa de som.", mensagemSucesso: "[✓] MAINFRAME FORMATADO.", mensagemErro: "[X] A IA PARANORMAL TOMOU A REDE!", texto: "Subrotina autônoma criando entidades digitais.", chatRespostas: { p1: "Totalmente digital.", p2: "Apagão de BIOS.", p3: "Superaquecimento de CPU." } },
        { id: "#603-FLS", especieCorreta: "falso", protocoloCorreto: "quimico", cifra: "BLACK-03", cifraChave: "AGENTE_INCAPACITANTE", freqCorreta: 50, resultadoTermico: "20.0°C estável.", resultadoAudio: "Sistemas de exaustão.", mensagemSucesso: "[✓] AGENTE BZ NEUTRALIZADO.", mensagemErro: "[X] DANO CEREBRAL TÁTICO!", texto: "Vazamento de gás militar incapacitante em testes.", chatRespostas: { p1: "Alucinações severas.", p2: "Monitores ok.", p3: "Composto BZ no ar." } },
        { id: "#604-ESP", especieCorreta: "espiritual", protocoloCorreto: "exorcismo", cifra: "BLACK-04", cifraChave: "ARQUIVO_FUNDADOR", freqCorreta: 10, resultadoTermico: "-18.2°C no cofre.", resultadoAudio: "Frequência sub-audível.", mensagemSucesso: "[✓] FUNDADOR SELADO NO COFRE.", mensagemErro: "[X] DESTRUIÇÃO DE DOCUMENTOS SECRETOS!", texto: "Espírito do fundador arremessando arquivos de 1888.", chatRespostas: { p1: "Projeção estática.", p2: "Blecaute total de sensores.", p3: "Gelo nos arquivos." } },
        { id: "#605-CRP", especieCorreta: "criptideo", protocoloCorreto: "isolamento", cifra: "BLACK-05", cifraChave: "COBAIA_ALPHA_PRED", freqCorreta: 90, resultadoTermico: "41.5°C frenesi biológico.", resultadoAudio: "Rugidos trincando visores.", mensagemSucesso: "[✓] COBAIA ALPHA DESTRIÚDA COM PLASMA.", mensagemErro: "[X] O BLACK SITE FOI DEVASTADO!", texto: "Super-predador rompeu hidráulica de aço.", chatRespostas: { p1: "Carcaça blindada.", p2: "Destruição física pura.", p3: "Hormônio e sangue." } }
    ],
    // FASE 7: SETOR PRATA (Anomalias Espaciais)
    [
        { id: "#701-LIM", especieCorreta: "liminar", protocoloCorreto: "amnesia", cifra: "PRATA-01", cifraChave: "DOBRA_LOCAL", freqCorreta: 40, resultadoTermico: "0°C e 40°C simultâneos.", resultadoAudio: "Eco reverso.", mensagemSucesso: "[✓] DOBRA ESPACIAL QUARENTENADA.", mensagemErro: "[X] A SALA DESAPARECEU!", texto: "Sala de reunião com portas levando ao próprio teto.", chatRespostas: { p1: "Gravidade distorcida.", p2: "Bússolas girando em loop.", p3: "Sem variação química." } },
        { id: "#702-LIM", especieCorreta: "liminar", protocoloCorreto: "amnesia", cifra: "PRATA-02", cifraChave: "SALA_VAZIA", freqCorreta: 45, resultadoTermico: "15.0°C constante.", resultadoAudio: "Som de lâmpada fluorescente.", mensagemSucesso: "[✓] BLOQUEADOR B-4 APLICADO.", mensagemErro: "[X] AGENTES PERDIDOS NO ESPAÇO!", texto: "Escritório abandonado sem saídas ou janelas.", chatRespostas: { p1: "Arquitetura impossível.", p2: "Relógios parados.", p3: "Sem cheiro." } },
        { id: "#703-FLS", especieCorreta: "falso", protocoloCorreto: "quimico", cifra: "PRATA-03", cifraChave: "ESPELHAMENTO_OPTICO", freqCorreta: 50, resultadoTermico: "21.0°C normal.", resultadoAudio: "Som ambiente limpo.", mensagemSucesso: "[✓] ILUSÃO DE ESPELHO ESCLARECIDA.", mensagemErro: "[X] RECURSOS WASTADOS!", texto: "Aparência de sala dupla causada por painel polido.", chatRespostas: { p1: "Reflexo perfeito.", p2: "Sem travamentos.", p3: "Ar purificado." } },
        { id: "#704-LIM", especieCorreta: "liminar", protocoloCorreto: "amnesia", cifra: "PRATA-04", cifraChave: "ABISMO_VERTICAL", freqCorreta: 42, resultadoTermico: "Queda constante.", resultadoAudio: "Vento em poço infinito.", mensagemSucesso: "[✓] POÇO SELADO COM CONCRETO.", mensagemErro: "[X] QUEDA INFINITA CONTINUA!", texto: "Poço de elevador sem fundo mensurável por sonar.", chatRespostas: { p1: "Vazio absoluto.", p2: "Sensores perdem sinal.", p3: "Ar rarefeito." } },
        { id: "#705-COG", especieCorreta: "cognitivo", protocoloCorreto: "amnesia", cifra: "PRATA-05", cifraChave: "ANGULO_IMPOSSIVEL", freqCorreta: 90, resultadoTermico: "22.0°C regular.", resultadoAudio: "Infrassom indutor.", mensagemSucesso: "[✓] ÂNGULO COBERTO E PURGADO.", mensagemErro: "[X] LOUCURA GEOMÉTRICA!", texto: "Canto de parede que induz vômito e desorientação.", chatRespostas: { p1: "Vetor puramente visual.", p2: "Sem panes em cabos.", p3: "Ar limpo." } }
    ],
    // FASE 8: SETOR COBALTO (Ameaças Biológicas)
    [
        { id: "#801-CRP", especieCorreta: "criptideo", protocoloCorreto: "isolamento", cifra: "COBALTO-01", cifraChave: "MUTACAO_FUNGICA", freqCorreta: 80, resultadoTermico: "37.5°C biológico.", resultadoAudio: "Estalo de esporos.", mensagemSucesso: "[✓] MUTANTE FÚNGICO INCINERADO.", mensagemErro: "[X] ESPOROS DISSEMINADOS!", texto: "Corpo infectado por esporos que se move autonomamente.", chatRespostas: { p1: "Carcaça rígida.", p2: "Dispositivos funcionais.", p3: "Odor forte de mofo." } },
        { id: "#802-FLS", especieCorreta: "falso", protocoloCorreto: "quimico", cifra: "COBALTO-02", cifraChave: "TOXINA_BOTULINICA", freqCorreta: 50, resultadoTermico: "36.6°C normal.", resultadoAudio: "Sem registros anômalos.", mensagemSucesso: "[✓] TOXINA ALIMENTAR TRATADA.", mensagemErro: "[X] DIAGNÓSTICO RETARDADO!", texto: "Paralisia muscular generalizada após consumo de enlatados.", chatRespostas: { p1: "Fraqueza motora.", p2: "Rede elétrica intacta.", p3: "Presença de toxina B." } },
        { id: "#803-CRP", especieCorreta: "criptideo", protocoloCorreto: "isolamento", cifra: "COBALTO-03", cifraChave: "INSETO_TITANICO", freqCorreta: 85, resultadoTermico: "35.0°C pecilotérmica.", resultadoAudio: "Zumbido de alta frequência.", mensagemSucesso: "[✓] INSETO GIGANTE DESTRUÍDO.", mensagemErro: "[X] O ENXAME FUGIU!", texto: "Quitinosa gigante encontrada em túnel de metrô.", chatRespostas: { p1: "Carapaça dura.", p2: "Cabo cortado fisicamente.", p3: "Cheiro de ácido." } },
        { id: "#804-SKW", especieCorreta: "skinwalker", protocoloCorreto: "isolamento", cifra: "COBALTO-04", cifraChave: "SIMBIOSE_ANIMAL", freqCorreta: 70, resultadoTermico: "38.2°C mutável.", resultadoAudio: "Mimetismo vocal de ursos.", mensagemSucesso: "[✓] SIMBIONTE NEUTRALIZADO.", mensagemErro: "[X] ATAQUE AO ACAMPAMENTO!", texto: "Urso com mandíbula dupla que atrai caçadores.", chatRespostas: { p1: "Deformação torácica.", p2: "Sinal VHF alterado.", p3: "Odor de sangue." } },
        { id: "#805-CRP", especieCorreta: "criptideo", protocoloCorreto: "isolamento", cifra: "COBALTO-05", cifraChave: "PARASITA_NEURAL", freqCorreta: 78, resultadoTermico: "39.1°C viva.", resultadoAudio: "Chiado biológico.", mensagemSucesso: "[✓] PARASITA ELIMINADO.", mensagemErro: "[X] INFECÇÃO NO PERÍMETRO!", texto: "Organismo preso à coluna da vítima controlando seus passos.", chatRespostas: { p1: "Massa muscular externa.", p2: "Sem interferência em rádio.", p3: "Secreção amarela." } }
    ],
    // FASE 9: SETOR OBSIDIANA (Ameaças Cognitivas)
    [
        { id: "#901-COG", especieCorreta: "cognitivo", protocoloCorreto: "amnesia", cifra: "OBS-01", cifraChave: "FRASE_MALDITA", freqCorreta: 90, resultadoTermico: "36.6°C regular.", resultadoAudio: "Frase de 7 palavras em loop.", mensagemSucesso: "[✓] MEMÓRIA AUDITIVA PURGADA.", mensagemErro: "[X] CONTÁGIO MENTAL NA SEDE!", texto: "Frase ouvida em rádio faz pessoas repetirem o texto até morrer.", chatRespostas: { p1: "Repetição obsessiva.", p2: "Gravação magnética ok.", p3: "Sem gases." } },
        { id: "#902-DIG", especieCorreta: "creepypasta", protocoloCorreto: "digital", cifra: "OBS-02", cifraChave: "TEXTO_CORROMPIDO", freqCorreta: 35, resultadoTermico: "0°C física.", resultadoAudio: "Ruído binário.", mensagemSucesso: "[✓] SITE BLOQUEADO E PURGADO.", mensagemErro: "[X] VÍRUS MEMÉTICO NA REDE!", texto: "Arquivo de texto em fórum que provoca encefalite digital.", chatRespostas: { p1: "Estritamente no software.", p2: "Pane no sistema operacional.", p3: "Sem cheiro." } },
        { id: "#903-COG", especieCorreta: "cognitivo", protocoloCorreto: "amnesia", cifra: "OBS-03", cifraChave: "EFEITO_MANDELA_ANOMALO", freqCorreta: 92, resultadoTermico: "20.0°C estável.", resultadoAudio: "Sem áudio anômalo.", mensagemSucesso: "[✓] AMNÉSICO B-4 APLICADO.", mensagemErro: "[X] MEMÓRIA COLETIVA ALTERADA!", texto: "População de uma vila lembra de uma guerra que nunca ocorreu.", chatRespostas: { p1: "Dissonância cognitiva.", p2: "Registros históricos ok.", p3: "Ar limpo." } },
        { id: "#904-FLS", especieCorreta: "falso", protocoloCorreto: "quimico", cifra: "OBS-04", cifraChave: "ESTRESSE_PÓS_TRAUMA", freqCorreta: 50, resultadoTermico: "37.0°C febril.", resultadoAudio: "Apenas choro.", mensagemSucesso: "[✓] PSICOTERAPIA E EVACUAÇÃO.", mensagemErro: "[X] TRATAMENTO INCORRETO!", texto: "Visões de guerra em soldados decorrentes de TEPT grave.", chatRespostas: { p1: "Surto psicológico.", p2: "Equipamentos perfeitos.", p3: "Exame de sangue ok." } },
        { id: "#905-COG", especieCorreta: "cognitivo", protocoloCorreto: "amnesia", cifra: "OBS-05", cifraChave: "SÍMBOLO_NÓRDICO_ANÔMALO", freqCorreta: 95, resultadoTermico: "21.0°C normal.", resultadoAudio: "Infrassom.", mensagemSucesso: "[✓] TATTUAGEM REMOVIDA E PURGADA.", mensagemErro: "[X] SURTO COGNITIVO!", texto: "Símbolo antigo desenhado na pedra que impede o sono.", chatRespostas: { p1: "Insônia psíquica.", p2: "Sem panes digitais.", p3: "Ar normal." } }
    ],
    // FASE 10: SETOR QUÂNTICO (Anomalias Temporais)
    [
        { id: "#1001-LIM", especieCorreta: "liminar", protocoloCorreto: "amnesia", cifra: "QUANT-01", cifraChave: "REVERSÃO_TEMPORAL", freqCorreta: 40, resultadoTermico: "Congelamento e calor simultâneos.", resultadoAudio: "Áudio tocando ao contrário.", mensagemSucesso: "[✓] CAMPO TEMPORAL ESTABILIZADO.", mensagemErro: "[X] LOOP TEMPORAL PERMANENTE!", texto: "A mesma hora (03:33) repete-se perpetuamente no relógio.", chatRespostas: { p1: "Tempo travado.", p2: "Relógios de quartzo parados.", p3: "Ar limpo." } },
        { id: "#1002-ESP", especieCorreta: "espiritual", protocoloCorreto: "exorcismo", cifra: "QUANT-02", cifraChave: "ECO_TEMPORAL", freqCorreta: 20, resultadoTermico: "-12.0°C localizado.", resultadoAudio: "Passos de 1920.", mensagemSucesso: "[✓] ECO FANTASMA PURIFICADO.", mensagemErro: "[X] MANIFESTAÇÃO HISTÓRICA AUMENTOU!", texto: "Soldados da Primeira Guerra caminhando no porão.", chatRespostas: { p1: "Projeção sem massa.", p2: "Interferência magnética.", p3: "Frio intenso." } },
        { id: "#1003-FLS", especieCorreta: "falso", protocoloCorreto: "quimico", cifra: "QUANT-03", cifraChave: "DESINCRONIZAÇÃO_CIRCADIANA", freqCorreta: 50, resultadoTermico: "36.6°C normal.", resultadoAudio: "Ruído comum.", mensagemSucesso: "[✓] CICLO CIRCADIANO AJUSTADO.", mensagemErro: "[X] RETARDO MÉDICO!", texto: "Insonia e perda do tempo causada por isolamento em mina.", chatRespostas: { p1: "Fadiga extrema.", p2: "Sem falhas elétricas.", p3: "Ar com pouco O2." } },
        { id: "#1004-LIM", especieCorreta: "liminar", protocoloCorreto: "amnesia", cifra: "QUANT-04", cifraChave: "ENVELHECIMENTO_ACELERADO", freqCorreta: 48, resultadoTermico: "45.0°C radiação térmica.", resultadoAudio: "Tic-tac acelerado.", mensagemSucesso: "[✓] ZONA DE DECAIMENTO QUARENTENADA.", mensagemErro: "[X] AGENTES ENVELHECERAM 40 ANOS!", texto: "Frutas e objetos envelhecem 10 anos em 5 minutos na sala.", chatRespostas: { p1: "Decaimento atômico.", p2: "Baterias descarregadas.", p3: "Odor de ozônio." } },
        { id: "#1005-DIG", especieCorreta: "creepypasta", protocoloCorreto: "digital", cifra: "QUANT-05", cifraChave: "CLOCK_NEGATIVO", freqCorreta: 30, resultadoTermico: "0°C física.", resultadoAudio: "Sinal de clock invertido.", mensagemSucesso: "[✓] ARQUIVO REVOLUTION DELETADO.", mensagemErro: "[X] PANE NO TEMPO DO MAINFRAME!", texto: "Relógio do computador contando os segundos para trás.", chatRespostas: { p1: "Digital estrito.", p2: "BIOS corrompida.", p3: "Sem variação." } }
    ],
    // FASE 11: SETOR ETER (Entidades Celestiais)
    [
        { id: "#1101-ESP", especieCorreta: "espiritual", protocoloCorreto: "exorcismo", cifra: "ETER-01", cifraChave: "LUZ_CEGANTE", freqCorreta: 15, resultadoTermico: "-16.0°C no ponto focal.", resultadoAudio: "Cântico angélico em 19kHz.", mensagemSucesso: "[✓] ENTIDADE CELESTIAL PURIFICADA.", mensagemErro: "[X] CEGUEIRA COLETIVA DA TROPA!", texto: "Figura de luz radiante no topo da montanha que cega observadores.", chatRespostas: { p1: "Massa de energia pura.", p2: "Sobrecarga de fótons.", p3: "Frio intenso no solo." } },
        { id: "#1102-COG", especieCorreta: "cognitivo", protocoloCorreto: "amnesia", cifra: "ETER-02", cifraChave: "SÍMBOLO_SAGRADO_FALSO", freqCorreta: 95, resultadoTermico: "21.0°C estável.", resultadoAudio: "Sussurro binaural.", mensagemSucesso: "[✓] AMNÉSICO B-4 E APAGAMENTO.", mensagemErro: "[X] SEITA ANÔMALA FORMADA!", texto: "Símbolo no céu que faz vilarejo formar seita de adoração.", chatRespostas: { p1: "Transe devocional.", p2: "Sem falhas de rádio.", p3: "Ar sem toxinas." } },
        { id: "#1103-FLS", especieCorreta: "falso", protocoloCorreto: "quimico", cifra: "ETER-03", cifraChave: "FENÔMENO_METEOROLÓGICO", freqCorreta: 50, resultadoTermico: "0.0°C clima.", resultadoAudio: "Trovão comum.", mensagemSucesso: "[✓] AURORA BOREAL CONFIRMADA.", mensagemErro: "[X] PÂNICO DESNECESSÁRIO!", texto: "Luzes no céu causadas por tempestade solar e cristais de gelo.", chatRespostas: { p1: "Fenômeno óptico.", p2: "Interferência magnética leve.", p3: "Ar frio natural." } },
        { id: "#1104-ESP", especieCorreta: "espiritual", protocoloCorreto: "exorcismo", cifra: "ETER-04", cifraChave: "ORBES_DE_ENERGIA", freqCorreta: 12, resultadoTermico: "-14.0°C ao redor.", resultadoAudio: "Estática eletrostática.", mensagemSucesso: "[✓] ORBES CAPTURADOS EM SAL.", mensagemErro: "[X] DESCARGA ELÉTRICA NOS AGENTES!", texto: "Esferas flutuantes de luz queimando equipamentos de campo.", chatRespostas: { p1: "Sem biologia.", p2: "Queima de fusíveis.", p3: "Congelamento do solo." } },
        { id: "#1105-CRP", especieCorreta: "criptideo", protocoloCorreto: "isolamento", cifra: "ETER-05", cifraChave: "BESTA_ESTELAR", freqCorreta: 88, resultadoTermico: "42.0°C radiação biológica.", resultadoAudio: "Zumbido ressonante.", mensagemSucesso: "[✓] CRÍPTIDO CELESTIAL INCINERADO.", mensagemErro: "[X] O CRÍPTIDO VOOU PARA A ESTRATOSFERA!", texto: "Organismo bioluminescente caído do espaço devorando minério.", chatRespostas: { p1: "Tecido cristalino.", p2: "Sem interferência digital.", p3: "Odor de enxofre e radiação." } }
    ],
    // FASE 12: VOID ABSOLUTO (Ponto Cero)
    [
        { id: "#1201-LIM", especieCorreta: "liminar", protocoloCorreto: "amnesia", cifra: "VOID-01", cifraChave: "COLAPSO_TOTAL", freqCorreta: 50, resultadoTermico: "Nulo / Sem leitura.", resultadoAudio: "Silêncio absoluto (0dB).", mensagemSucesso: "[✓] VOID ABSOLUTO SELADO NO PONTO ZERO.", mensagemErro: "[X] A REALIDADE FOI APAGADA!", texto: "Câmara onde a matéria e o som deixaram de existir completamente.", chatRespostas: { p1: "Ausência de tudo.", p2: "Sem sinal.", p3: "Vácuo total." } },
        { id: "#1202-SKW", especieCorreta: "skinwalker", protocoloCorreto: "isolamento", cifra: "VOID-02", cifraChave: "METAMORFO_SUPREMO", freqCorreta: 70, resultadoTermico: "39.9°C instável.", resultadoAudio: "Vozes de todos os agentes.", mensagemSucesso: "[✓] METAMORFO SUPREMO QUEIMADO.", mensagemErro: "[X] A AGÊNCIA S.I.P. FOI ASSUMIDA!", texto: "Entidade imitando a forma e a memória do Agente-709.", chatRespostas: { p1: "Cópia perfeita.", p2: "Sinal clonado.", p3: "Cheiro de ozônio e sangue." } },
        { id: "#1203-DIG", especieCorreta: "creepypasta", protocoloCorreto: "digital", cifra: "VOID-03", cifraChave: "VIRUS_MUNDO", freqCorreta: 30, resultadoTermico: "100°C nos chips.", resultadoAudio: "Estática de fim do mundo.", mensagemSucesso: "[✓] MAINFRAME DELETADO E SALVO.", mensagemErro: "[X] APAGÃO GLOBAL DE DADOS!", texto: "Código maligno que apaga a memória de computadores mundiais.", chatRespostas: { p1: "Software destrutivo.", p2: "Destruição de hardware.", p3: "Sem química." } },
        { id: "#1204-ESP", especieCorreta: "espiritual", protocoloCorreto: "exorcismo", cifra: "VOID-04", cifraChave: "REI_DOS_ESPÍRITOS", freqCorreta: 10, resultadoTermico: "-20.0°C crítico.", resultadoAudio: "Infrassom mortal.", mensagemSucesso: "[✓] ENTIDADE OMEGA EXORCIZADA.", mensagemErro: "[X] COLAPSO MENTAL TOTAL DA TROPA!", texto: "Projeção gigantesca no abismo que paralisa a mente humana.", chatRespostas: { p1: "Entidade incorpórea suprema.", p2: "Blecaute em 10km.", p3: "Gelo absoluto." } },
        { id: "#1205-CRP", especieCorreta: "criptideo", protocoloCorreto: "isolamento", cifra: "VOID-05", cifraChave: "DEVORADOR_DE_MUNDOS", freqCorreta: 95, resultadoTermico: "45.0°C biológico.", resultadoAudio: "Rugido de terremoto.", mensagemSucesso: "[✓] DEVORADOR NEUTRALIZADO COM PLASMA SUPREMO. JOGO ZERADO!", mensagemErro: "[X] O DEVORADOR FAGOCITOU A INSTALAÇÃO!", texto: "Besta de 30 metros adormecida nas profundezas da sede.", chatRespostas: { p1: "Massa biológica colossal.", p2: "Terremoto mecânico.", p3: "Odor de enxofre e plasma." } }
    ]
];

let faseAtualIdx = 0;
let fasesDesbloqueadas = 0;
let indiceAtual = 0;
let pontuacao = 0;
let sanidade = 100;
let bateria = 100;
let modoSobrevivenciaAtivo = false;
let casosResolvidosSobrevivencia = 0;
let modoMarcador = null;
let especieSelecionada = null;
let protocoloSelecionado = null;
let callbackModal = null;
let conquistasObtidas = JSON.parse(localStorage.getItem("sip_conquistas") || "[]");
let cifrasDecifradasCount = 0;
let divulgouVerdadeCount = 0;

// SINTETIZADOR AUDIO WEB API
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function tocarSomEspecial(tipo) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    if (tipo === 'click') {
        osc.type = 'square'; osc.frequency.setValueAtTime(600, audioCtx.currentTime); gain.gain.setValueAtTime(0.03, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
    } else if (tipo === 'estatica') {
        osc.type = 'sawtooth'; osc.frequency.setValueAtTime(100 + Math.random() * 300, audioCtx.currentTime); gain.gain.setValueAtTime(0.05, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
    } else if (tipo === 'batimento') {
        osc.type = 'sine'; osc.frequency.setValueAtTime(60, audioCtx.currentTime); gain.gain.setValueAtTime(0.1, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
    } else if (tipo === 'sucesso') {
        osc.type = 'sine'; osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1); gain.gain.setValueAtTime(0.05, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
    } else if (tipo === 'alarme') {
        osc.type = 'sawtooth'; osc.frequency.setValueAtTime(150, audioCtx.currentTime); gain.gain.setValueAtTime(0.08, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
    }

    osc.connect(gain); gain.connect(audioCtx.destination); osc.start(); osc.stop(audioCtx.currentTime + 0.4);
}

// FLUXO DE TELAS
function fecharJornalEIrParaCapa() {
    tocarSomEspecial('click');
    document.getElementById("tela-jornal").style.display = "none";
    document.getElementById("tela-capa").style.display = "block";
}

function irParaSeletorFases() {
    tocarSomEspecial('click');
    document.getElementById("tela-capa").style.display = "none";
    document.getElementById("tela-seletor").style.display = "block";
    gerarGrid12Fases();
}

function voltarParaCapa() {
    tocarSomEspecial('click');
    document.getElementById("tela-seletor").style.display = "none";
    document.getElementById("tela-capa").style.display = "block";
}

function gerarGrid12Fases() {
    const grid = document.getElementById("grid-12-fases");
    grid.innerHTML = "";
    for (let i = 0; i < 12; i++) {
        const desbloqueada = i <= fasesDesbloqueadas;
        const card = document.createElement("div");
        card.id = `card-fase-${i}`;
        card.className = `fase-card ${desbloqueada ? 'ativa' : 'bloqueada'}`;
        card.onclick = () => iniciarJogoNaFase(i);
        card.innerHTML = `
            <h3>${nomesSetores[i]}</h3>
            <p>5 Casos Exclusivos</p>
            <span id="status-fase-${i}" class="fase-status" style="color: ${desbloqueada ? '#33ff66' : '#ff3333'};">
                ${desbloqueada ? (i === faseAtualIdx ? 'SELECIONADO' : 'DISPONÍVEL') : '🔒 BLOQUEADO'}
            </span>
        `;
        grid.appendChild(card);
    }
}

// SISTEMA DE CONQUISTAS
function desbloquearConquista(id, nome, desc) {
    if (!conquistasObtidas.includes(id)) {
        conquistasObtidas.push(id);
        localStorage.setItem("sip_conquistas", JSON.stringify(conquistasObtidas));
        exibirModalNotificacao("🏆 CONQUISTA DESBLOQUEADA!", `[${nome}]\n\n${desc}`, "sucesso");
    }
}

function abrirPainelConquistas() {
    tocarSomEspecial('click');
    const lista = [
        { id: "c1", nome: "Mente Inabalável", desc: "Mantenha sanidade acima de 80% ao terminar um setor." },
        { id: "c2", nome: "Forense Experiente", desc: "Resolva 10 casos investigativos." },
        { id: "c3", nome: "Criptógrafo Mestre", desc: "Descriptografe 5 cifras com sucesso." },
        { id: "c4", nome: "Sempre a Verdade", desc: "Divulgue a verdade à imprensa 3 vezes." },
        { id: "c5", nome: "Mestre do Void Absoluto", desc: "Conclua todas as 12 Fases do jogo." }
    ];

    let texto = "CONQUISTAS DESBLOQUEADAS:\n\n";
    lista.forEach(c => {
        const obteve = conquistasObtidas.includes(c.id);
        texto += `${obteve ? "[✓]" : "[ ]"} ${c.nome.toUpperCase()} - ${c.desc}\n`;
    });

    exibirModalNotificacao("🏆 PAINEL DE CONQUISTAS DE CAMPO", texto, "sucesso");
}

// MINI-GAME VISUAL DE ONDA
function atualizarOndaLab() {
    const canvas = document.getElementById("canvas-audio");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const slider = document.getElementById("freq-slider");
    const val = parseInt(slider.value);
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#33ff66";
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + Math.sin((x + val * 5) * 0.05) * (val / 3);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();
}

function sintonizarSinalOnda() {
    if (bateria < 15) {
        exibirModalNotificacao("⚡ BATERIA INSUFICIENTE", "Bateria muito baixa para sintonizar a frequência do laboratório!", "erro");
        return;
    }
    bateria -= 15;
    tocarSomEspecial('estatica');
    const caso = fasesCasos[faseAtualIdx][indiceAtual];
    const sliderVal = parseInt(document.getElementById("freq-slider").value);
    const dif = Math.abs(sliderVal - (caso.freqCorreta || 50));
    
    const log = document.getElementById("lab-resultado-log");
    if (dif <= 15) {
        log.innerText = `[SINAL SINTONIZADO]: ${caso.resultadoAudio}`;
        tocarSomEspecial('sucesso');
    } else {
        log.innerText = `[RUÍDO BRANCO SEVERO]: Frequência fora de fase (${sliderVal}Hz). Tente ajustar o slider.`;
    }
    atualizarPainelStatus();
}

// MODAL CENTRALIZADO
function exibirModalNotificacao(titulo, mensagem, tipo = 'sucesso', callback = null, ehConfirmacao = false) {
    const modal = document.getElementById("modal-notificacao");
    const conteudo = modal.querySelector(".modal-conteudo");
    const tituloEl = document.getElementById("modal-titulo");
    const msgEl = document.getElementById("modal-mensagem");
    const botoesBox = document.getElementById("modal-botoes");
    
    tituloEl.innerText = titulo;
    msgEl.innerText = mensagem;
    callbackModal = callback;

    if (tipo === 'erro') conteudo.classList.add("erro");
    else conteudo.classList.remove("erro");

    if (ehConfirmacao) {
        botoesBox.innerHTML = `
            <button onclick="executarConfirmacaoModal(true)" class="btn-tool red">[ SIM, CONFIRMAR RESET ]</button>
            <button onclick="executarConfirmacaoModal(false)" class="btn-tool green">[ CANCELAR ]</button>
        `;
    } else {
        botoesBox.innerHTML = `<button id="modal-btn" onclick="fecharModalNotificacao()" class="btn-tool">[ CONTINUAR ]</button>`;
    }

    modal.style.display = "flex";
}

function fecharModalNotificacao() {
    tocarSomEspecial('click');
    document.getElementById("modal-notificacao").style.display = "none";
    if (callbackModal) {
        const cb = callbackModal;
        callbackModal = null;
        cb();
    }
}

function executarConfirmacaoModal(confirmado) {
    tocarSomEspecial('click');
    document.getElementById("modal-notificacao").style.display = "none";
    if (callbackModal) {
        const cb = callbackModal;
        callbackModal = null;
        cb(confirmado);
    }
}

function confirmarResetGlobal() {
    exibirModalNotificacao(
        "⚠️ RESET TOTAL DE SISTEMA DA AGÊNCIA",
        "ATENÇÃO OPERADOR AGENTE-709:\n\nEsta operação é irreversível. Todo o seu histórico de 12 setores resolvidos, conquistas e fases desbloqueadas serão permanentemente apagados da memória local do terminal!\n\nDeseja prosseguir com a formatação?",
        "erro",
        (confirmado) => {
            if (confirmado) {
                localStorage.removeItem("sip_fases_desbloqueadas");
                localStorage.removeItem("sip_conquistas");
                fasesDesbloqueadas = 0;
                faseAtualIdx = 0;
                indiceAtual = 0;
                pontuacao = 0;
                sanidade = 100;
                bateria = 100;
                conquistasObtidas = [];
                
                exibirModalNotificacao(
                    "[✓] FORMATADO COM SUCESSO",
                    "Memória do terminal purgada com sucesso. Retornando ao Jornal de recrutamento...",
                    "sucesso",
                    () => {
                        document.getElementById("tela-jogo").style.display = "none";
                        document.getElementById("tela-capa").style.display = "none";
                        document.getElementById("tela-seletor").style.display = "none";
                        document.getElementById("tela-jornal").style.display = "block";
                    }
                );
            }
        },
        true
    );
}

// MODO SOBREVIVÊNCIA INFINITO
function iniciarModoSobrevivencia() {
    tocarSomEspecial('click');
    modoSobrevivenciaAtivo = true;
    casosResolvidosSobrevivencia = 0;
    faseAtualIdx = Math.floor(Math.random() * 12);
    indiceAtual = Math.floor(Math.random() * 5);
    document.getElementById("tela-capa").style.display = "none";
    document.getElementById("tela-seletor").style.display = "none";
    document.getElementById("tela-jogo").style.display = "block";
    carregarCaso();
    exibirModalNotificacao("💀 MODO SOBREVIVÊNCIA ATIVADO", "Você adentrou o protocolo infinito entre as 12 Fases. Os casos surgirão aleatoriamente e a sanidade não se recupera entre setores!", "erro");
}

function agitarTerrorDinamico() {
    const chance = Math.random();
    if (chance < 0.20) {
        document.body.classList.add("terror-flash");
        tocarSomEspecial('estatica');
        setTimeout(() => document.body.classList.remove("terror-flash"), 350);
    } else if (chance < 0.65) {
        const msgs = [
            "⚠️ A ANOMALIA DETECTOU SUA PRESENÇA NO TERMINAL!",
            "⚠️ ALERTA: O AGENTE-709 ESTÁ SENDO OBSERVADO PELA ENTIDADE!",
            "⚠️ INTERFERÊNCIA SEVERA NO FILTRO DE SEGURANÇA MENTAL!",
            "⚠️ NÃO OLHE PARA O MONITOR POR MUITO TEMPO!"
        ];
        const msgSorteada = msgs[Math.floor(Math.random() * msgs.length)];
        tocarSomEspecial('alarme');
        exibirModalNotificacao("⚠️ ALERTA DE SEGURANÇA ⚠️", msgSorteada, 'erro');
    }
}

if (localStorage.getItem("sip_fases_desbloqueadas")) {
    fasesDesbloqueadas = parseInt(localStorage.getItem("sip_fases_desbloqueadas"));
}

function iniciarJogoNaFase(numFase) {
    if (numFase > fasesDesbloqueadas) {
        exibirModalNotificacao("🔒 SETOR BLOQUEADO", "Você não possui nível de credencial suficiente para acessar este Setor. Conclua os relatórios táticos das fases anteriores!", "erro");
        return;
    }
    tocarSomEspecial('click');
    modoSobrevivenciaAtivo = false;
    faseAtualIdx = numFase;
    indiceAtual = 0;
    document.getElementById("tela-seletor").style.display = "none";
    document.getElementById("tela-final").style.display = "none";
    document.getElementById("tela-jogo").style.display = "block";
    carregarCaso();
}

function voltarAoLobby() {
    tocarSomEspecial('click');
    document.getElementById("tela-jogo").style.display = "none";
    document.getElementById("tela-final").style.display = "none";
    document.getElementById("tela-seletor").style.display = "block";
    gerarGrid12Fases();
}

function voltarAoLobbyDoFinal() { voltarAoLobby(); }

function mudarAba(nomeAba, evt) {
    tocarSomEspecial('click');
    agitarTerrorDinamico();
    document.querySelectorAll('.tab-content').forEach(aba => aba.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`aba-${nomeAba}`).classList.add('active');
    if (evt && evt.target) evt.target.classList.add('active');
    if (nomeAba === 'labs') atualizarOndaLab();
}

function setMarcador(tipo) {
    tocarSomEspecial('click');
    modoMarcador = tipo;
    if (tipo === 'limpar') {
        const box = document.getElementById("relatorio-box");
        box.innerHTML = box.innerText;
        modoMarcador = null;
    }
}

document.getElementById("relatorio-box").addEventListener("mouseup", () => {
    if (!modoMarcador || modoMarcador === 'limpar') return;
    const selecao = window.getSelection();
    const texto = selecao.toString();
    if (texto.length > 2) {
        const span = document.createElement("span");
        span.className = modoMarcador === 'suspeito' ? 'destaque-red' : 'destaque-green';
        selecao.getRangeAt(0).surroundContents(span);
        tocarSomEspecial('click');
    }
});

function selecionarEspecie(esp) {
    tocarSomEspecial('click');
    especieSelecionada = esp;
    document.querySelectorAll('#grid-especies button').forEach(b => b.classList.remove('selecionado'));
    event.target.classList.add('selecionado');
}

function selecionarProtocolo(proto) {
    tocarSomEspecial('click');
    protocoloSelecionado = proto;
    document.querySelectorAll('#grid-protocolos button').forEach(b => b.classList.remove('selecionado'));
    event.target.classList.add('selecionado');
}

function descriptografarTexto() {
    tocarSomEspecial('click');
    const caso = fasesCasos[faseAtualIdx][indiceAtual];
    const input = document.getElementById("input-cifra").value.trim().toUpperCase();
    const log = document.getElementById("decrypt-log");

    if (input === caso.cifra || input === caso.cifraChave) {
        tocarSomEspecial('sucesso');
        cifrasDecifradasCount++;
        log.innerText = `[SUCESSO] Chave "${caso.cifraChave}" autenticada com sucesso!`;
        const box = document.getElementById("relatorio-box");
        box.innerHTML = box.innerHTML.replace("[=====DECIFRAR=====]", `<span class="highlight">[DADO: ${caso.cifraChave} CONFIRMADO]</span>`);
        if (cifrasDecifradasCount >= 5) desbloquearConquista("c3", "Criptógrafo Mestre", "Descriptografe 5 cifras com sucesso.");
    } else {
        tocarSomEspecial('alarme');
        log.innerText = `[ERRO] Cifra incorreta. Perda de 5% de sanidade.`;
        sanidade = Math.max(0, sanidade - 5);
        agitarTerrorDinamico();
        atualizarPainelStatus();
    }
}

function executarAnaliseLab(tipo) {
    if (bateria < 20) {
        exibirModalNotificacao("⚡ BATERIA INSUFICIENTE", "Bateria do laboratório abaixo de 20%! Recarregue o gerador antes de tentar nova varredura.", "erro");
        return;
    }
    bateria -= 20;
    tocarSomEspecial('estatica');
    const caso = fasesCasos[faseAtualIdx][indiceAtual];
    const log = document.getElementById("lab-resultado-log");

    if (tipo === 'termica') {
        log.innerText = `[VARREDURA TÉRMICA]: ${caso.resultadoTermico}`;
    } else {
        log.innerText = `[ESPECTROGRAMA DE ÁUDIO]: ${caso.resultadoAudio}`;
    }
    atualizarPainelStatus();
}

function recarregarBateria() {
    if (sanidade <= 10) {
        exibirModalNotificacao("⚠️ SANIDADE CRÍTICA", "Sanidade baixa demais para operar o gerador do laboratório sem sofrer um desmaio mental!", "erro");
        return;
    }
    tocarSomEspecial('click');
    bateria = 100;
    sanidade -= 10;
    atualizarPainelStatus();
    document.getElementById("lab-resultado-log").innerText = "Gerador de bateria recarregado. (-10% de sanidade por esforço).";
}

function enviarPerguntaChat(pTipo) {
    tocarSomEspecial('click');
    const caso = fasesCasos[faseAtualIdx][indiceAtual];
    const historico = document.getElementById("chat-historico");
    let txt = pTipo === 'p1' ? "A criatura mantinha articulação disforme, padrão bípede ou flutuava sem massa?" : pTipo === 'p2' ? "Houve interferência em ondas de rádio (AM/FM), pane em arquivos digitais ou alteração de bússola?" : "Qual o odor predominante e qual o comportamento dos sensores térmicos no ambiente?";
    
    historico.innerHTML += `<div class="chat-msg jogador">AGENTE: ${txt}</div>`;
    setTimeout(() => {
        historico.innerHTML += `<div class="chat-msg testemunha">TESTEMUNHA: "${caso.chatRespostas[pTipo]}"</div>`;
        historico.scrollTop = historico.scrollHeight;
    }, 500);
}

function conectarPonto(el, desc) {
    tocarSomEspecial('click');
    el.classList.add("selected");
    document.getElementById("mural-log").innerText = `EVIDÊNCIA CONECTADA: "${desc}".`;
}

function atualizarPainelStatus() {
    document.getElementById("sanidade-val").innerText = sanidade + "%";
    document.getElementById("bateria-val").innerText = bateria + "%";
    document.getElementById("pontuacao-val").innerText = pontuacao;

    document.getElementById("fase-val").innerText = modoSobrevivenciaAtivo ? "MODO SOBREVIVÊNCIA (12 FASES)" : nomesSetores[faseAtualIdx];

    if (sanidade <= 40) {
        tocarSomEspecial('batimento');
        document.getElementById("horror-overlay").style.opacity = (50 - sanidade) / 50;
        document.getElementById("sanidade-val").className = "highlight";
    } else {
        document.getElementById("horror-overlay").style.opacity = 0;
    }
}

function carregarCaso() {
    const casosFase = fasesCasos[faseAtualIdx];
    if (indiceAtual < casosFase.length) {
        const caso = casosFase[indiceAtual];
        document.getElementById("caso-id").innerText = caso.id;
        document.getElementById("relatorio-box").innerText = caso.texto;
        document.getElementById("caso-idx").innerText = modoSobrevivenciaAtivo ? casosResolvidosSobrevivencia + 1 : indiceAtual + 1;
        document.getElementById("caso-total").innerText = modoSobrevivenciaAtivo ? "∞" : casosFase.length;
        document.getElementById("feedback-painel").innerText = "SISTEMA OPERACIONAL PRONTO.";
        document.getElementById("feedback-painel").style.color = "#33ff66";
        document.getElementById("input-cifra").value = "";
        document.getElementById("decrypt-log").innerText = `Chave sugerida para teste: Digite ${caso.cifra} no sistema.`;
        document.getElementById("lab-resultado-log").innerText = "Aguardando execução da análise forense...";
        especieSelecionada = null;
        protocoloSelecionado = null;
        document.querySelectorAll('.btn-diag').forEach(b => b.classList.remove('selecionado'));
        atualizarPainelStatus();
        atualizarOndaLab();
    } else {
        if (faseAtualIdx === 11) {
            desbloquearConquista("c5", "Mestre do Void Absoluto", "Conclua todas as 12 Fases do jogo.");
            exibirTelaFinal();
        } else {
            if (sanidade >= 80) desbloquearConquista("c1", "Mente Inabalável", "Mantenha sanidade acima de 80% ao terminar um setor.");
            if (faseAtualIdx + 1 > fasesDesbloqueadas) {
                fasesDesbloqueadas = Math.min(11, faseAtualIdx + 1);
                localStorage.setItem("sip_fases_desbloqueadas", fasesDesbloqueadas);
            }
            exibirModalNotificacao(
                "🎉 SETOR CONCLUÍDO COM SUCESSO!", 
                `Parabéns, Agente! Todos os 5 casos deste setor foram contidos. O próximo setor (${nomesSetores[faseAtualIdx + 1]}) foi liberado!`, 
                "sucesso", 
                () => { voltarAoLobby(); }
            );
        }
    }
}

function exibirTelaFinal() {
    tocarSomEspecial('sucesso');
    document.getElementById("tela-jogo").style.display = "none";
    document.getElementById("tela-seletor").style.display = "none";
    document.getElementById("tela-final").style.display = "block";
    document.getElementById("pontuacao-final-val").innerText = pontuacao;
}

function finalizarCasoComEtica(escolhaEtica) {
    const caso = fasesCasos[faseAtualIdx][indiceAtual];

    if (!especieSelecionada || !protocoloSelecionado) {
        exibirModalNotificacao("⚠️ SELEÇÃO INCOMPLETA", "Você precisa selecionar a Espécie Anômala E o Protocolo Tático de Contenção antes de enviar o diagnóstico!", "erro");
        return;
    }

    let acertoTotal = (especieSelecionada === caso.especieCorreta && protocoloSelecionado === caso.protocoloCorreto);

    if (acertoTotal) {
        tocarSomEspecial('sucesso');
        pontuacao += 250;
        if (escolhaEtica === 'verdade') {
            pontuacao += 50;
            divulgouVerdadeCount++;
            if (divulgouVerdadeCount >= 3) desbloquearConquista("c4", "Sempre a Verdade", "Divulgue a verdade à imprensa 3 vezes.");
        }
        atualizarPainelStatus();

        if (modoSobrevivenciaAtivo) {
            casosResolvidosSobrevivencia++;
            if (casosResolvidosSobrevivencia >= 10) desbloquearConquista("c2", "Forense Experiente", "Resolva 10 casos investigativos.");
            faseAtualIdx = Math.floor(Math.random() * 12);
            indiceAtual = Math.floor(Math.random() * 5);
            exibirModalNotificacao("[✓] ANOMALIA CONTIDA", `Caso contido em Modo Sobrevivência!\n\nCasos Resolvidos: ${casosResolvidosSobrevivencia}`, "sucesso", () => carregarCaso());
        } else {
            exibirModalNotificacao(
                "[✓] CONTENÇÃO EXECUTADA COM SUCESSO",
                caso.mensagemSucesso,
                "sucesso",
                () => {
                    indiceAtual++;
                    carregarCaso();
                }
            );
        }
    } else {
        tocarSomEspecial('alarme');
        sanidade = Math.max(0, sanidade - 25);
        atualizarPainelStatus();

        exibirModalNotificacao(
            "[X] FALHA DE DIAGNÓSTICO OU PROTOCOLO",
            caso.mensagemErro + "\n\n(-25% DE SANIDADE MENTAL)",
            "erro",
            () => {
                agitarTerrorDinamico();
                if (sanidade <= 0) {
                    exibirModalNotificacao(
                        "⚠️ COLAPSO MENTAL TOTAL",
                        "Sua sanidade esgotou-se por completo! O operador sofreu colapso mental. Reiniciando a sequência de casos do setor...",
                        "erro",
                        () => {
                            sanidade = 100;
                            indiceAtual = 0;
                            carregarCaso();
                        }
                    );
                }
            }
        );
    }
}
