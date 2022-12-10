const post = require('../../helpers/client')
const body = {"query": `mutation deleteUserShiftById ($id: Int!)
{
deleteUserShiftById (id: $id) 
}`, "variables": `id: 0}`}
test('deleteUserShiftById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })