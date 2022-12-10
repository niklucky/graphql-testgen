const post = require('../../helpers/client')
const body = {"query": `query allDocumentCategories ($query: BaseQueryInput)
{
allDocumentCategories (query: $query) {
      edges {createdAt 
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
fields {id 
dataType 
name 
options 
title 
sortIndex 
group 

categoryId }
documents {createdAt 
updatedAt 
id 
deletedAt 
state 



isValidated 
isExpired }
isMain 
isPublic 
isRequired 
expireDateFieldId }
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
test('allDocumentCategories query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })