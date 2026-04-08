// =====================================================================
// โซนที่ 1: ข้อมูลตารางงาน
// =====================================================================

const myEvents = {
    "2026-01-01": [{ text: "วันขึ้นปีใหม่", type: "holiday" }, { text: "ปาร์ตี้ปีใหม่ / แยกส่วน-ริก", type: "party" }],
    "2026-03-03": [{ text: "วันมาฆบูชา", type: "holiday" }],
    "2026-04-06": [{ text: "วันจักรี", type: "holiday" }],
    "2026-04-13": [{ text: "วันสงกรานต์", type: "holiday" }],
    "2026-04-14": [{ text: "วันสงกรานต์", type: "holiday" }],
    "2026-04-15": [{ text: "วันสงกรานต์", type: "holiday" }],
    "2026-05-01": [{ text: "วันแรงงาน", type: "holiday" }],
    "2026-05-04": [{ text: "วันฉัตรมงคล", type: "holiday" }],
    "2026-05-31": [{ text: "วันวิสาขบูชา", type: "holiday" }, { text: "วันสุดท้ายของการฝึกเเละรอกำหนดการใหม่หลังจากลงทะเบียน", type: "holiday" }],
    "2026-06-03": [{ text: "วันเฉลิมฯ พระราชินี", type: "holiday" }],
    "2026-07-28": [{ text: "วันเฉลิมฯ ร.10", type: "holiday" }],
    "2026-07-29": [{ text: "วันอาสาฬหบูชา", type: "holiday" }],
    "2026-07-30": [{ text: "วันเข้าพรรษา", type: "holiday" }],
    "2026-08-12": [{ text: "วันแม่แห่งชาติ", type: "holiday" }],
    "2026-10-13": [{ text: "วันนวมินทรมหาราช", type: "holiday" }],
    "2026-10-23": [{ text: "วันปิยมหาราช", type: "holiday" }],
    "2026-12-05": [{ text: "วันพ่อแห่งชาติ", type: "holiday" }],
    "2026-12-10": [{ text: "วันรัฐธรรมนูญ", type: "holiday" }],
    "2026-12-31": [{ text: "วันสิ้นปี", type: "holiday" }],

    "2026-01-02": [{ text: "ปาร์ตี้ปีใหม่ / แยกส่วน-ริก", type: "party" }],
    "2026-01-03": [{ text: "ปาร์ตี้ปีใหม่", type: "party" }, { text: "ส่งงานอนิเมชัน", type: "anim" }],
    "2026-01-04": [{ text: "ปาร์ตี้ปีใหม่", type: "party" }],
    "2026-01-13": [{ text: "แยกส่วน-ทำการริก", type: "anim" }],
    "2026-01-14": [{ text: "แยกส่วน-ทำการริก", type: "anim" }],
    "2026-01-15": [{ text: "ส่งงานอนิเมชัน", type: "anim" }],
    "2026-01-21": [{ text: "แยกส่วน-ทำการริก", type: "anim" }],
    "2026-01-22": [{ text: "แยกส่วน-ทำการริก", type: "anim" }],
    "2026-01-23": [{ text: "ส่งงานอนิเมชัน", type: "anim" }],
    "2026-01-28": [{ text: "แยกส่วน-ทำการริก", type: "anim" }],
    "2026-01-29": [{ text: "แยกส่วน-ทำการริก", type: "anim" }],
    "2026-01-30": [{ text: "ส่งงานอนิเมชัน", type: "anim" }],
    "2026-01-31": [{ text: "แยกส่วน-ทำการริก", type: "anim" }],

    "2026-02-01": [{ text: "แยกส่วน-ทำการริก", type: "anim" }],
    "2026-02-02": [{ text: "ส่งงานอนิเมชัน", type: "anim" }],
    "2026-02-08": [{ text: "แยกส่วน-ทำการริก", type: "anim" }],
    "2026-02-09": [{ text: "แยกส่วน-ทำการริก", type: "anim" }],
    "2026-02-10": [{ text: "ส่งงานอนิเมชัน", type: "anim" }],
    "2026-02-13": [{ text: "ทำงานมหาลัย / ทำอนิเมชัน", type: "project" }],
    "2026-02-14": [{ text: "ทำงานมหาลัย / ทำอนิเมชัน", type: "project" }],
    "2026-02-15": [{ text: "ทำงานมหาลัย / ทำอนิเมชัน", type: "project" }],
    "2026-02-16": [{ text: "แยกส่วน-ทำการริก", type: "anim" }],
    "2026-02-17": [{ text: "แยกส่วน-ทำการริก", type: "anim" }],
    "2026-02-18": [{ text: "ส่งงานอนิเมชัน", type: "anim" }],

    "2026-03-07": [{ text: "แยกส่วน-ทำการริก", type: "anim" }],
    "2026-03-08": [{ text: "แยกส่วน-ทำการริก", type: "anim" }],
    "2026-03-09": [{ text: "โปรเจคอนิเมชัน (เสร็จแล้ว)", type: "anim" }],
    "2026-03-22": [{ text: "ถ่ายภาพนางแบบ (กลางภาค)", type: "project" }],
    "2026-03-26": [{ text: "ถ่ายภาพนางแบบ (ปลายภาค)", type: "project" }, { text: "ทำโปรเจคอนิเมชันใหม่", type: "anim" }],

    "2026-04-04": [{ text: "โปรเจคอนิเมชันใหม่", type: "project" }],
    "2026-04-08": [{ text: "โปรเจคอนิเมชันใหม่", type: "project" }],

    "2026-05-03": [{ text: "เที่ยวพัทยา สาขาดิจิทัลอาร์ท", type: "party" }],
    "2026-05-04": [{ text: "เที่ยวพัทยา สาขาดิจิทัลอาร์ท", type: "party" }],
    "2026-05-05": [{ text: "เที่ยวพัทยา สาขาดิจิทัลอาร์ท", type: "party" }],
    "2026-05-06": [{ text: "เที่ยวพัทยา สาขาดิจิทัลอาร์ท", type: "party" }],
    "2026-05-11": [{ text: "เริ่มฝึกงาน", type: "party" }],


    "2026-06-04": [{ text: "ลงทะเบียนเรียน", type: "project" }],
    "2026-06-08": [{ text: "เปิดเทอม", type: "project" }]
};

