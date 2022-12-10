const post = require('../../helpers/client')
const body = {"query": `query allZones ($query: BaseQueryInput)
{
allZones (query: $query) {
      edges {createdAt 
updatedAt 
id 
deletedAt 
name 
description 
facility {createdAt 
updatedAt 
id 
deletedAt 
name 
description 
address 
}
area {
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
test('allZones query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })