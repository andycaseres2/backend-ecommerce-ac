# E-commerce API

API REST para un e-commerce construida con **Node.js, Express y TypeScript**, con persistencia en **MongoDB** y organizada por módulos con separación en capas (dominio, casos de uso y controladores).

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)

## Características

- CRUD de **productos** con filtro por categoría.
- CRUD de **usuarios** (módulo `auth`).
- Validación de datos de entrada con `class-validator` y DTOs.
- Repositorio base reutilizable (`share/base.repo.ts`) sobre Mongoose.
- MongoDB local con Docker Compose y despliegue serverless en Vercel.

## Arquitectura

```
src/
├── config/            # conexión a la base de datos
├── modules/
│   ├── product/
│   │   ├── domain/        # entidad, interfaz, modelo y DTOs
│   │   ├── use_case/      # lógica de negocio
│   │   └── controllers/   # rutas HTTP
│   ├── auth/              # misma estructura para usuarios
│   └── share/             # repositorio base genérico
├── routes/            # registro de rutas bajo /api
└── index.ts           # app de Express
```

Cada módulo separa el **dominio** (qué es un producto) de los **casos de uso** (qué se puede hacer con él) y de la **capa HTTP**, para que la lógica de negocio no dependa de Express.

## Endpoints

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/product` | Lista todos los productos |
| GET | `/api/product/:id` | Obtiene un producto |
| GET | `/api/product/category/:category` | Filtra productos por categoría |
| POST | `/api/product` | Crea un producto |
| PATCH | `/api/product/:id` | Actualiza un producto |
| DELETE | `/api/product/:id` | Elimina un producto |
| GET | `/api/auth` | Lista usuarios |
| GET | `/api/auth/:id` | Obtiene un usuario |
| POST | `/api/auth` | Crea un usuario |
| PATCH | `/api/auth/:id` | Actualiza un usuario |
| DELETE | `/api/auth/:id` | Elimina un usuario |

Modelo de producto:

```ts
{
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  likes: number;
}
```

## Cómo correrlo

Requisitos: Node.js 18+ y Docker.

```bash
# 1. Levantar MongoDB
docker compose up -d

# 2. Instalar dependencias
npm install

# 3. Correr la API localmente (Vercel CLI)
npx vercel dev

# Compilar TypeScript
npm run build
```

La app de Express se exporta como función serverless y se despliega en Vercel (ver `vercel.json`).

---

Hecho por [Andy Caseres](https://andycaseres.vercel.app) · [LinkedIn](https://www.linkedin.com/in/andy-caseres/)
