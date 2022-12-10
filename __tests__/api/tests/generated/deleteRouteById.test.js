const post = require('../../helpers/client')
const body = {"query": `mutation deleteRouteById ($id: Int!)
{
deleteRouteById (id: $id) 
}`, "variables": `id: 0}`}
test('deleteRouteById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })