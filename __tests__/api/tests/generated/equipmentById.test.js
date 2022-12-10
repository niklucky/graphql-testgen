const post = require('../../helpers/client')
const body = {"query": `query equipmentById ($id: Int!)
{
equipmentById (id: $id) {
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
}`, "variables": `id: 0}`}
test('equipmentById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })