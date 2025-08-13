#!/bin/bash

echo "🔧 Fixing Vercel deployment issue..."

# Remove any existing Vercel configuration
echo "📁 Removing existing Vercel configuration..."
rm -rf .vercel
rm -f vercel.json

# Update dependencies to stable versions
echo "📦 Updating dependencies..."
npm install next@14.2.15

# Create a minimal vercel.json that explicitly sets framework
echo "📝 Creating minimal vercel.json..."
cat > vercel.json << 'EOF'
{
  "framework": "nextjs"
}
EOF

# Test build locally first
echo "🏗️  Testing build locally..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Local build successful!"
    echo ""
    echo "🚀 Now run: vercel --prod"
    echo "   When prompted:"
    echo "   - Choose 'no' to link to existing project"
    echo "   - Give it a new name like 'moonphase-tracker'"
    echo "   - Accept default Next.js settings"
else
    echo "❌ Local build failed. Please check the errors above."
    exit 1
fi
