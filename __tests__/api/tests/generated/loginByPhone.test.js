const post = require('../../helpers/client')
const body = {"query": `mutation loginByPhone ($password: String!,$phone: String!)
{
loginByPhone (password: $password,phone: $phone) {
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
       accessToken 
    }
}`, "variables": `password: "test"
phone: "test"}`}
test('loginByPhone query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })