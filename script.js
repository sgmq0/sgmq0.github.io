document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[dropdown-button]")
    if (!isDropdownButton && e.target.closest('[dropdown') != null) {
        return
    }

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})

// navbar
{
    const nav = document.querySelector("#nav");
    const dropdown = document.querySelector("#dropdown");

    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (lastScrollY < window.scrollY) {
            nav.classList.add("nav-hidden");
            dropdown.classList.remove('active')
        } else {
            nav.classList.remove("nav-hidden");
        }
        lastScrollY = window.scrollY;
    });
}

function ccc(){
    window.open("https://alienbluez.itch.io/curtain-call-crusade");
}

function resume() {
    window.open("./files/resume.pdf");
}

function emailMe() {
    window.open("mailto:fengray@seas.upenn.edu");
}

function link1() {
    window.location.href = "https://www.rfeng.dev/projectpages/minecraft.html";
}

function link2() {
    window.location.href = "https://www.rfeng.dev/projectpages/maya.html";
}

function link3() {
    window.location.href = "https://www.rfeng.dev/projectpages/shaderfun.html";
}

function link4() {
    window.location.href = "https://www.rfeng.dev/projectpages/3drasterizer.html";
}

function demo() {
    window.open("https://vimeo.com/875041607");
}
