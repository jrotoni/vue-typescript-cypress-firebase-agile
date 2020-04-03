// https://docs.cypress.io/api/introduction/api.html

describe("Check Port 8080", () => {
  it("Runs in local server", () => {
    cy.visit("http://localhost:8080");
  });
});

describe("Check Agile Principle", () => {
  it("Loads the agile principles", () => {
    cy.contains("span", "Agile Principle #");
  });
});

describe("Check Fade Transition", () => {
  it("Applies fade transitions", () => {
    cy.get(".fade-in-enter-active > h2");
  });
});

describe("Click toggle darkmode", () => {
  it("Toggles Dark Mode", () => {
    cy.get(".controls").click();
  });
});
