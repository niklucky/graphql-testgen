const post = require('../../helpers/client')
const body = {"query": `mutation createDocumentCategoryField ($data: CreateDocumentCategoryFieldInput!)
{
createDocumentCategoryField (data: $data) {
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
mask: "test"}}}`}
test('createDocumentCategoryField query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })