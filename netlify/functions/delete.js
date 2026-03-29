import mongoose from 'mongoose'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST,OPTIONS'
}

const mongoUri = process.env.MONGO_URL?.trim()

async function connectToDb() {
  if (mongoose.connection.readyState === 1) return mongoose.connection
  if (!mongoUri) {
    throw new Error('Missing MONGO_URL')
  }
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  return mongoose.connection
}

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: corsHeaders,
    body: JSON.stringify(body)
  }
}

export async function handler(event) {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: corsHeaders, body: '' }
  }

  if (event.httpMethod !== 'POST') {
    return jsonResponse(405, { message: 'Method Not Allowed' })
  }

  const log = JSON.parse(event.body || '{}')
  if (!log.input || !log.response || Object.keys(log).length !== 2) {
    return jsonResponse(400, { message: 'Bad Request' })
  }

  try {
    const db = await connectToDb()
    await db.collection('logs').deleteOne(log)
    return jsonResponse(200, { message: 'Success' })
  } catch (error) {
    console.error('Error deleting chat log:', {
      message: error?.message,
      stack: error?.stack
    })
    return jsonResponse(500, { message: 'Error' })
  }
}
