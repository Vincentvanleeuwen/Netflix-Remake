let showContainer = document.getElementById("shows");

let showArray = {
    "shows": [
        {
            "name": "Peaky Blinders",
            "description": "Het is 1919 in Birmingham, Engeland. Een beruchte bende wordt er geleid door" +
              " Tommy Shelby, een misdaadbaas die de maatschappelijke ladder wil beklimmen",
            "age": "16",
            "seasons": "5",
            "genres": ["Britse series", "Dramaseries", "Misdaadseries"],
            "creator": ["Steven Knight"],
            "image": "media/images/peaky-blinders.jpg"
        },
        {
            "name": "Elite",
            "description": " Als drie arbeiderskinderen zich inschrijven bij een exclusieve privéschool in Spanje, " +
              "leidt de confrontatie tussen de arme en rijke studenten tot een moord.",
            "age": "16",
            "seasons": "5",
            "genres": ["Britse series", "Dramaseries", "Misdaadseries"],
            "creator": ["Carlos Montero", "Dario Madrona"],
            "image": "media/images/elite.jpg"
        },
        {
            "name": "Mind Explained",
            "description": "Heb je je ooit afgevraagd wat er in je hoofd gebeurd? Van dromen tot angststoornissen" +
              " ontdek in deze verhelderende serie hoe je hersenen werken.",
            "age": "12",
            "seasons": "1",
            "genres": ["Natuur en wetenschap", "Amerikaanse series", "Docuseries", "Documentaires"],
            "creator": ["Emma Stone"],
            "image": "media/images/mind_explained.jpg"
        },
        {
            "name": "Orphan Black",
            "description": "Als Sarah getuige is van de zelfmoord van haar dubbelgangster, neemt ze de identiteit" +
              " van de overledene aan en gaat er een wereld aan geheimen voor haar open.",
            "age": "16",
            "seasons": "5",
            "genres": ["Canadese series", "Mystery-series", "Thrillerseries", "Dramaseries"],
            "creator": ["John Fawcett", "Graeme Manson"],
            "image": "media/images/orphanblack.jpg"
        },
        {
            "name": "The Spy",
            "description": "De Mossad is wanhopig op zoek naar een agent om in Syrie te stationeren, dus wordt de in" +
              " Egypte geboren Eli geworven en krijgt hij een spoedcursus spionage",
            "age": "16",
            "seasons": "1",
            "genres": ["Politieke series", "Gebaseerd op een boek", "Thrillerseries"],
            "creator": ["Gideon Raff"],
            "image": "media/images/thespy.jpg"
        },
        {
            "name": "Unbelievable",
            "description": "Een jonge vrouw wordt beschuldigd van liegen over verkrachting. Twee vrouwelijke " +
              "detectives onderzoeken een reeks identieke aanvallen. Gebaseerd op ware gebeurtenissen",
            "age": "16",
            "seasons": "1",
            "genres": ["Amerikaanse series", "Dramaseries", "Misdaadseries"],
            "creator": [""],
            "image": "media/images/Unbelievable.jpg"
        },
        {
            "name": "White Gold",
            "description": "In het Essex van de jaren 80 doen de arrogante verkoper Vincent Swan en zijn gewetenloze " +
              "team alles om de deal te sluiten. Daarbij gaan ze niet altijd eerlijk te werk. ",
            "age": "12",
            "seasons": "2",
            "genres": ["Britse series", "Comedyseries"],
            "creator": ["Damon Beesley"],
            "image": "media/images/whitegold.jpg"
        }
    ]
};

// let showArray = JSON.stringify(jsonData);
//
// console.log(showArray);

console.log("hello?");
loadShows = () => {
    console.log(showArray.shows.length);
    let showAmount = showArray.shows;
    for(let i = 0; i < showAmount.length - 1; i++) {

        // Creating all elements

        let container = document.createElement("div");
        container.classList.add("show-card");

        let img = document.createElement("img");
        img.src = showAmount[i].image;
        img.alt = showAmount[i].name;

        let header = document.createElement("h2");
        header.classList.add("show-card-header");
        let headerText = document.createTextNode("" + showAmount[i].name + "");
        header.appendChild(headerText);

        let description = document.createElement("p");
        description.classList.add("show-card-description");
        let descriptionText = document.createTextNode("" + showAmount[i].description + "");
        description.appendChild(descriptionText);

        let genres = document.createElement("section");
        genres.classList.add("show-card-genres");

        let genresHeader = document.createElement("h4")
        let genresHeaderText = document.createTextNode("Genres");
        genresHeader.appendChild(genresHeaderText);

        let genresList = document.createElement("ul");
        genresList.classList.add("show-card-genres-list");

        let showGenres = showAmount[i].genres;
        for(x = 0; x < showGenres.length; x++) {

            let genre = document.createElement("li");
            genre.classList.add("show-card-genre");

            let a = document.createElement("a");
            a.href = "#";
            let aText = document.createTextNode("" + showGenres[x] + "");
            a.appendChild(aText);

            genre.appendChild(a);
            genresList.appendChild(genre);

        }

        let age = document.createElement("span");
        age.classList.add("show-card-age");
        let ageText = document.createTextNode("" + showAmount[i].age + "" + "+");
        age.appendChild(ageText);

        let creators = document.createElement("section");
        creators.classList.add("show-card-creators");

        let creatorHeader = document.createElement("h4");
        let creatorHeaderText = document.createTextNode("Director");
        creatorHeader.appendChild(creatorHeaderText);

        let creatorList = document.createElement("ul");
        creatorList.classList.add("show-card-creator-list");

        for(y = 0; y < showAmount[i].creator.length; y++) {

            let creator = document.createElement("li");
            creator.classList.add("show-card-creator");

            let creatorName = document.createTextNode("" + showAmount[i].creator[y] + "");
            creator.appendChild(creatorName);

            creatorList.appendChild(creator);

        }

        let seasonsAmount = document.createElement("h3");
        seasonsAmount.classList.add("show-card-seasons");
        let seasonsAmountText = document.createTextNode("" + showAmount[i].seasons + " Seasons");
        seasonsAmount.appendChild(seasonsAmountText);

        // All Elements created
        // Now starting to combine


        showContainer.appendChild(container);
        container.appendChild(img);

        container.appendChild(header);

        container.appendChild(description);

        container.appendChild(genres);
        genres.appendChild(genresHeader);
        genres.appendChild(genresList);

        container.appendChild(age);

        container.appendChild(creators);
        creators.appendChild(creatorHeader);
        creators.appendChild(creatorList);

        container.appendChild(seasonsAmount);

    }

};

loadShows();