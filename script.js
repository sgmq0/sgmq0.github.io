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