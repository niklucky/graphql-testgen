const post = require('../../helpers/client')
const body = {"query": `mutation confirmDocumentValue ($data: ConfirmDocumentValueInput!)
{
confirmDocumentValue (data: $data) 
}`, "variables": `data: {documentId: 0,
fieldId: 0}}`}
test('confirmDocumentValue query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })