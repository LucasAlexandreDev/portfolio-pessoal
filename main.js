/*************************************************************************** 
* Objective  : Arquivo responsável pela animação suave de entrada dos elementos ao aparecerem na tela durante o scroll
* Date       : 2026-05-19
* Development: Lucas Alexandre da Silva
* Version    : 1.0
****************************************************************************/

'use strict'

// Função responsável por revelar elementos suavemente ao scroll
const revealOnScroll = () => {

    // Seleciona todos os elementos que terão animação
    const elements = document.querySelectorAll(`section, footer`)

    // Cria o observer
    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            // Quando o elemento aparecer na tela
            if(entry.isIntersecting){

                entry.target.classList.add('opacity-100', 'translate-y-0')

                entry.target.classList.remove('opacity-0', 'translate-y-10')
            }
        })

    }, {
        threshold: 0.15
    })

    // Estado inicial dos elementos
    elements.forEach((element) => {

        element.classList.add('opacity-0','translate-y-10','transition-all','duration-1000','ease-out')

        observer.observe(element)
    })
}

// Inicializa animação após carregamento da página
document.addEventListener('DOMContentLoaded', revealOnScroll)