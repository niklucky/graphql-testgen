const post = require('../../helpers/client')
const body = {"query": `query myRouteById ($id: Int!)
{
myRouteById (id: $id) {
      createdAt 
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
coords {lat 
lon 
alt }
routeId 
isNotified 
isWarned }
    }
}`, "variables": `id: 0}`}
test('myRouteById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })