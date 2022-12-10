const post = require('../../helpers/client')
const body = {"query": `query timeSlotById ($id: Int!)
{
timeSlotById (id: $id) {
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
}`, "variables": `id: 0}`}
test('timeSlotById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })