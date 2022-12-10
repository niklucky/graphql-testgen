const post = require('../../helpers/client')
const body = {"query": `mutation deleteDocumentCategoryFieldById ($id: Int!)
{
deleteDocumentCategoryFieldById (id: $id) 
}`, "variables": `id: 0}`}
test('deleteDocumentCategoryFieldById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })