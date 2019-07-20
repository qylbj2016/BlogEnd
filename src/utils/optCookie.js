export function getCookie(name){
    var cookieStr = '; '+document.cookie+'; ';
    var index = cookieStr.indexOf('; '+name+'=');
    if (index!==-1){
        var s = cookieStr.substring(index+name.length+3,cookieStr.length);
        return unescape(s.substring(0, s.indexOf('; ')));
    }else{
        return null;
    }
}
export function delCookie( key ){
    const exp = new Date()
    exp.setTime(exp.getTime() - 1)
    const cval = getCookie( key )
    if( cval ){
        document.cookie = `${key}=${cval};expires=${exp.toGMTString()};`
    }
}