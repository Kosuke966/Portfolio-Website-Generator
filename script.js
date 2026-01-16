const themeSwitch = document.getElementById("themeSwitch");
const form = document.getElementById("resumeForm");
const preview = document.getElementById("resumePreview");
const downloadBtn = document.getElementById("downloadBtn");

// Theme toggle
themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("light", themeSwitch.checked);
});

// Render resume
function renderResume(data) {
  preview.innerHTML = `
    <div class="resume-section">
      <h1>${data.name}</h1>
      <h3>${data.title || ""}</h3>
      <p>${data.about || ""}</p>
      <p>Email: ${data.email || ""} | Phone: ${data.phone || ""}</p>
    </div>

    <div class="resume-section">
      <h2>Skills</h2>
      <div class="skills">${(data.skills || []).map(s => `<span>${s}</span>`).join("")}</div>
    </div>

    <div class="resume-section">
      <h2>Experience</h2>
      ${(data.experience || []).map(e => `
        <div class="card">
          <strong>${e.role}</strong> — ${e.company} (${e.period})
        </div>
      `).join("")}
    </div>

    <div class="resume-section">
      <h2>Projects</h2>
      ${(data.projects || []).map(p => `
        <div class="card">
          <strong>${p.name}</strong>
          <p>${p.description}</p>
          <a href="${p.link}" target="_blank">${p.link}</a>
        </div>
      `).join("")}
    </div>
  `;
}

// Form submit
form.addEventListener("submit", e => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    title: document.getElementById("title").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    about: document.getElementById("about").value,
    skills: document.getElementById("skills").value.split(",").map(s => s.trim()).filter(Boolean),
    experience: JSON.parse(document.getElementById("experience").value || "[]"),
    projects: JSON.parse(document.getElementById("projects").value || "[]")
  };

  renderResume(data);
});

// Download as PDF using html2pdf.js
downloadBtn.addEventListener("click", () => {
  const element = document.getElementById("resumePreview");
  const filename = `${document.getElementById("name").value || "resume"}.pdf`;

  html2pdf().set({
    margin:       0.5,
    filename:     filename,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  }).from(element).save();
});
