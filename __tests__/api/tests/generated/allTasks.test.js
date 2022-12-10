const post = require('../../helpers/client')
const body = {"query": `query allTasks ($query: BaseQueryInput)
{
allTasks (query: $query) {
      edges {id 
name 
description 
plannedDuration }
       total 
       limit 
       cursor 
    }
}`, "variables": `query: {filters: {field: "test",
value: "test",
isExclude: false,
isRange: false,
isSearch: false},
sort: {field: "test",
direction: "ASC"},
limit: 0,
cursor: 0,
search: "test"}}`}
test('allTasks query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })