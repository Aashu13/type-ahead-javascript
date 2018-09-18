var input = document.querySelector('.searcBar');
var menu = document.querySelector('#menu');


var data = [{
        "city": "New York",
        "population": "8405837",
        "rank": "1",
        "state": "New York"
    },
    {
        "city": "Los Angeles",
        "population": "3884307",
        "rank": "2",
        "state": "California"
    },
    {
        "city": "Chicago",
        "population": "2718782",
        "rank": "3",
        "state": "Illinois"
    },
    {
        "city": "Houston",
        "population": "2195914",
        "rank": "4",
        "state": "Texas"
    },
    {
        "city": "Philadelphia",
        "population": "1553165",
        "rank": "5",
        "state": "Pennsylvania"
    },
    {
        "city": "Phoenix",
        "population": "1513367",
        "rank": "6",
        "state": "Arizona"
    },
    {
        "city": "San Antonio",
        "population": "1409019",
        "rank": "7",
        "state": "Texas"
    },
    {
        "city": "San Diego",
        "population": "1355896",
        "rank": "8",
        "state": "California"
    },
    {
        "city": "Dallas",
        "population": "1257676",
        "rank": "9",
        "state": "Texas"
    },
    {
        "city": "San Jose",
        "population": "998537",
        "rank": "10",
        "state": "California"
    },
    {
        "city": "Austin",
        "population": "885400",
        "rank": "11",
        "state": "Texas"
    },
    {
        "city": "Indianapolis",
        "population": "843393",
        "rank": "12",
        "state": "Indiana"
    },
    {
        "city": "Jacksonville",
        "population": "842583",
        "rank": "13",
        "state": "Florida"
    },
    {
        "city": "San Francisco",
        "population": "837442",
        "rank": "14",
        "state": "California"
    },
    {
        "city": "Columbus",
        "population": "822553",
        "rank": "15",
        "state": "Ohio"
    },
    {
        "city": "Charlotte",
        "population": "792862",
        "rank": "16",
        "state": "North Carolina"
    },
    {
        "city": "Fort Worth",
        "population": "792727",
        "rank": "17",
        "state": "Texas"
    },
    {
        "city": "Detroit",
        "population": "688701",
        "rank": "18",
        "state": "Michigan"
    },
    {
        "city": "El Paso",
        "population": "674433",
        "rank": "19",
        "state": "Texas"
    },
    {
        "city": "Memphis",
        "population": "653450",
        "rank": "20",
        "state": "Tennessee"
    },
    {
        "city": "Seattle",
        "population": "652405",
        "rank": "21",
        "state": "Washington"
    },
    {
        "city": "Denver",
        "population": "649495",
        "rank": "22",
        "state": "Colorado"
    },
    {
        "city": "Washington",
        "population": "646449",
        "rank": "23",
        "state": "District of Columbia"
    },
    {
        "city": "Boston",
        "population": "645966",
        "rank": "24",
        "state": "Massachusetts"
    },
    {
        "city": "Nashville-Davidson",
        "population": "634464",
        "rank": "25",
        "state": "Tennessee"
    },
    {
        "city": "Baltimore",
        "population": "622104",
        "rank": "26",
        "state": "Maryland"
    },
    {
        "city": "Oklahoma City",
        "population": "610613",
        "rank": "27",
        "state": "Oklahoma"
    },
    {
        "city": "Louisville/Jefferson County",
        "population": "609893",
        "rank": "28",
        "state": "Kentucky"
    },
    {
        "city": "Portland",
        "population": "609456",
        "rank": "29",
        "state": "Oregon"
    },
    {
        "city": "Las Vegas",
        "population": "603488",
        "rank": "30",
        "state": "Nevada"
    },
    {
        "city": "Milwaukee",
        "population": "599164",
        "rank": "31",
        "state": "Wisconsin"
    },
    {
        "city": "Albuquerque",
        "population": "556495",
        "rank": "32",
        "state": "New Mexico"
    },
    {
        "city": "Tucson",
        "population": "526116",
        "rank": "33",
        "state": "Arizona"
    },
    {
        "city": "Fresno",
        "population": "509924",
        "rank": "34",
        "state": "California"
    },
    {
        "city": "Sacramento",
        "population": "479686",
        "rank": "35",
        "state": "California"
    },
    {
        "city": "Long Beach",
        "population": "469428",
        "rank": "36",
        "state": "California"
    },
    {
        "city": "Kansas City",
        "population": "467007",
        "rank": "37",
        "state": "Missouri"
    },
    {
        "city": "Mesa",
        "population": "457587",
        "rank": "38",
        "state": "Arizona"
    },
    {
        "city": "Virginia Beach",
        "population": "448479",
        "rank": "39",
        "state": "Virginia"
    },
    {
        "city": "Atlanta",
        "population": "447841",
        "rank": "40",
        "state": "Georgia"
    },

];

for (var i = 0; i < data.length; i++) {
    var li = document.createElement('li');
    var cityName = document.createElement('span');
    cityName.textContent = data[i].city;

    var stateName = document.createElement('span');
    stateName.textContent = data[i].state;

    var population = document.createElement('span');
    population.textContent = data[i].population;


    li.appendChild(cityName);
    li.appendChild(stateName);
    li.appendChild(population);
    menu.appendChild(li);
}

function matchesData(word, data) {
    return data.filter(place => {
        var regex = new RegExp(word, "gi");
        return place.city.match(regex) || place.state.match(regex);
    });
}



function displayMatch() {
    var matchArray = matchesData(this.value, data);
    var htmlText = matchArray.map(place => {
        var regex = new RegExp(this.value, "gi");
        var cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        var stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `<li>
      <span class="name">${cityName},${stateName}</span>
       <span class="population">${place.population}</span>
     </li>`;
    }).join("");

    menu.innerHTML = htmlText;
}


input.addEventListener("change", displayMatch);
input.addEventListener("keyup", displayMatch);