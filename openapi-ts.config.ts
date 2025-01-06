import { defineConfig } from '@hey-api/openapi-ts'
let url = "http://localhost:8080/swagger-plant-app/json"

// url = "https://sarovar-api.krida.top/swagger-plant-app/json"

export default defineConfig({
  input: url,
  output: 'apps/isomorphic/src/api-client/plant',
  debug: true,
  serviceResponse: 'body',
  format: true,
  lint: true,
  experimental: true,
  client: "axios",
})
