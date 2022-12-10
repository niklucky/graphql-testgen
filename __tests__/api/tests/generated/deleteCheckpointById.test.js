const post = require('../../helpers/client')
const body = {"query": `mutation deleteCheckpointById ($id: Int!)
{
deleteCheckpointById (id: $id) 
}`, "variables": `id: 0}`}
test('deleteCheckpointById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })