const post = require('../../helpers/client')
const body = {"query": `query allRouteCheckpoints ($query: BaseQueryInput)
{
allRouteCheckpoints (query: $query) {
      edges {createdAt 
updatedAt 
id 
deletedAt 
state 
comment 
time 
noPenaltyTime 
checkpointId 
checkpoint {createdAt 
updatedAt 
id 
deletedAt 
name 
test 
description 
deviceId 
zoneId 

}
routeId 
route {createdAt 
updatedAt 
id 
deletedAt 
name 
description 
zoneId 

durationBefore 
durationAfter 
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
test('allRouteCheckpoints query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })