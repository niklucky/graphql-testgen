const post = require('../../helpers/client')
const body = {"query": `mutation deleteZoneById ($id: Int!)
{
deleteZoneById (id: $id) 
}`, "variables": `id: 0}`}
test('deleteZoneById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })