const post = require('../../helpers/client')
const body = {"query": `mutation updateRoute ($data: UpdateRouteInput!,$id: Int!)
{
updateRoute (data: $data,id: $id) {
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
durationAfter: 0}
id: 0}`}
test('updateRoute query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })