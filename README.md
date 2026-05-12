# SMTP Tester ✉️

A modern, fast, and beautiful web application to test your SMTP server credentials and configuration. Built with React, Vite, Tailwind CSS v4, and an Express/Nodemailer backend.

## Features

- 🎨 **Premium UI:** Built with Tailwind CSS v4 featuring glassmorphism, animations, and a responsive design.
- 🔒 **Secure Testing:** Supports TLS, SSL, and unencrypted connections.
- ⚡ **Instant Feedback:** Validates credentials and sends a real test email with real-time success/error toasts.
- 🛠️ **Full Stack:** Comes with a ready-to-use Express backend powered by Nodemailer.

## Prerequisites

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (Node Package Manager)

## Installation & Setup

This project requires you to run two servers simultaneously: the React frontend and the Express backend.

### 1. Backend Setup

The backend handles the actual SMTP connection and email sending.

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Start the server
npm start
```
*The backend server will start on `http://localhost:5000`.*

### 2. Frontend Setup

The frontend provides the user interface to input credentials. Open a **new terminal window/tab** for this:

```bash
# Navigate to the root directory
cd smtp-tester

# Install dependencies
npm install

# Start the development server
npm run dev
```
*The frontend will be available at `http://localhost:5173` (or the port specified in your terminal).*

## Usage

1. Open your browser and navigate to the frontend URL.
2. Enter your SMTP Host (e.g., `smtp.gmail.com`) and Port (e.g., `587` or `465`).
3. Provide your authentication credentials (Username and Password/App Password).
4. Select the encryption type matching your port.
5. Fill in the "From" and "To" test email addresses.
6. Click **Send Test Email**.

If successful, you will receive a toast notification and an actual email in the target inbox. If it fails, the UI will display the specific error returned by your SMTP provider.

## Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS v4, Framer Motion, Lucide React, Axios, React Hot Toast
- **Backend:** Node.js, Express, Nodemailer, CORS
