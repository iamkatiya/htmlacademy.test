'use strict';

const blockWidget = document.getElementById('msg-widget');

const arrayPost = [
  {
    id: 0,
    title: 'Заголовок виджета',
    image: 'https://media.pn.am/media/issue/197/297/photo/197297.jpg',
    name: 'Ivan P.',
    date: '14.06.2010 14:56',
    link: '#',
    state: 0
  },
  {
    id: 1,
    title: 'Заголовок виджета 2',
    image: 'https://media.pn.am/media/issue/197/297/photo/197297.jpg',
    name: 'Gena P.',
    date: '15.06.2010 14:56',
    link: '#',
    state: 0
  }
];

const mainBlockGenerate = (arrayPost) => {
  const mainHtml = document.createElement('div');
  const containerHtml = document.createElement('div');
  const closerHtml = document.createElement('div');
  mainHtml.classList.add('widget');
  containerHtml.classList.add('container');
  closerHtml.classList.add('widget__close');
  closerHtml.innerHTML = `<svg height="512px" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css"></style><g class="st2" id="cross"><g class="st0"><line class="st1" x1="112.5" x2="401" y1="112.5" y2="401"/><line class="st1" x1="401" x2="112.5" y1="112.5" y2="401"/></g></g><g id="cross_copy"><path d="M268.064,256.75l138.593-138.593c3.124-3.124,3.124-8.189,0-11.313c-3.125-3.124-8.189-3.124-11.314,0L256.75,245.436   L118.157,106.843c-3.124-3.124-8.189-3.124-11.313,0c-3.125,3.124-3.125,8.189,0,11.313L245.436,256.75L106.843,395.343   c-3.125,3.125-3.125,8.189,0,11.314c1.562,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343L256.75,268.064l138.593,138.593   c1.563,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343c3.124-3.125,3.124-8.189,0-11.314L268.064,256.75z"/></g></svg>`;
  containerHtml.append(closerHtml);
  mainHtml.append(containerHtml);
  closerHtml.addEventListener('click', () => {
    blockWidget.classList.remove('widget-news-mode');
  });

  arrayPost.forEach((objElement) => {
    var elemHtml = subBlockGenerate(objElement);
    containerHtml.appendChild(elemHtml);
  });
  return mainHtml;
};

const subBlockGenerate = (objElement) => {
  const returnElem = document.createElement('div');
  returnElem.classList.add('widget__item', 'widget-block');

  // create title
  const elemTitle = document.createElement('h2');
  elemTitle.classList.add('widget-block__head');
  elemTitle.innerText = objElement.title;

  // create block person
  const elemPerson = document.createElement('div');
  elemPerson.classList.add('widget-block__person', 'person');
  elemPerson.innerHTML = `<img class="person__image" src="${objElement.image}">` +
    `<div><p class="person__name">${objElement.name}</p><div class="person__date">${objElement.date}</div></div>`;

  // create block footer
  const elemFooter = document.createElement('div');
  elemFooter.classList.add('widget-block__footer', 'footer');
  elemFooter.innerHTML = `<a href="${objElement.link}" class="footer__link">Подробнее...</a><div class="footer__read">Прочитано</div>`;

  returnElem.append(elemTitle);
  returnElem.append(elemPerson);
  returnElem.append(elemFooter);
  return returnElem;
};

const createRound = (arrayPost, newsBlock) => {
  const roundDiv = document.createElement('div');
  const countNews = arrayPost.length;
  roundDiv.classList.add('open-widget');
  roundDiv.innerHTML = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="128px" height="128px" viewBox="0 0 128 128" xml:space="preserve">
            <g>
                <g>
                    <path d="M112,0H16C7.164,0,0,7.164,0,16v64c0,8.836,7.164,16,16,16h24l32,32V96h40c8.836,0,16-7.164,16-16V16
                        C128,7.164,120.836,0,112,0z M120,80c0,4.414-3.59,8-8,8H64v20.688L43.313,88H16c-4.41,0-8-3.586-8-8V16c0-4.414,3.59-8,8-8h96
                        c4.41,0,8,3.586,8,8V80z M24,32h80v-8H24V32z M24,48h80v-8H24V48z M24,64h48v-8H24V64z"/>
                </g>
            </g>
        </svg>
        <div class="open-widget__count">${countNews}</div>`;
  roundDiv.addEventListener('click', () => {
    blockWidget.classList.add('widget-news-mode');
  });
  return roundDiv;
};

const generateHtml = (arrayPost) => {
  document.querySelector('head').innerHTML += '<link rel="stylesheet" href="css/main.min.css" type="text/css"/>';
  setTimeout(()=>{
    const newsBlock = mainBlockGenerate(arrayPost);
    const roundBlock = createRound(arrayPost, newsBlock);
    blockWidget.append(roundBlock);
    blockWidget.append(newsBlock);
  }, 300);
};

generateHtml(arrayPost);
