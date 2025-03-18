//header
// Seleciona o elemento HTML
const menuHamburger = document.getElementById('menu-hamburguer')
const menuPricipal = document.getElementById('menu')
// adiciona um evento de click na const menu-hamburguer
menuHamburger.addEventListener('click',function(){
    menuPricipal.classList.toggle('active') //Alterna a classe 'active' no menuPricipal e no menu-gamburguer
    menuHamburger.classList.toggle('active')
})

//slide  
let slide = document.querySelectorAll('.item-slide');
let inicioSlide = 0;

function showSlide(n) {
    slide.forEach(item => item.classList.remove('ativo'));
    slide[n].classList.add('ativo'); // Correção: Adiciona 'ativo' ao slide correto
    inicioSlide = n;
}
// Configura um temporizador
setInterval(() => {
    inicioSlide = (inicioSlide + 1) % slide.length;
    showSlide(inicioSlide);
}, 3000);

//accordion
const btnAccordion = document.querySelectorAll('.btn-accordion')
const conteudoFaq = document.querySelectorAll('.conteudo-faq')

btnAccordion.forEach((btn, index) => {
    btn.addEventListener('click',function(){
        const conteudo = conteudoFaq[index] // Obtém o conteúdo correspondente

        // Verifica se o conteúdo já está aberto
        if(conteudo.classList.contains('active')){
            conteudo.classList.remove('active')// Se estiver aberto, fecha o accordion
            btn.classList.remove('active')
        }
        // Se estiver fechado, abre o accordion
        else{
            btnAccordion.forEach(botao => botao.classList.remove('active'))
        conteudoFaq.forEach(faq => faq.classList.remove('active'))
        conteudoFaq[index].classList.add('active')
        btn.classList.add('active')
        }

        
        
    })
})


