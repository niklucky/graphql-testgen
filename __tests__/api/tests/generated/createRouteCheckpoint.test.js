const post = require('../../helpers/client')
const body = {"query": `mutation createRouteCheckpoint ($data: CreateRouteCheckpointInput!)
{
createRouteCheckpoint (data: $data) {
      createdAt 
       updatedAt 
       id 
       deletedAt 
       state 
       comment 
       time 
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
       routeId 
       route {createdAt 
updatedAt 
id 
deletedAt 
name 
description 
zoneId 
zone {createdAt 
updatedAt 
id 
deletedAt 
name 
description 

}
durationBefore 
durationAfter 
checkpoints {createdAt 
updatedAt 
id 
deletedAt 
state 
comment 
time 
noPenaltyTime 
checkpointId 

routeId 
}}
    }
}`, "variables": `data: {routeId: 0,
checkpointId: 0,
time: 0,
comment: "test",
noPenaltyTime: 0}}`}
test('createRouteCheckpoint query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })