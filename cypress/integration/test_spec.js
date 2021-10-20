// example from the docs
describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

// my actual first test - does the page load
describe('The main page loads', () => {
  it('successfully loads', () => {
    cy.visit('http://127.0.0.1:5500/index.html')    
  }) 
})

// testing basic operations
describe('Basic Calculator Operations', () => {
  // Addition
  it('checks 7 + 2 equals 9', () => {
    // Arrange
    cy.visit('http://127.0.0.1:5500/index.html')
    // Act
    cy.get("[data-cy=seven]").click();
    // cy.get(".calculator__operator--plus").click();
    // cy.get(".calculator__number--two").click();
    // cy.get(".calculator__operator--equals").click();
    cy.get("[data-cy=plus]").click();
    cy.get("[data-cy=two]").click();
    cy.get(".equals").click();
    // Assert
    // cy.get(".main__inputArea--keyedInText").should("have.value", "= 9");
    // The above is for input tag
    cy.get(".main__inputArea--keyedInText").contains("= 9");
  })
    // Subtraction
  it('checks 7 - 2 equals 5', () => {
    // Arrange
    cy.visit('http://127.0.0.1:5500/index.html')
    // Act
    cy.get("[data-cy=seven]").click();    
    cy.get("[data-cy=minus]").click();
    cy.get("[data-cy=two]").click();
    cy.get(".equals").click();
    // Assert    
    cy.get(".main__inputArea--keyedInText").contains(5);
  })

  // Multiplication
  it('checks 7 * 2 equals 14', () => {
    // Arrange
    cy.visit('http://127.0.0.1:5500/index.html')
    // Act
    cy.get("[data-cy=seven]").click();    
    cy.get("[data-cy=multiply]").click();
    cy.get("[data-cy=two]").click();
    cy.get(".equals").click();
    // Assert
    cy.get(".main__inputArea--keyedInText").contains(14);
  })

  // Division
  it('checks 7 \u00f7 2 equals 3.5', () => {
    // Arrange
    cy.visit('http://127.0.0.1:5500/index.html')
    // Act
    cy.get("[data-cy=seven]").click();    
    cy.get("[data-cy=divide]").click();
    cy.get("[data-cy=two]").click();
    cy.get(".equals").click();
    // Assert
    cy.get(".main__inputArea--keyedInText").contains(3.5);
  })
})