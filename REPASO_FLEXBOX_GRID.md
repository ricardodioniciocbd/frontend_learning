# 📚 REPASO COMPLETO: FLEXBOX Y CSS GRID

---

## 🎯 FLEXBOX

### **¿Qué es Flexbox?**
Sistema de diseño unidimensional que permite distribuir elementos en una sola dirección (fila o columna) y controlar su alineación y distribución de espacio.

---

## 🔧 PROPIEDADES DEL CONTENEDOR (Parent/Flex Container)

### **1. `display: flex`**
- Activa Flexbox en el contenedor
- Los elementos hijos se convierten en "flex items"

```css
.contenedor {
    display: flex;
}
```

---

### **2. `flex-direction`**
Define la dirección principal de los elementos:
- `row` → Horizontal (izquierda a derecha) - **Por defecto**
- `row-reverse` → Horizontal (derecha a izquierda)
- `column` → Vertical (arriba a abajo)
- `column-reverse` → Vertical (abajo a arriba)

```css
.contenedor {
    flex-direction: row;
}
```

---

### **3. `flex-wrap`**
Controla si los elementos se envuelven en múltiples líneas:
- `nowrap` → No se envuelven (una sola línea) - **Por defecto**
- `wrap` → Se envuelven cuando no caben
- `wrap-reverse` → Se envuelven en dirección inversa

```css
.contenedor {
    flex-wrap: wrap;
}
```

### **4. `flex-flow`** (Shorthand)
Combina `flex-direction` y `flex-wrap`:
```css
.contenedor {
    flex-flow: row wrap; /* dirección y wrap */
}
```

---

### **5. `justify-content`**
Alinea elementos en el **eje principal** (horizontal si `flex-direction: row`):
- `flex-start` → Al inicio
- `flex-end` → Al final
- `center` → Centrado
- `space-between` → Espacio entre elementos (sin espacio en los extremos)
- `space-around` → Espacio alrededor de cada elemento (igual a los lados)
- `space-evenly` → Espacio uniforme entre todos

```css
.contenedor {
    justify-content: space-between;
}
```

---

### **6. `align-items`**
Alinea elementos en el **eje cruzado** (vertical si `flex-direction: row`):
- `stretch` → Estira para llenar el contenedor - **Por defecto**
- `flex-start` → Al inicio
- `flex-end` → Al final
- `center` → Centrado
- `baseline` → Alineado por línea base del texto

```css
.contenedor {
    align-items: center;
}
```

---

### **7. `align-content`**
Alinea las **líneas** cuando hay múltiples líneas (`flex-wrap: wrap`):
- `flex-start` → Líneas al inicio
- `flex-end` → Líneas al final
- `center` → Líneas centradas
- `space-between` → Espacio entre líneas
- `space-around` → Espacio alrededor de líneas
- `stretch` → Líneas estiradas

```css
.contenedor {
    flex-wrap: wrap;
    align-content: space-between;
}
```

---

### **8. `gap`**
Espacio entre elementos flex (no funciona en todos los navegadores, mejor usar margin):
```css
.contenedor {
    gap: 20px; /* Espacio entre elementos */
}
```

---

## 🎨 PROPIEDADES DE LOS HIJOS (Flex Items)

### **1. `flex-basis`**
Define el tamaño inicial/deseado del elemento antes de distribuir el espacio:
```css
.caja {
    flex-basis: 200px; /* Tamaño inicial */
}
```

---

### **2. `flex-grow`**
Define cómo crece el elemento cuando hay espacio extra:
- `0` → No crece - **Por defecto**
- `1` → Crece proporcionalmente
- `2`, `3`, etc. → Crece más que otros

```css
.caja {
    flex-grow: 1; /* Ocupa espacio disponible */
}
.especial {
    flex-grow: 3; /* Crece 3 veces más */
}
```

---

### **3. `flex-shrink`**
Define cómo se encoge el elemento cuando falta espacio:
- `1` → Se encoge proporcionalmente - **Por defecto**
- `0` → No se encoge
- `2`, `3`, etc. → Se encoge más rápido

```css
.caja {
    flex-shrink: 1; /* Se encoge normalmente */
}
.especial {
    flex-shrink: 5; /* Se encoge 5 veces más rápido */
}
```

---

### **4. `flex`** (Shorthand)
Combina `flex-grow`, `flex-shrink` y `flex-basis`:
```css
.caja {
    flex: 1 1 200px; /* grow shrink basis */
}
/* Valores comunes: */
flex: 1; /* Equivale a: 1 1 0% */
flex: auto; /* Equivale a: 1 1 auto */
flex: none; /* Equivale a: 0 0 auto */
```

---

### **5. `order`**
Cambia el orden visual de los elementos (sin cambiar el HTML):
- `0` → Orden natural - **Por defecto**
- Números positivos/negativos → Orden relativo

```css
.uno {
    order: 2; /* Aparece después */
}
.dos {
    order: 1; /* Aparece antes */
}
```

---

### **6. `align-self`**
Alinea un elemento individual en el eje cruzado (sobrescribe `align-items`):
- `auto` → Hereda de `align-items`
- `flex-start` | `flex-end` | `center` | `stretch` | `baseline`

```css
.caja {
    align-self: center; /* Alineación individual */
}
```

---

## 🏁 CSS GRID

### **¿Qué es CSS Grid?**
Sistema de diseño bidimensional que permite crear layouts complejos con filas y columnas simultáneamente.

---

## 🔧 PROPIEDADES DEL CONTENEDOR (Grid Container)

### **1. `display: grid`**
Activa CSS Grid:
```css
.grid {
    display: grid;
}
```

---

### **2. `grid-template-columns`**
Define las columnas de la cuadrícula:
```css
.grid {
    grid-template-columns: 200px 200px 200px; /* 3 columnas de 200px */
    grid-template-columns: 1fr 1fr 1fr; /* 3 columnas iguales */
    grid-template-columns: repeat(3, 1fr); /* 3 columnas iguales */
    grid-template-columns: auto 1fr 1fr; /* Primera auto, otras iguales */
}
```

---

### **3. `grid-template-rows`**
Define las filas de la cuadrícula:
```css
.grid {
    grid-template-rows: 100px 200px 100px; /* 3 filas */
    grid-template-rows: auto 1fr auto; /* Primera y última auto, medio flexible */
}
```

---

### **4. `gap`**
Espacio entre filas y columnas:
```css
.grid {
    gap: 20px; /* Espacio igual en filas y columnas */
    gap: 20px 40px; /* Fila Columna */
    /* También se puede usar: */
    row-gap: 20px; /* Solo entre filas */
    column-gap: 40px; /* Solo entre columnas */
}
```

---

### **5. `grid-template-areas`**
Define áreas con nombres (método visual para layouts):
```css
.grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 
        'header  header  header'
        'main    main    aside'
        'footer  footer  footer';
}

.header {
    grid-area: header; /* Ocupa el área "header" */
}
.main {
    grid-area: main;
}
.aside {
    grid-area: aside;
}
.footer {
    grid-area: footer;
}
```

---

### **6. Funciones útiles:**

#### **`repeat()`**
Repite un patrón:
```css
grid-template-columns: repeat(4, 1fr); /* 4 columnas iguales */
grid-template-columns: repeat(3, 100px 200px); /* 100px 200px repetido 3 veces */
```

#### **`minmax()`**
Define un tamaño mínimo y máximo:
```css
grid-template-columns: minmax(200px, 1fr); /* Mínimo 200px, máximo flexible */
grid-template-rows: minmax(150px, auto); /* Mínimo 150px, máximo según contenido */
```

#### **`auto-fit` y `auto-fill`**
En combinación con `repeat()` y `minmax()`:
```css
/* AUTO-FIT: Distribuye el espacio sobrante entre las columnas (no deja espacios vacíos) */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

/* AUTO-FILL: Crea nuevas columnas si hay espacio (puede dejar espacios vacíos) */
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
```

---

### **7. `grid-auto-flow`**
Controla cómo se colocan automáticamente los elementos:
- `row` → Por filas (izquierda a derecha) - **Por defecto**
- `column` → Por columnas (arriba a abajo)
- `dense` → Intenta rellenar espacios vacíos

```css
.grid {
    grid-auto-flow: row dense; /* Rellena espacios vacíos */
}
```

---

### **8. Alineación del Grid:**

#### **`justify-content`** (Alinea el grid completo en el contenedor - eje horizontal)
```css
.grid {
    justify-content: center; /* centra el grid */
}
```

#### **`align-content`** (Alinea el grid completo en el contenedor - eje vertical)
```css
.grid {
    align-content: space-between;
}
```

#### **`justify-items`** (Alinea elementos dentro de sus celdas - eje horizontal)
```css
.grid {
    justify-items: center; /* Centra elementos en sus celdas */
}
```

#### **`align-items`** (Alinea elementos dentro de sus celdas - eje vertical)
```css
.grid {
    align-items: center;
}
```

---

## 🎨 PROPIEDADES DE LOS HIJOS (Grid Items)

### **1. `grid-column`** (Shorthand)
Define en qué columnas se coloca el elemento:
```css
.item {
    grid-column: 1 / 3; /* Desde columna 1 hasta 3 (ocupa 2 columnas) */
    grid-column: 1 / -1; /* Desde 1 hasta el final */
    grid-column: span 2; /* Abarca 2 columnas desde su posición */
    
    /* También se puede usar: */
    grid-column-start: 1;
    grid-column-end: 3;
}
```

---

### **2. `grid-row`** (Shorthand)
Define en qué filas se coloca el elemento:
```css
.item {
    grid-row: 1 / 3; /* Desde fila 1 hasta 3 */
    grid-row: 1 / -1; /* Desde 1 hasta el final */
    grid-row: span 2; /* Abarca 2 filas */
    
    /* También se puede usar: */
    grid-row-start: 1;
    grid-row-end: 3;
}
```

---

### **3. `grid-area`**
Método para colocar elementos usando nombres de áreas:
```css
.item {
    grid-area: header; /* Si usaste grid-template-areas */
    
    /* O también: */
    grid-area: 1 / 1 / 3 / 4; /* row-start / col-start / row-end / col-end */
}
```

---

### **4. Alineación Individual:**

#### **`justify-self`**
Alinea el elemento dentro de su celda (eje horizontal):
```css
.item {
    justify-self: center; /* Centra en la celda */
}
```

#### **`align-self`**
Alinea el elemento dentro de su celda (eje vertical):
```css
.item {
    align-self: center;
}
```

---

### **5. `order`**
Cambia el orden visual (igual que en Flexbox):
```css
.item {
    order: 2; /* Aparece después */
}
```

---

## 🔑 DIFERENCIAS CLAVE: FLEXBOX vs CSS GRID

| **FLEXBOX** | **CSS GRID** |
|-------------|--------------|
| **Unidimensional** (una dirección) | **Bidimensional** (filas y columnas) |
| Mejor para componentes pequeños | Mejor para layouts completos |
| Controla distribución en una línea | Controla distribución en toda la cuadrícula |
| Ideal para: navegación, botones, elementos en línea | Ideal para: páginas completas, layouts complejos |

---

## 💡 CUÁNDO USAR CADA UNO

### **Usa FLEXBOX cuando:**
- Necesitas alinear elementos en una dirección (fila o columna)
- Trabajas con componentes pequeños (botones, menús, tarjetas)
- Necesitas distribuir espacio entre elementos
- Quieres que los elementos se adapten al contenido

### **Usa CSS GRID cuando:**
- Necesitas un layout completo de página (header, main, aside, footer)
- Quieres controlar filas Y columnas simultáneamente
- Necesitas crear layouts complejos y estructurados
- Trabajas con áreas definidas

### **Usa ambos juntos:**
- Grid para el layout general de la página
- Flexbox para componentes dentro de las áreas del Grid

---

## 📝 NOTAS IMPORTANTES

1. **Flexbox** es para componentes y distribuciones unidimensionales
2. **CSS Grid** es para layouts completos y estructuras bidimensionales
3. Puedes usar ambos juntos en el mismo proyecto
4. `gap` funciona en ambos (pero verifica compatibilidad del navegador)
5. `justify-content` y `align-items` funcionan diferente en Grid vs Flexbox
6. Grid tiene dos formas de trabajar: **Líneas** (grid-column/grid-row) y **Áreas** (grid-template-areas)

---

## 🎯 RESUMEN RÁPIDO

### **FLEXBOX - Propiedades más usadas:**
- Contenedor: `display: flex`, `justify-content`, `align-items`, `flex-direction`, `gap`
- Hijos: `flex`, `flex-grow`, `flex-shrink`, `order`, `align-self`

### **CSS GRID - Propiedades más usadas:**
- Contenedor: `display: grid`, `grid-template-columns/rows`, `gap`, `grid-template-areas`
- Hijos: `grid-column`, `grid-row`, `grid-area`, `justify-self`, `align-self`

---

¡Espero que este repaso te sea útil! 🚀
