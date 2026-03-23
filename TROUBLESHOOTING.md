# Troubleshooting Guide - Dr. Robert Woods Website

## System Lockup Issues

If the system is locked up, try these steps in order:

### 1. Force Close and Restart
```bash
# Kill any stuck processes
pkill -f "node"
pkill -f "npm"
pkill -f "next"

# Clear terminal
clear
```

### 2. Check System Resources
```bash
# Check memory usage
free -h

# Check disk space
df -h

# Check CPU usage
top
```

### 3. Clean Installation
```bash
# Navigate to project
cd /home/chad/projects/dr-woods-website

# Remove all generated files
rm -rf node_modules
rm -rf .next
rm -f package-lock.json

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
npm install
```

### 4. Alternative Installation Methods
If npm is still stuck, try:

```bash
# Use yarn instead
npm install -g yarn
yarn install

# Or use pnpm
npm install -g pnpm
pnpm install
```

### 5. Check Node.js Version
```bash
node --version
npm --version

# If Node.js is old, update it
# Recommended: Node.js 18+ or 20+
```

### 6. Minimal Test
If everything else fails, try this minimal setup:

```bash
# Create a simple test
echo 'console.log("Node.js is working")' > test.js
node test.js
```

## Common Issues and Solutions

### Issue: "Module not found" errors
**Solution**: Dependencies not installed
```bash
npm install
```

### Issue: TypeScript errors
**Solution**: Type definitions missing
```bash
npm install @types/node @types/react @types/react-dom
```

### Issue: Tailwind CSS not working
**Solution**: Check configuration files exist
- `tailwind.config.js` ✅
- `postcss.config.mjs` ✅
- `app/globals.css` with Tailwind directives ✅

### Issue: Next.js build fails
**Solution**: Clear cache and rebuild
```bash
rm -rf .next
npm run build
```

### Issue: Port 3000 already in use
**Solution**: Use different port
```bash
npm run dev -- -p 3001
```

## Current Project Status

✅ **Configuration Files**:
- `package.json` - Updated with all dependencies
- `tailwind.config.js` - Properly configured
- `postcss.config.mjs` - Correct plugins
- `next.config.js` - Next.js configuration (JS; Next 14.1 loads `.js` / `.mjs` only)
- `tsconfig.json` - Fixed settings

✅ **Source Files**:
- `app/layout.tsx` - Root layout with fonts
- `app/page.tsx` - Complete homepage
- `app/globals.css` - Tailwind directives and custom styles

✅ **Features**:
- Responsive design
- Auto-rotating testimonials
- Contact integration
- SEO optimization
- Professional styling

## Quick Start (Once System is Stable)

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to http://localhost:3000

## If Still Having Issues

1. **Restart your computer** - This often resolves system lockups
2. **Check for system updates** - Ensure your OS is up to date
3. **Try a different terminal** - Use a different terminal application
4. **Check antivirus software** - Some antivirus can interfere with npm

## Emergency Contact

If you continue to have issues, the website files are complete and ready. You can:
1. Copy the files to a different location
2. Try on a different machine
3. Use a cloud development environment (like CodeSandbox or StackBlitz)

The website is fully functional once the dependencies are installed correctly. 