const post = require('../../helpers/client')
const body = {"query": `mutation resetPassword ($password: String,$code: String,$phone: String!)
{
resetPassword (password: $password,code: $code,phone: $phone) 
}`, "variables": `password: "test"
code: "test"
phone: "test"}`}
test('resetPassword query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })