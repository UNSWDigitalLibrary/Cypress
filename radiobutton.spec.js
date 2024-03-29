describe('Radio button - checking for anchors by visit the website', function() {
	
	beforeEach(function(){
	cy.visit('website')
	
	
	})
	context('Verify available fields for citation search are complete', function () {
		it('Hover over Citation Search and click it', function () {
			cy.get('button[id="more-links-button"]').click()	
		})
		it('Article radio button', function () {
			cy.get('button[id="more-links-button"]').click()
			const label = 'Citation Search'
			cy.get('prm-main-menu')
			  .find('a')
			  .should($a => {
					let aria = $a.map((i, el) => {
					return Cypress.$(el).attr('aria-label')})
					expect(aria.get()).to.contain(label)
					})
			cy.get('span[translate="nui.mainmenu.label.citationlinker"]').click()
			
			cy.get('label[translate="citationLinker.atitle"]') 
			cy.get('label[translate="citationLinker.jtitle" ]')
			cy.get('label[translate="search-advanced.DateRange.label.Year" ]') 
			cy.get('label[translate="search-advanced.drStartDay.option.start_day"]')  
			cy.get('label[translate="citationLinker.volume" ]') 
			cy.get('label[translate="citationLinker.issue" ]') 
			cy.get('label[translate="citationLinker.spage" ]') 
			cy.get('label[translate="citationLinker.epage" ]') 
			cy.get('label[translate="citationLinker.issn" ]') 
			cy.get('label[translate="citationLinker.issn" ]') 
			cy.get('label[translate="citationLinker.doi" ]') 
			cy.get('label[translate="citationLinker.pmid" ]') 
			cy.get('label[translate="citationLinker.aulast" ]') 
			cy.get('label[translate="citationLinker.aufirst" ]') 
			cy.get('label[translate="citationLinker.auinit" ]') 
			cy.get('label[translate="citationLinker.publisher"]')  
			cy.get('label[translate="citationLinker.pubdate" ]') 

		})
		it('Book radio button', function () {
			cy.get('button[id="more-links-button"]').click()
			cy.get('span[translate="nui.mainmenu.label.citationlinker"]').click()
			cy.get('md-radio-button:nth-child(2)').should('have.attr','value','book').click()
			cy.get('label[translate="citationLinker.btitle"]') 
			cy.get('label[translate="search-advanced.DateRange.label.Year" ]') 
			cy.get('label[translate="search-advanced.drStartMonth.option.start_month" ]') 
			cy.get('label[translate="search-advanced.drStartDay.option.start_day" ]') 
			cy.get('label[translate="citationLinker.volume"]') 
			cy.get('label[translate="citationLinker.part" ]') 
			cy.get('label[translate="citationLinker.isbn" ]') 
			cy.get('label[translate="citationLinker.isbn"]') 
			cy.get('label[translate="citationLinker.aulast" ]') 
			cy.get('label[translate="citationLinker.aufirst" ]') 
			cy.get('label[translate="citationLinker.auinit" ]') 
			cy.get('label[translate="citationLinker.publisher" ]') 
			cy.get('label[translate="citationLinker.pubdate"]')  

		})
		it('Journal radio button', function () {
			cy.get('button[id="more-links-button"]').click()
			cy.get('span[translate="nui.mainmenu.label.citationlinker"]').click()
			cy.get('md-radio-button:nth-child(3)').should('have.attr','value','journal').click()
			cy.get('label[translate="citationLinker.jtitle"]') 
			cy.get('label[translate="search-advanced.DateRange.label.Year" ]') 
			cy.get('label[translate="search-advanced.drStartMonth.option.start_month"]') 
			cy.get('label[translate="search-advanced.drStartDay.option.start_day" ]') 
			cy.get('label[translate="citationLinker.volume"]')  
			cy.get('label[translate="citationLinker.issue" ]') 
			cy.get('label[translate="citationLinker.issn" ]') 
			cy.get('label[translate="citationLinker.doi" ]') 

		})
		it('Page redirection', function () {
			const hrefs = 'website'
			cy.get('prm-logo-after')
			  .get('div[class="unsw-breadcrumb"]')
			  .find('a[class="md-primoExplore-theme"]')
			  .should('have.attr', 'href' , '/website')
			cy.request(hrefs).as('resp')

		})
	})
})

	
