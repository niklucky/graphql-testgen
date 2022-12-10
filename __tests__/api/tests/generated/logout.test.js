const post = require('../../helpers/client')
const body = {"query": `mutation logout 
{
logout  
}`, "variables": `}`}
test('logout query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })