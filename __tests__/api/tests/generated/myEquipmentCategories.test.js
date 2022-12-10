const post = require('../../helpers/client')
const body = {"query": `query myEquipmentCategories 
{
myEquipmentCategories  {
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
}`, "variables": `}`}
test('myEquipmentCategories query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })