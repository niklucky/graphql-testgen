const post = require('../../helpers/client')
const body = {"query": `mutation updateEquipmentCategory ($data: UpdateEquipmentCategoryInput!,$id: Int!)
{
updateEquipmentCategory (data: $data,id: $id) {
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
}`, "variables": `data: {state: "test",
name: "test",
parentId: 0,
sortIndex: 0}
id: 0}`}
test('updateEquipmentCategory query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })