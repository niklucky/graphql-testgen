const post = require('../../helpers/client')
const body = {"query": `mutation updateUser ($data: UpdateUserInput!,$id: Int!)
{
updateUser (data: $data,id: $id) {
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
}`, "variables": `data: {avatar: "test",
firstName: "test",
lastName: "test"}
id: 0}`}
test('updateUser query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })