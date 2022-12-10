const post = require('../../helpers/client')
const body = {"query": `mutation saveUserDevice ($data: SaveUserDeviceInput!)
{
saveUserDevice (data: $data) {
      createdAt 
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
       pushTokenType 
    }
}`, "variables": `data: {deviceId: "test",
localeId: 0,
installId: "test",
bundleId: "test",
brand: "test",
name: "test",
deviceModel: "test",
installReferrer: "test",
vendor: "test",
os: "test",
osVersion: "test",
appVersion: "test",
httpAgent: "test",
pushToken: "test",
pushTokenType: "Firebase"}}`}
test('saveUserDevice query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })