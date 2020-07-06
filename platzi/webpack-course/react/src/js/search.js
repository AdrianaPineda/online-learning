// ES5 doesn't have:
// async function, fetch or string literal (interpolation)
// but modern js does

async function search(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await response.json();
    return pokemon;
}

export default search;
