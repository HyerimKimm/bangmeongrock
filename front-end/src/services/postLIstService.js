const getWholePost = async () => {
    const response = 
        await fetch('http://localhost:4999/bangmeongrock');
    const json = await response.json();
    return json;
}

const createNewPost = async (body) => {
    const response = 
        await fetch('http://localhost:4999/bangmeongrock',
            {
                method: 'POST', 
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    const json = await response.json();
    console.log(json);
    return json;
}

export {getWholePost as default, createNewPost};