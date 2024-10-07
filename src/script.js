// Animação barra progresso'
window.addEventListener("scroll", function() {
    var skills = document.querySelectorAll(".skill");
    
    for (var i = 0; i < skills.length; i++) {
        var skill = skills[i];
        var skillPosition = skill.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        
        if (skillPosition < windowHeight) {
            var skillProgress = skill.querySelector(".skill-progress");
            
            if (skillProgress.style.width === "") {
                skillProgress.style.width = skillProgress.dataset.progress;
            }
        }
    }
});

// Seleciona todos os elementos com a classe 'counter'
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-count'), 10);
      animateCounter(counter, target);
  });
});

document.getElementById('theme-switch').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode'); // Alterna a classe do modo noturno
});

// Animação Inicio
document.addEventListener('DOMContentLoaded', () => {
    const headings = document.querySelectorAll('.typing');
    let index = 0;

    function showHeading() {
        headings.forEach((heading, i) => {
            if (i === index) {
                heading.style.opacity = '1'; // Mostra o <h2> atual
                heading.style.maxWidth = `${heading.textContent.length}ch`; // Define a largura com base no texto
                heading.style.animation = `typing 3s steps(${heading.textContent.length}), blink-caret 0.75s step-end infinite`;
            } else {
                heading.style.opacity = '0'; // Esconde os outros <h2>
                heading.style.maxWidth = '0'; // Reseta a largura
                heading.style.animation = 'none'; // Remove a animação
            }
        });

        index = (index + 1) % headings.length; // Avança para o próximo <h2>
        setTimeout(showHeading, 4000); // Tempo de exibição de cada <h2>
    }

    showHeading();
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove a classe 'active' de todos os links
            navLinks.forEach(link => link.classList.remove('active'));
            // Adiciona a classe 'active' ao link clicado
            this.classList.add('active');
        });
    });

    // Defina o estado inicial do link ativo com base no URL atual
    const hash = window.location.hash || '#home';
    navLinks.forEach(link => {
        if (link.getAttribute('href') === hash) {
            link.classList.add('active');
        }
    });
});
