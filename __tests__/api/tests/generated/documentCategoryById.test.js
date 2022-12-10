const post = require('../../helpers/client')
const body = {"query": `query documentCategoryById ($id: Int!)
{
documentCategoryById (id: $id) {
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
}`, "variables": `id: 0}`}
test('documentCategoryById query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })