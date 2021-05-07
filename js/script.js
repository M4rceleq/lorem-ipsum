setTimeout(() => {
    document.getElementById('nav2').style.transition = '.5s right';
}, 100);

if(!sessionStorage.getItem('hidden')) {
    sessionStorage.setItem('hidden', true);
}

if(sessionStorage.getItem('hidden') === 'false'){
    document.getElementById('nav2').style.right = 0;
}

function slide() {
    if(sessionStorage.getItem('hidden') === 'true'){
        document.getElementById('nav2').style.right = 0;
        sessionStorage.setItem('hidden', false);
    } else if(sessionStorage.getItem('hidden') === 'false')
    {
        document.getElementById('nav2').style.right = '-350px';
        sessionStorage.setItem('hidden', true);
    }
}