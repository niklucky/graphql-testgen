const post = require('../../helpers/client')
const body = {"query": `mutation deleteTimeSlotById ($id: Int!)
{
deleteTimeSlotById (id: $id) 
}`, "variables": `id: 0}`}
test('deleteTimeSlotById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })