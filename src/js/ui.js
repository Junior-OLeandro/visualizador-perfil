export function getElements() {
    return {
        inputSearch: document.getElementById('input-search'),
        btnSearch: document.getElementById('btn-search'),
        profileResults: document.querySelector('.profile-results')
    };
}

export function showLoading(profileResults) {
    profileResults.innerHTML = '<p class="loading">Carregando...</p>';
}

export function renderProfile(profileResults, userData) {
    profileResults.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name}</h2>
                <p>${userData.bio || 'Não possui bio cadastrada 😑.'}</p>
            </div>
        </div>

        <div class="profile-counters">
            <div class="followers">
                <h4>👤 Seguidores</h4>
                <span>${userData.followers}</span>
            </div>
            <div class="following">
                <h4>🕵️‍♀️ Seguindo</h4>
                <span>${userData.following}</span>
            </div>
        </div>
    `;
}

export function clearResults(profileResults) {
    profileResults.innerHTML = "";
}

export function showError(message) {
    alert(message);
}