/**
 * DYNAMIC DATA STORE
 */
const portfolioData = {
    profile: {
        githubUser: "selva0604200",
        location: "Chennai, Tamil Nadu, India"
    },
    experience: [
        {
            company: "Cognizant",
            role: "Data Engineer",
            period: "Dec 2025 – Present",
            location: "Chennai, India · Hybrid",
            bullets: [
                "Architecting enterprise-grade cloud data platforms utilizing AWS Glue, Lambda, and Step Functions.",
                "Engineering low-latency queries across Amazon S3 data lakes, Redshift clusters, and Athena analytics engines.",
                "Designing high-throughput stream processing pipelines with AWS Kinesis and PySpark."
            ],
            tags: ["Python", "SQL", "AWS Glue", "Redshift", "Athena", "PySpark", "Kinesis"]
        },
        {
            company: "Cognizant",
            role: "Program Analyst Trainee",
            period: "Dec 2024 – Dec 2025",
            location: "Chennai, India",
            bullets: [
                "Analyzed complex technical requirements for cloud pipelines and automated DAG workflows.",
                "Executed advanced SQL query optimization for enterprise database validation and analytics."
            ],
            tags: ["SQL", "Python", "Data Analysis", "Query Tuning"]
        },
        {
            company: "Omega Healthcare Management Services",
            role: "Accounts Receivable Caller",
            period: "Jun 2023 – Nov 2024",
            location: "Tamil Nadu, India",
            bullets: [
                "Investigated complex financial claim datasets to optimize reimbursement turnaround time."
            ],
            tags: ["Dataset Analysis", "Time Management", "Problem Solving"]
        }
    ],
    skills: [
        { category: "Compute", name: "Apache Spark (PySpark)" },
        { category: "Compute", name: "Spark SQL" },
        { category: "Cloud & Warehousing", name: "AWS (S3, Glue, Redshift, Athena)" },
        { category: "Cloud & Warehousing", name: "Snowflake Warehouse" },
        { category: "Cloud & Warehousing", name: "Azure Data Factory" },
        { category: "Cloud & Warehousing", name: "PostgreSQL" },
        { category: "Orchestration", name: "Apache Airflow" },
        { category: "Orchestration", name: "Apache Kafka" },
        { category: "Orchestration", name: "AWS Kinesis Streaming" },
        { category: "Languages", name: "Python" },
        { category: "Languages", name: "SQL" },
        { category: "Languages", name: "C / C++" }
    ]
};

/**
 * APPLICATION INIT & DOM CONTROLLER
 */
document.addEventListener("DOMContentLoaded", () => {
    renderExperience();
    renderSkills('All');
    fetchGitHubProjects();
    initClock();
    initSpotlightPhysics();
    initTerminalSimulator();
    initCanvasEngine();
});

// Dynamic Experience Timeline Renderer
function renderExperience() {
    const target = document.getElementById("dynamic-experience-target");
    if (!target) return;

    target.innerHTML = portfolioData.experience.map(exp => `
        <div class="timeline-item">
            <div class="timeline-role">${exp.role} — <span style="color:var(--accent-blue);">${exp.company}</span></div>
            <div class="timeline-company">${exp.period} · ${exp.location}</div>
            <ul class="timeline-bullets">
                ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
            </ul>
            <div class="pills-grid" style="margin-top:0.8rem;">
                ${exp.tags.map(t => `<span class="pill-tag" style="font-size:0.75rem; padding:0.25rem 0.75rem;">${t}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Dynamic Skill Filter Controller
function renderSkills(category = 'All') {
    const target = document.getElementById("dynamic-skills-target");
    if (!target) return;

    const filtered = category === 'All' 
        ? portfolioData.skills 
        : portfolioData.skills.filter(s => s.category === category);

    target.innerHTML = filtered.map(s => `<span class="pill-tag">${s.name}</span>`).join('');
}

function filterSkills(cat, btn) {
    document.querySelectorAll('#filter-tabs .filter-tab').forEach(t => t.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderSkills(cat);
}

// Dynamic GitHub REST API Fetcher
async function fetchGitHubProjects() {
    const target = document.getElementById("dynamic-github-target");
    if (!target) return;

    try {
        const res = await fetch(`https://api.github.com/users/${portfolioData.profile.githubUser}/repos?sort=updated&per_page=4`);
        const repos = await res.json();

        if (!Array.isArray(repos) || repos.length === 0) {
            target.innerHTML = `<p style="color:var(--text-secondary);">No public repositories found.</p>`;
            return;
        }

        target.innerHTML = repos.map(repo => `
            <div style="background:rgba(255,255,255,0.02); border:1px solid var(--border-glass); padding:1.2rem; border-radius:14px; display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                    <div style="color:var(--accent-cyan); font-weight:600; font-size:1rem; margin-bottom:0.4rem;">${repo.name}</div>
                    <p style="color:var(--text-secondary); font-size:0.82rem; line-height:1.4; margin-bottom:1rem;">${repo.description || 'Data engineering pipeline repository.'}</p>
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.78rem;">
                    <span style="color:var(--accent-green);">★ ${repo.stargazers_count} | ${repo.language || 'Python'}</span>
                    <a href="${repo.html_url}" target="_blank" style="color:var(--accent-blue); text-decoration:none;">View Repo ↗</a>
                </div>
            </div>
        `).join('');
    } catch (err) {
        target.innerHTML = `<p style="color:var(--text-secondary);">Unable to fetch GitHub live data.</p>`;
    }
}

// Live IST Node Clock
function initClock() {
    const clock = document.getElementById("live-status-clock");
    if (!clock) return;

    const update = () => {
        const options = { timeZone: "Asia/Kolkata", hour: '2-digit', minute: '2-digit', second: '2-digit' };
        clock.textContent = `Chennai IST Node: ${new Date().toLocaleTimeString("en-US", options)}`;
    };
    update();
    setInterval(update, 1000);
}

// Specular Cursor Spotlight Effect
function initSpotlightPhysics() {
    document.addEventListener('mousemove', e => {
        const cards = document.querySelectorAll('.bento-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });
    });
}

// Interactive Console Simulator
function initTerminalSimulator() {
    const logOutput = document.getElementById("terminal-logs");
    if (!logOutput) return;

    const logs = [
        "✔ Connected to AWS Glue Catalog [Schema: enterprise_lakehouse]",
        "⚡ Executing PySpark Worker Nodes: 12 Active Workers",
        "✔ Partitioning S3 Parquet datasets by date_key",
        "✔ Amazon Redshift Load Completed: 1,420,000 rows processed (0.42s latency)"
    ];

    let index = 0;
    setInterval(() => {
        if (index < logs.length) {
            logOutput.textContent += `\n${logs[index]}`;
            index++;
        }
    }, 1800);
}

// 3D Canvas Background Engine
function initCanvasEngine() {
    const canvas = document.getElementById('galaxy-canvas');
    const ctx = canvas && canvas.getContext('2d', { alpha: true });
    if (!canvas || !ctx) return;

    let width = 0, height = 0, cx = 0, cy = 0;
    let stars = [];

    function resize() {
        width = canvas.width = innerWidth;
        height = canvas.height = innerHeight;
        cx = width / 2; cy = height / 2;
        stars = Array.from({ length: 600 }, () => ({
            x: (Math.random() - 0.5) * width * 2,
            y: (Math.random() - 0.5) * height * 2,
            z: Math.random() * width,
            color: ['#ffffff', '#2997ff', '#64d2ff'][Math.floor(Math.random() * 3)]
        }));
    }

    function render() {
        ctx.clearRect(0, 0, width, height);
        stars.forEach(s => {
            s.z -= 0.5;
            if (s.z <= 0) s.z = width;
            const k = 256 / s.z;
            const px = s.x * k + cx;
            const py = s.y * k + cy;

            if (px >= 0 && px < width && py >= 0 && py < height) {
                ctx.fillStyle = s.color;
                ctx.fillRect(px, py, Math.max(0.5, (1 - s.z / width) * 2), Math.max(0.5, (1 - s.z / width) * 2));
            }
        });
        requestAnimationFrame(render);
    }

    addEventListener('resize', resize);
    resize();
    render();
}
