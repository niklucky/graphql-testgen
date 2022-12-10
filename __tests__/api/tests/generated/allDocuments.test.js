const post = require('../../helpers/client')
const body = {"query": `query allDocuments ($query: BaseQueryInput)
{
allDocuments (query: $query) {
      edges {createdAt 
updatedAt 
id 
deletedAt 
state 
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
category {createdAt 
updatedAt 
id 
state 
name 
description 
color 
icon 
parentId 
sortIndex 
deletedAt 


isMain 
isPublic 
isRequired 
expireDateFieldId }
values {id 
value 
createdAt 
updatedAt 

isValidated }
isValidated 
isExpired }
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
test('allDocuments query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })