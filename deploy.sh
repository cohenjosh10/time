#!/bin/bash

# Moonphase Tracker Deployment Script

echo "🌙 Starting Moonphase Tracker deployment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "📦 Installing dependencies..."
npm ci

echo "🔍 Running linter..."
npm run lint

echo "🏗️  Building application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Static files are ready in the 'out' directory"
    echo ""
    echo "🚀 Deployment options:"
    echo "1. Upload 'out' folder to your web server"
    echo "2. Deploy to Vercel: vercel --prod"
    echo "3. Deploy to Netlify: netlify deploy --prod --dir=out"
    echo "4. Upload to AWS S3: aws s3 sync out/ s3://your-bucket-name"
    echo ""
    echo "🌙 Moonphase Tracker is ready for deployment!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
