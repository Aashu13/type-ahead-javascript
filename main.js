var searchInput = document.querySelector('.searchInput');
var listMenu = document.querySelector('#matchesUl');
var worldPopulationApi = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
// getting the data data from the fetch method
var cities = [];

fetch(worldPopulationApi).then(function (blob) {
    blob.json().then(function (data) {
        cities.push(...data);
    });
});

function matchWordFunction(wordMatch, cities) {
    return cities.filter(function (place) {
        var regEx = new RegExp(wordMatch, 'gi');
        return place.city.match(regEx) || place.state.match(regEx);
    });
}

function displayWordFunction() {
    var matchArray = matchWordFunction(this.value, cities);
    var html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
        <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${place.population}</span>
        </li>
         `;
    }).join('');

    listMenu.innerHTML = html;
};

searchInput.addEventListener('keyup', displayWordFunction);
searchInput.addEventListener('change', displayWordFunction);