# Resonance

Resonance is a comprehensive music platform designed to provide a "one-stop-shop" solution for musicians and music enthusiasts. It seamlessly connects artists with studio resources, essential musical equipment, and a vibrant community.

## Key Features

- **Studio & Practice Pad Booking:** Easily book recording sessions or practice spaces, with real-time tracking of room availability.
- **Collaboration Hub:** Musicians can post, discover, and connect with other artists to collaborate on new projects.
- **Instrument Rental:** Rent high-quality musical instruments based on location.
- **E-commerce Store:** A smooth, integrated shopping experience for purchasing a wide range of musical instruments and gear.
- **Artist Portfolio:** Showcase releases and manage collaborations directly through your profile.

## Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

---

## How to Run the Project

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (Running locally or a connection string for MongoDB Atlas)

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YAdnan408/Resonance-CSE471.git
   cd Resonance-CSE471
   ```

2. **Configure Environment Variables:**
   Create a `.env` file in the root directory (or appropriate folders if specified) and add your database URI, JWT secrets, and any other required configurations:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   # ... other required variables
   ```

3. **Install Dependencies and Run:**

   **Backend:**
   ```bash
   cd backend
   npm install
   npm start
   ```

   **Frontend:**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

The application will be accessible via the URL provided in your terminal (usually `http://localhost:5173` for the frontend).
