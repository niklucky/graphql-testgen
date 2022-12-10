const post = require('../../helpers/client')
const body = {"query": `mutation createEquipment ($data: CreateEquipmentInput!)
{
createEquipment (data: $data) {
      createdAt 
       updatedAt 
       id 
       deletedAt 
       state 
       category {createdAt 
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
}}
       values {id 
value 
createdAt 
updatedAt 
field {id 
dataType 
name 
options 
title 
sortIndex 
group 
}}
    }
}`, "variables": `data: {categoryId: 0,
values: {fieldId: 0,
value: "test"}}}`}
test('createEquipment query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })