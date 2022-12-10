const post = require('../../helpers/client')
const body = {"query": `mutation updateDocumentCategoryField ($data: CreateDocumentCategoryFieldInput!,$id: Int!)
{
updateDocumentCategoryField (data: $data,id: $id) {
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
}`, "variables": `data: {categoryId: 0,
dataType: "NUMBER",
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
test('updateDocumentCategoryField query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })