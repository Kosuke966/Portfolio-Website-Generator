fetch("portfolio.json")
  .then(res => res.json())
  .then(data => renderPortfolio(data))
  .catch(err => console.error("Failed to load portfolio data", err));

function renderPortfolio(data) {
  document.title = `${data.name} | Portfolio`;

  document.getElementById("hero").innerHTML = `
    <h1>${data.name}</h1>
    <p>${data.title}</p>
  `;

  document.getElementById("about").innerHTML = `
    <h2>About</h2>
    <p>${data.about}</p>
  `;

  document.getElementById("skills").innerHTML = `
    <h2>Skills</h2>
    <div class="skills">
      ${data.skills.map(skill => `<span>${skill}</span>`).join("")}
    </div>
  `;

  document.getElementById("projects").innerHTML = `
    <h2>Projects</h2>
    ${data.projects.map(p => `
      <div class="card">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <a href="${p.link}" target="_blank">View Project</a>
      </div>
    `).join("")}
  `;

  document.getElementById("experience").innerHTML = `
    <h2>Experience</h2>
    ${data.experience.map(e => `
      <div class="card">
        <strong>${e.role}</strong> — ${e.company}
        <div>${e.period}</div>
      </div>
    `).join("")}
  `;

  document.getElementById("contact").innerHTML = `
    <h2>Contact</h2>
    <p>Email: <a href="mailto:${data.contact.email}">${data.contact.email}</a></p>
    <p>GitHub: <a href="${data.contact.github}" target="_blank">${data.contact.github}</a></p>
  `;
