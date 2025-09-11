#!/bin/bash

echo "🚀 Deploying Moonphase Tracker with fresh Vercel project..."

# Remove any local Vercel configuration
echo "🧹 Cleaning local Vercel configuration..."
rm -rf .vercel

echo "📝 Ready to deploy!"
echo ""
echo "⚠️  IMPORTANT: When running 'vercel --prod', make sure to:"
echo "   1. Choose 'no' when asked 'Link to existing project?'"
echo "   2. Enter a NEW project name like 'moonphase-tracker'"
echo "   3. Accept all default Next.js settings"
echo ""
echo "🎯 Run this command now:"
echo "   vercel --prod"
echo ""
echo "This will create a completely new project and avoid the cached configuration issue."
