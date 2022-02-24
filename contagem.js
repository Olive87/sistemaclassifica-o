/*ok- pecorrer do 0 até o nº de alunos

 ok- Verificar se o numero do aluno é par:
 verdadeiro: Escrever na tela o numero e PAR

ok- Verificar se o numero do aluno é impar:
Verdadeiro: Escrever na tela o numero e IMPAR

ok- Verificar se o numero é 0:
   Verdadeiro: Escrever na tela ZERO*/

   let numeroAlunos = 10;

for(let contador = 0; contador < numeroAlunos; contador++) { 
    // Resto % -> Retorno o resto de uma divisão inteira

    if(contador == 0) {
        console.log("O numero é ZERO")
    } else if(contador % 2 == 0) {
        // Concatenação
        console.log('O numero ' + contador + ' é PAR')
    } else if(contador % 2 == 1) {
        // Iterpolação
        console.log(`O numero ${contador} é IMNPAR`)
    }
}
