window.addEventListener("load", function () {
    let buttons = document.querySelectorAll("div.navigation a")

    function active() {
        let path = window.location.href;
        let current_element = path.split('/');

        if (current_element.length > 1) {
            current_element = current_element[4]
        }

        for (let i = 0; i < buttons.length; ++i) {
            let button_href = buttons[i].href.split('/')[4]
            if (current_element[i] === button_href) {
                buttons[i].classList.add("active")
            } else {
                buttons[i].classList.remove("active")
            }
        }
    }

    active()
})