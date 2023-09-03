import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
    let app: INestApplication;

    const data = {
        'email': `user-${Date.now()}@gmail.com`,
        'password': 'pass123'
    }

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/ (GET)', () => {
        return request(app.getHttpServer())
            .get('/')
            .expect(200)
            .expect('SuperCRM test!');
    });

    it('/users/register (POST)', async () => {
        return await request(app.getHttpServer())
            .post('/users/register')
            .set('Accept', 'application/json')
            .send(data)
            .expect(201)
    });

    it('/users/login (POST)', async () => {
        return await request(app.getHttpServer())
            .post('/users/login')
            .set('Accept', 'application/json')
            .send(data)
            .expect(200)
            .expect((result) => {
                expect(result.body).toEqual({
                    success: true,
                    data: {
                        id: result.body.data.id,
                        email: data.email
                    },
                    message: 'Login successful'
                });
            });
    });
});
