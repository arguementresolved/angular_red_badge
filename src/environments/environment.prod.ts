export const environment = {
  production: true
};

export let apiUrl = '';

switch (window.location.hostname) {
    // this is the deployed angular application
    case 'kcp-pieclient.herokuapp.com':
        // this is the full url of your deployed API
        apiUrl = 'https://argument-resolved.herokuapp.com'
        break;
    default:
        // this is the local host name of your API
        apiUrl = 'http://localhost:5000';
}