const baseUrl = 'https://api.github.com';

export async function fetchUserData(userName) {
    const response = await fetch(`${baseUrl}/users/${userName}`);
    if (!response.ok) {
        throw new Error('Usuário não encontrado. Verifique o nome de usuário e tente novamente.');
    }
    return await response.json();
}