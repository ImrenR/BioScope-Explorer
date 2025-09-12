# Bioscope

Bioscope is a React-based web application that allows users to explore different types of bacteria. It provides search and filtering functionality with a clean Bootstrap-based UI.

---

## Features

- Search bacteria by name or group.
-  Bacteria cards with image, description, and group information.
- Filter section (Gram Positive / Gram Negative dropdown and filters button).
-  Responsive Navbar with brand, navigation links, and search bar.
- Styled with Bootstrap 5 + custom CSS.
- Interactive UI with hover effects and modern fonts.

---

## Tech Stack

- React 18 (functional components + hooks)

- Bootstrap 5 (layout and responsiveness)

- React Icons (react-icons/io5 for filter icon)

- Custom CSS with Google Fonts

---

## Project Structure

```
src/
 ├── App.jsx               # Main entry point
 ├── index.js              # ReactDOM render
 ├── Components/
 │    ├── BacteriaCard.jsx # Displays bacteria cards
 │    ├── GramPN.jsx       # Dropdown & filter button
 │    ├── NavBar.jsx       # Navigation bar
 ├── Helper/
 │    └── Bacterium.js     # Bacteria dataset
 ├── pages/
 │    └── Home.jsx         # Home page with search + list
 ├── assets/
 │    └── images/          # Images used in cards
 └── styles/
      └── index.css        # Custom CSS
```


## Installation

Clone the repository:

git clone https://github.com/ImrenR/bioscope.git
cd bioscope


Install dependencies:

npm install


Start the development server:

npm run dev


Open in browser:
👉 http://localhost:5173
 (Vite default)


👨‍💻 Author

Developed by ImrenR

Open to contributions, suggestions, and feedback!

