const post = require('../../helpers/client')
const body = {"query": `query allUserDevices ($query: BaseQueryInput)
{
allUserDevices (query: $query) {
      edges {createdAt 
updatedAt 
id 
deletedAt 
user {createdAt 
updatedAt 
id 
deletedAt 
state 
uuid 
phone 
isPhoneVerified 
isRequiredDocumentsUploaded 
email 
isEmailVerified 
firstName 
middleName 
lastName 
avatar 

}
deviceId 
localeId 
installId 
bundleId 
brand 
name 
deviceModel 
installReferrer 
vendor 
os 
osVersion 
appVersion 
httpAgent 
pushToken 
pushTokenType }
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
test('allUserDevices query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })