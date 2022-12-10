const post = require('../../helpers/client')
const body = {"query": `mutation deleteShiftById ($id: Int!)
{
deleteShiftById (id: $id) 
}`, "variables": `id: 0}`}
test('deleteShiftById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })