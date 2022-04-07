let isOk = true;

const promesas = (time, task) => {
    return new Promise((resolver, reject) => {
        setTimeout(() => {
            if(isOk){
                resolver(task);
            }else{
                reject('Error');
            }
        
    }, time)})};

export default promesas