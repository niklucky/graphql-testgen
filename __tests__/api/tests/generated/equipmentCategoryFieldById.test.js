const post = require('../../helpers/client')
const body = {"query": `query equipmentCategoryFieldById ($id: Int!)
{
equipmentCategoryFieldById (id: $id) {
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
    }
}`, "variables": `id: 0}`}
test('equipmentCategoryFieldById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })