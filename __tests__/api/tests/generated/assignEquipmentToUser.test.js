const post = require('../../helpers/client')
const body = {"query": `mutation assignEquipmentToUser ($data: CreateUserEquipmentInput!)
{
assignEquipmentToUser (data: $data) {
      createdAt 
       updatedAt 
       id 
       deletedAt 
       assignorId 
       assigneeId 
       userEquipmentId 
       act 
    }
}`, "variables": `data: {user: {id: 0},
equipmentId: 0}}`}
test('assignEquipmentToUser query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })