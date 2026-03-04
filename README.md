# Noteable

A full-stack notes management web application built with Laravel and React. It supports two user roles — **Client** (end-user) and **Admin** — each with their own authentication, dashboard, and management features.

---

## Tech Stack

| Layer      | Technology                                      |
|------------|-------------------------------------------------|
| Backend    | Laravel 12, PHP 8.2+                            |
| Frontend   | React 19, TypeScript, Inertia.js                |
| Styling    | Tailwind CSS v4, shadcn/ui, Radix UI            |
| Charts     | Recharts                                        |
| Auth       | Session-based (Client), JWT (Admin/API-ready)   |
| Storage    | AWS S3, Intervention Image                      |
| PDF/Export | Laravel Snappy (wkhtmltopdf), Maatwebsite Excel |
| AI         | Google GenAI SDK                                |
| Build Tool | Vite 7                                          |
| Testing    | PestPHP                                         |

---

## Requirements

- PHP >= 8.2
- Composer
- Node.js >= 18
- npm
- MySQL or compatible database
- (Optional) AWS S3 credentials for file storage
- (Optional) wkhtmltopdf for PDF export

---

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd noteable
```

### 2. Install PHP dependencies

```bash
composer install
```

### 3. Install Node dependencies

```bash
npm install
```

### 4. Set up environment file

```bash
cp .env.example .env
php artisan key:generate
```

### 5. Configure your `.env`

Update the following values in `.env`:

```env
APP_NAME=Noteable
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=noteable
DB_USERNAME=root
DB_PASSWORD=

MAIL_MAILER=smtp
MAIL_HOST=
MAIL_PORT=587
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_FROM_ADDRESS=no-reply@noteable.com
MAIL_FROM_NAME="${APP_NAME}"

# AWS S3 (optional)
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=
AWS_BUCKET=

# JWT (used for API auth)
JWT_SECRET=
```

Generate a JWT secret:

```bash
php artisan jwt:secret
```

### 6. Run database migrations

```bash
php artisan migrate
```

### 7. Seed the database (optional)

```bash
php artisan db:seed
```

---

## Running the Project

### Development

Run all services concurrently (Laravel server, queue worker, Vite):

```bash
composer dev
```

Or run them individually:

```bash
php artisan serve       # Laravel backend
npm run dev             # Vite frontend
php artisan queue:listen --tries=1
```

### Production Build

```bash
npm run build
```

---

## Folder Structure

```
noteable/
├── app/
│   ├── Http/
│   │   └── Controllers/
│   │       ├── Admin/          # Admin controllers
│   │       └── Client/         # Client controllers
│   └── Models/                 # Eloquent models (User, Admin, Note)
├── database/
│   └── migrations/             # Database schema migrations
├── resources/
│   └── js/
│       ├── components/         # Reusable UI components
│       ├── layouts/            # Admin and Client layouts
│       ├── pages/
│       │   ├── admin/          # Admin pages (auth, dashboard, users, notes, profile)
│       │   └── client/         # Client pages (auth, dashboard, notes, profile)
│       └── types/              # TypeScript type definitions
├── routes/
│   ├── web.php                 # Web routes (Client + Admin)
│   └── api.php                 # API routes
└── tests/                      # PestPHP test suites
```

---

## Features

### Client (End User)

- Register with OTP email verification
- Login / Logout
- Dashboard with notes statistics and chart
- Create, view, edit, and delete notes
- Profile management with avatar upload

### Admin

- Login / Logout
- Dashboard overview
- Manage users (create, edit, update status, reset password, delete)
- Manage clients (view, update status, delete)
- View and moderate all notes
- Profile management

---

## Routes Overview

### Client

| Method | URL                        | Description              |
|--------|----------------------------|--------------------------|
| GET    | `/login`                   | Login page               |
| POST   | `/authenticate`            | Authenticate user        |
| GET    | `/register`                | Registration page        |
| POST   | `/store-register`          | Submit registration      |
| GET    | `/verify/{token?}`         | OTP verification page    |
| POST   | `/store-verify/{token?}`   | Submit OTP               |
| GET    | `/dashboard`               | Client dashboard         |
| GET    | `/notes`                   | List notes               |
| POST   | `/notes/store`             | Create a note            |
| GET    | `/notes/edit/{id}`         | Edit note page           |
| POST   | `/notes/update/{id}`       | Update a note            |
| GET    | `/notes/show/{id}`         | View a note              |
| ANY    | `/notes/delete/{id}`       | Delete a note            |
| GET    | `/profile`                 | View profile             |
| POST   | `/profile/{id}`            | Update profile           |

### Admin

| Method | URL                                  | Description              |
|--------|--------------------------------------|--------------------------|
| GET    | `/admin/login`                       | Admin login page         |
| POST   | `/admin/authenticate`                | Authenticate admin       |
| GET    | `/admin`                             | Admin dashboard          |
| GET    | `/admin/users`                       | List users               |
| GET    | `/admin/users/create`                | Create user form         |
| POST   | `/admin/users/store`                 | Store new user           |
| GET    | `/admin/users/edit/{id}`             | Edit user form           |
| POST   | `/admin/users/update/{id}`           | Update user              |
| GET    | `/admin/users/update-status/{id}`    | Toggle user status       |
| GET    | `/admin/users/update-password/{id}`  | Reset user password      |
| ANY    | `/admin/users/delete/{id}`           | Delete user              |
| GET    | `/admin/clients`                     | List clients             |
| GET    | `/admin/notes`                       | List all notes           |
| GET    | `/admin/profile`                     | Admin profile            |

---

## Testing

```bash
composer test
```

Runs PSR-12 linting (Pint) and the full PestPHP test suite.

To lint only:

```bash
composer lint
```

---

## Deployment

1. Set `APP_ENV=production` and `APP_DEBUG=false` in `.env`
2. Run `npm run build` to compile frontend assets
3. Run `php artisan config:cache && php artisan route:cache && php artisan view:cache`
4. Ensure the queue worker is running (e.g., via Supervisor)
5. Point your web server document root to the `/public` directory
