# 🚀 Guía de Deploy

Este proyecto tiene dos repositorios:

- **`sac-web`** - Código fuente (desarrollo)
- **`sac-web-prod`** - Archivos compilados (producción en Hostalia)

## Flujo de Desarrollo → Producción

### Estructura de carpetas

```
📁 SAC/
  ├── sac-web/          ← Código fuente (estás aquí)
  └── sac-web-prod/     ← Archivos compilados
```

### Deploy Automático (Recomendado)

Desde dentro de `sac-web`:

```bash
./deploy.sh
```

El script automáticamente:
1. ✅ Compila el proyecto (`npm run build`)
2. ✅ Copia archivos a `../sac-web-prod`
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

1. **Clona ambos repos en la misma carpeta:**
   ```bash
   cd ~/Documents/Claude/Projects/SAC/
   git clone git@github.com:Grancan91/sac-web.git
   git clone git@github.com:Grancan91/sac-web-prod.git
   ```

2. **Ahora puedes usar `./deploy.sh` para cada release:**
   ```bash
   cd sac-web
   ./deploy.sh
   ```

3. **Luego en Hostalia:**
   - Pull ahora
   - Desplegar ahora
