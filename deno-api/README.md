# DENO MONGO REST API

> A simple REST API using Deno, Oak and Mongo.

## Run

```bash
    deno run  --allow-net --allow-write --allow-read --allow-plugin --unstable app.ts
```
## Routes

```
All Pizzas:     GET /api/v1/pizzas 
Single Pizza :  GET /api/v1/pizzas/:id
Add Pizza:      POST /api/v1/pizzas
Update Pizza:   PUT /api/v1/pizzas/:id
Delete a Pizza: DELETE /api/v1/pizzas/:id

```