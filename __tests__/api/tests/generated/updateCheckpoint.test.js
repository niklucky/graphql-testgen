const post = require('../../helpers/client')
const body = {"query": `mutation updateCheckpoint ($data: UpdateCheckpointInput!,$id: Int!)
{
updateCheckpoint (data: $data,id: $id) {
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
deviceId: "test",
coords: {lat: 0.0,
lon: 0.0,
alt: 0.0},
zoneId: 0}
id: 0}`}
test('updateCheckpoint query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })