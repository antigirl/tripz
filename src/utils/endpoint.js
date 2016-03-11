const host = window.location.host.indexOf('localhost') || window.location.host.indexOf('file://') > -1 ? 'http://localhost:3000' : 'remoteURL';

export function getEndPoint() {
    return host;
}
