'use strict';
{
  const bookTitles = [
    // Replace with your own book titles
    'asymmetry',
    'the_Great_believers',
    'the_perfect_nanny',
    'there_there',
    'washington_black',
    'american_prison',
    'educated',
    'frederick_douglass',
    'how_to_change_your_mind',
    'small_fry',
  ];

  // Replace with your own code
}

//console.log(bookTitles);

function listCreator() {
  let mainDiv = document.getElementById('mainDiv');
  let booksList = document.createElement('ul');

  for (let index = 0; index < bookTitles.length; index++) {
    let listItem = document.createElement('li');
    listItem.innerHTML += bookTitles.id[index];
    booksList.appendChild(listItem);
    mainDiv.appendChild(booksList);
  }
  listCreator();
}

let booksObject = {
  asymmetry: {
    title: 'Asymmetry',
    language: 'English',
    author: 'Lisa Halliday',
  },
  the_Great_believers: {
    title: 'The Great Believers',
    language: 'English',
    author: 'Rebecca Makkai',
  },
  the_perfect_nanny: {
    title: 'The Perfect Nanny',
    language: 'English',
    author: 'By Leila Slimani',
  },
  there_there: {
    title: 'There There',
    language: 'English',
    author: 'Tommy Orange',
  },
  washington_black: {
    title: 'Washington Black',
    language: 'English',
    author: 'Esi Edugyan',
  },
  american_prison: {
    title: 'American Prison',
    language: 'English',
    author: 'Shane Bauer',
  },
  educated: {
    title: 'Educated',
    language: 'English',
    author: 'Tara Westover',
  },
  frederick_douglass: {
    title: 'Frederick Douglass',
    language: 'English',
    author: 'David W. Blight',
  },
  how_to_change_your_mind: {
    title: 'How To Change Your Mind',
    language: 'English',
    author: 'Michael Pollan',
  },
  small_fry: {
    title: 'Small Fry',
    language: 'English',
    author: 'Lisa Brennan-Jobs',
  },
};

function listCreatorModified(obj) {
  const list = document.createElement('ul');
  mainDiv.appendChild(list);
  for (let i = 0; i < Object.keys(obj).length; i++) {
    const listItem = document.createElement('li');
    listItem.setAttribute('id', Object.keys(obj)[i]);
    list.appendChild(listItem);
    const listTitle = document.createElement('h2');
    listTitle.innerText = 'Title: ' + obj[Object.keys(obj)[i]].title;
    list.appendChild(listTitle);
    const listLanguage = document.createElement('h3');
    listLanguage.innerText = 'Language: ' + obj[Object.keys(obj)[i]].language;
    list.appendChild(listLanguage);
    const listAuthor = document.createElement('h3');
    listAuthor.innerText = 'Author: ' + obj[Object.keys(obj)[i]].author;
    list.appendChild(listAuthor);
  }
}
listCreatorModified(booksObject);

const coverFaceOfBooks = {
  asymmetry: './img/Assymetry.jpg',
  the_Great_believers: './img/GreatBelievers.jpg',
  the_perfect_nanny: './img/PerfectNanny.jpg',
  there_there: './img/ThereThere.jpg',
  washington_black: './img/WashingtonBlack.jpg',
  american_prison: './img/AmericanPrison.jpg',
  educated: './img/Educated.jpg',
  frederick_douglass: './img/FrederickDouglass.jpg',
  how_to_change_your_mind: './img/HowToChangeYourMind.jpg',
  small_fry: './img/SmallFry.jpg',
};

function CoverAdder(obj) {
  for (let i = 0; i < Object.keys(obj).length; i++) {
    const test = document.getElementById(Object.keys(obj)[i]);
    const picture = document.createElement('img');
    picture.setAttribute('src', obj[Object.keys(obj)[i]]);
    picture.setAttribute('alt', 'covers_of_books');
    test.appendChild(picture);
  }
}
CoverAdder(coverFaceOfBooks);
