const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

const baseUrl = 'https://api.github.com';

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;
    if (userName) {

        profileResults.innerHTML = '<p class="loading">Carregando...</p>';

        try {

            const response = await fetch(`${baseUrl}/users/${userName}`);

            if (!response.ok) {
                alert('Usuário não encontrado. Verifique o nome de usuário e tente novamente.');
                profileResults.innerHTML = "";
                return;
            }

            const UserData = await response.json();
            console.log(UserData);

            profileResults.innerHTML = `
            <div class="profile-card">
            <img src="${UserData.avatar_url}" alt="Avatar de ${UserData.name}" class="profile-avatar">
            <div class="profile-info">
            <h2>${UserData.name}</h2>
            <p>${UserData.bio || 'Não possui bio cadastrada 😑.'}</p>
            </div>
            </div>
            `

        } catch (error) {
            console.error('Erro ao buscar o perfil:', error);
            alert('Ocorreu um erro ao buscar perfil. Tente novamente.');
            profileResults.innerHTML = "";
        }
    } else {
        alert('Por favor, digite um nome de usuário.');
    }
});
