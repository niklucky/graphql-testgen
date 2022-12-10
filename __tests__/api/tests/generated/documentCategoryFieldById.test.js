const post = require('../../helpers/client')
const body = {"query": `query documentCategoryFieldById ($id: Int!)
{
documentCategoryFieldById (id: $id) {
      id 
       dataType 
       name 
       options 
       title 
       sortIndex 
       group 
       validation {min 
max 
isRequired 
mask }
       categoryId 
    }
}`, "variables": `id: 0}`}
test('documentCategoryFieldById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })