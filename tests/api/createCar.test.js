import { test, expect } from '@playwright/test'

test.describe('API - Create Car', () => {
    test.beforeEach(async ({ request }) => {
    await request.post('/api/auth/signin', {
      data: {
        "email":    'tdsttttfs63@ameady.com',
        "password": 'Daria@112',
        "remember": false
      }
    })
  });

//   test('Create Car with Valid Data', async ({request}) => {
//     const responseCar = await request.post('/api/cars', {
//       data: {
//         "carBrandId": 2,
//         "carModelId": 9,
//         "mileage":    100
//       }
//     })
  
//   expect(responseCar.status()).toBe(201)

//     const body = await responseCar.json()
//     expect(body.status).toBe('ok')
//     expect(body.data.carBrandId).toBe(2)
//     expect(body.data.carModelId).toBe(9)
//     expect(body.data.mileage).toBe(100)
//     console.log('Created car:', body.data)
//     });

//  test('Without Mileage field', async ({request}) => {
//     const responseCar = await request.post('/api/cars', {
//       data: {
//         "carBrandId": 1,
//         "carModelId": 2,
//       }
//     })
  
//   expect(responseCar.status()).toBe(400)

//     const body = await responseCar.json()
//     expect(body.status).toBe('error')
//     console.log('Error response:', body.message)
//     });



 test('Invalid BrandID', async ({request}) => {
    const responseCar = await request.post('/api/cars', {
      data: {
        "carBrandId": 8,
        "carModelId": 8,
        "mileage":    500
      }
    })
  
  expect(responseCar.status()).toBe(404)

    const body = await responseCar.json()
    expect(body.status).toBe('error')
    console.log('Error response:', body.message)
    });

});