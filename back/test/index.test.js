const app = require('../src/server');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", () => {
    describe("GET rickandmorty/{id}", () => {
        it('Responde con status: 200', () => {
            agent.get('/detail/1').expect(200);
        });

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', (done) => {
            agent.get('/detail/1').then((response) => {
                const result = response.body;
                expect(Object.keys(result)).toContain('id');
                expect(Object.keys(result)).toContain('name');
                expect(Object.keys(result)).toContain('species');
                expect(Object.keys(result)).toContain('gender');
                expect(Object.keys(result)).toContain('image');
            });
            done();
        });

        it('Si hay un error responde con status: 500', () => {
            agent.get('/detail/IDqueNoExiste').expect(500);
        });
    });
});