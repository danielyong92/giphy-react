describe('Homepage', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
      })
    it('should render the GIPHY title', ()=> {
        cy.get('[id=giphyTitle]').should('have.text', 'GIPHY:')
    })
    it('should render the Have fun text', ()=> {
        cy.contains('Cats')
    })
    it('should render Cats and Dogs button', ()=> {
        cy.contains('Dogs')
    })
    it('should render Cat Gifs and click me button when the Cats button is clicked', ()=> {
        cy.contains('Cats').click()
        cy.get('[id=clickMe]').should('exist')
        cy.get('img').should('exist')
    })
    it('should render Dog Gifs and click me button when the Dog button is clicked', ()=> {
        cy.contains('Dogs').click()
        cy.get('[id=clickMe]').should('exist')
        cy.get('img').should('exist')
    })
    it('should render modal with details header, title, and rating upon click ', () => {
        cy.contains('Cats').click()
        cy.get('[id=clickMe]').first().click()
        cy.get('[id=modalTitle]').should('have.text', 'Details')
        cy.get('[id=modalDescription]').contains('Title:')
        cy.get('[id=modalDescription]').contains('Rating:')
    })
})