require('dotenv').config()
const { Client } = require('pg')

const setupDatabase = async () => {
    const rootConfig = {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: 'postgres'
    }


    const rootClient = new Client(rootConfig)

    try {
        await rootClient.connect()
        console.log('🔌Conectado a PostgreSQL (Servidor principal) .')

        const dbCheck = await rootClient.query(` SELECT 1 FROM pg_database WHERE datname = '${process.env.DB_NAME} '`)

        if (dbCheck.rowCount === 0) {
            console.log(`⌛Creando la base de datos " ${process.env.DB_NAME} " ... `)
            await rootClient.query(` CREATE DATABASE ${process.env.DB_NAME} `)
            console.log('✅ Base de datos creada exitosamente. ')
        } else {
            console.log(` ℹ️ La base de datos " ${process.env.DB_NAME} " ya existe. Saltando creacion. `)
        }
    } catch (error) {
        console.error('❌ Error configurando la base de datos:', error.message)
        process.exist(1)
    } finally {
        await rootClient.end()
    }



    const appClient = new Client({
        ...rootConfig,
        database: process.env.DB_NAME
    })


    try {
        await appClient.connect()
        console.log(`🔌 Conectado a la base de datos " ${process.env.DB_NAME} " . `)

        console.log('⌛ Verificando/Creando la tabla "todos"... ')
        await appClient.query(` 
                    CREATE TABLE IF NOT EXISTS todos 
                    ( id SERIAL PRIMARY KEY,
                     text VARCHAR(255) NOT FULL, 
                     completed BOOLEAN DEFAULT false
                     )
                `)
        console.log('✅ Tabla "todos" lista')
        console.log('🎉 ¡La base de datos esta completamente configurada y lista para usar!')

    } catch (error) {
        console.error('❌ Error creando la tabla:' , error.message)
    } finally {
        await appClient.end()
    }
}

setupDatabase()