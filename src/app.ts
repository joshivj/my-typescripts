let userName = 'John';

console.log('hello ' + userName);

const button = document.querySelector('button');

function clickHandler(message: string){
    // let userRole = 'Admin';
    console.log('alert happend ---'+ message);
    if (message == 'Auditor'){
        return 'Auditor';
    }
    return;
}

if(button){
    button.addEventListener('click', clickHandler.bind('null', userName));
}

