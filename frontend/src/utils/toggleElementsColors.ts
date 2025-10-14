
const white = "#FFFFFF"
const black = "#0f0f0f"
const msTransition = "1000ms ease"

export function setBodyBackground(checked: boolean) {
    if (typeof document === "undefined") return

    document.body.style.transition = `background-color ${msTransition}`
    document.body.style.backgroundColor = checked ? black : white
}

export function setTitleColor(checked: boolean) {
    if (typeof document === "undefined") return

    const el = document.getElementById('brevly-title')

    const element = el as HTMLElement

    element.style.transition = `color ${msTransition}`
    element.style.color = checked ? white : black
}

export function setSubTitleColor(checked: boolean) {
    if (typeof document === "undefined") return

    const el = document.getElementById('brevly-subtitle')

    const element = el as HTMLElement

    element.style.transition = `color ${msTransition}`
    element.style.color = checked ? white : black
}

export function setButtonAndTextColor(checked: boolean) {
    if (typeof document === "undefined") return

    const el = document.getElementById('shorten-button')

    const element = el as HTMLElement

    element.style.transition = `color ${msTransition}`
    element.style.color = checked ? white : black
    element.style.transition = `background-color ${msTransition}`
    element.style.backgroundColor = checked ? "#222222" : "#f3f4f6"
}

export function setLogo(checked: boolean) {
    if (typeof document === "undefined") return

}

export function setHomeOrAboutColors(checked: boolean) {
    if (typeof document === "undefined") return

    const el = document.getElementById('home-or-about')

    const element = el as HTMLElement

    element.style.transition = `color ${msTransition}`
    element.style.color = checked ? white : black
}
