const post = require('../../helpers/client')
const body = {"query": `query facilityById ($id: Int!)
{
facilityById (id: $id) {
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
}`, "variables": `id: 0}`}
test('facilityById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })