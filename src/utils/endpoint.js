const host = window.location.host.indexOf('localhost') > -1 ? 'http://localhost:3000' : 'remoteURL';

export function getEndPoint() {
    return host;
}
