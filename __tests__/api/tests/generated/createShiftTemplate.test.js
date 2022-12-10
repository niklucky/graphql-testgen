const post = require('../../helpers/client')
const body = {"query": `mutation createShiftTemplate ($data: CreateShiftTemplateInput!)
{
createShiftTemplate (data: $data) {
      createdAt 
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
       instruction {createdAt 
updatedAt 
id 
deletedAt 
name 
text }
    }
}`, "variables": `data: {name: "test",
description: "test",
days: 0}}`}
test('createShiftTemplate query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })