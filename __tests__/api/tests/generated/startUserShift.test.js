const post = require('../../helpers/client')
const body = {"query": `mutation startUserShift ($id: Int!)
{
startUserShift (id: $id) {
      createdAt 
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
coords {lat 
lon 
alt }}
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
}`, "variables": `id: 0}`}
test('startUserShift query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })