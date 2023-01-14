export const sendContactForm = async (data: {}) => fetch('/api/contact', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(data),
}). then((res) => {
    // console.log('response received')
    if(!res.ok) {
        throw new Error('Error al enviar la consulta')
    }
    return res.json()
})


export const getData = async (url: string) => fetch(url, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
}). then((res) => {
    if(!res.ok) {
        throw new Error('Error al enviar la consulta')
    }
    return res.json()
})

export const getDataWithQuery = async (url: string, query: string) => fetch(`${url}/${query}`, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
}). then((res) => {
    if(!res.ok) {
        throw new Error('Error al enviar la consulta')
    }
    return res.json()
})