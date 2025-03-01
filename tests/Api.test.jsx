const request = require("supertest");
const app = require("../index");

var idSensei;

describe("Pruebas de la API de sensei", () => {
    test(" Obtener todos los senseis", async () => {
        const res = await request(app).get("/api/sensei/");

        expect(res.statusCode).toBe(200);
    });

    test(" Obtener un sensei", async () => {
        const res = await request(app).get("/api/sensei/2");

        expect(res.statusCode).toBe(200);
    });

    test(" Crear un sensei", async () => {
        const senseiData = {
            nombre: "Paco",
            fecha_nacimiento:"1997-05-27",
            tipo:"boxeo",
            peso: "81.5",
            activo: true,
            };
        const res = await request(app).post("/api/sensei/").send(senseiData);

        const responseData = JSON.parse(res.text);  
        idSensei = responseData.datos?.insertId;
        console.log("id: "+idSensei)

        expect(res.statusCode).toBe(201);
    });

    test(" Modificar un sensei", async () => {
        const senseiData = {
            nombre: "Paco",
            fecha_nacimiento:"1997-05-27",
            tipo:"boxeo",
            peso: "91.5",
            activo: false,
            };
        const res = await request(app).put("/api/sensei/"+idSensei).send(senseiData);

        expect(res.statusCode).toBe(200);
    });

    test(" Eliminar un sensei", async () => {
        const res = await request(app).delete("/api/sensei/"+idSensei)

        expect(res.statusCode).toBe(204);
    });

    test(" Obtener un sensei que no existe", async () => {
        const res = await request(app).get("/api/sensei/"+idSensei);

        expect(res.statusCode).toBe(404);
    });
    
});