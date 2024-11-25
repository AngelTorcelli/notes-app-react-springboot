const back_url = "http://127.0.0.1:5000"


export const getNotes = async () => {
    try {
        const response = await fetch(back_url + "/nota", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })        
        const data = await response.json()
        //console.log(data)
        return data
    }catch (error) {
        console.log(error)   
    }
}

export const updateNote = async (data) => {
    try {
        const response = await fetch(back_url + "/nota", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })        
        return response;
    }catch (error) {
        console.log(error)   
    }
}


export const getNoteById = async (id) => {
    try {
        const response = await fetch(back_url + "/nota/buscar?id=" + id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })                
        return response.json();
    } catch (error) {
        console.log(error)
    }
}

export const deleteNote = async (id) => {
    try {
        const response = await fetch(back_url + "/nota/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })                
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const getTags = async () => {
    try {
        const response = await fetch(back_url + "/etiqueta", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })                
        const data = await response.json();
        //console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}