const post = require('../../helpers/client')
const body = {"query": `mutation createDocumentCategory ($data: CreateDocumentCategoryInput!)
{
createDocumentCategory (data: $data) {
      createdAt 
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
validation {min 
max 
isRequired 
mask }
categoryId }
       documents {createdAt 
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
       isMain 
       isPublic 
       isRequired 
       expireDateFieldId 
    }
}`, "variables": `data: {state: "INACTIVE",
name: "test",
parentId: 0,
sortIndex: 0,
isMain: false,
isPublic: false,
isRequired: false,
expireDateFieldId: 0}}`}
test('createDocumentCategory query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })