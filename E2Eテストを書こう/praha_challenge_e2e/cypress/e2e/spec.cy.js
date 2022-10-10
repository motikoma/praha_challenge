describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('http://localhost:3001')
    cy.get('[data-e2e="square-0"]').click()
    cy.get('[data-e2e="square-4"]').click()
    cy.get('[data-e2e="square-1"]').click()
    cy.get('[data-e2e="square-5"]').click()
    cy.get('[data-e2e="square-2"]').click()
  })
})