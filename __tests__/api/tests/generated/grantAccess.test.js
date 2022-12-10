const post = require('../../helpers/client')
const body = {"query": `mutation grantAccess ($aclId: [String!]!,$userId: Int!)
{
grantAccess (aclId: $aclId,userId: $userId) 
}`, "variables": `aclId: "test"
userId: 0}`}
test('grantAccess query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })