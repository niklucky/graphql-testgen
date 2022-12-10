const post = require('../../helpers/client')
const body = {"query": `mutation deleteFacilityById ($id: Int!)
{
deleteFacilityById (id: $id) 
}`, "variables": `id: 0}`}
test('deleteFacilityById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })