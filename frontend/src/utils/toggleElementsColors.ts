const white = "#FFFFFF"
const black = "#0f0f0f"
const msTransition = "1500ms ease"

export function setBodyBackground(checked: boolean) {
    if (typeof document === "undefined") return

    document.body.style.transition = `background-color ${msTransition}`
    document.body.style.backgroundColor = checked ? black : white
}

export function setTitleColor(checked: boolean) {
    if (typeof document === "undefined") return

    const el = document.getElementById('brevly-title')
    if (!el) return

    const element = el as HTMLElement

    element.style.transition = `color ${msTransition}`
    element.style.color = checked ? white : black
}

export function setSubTitleColor(checked: boolean) {
    if (typeof document === "undefined") return

    const el = document.getElementById('brevly-subtitle')
    if (!el) return

    const element = el as HTMLElement

    element.style.transition = `color ${msTransition}`
    element.style.color = checked ? white : black
}

export function setButtonAndTextColor(checked: boolean) {
    if (typeof document === "undefined") return

    const el = document.getElementById('shorten-button')
    if (!el) return

    const element = el as HTMLElement

    element.style.transition = `color ${msTransition}, background-color ${msTransition}`
    element.style.color = checked ? white : black
    element.style.backgroundColor = checked ? "#222222" : "#f3f4f6"
}

export function setLogo(checked: boolean) {
    if (typeof document === "undefined") return

    const light = document.getElementById('logo-light') as HTMLElement | null
    const dark = document.getElementById('logo-dark') as HTMLElement | null

    if (!light || !dark) return

    // crossfade
    light.style.transition = `opacity ${msTransition}`
    dark.style.transition = `opacity ${msTransition}`

    if (checked) {
        light.style.opacity = '0'
        dark.style.opacity = '1'

    } else {
        dark.style.opacity = '0'
        light.style.opacity = '1'
    }
}

export function setHomeOrAboutColors(checked: boolean) {
    if (typeof document === "undefined") return

    const el = document.getElementById('home-or-about')
    if (!el) return

    const element = el as HTMLElement

    element.style.transition = `color ${msTransition}`
    element.style.color = checked ? white : black
}

export function setInputColor(checked: boolean) {
    if (typeof document === "undefined") return

    const el = document.getElementById('link-please')
    if (!el) return

    const element = el as HTMLElement
    element.style.transition = `color ${msTransition}`
    element.style.color = checked ? white : black
}
