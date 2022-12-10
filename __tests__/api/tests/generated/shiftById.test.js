const post = require('../../helpers/client')
const body = {"query": `query shiftById ($id: Int!)
{
shiftById (id: $id) {
      createdAt 
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
    }
}`, "variables": `id: 0}`}
test('shiftById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })