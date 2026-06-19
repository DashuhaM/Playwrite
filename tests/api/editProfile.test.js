import { test, expect } from '@playwright/test'


test.describe('Edit Profile', () => {
     test('EditUsersData', async ({request}) => {
      const responseProfile = await request.put('/api/users/profile', {
        data:    {
            "name": "Dariaaaaa",
            "lastName": "VakulA",
            "dateBirth": "2021-03-17T15:21:05.000Z",
            "country": "Ukraine"
}})
      
// Перевіряємо що в response повернулось нове імʼя
    const body = await responseProfile.json()
    console.log(body);

  expect(responseProfile.status()).toBe(200)
  expect(body.data.name).toBe('Dariaaaaa')
  expect(body.data.lastName).toBe('VakulA')
});
      });



