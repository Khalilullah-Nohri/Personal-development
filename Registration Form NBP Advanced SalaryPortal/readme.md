# Advanced Salary Application Form

## Project Overview

This project is a practice implementation of an **Advanced Salary Application Form** built using **React** and **Django**. The application is designed to collect employment data for individuals who wish to apply for an advanced salary. The form includes various features like real-time validation, secure data handling, and a mobile-responsive design.

## Key Features

- **User-Friendly Interface:** Intuitive design with clear instructions to guide participants through the registration process.
- **Secure Data Handling:** Ensures participant information is securely stored and managed using Django and SQLite.
- **Real-Time Validation:** Provides immediate feedback on input fields to enhance the user experience and reduce errors.
- **Mobile-Responsive Design:** Accessible on all devices, ensuring participants can register from anywhere.
- **API Integration:** Efficient data handling using Django REST framework to manage and retrieve registration data.

## Technical Details

- **Frontend:** React, Tailwind CSS
- **Backend:** Django, Django REST framework
- **Database:** SQLite3
- **CORS Management:** django-cors-headers to handle cross-origin requests
- **HTTP Requests:** Axios in React to communicate with Django REST API

## Setup Instructions

### Prerequisites

- Python 3.x
- Node.js
- npm or yarn

### Backend Setup (Django)

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Khalilullah-Nohri/Personal-development.git
   cd "Registration Form NBP Advanced SalaryPortal"
   ```
2. **Create a Virtual Environment:**
```bash
It's upto u if u want to create virtual environement use these command if not skip this step

python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`

```   
3. **Install Required Python Packages:**
```bash
pip install -r requirements.txt

```
4. **Apply Migrations:**
```bash
python manage.py migrate

```
5. **Run the Django Development Server:**
```bash
python manage.py runserver
```

### Frontend Setup (React)

#### Navigate to the Frontend Directory:

``` bash
cd simpleform
```
#### Install Dependencies:

``` bash
npm install
```
#### Run the React Development Server:

```bash
npm start
```
### Tailwind CSS Setup
Tailwind CSS is already configured in the project. If you need to set it up manually, follow these steps:

1. #### Install Tailwind CSS via npm:

``` bash
npm install -D tailwindcss
```
2. #### Initialize Tailwind CSS:

```bash
npx tailwindcss init
```
3. #### Configure Tailwind in your tailwind.config.js:

```bash

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. #### Include Tailwind in your CSS:

In your index.css or equivalent file, include the following lines:

``` bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Usage

- **Access the Application:**
  - Backend: `http://127.0.0.1:8000/`
  - Frontend: `http://localhost:3000/`


### Summary

- **Setup Instructions:** Detailed steps for setting up both the backend (Django) and frontend (React) environments, including Tailwind CSS configuration.
- **Usage:** Clear instructions on how to access the backend and frontend of the application.
- **Complete Structure:** Everything is included in one cohesive `README.md` file, ready to be added to your project.

