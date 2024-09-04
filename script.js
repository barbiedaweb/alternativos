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
                texto: "Ter a oportunidade de ganhar uma grande quantidade de dinheiro, mas perder o contato com todos seus amigos.",
                afirmacao: "Você ficou rico, mas nao vai ter ninguem para poder compartilhar sua conquista.",
            },
            {
                texto: "Realizar seu maior sonho de morar em outro país, mas ficar 7 anos sem nenhum contato com sua família e amigos.",
                afirmacao: "Você fez uma otima escolha, pois vai conhecer um novo lugar e depois vai poder ver sua familia novamente.",
            }]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "Ajudar a combater a poluição do oceano com uma nova tecnologia, mas ter uma extinção de animais marinhos",
                afirmacao: "Você ajudou na poluição, mas não tem mais tantos animais marinhos",
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
               texto:"Ter uma tecnologia que diz qual a doença do paciente, mas ter metade da população perdendo seu emprego na saúde.",
               afirmacao: "Você livrou pessoas do sofrimento e abriu novas oportunidades de emprego",
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
