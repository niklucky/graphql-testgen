const post = require('../../helpers/client')
const body = {"query": `mutation createZone ($data: CreateZoneInput!)
{
createZone (data: $data) {
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
}`, "variables": `data: {name: "test",
description: "test",
facilityId: 0,
area: {coords: {lat: 0.0,
lon: 0.0,
alt: 0.0},
holes: {lat: 0.0,
lon: 0.0,
alt: 0.0}}}}`}
test('createZone query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })