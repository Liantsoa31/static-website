const Toggler = document.querySelectorAll(".toggler");

Toggler.forEach((item) => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const Target = document.querySelector('#' + item.dataset.target);
        if(Target.dataset.show === "false") {
            Target.setAttribute("data-show", true);
        } else {
            Target.setAttribute("data-show", false);
        }
    })
})