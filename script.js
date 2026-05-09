// =====================================================================
// SECTION 1: CONFIG — แก้ไขตรงนี้เพื่อตั้งค่าระบบ
// =====================================================================
const CONFIG = {
    ADMIN_PASSWORD: "080723K",   // <- เปลี่ยนรหัสผ่านได้ที่นี่
    GITHUB_OWNER:   "chaisamartk", // <- GitHub username ของคุณ
    GITHUB_REPO:    "THE_MY_CALENDAR", // <- ชื่อ repo ใน GitHub
    GITHUB_BRANCH:  "main"         // <- ชื่อ branch (ปกติคือ main)
};

// =====================================================================
// SECTION 2: ตารางเรียน (recurring ม.ค. – 14 มี.ค. 2569)
// คลิกที่วันในปฏิทินเพื่อดูรายละเอียด ไม่สามารถลบจาก UI ได้
// =====================================================================
const CLASS_SCHEDULE = {
    1: [{ text: "13:00 วิทย์สุขภาพ", type: "class" }],
    2: [
        { text: "08:00 บำรุงรักษาฯ", type: "class" },
        { text: "10:00 สุนทรียภาพฯ", type: "class" },
        { text: "13:00 จิตวิทยาฯ", type: "class" }
    ],
    3: [{ text: "08:00 ถ่ายภาพแฟชั่น", type: "class" }],
    4: [
        { text: "10:00 อังกฤษฯ", type: "class" },
        { text: "13:00 อัตลักษณ์ฯ", type: "class" }
    ],
    5: [
        { text: "08:00 ตัดต่อหนังฯ", type: "class" },
        { text: "13:00 วิจัยฯ", type: "class" }
    ]
};

function isClassPeriod(month0, day) {
    if (month0 === 0) return true;
    if (month0 === 1) return true;
    if (month0 === 2 && day <= 14) return true;
    return false;
}

// =====================================================================
// SECTION 3: ข้อมูลเริ่มต้น (fallback ถ้าโหลด events.json ไม่ได้)
// =====================================================================
const DEFAULT_EVENTS = {
    "2026-01-01": [{ "text": "วันขึ้นปีใหม่", "type": "holiday" }, { "text": "ปาร์ตี้ปีใหม่ / แยกส่วน-ริก", "type": "party" }],
    "2026-01-02": [{ "text": "ปาร์ตี้ปีใหม่ / แยกส่วน-ริก", "type": "party" }],
    "2026-01-03": [{ "text": "ปาร์ตี้ปีใหม่", "type": "party" }, { "text": "ส่งงานอนิเมชัน", "type": "anim" }],
    "2026-01-04": [{ "text": "ปาร์ตี้ปีใหม่", "type": "party" }],
    "2026-01-13": [{ "text": "แยกส่วน-ทำการริก", "type": "anim" }],
    "2026-01-14": [{ "text": "แยกส่วน-ทำการริก", "type": "anim" }],
    "2026-01-15": [{ "text": "ส่งงานอนิเมชัน", "type": "anim" }],
    "2026-01-21": [{ "text": "แยกส่วน-ทำการริก", "type": "anim" }],
    "2026-01-22": [{ "text": "แยกส่วน-ทำการริก", "type": "anim" }],
    "2026-01-23": [{ "text": "ส่งงานอนิเมชัน", "type": "anim" }],
    "2026-01-28": [{ "text": "แยกส่วน-ทำการริก", "type": "anim" }],
    "2026-01-29": [{ "text": "แยกส่วน-ทำการริก", "type": "anim" }],
    "2026-01-30": [{ "text": "ส่งงานอนิเมชัน", "type": "anim" }],
    "2026-01-31": [{ "text": "แยกส่วน-ทำการริก", "type": "anim" }],
    "2026-02-01": [{ "text": "แยกส่วน-ทำการริก", "type": "anim" }],
    "2026-02-02": [{ "text": "ส่งงานอนิเมชัน", "type": "anim" }],
    "2026-02-08": [{ "text": "แยกส่วน-ทำการริก", "type": "anim" }],
    "2026-02-09": [{ "text": "แยกส่วน-ทำการริก", "type": "anim" }],
    "2026-02-10": [{ "text": "ส่งงานอนิเมชัน", "type": "anim" }],
    "2026-02-13": [{ "text": "ทำงานมหาลัย / ทำอนิเมชัน", "type": "project" }],
    "2026-02-14": [{ "text": "ทำงานมหาลัย / ทำอนิเมชัน", "type": "project" }],
    "2026-02-15": [{ "text": "ทำงานมหาลัย / ทำอนิเมชัน", "type": "project" }],
    "2026-02-16": [{ "text": "แยกส่วน-ทำการริก", "type": "anim" }],
    "2026-02-17": [{ "text": "แยกส่วน-ทำการริก", "type": "anim" }],
    "2026-02-18": [{ "text": "ส่งงานอนิเมชัน", "type": "anim" }],
    "2026-03-03": [{ "text": "วันมาฆบูชา", "type": "holiday" }],
    "2026-03-07": [{ "text": "แยกส่วน-ทำการริก", "type": "anim" }],
    "2026-03-08": [{ "text": "แยกส่วน-ทำการริก", "type": "anim" }],
    "2026-03-09": [{ "text": "โปรเจคอนิเมชัน (เสร็จแล้ว)", "type": "anim" }],
    "2026-03-22": [{ "text": "ถ่ายภาพนางแบบ (กลางภาค)", "type": "project" }],
    "2026-03-26": [{ "text": "ถ่ายภาพนางแบบ (ปลายภาค)", "type": "project" }, { "text": "ทำโปรเจคอนิเมชันใหม่", "type": "anim" }],
    "2026-04-04": [{ "text": "โปรเจคอนิเมชันใหม่", "type": "project" }],
    "2026-04-06": [{ "text": "วันจักรี", "type": "holiday" }],
    "2026-04-08": [{ "text": "โปรเจคอนิเมชันใหม่", "type": "project" }],
    "2026-04-13": [{ "text": "วันสงกรานต์", "type": "holiday" }],
    "2026-04-14": [{ "text": "วันสงกรานต์", "type": "holiday" }],
    "2026-04-15": [{ "text": "วันสงกรานต์", "type": "holiday" }],
    "2026-05-01": [{ "text": "วันแรงงาน", "type": "holiday" }],
    "2026-05-03": [{ "text": "เที่ยวพัทยา สาขาดิจิทัลอาร์ท", "type": "party" }],
    "2026-05-04": [{ "text": "วันฉัตรมงคล", "type": "holiday" }, { "text": "เที่ยวพัทยา สาขาดิจิทัลอาร์ท", "type": "party" }],
    "2026-05-05": [{ "text": "เที่ยวพัทยา สาขาดิจิทัลอาร์ท", "type": "party" }],
    "2026-05-06": [{ "text": "เที่ยวพัทยา สาขาดิจิทัลอาร์ท", "type": "party" }],
    "2026-05-11": [{ "text": "เริ่มฝึกงาน", "type": "party" }],
    "2026-05-31": [{ "text": "วันวิสาขบูชา", "type": "holiday" }, { "text": "วันสุดท้ายของการฝึกและรอกำหนดการใหม่", "type": "project" }],
    "2026-06-03": [{ "text": "วันเฉลิมฯ พระราชินี", "type": "holiday" }],
    "2026-06-04": [{ "text": "ลงทะเบียนเรียน", "type": "project" }],
    "2026-06-08": [{ "text": "เปิดเทอม", "type": "project" }],
    "2026-07-28": [{ "text": "วันเฉลิมฯ ร.10", "type": "holiday" }],
    "2026-07-29": [{ "text": "วันอาสาฬหบูชา", "type": "holiday" }],
    "2026-07-30": [{ "text": "วันเข้าพรรษา", "type": "holiday" }],
    "2026-08-12": [{ "text": "วันแม่แห่งชาติ", "type": "holiday" }],
    "2026-10-13": [{ "text": "วันนวมินทรมหาราช", "type": "holiday" }],
    "2026-10-23": [{ "text": "วันปิยมหาราช", "type": "holiday" }],
    "2026-12-05": [{ "text": "วันพ่อแห่งชาติ", "type": "holiday" }],
    "2026-12-10": [{ "text": "วันรัฐธรรมนูญ", "type": "holiday" }],
    "2026-12-31": [{ "text": "วันสิ้นปี", "type": "holiday" }]
};

// =====================================================================
// SECTION 4: State
// =====================================================================
const YEAR = 2026;
const MONTH_TH = ["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"];
const MONTH_EN = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAY_SHORT = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

const TODAY = new Date();

let calendarEvents = {};
let isAdmin = sessionStorage.getItem('isAdmin') === 'true';
let currentDateKey = '';
let currentDateDisplay = '';
let editingIndex = -1;
let selectedPriority = 'normal';
let isAllDay = false;

// =====================================================================
// SECTION 5: Load Events
// =====================================================================
async function loadEvents() {
    // 1. Try fetching events.json from same origin (works on Vercel)
    try {
        const res = await fetch('/events.json?t=' + Date.now());
        if (res.ok) {
            calendarEvents = await res.json();
            return;
        }
    } catch (_) {}

    // 2. Try fetching from GitHub raw (works locally with correct config)
    if (CONFIG.GITHUB_OWNER && CONFIG.GITHUB_REPO) {
        try {
            const url = `https://raw.githubusercontent.com/${CONFIG.GITHUB_OWNER}/${CONFIG.GITHUB_REPO}/${CONFIG.GITHUB_BRANCH}/events.json?t=${Date.now()}`;
            const res = await fetch(url);
            if (res.ok) {
                calendarEvents = await res.json();
                return;
            }
        } catch (_) {}
    }

    // 3. Fallback to localStorage
    const stored = localStorage.getItem('cal_events_2026');
    if (stored) {
        try { calendarEvents = JSON.parse(stored); return; } catch (_) {}
    }

    // 4. Use embedded defaults
    calendarEvents = JSON.parse(JSON.stringify(DEFAULT_EVENTS));
}

function saveToLocalStorage() {
    localStorage.setItem('cal_events_2026', JSON.stringify(calendarEvents));
}

// =====================================================================
// SECTION 6: Month Config (sidebar info)
// =====================================================================
function getMonthConfig(monthNum) {
    if (monthNum >= 2 && monthNum <= 4) {
        return {
            label: "🏖️ ช่วงปิดเทอมและช่วยงานที่บ้าน",
            cls: "period-red",
            tasks: [
                { time: "07:00-19:00", text: "ดูแลหน้าร้าน / ช่วยงานที่บ้าน" },
                { time: "19:00-00:00", text: "เวลาทำงานหลัก (แอนิเมชัน / โปรเจกต์)" }
            ]
        };
    }
    if (monthNum === 10) {
        return {
            label: "🍂 ช่วงปิดเทอมเล็ก",
            cls: "period-orange",
            tasks: [
                { text: "แยกส่วน / ทำการริก" },
                { text: "แอนิเมชันลงกลุ่ม" },
                { text: "โปรเจกต์มหาลัย" }
            ]
        };
    }
    if (monthNum === 5) {
        return { label: "💼 ช่วงทดลองงาน", cls: "period-orange", tasks: [] };
    }
    return {
        label: "📚 ช่วงเปิดเทอม",
        cls: "period-green",
        tasks: [
            { text: "แยกส่วน / ทำการริก" },
            { text: "แอนิเมชันลงกลุ่ม" },
            { text: "โปรเจกต์มหาลัย" }
        ]
    };
}

// =====================================================================
// SECTION 7: Get All Events for a Date
// =====================================================================
function getClassEvents(month0, day) {
    if (!isClassPeriod(month0, day)) return [];
    const dow = new Date(YEAR, month0, day).getDay();
    return CLASS_SCHEDULE[dow] ? CLASS_SCHEDULE[dow].map(e => ({ ...e, _isClass: true })) : [];
}

function getAllEvents(dateStr, month0, day) {
    return [...getClassEvents(month0, day), ...(calendarEvents[dateStr] || [])];
}

// =====================================================================
// SECTION 8: Render Calendar
// =====================================================================
function renderCalendar() {
    const container = document.getElementById('calendar-container');
    container.innerHTML = '';

    for (let m = 0; m < 12; m++) {
        const monthNum = m + 1;
        const cfg = getMonthConfig(monthNum);
        const firstDay = new Date(YEAR, m, 1).getDay();
        const daysInMonth = new Date(YEAR, m + 1, 0).getDate();

        // --- Header ---
        let header = `
            <div class="month-header">
                <div class="month-header-left">
                    <span class="month-name">${MONTH_EN[m]}</span>
                    <span class="year-badge">${YEAR}</span>
                </div>
                <span class="period-badge ${cfg.cls}">${cfg.label}</span>
            </div>`;

        // --- Day name row ---
        let dayNames = `<div class="day-names-row">`;
        DAY_SHORT.forEach(d => { dayNames += `<div class="day-name-cell">${d}</div>`; });
        dayNames += `</div>`;

        // --- Days grid ---
        let grid = `<div class="days-grid">`;
        for (let i = 0; i < firstDay; i++) {
            grid += `<div class="day-cell empty"></div>`;
        }
        for (let d = 1; d <= daysInMonth; d++) {
            const dateStr = `${YEAR}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
            const dow = new Date(YEAR, m, d).getDay();
            const events = getAllEvents(dateStr, m, d);
            const isToday = TODAY.getFullYear() === YEAR && TODAY.getMonth() === m && TODAY.getDate() === d;

            let classes = 'day-cell';
            if (events.length > 0) classes += ' has-event';
            if (dow === 0) classes += ' is-sunday';
            if (dow === 6) classes += ' is-saturday';
            if (isToday) classes += ' today';

            const MAX = 3;
            let badges = events.slice(0, MAX).map(ev =>
                `<div class="event-badge type-${ev.type}">${ev.text}</div>`
            ).join('');
            if (events.length > MAX) {
                badges += `<div class="more-events-label">+${events.length - MAX} รายการ</div>`;
            }

            grid += `<div class="${classes}" data-date="${dateStr}" data-display="${d} ${MONTH_TH[m]} ${YEAR}">
                <div class="date-number">${d}</div>
                ${badges}
            </div>`;
        }
        grid += `</div>`;

        // --- Sidebar ---
        let taskHtml = '';
        cfg.tasks.forEach(t => {
            if (t.time) {
                taskHtml += `<div class="task-note-item"><span class="task-note-time">${t.time}</span><span>${t.text}</span></div>`;
            } else {
                taskHtml += `<div class="task-note-item">• ${t.text}</div>`;
            }
        });

        let sidebar = `<div class="month-sidebar">`;
        if (taskHtml) {
            sidebar += `<div class="sidebar-card"><div class="sidebar-card-title">Task & Notes</div>${taskHtml}</div>`;
        }
        sidebar += `
            <div class="sidebar-card">
                <div class="sidebar-card-title">Legend</div>
                <div class="legend-list">
                    <div class="legend-item"><div class="legend-dot" style="background:#e53e3e;"></div>วันหยุด</div>
                    <div class="legend-item"><div class="legend-dot" style="background:#8b5cf6;"></div>แอนิเมชัน</div>
                    <div class="legend-item"><div class="legend-dot" style="background:#3b82f6;"></div>ตารางเรียน</div>
                    <div class="legend-item"><div class="legend-dot" style="background:#22c55e;"></div>โปรเจกต์</div>
                    <div class="legend-item"><div class="legend-dot" style="background:#f97316;"></div>กิจกรรม</div>
                </div>
            </div>
        </div>`;

        // --- Assemble section ---
        const section = document.createElement('div');
        section.className = 'month-section';
        section.innerHTML = `${header}<div class="month-body"><div class="calendar-main">${dayNames}${grid}</div>${sidebar}</div>`;
        container.appendChild(section);
    }

    attachCellListeners();
}

function attachCellListeners() {
    document.querySelectorAll('.day-cell:not(.empty)').forEach(cell => {
        cell.addEventListener('click', () => {
            openDayModal(cell.dataset.date, cell.dataset.display);
        });
    });
}

// =====================================================================
// SECTION 9: Day Detail Modal
// =====================================================================
function openDayModal(dateKey, dateDisplay) {
    currentDateKey = dateKey;
    currentDateDisplay = dateDisplay;
    document.getElementById('day-modal-date').textContent = dateDisplay;
    renderDayEvents();
    document.getElementById('add-on-day-btn').classList.toggle('hidden', !isAdmin);
    showModal('day-modal');
}

function renderDayEvents() {
    const [yr, mo, dy] = currentDateKey.split('-').map(Number);
    const m0 = mo - 1;
    const classEvs = getClassEvents(m0, dy);
    const calEvs = calendarEvents[currentDateKey] || [];
    const list = document.getElementById('day-modal-events');

    if (classEvs.length === 0 && calEvs.length === 0) {
        list.innerHTML = '<div class="no-event-msg">ไม่มีรายการในวันนี้</div>';
        return;
    }

    let html = '';

    classEvs.forEach(ev => {
        html += `
            <div class="day-event-row type-${ev.type}">
                <div class="day-event-body">
                    <span class="day-event-text">${ev.text}</span>
                </div>
                <span class="class-tag">ตารางเรียน</span>
            </div>`;
    });

    calEvs.forEach((ev, idx) => {
        const meta = [ev.startTime ? `⏰ ${ev.startTime}${ev.endTime ? ' – ' + ev.endTime : ''}` : '', ev.location ? `📍 ${ev.location}` : ''].filter(Boolean).join('  ');
        const star = ev.priority === 'important' ? ' ⭐' : '';
        const actions = isAdmin ? `
            <div class="day-event-actions">
                <button class="icon-btn" data-action="edit" data-idx="${idx}" title="แก้ไข">✏️</button>
                <button class="icon-btn" data-action="del"  data-idx="${idx}" title="ลบ">🗑️</button>
            </div>` : '';
        html += `
            <div class="day-event-row type-${ev.type}">
                <div class="day-event-body">
                    <span class="day-event-text">${ev.text}${star}</span>
                    ${meta ? `<div class="day-event-meta">${meta}</div>` : ''}
                </div>
                ${actions}
            </div>`;
    });

    list.innerHTML = html;

    list.querySelectorAll('[data-action="edit"]').forEach(btn => {
        btn.addEventListener('click', () => openEditModal(parseInt(btn.dataset.idx)));
    });
    list.querySelectorAll('[data-action="del"]').forEach(btn => {
        btn.addEventListener('click', () => {
            if (confirm('ต้องการลบรายการนี้?')) deleteEvent(parseInt(btn.dataset.idx));
        });
    });
}

// =====================================================================
// SECTION 10: Add / Edit Modal
// =====================================================================
function openEditModal(eventIdx) {
    editingIndex = eventIdx;

    if (eventIdx === -1) {
        document.getElementById('edit-modal-title').textContent = 'เพิ่มรายการ';
        document.getElementById('edit-date-input').value = currentDateKey;
        document.getElementById('edit-name-input').value = '';
        document.getElementById('edit-type-input').value = 'holiday';
        document.getElementById('edit-start-time').value = '09:00';
        document.getElementById('edit-end-time').value = '10:00';
        document.getElementById('edit-location-input').value = '';
        selectedPriority = 'normal';
        isAllDay = false;
    } else {
        const ev = (calendarEvents[currentDateKey] || [])[eventIdx];
        document.getElementById('edit-modal-title').textContent = 'แก้ไขรายการ';
        document.getElementById('edit-date-input').value = currentDateKey;
        document.getElementById('edit-name-input').value = ev.text || '';
        document.getElementById('edit-type-input').value = ev.type || 'holiday';
        document.getElementById('edit-start-time').value = ev.startTime || '09:00';
        document.getElementById('edit-end-time').value = ev.endTime || '10:00';
        document.getElementById('edit-location-input').value = ev.location || '';
        selectedPriority = ev.priority || 'normal';
        isAllDay = ev.allDay || false;
    }

    updatePriorityUI();
    updateTimeModeUI();
    hideModal('day-modal');
    showModal('edit-modal');
}

function updatePriorityUI() {
    document.querySelectorAll('.priority-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.val === selectedPriority);
    });
}

function updateTimeModeUI() {
    document.getElementById('btn-allday').classList.toggle('active', isAllDay);
    document.getElementById('btn-timerange').classList.toggle('active', !isAllDay);
    document.getElementById('time-inputs-row').classList.toggle('hidden', isAllDay);
}

function saveEvent() {
    const newDateKey = document.getElementById('edit-date-input').value;
    const name = document.getElementById('edit-name-input').value.trim();
    const type = document.getElementById('edit-type-input').value;
    const startTime = isAllDay ? '' : document.getElementById('edit-start-time').value;
    const endTime   = isAllDay ? '' : document.getElementById('edit-end-time').value;
    const location  = document.getElementById('edit-location-input').value.trim();

    if (!name)       { alert('กรุณากรอกชื่อรายการ'); return; }
    if (!newDateKey) { alert('กรุณาเลือกวันที่'); return; }

    // Prepend time to display text if time is given and not already prefixed
    let displayText = name;
    if (startTime && !/^\d{2}:\d{2}/.test(name)) {
        displayText = `${startTime} ${name}`;
    }

    const eventObj = { text: displayText, type, startTime, endTime, location, priority: selectedPriority, allDay: isAllDay };

    if (editingIndex === -1) {
        if (!calendarEvents[newDateKey]) calendarEvents[newDateKey] = [];
        calendarEvents[newDateKey].push(eventObj);
    } else {
        if (newDateKey !== currentDateKey) {
            // Move to new date
            calendarEvents[currentDateKey].splice(editingIndex, 1);
            if (!calendarEvents[currentDateKey].length) delete calendarEvents[currentDateKey];
            if (!calendarEvents[newDateKey]) calendarEvents[newDateKey] = [];
            calendarEvents[newDateKey].push(eventObj);
            currentDateKey = newDateKey;
            currentDateDisplay = formatDate(newDateKey);
        } else {
            calendarEvents[currentDateKey][editingIndex] = eventObj;
        }
    }

    saveToLocalStorage();
    renderCalendar();
    hideModal('edit-modal');
    openDayModal(currentDateKey, currentDateDisplay);
}

function deleteEvent(idx) {
    if (!calendarEvents[currentDateKey]) return;
    calendarEvents[currentDateKey].splice(idx, 1);
    if (!calendarEvents[currentDateKey].length) delete calendarEvents[currentDateKey];
    saveToLocalStorage();
    renderCalendar();
    renderDayEvents();
}

function formatDate(dateKey) {
    const [, mo, dy] = dateKey.split('-').map(Number);
    return `${dy} ${MONTH_TH[mo - 1]} ${YEAR}`;
}

// =====================================================================
// SECTION 11: Publish to GitHub
// =====================================================================
async function publishToGitHub() {
    const { GITHUB_OWNER: owner, GITHUB_REPO: repo, GITHUB_BRANCH: branch } = CONFIG;

    if (!owner || !repo) {
        alert('กรุณาตั้งค่า GITHUB_OWNER และ GITHUB_REPO ใน script.js ก่อน');
        return;
    }

    let token = localStorage.getItem('github_pat');
    if (!token) {
        showModal('token-modal');
        return;
    }

    await doPublish(token, owner, repo, branch);
}

async function doPublish(token, owner, repo, branch) {
    const path = 'events.json';
    const btn = document.getElementById('publish-btn');
    btn.textContent = '⏳ กำลังเผยแพร่…';
    btn.disabled = true;

    try {
        // Get current file SHA (needed for update)
        let sha = null;
        const getRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`, {
            headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github.v3+json' }
        });
        if (getRes.ok) {
            sha = (await getRes.json()).sha;
        }

        const json = JSON.stringify(calendarEvents, null, 2);
        const encoded = btoa(unescape(encodeURIComponent(json)));
        const body = { message: `Update events ${new Date().toISOString()}`, content: encoded, branch };
        if (sha) body.sha = sha;

        const putRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (putRes.ok) {
            alert('✅ เผยแพร่สำเร็จ!\nVercel กำลัง deploy ข้อมูลใหม่ (~1 นาที) ทุกคนจะเห็นทันที');
        } else {
            const err = await putRes.json();
            if (putRes.status === 401) {
                localStorage.removeItem('github_pat');
                alert('❌ Token ไม่ถูกต้องหรือหมดอายุ กรุณาตั้งค่าใหม่');
            } else {
                alert('❌ เผยแพร่ไม่สำเร็จ: ' + (err.message || putRes.status));
            }
        }
    } catch (e) {
        alert('❌ ข้อผิดพลาด: ' + e.message);
    }

    btn.textContent = '🌐 เผยแพร่';
    btn.disabled = false;
}

// =====================================================================
// SECTION 12: Admin UI State
// =====================================================================
function updateAdminUI() {
    document.getElementById('admin-badge').classList.toggle('hidden', !isAdmin);
    document.getElementById('login-nav-btn').classList.toggle('hidden', isAdmin);
    document.getElementById('logout-nav-btn').classList.toggle('hidden', !isAdmin);
    document.getElementById('publish-btn').classList.toggle('hidden', !isAdmin);
}

// =====================================================================
// SECTION 13: Modal Helpers
// =====================================================================
function showModal(id) {
    document.getElementById(id).classList.remove('hidden');
}
function hideModal(id) {
    document.getElementById(id).classList.add('hidden');
}

// Close on backdrop click
document.querySelectorAll('.overlay-modal').forEach(modal => {
    modal.addEventListener('click', e => {
        if (e.target !== modal) return;
        if (modal.id === 'edit-modal') {
            hideModal('edit-modal');
            showModal('day-modal');
        } else {
            hideModal(modal.id);
        }
    });
});

// =====================================================================
// SECTION 14: Event Listeners
// =====================================================================

// Admin login
document.getElementById('login-nav-btn').addEventListener('click', () => showModal('login-modal'));
document.getElementById('close-login-btn').addEventListener('click', () => hideModal('login-modal'));
document.getElementById('do-login-btn').addEventListener('click', () => {
    const pw = document.getElementById('admin-pw-input').value;
    const errMsg = document.getElementById('login-error-msg');
    if (pw === CONFIG.ADMIN_PASSWORD) {
        isAdmin = true;
        sessionStorage.setItem('isAdmin', 'true');
        document.getElementById('admin-pw-input').value = '';
        errMsg.classList.add('hidden');
        hideModal('login-modal');
        updateAdminUI();
    } else {
        errMsg.classList.remove('hidden');
        document.getElementById('admin-pw-input').value = '';
    }
});
document.getElementById('admin-pw-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('do-login-btn').click();
});

// Logout
document.getElementById('logout-nav-btn').addEventListener('click', () => {
    isAdmin = false;
    sessionStorage.removeItem('isAdmin');
    updateAdminUI();
});

// Publish
document.getElementById('publish-btn').addEventListener('click', publishToGitHub);

// GitHub Token modal
document.getElementById('close-token-btn').addEventListener('click', () => hideModal('token-modal'));
document.getElementById('save-token-btn').addEventListener('click', async () => {
    const token = document.getElementById('github-token-input').value.trim();
    if (!token) { alert('กรุณากรอก Token'); return; }
    localStorage.setItem('github_pat', token);
    document.getElementById('github-token-input').value = '';
    hideModal('token-modal');
    await doPublish(token, CONFIG.GITHUB_OWNER, CONFIG.GITHUB_REPO, CONFIG.GITHUB_BRANCH);
});

// Day modal
document.getElementById('close-day-btn').addEventListener('click', () => hideModal('day-modal'));
document.getElementById('add-on-day-btn').addEventListener('click', () => openEditModal(-1));

// Edit modal
document.getElementById('close-edit-btn').addEventListener('click', () => { hideModal('edit-modal'); showModal('day-modal'); });
document.getElementById('cancel-edit-btn').addEventListener('click', () => { hideModal('edit-modal'); showModal('day-modal'); });
document.getElementById('save-edit-btn').addEventListener('click', saveEvent);

// Priority toggle
document.querySelectorAll('.priority-btn').forEach(btn => {
    btn.addEventListener('click', () => { selectedPriority = btn.dataset.val; updatePriorityUI(); });
});

// Time mode toggle
document.getElementById('btn-allday').addEventListener('click', () => { isAllDay = true; updateTimeModeUI(); });
document.getElementById('btn-timerange').addEventListener('click', () => { isAllDay = false; updateTimeModeUI(); });

// =====================================================================
// SECTION 15: Initialize
// =====================================================================
(async () => {
    await loadEvents();
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('calendar-container').style.display = 'block';
    renderCalendar();
    updateAdminUI();
})();
