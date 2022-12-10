const post = require('../../helpers/client')
const body = {"query": `query allEquipmentCategoryFields ($query: BaseQueryInput)
{
allEquipmentCategoryFields (query: $query) {
      edges {id 
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
test('allEquipmentCategoryFields query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })