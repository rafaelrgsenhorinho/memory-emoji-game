Memory Emoji game Documentation in English and Portuguese below:

# **Emoji Memory Game**
## **Introduction**
The Memory Emoji Game is a simple web-based game designed to test a player's memory by matching pairs of emojis hidden behind cards. This documentation provides an overview of the project's structure, key features, and functionalities.

## **Project Structure**
The project consists of three main files: index.html, engine.js, and two CSS files (main.css and reset.css).

**index.html:**  
Contains the basic structure of the webpage.  
Includes the necessary elements to display the game board and reset functionality.  
**engine.js:**  
Manages the game logic and interactions using JavaScript.  
Defines the array of emojis, shuffling functionality, click handling, match checking, timer, start/pause and reset game.  
**main.css and reset.css:**  
Style the HTML elements to create the game's visual interface.  
Define layout, animations, and transitions for the game board and reset button.  

## **Key Features**  
**Game Initialization:**  
Emojis are randomly shuffled and displayed face down on the game board.  
If the player don't press the start button, the game won't start and the cards will remain frozen.  
The player also has the option to pause or reset the game.  
**Card Interactions:**  
Clicking on a card flips it over, revealing the emoji it contains.  
The game tracks open cards and checks for matches.  
**Match Checking:**  
Compares open cards and visually marks matching pairs.  
Hides non-matching pairs after a short delay.  
**Game Completion:**  
Notifies the player upon successfully matching all pairs with an alert.  

## **Conclusion**  
The Memory Emoji Game code provides a simple yet engaging gameplay experience. Players can test and improve their memory skills by matching pairs of emojis. The project demonstrates the use of HTML, CSS, and JavaScript to create an interactive game interface. Further enhancements, such as comments in the JavaScript for better code comprehension and potential feature additions, could be considered for future development.  

-------------------------------------------------------------------------------------------

# **Jogo da Memoria Emoji**
## **Introdução**  
O Jogo da Memória de Emojis é um jogo web simples projetado para testar a memória do jogador, combinando pares de emojis escondidos atrás de cartas. Esta documentação fornece uma visão geral da estrutura do projeto, recursos-chave e funcionalidades.  
  
## **Estrutura do Projeto**  
O projeto consiste em três arquivos principais: index.html, engine.js, e dois arquivos CSS (main.css e reset.css).  
  
#**index.html:**  
Contém a estrutura básica da página web.  
Inclui os elementos necessários para exibir o tabuleiro do jogo e a funcionalidade de reinício.  
#**engine.js:**  
Gerencia a lógica e interações do jogo usando JavaScript.  
Define a matriz de emojis, funcionalidade de embaralhamento, manipulação de cliques, verificação de correspondência, tempo de jogo, começar/pausar e resetar jogo.  
#**main.css e reset.css:**  
Estilizam os elementos HTML para criar a interface visual do jogo.  
Definem layout, animações e transições para o tabuleiro do jogo e botão de reinício.  

## **Recursos-Chave**  
**Inicialização do Jogo:**  
Os emojis são embaralhados aleatoriamente e exibidos com a face virada para baixo no tabuleiro do jogo.  
Caso o jogador não aperte o botão de pausar, as cartas continuam inativas.  
O jogador possui a opção de pausar e resetar o jogo caso precise.  
**Interações com Cartas:**  
Clicar em uma carta a vira, revelando o emoji contido.   
O jogo controla as cartas abertas e verifica as correspondências. 
**Verificação de Correspondência:**  
Compara as cartas abertas e marca visualmente os pares correspondentes.  
Esconde os pares não correspondentes após um curto atraso.  
**Conclusão do Jogo:**  
Notifica o jogador ao combinar com sucesso todos os pares com um alerta.  

## **Conclusão**  
O código do Jogo da Memória de Emojis oferece uma experiência de jogo simples, porém envolvente. Os jogadores podem testar e aprimorar suas habilidades de memória combinando pares de emojis. O projeto demonstra o uso de HTML, CSS e JavaScript para criar uma interface de jogo interativa. A inclusão de comentários no código JavaScript para melhor compreensão e possíveis adições de recursos são considerações para desenvolvimentos futuros.  
