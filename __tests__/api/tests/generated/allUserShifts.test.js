const post = require('../../helpers/client')
const body = {"query": `query allUserShifts ($query: BaseQueryInput)
{
allUserShifts (query: $query) {
      edges {createdAt 
updatedAt 
id 
deletedAt 
userId 
facilityId 
facility {createdAt 
updatedAt 
id 
deletedAt 
name 
description 
address 
}
instructionsAcceptedAt 
date 
sentryUserId 
instruction {createdAt 
updatedAt 
id 
deletedAt 
name 
text }
timeSlots {createdAt 
updatedAt 
id 
name 
description 
time 
duration 
taskId 


deletedAt 
state 
userId }
name 
description 
state 
duration 
equipments {createdAt 
updatedAt 
id 
deletedAt 
userId 

acceptedAt 
returnedAt }}
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
test('allUserShifts query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })