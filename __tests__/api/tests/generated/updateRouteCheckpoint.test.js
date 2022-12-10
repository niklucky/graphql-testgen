const post = require('../../helpers/client')
const body = {"query": `mutation updateRouteCheckpoint ($data: UpdateRouteCheckpointInput!,$id: Int!)
{
updateRouteCheckpoint (data: $data,id: $id) {
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
}`, "variables": `data: {comment: "test",
time: 0,
noPenaltyTime: 0,
routeId: 0,
checkpointId: 0}
id: 0}`}
test('updateRouteCheckpoint query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })