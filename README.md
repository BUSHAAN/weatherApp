# Weather App – Full Stack

A secure weather information application with API proxying, caching, and authentication using React, Node.js, and Auth0.

---

##  Features

### Part 1: Weather Data
- Reads city IDs from a `cities.json`.
- Fetches weather info from OpenWeatherMap via a backend proxy.
- Displays city name, weather condition, and temperature.
- Uses React Query for efficient caching (5-minute expiration).
- Responsive UI for both mobile and desktop.

### Part 2: Authentication & Authorization
- Login and logout via Auth0 with SPA + JWT authentication model.
- Secure backend endpoint that verifies JWT tokens before returning data.
- Multi-Factor Authentication (MFA) enabled.

---

##  Project Structure

weather-app/<br>
├── backend/ # Node.js + Express backend<br>
├── frontend/ # React frontend<br>
├── .gitignore<br>
└── README.md

##  Tech Stack

- **Backend**: Node.js, Express  
- **Frontend**: React, React Query (TanStack), Tailwind CSS
- **Auth**: Auth0 (SPA + JWT + MFA)  
- **Weather API**: OpenWeatherMap (accessed via backend)

---

##  Setup & Run Instructions

Clone the repo:

```bash
git clone https://github.com/BUSHAAN/weatherApp.git
cd weather-app
```

## Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Create an .env file with:

```bash
OPENWEATHER_API_KEY=your_openweather_api_key_here
```

Install dependencies and start:

```bash
npm install
npm run dev
```

## Frontend Setup

In another terminal:

```bash
cd frontend
```

Create a .env file:
```bash
VITE_BACKEND_URL=http://localhost:8080/api
```

Install dependencies and start:

```bash
npm install
npm run dev
```

## Access The App

- Open your browser at: http://localhost:5173
- Login with Auth0, then access the weather dashboard.


## Auth0 Notes

- Auth0 is configured as a Single Page Application (SPA).
- Backend endpoints are secured with JWT validation.
- MFA is enabled, but due to Auth0 restrictions, email cannot be the sole MFA factor. It must be paired with at least one other factor (e.g., SMS or OTP)






