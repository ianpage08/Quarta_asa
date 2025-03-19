const dragao = document.querySelector('.dragao')
// eslint-disable-next-line no-undef
gsap.to(dragao,{
    duration: 1,// Duração da animação em segundos
    y: 0, // Move o dragão para cima
    yoyo: true, // Animação de ida e volta
    repeat: -1, // Repete a animação infinitamente
    ease: 'power1.inOut', // Curva de animação
    rotation: '+=1', // Adiciona uma leve rotação ao corpo
    scaleY: 0.9,
    scaleX: 0.9,
    transformOrigin: '50% 50%'
})

const asaEsquerda = document.querySelector('.asa-esquerda')
const asaDireita = document.querySelector('.asa-direita')

// eslint-disable-next-line no-undef
gsap.to(asaEsquerda,{
    duration: 1,
    rotation:-1,
    yoyo: true, 
    repeat: -1, 
    transformOrigin: 'bottom right', 
    scaleY: 0.8, 
    filter: 'drop-shadow(3px 3px 3px rgba(17, 0, 255, 0.64))' ,
    ease: 'power2.inOut'

    
})
// eslint-disable-next-line no-undef
gsap.to(asaDireita, {
    duration:1,
    rotation: -1,
    yoyo: true,
    repeat: -1,
    transformOrigin: 'bottom left',
    scaleY:0.7 ,
    filter: 'drop-shadow(3px 3px 3px rgba(17, 0, 252, 0.56))' ,
    ease: 'power2.inOut'
    
});

window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;
    document.querySelector('.fundo').style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});