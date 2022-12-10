const post = require('../../helpers/client')
const body = {"query": `query checkpointById ($id: Int!)
{
checkpointById (id: $id) {
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
}`, "variables": `id: 0}`}
test('checkpointById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })