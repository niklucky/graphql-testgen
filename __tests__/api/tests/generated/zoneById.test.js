const post = require('../../helpers/client')
const body = {"query": `query zoneById ($id: Int!)
{
zoneById (id: $id) {
      createdAt 
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
coords {lat 
lon 
alt }}
       area {coords {lat 
lon 
alt }
holes {lat 
lon 
alt }}
    }
}`, "variables": `id: 0}`}
test('zoneById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })