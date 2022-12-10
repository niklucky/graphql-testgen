const post = require('../../helpers/client')
const body = {"query": `mutation deleteEquipmentCategoryById ($id: Int!)
{
deleteEquipmentCategoryById (id: $id) 
}`, "variables": `id: 0}`}
test('deleteEquipmentCategoryById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })