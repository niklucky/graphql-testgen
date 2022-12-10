const post = require('../../helpers/client')
const body = {"query": `mutation returnUserShiftEquipment ($data: UserShiftEquipmentStateInput!)
{
returnUserShiftEquipment (data: $data) 
}`, "variables": `data: {userShiftId: 0,
equipmentIdx: 0}}`}
test('returnUserShiftEquipment query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })