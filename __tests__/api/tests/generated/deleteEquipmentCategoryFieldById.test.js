const post = require('../../helpers/client')
const body = {"query": `mutation deleteEquipmentCategoryFieldById ($id: Int!)
{
deleteEquipmentCategoryFieldById (id: $id) 
}`, "variables": `id: 0}`}
test('deleteEquipmentCategoryFieldById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })