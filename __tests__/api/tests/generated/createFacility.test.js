const post = require('../../helpers/client')
const body = {"query": `mutation createFacility ($data: CreateFacilityInput!)
{
createFacility (data: $data) {
      createdAt 
       updatedAt 
       id 
       deletedAt 
       name 
       description 
       address 
       coords {lat 
lon 
alt }
    }
}`, "variables": `data: {name: "test",
description: "test",
address: "test",
coords: {lat: 0.0,
lon: 0.0,
alt: 0.0}}}`}
test('createFacility query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })