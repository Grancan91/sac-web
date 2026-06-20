# 🚀 Guía de Deploy

Este proyecto tiene dos repositorios:

- **`sac-web`** - Código fuente (desarrollo)
- **`sac-web-prod`** - Archivos compilados (producción en Hostalia)

## Flujo de Desarrollo → Producción

### Opción 1: Deploy Automático (Recomendado)

```bash
# Configurar la ruta una sola vez
export SAC_WEB_PROD_PATH=~/Documents/Claude/Projects/SAC/sac-web-prod

# O en tu .zshrc/.bashrc para que sea permanente:
# echo 'export SAC_WEB_PROD_PATH=~/Documents/Claude/Projects/SAC/sac-web-prod' >> ~/.zshrc

# Ejecutar el deploy
./deploy.sh
```

El script automáticamente:
1. ✅ Compila el proyecto (`npm run build`)
2. ✅ Copia archivos a `sac-web-prod`
3. ✅ Hace commit y push automático

### Opción 2: Deploy Manual

```bash
# 1. Compilar
npm run build

# 2. Copiar archivos
cp -r dist/* /ruta/a/sac-web-prod/

# 3. Push a sac-web-prod
cd /ruta/a/sac-web-prod
git add .
git commit -m "Update production build"
git push origin main
```

## Después del Deploy

En **Hostalia**:
1. Ve a **Repositorios Git**
2. Haz click en **"Pull ahora"**
3. Haz click en **"Desplegar ahora"**

¡Listo! Tu sitio está actualizado en sacpos.com

---

## Primeros pasos

1. **Clonar sac-web-prod localmente:**
   ```bash
   git clone git@github.com:Grancan91/sac-web-prod.git ../sac-web-prod
   ```

2. **Configurar la ruta en tu shell:**
   ```bash
   export SAC_WEB_PROD_PATH=../sac-web-prod
   ```

3. **Ahora puedes usar `./deploy.sh` para cada release**
