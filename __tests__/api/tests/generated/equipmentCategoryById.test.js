const post = require('../../helpers/client')
const body = {"query": `query equipmentCategoryById ($id: Int!)
{
equipmentCategoryById (id: $id) {
      createdAt 
       updatedAt 
       id 
       state 
       name 
       description 
       color 
       icon 
       parentId 
       sortIndex 
       deletedAt 
       fields {id 
dataType 
name 
options 
title 
sortIndex 
group 
validation {min 
max 
isRequired 
mask }}
    }
}`, "variables": `id: 0}`}
test('equipmentCategoryById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })