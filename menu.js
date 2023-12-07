const ecoshadesMenu = () => {

    const menuButton = document.querySelector('.menu-button')
    const menu = document.querySelector('.full-menu')

    const toggleMenu = () => {
        
        menuButton.classList.toggle('close')
        menu.classList.toggle('open')
    }

    menuButton.addEventListener('click', toggleMenu)

}

ecoshadesMenu()