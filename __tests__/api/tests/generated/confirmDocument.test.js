const post = require('../../helpers/client')
const body = {"query": `mutation confirmDocument ($data: ConfirmDocumentInput!)
{
confirmDocument (data: $data) 
}`, "variables": `data: {documentId: 0,
comment: "test"}}`}
test('confirmDocument query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })