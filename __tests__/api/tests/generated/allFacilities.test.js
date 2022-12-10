const post = require('../../helpers/client')
const body = {"query": `query allFacilities ($query: BaseQueryInput)
{
allFacilities (query: $query) {
      edges {createdAt 
updatedAt 
id 
deletedAt 
name 
description 
address 
coords {lat 
lon 
alt }}
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
test('allFacilities query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })