Tecnologias:
 - DDD(Domain Driving Design)
 - Arquitetura Hexagonal

Esse projeto é composto de 4 fluxos principais:

    1 - Teams (Times)
    2 - Users e Login (Pessoas Usuárias e Credenciais de acesso)
    3 - Matches (Partidas)
    4 - Leaderboards (Placares)


Pasta domain
    - Um dos objetivos é o desaclopamento de tecnologias terceiras.

Sanitisação de dados
    - É uma forma de fazer uma "limpeza" nos dados, visando assim a segurança da nossa API.
        - Exemplo: Nem todas as pessoas respeitaram as regras impostas em algum campo(nome, email, password), afim de procurar e se proveitar de falhas de segurança
                    Supondo que a pessoa não tenha colocado um limite de caracteres nos campos, a pessoa pode fazer uma inserção de um codigo malicioso
                    gigante para tentar diversas logicas para entrar no banco, como não há um limite de caracteres especificado, alguma string longa vai entrar.

        Regra geral: NUNCA DEIXE UM SISTEMA SEM VALIDAÇÃO DE TAMANHO(QUANTIDADE) DE CARACTERES.

                    




Quando em uma /class T/(exemplo) nós passamos outra /class P/(exemplo) como parametro do construtor nos estamos fazendo com que
    a /class T/ seja dependente da /class P/, fazendo assim uma INJEÇÃO DE DEPENDENCIA.

Quando em uma class T nos passamos uma INTERFACE como parametro do contrutor estamos fazendo 
    uma INVERSÃO DE DEPENDENCIA.