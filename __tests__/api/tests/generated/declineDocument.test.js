const post = require('../../helpers/client')
const body = {"query": `mutation declineDocument ($data: ConfirmDocumentInput!)
{
declineDocument (data: $data) 
}`, "variables": `data: {documentId: 0,
comment: "test"}}`}
test('declineDocument query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })