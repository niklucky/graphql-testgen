const post = require('../../helpers/client')
const body = {"query": `query allRoutes ($query: BaseQueryInput)
{
allRoutes (query: $query) {
      edges {createdAt 
updatedAt 
id 
deletedAt 
name 
description 
zoneId 
zone {createdAt 
updatedAt 
id 
deletedAt 
name 
description 

}
durationBefore 
durationAfter 
checkpoints {createdAt 
updatedAt 
id 
deletedAt 
state 
comment 
time 
noPenaltyTime 
checkpointId 

routeId 
}}
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
test('allRoutes query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })