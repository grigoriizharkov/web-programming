window.addEventListener("load", function () {
    let buttons = document.querySelectorAll("div.navigation a")

    function active() {
        let path = window.location.href
        let current_page_path = path.split('/')
        let current_page = current_page_path[4]

        for (let i = 0; i < buttons.length; ++i) {
            let button_href = buttons[i].href.split('/')[4]
            if (current_page === button_href) { buttons[i].classList.add("active") }
        }
    }

    active()
})