const post = require('../../helpers/client')
const body = {"query": `mutation updateFacility ($data: UpdateFacilityInput!,$id: Int!)
{
updateFacility (data: $data,id: $id) {
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
alt: 0.0}}
id: 0}`}
test('updateFacility query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })