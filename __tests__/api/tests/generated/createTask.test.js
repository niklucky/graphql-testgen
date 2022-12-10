const post = require('../../helpers/client')
const body = {"query": `mutation createTask ($data: CreateTaskInput!)
{
createTask (data: $data) {
      id 
       name 
       description 
       plannedDuration 
    }
}`, "variables": `data: {name: "test",
startDate: "2021-01-01T00:00:00.000Z",
dueDate: "2021-01-01T00:00:00.000Z",
description: "test",
plannedDuration: 0}}`}
test('createTask query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })