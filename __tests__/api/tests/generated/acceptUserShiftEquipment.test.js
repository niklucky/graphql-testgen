const post = require('../../helpers/client');
const body = {
  query: `mutation acceptUserShiftEquipment ($data: UserShiftEquipmentStateInput!)
{
acceptUserShiftEquipment (data: $data) 
}`,
  variables: `data: {userShiftId: 0,
equipmentIdx: 0}}`,
};
test('acceptUserShiftEquipment query', async () => {
  const response = await post(body);
  expect(response.status).toBe(200);
});
