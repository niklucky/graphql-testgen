const post = require('../../helpers/client')
const body = {"query": `mutation updateZone ($data: UpdateZoneInput!,$id: Int!)
{
updateZone (data: $data,id: $id) {
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
alt: 0.0}}}
id: 0}`}
test('updateZone query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })