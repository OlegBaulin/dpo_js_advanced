/// <reference types="cypress" />
describe('Приложение игра в пары', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('в начальном состоянии игра имеет поле 4х4, цифры невидимы', () => {
    cy.get('.card').should('have.length', 16);
    cy.get('.card').should('not.have.class', 'open');
  });

  it('открывается произвольная карточка', () => {
    const number = Math.floor(Math.random() * 14 + 1);
    cy.get(`.card:nth-child(${number})`).click().should('have.class', 'open');
  });

  it('находятся парные карточки и состаются открытыми', () => {
    let isMatch = false;
    cy.get('.card:first-child').then((firstCard) => {
      const firstValue = firstCard.children().text();

      for (let i = 2; i <= 16; i++) {
        cy.get('.card:first-child')
          .click()
          .then(() => {
            if (!isMatch) {
              cy.get(`.card:nth-child(${i})`)
                .click()
                .wait(301)
                .then((card) => {
                  const thisValue = card.children().text();
                  if (firstValue === thisValue) {
                    cy.get('.open').should('have.length', 2);
                    isMatch = true;
                  }
                });
            }
          });
      }
    });
  });

  it('если открытые карточки не совпадают, то они закрываются', () => {
    function matchingCards(number) {
      cy.get(`.card:nth-child(${number})`)
        .click()
        .then((firstCard) => {
          const firstValue = firstCard.text();
          cy.get(`.card:nth-child(${number + 1})`)
            .click()
            .wait(301)
            .then((secondCard) => {
              const secondValue = secondCard.text();
              if (firstValue === secondValue) {
                matchingCards(number + 2);
              } else {
                cy.get(`.card:nth-child(${number + 3})`).click();
                cy.get('.open').should('have.length', number);
              }
            });
        });
    }

    matchingCards(1);
  });
});
