const post = require('../../helpers/client')
const body = {"query": `query translationsUpdatedAt ($channel: String!)
{
translationsUpdatedAt (channel: $channel) 
}`, "variables": `channel: "test"}`}
test('translationsUpdatedAt query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })