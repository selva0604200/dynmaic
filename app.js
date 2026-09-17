/**
 * 1. DYNAMIC DATA STORE
 */
const portfolioData = {
    profile: {
        name: "Selvendiran S",
        title: "Data Engineer",
        location: "Chennai, Tamil Nadu, India",
        email: "abishake06042002@gmail.com",
        githubUser: "selva0604200",
        linkedin: "https://www.linkedin.com/in/selvendiran-s-6a91351a8/"
    },
    experience: [
        {
            company: "Cognizant",
            role: "Data Engineer",
            period: "Dec 2025 – Present",
            location: "Chennai, India · Hybrid",
            bullets: [
                "Building and supporting enterprise-grade cloud data solutions on Amazon Web Services (AWS).",
                "Developing scalable ETL/ELT workflows using AWS Glue, AWS Lambda, and Step Functions.",
                "Optimizing query performance across Amazon S3, Redshift, and Athena for distributed analysis.",
                "Building stream and batch data integration pipelines using AWS Kinesis and PySpark."
            ],
            tags: ["Python", "SQL", "AWS Glue", "S3", "Redshift", "Athena"]
        },
        {
            company: "Cognizant",
            role: "Program Analyst Trainee",
            period: "Dec 2024 – Dec 2025",
            location: "Chennai, India",
            bullets: [
                "Analyzed complex technical requirements for data applications and automated pipeline workflows.",
                "Executed SQL queries for database analysis, report generation, and data validation."
            ],
            tags: ["SQL", "Python", "Data Analysis", "Problem Solving"]
        },
        {
            company: "Omega Healthcare Management Services",
            role: "Accounts Receivable Caller",
            period: "Jun 2023 – Nov 2024",
            location: "Tamil Nadu, India",
            bullets: [
                "Managed financial claim investigations and resolved denied/pending insurance claims.",
                "Analyzed claim datasets to optimize reimbursement turnaround time."
            ],
            tags: ["Analytical Skills", "Communication", "Time Management"]
        }
    ],
    skills: [
        { category: "Compute", name: "Apache Spark (PySpark)" },
        { category: "Compute", name: "Spark SQL" },
        { category: "Orchestration", name: "Apache Airflow" },
        { category: "Orchestration", name: "Apache Kafka" },
        { category: "Cloud & Storage", name: "AWS (S3, Glue, Redshift, Athena)" },
        { category: "Cloud & Storage", name: "Azure Data Factory" },
        { category: "Cloud & Storage", name: "Snowflake Warehouse" },
        { category: "Cloud & Storage", name: "PostgreSQL" },
        { category: "Languages", name: "Python" },
        { category: "Languages", name: "SQL" }
    ],
    certifications: [
        {
            title: "Claude Partner Badge - Claude Code",
            issuer: "Anthropic",
            date: "Sep 2026",
            link: "https://www.credly.com/badges/f3dc86b3-9f07-497d-8925-32d9a602271d/linked_in_profile",
            icon: "AI"
        },
        {
            title: "AI Fluency Framework & Foundations",
            issuer: "Anthropic",
            date: "Sep 2026",
            link: "https://verify.skilljar.com/c/52ratjsamy5w",
            icon: "AI"
        },
        {
            title: "Context Engineering Foundation",
            issuer: "Cognizant",
            date: "Apr 2026",
            link: "https://www.credly.com/badges/f58fcdc2-a8cc-4c02-a352-4ae7a851d3b5/linked_in_profile",
            icon: "◆"
        }
    ]
};

/**
 * 2. APPLICATION INITIALIZATION
 */
document.addEventListener("DOMContentLoaded", () => {
    renderExperience();
    renderSkills('All');
    renderCertifications();
    renderContactLinks();
    fetchGitHubProjects();
    initClock();
    initObservers();
    initMegaMenuLogic();
    initSpotlightPhysics();
    initTerminalSimulator();
    initCanvasAnimation();
});

function renderExperience() {
    const container = document.getElementById("dynamic-experience");
    if (!container) return;

    container.innerHTML = portfolioData.experience.map(item => `
        <div class="experience-item">
            <div class="exp-meta">
                <h3>${item.company}</h3>
                <p>${item.role}</p>
                <p style="margin-top:.3rem;font-size:.85rem;color:var(--text-muted);">${item.period}</p>
                <p style="font-size:.8rem;color:var(--text-muted);">${item.location}</p>
            </div>
            <div class="exp-details">
                <ul class="experience-list">
                    ${item.bullets.map(b => `<li>${b}</li>`).join('')}
                </ul>
                <div class="tech-list" style="margin-top: 1rem;">
                    ${item.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function renderSkills(category = 'All') {
    const container = document.getElementById("dynamic-skills");
    if (!container) return;

    const filtered = category === 'All' 
        ? portfolioData.skills 
        : portfolioData.skills.filter(s => s.category === category);

    container.innerHTML = filtered.map(s => `<span class="tech-tag">${s.name}</span>`).join('');
}

function filterSkillCategory(cat, btn) {
    document.querySelectorAll('#skill-filters .filter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderSkills(cat);
}

function renderCertifications() {
    const container = document.getElementById("dynamic-certs");
    if (!container) return;

    container.innerHTML = portfolioData.certifications.map(c => `
        <div class="cert-card">
            <div class="cert-icon">${c.icon}</div>
            <h3>${c.title}</h3>
            <p>${c.issuer} · Issued ${c.date}</p>
            <a class="cert-link" href="${c.link}" target="_blank" rel="noopener noreferrer">Show credential ↗</a>
        </div>
    `).join('');
}

function renderContactLinks() {
    const container = document.getElementById("dynamic-contact-links");
    if (!container) return;

    const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.profile.email}`;
    
    container.innerHTML = `
        <a class="contact-link" href="${emailUrl}" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24"><path d="M3.5 18.5V5.8L12 12.2l8.5-6.4v12.7" fill="none" stroke="#EA4335" stroke-width="1.9" stroke-linecap="round"/><path d="M3.5 5.8A2.3 2.3 0 0 1 5.8 3.5h12.4a2.3 2.3 0 0 1 2.3 2.3" fill="none" stroke="#4285F4" stroke-width="1.9"/><path d="M3.5 18.5V5.8L12 12.2" fill="none" stroke="#FBBC04" stroke-width="1.9"/><path d="M12 12.2 20.5 5.8v12.7" fill="none" stroke="#34A853" stroke-width="1.9"/></svg>
            <span>Gmail Direct</span>
        </a>
        <a class="contact-link" href="${portfolioData.profile.linkedin}" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.555 20.452h3.558V8.999H3.555v11.453z"/></svg>
            <span>LinkedIn</span>
        </a>
        <a class="contact-link" href="https://github.com/${portfolioData.profile.githubUser}" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.292-1.552 3.297-1.23 3.297-1.23.647 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222v3.293c0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/></svg>
            <span>GitHub Repositories</span>
        </a>
    `;
}

async function fetchGitHubProjects() {
    const container = document.getElementById("dynamic-github-repos");
    if (!container) return;

    try {
        const res = await fetch(`https://api.github.com/users/${portfolioData.profile.githubUser}/repos?sort=updated&per_page=4`);
        const repos = await res.json();

        if (!Array.isArray(repos) || repos.length === 0) {
            container.innerHTML = `<p style="color:var(--text-muted);">No public repositories found.</p>`;
            return;
        }

        container.innerHTML = repos.map(repo => `
            <div class="cert-card">
                <div class="cert-icon">⚡</div>
                <h3>${repo.name}</h3>
                <p>${repo.description || 'Data engineering code repository.'}</p>
                <p style="font-size:0.78rem; color: var(--accent); margin-bottom: 0.8rem;">
                    ★ ${repo.stargazers_count} | 𝌀 ${repo.language || 'Python'}
                </p>
                <a class="cert-link" href="${repo.html_url}" target="_blank" rel="noopener noreferrer">View Repository ↗</a>
            </div>
        `).join('');
    } catch (e) {
        container.innerHTML = `<p style="color:var(--text-muted);">Unable to fetch live GitHub projects.</p>`;
    }
}

function initClock() {
    const clockEl = document.getElementById("local-clock");
    if (!clockEl) return;
    const update = () => {
        const options = { timeZone: "Asia/Kolkata", hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const timeString = new Date().toLocaleTimeString("en-US", options);
        clockEl.innerHTML = `<span class="status-dot"></span>${timeString} IST`;
    };
    update();
    setInterval(update, 1000);
}

function initMegaMenuLogic() {
    const items = [...document.querySelectorAll('.nav-links li.has-mega-menu')];
    const closeAll = except => items.forEach(item => {
        if (item !== except) item.classList.remove('menu-open');
    });

    items.forEach(item => {
        const trigger = item.querySelector(':scope > a');
        const menu = item.querySelector(':scope > .mega-menu');
        if (!trigger || !menu) return;

        trigger.addEventListener('click', e => {
            if (window.matchMedia('(max-width: 768px)').matches) {
                e.preventDefault();
                const open = item.classList.contains('menu-open');
                closeAll();
                if (!open) item.classList.add('menu-open');
            }
        });

        menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => closeAll()));
    });

    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });
    document.addEventListener('click', e => { if (!e.target.closest('.nav-links li.has-mega-menu')) closeAll(); });
}

function initSpotlightPhysics() {
    document.addEventListener('mousemove', (e) => {
        const elements = document.querySelectorAll('section, .cert-card, .terminal-box');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            el.style.setProperty('--mouse-x', `${x}px`);
            el.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

function initTerminalSimulator() {
    const logOutput = document.getElementById("terminal-logs");
    if (!logOutput) return;

    const logs = [
        "✔ Connected to AWS Glue Data Catalog [Schema: enterprise_lakehouse]",
        "⚡ PySpark Worker Nodes: 12 Active Nodes Processing Partition Keys",
        "✔ Amazon S3 Data Lake Ingestion: Zero Record Loss",
        "✔ Redshift Analytics Query Complete: Latency <0.38s"
    ];

    let index = 0;
    setInterval(() => {
        if (index < logs.length) {
            logOutput.textContent += `\n${logs[index]}`;
            index++;
        }
    }, 1800);
}

function initObservers() {
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
        }, { threshold: 0.1 });
        reveals.forEach(r => obs.observe(r));
    } else {
        reveals.forEach(r => r.classList.add('active'));
    }

    const navLinks = [...document.querySelectorAll('nav a[href^="#"]')];
    const sections = navLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
    window.addEventListener('scroll', () => {
        const y = window.scrollY + 120;
        let current = sections[0];
        for (const section of sections) {
            if (section.offsetTop <= y) current = section;
        }
        if (current) {
            navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current.id));
        }
    }, { passive: true });
}

/**
 * 3. 3D CANVAS STARFIELD ENGINE
 */
function initCanvasAnimation() {
    const canvas = document.getElementById('galaxy-canvas');
    const ctx = canvas && canvas.getContext('2d', { alpha: true });
    if (!canvas || !ctx) return;

    let dpr = 1, width = 0, height = 0, cx = 0, cy = 0;
    let mouseX = -1000, mouseY = -1000, targetRX = 0, targetRY = 0, currentRX = 0, currentRY = 0;
    let targetScroll = 0, currentScroll = 0;

    const mobile = matchMedia('(max-width: 767px)').matches;
    const NUM = mobile ? 800 : 1800;
    const BGNUM = mobile ? 500 : 1200;
    const PI2 = Math.PI * 2, arms = 2, speed = 0.004;

    const starColors = ['#ffffff', '#ffffff', '#e0f4ff', '#d6edff', '#ffcca6', '#a6d2ff'];
    let bgStars = [], stars = [];

    function resize() {
        dpr = Math.min(devicePixelRatio || 1, 2);
        width = innerWidth; height = innerHeight;
        canvas.width = width * dpr; canvas.height = height * dpr;
        canvas.style.width = width + 'px'; canvas.style.height = height + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        cx = width / 2; cy = height * 0.45;
        createStars();
    }

    function createStars() {
        bgStars = Array.from({ length: BGNUM }, () => ({
            x: (Math.random() - 0.5) * width * 3.5,
            y: (Math.random() - 0.5) * height * 3.5,
            z: (Math.random() - 0.5) * 2000,
            size: Math.random() * 1.2 + 0.3,
            alpha: Math.random() * 0.7 + 0.3,
            color: starColors[Math.floor(Math.random() * starColors.length)]
        }));

        stars = Array.from({ length: NUM }, () => {
            const r = Math.random();
            const dist = Math.pow(r, 1.4) * Math.max(width, height) * 0.75;
            const a = (PI2 / arms) * Math.floor(Math.random() * arms) + dist * 0.01;
            return {
                baseDistance: dist,
                angle: a + (Math.random() - 0.5) * 0.5,
                targetX: (Math.random() - 0.5) * width * 2.8,
                targetY: (Math.random() - 0.5) * height * 2.8,
                baseZ: (Math.random() - 0.5) * 60,
                size: Math.random() * 1.1 + 0.3,
                color: dist < 40 ? '#ffffff' : starColors[Math.floor(Math.random() * starColors.length)],
                dx: 0, dy: 0
            };
        });
    }

    addEventListener('mousemove', e => {
        mouseX = e.clientX; mouseY = e.clientY;
        const nmx = (mouseX - cx) / Math.max(cx, 1);
        const nmy = (mouseY - cy) / Math.max(cy, 1);
        targetRY = nmx * 0.2; targetRX = nmy * 0.2;
    });

    addEventListener('scroll', () => {
        const maxScroll = Math.max(document.documentElement.scrollHeight - innerHeight, 1);
        targetScroll = Math.min(Math.max(scrollY / maxScroll, 0), 1);
    }, { passive: true });

    function render() {
        ctx.clearRect(0, 0, width, height);
        currentScroll += (targetScroll - currentScroll) * 0.04;
        currentRX += (targetRX - currentRX) * 0.05;
        currentRY += (targetRY - currentRY) * 0.05;

        const tx = -0.3 + currentRX, ty = currentRY;
        const u = Math.pow(currentScroll, 1.2);
        const sp = speed * (1 - currentScroll * 0.3);

        bgStars.forEach(s => {
            let x = s.x * Math.cos(ty) - s.z * Math.sin(ty);
            let z = s.z * Math.cos(ty) + s.x * Math.sin(ty);
            let y = s.y * Math.cos(tx) - z * Math.sin(tx);
            let zz = z * Math.cos(tx) + s.y * Math.sin(tx);
            let p = 800;
            if (zz < -p) return;
            let sc = p / (p + zz), sx = cx + x * sc, sy = cy + y * sc;
            if (sx < 0 || sx > width || sy < 0 || sy > height) return;

            ctx.fillStyle = s.color;
            ctx.globalAlpha = s.alpha;
            ctx.fillRect(sx, sy, s.size * sc, s.size * sc);
        });

        stars.forEach(s => {
            s.angle -= sp;
            let sx = Math.cos(s.angle) * s.baseDistance, sy = Math.sin(s.angle) * s.baseDistance;
            let x = sx * (1 - u) + s.targetX * u, y = sy * (1 - u) + s.targetY * u, z = s.baseZ;

            let x1 = x * Math.cos(ty) - z * Math.sin(ty);
            let z1 = z * Math.cos(ty) + x * Math.sin(ty);
            let y2 = y * Math.cos(tx) - z1 * Math.sin(tx);
            let z2 = z1 * Math.cos(tx) + y * Math.sin(tx);
            let p = 800;
            if (z2 < -p) return;

            let sc = p / (p + z2), px = cx + x1 * sc, py = cy + y2 * sc;

            let dx = px + s.dx - mouseX, dy = py + s.dy - mouseY;
            let dSq = dx * dx + dy * dy, rrSq = 19600;
            if (mouseX > -500 && dSq > 0 && dSq < rrSq) {
                let d = Math.sqrt(dSq);
                let f = Math.pow((140 - d) / 140, 2);
                s.dx += (dx / d) * f * 12;
                s.dy += (dy / d) * f * 12;
            }
            s.dx *= 0.88; s.dy *= 0.88;
            px += s.dx; py += s.dy;

            ctx.fillStyle = s.color;
            ctx.globalAlpha = 0.85;
            ctx.beginPath();
            ctx.arc(px, py, Math.max(0.4, s.size * sc), 0, PI2);
            ctx.fill();
        });

        ctx.globalAlpha = 1;
        requestAnimationFrame(render);
    }

    addEventListener('resize', resize);
    resize();
    render();
}
