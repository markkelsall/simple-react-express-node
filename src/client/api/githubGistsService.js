const ENDPOINT = 'https://api.github.com/gists';

export const fetchGists = () => {
    return fetch(`${ENDPOINT}`).then(response => response.json());
}
