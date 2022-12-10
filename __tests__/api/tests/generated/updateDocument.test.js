const post = require('../../helpers/client')
const body = {"query": `mutation updateDocument ($data: CreateMyDocumentInput!,$id: Int!)
{
updateDocument (data: $data,id: $id) {
      createdAt 
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
documents {createdAt 
updatedAt 
id 
deletedAt 
state 



isValidated 
isExpired }
userEquipments {createdAt 
updatedAt 
id 
deletedAt 

equipmentId }}
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
       values {id 
value 
createdAt 
updatedAt 
field {id 
dataType 
name 
options 
title 
sortIndex 
group 

categoryId }
isValidated }
       isValidated 
       isExpired 
    }
}`, "variables": `data: {categoryId: 0}
id: 0}`}
test('updateDocument query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })