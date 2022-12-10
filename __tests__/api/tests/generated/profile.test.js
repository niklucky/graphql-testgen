const post = require('../../helpers/client')
const body = {"query": `query profile 
{
profile  {
      createdAt 
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
       userEquipments {createdAt 
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
equipmentId }
    }
}`, "variables": `}`}
test('profile query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })