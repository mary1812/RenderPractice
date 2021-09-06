"use strict";

const cardsContainer = document.querySelector("#root");

const userCards = data.map(function (userObj) {
  return generateUserCard(userObj);
});
cardsContainer.append(...userCards);

/**
 * Создает карточку на основании обьекта пользователя
 * @param {object} userObj обьект с даннывми пользователя
 * @returns {HTMLLIElement} верстка карточки
 */
function generateUserCard(userObj) {
  const { firstName, description = "test", contacts } = userObj;
  
  const userName = createElement(
    "h2",
    { classNames: ["cardName"] },
    document.createTextNode(firstName)
  );

  const cardDescription = createElement(
    "p",
    {
      classNames: ["cardDescription"],
    },
    document.createTextNode(description)
  );
  const imgWrapper = createImgWrapper(userObj);

  const linkWrapper = createElement("div", { classNames: ["linkWrapper"] },
  ...generateLinks(contacts));

  const article = createElement(
    "article",
    { classNames: ["userCard"] },
    imgWrapper,
    userName,
    cardDescription,
    linkWrapper
  );

  const userCard = createElement(
    "li",
    { classNames: ["cardWrapper"] },
    article
  );

  return userCard;
}
