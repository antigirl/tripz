const host = (window.location.host.indexOf('localhost') > -1 || window.location.host.indexOf('file://') > -1) ? 'http://localhost:4000' : 'http://labs.laterooms.com/trips-api';

export function getEndPoint() {
    return host;
}
