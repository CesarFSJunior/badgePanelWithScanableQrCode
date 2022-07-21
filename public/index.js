const more = document.querySelector('#more')
const moreMenu = document.querySelector('#moreMenu')
const form = document.querySelector('#formCard')
const socialMediasOptions = ["twitter", "instagram", "snapchat", "github", "linkedin"]
const socialMediasOptionsLabels = ["Twitter Account (don't need use @ before your user name):", "Instagram account:", "Snapchat account:", "Github account:", "Linkedin account:"]


function openSocialMediasMenu() {
    more.classList.toggle('check')

    if (more.classList == 'check') {
        const menu = document.createElement('select')
        const add = document.createElement('div')
        menu.setAttribute('id', 'SocialMediaOptions')
        add.setAttribute('onclick', "addSocialMedia()")
        add.setAttribute('id', "addSocialMedia")
        add.innerHTML = "add"
        for (let i = 0; i < socialMediasOptions.length; i++) {
            const createOptions = document.createElement('option')
            createOptions.value = socialMediasOptions[i]
            createOptions.innerHTML = socialMediasOptions[i]

            moreMenu.appendChild(menu)
            moreMenu.appendChild(add)
            menu.appendChild(createOptions)
        }
    } else {
        for (let i = 0; i < moreMenu.children.length; i++) {
            if (moreMenu.children.length > 1) {
                moreMenu.removeChild(moreMenu.children[1])
            }
            // console.log(moreMenu.children)

        }
    }

}

function addSocialMedia() {
    const SocialMediaOptions = document.querySelector('#SocialMediaOptions')

    for (let i = 0; i < socialMediasOptions.length; i++) {
        if (SocialMediaOptions.value == socialMediasOptions[i]) {
            const createDiv = document.createElement('div')
            const createLabel = document.createElement('label')
            createLabel.innerHTML = `${socialMediasOptionsLabels[i]}`
            createLabel.setAttribute('for', `${SocialMediaOptions.value}`)
            const createInput = document.createElement('input')
            createInput.setAttribute('type', 'text')
            createInput.setAttribute('name', `${SocialMediaOptions.value}`)
            createInput.setAttribute('id', `${SocialMediaOptions.value}`)
            const createDelButton = document.createElement('button')
            createDelButton.innerHTML = "remove"
            createDelButton.setAttribute('onclick', `removeSocialMedia('${SocialMediaOptions.value}')`)
            createDelButton.setAttribute('class', 'remove')
            createDelButton.setAttribute('type', 'button')

            form.appendChild(createDiv)
            createDiv.appendChild(createLabel)
            createDiv.appendChild(createInput)
            createDiv.appendChild(createDelButton)

            openSocialMediasMenu()
            // socialMediasOptions = []

        }
    }

}

function removeSocialMedia(params) {
    const removeObject = document.querySelector(`#${params}`)
    removeObject.parentNode.remove()
    console.log(removeObject.parentNode)

}