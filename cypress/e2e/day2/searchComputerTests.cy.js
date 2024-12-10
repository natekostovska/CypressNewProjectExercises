import computerDatabasePage from '../../pages/computerDatabasePage'

describe('Add Computer Tests', () => {
    require('../../utilities/testSetup.cy')
    it('Search for computers containing ACE in their name', () => {
        computerDatabasePage.sendSearchText()
        computerDatabasePage.searchComputers()
        computerDatabasePage.lengthOfRowCount(6)
        const elm = computerDatabasePage.message() 

          // Check if elm is valid and contains text
          if (elm && elm.text()) {
            // Parse the result count from the text 
            const resultCount = parseInt(elm.text().split(' ')[0])

            // Update row count based on the result count
            computerDatabasePage.lengthOfRowCount(resultCount)
        } else {
            console.error("Error: Message element is empty or undefined.")
        }
    })
})