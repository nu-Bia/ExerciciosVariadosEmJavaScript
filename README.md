# ExerciciosVariadosEmJavaScript
Apostila FACCAT Exercícios do 14 ao 46, no Visual Studio Code em Java Script


14)  Ler  um  valor  e  escrever  a  mensagem  É  MAIOR  QUE  10!  se  o  valor  lido  for  maior  que  10,  caso contrário escrever NÃO É MAIOR QUE 10!



15) Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo).


16) As  maçãs  custam  R$  1,30  cada  se  forem  compradas  menos  de  uma  dúzia, e  R$  1,00  se  forem compradas  pelo  menos  12.  Escreva  um  programa  que  leia  o  número  de  maçãs  compradas,  calcule  e escreva o custo total da compra.


17)  Ler  as  notas  da  1a.  e  2a.  avaliações  de  um  aluno.  Calcular  a  média aritmética  simples  e  escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado). Escrever também a média calculada.


18)  Ler  o  ano  atual  e  o  ano  de  nascimento  de  uma  pessoa.  Escrever  uma mensagem  que  diga  se  ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). 


19) Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles. 


20) Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente. 


21) Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte. 


22) A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de  40  horas  receberá  hora  extra,  cujo  cálculo  é  o  valor  da  hora  regular  com  um  acréscimo  de  50%. Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas (considere que o mês possua 4 semanas exatas).


23)  Para  o  enunciado  a  seguir  foi  elaborado  um  algoritmo  em  Português  Estruturado  que contém erros, identifique os erros no algoritmo apresentado abaixo:Enunciado: Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule e mostre seu peso ideal, utilizando as seguintes fórmulas: - para sexo masculino:  peso ideal = (72.7 * altura) - 58 - para sexo feminino:  peso ideal = (62.1 * altura) - 44.7 inicio ler nome ler sexo se sexo = M então peso_ideal  (72.7 * altura) - 58 senão peso_ideal  (62.1 * altura) – 44.7      fim_se escrever  peso_ideal fim


24) Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que ele  recebe  uma  comissão  de  3%  sobre  o  total  das  vendas  até  R$  1.500,00  mais  5%  sobre  o  que ultrapassar este valor, calcular e escrever o seu salário total.


 25) Faça um  algoritmo para ler: número da  conta do cliente, saldo, débito e  crédito. Após,  calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.
 

26)  Faça  um  algoritmo  para  ler:  quantidade  atual  em  estoque,  quantidade  máxima  em  estoque  e quantidade  mínima  em  estoque  de  um  produto.  Calcular  e  escrever  a  quantidade  média  ((quantidade média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual a  quantidade  média  escrever  a  mensagem  'Não  efetuar  compra',  senão  escrever  a  mensagem  'Efetuar compra'. Exercícios 27 ao 38 utilizar Seleção Aninhada ou Concatenada (ver capítulos 8.1 e 8.2) 


27) Ler um valor e escrever se é positivo, negativo ou zero.


28) Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.


29)  Ler  3  valores (considere  que  não  serão  informados  valores  iguais) e  escrever  a  soma  dos  2 maiores. 


30)  Ler  3  valores (considere  que  não  serão  informados  valores  iguais)  e  escrevê-los  em  ordem crescente.

31) Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados. 


32) Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE. 


33) Ler dois valores e imprimir uma das três mensagens a seguir: ‘Números iguais’, caso os números sejam iguais ‘Primeiro é maior’, caso o primeiro seja maior que o segundo; ‘Segundo maior’, caso o segundo seja maior que o primeiro. 


34) Seja o seguinte algoritmo: início ler x ler y z  (x*y) + 5 se z <= 0 então resposta  ‘A’ senão se z <= 100 então resposta  ‘B’ senão resposta  ‘C’         fim_se       fim_se escrever  z, resposta fim Faça um teste de mesa e complete o quadro a seguir para os seguintes valores:Variáveis X Y Z Resposta 3 2 150 3 7 -1 -2 5 50 3 


