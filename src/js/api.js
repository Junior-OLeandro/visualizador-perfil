const baseUrl = 'https://api.github.com';

export async function fetchUserData(userName) {
    const response = await fetch(`${baseUrl}/users/${userName}`);
    if (!response.ok) {
        throw new Error('Usuário não encontrado. Verifique o nome de usuário e tente novamente.');
    }
    return await response.json();
}

export async function fetchGithubUserRepos(userName) {
    const response = await fetch(`${baseUrl}/users/${userName}/repos?per-page=10&sort=created`);
    if (!response.ok) {
        throw new Error('Repositório não encontrato.');
    }
    return await response.json()
}