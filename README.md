# Tour & Travel UI

A modern, responsive tour and travel website built with **React**. Explore destinations, read travel blogs, and discover places with smooth scroll animations and a clean user interface.

> **Live Demo:** https://tour-and-travel-react-ui.vercel.app/

---

## Features

- Responsive design for mobile, tablet, and desktop
- Multi-page navigation with React Router
- Home, About, Blogs, Blog Details, and Places pages
- Smooth scroll animations powered by AOS
- Dynamic blog detail pages (`/blogs/:id`)
- Custom 404 page for unknown routes
- Visitor analytics with Vercel Analytics
- Shared layout (navbar and footer) across all pages

---

## Tech Stack

| Category   | Technology                    |
| ---------- | ----------------------------- |
| Framework  | React                         |
| Routing    | React Router DOM              |
| Animations | AOS (Animate On Scroll)       |
| Analytics  | Vercel Analytics              |
| Styling    | Tailwind CSS *(or your CSS)*  |
| Deployment | Vercel                        |

---

## Project Structure

```
src/
├── pages/
│   ├── Layout.jsx        # Shared layout (navbar, footer, outlet)
│   ├── Home.jsx          # Landing page
│   ├── About.jsx         # About us page
│   ├── Blogs.jsx         # Blog listing page
│   ├── BlogDetails.jsx   # Single blog post page
│   ├── PlaceRoute.jsx    # Places / destinations page
│   └── Nopage.jsx        # 404 page
├── components/           # Reusable UI components
├── assets/               # Images and static files
├── App.jsx               # Routes and app setup
└── main.jsx              # Entry point
```

---

## Routes

| Path          | Page          | Description                  |
| ------------- | ------------- | ---------------------------- |
| `/`           | Home          | Landing page                 |
| `/about`      | About         | About the company            |
| `/blogs`      | Blogs         | List of travel blogs         |
| `/blogs/:id`  | BlogDetails   | Full blog post               |
| `/places`     | PlaceRoute    | Destinations and places      |
| `*`           | Nopage        | 404 Not Found                |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   If you use Create React App, run `npm start` instead.

4. **Open the app** in your browser at `http://localhost:5173` (Vite) or `http://localhost:3000` (CRA).

---

## Available Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start the development server      |
| `npm run build`   | Create a production build         |
| `npm run preview` | Preview the production build      |

---

## Deployment

This project is deployed on **Vercel**.

1. Push your code to GitHub.
2. Import the repository on [vercel.com](https://vercel.com).
3. Vercel detects the framework and deploys automatically.

### SPA Routing Fix

Add a `vercel.json` file in the project root so that routes like `/blogs/1` work on page refresh:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### Analytics

Install the package and enable **Analytics** in your Vercel project dashboard:

```bash
npm i @vercel/analytics
```

```jsx
import { Analytics } from "@vercel/analytics/react";
```

---

## Screenshots

| Home | Blogs | Places |
| ---- | ----- | ------ |
| ![Home](./screenshots/home.png) | ![Blogs](./screenshots/blogs.png) | ![Places](./screenshots/places.png) |

---

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

**Your Name**
Email: your-email@example.com
GitHub: [@your-username](https://github.com/your-username)