35) Um posto está vendendo combustíveis com a seguinte tabela de descontos: até 20 litros, desconto de 3% por litro Álcool acima de 20 litros, desconto de 5% por litro até 20 litros, desconto de 4% por litro Gasolina acima de 20 litros, desconto de 6% por litro Escreva  um  algoritmo  que  leia  o  número  de  litros  vendidos  e  o  tipo  de  combustível (codificado  da seguinte  forma: A-álcool, G-gasolina),  calcule  e  imprima  o  valor  a  ser  pago  pelo  cliente  sabendo-se que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90. 


36)  Escreva  um  algoritmo  que  leia  as  idades  de  2  homens  e  de  2  mulheres (considere  que  as  idades dos  homens  serão  sempre  diferentes  entre  si,  bem  como  as  das  mulheres).  Calcule  e  escreva  a  soma das  idades  do  homem  mais  velho  com  a  mulher  mais  nova,  e  o  produto  das  idades  do  homem  mais novo com a mulher mais velha.


37) Uma fruteira está vendendo frutas com a seguinte tabela de preços: Até 5 Kg Acima de 5 Kg Morango R$ 2,50 por Kg R$ 2,20 por Kg Maçã R$ 1,80 por Kg R$ 1,50 por Kg Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda  um  desconto  de  10%  sobre  este  total.  Escreva  um  algoritmo  para  ler  a  quantidade  (em  Kg)  de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.
 

38)  Faça  um  algoritmo  para  ler  um  número  que  é  um  código  de  usuário.  Caso  este  código  seja diferente  de  um  código  armazenado  internamente  no  algoritmo  (igual  a 1234)  deve  ser  apresentada  a mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se esta senha estiver incorreta (a certa  é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’.


39) Para  A = V,  B = V  e  C = F,  qual o resultado da avaliação das seguintes expressões: a) (A  e  B)  ou  (A  xou  B) b) (A  ou  B) e (A  e  C) c) A  ou  C  e  B  xou  A  enão  B 


40)  Faça  um  algoritmo  para  ler:  a  descrição  do  produto  (nome),  a  quantidade  adquirida  e  o  preço unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total a pagar (total a pagar = total - desconto), sabendo-se que: - Se quantidade  <= 5  o desconto será de 2% - Se quantidade  > 5  e  quantidade  <=10  o desconto será de 3% - Se quantidade  >  10 o desconto será de 5%


41)  Faça  um  algoritmo  para  ler  as  3  notas  obtidas  por  um  aluno  nas  3 verificações  e  a  média  dos exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo: N1 + N2 * 2 + N3 * 3 + Média_dos_ExercíciosMédia_de_Aproveitamento  =    ---------------------------------------------------------7 A atribuição de conceitos obedece a tabela abaixo: Média de Aproveitamento Conceito > =  9,0  A > =  7,5  e  <  9,0 B > =  6,0  e  <  7,5 C <  6,0 D 


42) Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para estar em condições, um dos seguintes requisitos deve ser satisfeito: - Ter no mínimo 65 anos de idade. - Ter trabalhado no mínimo 30 anos. - Ter no mínimo 60 anos  e ter trabalhado no mínimo 25 anos. Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo de trabalho do empregado e a mensagem 'Requerer aposentadoria'  ou  'Não requerer'.


43) Seja o seguinte algoritmo: inicio ler a, b, c se (a < b+c) e (b <a+c) e (c <a+b) então se (a=b) e (b=c) então mens  'Triângulo Equilátero' senão se (a=b) ou (b=c) ou (a=c) então mens  'Triângulo Isósceles' senão mens  'Triângulo Escaleno'                   fim_se             fim_se senão mens  'Não e possível formar um triângulo' fim_se escrever mens fim Faça um teste de mesa e complete o quadro a seguir para os seguintes valores das variáveis: Variáveis
Variáveis a b C Mens 1 2 3 3 4 5 2 2 4 4 4 4 5 3 3 



44) Escreva um algoritmo para ler 2 valores e se o segundo valor informado for ZERO, deve ser lido um novo valor, ou seja, para o segundo valor não pode ser aceito o valor zero e imprimir o resultado da divisão do primeiro valor lido pelo segundo valor lido. (utilizar a estrutura REPITA). 
