const baseFetch = async (url, method, body) => {
    try {
        let sessionToken = localStorage.getItem('sessionToken');
        let res
        if (method !== "PUT") {
            res = await fetch(url, {
                method: method,
                headers: {
                    "Authorization": sessionToken,
                }
            });
        } else {
            res = await fetch(url, {
                method: method,
                headers: {
                    "Authorization": sessionToken,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body),
            });
        }
        if (!res.ok) {
            console.error('Could not fetch.', res.status, res.text);
            return false;
        }
        return res.json();
    }
    catch (error) {
        console.error('Could not fetch.', error.message);
        return false;
    }
}

// Create
export const POST = async (url) => {
    return baseFetch(url, "POST", {})
}

// Read
export const GET = async (url) => {
    return baseFetch(url, "GET", {})
}

// Update
export const PUT = async (url, body) => {
    return baseFetch(url, "PUT", body)
}

// Delete
export const DELETE = async (url) => {
    return baseFetch(url, "DELETE", {})
}