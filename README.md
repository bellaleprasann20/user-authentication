# User Authentication System

A secure and robust user authentication system with registration, login, password reset, and session management features.

## Features

- User registration with email verification
- Secure login with JWT tokens
- Password hashing with bcrypt
- Password reset functionality
- Email verification
- Session management
- Protected routes
- Role-based access control (RBAC)
- OAuth integration (Google, Facebook)
- Two-factor authentication (2FA)
- Remember me functionality
- Account lockout after failed attempts

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB / PostgreSQL
- JWT (jsonwebtoken)
- Bcrypt
- Nodemailer
- Passport.js (OAuth)
- Express-validator

### Frontend
- React.js
- Axios
- React Router
- Context API / Redux

## Installation

### Prerequisites
- Node.js (v14+)
- MongoDB or PostgreSQL
- SMTP server credentials (for email)

### Backend Setup

1. Clone the repository:
```bash
git clone https://github.com/bellaleprasann20/userauthentication.git
cd userauthentication
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```
PORT=5000
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
CLIENT_URL=http://localhost:3000
```

4. Start the server:
```bash
npm start
```

### Frontend Setup

1. Navigate to client directory:
```bash
cd client
npm install
```

2. Create `.env`:
```
REACT_APP_API_URL=http://localhost:5000
```

3. Start frontend:
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/verify/:token` - Verify email
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password/:token` - Reset password
- `GET /api/auth/me` - Get current user

### User Management
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `DELETE /api/users/account` - Delete account

## Security Features

- Password hashing using bcrypt (10 rounds)
- JWT token authentication
- HTTP-only cookies for token storage
- CORS configuration
- Rate limiting
- Input validation and sanitization
- XSS protection
- SQL injection prevention
- CSRF protection

## Project Structure

```
userauthentication/
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── server.js
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.js
│   └── public/
└── README.md
```

## Usage

### Registration
1. User fills registration form
2. System validates input
3. Password is hashed
4. Verification email sent
5. User clicks verification link
6. Account activated

### Login
1. User enters credentials
2. System validates credentials
3. JWT token generated
4. Token stored in HTTP-only cookie
5. User redirected to dashboard

## Environment Variables

Required environment variables:
- `DATABASE_URL` - Database connection string
- `JWT_SECRET` - Secret key for JWT
- `EMAIL_USER` - Email for sending notifications
- `EMAIL_PASS` - Email password/app password

## Testing

Run tests:
```bash
npm test
```

## Contributing

Contributions welcome! Please read contribution guidelines first.

## License

MIT License

## Support

For issues or questions, please open an issue on GitHub.

---

**Commit Message:** `docs: add README for secure user authentication system`