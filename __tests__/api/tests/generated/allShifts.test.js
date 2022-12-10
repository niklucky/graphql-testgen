const post = require('../../helpers/client')
const body = {"query": `query allShifts ($query: BaseQueryInput)
{
allShifts (query: $query) {
      edges {createdAt 
updatedAt 
id 
deletedAt 
name 
instruction {createdAt 
updatedAt 
id 
deletedAt 
name 
text }
date 
userShifts {createdAt 
updatedAt 
id 
deletedAt 
userId 
facilityId 

instructionsAcceptedAt 
date 
sentryUserId 


name 
description 
state 
duration 
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
test('allShifts query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })