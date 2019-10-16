window.addEventListener('DOMContentLoaded', (event) => {

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
        "image": "media/images/peaky-blinders.jpg",
        "url": "pages/peaky.html"
      },
      {
        "name": "Elite",
        "description": " Als drie arbeiderskinderen zich inschrijven bij een exclusieve privéschool in Spanje, " +
          "leidt de confrontatie tussen de arme en rijke studenten tot een moord.",
        "age": "16",
        "seasons": "5",
        "genres": ["Britse series", "Dramaseries", "Misdaadseries"],
        "creator": ["Carlos Montero", "Dario Madrona"],
        "image": "media/images/elite.jpg",
        "url": "pages/peaky.html"
      },
      {
        "name": "Mind Explained",
        "description": "Heb je je ooit afgevraagd wat er in je hoofd gebeurd? Van dromen tot angststoornissen" +
          " ontdek in deze verhelderende serie hoe je hersenen werken.",
        "age": "12",
        "seasons": "1",
        "genres": ["Natuur en wetenschap", "Amerikaanse series", "Docuseries", "Documentaires"],
        "creator": ["Emma Stone"],
        "image": "media/images/mind_explained.jpg",
        "url": "pages/peaky.html"
      },
      {
        "name": "Orphan Black",
        "description": "Als Sarah getuige is van de zelfmoord van haar dubbelgangster, neemt ze de identiteit" +
          " van de overledene aan en gaat er een wereld aan geheimen voor haar open.",
        "age": "16",
        "seasons": "5",
        "genres": ["Canadese series", "Mystery-series", "Thrillerseries", "Dramaseries"],
        "creator": ["John Fawcett", "Graeme Manson"],
        "image": "media/images/orphanblack.jpg",
        "url": "pages/peaky.html"
      },
      {
        "name": "The Spy",
        "description": "De Mossad is wanhopig op zoek naar een agent om in Syrie te stationeren, dus wordt de in" +
          " Egypte geboren Eli geworven en krijgt hij een spoedcursus spionage",
        "age": "16",
        "seasons": "1",
        "genres": ["Politieke series", "Gebaseerd op een boek", "Thrillerseries"],
        "creator": ["Gideon Raff"],
        "image": "media/images/thespy.jpg",
        "url": "pages/peaky.html"
      },
      {
        "name": "Unbelievable",
        "description": "Een jonge vrouw wordt beschuldigd van liegen over verkrachting. Twee vrouwelijke " +
          "detectives onderzoeken een reeks identieke aanvallen. Gebaseerd op ware gebeurtenissen",
        "age": "16",
        "seasons": "1",
        "genres": ["Amerikaanse series", "Dramaseries", "Misdaadseries"],
        "creator": [""],
        "image": "media/images/Unbelievable.jpg",
        "url": "pages/peaky.html"
      },
      {
        "name": "White Gold",
        "description": "In het Essex van de jaren 80 doen de arrogante verkoper Vincent Swan en zijn gewetenloze " +
          "team alles om de deal te sluiten. Daarbij gaan ze niet altijd eerlijk te werk. ",
        "age": "12",
        "seasons": "2",
        "genres": ["Britse series", "Comedyseries"],
        "creator": ["Damon Beesley"],
        "image": "media/images/whitegold.jpg",
        "url": "pages/white.html"
      },
      {
        "name": "The Spy",
        "description": "De Mossad is wanhopig op zoek naar een agent om in Syrie te stationeren, dus wordt de in" +
          " Egypte geboren Eli geworven en krijgt hij een spoedcursus spionage",
        "age": "16",
        "seasons": "1",
        "genres": ["Politieke series", "Gebaseerd op een boek", "Thrillerseries"],
        "creator": ["Gideon Raff"],
        "image": "media/images/thespy.jpg",
        "url": "pages/peaky.html"
      },
      {
        "name": "Unbelievable",
        "description": "Een jonge vrouw wordt beschuldigd van liegen over verkrachting. Twee vrouwelijke " +
          "detectives onderzoeken een reeks identieke aanvallen. Gebaseerd op ware gebeurtenissen",
        "age": "16",
        "seasons": "1",
        "genres": ["Amerikaanse series", "Dramaseries", "Misdaadseries"],
        "creator": [""],
        "image": "media/images/Unbelievable.jpg",
        "url": "pages/peaky.html"
      },
      {
        "name": "White Gold",
        "description": "In het Essex van de jaren 80 doen de arrogante verkoper Vincent Swan en zijn gewetenloze " +
          "team alles om de deal te sluiten. Daarbij gaan ze niet altijd eerlijk te werk. ",
        "age": "12",
        "seasons": "2",
        "genres": ["Britse series", "Comedyseries"],
        "creator": ["Damon Beesley"],
        "image": "media/images/whitegold.jpg",
        "url": "pages/white.html"
      },
      {
        "name": "Unbelievable",
        "description": "Een jonge vrouw wordt beschuldigd van liegen over verkrachting. Twee vrouwelijke " +
          "detectives onderzoeken een reeks identieke aanvallen. Gebaseerd op ware gebeurtenissen",
        "age": "16",
        "seasons": "1",
        "genres": ["Amerikaanse series", "Dramaseries", "Misdaadseries"],
        "creator": [""],
        "image": "media/images/Unbelievable.jpg",
        "url": "pages/peaky.html"
      },
      {
        "name": "White Gold",
        "description": "In het Essex van de jaren 80 doen de arrogante verkoper Vincent Swan en zijn gewetenloze " +
          "team alles om de deal te sluiten. Daarbij gaan ze niet altijd eerlijk te werk. ",
        "age": "12",
        "seasons": "2",
        "genres": ["Britse series", "Comedyseries"],
        "creator": ["Damon Beesley"],
        "image": "media/images/whitegold.jpg",
        "url": "pages/white.html"
      }
    ]
  };

  let showContainer = document.getElementById("shows");

  //https://www.quora.com/What-is-a-simple-way-to-implement-pagination-on-an-array-in-Javascript
  paginate = (array, page_number, page_size) => {
    // return arr.slice(perPage*(page-1), perPage*page);
    --page_number; // because pages logically start with 1, but technically with 0
    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  };
  function paginate (array, page_size, page_number) {

  }


  let showAmount = showArray.shows;
  let showsPerPage = 5;
  let currentPage = 1;
  let totalPages = Math.ceil(showAmount.length / showsPerPage);
  let next = document.getElementById('next');
  let prev = document.getElementById('previous');

  next.addEventListener('click', () => {
    if (currentPage === totalPages) {
      currentPage = 1;
      showContainer.innerHTML = "";
      loadShows();
      return;
    }
    currentPage++;

    showContainer.innerHTML = "";
    loadShows();
  });

  prev.addEventListener('click', () => {
    if (currentPage === 1) {
      currentPage = totalPages;
      showContainer.innerHTML = "";
      loadShows();
      return;
    }
    currentPage--;

    showContainer.innerHTML = "";
    loadShows();
  });

  loadShows = () => {

      let showPage = paginate(showAmount, showsPerPage, currentPage).length;

      for(let i = 0; i < showPage; i++) {

          // Creating all elements

          let container = document.createElement("div");
          container.classList.add("show-card");
          container.tabIndex = 0;

          container.title = showAmount[i].url;

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

          let genresHeader = document.createElement("h4");
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

  let singleShow = document.querySelectorAll(".show-card");

  for(let i = 0; i < singleShow.length; i++) {
    console.log("hello");
    singleShow[i].transition = "all 5s cubic-bezier(.22,.04,.59,1.73)";
    singleShow[i].addEventListener('click', () => {
      singleShow[i].classList.add('slide-out');

      setTimeout(() => {
        window.location.href = singleShow[i].title;
      }, 1000);

    });
  }


});