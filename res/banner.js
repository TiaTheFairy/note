function bannerclick(string){
    var url = 'mcfl.top'
    switch(string){
        case 'homepage':
            url = 'http://homepage.' + url;
            break;
        case 'git':
            url = 'http://git.' + url;
            break;
        case 'blog':
            url = 'http://blog.' + url;
            break;
        case 'mc':
            url = 'http://game.' + url;
            break;
        default:
            url = 'http://' + url;
            break;
    }
    window.location.href = url;
}