const container = document.querySelector('.app');

const createCard = import('./card')
  .then(
    (res) => {
      const element = res.default();
      return element;
    },
  );

Promise.all([createCard])
  .then(([element]) => {
    container.append(element);
  });
