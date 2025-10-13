import api from "./api"

export async function shortenLink(url: string) {
    const response = await api.post("/shorten", { url })
    return response.data
}