const post = require('../../helpers/client')
const body = {"query": `mutation deleteTaskById ($id: Int!)
{
deleteTaskById (id: $id) 
}`, "variables": `id: 0}`}
test('deleteTaskById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })