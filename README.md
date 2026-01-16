 Portfolio Website Generator

A lightweight portfolio website generator built with pure HTML, CSS, and JavaScript.  
It dynamically generates a responsive, SEO-friendly portfolio website from a single
`portfolio.json` file — with no build tools, frameworks, or backend required.

The project is designed to work entirely online and can be deployed easily using
GitHub Pages.

---

 Features

-  Generate a portfolio from `portfolio.json`
-  Sections: About, Projects, Skills, Experience, Contact
-  Easy theme customization (colors & fonts via CSS variables)
-  Fully responsive layout
-  SEO-friendly semantic HTML
-  Zero build step (runs directly in the browser)
-  Free deployment using GitHub Pages

---

 Tech Stack

- HTML5
- CSS3 (Flexbox & Grid)
- Vanilla JavaScript
- GitHub Pages (hosting)

---

 Project Structure
 How It Works

1. Portfolio content is defined inside `portfolio.json`
2. JavaScript fetches and parses the JSON data
3. Page sections are rendered dynamically
4. The site is served as a static webpage

---

 Example `portfolio.json`

```json
{
  "name": "Alex Doe",
  "title": "Frontend Developer",
  "about": "I build clean, accessible, and performant web interfaces.",
  "skills": ["HTML", "CSS", "JavaScript"],
  "projects": [
    {
      "name": "Portfolio Generator",
      "description": "A JSON-driven static portfolio website",
      "link": "https://github.com/yourname/portfolio-generator"
    }
  ],
  "experience": [
    {
      "company": "Startup X",
      "role": "Frontend Developer",
      "period": "2023 – Present"
    }
  ],
  "contact": {
    "email": "alex@email.com",
    "github": "https://github.com/yourname"
  }
}


