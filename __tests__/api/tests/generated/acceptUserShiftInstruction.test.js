const post = require('../../helpers/client');
const body = {
  query: `mutation acceptUserShiftInstruction ($data: AcceptUserShiftInstructionInput!)
{
acceptUserShiftInstruction (data: $data) {
      createdAt 
       updatedAt 
       id 
       deletedAt 
       userId 
       equipment {createdAt 
updatedAt 
id 
deletedAt 
state 
category {createdAt 
updatedAt 
id 
state 
name 
description 
color 
icon 
parentId 
sortIndex 
deletedAt 
}
values {id 
value 
createdAt 
updatedAt 
}}
       acceptedAt 
       returnedAt 
    }
}`,
  variables: `data: {userShiftId: 0}}`,
};
test('acceptUserShiftInstruction query', async () => {
  const response = await post(body);
  expect(response.status).toBe(200);
});
