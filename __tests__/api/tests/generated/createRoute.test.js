const post = require('../../helpers/client')
const body = {"query": `mutation createRoute ($data: CreateRouteInput!)
{
createRoute (data: $data) {
      createdAt 
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
facility {createdAt 
updatedAt 
id 
deletedAt 
name 
description 
address 
}
area {
}}
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
checkpoint {createdAt 
updatedAt 
id 
deletedAt 
name 
test 
description 
deviceId 
zoneId 

}
routeId 
route {createdAt 
updatedAt 
id 
deletedAt 
name 
description 
zoneId 

durationBefore 
durationAfter 
}}
    }
}`, "variables": `data: {name: "test",
description: "test",
zoneId: 0,
durationBefore: 0,
durationAfter: 0}}`}
test('createRoute query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })