# Cypress Web Automation

Framework de automatización web con Cypress y TypeScript para [SauceDemo](https://www.saucedemo.com).

## Reporte de Pruebas

Ver reporte en GitHub Pages: https://juanfranciscobumo.github.io/cypress-web-automation/

## Requisitos previos

- Node.js >= 18
- npm o yarn

## Instalación

```bash
npm install
```

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run cypress:open` | Abre la UI de Cypress |
| `npm run cypress:run` | Ejecuta tests en modo headless |
| `npm run cypress:run:headless` | Ejecuta tests en Chrome headless |

## Estructura del proyecto

```
cypress/
├── e2e/
│   ├── pages/                    # Page Objects
│   │   ├── LoginPage.ts
│   │   ├── InventoryPage.ts
│   │   ├── CartPage.ts
│   │   └── CheckoutPage.ts
│   └── tests/                    # Tests
│       ├── login.cy.ts
│       ├── inventory.cy.ts
│       ├── cart.cy.ts
│       └── checkout.cy.ts
├── fixtures/                     # Datos de prueba
│   ├── users.json
│   ├── products.json
│   └── urls.json
├── support/
│   ├── commands.ts               # Custom commands
│   └── e2e.ts
└── types/
    └── index.d.ts                # Definiciones de tipos
```

## Page Objects

### LoginPage
- `visit()` - Navegar a la página de login
- `enterUsername(username)` - Ingresar usuario
- `enterPassword(password)` - Ingresar contraseña
- `clickLogin()` - Hacer clic en login
- `login(username, password)` - Login completo
- `getErrorMessage()` - Obtener mensaje de error

### InventoryPage
- `isInventoryDisplayed()` - Verificar si se muestra el inventario
- `getItemCount()` - Obtener cantidad de productos
- `getItemNames()` - Obtener nombres de productos
- `getItemPrices()` - Obtener precios de productos
- `addToCart(index)` - Agregar producto al carrito
- `goToCart()` - Ir al carrito
- `getCartBadgeCount()` - Obtener contador del carrito
- `sortBy(option)` - Ordenar productos

### CartPage
- `isCartDisplayed()` - Verificar si se muestra el carrito
- `getItemCount()` - Obtener cantidad de items
- `removeItem(index)` - Eliminar item del carrito
- `checkout()` - Ir al checkout
- `continueShopping()` - Volver a comprar

### CheckoutPage
- `fillCheckoutInfo(firstName, lastName, postalCode)` - Llenar información
- `continueToOverview()` - Continuar al resumen
- `finishCheckout()` - Finalizar compra
- `cancelCheckout()` - Cancelar compra
- `getCompleteMessage()` - Obtener mensaje de confirmación

## Custom Commands

- `cy.login(username, password)` - Login en SauceDemo
- `cy.loginAsStandardUser()` - Login como usuario estándar
- `cy.loginAsProblemUser()` - Login como usuario problemático
- `cy.addToCart(index)` - Agregar producto al carrito
- `cy.goToCart()` - Ir al carrito
- `cy.getByDataTest(selector)` - Seleccionar por data-test

## Tests incluidos

### Login
- Login exitoso
- Error con usuario bloqueado
- Error con credenciales inválidas
- Error con campos vacíos

### Inventario
- Mostrar productos
- Agregar productos al carrito
- Ordenar productos

### Carrito
- Agregar/eliminar productos
- Navegación

### Checkout
- Completar compra
- Cancelar compra
- Validaciones de campos

## Website Under Test

[SauceDemo](https://www.saucedemo.com) - Tienda de demostración para testing.

## Tecnologías

- Cypress 13
- TypeScript 5
- Page Object Model
