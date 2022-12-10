const post = require('../../helpers/client')
const body = {"query": `mutation validatePhone ($code: String,$phone: String!)
{
validatePhone (code: $code,phone: $phone) 
}`, "variables": `code: "test"
phone: "test"}`}
test('validatePhone query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })