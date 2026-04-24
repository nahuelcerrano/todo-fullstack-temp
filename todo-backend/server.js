require('dotenv').config()

const express = require ('express')
const cors = require('cors')
const { Pool } = require('pg')

const app = express()
const PORT = 3000


app.use(cors())
app.use(express.json())


const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})


pool.connect()
    .then(() => console.log('📦 Conectado a PostgreSQL con exito'))
    .catch(err => console.error('❌ Error al conectar a PostgreSQL', err.stack))


app.get('/api/todos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM todos ORDER BY id ASC')
        res.json(result.rows)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})


app.post('/api/todos', async (req, res) => {
    try {
        const { text } = req.body

        const result = await pool.query(
            'INSERT INTO todos (text, completed) VALUES ($1 , $2 ) returning *', [text, false]
        )
        res.status(201).json(result.rows[0])
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})



app.put('/api/todos/:id', async (req, res) => {
    try {
        const { id } = req.params

        const todoSelect = await pool.query('SELECT completed FROM todos WHERE id = $1', [id])

        if (todoSelect.rows.length === 0) {
            return res.status(404).json({ error: 'Tarea no encontrada' })
        }

        const currentState = todoSelect.rows[0].completed

        const result = await pool.query('UPDATE todos SET completed = $1 WHERE id = $2 RETURNING *', [!currentState, id])

        res.json(result.rows[0])
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

app.delete('/api/todos/:id', async (req, res) => {
    try {
        const { id } = req.params
        await pool.query('DELETE FROM todos WHERE id = $1', [id])
        res.json({ message: 'Tarea eliminada exitosamente' })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

app.listen(PORT, () => {
    console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`)
})