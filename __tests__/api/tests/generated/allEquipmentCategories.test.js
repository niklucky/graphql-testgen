const post = require('../../helpers/client')
const body = {"query": `query allEquipmentCategories ($query: BaseQueryInput)
{
allEquipmentCategories (query: $query) {
      edges {createdAt 
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
test('allEquipmentCategories query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })