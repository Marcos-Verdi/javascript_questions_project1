const containers = document.querySelectorAll('.single-container')

containers.forEach((container) => {
    const button = container.querySelector('.question-btn');
    const line = container.querySelector('.horizontal-line');
    const answer = container.querySelector('.answer-container');
    button.addEventListener('click', () => {
        line.classList.toggle('show-text');
        answer.classList.toggle('show-text');
    })
    
})

