const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultados = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")

const perguntas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativas: [
            {
                texto: "Ganhar um milhão de reais, mas sua familia perder tudo do que tem.",
                afirmacao: "Você ficou rico, mas sua familia ficou pobre e triste com você.",
            },
            {
                texto: "Trabalhar apenas três dias por semana com o mesmo salario, mas teria que mudar para uma cidade que não conhece ninguem.",
                afirmacao: "Você vai ficar solitario, mas vai ser rico e feliz sozinho .",
            }]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "Plantar uma arvore para cada pessoa no mundo, mas todos teriam que reduzir seu consumo de agua pela metade.",
                afirmacao: "A população colaborou com isso :)",
            },
            {
                texto: "Acabar com o uso de combustíveis fósseis, mas ver metade da população perdendo o emprego.",
                afirmacao: "Você ajudou a acabar com o uso e as população encontrou novos empregos"
            }]
        },
    {
        enunciado: "No âmbito tecnologico, você prefere:",
    
        alternativas: [
            {
               texto:"Criar uma tecnologia que melhorasse a produtividade no trabalho, mas isso levasse a uma maior dependência de dispositivos eletronicos.",
               afirmacao: "Seu trabalho cresceu, mas muitos perderam emprego e sua interação pessoal",
            },
            {
                texto: "Ganhar todo ano o celular do momento, mas ter todas suas informações vazadas.",
                afirmacao: "Você tem um celular bom, mas não tem privacidade."
            }]
    }

]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";


function mostraPerguntas() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent="";
    mostraAlternativas();

}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada (alternativa){
    const afirmacoes = alternativa.afirmacao;
    historiaFinal += afirmacoes + "";
    atual++;
    mostraPerguntas();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Você escolheu ...."
    textoResultado.textContent = historiaFinal; 
    caixaAlternativas.textContent = "";
}
mostraPerguntas();
