const post = require('../../helpers/client')
const body = {"query": `query ACL 
{
ACL  {
      createdAt 
       updatedAt 
       id 
       parentId 
    }
}`, "variables": `}`}
test('ACL query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })