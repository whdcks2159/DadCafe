#!/bin/bash
# dadcafe.vercel.app 으로 자동 배포

set -e

echo "🚀 Deploying to Vercel..."
DEPLOY_OUTPUT=$(npx vercel --prod 2>&1)
echo "$DEPLOY_OUTPUT"

# 배포 URL 추출
DEPLOY_URL=$(echo "$DEPLOY_OUTPUT" | grep -oE 'https://dadcafe-[a-z0-9]+-[a-z0-9-]+\.vercel\.app' | head -1)

if [ -n "$DEPLOY_URL" ]; then
  echo ""
  echo "🔗 Aliasing $DEPLOY_URL → dadcafe.vercel.app..."
  npx vercel alias set "$DEPLOY_URL" dadcafe.vercel.app
  echo "✅ Done! https://dadcafe.vercel.app"
else
  echo "⚠️  Could not extract deployment URL. Run manually:"
  echo "    npx vercel alias set <DEPLOY_URL> dadcafe.vercel.app"
fi
