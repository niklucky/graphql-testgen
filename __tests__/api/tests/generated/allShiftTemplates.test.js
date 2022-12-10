const post = require('../../helpers/client')
const body = {"query": `query allShiftTemplates ($query: BaseQueryInput)
{
allShiftTemplates (query: $query) {
      edges {createdAt 
updatedAt 
id 
deletedAt 
name 
days 
userShifts {createdAt 
updatedAt 
id 
deletedAt 
date 
shiftId 



name 
description 
state 
duration 
}
instruction {createdAt 
updatedAt 
id 
deletedAt 
name 
text }}
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
test('allShiftTemplates query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })