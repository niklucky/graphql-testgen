const post = require('../../helpers/client')
const body = {"query": `mutation createEquipmentCategory ($data: CreateEquipmentCategoryInput!)
{
createEquipmentCategory (data: $data) {
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
}`, "variables": `data: {state: "INACTIVE",
name: "test",
parentId: 0,
sortIndex: 0}}`}
test('createEquipmentCategory query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })