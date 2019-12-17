describe('TEST065', function() {
	beforeEach(function(){
	cy.visit('https://primoauat.library.unsw.edu.au/primo-explore/search?vid=UNSWS')
	
	})
	context('Test  the Library website bento box (Library Search)', function () {
		it('To test FRBRised Alma resources', function () {
			cy.get('#searchBar').type('Sydney morning herald{enter}')
			cy.get('span[translate="label.advanced_search"]')
			  .click({ multiple: true ,force: true })
			cy.get('span[translate="nui.frbrversion.found.link"]')
			  .should('have.text','See all versions')
			cy.get('span[translate="nui.frbrversion.found"]')
			  .should('have.text','3 versions of this record exist')
			})
		it('To test single Alma resource (ie no FRBR versions)', function () {
			cy.get('#searchBar').type('morees anzacs{enter}')
			cy.get('prm-brief-result-container')
			  .get('div[id="SEARCH_RESULT_RECORDID_UNSW_ALMA21229856000001731"]')
			  .click({ multiple: true ,force: true })
			cy.location('href').should('eq', 'https://primoauat.library.unsw.edu.au/primo-explore/fulldisplay?docid=UNSW_ALMA21229856000001731&context=L&vid=UNSWS&lang=en_US&search_scope=SearchFirst&adaptor=Local%20Search%20Engine&tab=default_tab&query=any,contains,morees%20anzacs&offset=0')
			})
		it('To test FRBRised PCI  resources - checking the results page )', function () {
			cy.get('#searchBar').type('Climate change resilience of a globally important sea turtle nesting population{enter}')
			cy.get('prm-brief-result-container')
			  .get('div[id="SEARCH_RESULT_RECORDID_TN_medline30567014"]')
			  .click({ multiple: true ,force: true })
			cy.location('href').should('eq', 'https://primoauat.library.unsw.edu.au/primo-explore/fulldisplay?docid=TN_medline30567014&context=PC&vid=UNSWS&lang=en_US&search_scope=SearchFirst&adaptor=primo_central_multiple_fe&tab=default_tab&query=any,contains,Climate%20change%20resilience%20of%20a%20globally%20important%20sea%20turtle%20nesting%20population&offset=0')
			})
		it('To test FRBRised PCI  resources - checking all the versions)', function () {
			cy.get('#searchBar').type('Climate change resilience of a globally important sea turtle nesting population{enter}')
			cy.get('prm-brief-result-container')
			  .get('div[id="SEARCH_RESULT_RECORDID_TN_medline30567014"]')
			  .click()
			cy.get('span[translate="nui.pcgroup.link"]')
			  .should('have.text','See allSee allSee allSee allSee allSee allSee allSee allSee allSee all')
			  .click({ multiple: true ,force: true })
			cy.get('div[class="results-container zero-padding layout-column"]').its('length').then((size) => {
				cy.get('div[class="results-container zero-padding layout-column"]').get('div:nth-child(' + size + ')')
				})
			})
		it('5.	To test a single PCI resource (ie no FRBR versions): )', function () {
			cy.get('#searchBar').type('Elton John confirm tour down under: Elton John will return to Australia at the end of the year for another tour{enter}')
			cy.get('prm-brief-result-container')
			  .get('div[id="SEARCH_RESULT_RECORDID_TN_informit_tvnewsTEV20111804171"]')
			  .click({ multiple: true ,force: true })
			cy.location('href').should('eq', 'https://primoauat.library.unsw.edu.au/primo-explore/fulldisplay?docid=TN_informit_tvnewsTEV20111804171&context=PC&vid=UNSWS&lang=en_US&search_scope=SearchFirst&adaptor=primo_central_multiple_fe&tab=default_tab&query=any,contains,Elton%20John%20confirm%20tour%20down%20under:%20Elton%20John%20will%20return%20to%20Australia%20at%20the%20end%20of%20the%20year%20for%20another%20tour&offset=0')
			})
	})
})

/*describe('Testing Page', function() {

  //urls i need to test
  var relative_urls = [
    '/products/test1',
    '/products/test2',
  ]

  relative_urls.forEach((url) =>  {
  //each url is compared here...
  var productInfo = [];
  //here goes the environments URL.
  var testURL = 'https://www.myurl.com' + url;
  var referenceURL = 'http://test.myurl.com' + url;

  it('Comparing data from url:' + url, function() {

    cy.visit(testURL)
    //get data from selector and add it to array
    cy.get('body').find(".myselector h1").should(($input) => {
      productInfo.push($input.val())
    })
    cy.get('body').find(".myselector h2").should(($input) => {
      productInfo.push($input.val())
    })
    //requesting second url
    cy.request(referenceURL)
    .its('body').should( ($input) => {

      for (var j=0;j<productInfo.length;j++) {
      //expect works, but compares to all site, and i need to search in  a specific selector. 
      //Also, when it gets the first error, it stops and do not search all elements  of array

            expect($input.includes(productInfo[j]), 'Notice: ' + productInfo[j]).to.be.true
          }
        }
      })
   })
 })
})*/