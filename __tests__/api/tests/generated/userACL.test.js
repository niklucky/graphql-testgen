const post = require('../../helpers/client')
const body = {"query": `query userACL ($userId: Int!)
{
userACL (userId: $userId) {
      createdAt 
       updatedAt 
       id 
       userId 
       acl {createdAt 
updatedAt 
id 
parentId }
    }
}`, "variables": `userId: 0}`}
test('userACL query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })