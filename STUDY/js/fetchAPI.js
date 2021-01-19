const requestURL = 'https://jsonplaceholder.typicode.com/users';



function sendRequest(method, url, body = null){
    const headers = {
        'Content-type': 'application/json'
    };
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if (response.ok){
            return response.json();
        } else {
            return response.json().then( error => {
                const e = new Error('Somthing went wrong');
                e.data = error;
                throw e;
            });
        }
        
    });
}

// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(() => console.error(data));

const body = {
    name: "Iurii",
    age: 2
};

sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(() => console.error(data));