function generateLinks(contacts) {
  // пройтись мапом выернуть уже готовые элементы ссылок
  // воспользоватся мапой для определния какую картинку делать
  const linksArray = contacts.map((contact) => {
    const url = new URL(contact);
    const hostname = url.hostname;

    if (SUPPORTED_SOCIAL_NETWORKS.has(hostname)) {
      const link = createElement("a", {
        classNames: SUPPORTED_SOCIAL_NETWORKS.get(hostname),
      });

      return link;
    }
  });
  return linksArray;
}
