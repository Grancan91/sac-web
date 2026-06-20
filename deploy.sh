#!/bin/bash

# Script de deploy automático: sac-web → sac-web-prod

set -e  # Exit on error

echo "🚀 Iniciando deploy..."

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. Build
echo -e "${BLUE}📦 Compilando proyecto...${NC}"
npm run build
echo -e "${GREEN}✓ Build completado${NC}"

# 2. Obtener ruta de sac-web-prod (hermano en la misma carpeta)
PROD_REPO_PATH="../sac-web-prod"

if [ ! -d "$PROD_REPO_PATH/.git" ]; then
  echo -e "${YELLOW}❌ Error: No encontré sac-web-prod en $PROD_REPO_PATH${NC}"
  echo -e "${YELLOW}   Asegúrate de que ambos repos estén en la misma carpeta:${NC}"
  echo -e "${YELLOW}   📁 Claude/Projects/SAC/${NC}"
  echo -e "${YELLOW}      ├── sac-web/${NC}"
  echo -e "${YELLOW}      └── sac-web-prod/${NC}"
  exit 1
fi

# 3. Copiar archivos compilados
echo -e "${BLUE}📁 Copiando archivos compilados a $PROD_REPO_PATH...${NC}"
cp -r dist/* "$PROD_REPO_PATH/"
echo -e "${GREEN}✓ Archivos copiados${NC}"

# 4. Commit y push en sac-web-prod
cd "$PROD_REPO_PATH"

echo -e "${BLUE}📝 Haciendo commit en sac-web-prod...${NC}"

if git diff --quiet; then
  echo -e "${YELLOW}⚠️  No hay cambios para committear${NC}"
  exit 0
fi

TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
git add .
git commit -m "Update production build - $TIMESTAMP

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>"

echo -e "${BLUE}🔗 Haciendo push a GitHub...${NC}"
git push origin main
echo -e "${GREEN}✓ Push completado${NC}"

echo ""
echo -e "${GREEN}✅ Deploy completado exitosamente!${NC}"
echo -e "${BLUE}Próximo paso: En Hostalia, haz Pull ahora y Desplegar ahora${NC}"
