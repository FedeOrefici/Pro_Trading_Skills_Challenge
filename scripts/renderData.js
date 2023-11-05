//FUNCIÓN PARA RENDERIZADO: OBTENGO EL CONTENEDOR PRINCIPAL Y MAPEA LA DATA
//AGREGANDO OTRO CONTENEDOR ADENTRO DE LA CAJA PRINCIPAL PARA RENDERIZAR LAS CARDS
function renderData(data) {
    const container = document.getElementById('container')
    const characterData = data?.map(character => {
        const characterItem = document.createElement('div')
        characterItem.classList.add('card')
        characterItem.innerHTML = `
            <img class="card-image" src=${character.image} />
            <div class="container-detail">
                <h2 class="card-name">${character.name}</h2>
                <div class="data-text-card">
                    <div class="card-container-status">
                        <div class="status-circle ${getStatusClass(character.status)}"></div>
                        <p class="status">${character.status}</p>
                    </div>
                    <div class="container-icon-text">
                        <img src="./img/location.svg" />
                        <p class="origin">${character.origin?.name}</p>
                    </div>
                </div>
            </div>
        `;
        return characterItem;
    });
    characterData.forEach(characItem => {
        container.appendChild(characItem)
    });
}

//FUNCION PARA EL STATUS DE LOS PERSONAJES
function getStatusClass (statusType) {
    switch (statusType) {
        case 'Alive': return 'green-circle';
        case 'Dead': return 'red-circle';
        default: return 'white-circle'
    }
}