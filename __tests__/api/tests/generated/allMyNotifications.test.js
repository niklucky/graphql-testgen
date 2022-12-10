const post = require('../../helpers/client')
const body = {"query": `query allMyNotifications 
{
allMyNotifications  {
      createdAt 
       updatedAt 
       id 
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
       title 
       body 
       messageId 
       device {createdAt 
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
pushTokenType }
       state 
    }
}`, "variables": `}`}
test('allMyNotifications query', async () => {
        const response = await post(body)
        expect(response.status).toBe(200)
      })