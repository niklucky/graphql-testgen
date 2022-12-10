const post = require('../../helpers/client')
const body = {"query": `mutation deleteRouteCheckpointById ($id: Int!)
{
deleteRouteCheckpointById (id: $id) 
}`, "variables": `id: 0}`}
test('deleteRouteCheckpointById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })