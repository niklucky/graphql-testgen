const post = require('../../helpers/client')
const body = {"query": `mutation deleteUserDeviceById ($id: Int!)
{
deleteUserDeviceById (id: $id) 
}`, "variables": `id: 0}`}
test('deleteUserDeviceById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })