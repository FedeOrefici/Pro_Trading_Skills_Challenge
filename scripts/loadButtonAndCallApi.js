//OBTENGO POR ID EL BOTON DE CARGA
const loadMoreBtn = document.getElementById('loadMore')
let characterPerPage = 6;
let page = 1;
let allCharacters = [];
loadMoreBtn.addEventListener('click', fetchAllCharacters)

//FUNCION PARA OBTENER LOS PERSONAJES
function fetchAllCharacters(){
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(response => response.json())
    .then(data => {
            allCharacters = data.results
            page++;
            characterPerPage += 20;
            renderData(allCharacters)
    })
    .catch(error => console.log('Error', error.message))
}

fetchAllCharacters()
