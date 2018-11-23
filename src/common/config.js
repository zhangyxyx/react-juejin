var m=window.location.href//location.href
var url;
if(m.indexOf('build')>0){
    url=m.split('build')[0]+'build'
}else{
    url=m.split('#')[0]
}

window.sessionStorage.setItem('key', url);
