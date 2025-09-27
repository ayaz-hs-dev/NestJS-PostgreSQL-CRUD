Got it 👍 Let’s make a clean **README.md** for your NestJS + Prisma + PostgreSQL project with Users & Tasks. You can copy this into your repo directly.

---

# 📌 NestJS + Prisma + PostgreSQL (Users & Tasks API)

A simple CRUD API built with **NestJS**, **Prisma ORM**, and **PostgreSQL**.
It manages **Users** and their **Tasks** (One-to-Many relationship).

---

## 🚀 Features

* 👤 **User Management**

  * Create, read, update, delete users
* ✅ **Task Management**

  
  * Create, read, update, delete tasks

* 🗄️ **PostgreSQL Database** with Prisma ORM
* 🔗 **One-to-Many relation** (User → Tasks)
* 🛠️ Fully REST API, testable with Postman

---

## 📂 Project Structure

```
src/
 ├── app.module.ts
 ├── prisma/
 │   └── prisma.service.ts
 │   └── prisma.module.ts
 ├── user/
 │   ├── user.controller.ts
 │   ├── user.service.ts
 │   ├── user.module.ts
 │   └── dto/create-user.dto.ts
 │   └── dto/update-user.dto.ts
 └── task/
     ├── task.controller.ts
     └── task.service.ts
     └── task.module.ts
 │   └── dto/create-task.dto.ts
 │   └── dto/update-task.dto.ts
```

---

## 🛠️ Installation & Setup

### 1. Clone repo

```sh
git clone https://github.com/ayaz-hs-dev/NestJS-PostgreSQL-CRUD
cd NestJS-PostgreSQL-CRUD
```

### 2. Install dependencies

```sh
npm install
```

### 3. Setup PostgreSQL

* Create a database (e.g. `myappdb`)
* Update **`.env`** file:

```env
DATABASE_URL="postgresql://myappuser:password@localhost:5432/myappdb?schema=public"
```

### 4. Run Prisma migrations

```sh
npx prisma migrate dev --name init
```

### 5. Start NestJS server

```sh
npm run start:dev
```

---

## 🧑‍💻 API Endpoints

### Users

* **POST /users** → Create a user
  Body:

  ```json
  { "name": "John Doe", "email": "john@example.com" }
  ```
* **GET /users** → Get all users
* **GET /users/:id** → Get single user
* **PATCH /users/:id** → Update user
* **DELETE /users/:id** → Delete user

### Tasks

* **POST /tasks/:userId** → Create task for a user
  Body:

  ```json
  { "title": "Finish NestJS practice" }
  ```
* **GET /tasks/user/:userId** → Get all tasks of a user

---

## 🛠️ Tech Stack

* [NestJS](https://nestjs.com/) – Backend Framework
* [Prisma](https://www.prisma.io/) – ORM
* [PostgreSQL](https://www.postgresql.org/) – Database
* [TypeScript](https://www.typescriptlang.org/)

---

## 📜 License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
