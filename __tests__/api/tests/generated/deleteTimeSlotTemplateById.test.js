const post = require('../../helpers/client')
const body = {"query": `mutation deleteTimeSlotTemplateById ($id: Int!)
{
deleteTimeSlotTemplateById (id: $id) 
}`, "variables": `id: 0}`}
test('deleteTimeSlotTemplateById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })