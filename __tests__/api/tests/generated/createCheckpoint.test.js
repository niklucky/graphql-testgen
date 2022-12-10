const post = require('../../helpers/client')
const body = {"query": `mutation createCheckpoint ($data: CreateCheckpointInput!)
{
createCheckpoint (data: $data) {
      createdAt 
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
    }
}`, "variables": `data: {name: "test",
description: "test",
coords: {lat: 0.0,
lon: 0.0,
alt: 0.0},
zoneId: 0,
deviceId: "test"}}`}
test('createCheckpoint query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })