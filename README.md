# Actividades de Formularios en Angular

Este repositorio contiene 5 prácticas progresivas sobre formularios en Angular, desde los conceptos básicos de Template-Driven Forms hasta patrones avanzados con Reactive Forms.

## Índice de Prácticas

### [Práctica 1: Formulario Template-Driven - Registro de Usuario](#práctica-1-formulario-template-driven---registro-de-usuario) ✓ Completada

### [Práctica 2: Formulario Reactivo - Gestión de Productos](#práctica-2-formulario-reactivo---gestión-de-productos) (Pendiente)

### [Práctica 3: Validadores Personalizados y FormArray](#práctica-3-validadores-personalizados-y-formarray) (Pendiente)

### [Práctica 4: Validación Asincrónica y Integración con API](#práctica-4-validación-asincrónica-e-integración-con-api) (Pendiente)

### [Práctica 5: FormGroup Anidados y Patrón Dinámico Complejo](#práctica-5-formgroup-anidados-y-patrón-dinámico-complejo) (Pendiente)

---

## Práctica 1: Formulario Template-Driven - Registro de Usuario

### Descripción
Formulario de registro de usuarios utilizando el enfoque Template-Driven de Angular, demostrando vinculación bidireccional de datos y validación básica.

### Objetivos de Aprendizaje
- Usar la directiva `ngModel` para vinculación bidireccional de datos
- Implementar validación básica con directivas HTML
- Mostrar mensajes de error usando validadores integrados
- Capturar y procesar datos del formulario

### Estructura de Archivos

```
src/app/registro/
├── registro.component.ts      # Lógica del componente
├── registro.component.html    # Template del formulario
└── registro.component.css     # Estilos
```

### Conceptos Clave Implementados

**1. Directiva ngModel**
```html
<input [(ngModel)]="usuario.nombre" name="nombre" #nombre="ngModel">
```

**2. Validadores HTML Integrados**
- `required` - Campo obligatorio
- `minlength` - Longitud mínima (nombre: 3, contraseña: 6)
- `pattern` - Validación de email con dominio completo

**3. Referencias de Template**
```html
<form #registroForm="ngForm" (ngSubmit)="onSubmit(registroForm)">
<input #nombre="ngModel">
```

**4. Estados del Formulario**
- `valid` / `invalid` - Estado de validación
- `touched` / `untouched` - Interacción del usuario
- `dirty` / `pristine` - Cambios en valores

**5. Binding Bidireccional**
```typescript
usuario = { nombre: '', email: '', password: '', confirmPassword: '' };
```

### Implementación del Componente

```typescript
export class RegistroComponent {
  usuario = {
    nombre: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  usuariosRegistrados: any[] = [];
  mensajeExito: string = '';
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  passwordsMatch(): boolean {
    return this.usuario.password === this.usuario.confirmPassword;
  }

  shouldShowPasswordError(confirmPasswordField: any): boolean {
    return confirmPasswordField.touched && 
           this.usuario.confirmPassword.length > 0 && 
           !this.passwordsMatch();
  }

  onSubmit(form: NgForm) {
    if (form.valid && this.passwordsMatch()) {
      this.usuariosRegistrados.push({...this.usuario});
      this.mensajeExito = `¡Bienvenido, ${this.usuario.nombre}!`;
      form.resetForm();
      console.log('Usuarios registrados:', this.usuariosRegistrados);
    }
  }
}
```

### Validaciones Implementadas

| Campo | Validaciones | Mensajes de Error |
|-------|-------------|-------------------|
| Nombre | `required`, `minlength="3"` | "El nombre es requerido", "Mínimo 3 caracteres" |
| Email | `required`, `pattern` | "El email es requerido", "Formato de email inválido (debe incluir @dominio.com)" |
| Contraseña | `required`, `minlength="6"` | "La contraseña es requerida", "Mínimo 6 caracteres" |
| Confirmar Contraseña | `required`, comparación custom | "Confirmar contraseña es requerido", "Las contraseñas no coinciden" |

### Características Adicionales
- Validación de contraseñas en tiempo real con feedback visual
- Campo "Confirmar Contraseña" se pone rojo cuando no coincide
- Validación estricta de email (requiere dominio completo)
- Botón deshabilitado hasta que el formulario sea válido
- Lista de usuarios registrados
- Diseño centrado con colores neutros (grises, negro, blanco)

### Probar la Práctica 1
```bash
ng serve
```
Navegar a `http://localhost:4200/`

---

## Práctica 2: Formulario Reactivo - Gestión de Productos

### Descripción
Crear un formulario reactivo para gestionar un catálogo de productos utilizando FormBuilder, FormGroup y FormControl programáticos.

### Objetivos de Aprendizaje
- Utilizar FormBuilder para simplificar la creación de formularios
- Implementar validadores síncronos integrados
- Acceder a controles de formulario mediante referencias programáticas
- Gestionar estado del formulario y valores

### Estructura de Archivos (Pendiente)
```
src/app/productos/
├── productos.component.ts
├── productos.component.html
└── productos.component.css
```

### Conceptos Clave a Implementar
- FormBuilder
- FormGroup y FormControl
- Validadores síncronos
- Acceso programático a controles
- Gestión de estado del formulario

### Funcionalidades Previstas
- Formulario con campos: nombre, descripción, precio, cantidad, categoría
- Tabla de productos registrados con opciones de eliminar
- Cálculo del total del inventario
- Validaciones: nombre (min 3), descripción (max 200), precio (min 0.01), cantidad (1-1000)

**Estado:** Pendiente de implementación

---

## Práctica 3: Validadores Personalizados y FormArray

### Descripción
Formulario dinámico de facturación con FormArray para agregar múltiples líneas de detalles. Implementación de validadores personalizados para reglas de negocio específicas.

### Objetivos de Aprendizaje
- Crear validadores personalizados síncronos
- Utilizar FormArray para gestionar colecciones dinámicas de controles
- Agregar y eliminar campos dinámicamente
- Validar relaciones entre múltiples campos

### Estructura de Archivos (Pendiente)
```
src/app/factura/
├── factura.component.ts
├── factura.component.html
└── factura.component.css
```

### Conceptos Clave a Implementar
- Validadores personalizados (formato número de factura FAC-XXXXXX)
- FormArray para detalles dinámicos
- Validación dinámica
- Operaciones de cálculo (subtotal, IVA, total)
- Gestión de colecciones de controles

### Funcionalidades Previstas
- Validador personalizado para formato de número de factura
- FormArray para agregar/eliminar detalles de productos
- Cálculo automático de subtotal, IVA (21%) y total
- Descuentos por línea de detalle
- Validación de al menos un detalle antes de guardar

**Estado:** Pendiente de implementación

---

## Práctica 4: Validación Asincrónica e Integración con API

### Descripción
Formulario con validación asincrónica mediante simulación de llamadas a servicios backend. Implementación de validadores que verifican disponibilidad de username y email.

### Objetivos de Aprendizaje
- Implementar validadores asíncronos con observables
- Simular llamadas a servicios HTTP
- Mostrar estados de carga durante validación
- Manejar errores de validación asincrónica

### Estructura de Archivos (Pendiente)
```
src/app/registro-avanzado/
├── registro-avanzado.component.ts
├── registro-avanzado.component.html
├── registro-avanzado.component.css
└── validators.service.ts
```

### Conceptos Clave a Implementar
- Validadores asíncronos (AsyncValidatorFn)
- Observables y operadores RxJS (delay, map)
- Simulación de promesas y llamadas API
- Manejo de estados de carga (pending)
- Servicios de validación

### Funcionalidades Previstas
- Validador asincrónico de email único (simula verificación en BD)
- Validador asincrónico de username disponible
- Indicadores visuales de "Verificando..."
- Estados de carga durante validación
- Delay simulado para representar llamadas HTTP

**Estado:** Pendiente de implementación

---

## Práctica 5: FormGroup Anidados y Patrón Dinámico Complejo

### Descripción
Formulario complejo con FormGroup anidados para modelar estructuras jerárquicas de datos. Perfil de usuario con información personal y múltiples direcciones.

### Objetivos de Aprendizaje
- Crear y manipular FormGroup anidados
- Implementar validación a nivel de grupo
- Gestionar complejidad en formularios de múltiples niveles
- Aplicar patrones avanzados de reactividad

### Estructura de Archivos (Pendiente)
```
src/app/perfil-usuario/
├── perfil-usuario.component.ts
├── perfil-usuario.component.html
└── perfil-usuario.component.css
```

### Conceptos Clave a Implementar
- FormGroup anidados (información personal + direcciones)
- FormArray avanzado para múltiples direcciones
- Validación a nivel de grupo
- Patrones complejos de reactividad
- Gestión jerárquica de datos

### Funcionalidades Previstas
- FormGroup anidado para información personal (nombre, apellido, teléfono, fecha nacimiento)
- FormArray para múltiples direcciones (tipo, calle, ciudad, código postal, país)
- Cálculo automático de edad desde fecha de nacimiento
- Agregar/eliminar direcciones dinámicamente (mínimo 1)
- Generación de resumen del perfil
- Validación de patrones (teléfono, código postal)

**Estado:** Pendiente de implementación

---

## Instalación y Configuración

### Requisitos Previos
- Node.js (versión 18 o superior)
- Angular CLI 20.3.9
- npm o yarn

### Instalación
```bash
npm install
```

### Ejecutar Servidor de Desarrollo
```bash
ng serve
```
Navegar a `http://localhost:4200/`

### Compilar para Producción
```bash
ng build
```

### Ejecutar Tests
```bash
ng test
```

## Estructura del Proyecto

```
src/app/
├── components/          # Componentes reutilizables
│   ├── navbar/
│   └── footer/
├── pages/              # Páginas principales
│   ├── home/
│   └── dashboard/
├── services/           # Servicios
├── shared/             # Recursos compartidos
├── core/               # Configuración core
├── registro/           # Práctica 1 - Template-Driven
├── productos/          # Práctica 2 - Reactive Forms (Pendiente)
├── factura/            # Práctica 3 - FormArray (Pendiente)
├── registro-avanzado/  # Práctica 4 - Async Validators (Pendiente)
└── perfil-usuario/     # Práctica 5 - Nested FormGroups (Pendiente)
```

## Tecnologías Utilizadas

- Angular 20.3.0
- TypeScript 5.9.2
- FormsModule (Template-Driven Forms)
- ReactiveFormsModule (Reactive Forms)
- RxJS 7.8.0
- CommonModule

## Recursos y Documentación

- [Angular Forms Guide](https://angular.dev/guide/forms)
- [Template-Driven Forms](https://angular.dev/guide/forms/template-driven-forms)
- [Reactive Forms](https://angular.dev/guide/forms/reactive-forms)
- [Form Validation](https://angular.dev/guide/forms/form-validation)
- [Dynamic Forms](https://angular.dev/guide/forms/dynamic-forms)

## Progreso del Proyecto

- [x] Práctica 1: Formulario Template-Driven - Registro de Usuario
- [ ] Práctica 2: Formulario Reactivo - Gestión de Productos
- [ ] Práctica 3: Validadores Personalizados y FormArray
- [ ] Práctica 4: Validación Asincrónica e Integración con API
- [ ] Práctica 5: FormGroup Anidados y Patrón Dinámico Complejo

## Autor

Francisco Alba Muñoz
