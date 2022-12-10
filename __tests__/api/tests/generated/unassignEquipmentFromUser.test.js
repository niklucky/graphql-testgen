const post = require('../../helpers/client')
const body = {"query": `mutation unassignEquipmentFromUser ($id: Int!)
{
unassignEquipmentFromUser (id: $id) {
      createdAt 
       updatedAt 
       id 
       deletedAt 
       assignorId 
       assigneeId 
       userEquipmentId 
       act 
    }
}`, "variables": `id: 0}`}
test('unassignEquipmentFromUser query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })