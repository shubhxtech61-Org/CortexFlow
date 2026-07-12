/* ============================================================
   CORTEXFLOW.AI — SCRIPT
   ============================================================ */

/* ---------- Theme management ---------- */
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    // Default to light mode (matching the default class on body in index.html)
    if (savedTheme === 'dark') {
        document.body.classList.remove('light-mode');
        updateThemeToggleIcons(false);
    } else {
        document.body.classList.add('light-mode');
        updateThemeToggleIcons(true);
    }
}

function toggleTheme() {
    const isLight = document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateThemeToggleIcons(isLight);
}

function updateThemeToggleIcons(isLight) {
    const darkIcons = document.querySelectorAll('.icon-dark');
    const lightIcons = document.querySelectorAll('.icon-light');
    
    darkIcons.forEach(icon => {
        icon.style.display = isLight ? 'none' : 'inline-block';
    });
    lightIcons.forEach(icon => {
        icon.style.display = isLight ? 'inline-block' : 'none';
    });
}

/* ---------- Smooth anchor scrolling + active nav state ---------- */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    section.scrollIntoView({ behavior: 'smooth' });
    setActiveNav(sectionId);
}

function setActiveNav(id) {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    const activeNav = document.getElementById('nav-' + id);
    if (activeNav) activeNav.classList.add('active');
}

/* ---------- Mobile menu ---------- */
function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('open');
}

/* ---------- Terminal simulation ---------- */
function handleTerminal(event) {
    if (event.key === 'Enter') {
        const inputElement = document.getElementById('terminal-input');
        const command = inputElement.value.trim();
        executeTerminalCommand(command);
        inputElement.value = '';
    }
}

function clickTerminalCommand(cmd) {
    executeTerminalCommand(cmd);
}

function executeTerminalCommand(command) {
    const feedbackElement = document.getElementById('terminal-feedback');
    const cleanCmd = command.toLowerCase().trim();
    let feedback = '';

    if (cleanCmd === 'help') {
        feedback = '💡 Command registry: "team" (scroll to team), "metrics" (show diagnostics), "clear" (wipe output).';
    } else if (cleanCmd === 'team') {
        feedback = '👥 Connecting to engineering nodes... scrolling to roster.';
        setTimeout(() => scrollToSection('team'), 800);
    } else if (cleanCmd === 'metrics') {
        feedback = '📊 Benchmarks: Django MVC 100% test pass · API latency 12ms · Autonomous workers: idle.';
    } else if (cleanCmd === 'clear') {
        feedbackElement.innerText = '';
        return;
    } else if (cleanCmd !== '') {
        feedback = `⚠️ Error: command "${command}" not found. Type "help" for registry.`;
    }
    feedbackElement.innerText = feedback;
}

/* ---------- Booking CRM simulator ---------- */
function runLocalBooking(name, type) {
    const logBox = document.getElementById('booking-sandbox-logs');
    const widget = document.getElementById('booking-widget');
    const timestamp = new Date().toLocaleTimeString();

    widget.classList.add('active-scanline');
    setTimeout(() => {
        widget.classList.remove('active-scanline');
        const newLog = document.createElement('p');
        newLog.style.color = 'var(--c-secondary)';
        newLog.innerHTML = `<span style="color:var(--text-muted)">[${timestamp}]</span> SQL INSERT OK: added "${name}" &rarr; ${type}. SMS notification sent.`;
        logBox.appendChild(newLog);
        logBox.scrollTop = logBox.scrollHeight;
    }, 600);
}

function clearLocalBookingLogs() {
    document.getElementById('booking-sandbox-logs').innerHTML =
        '<p style="color:var(--text-muted)">// Database sandbox ready for transaction queries...</p>';
}

/* ---------- AI resume screener simulator ---------- */
function runScreenerDiagnostic(fileName, criteria, score) {
    const outputBox = document.getElementById('screener-sandbox-output');
    const widget = document.getElementById('screener-widget');

    widget.classList.add('active-scanline');
    outputBox.innerHTML = `
        <span style="color:var(--c-accent);font-weight:600;">// CONNECTING TO AI INFERENCE MODEL...</span><br>
        <span style="color:var(--text-muted)">Parsing candidate details & routing parameters...</span>
    `;

    setTimeout(() => {
        widget.classList.remove('active-scanline');
        outputBox.innerHTML = `
            <span style="color:var(--c-primary);font-weight:600;">// Gemini validation diagnostic complete</span><br>
            <span>File: ${fileName}</span><br>
            <span>Target Match: <span style="color:var(--c-secondary)">${criteria}</span></span><br>
            <span>Match Rating: <strong style="color:var(--c-accent)">${score}% compatibility</strong></span><br>
            <span style="color:var(--text-muted)">&bull; Output record committed to db.</span>
        `;
    }, 1200);
}

/* ---------- Team profiles ---------- */
/* ---------- Team profiles ---------- */
const teammateBios = {
    st: {
        name: 'Shubham Tiwari',
        title: 'CEO & Founder / Cloud Architect',
        bullets: [
            'Directs systems engineering and custom cloud setups',
            'Designs secure database schemas and user authentication models',
            'Manages API integrations, web sockets, and server operations'
        ],
        weapon: 'Django Core System Engine',
        class: 'FOUNDER'
    },
    kk: {
        name: 'Shivanshu Raj',
        title: 'CTO / Full-Stack & App Engineer',
        bullets: [
            'Engineers responsive, modern web interfaces in React and HTML5',
            'Creates fluid cross-platform mobile apps (iOS & Android)',
            'Designs elegant mobile transitions and local database syncing'
        ],
        weapon: 'React Native & CSS compiler',
        class: 'DEVELOPER'
    },
    sk: {
        name: 'TeamMember3',
        title: 'AI Intelligence Director',
        bullets: [
            'Designs autonomous agent pipelines for workflow automation',
            'Wires Gemini and LLM APIs directly to administrative tools',
            'Processes raw model JSON payloads into clean, actionable dashboards'
        ],
        weapon: 'Gemini Pipeline Core',
        class: 'AI ARCHITECT'
    },
    ts: {
        name: 'TeamMember4',
        title: 'Infrastructure & DevOps Lead',
        bullets: [
            'Deploys PostgreSQL instances and models at scale',
            'Manages cron jobs and automated system cleanups',
            'Directs background processing chains and webhook relays'
        ],
        weapon: 'PostgreSQL Relational DB',
        class: 'DEV-OPS HERO'
    }
};

function selectTeammate(memberId) {
    const data = teammateBios[memberId];
    if (!data) return;
    const detailBox = document.getElementById('crew-details-box');

    document.getElementById('crew-detail-name').innerText = data.name;
    document.getElementById('crew-detail-title').innerText = data.title;

    const bulletList = document.getElementById('crew-detail-bullets');
    bulletList.innerHTML = data.bullets.map(b => `<li><i class="fa-solid fa-caret-right" style="color:var(--c-secondary);margin-top:0.3rem;"></i><span>${b}</span></li>`).join('');

    document.getElementById('crew-detail-weapon').innerText = data.weapon;
    document.getElementById('crew-badge').innerText = `NODE METRICS // CLASS: ${data.class}`;

    detailBox.classList.add('open');
    detailBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function closeCrewDetails() {
    document.getElementById('crew-details-box').classList.remove('open');
}

/* ---------- Spec panel ---------- */
function toggleSpecPanel() {
    document.getElementById('spec-panel').classList.toggle('open');
}

/* ---------- Contact form ---------- */
function handleFormSubmission(event) {
    event.preventDefault();
    const alertBox = document.getElementById('form-alert');
    const alertMsg = document.getElementById('alert-msg');
    const name = document.getElementById('intake-name').value;

    alertMsg.innerText = `📩 Thank you, ${name}! Your request has been received. We will get in touch with you shortly to discuss your project.`;
    alertBox.classList.add('show');
}

function closeFormAlert() {
    document.getElementById('form-alert').classList.remove('show');
}

/* ---------- Scroll-spy: highlight nav button for the section in view ---------- */
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = { root: null, rootMargin: '-30% 0px -60% 0px', threshold: 0 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) setActiveNav(entry.target.getAttribute('id'));
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

/* ---------- Scroll reveal animations ---------- */
function initScrollReveal() {
    const targets = document.querySelectorAll('.reveal, .reveal-scale, .reveal-stagger');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    targets.forEach(t => revealObserver.observe(t));
}

/* ---------- Animated skill bars (fills once visible) ---------- */
function initSkillBars() {
    const bars = document.querySelectorAll('.skill-bar-fill');
    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                target.style.width = target.dataset.value + '%';
                barObserver.unobserve(target);
            }
        });
    }, { threshold: 0.4 });
    bars.forEach(b => barObserver.observe(b));
}

/* ---------- Animated metric counters ---------- */
function animateCounter(el) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        el.innerText = (Number.isInteger(target) ? Math.floor(value) : value.toFixed(1)) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
        else el.innerText = target + suffix;
    }
    requestAnimationFrame(tick);
}

function initCounters() {
    const counters = document.querySelectorAll('.metric-value[data-count]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(c => counterObserver.observe(c));
}

/* ============================================================
   NEURAL MATRIX PARTICLE BACKDROP (canvas)
   ============================================================ */
function initNeuralCanvas() {
    const canvas = document.getElementById('neural-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null, radius: 170 };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    window.addEventListener('mousemove', (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });
    window.addEventListener('mouseout', () => { mouse.x = null; mouse.y = null; });

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2.2 + 1.2;
            this.vx = (Math.random() - 0.5) * 0.45;
            this.vy = (Math.random() - 0.5) * 0.45;
            this.isTeal = Math.random() > 0.5;
        }
        draw() {
            const isLight = document.body.classList.contains('light-mode');
            const colorTeal = isLight ? 'rgba(13, 148, 136, 0.35)' : 'rgba(20, 184, 166, 0.45)';
            const colorIndigo = isLight ? 'rgba(79, 70, 229, 0.35)' : 'rgba(99, 102, 241, 0.45)';
            ctx.fillStyle = this.isTeal ? colorTeal : colorIndigo;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
            if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.hypot(dx, dy);
                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    this.x += (dx / distance) * force * 1.5;
                    this.y += (dy / distance) * force * 1.5;
                }
            }
        }
    }

    function initParticles() {
        particles = [];
        const density = Math.floor((canvas.width * canvas.height) / 9500);
        for (let i = 0; i < density; i++) particles.push(new Particle());
    }

    function drawNeuralPathways() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.hypot(dx, dy);
                if (distance < 115) {
                    const isLight = document.body.classList.contains('light-mode');
                    const strokeColor = isLight ? 'rgba(79, 70, 229, ' : 'rgba(99, 102, 241, ';
                    ctx.strokeStyle = `${strokeColor}${0.12 * (1 - distance / 115)})`;
                    ctx.lineWidth = 0.9;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                    ctx.closePath();
                }
            }
        }
    }

    function animateBackdrop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        drawNeuralPathways();
        requestAnimationFrame(animateBackdrop);
    }

    initParticles();
    if (!prefersReducedMotion) animateBackdrop();
    else { particles.forEach(p => p.draw()); }
}

/* ============================================================
   BOOT SEQUENCE — signature load-in
   ============================================================ */
function initBootSequence() {
    const overlay = document.getElementById('boot-overlay');
    if (!overlay) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        overlay.classList.add('boot-hide');
        document.body.classList.remove('boot-lock');
        return;
    }

    document.body.classList.add('boot-lock');
    const lines = overlay.querySelectorAll('.boot-line');
    const fill = document.getElementById('boot-fill');
    const pct = document.getElementById('boot-pct');
    let i = 0;

    function revealNext() {
        if (i < lines.length) {
            lines[i].classList.add('show');
            const progress = Math.round(((i + 1) / lines.length) * 100);
            fill.style.width = progress + '%';
            pct.innerText = progress + '%';
            i++;
            setTimeout(revealNext, 220 + Math.random() * 160);
        } else {
            setTimeout(() => {
                overlay.classList.add('boot-hide');
                document.body.classList.remove('boot-lock');
            }, 400);
        }
    }
    setTimeout(revealNext, 300);
}

/* ============================================================
   CURSOR SPOTLIGHT
   ============================================================ */
function initCursorSpotlight() {
    const spotlight = document.getElementById('cursor-spotlight');
    if (!spotlight) return;
    if (window.matchMedia('(pointer: coarse)').matches) { spotlight.style.display = 'none'; return; }

    window.addEventListener('mousemove', (e) => {
        document.documentElement.style.setProperty('--mx', e.clientX + 'px');
        document.documentElement.style.setProperty('--my', e.clientY + 'px');
    });
}

/* ============================================================
   SCROLL PROGRESS BAR
   ============================================================ */
function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    function update() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = pct + '%';
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
}

/* ============================================================
   MAGNETIC TILT CARDS (desktop only)
   ============================================================ */
function initTiltCards() {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const cards = document.querySelectorAll('.tilt');
    cards.forEach(card => {
        const strength = 6; // max degrees
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotateY = ((x / rect.width) - 0.5) * strength * 2;
            const rotateX = -((y / rect.height) - 0.5) * strength * 2;
            card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(4px)`;
            const glare = card.querySelector('.tilt-glare');
            if (glare) {
                glare.style.setProperty('--gx', (x / rect.width) * 100 + '%');
                glare.style.setProperty('--gy', (y / rect.height) * 100 + '%');
            }
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg) translateZ(0)';
        });
    });
}

/* ============================================================
   STATUS DASHBOARD METERS (fills once visible)
   ============================================================ */
function initStatusMeters() {
    const meters = document.querySelectorAll('.status-meter-fill');
    const meterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.dataset.value + '%';
                meterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });
    meters.forEach(m => meterObserver.observe(m));
}

/* ---------- Sticky Header Scroll Interaction ---------- */
function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });
}

/* ---------- Boot ---------- */
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initHeaderScroll();
    initBootSequence();
    initCursorSpotlight();
    initScrollProgress();
    initNeuralCanvas();
    initScrollSpy();
    initScrollReveal();
    initSkillBars();
    initCounters();
    initStatusMeters();
    initTiltCards();
});
