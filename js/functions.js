// Make sure everything is loaded up before javascript!
window.addEventListener('DOMContentLoaded', (event) => {

  // Array with all Shows
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
      }
    ]
  };

  let showContainer = document.getElementById("shows");
  let showAmount = showArray.shows;

  //Function to create a pagination within the website
  //Source: https://www.quora.com/What-is-a-simple-way-to-implement-pagination-on-an-array-in-Javascript
  paginate = (array, currentNumber, amountItems) => {
    --currentNumber; // Current number set to 0 because array counts from 0.
    return array.slice(currentNumber * amountItems, (currentNumber + 1) * amountItems);
  };

  // State pagination data
  let showsPerPage = 5,
      currentPage = 1,
      totalPages = Math.ceil(showAmount.length / showsPerPage);

  // Next & previous buttons
  let next = document.getElementById('next'),
      prev = document.getElementById('previous');

  // Get the browser width
  let browserWidth = window.innerWidth;

  // Adjust shows per page based on browser width
  adjustShowsPerPage = () => {

    if(browserWidth <= "850") {
      showsPerPage = 3;
    }
    else if(browserWidth >= "850" && browserWidth <= "1150") {
      showsPerPage = 4;
    } else {
      showsPerPage = 5;
    }
  };
  adjustShowsPerPage();

  // Adjust shows per page based on resizing the browser
  window.addEventListener("resize", (e) => {
    browserWidth = window.innerWidth;

    let oldShowsPerPage = showsPerPage;

    if (browserWidth <= "680") {
      return;
    }

    adjustShowsPerPage();

    if (oldShowsPerPage !== showsPerPage) {
      showContainer.innerHTML = "";
      loadShows();
    }

  });

  // Load all elements in from each show
  loadShows = () => {

      // Get the length of one page
      let showPage = paginate(showAmount, currentPage, showsPerPage);

      // For each show create elements
      for(let i = 0; i < showPage.length; i++) {

          // Creating all elements

          let container = document.createElement("div");
          container.classList.add("show-card");
          container.tabIndex = 0;

          container.title = showPage[i].url;

          let img = document.createElement("img");
          img.src = showPage[i].image;
          img.alt = showPage[i].name;

          let header = document.createElement("h2");
          header.classList.add("show-card-header");
          let headerText = document.createTextNode("" + showPage[i].name + "");
          header.appendChild(headerText);

          let description = document.createElement("p");
          description.classList.add("show-card-description");
          let descriptionText = document.createTextNode("" + showPage[i].description + "");
          description.appendChild(descriptionText);

          let genres = document.createElement("section");
          genres.classList.add("show-card-genres");

          let genresHeader = document.createElement("h4");
          let genresHeaderText = document.createTextNode("Genres");
          genresHeader.appendChild(genresHeaderText);

          let genresList = document.createElement("ul");
          genresList.classList.add("show-card-genres-list");

          let showGenres = showPage[i].genres;

          // Create li for each genre
          for(let x = 0; x < showGenres.length; x++) {
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
          let ageText = document.createTextNode("" + showPage[i].age + "" + "+");
          age.appendChild(ageText);

          let creators = document.createElement("section");
          creators.classList.add("show-card-creators");

          let creatorHeader = document.createElement("h4");
          let creatorHeaderText = document.createTextNode("Director");
          creatorHeader.appendChild(creatorHeaderText);

          let creatorList = document.createElement("ul");
          creatorList.classList.add("show-card-creator-list");

          // Create li for each creator
          for(let y = 0; y < showPage[i].creator.length; y++) {

              let creator = document.createElement("li");
              creator.classList.add("show-card-creator");

              let creatorName = document.createTextNode("" + showPage[i].creator[y] + "");
              creator.appendChild(creatorName);

              creatorList.appendChild(creator);

          }

          let seasonsAmount = document.createElement("h3");
          seasonsAmount.classList.add("show-card-seasons");
          let seasonsAmountText = document.createTextNode("" + showPage[i].seasons + " Seasons");
          seasonsAmount.appendChild(seasonsAmountText);

          // All Elements created

          // Now combining all elements
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

  // Select all shows
  let singleShow = document.querySelectorAll(".show-card");

  // For each show, add animation on click
  for(let i = 0; i < singleShow.length; i++) {
    console.log("hello");
    singleShow[i].transition = "all 5s cubic-bezier(.22,.04,.59,1.73)";
    singleShow[i].addEventListener('click', () => {
      singleShow[i].classList.add('slide-out');

      // Wait for the animation to play out
      setTimeout(() => {
        window.location.href = singleShow[i].title;
      }, 1000);

    });
  }

  console.log("currentpage beforeclick = ", currentPage);

  // Next shows animation on click
  next.addEventListener('click', () => {

    // If there is no next page
    if (currentPage === totalPages) {

      // Return to first page
      currentPage = 1;

      // Add an animation to each show before leaving
      for(i = 0; i < singleShow.length; i++) {
        singleShow[i].classList.toggle('pagination');

      }

      // Wait for the animation to play out
      setTimeout(() => {
        //Load in new shows
        showContainer.innerHTML = "";
        loadShows();

      }, 500);

      return;
    }

    // If there is a next page
    // Add an animation to each show before leaving
    for(i = 0; i < singleShow.length; i++) {
      singleShow[i].classList.add('pagination');
    }

    // Wait for the animation to play out
    setTimeout(() => {
      currentPage++;

      //Load in new shows
      showContainer.innerHTML = "";
      loadShows();

      for(i = 0; i < singleShow.length; i++) {
        singleShow[i].classList.toggle('pagination');
        singleShow[i].classList.toggle('pagination-reverse');
      }
      console.log("currentpage after = ", currentPage);
      console.log("singleshows", singleShow);

    }, 500);


  });

  // Previous shows animation on click
  prev.addEventListener('click', () => {

    // If there is no previous page
    if (currentPage === 1) {
      // Return to last page
      currentPage = totalPages;

      // Add an animation to each show before leaving
      for(let i = 0; i < singleShow.length; i++) {
        singleShow[i].classList.add('pagination');

      }

      // Wait for the animation to play out
      setTimeout(() => {

        //Load in new shows
        showContainer.innerHTML = "";
        loadShows();
      }, 500);

      return;
    }

    // If there is a previous page
    // Add an animation to each show before leaving
    for(let i = 0; i < singleShow.length; i++) {
      singleShow[i].classList.add('pagination');

    }

    // Wait for the animation to play out
    setTimeout(() => {
      currentPage--;

      //Load in new shows
      showContainer.innerHTML = "";
      loadShows();
    }, 500);
  });

  let search = document.querySelector('.search-icon');
  let searchInput = document.querySelector('.search-input');

  // When the search icon is clicked, change the animation
  search.addEventListener('click', () => {

    // Switch between collapse and expand
    if (searchInput.classList.contains('search-animation-expand')) {
      searchInput.classList.toggle('search-animation-collapse');
    } else {
      searchInput.classList.toggle('search-animation-expand');
    }

  });

  // Set all letters
  let keyWord = {
      g: 0,
      a: 0,
      n: 0,
      s: 0,
      t: 0,
      e: 0,
      r: 0
  };

  // Find the lasers
  let lasers = document.querySelector(".lasers");

  // Activate function on keypress
  window.onkeypress = function(event) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
        // https://stackoverflow.com/questions/35394937/keyboardevent-keycode-deprecated-what-does-this-mean-in-practice
        // -- 3rde comment staat het uitgelegd!

        // Check if a key is a key from the word
        switch(event.code) {
            case "KeyG":
                keyWord.g++;
                break;
            case "KeyA":
                keyWord.a++;
                break;
            case "KeyN":
                keyWord.n++;
                break;
            case "KeyS":
                keyWord.s++;
                break;
            case "KeyT":
                keyWord.t++;
                break;
            case "KeyE":
                keyWord.e++;
                break;
            case "KeyR":
                keyWord.r++;
                break;
        }

        if (event.key === "Enter") {
            // Check if all keys are pressed
            if (keyWord.g === 2 &&
                keyWord.a &&
                keyWord.n &&
                keyWord.g &&
                keyWord.s &&
                keyWord.t &&
                keyWord.e &&
                keyWord.r) {
                // Show lasers
                lasers.style.zIndex = "1";
                lasers.style.opacity = "1";
                setTimeout( () => {
                    // Hide lasers
                    lasers.style.opacity = "0";
                    lasers.style.zIndex = "-1";

                  // Reset all letters so it can be activated again.
                    keyWord.a = 0;
                    keyWord.n = 0;
                    keyWord.g = 0;
                    keyWord.s = 0;
                    keyWord.t = 0;
                    keyWord.e = 0;
                    keyWord.r = 0;
                }, 5000);

            }
        }

  }

});