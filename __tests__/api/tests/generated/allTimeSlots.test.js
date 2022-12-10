const post = require('../../helpers/client')
const body = {"query": `query allTimeSlots ($query: BaseQueryInput)
{
allTimeSlots (query: $query) {
      edges {createdAt 
updatedAt 
id 
name 
description 
time 
duration 
taskId 
task {id 
name 
description 
plannedDuration }
route {createdAt 
updatedAt 
id 
deletedAt 
name 
description 
zoneId 
durationBefore 
durationAfter 
}
deletedAt 
state 
userId }
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
test('allTimeSlots query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })