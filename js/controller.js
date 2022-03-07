// Expading cart///////////////////////////////////
const panels = document.querySelectorAll('.panel');
panels.forEach((panel) => {
    panel.addEventListener('click', function () {
        removeActiveClasses()
        panel.classList.add('panelActive');
    })
})
const removeActiveClasses = function () {
    panels.forEach(panel => {
        panel.classList.remove('panelActive');
    })
}