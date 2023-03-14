export const request = async (method, url, data) => {
    const options = {}

    if(method != 'GET'){
        options.method = method;

        if(data){
            options.headers = {
                'content-type': 'application/json'
            };

            options.body = JSON.stringify(data)
        }
    }

    const response = await fetch(url, {
        method,
    });

    try{
       const result = await response.json(); 
       return result
    }catch(err){
        return {}
    }
}