const post = require('../../helpers/client')
const body = {"query": `query taskById ($id: Int!)
{
taskById (id: $id) {
      id 
       name 
       description 
       plannedDuration 
    }
}`, "variables": `id: 0}`}
test('taskById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })