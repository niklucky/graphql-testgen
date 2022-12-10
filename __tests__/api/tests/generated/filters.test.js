const post = require('../../helpers/client')
const body = {"query": `query filters ($queryName: String!)
{
filters (queryName: $queryName) {
      field 
       dataType 
       isRangeAvailable 
       isExcludeAvailable 
       options {id 
name }
       min 
       max 
       step 
    }
}`, "variables": `queryName: "test"}`}
test('filters query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })