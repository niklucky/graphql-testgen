const post = require('../../helpers/client')
const body = {"query": `mutation updateTask ($data: UpdateTaskInput!,$id: Int!)
{
updateTask (data: $data,id: $id) {
      id 
       name 
       description 
       plannedDuration 
    }
}`, "variables": `data: {name: "test",
description: "test",
plannedDuration: 0}
id: 0}`}
test('updateTask query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })