describe('login', function() {
	
	beforeEach(function(){
		cy.visit('website_address')
		cy.get('body').then($body => {
			if ($body.find('.user-profile-name').length === 1) {
				cy.log('Already logged in')
			} else {
				cy.get('span[translate="eshelf.signin.title"]')
				  .click( { multiple: true ,force: true})
				cy.get('div[id="userNameArea"]')
				  .find('input')
				  .type('userid')
				cy.get('div[id="passwordArea"]')
				  .find('input')
				  .type('password')
				cy.get('div[id="submissionArea"]')
				  .find('span[class="submit"]')
				  .click()
			}
		})
	})
	
	context('Request for serial item', function () {
		it('Checking the status of each item', function () {
			cy.get('#searchBar').type('International journal of comic art{enter}')
			})
		
	})
	
	afterEach(function () {
		cy.get('md-menu').get('span[class="user-name"]').click({ multiple: true ,force: true})
		cy.get('span[translate="eshelf.menu.signOut"]').click()
	})
	
})

