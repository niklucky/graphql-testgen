const post = require('../../helpers/client')
const body = {"query": `mutation saveTranslation ($data: SaveTranslationInput!)
{
saveTranslation (data: $data) {
      id 
       channel 
       localeId 
       key 
       value 
       createdAt 
       updatedAt 
    }
}`, "variables": `data: {locale: "test",
key: "test",
channel: "test",
value: "test"}}`}
test('saveTranslation query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })