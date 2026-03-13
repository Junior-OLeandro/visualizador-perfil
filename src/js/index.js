import { fetchUserData } from './api.js';
import { getElements, showLoading, renderProfile, clearResults, showError } from './ui.js';

const { inputSearch, btnSearch, profileResults } = getElements();

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;
    if (userName) {
        showLoading(profileResults);
        try {
            const userData = await fetchUserData(userName);
            console.log(userData);
            renderProfile(profileResults, userData);
        } catch (error) {
            console.error('Erro ao buscar o perfil:', error);
            showError('Ocorreu um erro ao buscar perfil. Tente novamente.');
            clearResults(profileResults);
        }
    } else {
        showError('Por favor, digite um nome de usuário.');
    }
});
