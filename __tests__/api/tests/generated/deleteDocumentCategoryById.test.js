const post = require('../../helpers/client')
const body = {"query": `mutation deleteDocumentCategoryById ($id: Int!)
{
deleteDocumentCategoryById (id: $id) 
}`, "variables": `id: 0}`}
test('deleteDocumentCategoryById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })