const baseUrl = process.env.REACT_APP_BASE_URL;

export async function registerUser(userData) {
    return (await fetch(`${baseUrl}/api/auth/register`, {
        method: 'POST',
        mode: "cors", 
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(userData)
    })).json();
}

export async function loginUser(userData) {
    return (await fetch(`${baseUrl}/api/auth/login`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(userData)
    })).json();
}

export async function getUser() {
    return await (await fetch(baseUrl + '/api/auth/getUser')).json()
}

export async function getUserActiveSells(id) {
    return (await fetch(`${baseUrl}/api/products/sells/active/${id}`, {credentials: 'include'})).json();
}

export async function getUserArchivedSells() {
    return (await fetch(`${baseUrl}/api/products/sells/archived`, {credentials: 'include'})).json();
}

export async function getUserWishlist() {
    return (await fetch(`${baseUrl}/api/products/wishlist/getWishlist`, {credentials: 'include'})).json();
}

export async function editUserProfile(id, data) {
    return (await fetch(`${baseUrl}/api/user/edit-profile/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data)
    })).json();
}

export async function getUserById(id) {
    return await (await fetch(baseUrl + `/api/user/getUserById/${id}`, {credentials: 'omit'})).json()
}