const post = require('../../helpers/client')
const body = {"query": `mutation updateTimeSlot ($data: CreateTimeSlotInput!,$id: Int!)
{
updateTimeSlot (data: $data,id: $id) {
      createdAt 
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
routeCheckpoints {createdAt 
updatedAt 
id 
deletedAt 
state 
comment 
time 
finishedAt 
noPenaltyTime 
checkpointId 


routeId 
isNotified 
isWarned }}
       deletedAt 
       state 
       userId 
    }
}`, "variables": `data: {name: "test",
description: "test",
time: "2021-01-01T00:00:00.000Z",
duration: 0,
entityType: "TASK",
entityId: 0,
userId: 0}
id: 0}`}
test('updateTimeSlot query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })