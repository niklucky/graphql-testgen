const post = require('../../helpers/client')
const body = {"query": `mutation deleteUserById ($id: Int!)
{
deleteUserById (id: $id) 
}`, "variables": `id: 0}`}
test('deleteUserById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })