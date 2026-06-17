const request = require("supertest");
const app = require("../server");

describe("GET /api/livres", () => {
  it("retourne la liste des livres", async () => {
    const response = await request(app).get("/api/livres");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});