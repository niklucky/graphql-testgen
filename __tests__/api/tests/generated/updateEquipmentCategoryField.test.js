const post = require('../../helpers/client')
const body = {"query": `mutation updateEquipmentCategoryField ($data: UpdateEquipmentCategoryFieldInput!,$id: Int!)
{
updateEquipmentCategoryField (data: $data,id: $id) {
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
}`, "variables": `data: {dataType: "NUMBER",
name: "test",
options: "test",
title: "test",
sortIndex: 0,
group: "test",
validation: {min: 0,
max: 0,
isRequired: false,
mask: "test"}}
id: 0}`}
test('updateEquipmentCategoryField query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })