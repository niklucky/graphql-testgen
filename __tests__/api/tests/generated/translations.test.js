const post = require('../../helpers/client')
const body = {"query": `query translations ($locale: String,$channel: String)
{
translations (locale: $locale,channel: $channel) {
      id 
       channel 
       localeId 
       key 
       value 
       createdAt 
       updatedAt 
    }
}`, "variables": `locale: "test"
channel: "test"}`}
test('translations query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })