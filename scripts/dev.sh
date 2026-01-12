#!/bin/sh
set -e

echo "🚀 Starting Acquisition App in Development Mode"
echo "================================================"

echo "🐳 Starting Docker containers..."
docker compose -f docker-compose.dev.yaml up -d

echo "⏳ Waiting for database..."
sleep 10

echo "📜 Running database migrations..."
npm run db:migrate

echo "🔥 Starting application..."
npm run dev
