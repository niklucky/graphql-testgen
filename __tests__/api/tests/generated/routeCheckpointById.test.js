const post = require('../../helpers/client')
const body = {"query": `query routeCheckpointById ($id: Int!)
{
routeCheckpointById (id: $id) {
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
}`, "variables": `id: 0}`}
test('routeCheckpointById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })