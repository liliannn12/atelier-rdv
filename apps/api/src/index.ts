import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('Hello Node.js!'))

app.get('/health', (c) => c.json({ status: 'ok' }))

serve({fetch : app.fetch, port : 3000}, (info) => {
    console.log(`Server is running on ${info.port}`);
});