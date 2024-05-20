import * as dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import http from 'http'
import express from 'express'

dotenv.config()
const app= express()

app.use(
    cors({
        credentials:true
    })
)
