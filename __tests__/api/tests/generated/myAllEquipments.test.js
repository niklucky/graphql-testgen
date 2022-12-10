const post = require('../../helpers/client')
const body = {"query": `query myAllEquipments ($query: BaseQueryInput)
{
myAllEquipments (query: $query) {
      edges {createdAt 
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
}
values {id 
value 
createdAt 
updatedAt 
}}
       total 
       limit 
       cursor 
    }
}`, "variables": `query: {filters: {field: "test",
value: "test",
isExclude: false,
isRange: false,
isSearch: false},
sort: {field: "test",
direction: "ASC"},
limit: 0,
cursor: 0,
search: "test"}}`}
test('myAllEquipments query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })