"use strict";

const cardsContainer = document.querySelector("#root");

const userCards = data.map((user) => generateUserCard(user));
cardsContainer.append(...userCards);

/**
 * Создает карточку на основании объекта пользователя
 * @param {object} userObj объект с данными пользователя
 * @returns {HTMLLIElement} верстка карточки
 */
function generateUserCard(userObj) {
  const { id, name, description, profilePicture } = userObj;

  const img = createElement("img", {
    classNames: ["img"],
    attrs: { src: profilePicture, alt: name , 'data-id': id},
  });
  
  img.addEventListener("error", deleteHandler);
  img.addEventListener("load", imageLoadHandler);

  const userName = createElement(
    "h2",
    { classNames: ["cardName"] },
    document.createTextNode(name)
  );

  const cardDescription = createElement(
    "p",
    {
      classNames: ["cardDescription"],
    },
    document.createTextNode(description)
  );

  const initails = createElement(
    "div",
    { classNames: ["initials"] },
    document.createTextNode(
      name
        .split(" ")
        .map((word) => word[0])
        .join(" ")
    )
  );
  initails.style.backgroundColor = stringToColour(name);

  const imgWrapper = createElement(
    "div",
    { classNames: ["imgWrapper"], attrs: {id: `wrapper${id}`} },
    initails
  );

  const article = createElement(
    "article",
    { classNames: ["userCard"] },
    imgWrapper,
    userName,
    cardDescription
  );

  const userCard = createElement(
    "li",
    { classNames: ["cardWrapper", "test"] },
    article
  );

  return userCard;
}

const tagName = "li";
const classes = ["cardWrapper", "class2"];
const attrs = { alt: "text", src: './assets/img/logo.png' };

const img = createElement('img')
const test = createElement('div', {}, img )

/**
 * Создаёт HTML элемент
 * @param {string} tagName имя элемента
 * @param {object} options объект настроек
 * @param {string[]} optins.classNames строки с именами CSS классов
 * @param {} options.attrs объект с атрибутами
 * @param {Function} options.onClick функция обработки события клика
 * @param  {Node[]} children дочерние DOM узлы
 * @returns {HTMLElement} созданный элемент
 */

function createElement(tagName, options, ...children) {
  const { classNames = [], attrs = {}, id, onClick = () => {} } = options;

  const element = document.createElement(tagName);
  
  element.classList.add(...classNames);

  const attributesTuples = Object.entries(attrs);

  for (const [key, value] of attributesTuples) {
    element.setAttribute(key, value);
  }

  if (id) {
    element.id = id;
  }

  element.onclick = onClick;

  element.append(...children);

  return element;
}

/* 
  HANDLERS 
*/

function deleteHandler(e) {
  const { target } = e;
  target.style.visibility = "hidden";
}
function imageLoadHandler(e) {
  const {target, target : {dataset: {id}}} = e;
  document.getElementById(`wrapper${id}`).append(target);
}
/*
  UTILS
*/

function stringToColour(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = "#";
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
}
