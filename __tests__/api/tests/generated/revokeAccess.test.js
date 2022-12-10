const post = require('../../helpers/client')
const body = {"query": `mutation revokeAccess ($aclId: [String!]!,$userId: Int!)
{
revokeAccess (aclId: $aclId,userId: $userId) 
}`, "variables": `aclId: "test"
userId: 0}`}
test('revokeAccess query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })