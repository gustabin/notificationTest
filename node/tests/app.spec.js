import app from '../app'
import request from 'supertest'

describe('GET /message', () => {
    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/message').send()
        expect(response.statusCode).toBe(200);
    });

    test('should respond with an array', async () => {
        const response = await request(app).get('/message').send()
        expect(response.body).toBeInstanceOf(Array)
    })
});

describe('POST /message', () => {
    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/message').send()
        expect(response.statusCode).toBe(200);
    });

    test('should respond with an array', async () => {
        const response = await request(app).get('/message').send()
        expect(response.body).toBeInstanceOf(Array)
    })
});

