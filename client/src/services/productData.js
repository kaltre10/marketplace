const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getAll(page, category, query) {
    if (query !== "" && query !== undefined) 
        return (await fetch(`${baseUrl}/api/products?page=${page}&search=${query}`, 
        {   
            mode: "cors", 
            headers: {
                'Content-Type': 'application/json',
            }, 
            credentials: 'include' 
        })).json();

    if (category && category !== 'all')
        return (await fetch(`${baseUrl}/api/roducts/${category}?page=${page}`, {   
            mode: "cors", 
            headers: {
                'Content-Type': 'application/json',
            }, 
            credentials: 'include' 
        })).json();
    
    return (await fetch(`${baseUrl}/api/products?page=${page}`, {   
        mode: "cors", 
        headers: {
            'Content-Type': 'application/json',
        }, 
        credentials: 'include' 
    })).json();
    
}

export async function getSpecific(id) {
    return (await fetch(`${baseUrl}/api/products/specific/${id}`, { mode: "cors",  credentials: 'include' })).json();
}

export async function createProduct(product) {
    return (await fetch(`${baseUrl}/api/products/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include' ,
        body: JSON.stringify(product)
    })).json();
}

export async function editProduct(id, product) {
    return (await fetch(`${baseUrl}/api/products/edit/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include' ,
        body: JSON.stringify(product)
    })).json();
}


export async function activateSell(id) {
    return (await fetch(`/api/products/enable/${id}`, { credentials: 'include' })).json()
}

export async function archiveSell(id) {
    return (await fetch(`/api/products/archive/${id}`, { credentials: 'include' })).json()
}

export async function wishProduct(id) {
    return (await fetch(`${baseUrl}/api/products/wish/${id}`, {  credentials: 'include' })).json();

}





