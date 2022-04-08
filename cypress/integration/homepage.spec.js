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
    it('should render Cat Gifs when the Cats button is clicked', ()=> {
        cy.contains('Cats').click()
        cy.get('img').should('exist')
    })
    it('should render Dog Gifs when the Dog button is clicked', ()=> {
        cy.contains('Dogs').click()
        cy.get('img').should('exist')
    })
})