// =====================================================================
// โซนที่ 2: สร้างปฏิทิน 12 เดือนอัตโนมัติ
// =====================================================================

const year = 2026;
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const container = document.getElementById("calendar-container");

for (let m = 0; m < 12; m++) {
    const section = document.createElement('section');
    section.className = 'month-section';

    let monthNum = m + 1;
    let noteContent = "";
    let noteClass = "";
    let taskNotesContent = ""; 

    if (monthNum >= 2 && monthNum <= 4) {
        noteContent = "🏖️ ช่วงปิดเทอมเเละช่วยงานที่บ้าน";
        noteClass = "note-red";
        taskNotesContent = `
            <li style="list-style-type: none; margin-left: -20px; font-weight: bold; color: #d32f2f;">⏰ 07:00 - 19:00</li>
            <li style="margin-bottom: 8px;">ดูแลหน้าร้าน / ช่วยงานที่บ้าน (เต็มวัน)</li>
            <li style="list-style-type: none; margin-left: -20px; font-weight: bold; color: #1976d2;">💻 19:00 - 00:00</li>
            <li>เวลาทำงานหลัก (แอนิเมชัน / โปรเจกต์)</li>
        `;
    } else if (monthNum === 10) {
        noteContent = "🍂 ช่วงปิดเทอมเล็ก";
        noteClass = "note-orange";
        taskNotesContent = `
            <li>แยกส่วน / ทำการริก</li>
            <li>แอนิเมชันลงกลุ่ม</li>
            <li>โปรเจกต์มหาลัย</li>
        `;
                
    } else if (monthNum === 5) {
        noteContent = "📚 ช่วงทดลองงาน";
        noteClass = "note-orange";
        taskNotesContent = `
            <li></li>
            <li></li>
            <li></li>
        `;
    } else {
        noteContent = "📚 ช่วงเปิดเทอม";
        noteClass = "note-green";
        taskNotesContent = `
            <li>แยกส่วน / ทำการริก</li>
            <li>แอนิเมชันลงกลุ่ม</li>
            <li>โปรเจกต์มหาลัย</li>
        `;
    }

    let sidebarNote = `
        <div class="sidebar-note-container">
            <div class="sidebar-note ${noteClass}">${noteContent}</div>
            <div class="note-subtext">* อาจจะมีการปรับเปลี่ยน</div>
        </div>
    `;

    let htmlString = `
        <div class="month-header">
            <div class="month-header-left">
                <h1>${monthNames[m]}</h1>
                <span class="year-badge">${year}</span>
            </div>
        </div>
        
        <div class="scroll-wrapper">
            <div class="layout-grid">
                <div class="calendar-main">
                    <div class="day-name">SUN</div><div class="day-name">MON</div><div class="day-name">TUE</div>
                    <div class="day-name">WED</div><div class="day-name">THU</div><div class="day-name">FRI</div><div class="day-name">SAT</div>
    `;

    let firstDay = new Date(year, m, 1).getDay();
    let daysInMonth = new Date(year, m + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        htmlString += `<div class="day-cell empty"></div>`;
    }

    for (let d = 1; d <= daysInMonth; d++) {
        let dateStr = `${year}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
        let dayOfWeek = new Date(year, m, d).getDay(); 

        let cellEventsHTML = "";
        let hasEvent = false;

        let isClassPeriod = (m === 0 || m === 1 || (m === 2 && d <= 14));
        if (isClassPeriod) {
            if (dayOfWeek === 1) { cellEventsHTML += `<div class="event event-class">13:00 วิทย์สุขภาพ</div>`; hasEvent = true; }
            if (dayOfWeek === 2) {
                cellEventsHTML += `<div class="event event-class">08:00 บำรุงรักษาฯ</div>`;
                cellEventsHTML += `<div class="event event-class">10:00 สุนทรียภาพฯ</div>`;
                cellEventsHTML += `<div class="event event-class">13:00 จิตวิทยาฯ</div>`; hasEvent = true;
            }
            if (dayOfWeek === 3) { cellEventsHTML += `<div class="event event-class">08:00 ถ่ายภาพแฟชั่น</div>`; hasEvent = true; }
            if (dayOfWeek === 4) {
                cellEventsHTML += `<div class="event event-class">10:00 อังกฤษฯ</div>`;
                cellEventsHTML += `<div class="event event-class">13:00 อัตลักษณ์ฯ</div>`; hasEvent = true;
            }
            if (dayOfWeek === 5) {
                cellEventsHTML += `<div class="event event-class">08:00 ตัดต่อหนังฯ</div>`;
                cellEventsHTML += `<div class="event event-class">13:00 วิจัยฯ</div>`; hasEvent = true;
            }
        }

        if (myEvents[dateStr]) {
            myEvents[dateStr].forEach(ev => {
                cellEventsHTML += `<div class="event event-${ev.type}">${ev.text}</div>`;
            });
            hasEvent = true;
        }

        let cellClass = hasEvent ? "day-cell has-event" : "day-cell";
        // ใส่ data-date เอาไว้ให้ Popup ดึงไปแสดงผล
        htmlString += `<div class="${cellClass}" data-date="${d} ${monthNames[m]} ${year}"><div class="date-num">${d}</div>${cellEventsHTML}</div>`;
    }

    htmlString += `
                </div> 
                
                <div class="sidebar">
                    ${sidebarNote}
                    <div class="sidebar-box green-box">
                        <div class="sidebar-title">Task & Notes</div>
                        <ul class="sidebar-list">
                            ${taskNotesContent}
                        </ul>
                    </div>
                    <div class="sidebar-box">
                        <div class="sidebar-title">Legend</div>
                        <div class="legend-item"><div class="color-box bg-red"></div> วันหยุด / วันสำคัญ</div>
                        <div class="legend-item"><div class="color-box bg-purple"></div> งานแอนิเมชัน</div>
                        <div class="legend-item"><div class="color-box bg-blue"></div> ตารางเรียน</div>
                        <div class="legend-item"><div class="color-box bg-green"></div> โปรเจกต์/มหาลัย</div>
                    </div>
                </div>
                
            </div>
        </div>
    `;

    section.innerHTML = htmlString;
    container.appendChild(section);
}

// =====================================================================
// โซนที่ 3: ระบบ Popup (คลิกที่ช่องเพื่อดูรายละเอียด)
// =====================================================================
const modal = document.getElementById("event-modal");
const closeModal = document.getElementById("close-modal");
const modalDate = document.getElementById("modal-date");
const modalEvents = document.getElementById("modal-events");

// ดักจับการคลิกที่ปฏิทิน
container.addEventListener('click', function(e) {
    let cell = e.target.closest('.day-cell');
    
    // ถ้าคลิกโดนช่องว่าง ให้ข้ามไป
    if (!cell || cell.classList.contains('empty')) return;

    // ดึงวันที่มาแสดงที่หัว Popup
    let fullDate = cell.getAttribute('data-date');
    modalDate.innerText = fullDate;

    // ดึงกล่องกิจกรรมทั้งหมดในช่องนั้น
    let events = cell.querySelectorAll('.event');
    let eventsHTML = "";

    if (events.length > 0) {
        events.forEach(ev => {
            eventsHTML += `<div class="${ev.className}">${ev.innerText}</div>`;
        });
    } else {
        eventsHTML = "<div class='no-event'>ไม่มีตารางงานในวันนี้</div>";
    }

    modalEvents.innerHTML = eventsHTML;
    modal.classList.add('show');
});

// กดกากบาทปิด Popup
closeModal.addEventListener('click', () => { modal.classList.remove('show'); });

// กดพื้นที่สีดำด้านนอกเพื่อปิด Popup
window.addEventListener('click', (e) => {
    if (e.target === modal) { modal.classList.remove('show'); }
});
// กดพื้นที่สีดำด้านนอกเพื่อปิด Popup
window.addEventListener('click', (e) => {
    if (e.target === modal) { modal.classList.remove('show'); }
});
