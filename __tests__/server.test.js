//const request = require('supertest')
//const app = require('../src/server/server.js')
const regeneratorRuntime = require("regenerator-runtime");
import request from "supertest";
import app from "../src/server/server.js";

it("API tests", async () => {
  await request(app)
    .post("/postData")
    .send({
        to: 'cityName',
        temperature: '99',
        weather_condition: 'good',
        daystogo: '99',
        cityImage: 'binaryData',
        date: '01-01-1000'
      }).expect(200,{
        to: 'cityName',
        temperature: '99',
        weather_condition: 'good',
        daystogo: '99',
        cityImage: 'binaryData',
        date: '01-01-1000'
      })

  await request(app)
			.get("/")
			.expect("Content-Type", /^text\/html/)
			.expect(200);
})
