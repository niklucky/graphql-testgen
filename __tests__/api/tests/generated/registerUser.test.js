const post = require('../../helpers/client')
const body = {"query": `mutation registerUser ($data: RegisterUserInput!)
{
registerUser (data: $data) {
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
}`, "variables": `data: {phone: "test",
password: "test"}}`}
test('registerUser query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })