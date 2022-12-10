const post = require('../../helpers/client')
const body = {"query": `mutation createUserShiftTemplate ($data: CreateUserShiftTemplateInput!)
{
createUserShiftTemplate (data: $data) {
      createdAt 
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
       name 
       description 
       state 
       duration 
       equipments {createdAt 
updatedAt 
id 
deletedAt 
userId 
equipment {createdAt 
updatedAt 
id 
deletedAt 
state 

}
acceptedAt 
returnedAt }
    }
}`, "variables": `data: {name: "test",
description: "test",
shiftTemplateId: 0}}`}
test('createUserShiftTemplate query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })