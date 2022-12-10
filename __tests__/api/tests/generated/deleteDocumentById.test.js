const post = require('../../helpers/client')
const body = {"query": `mutation deleteDocumentById ($id: Int!)
{
deleteDocumentById (id: $id) 
}`, "variables": `id: 0}`}
test('deleteDocumentById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })