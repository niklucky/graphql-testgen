const post = require('../../helpers/client')
const body = {"query": `mutation deleteShiftTemplateById ($id: Int!)
{
deleteShiftTemplateById (id: $id) 
}`, "variables": `id: 0}`}
test('deleteShiftTemplateById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })