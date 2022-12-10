const post = require('../../helpers/client')
const body = {"query": `query shiftTemplateById ($id: Int!)
{
shiftTemplateById (id: $id) {
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
}`, "variables": `id: 0}`}
test('shiftTemplateById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })