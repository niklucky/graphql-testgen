const post = require('../../helpers/client')
const body = {"query": `mutation declineDocumentValue ($data: ConfirmDocumentValueInput!)
{
declineDocumentValue (data: $data) 
}`, "variables": `data: {documentId: 0,
fieldId: 0}}`}
test('declineDocumentValue query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })