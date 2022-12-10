const post = require('../../helpers/client')
const body = {"query": `mutation checkInPoint ($checkpointId: Int!)
{
checkInPoint (checkpointId: $checkpointId) {
      createdAt 
       updatedAt 
       id 
       deletedAt 
       state 
       comment 
       time 
       finishedAt 
       noPenaltyTime 
       checkpointId 
       checkpoint {createdAt 
updatedAt 
id 
deletedAt 
name 
test 
description 
deviceId 
zoneId 
coords {lat 
lon 
alt }
zone {createdAt 
updatedAt 
id 
deletedAt 
name 
description 

}}
       coords {lat 
lon 
alt }
       routeId 
       isNotified 
       isWarned 
    }
}`, "variables": `checkpointId: 0}`}
test('checkInPoint query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })