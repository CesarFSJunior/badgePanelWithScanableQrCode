const moreMenu = document.querySelector('#moreMenu')
const form = document.querySelector('#formCard')
const socialMediasOptions = ["twitter", "instagram", "snapchat", "github", "linkedin"]
const socialMediasOptionsLabels = ["Twitter Account (don't need use @ before your user name):", "Instagram account:", "Snapchat account:", "Github account:", "Linkedin account:"]
const box = document.querySelector('.box')


function openSocialMediasMenu() {
    box.classList.toggle('check')

    if (box.classList == 'box check') {
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
            const createBr = document.createElement('br')
            const createInput = document.createElement('input')
            createInput.setAttribute('type', 'text')
            createInput.setAttribute('name', `${SocialMediaOptions.value}`)
            createInput.setAttribute('id', `${SocialMediaOptions.value}`)
            const createBrTwo = document.createElement('br')
            const createDelButton = document.createElement('button')
            createDelButton.innerHTML = "remove"
            createDelButton.setAttribute('onclick', `removeSocialMedia('${SocialMediaOptions.value}')`)
            createDelButton.setAttribute('class', 'remove')
            createDelButton.setAttribute('type', 'button')

            form.appendChild(createDiv)
            createDiv.appendChild(createLabel)
            createDiv.appendChild(createBr)
            createDiv.appendChild(createInput)
            createDiv.appendChild(createBrTwo)
            createDiv.appendChild(createDelButton)

            openSocialMediasMenu()
            socialMediasOptions.splice(i, 1)
            socialMediasOptionsLabels.splice(i, 1)
            if (socialMediasOptions.length == 0) {
                box.children[0].remove()
                box.style.height = "0px"
                box.parentNode.style.height = "0px"
            }

        }
    }

}

function removeSocialMedia(params) {
    const removeObject = document.querySelector(`#${params}`)
    removeObject.parentNode.remove()

    if (socialMediasOptions.length == 0) {

        const createDiv = document.createElement('div')
        createDiv.setAttribute('id', "more")

        box.appendChild(createDiv)

    }
    switch (params) {
        case "twitter":
            socialMediasOptions.splice(0, 0, "twitter")
            socialMediasOptionsLabels.splice(0, 0, "Twitter Account (don't need use @ before your user name")
            break;
        case "instagram":
            socialMediasOptions.splice(1, 0, "instagram")
            socialMediasOptionsLabels.splice(1, 0, "Instagram account:")
            break;
        case "snapchat":
            socialMediasOptions.splice(2, 0, "snapchat")
            socialMediasOptionsLabels.splice(2, 0, "Snapchat account:")
            break;
        case "github":
            socialMediasOptions.splice(3, 0, "github")
            socialMediasOptionsLabels.splice(3, 0, "Github account:")
            break;
        case "linkedin":
            socialMediasOptions.splice(4, 0, "linkedin")
            socialMediasOptionsLabels.splice(4, 0, "Linkedin account:")
            break;
    }

}