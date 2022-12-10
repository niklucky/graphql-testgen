const post = require('../../helpers/client')
const body = {"query": `mutation updateShift ($data: CreateShiftInput!,$id: Int!)
{
updateShift (data: $data,id: $id) {
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
}`, "variables": `data: {name: "test",
description: "test",
date: "2021-01-01T00:00:00.000Z",
days: 0}
id: 0}`}
test('updateShift query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })