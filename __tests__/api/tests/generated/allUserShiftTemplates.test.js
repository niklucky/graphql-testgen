const post = require('../../helpers/client')
const body = {"query": `query allUserShiftTemplates ($query: BaseQueryInput)
{
allUserShiftTemplates (query: $query) {
      edges {createdAt 
updatedAt 
id 
deletedAt 
date 
shiftId 
shift {createdAt 
updatedAt 
id 
deletedAt 
name 
days 

}
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
test('allUserShiftTemplates query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })