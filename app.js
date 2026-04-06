// ==================== CONFIGURATION ====================
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz3__NbQiGHz6dWU5-I8dPNikO2kqD7TRGnbAS7CIe1BvpvbfaRkm4o9DEB7LkxMOrl/exec'; // ?? REPLACE WITH YOUR WEB APP URL

// ==================== EMBEDDED SCHOOL DATA (from your Excel) ====================
const schoolsData = [
  { unit: "سقارة", type: "عام", name: "سقارة الابتدائية المشتركه" },
  { unit: "سقارة", type: "عام", name: "الوحدة المحلية الابتدائية بسقارة" },
  { unit: "سقارة", type: "عام", name: "وحدة سقارة الابتدائية" },
  { unit: "سقارة", type: "عام", name: "خليل اللمعي الابتدائية بسقارة" },
  { unit: "سقارة", type: "عام", name: "الشافعي الابتدائية الخاصة" },
  { unit: "سقارة", type: "أزهر", name: "معهد الامام علي الابتدائي" },
  { unit: "منشأة دهشور", type: "عام", name: "منشأة دهشور المشتركه" },
  { unit: "منشأة دهشور", type: "عام", name: "منشأة دهشور الابتدائية بنين" },
  { unit: "منشأة دهشور", type: "عام", name: "خالد بن الوليد الابتدائية" },
  { unit: "منشأة دهشور", type: "أزهر", name: "معهد ابو العزايم الابتدائي" },
  { unit: "ميت رهينه", type: "عام", name: "د.محمد رضوان الابتدائي" },
  { unit: "ميت رهينه", type: "عام", name: "ميت رهينه الابتدائية المشتركه" },
  { unit: "ميت رهينه", type: "عام", name: "الجابري الابتدائية المشتركه" },
  { unit: "ميت رهينه", type: "عام", name: "الخطيب الخاصة الابتدائية" },
  { unit: "ميت رهينه", type: "أزهر", name: "معهد ميت رهينه الابتدائي" },
  { unit: "الطرفاية", type: "عام", name: "سيد الروبي الابتدائية" },
  { unit: "الطرفاية", type: "عام", name: "الطرفاية الابتدائية" },
  { unit: "ابورجوان بحري", type: "عام", name: "ابورجوان بحري الابتدائية" },
  { unit: "ابورجوان بحري", type: "عام", name: "علي عبدالجواد الابتدائية" },
  { unit: "ابورجوان بحري", type: "عام", name: "السادات الابتدائية" },
  { unit: "الشنباب", type: "عام", name: "الزهراء الابتدائية" },
  { unit: "الشنباب", type: "عام", name: "علي بن ابي طالب" },
  { unit: "الشنباب", type: "أزهر", name: "معهد الشنباب الابتدائي" },
  { unit: "المرازيق", type: "عام", name: "قلعة المرازيق الابتدائية" },
  { unit: "المرازيق", type: "عام", name: "عرب المرازيق الابتدائية" },
  { unit: "المرازيق", type: "عام", name: "نور العلم الابتدائية" },
  { unit: "المرازيق", type: "عام", name: "المرازيق الابتدائية" },
  { unit: "دهشور", type: "عام", name: "السلام الابتدائية" },
  { unit: "دهشور", type: "عام", name: "الشهيد محمود عبدالشافي" },
  { unit: "نزلة الشوبك", type: "عام", name: "شهداء نزلة الشوبك" },
  { unit: "نزلة الشوبك", type: "أزهر", name: "معهد نزلة الشوبك الابتدائي" },
  { unit: "كفر زهران", type: "عام", name: "الوحدة المجمعه بالمرازيق" },
  { unit: "كفر زهران", type: "عام", name: "الوحدة المحلية الابتدائية بكفر زهران" },
  { unit: "كفر زهران", type: "أزهر", name: "معهد المرازيق الابتدائي" },
  { unit: "كفر زهران", type: "عام", name: "شريف عناني الابتدائية" },
  { unit: "مزغونه", type: "عام", name: "مزغونه الابتدائية المشتركه" },
  { unit: "مزغونه", type: "عام", name: "التحرير الابتدائية" },
  { unit: "مزغونه", type: "أزهر", name: "معهد الرحمه الازهري الابتدائي" },
  { unit: "مزغونه", type: "عام", name: "عمر بن الخطاب الابتدائية الخاصة" },
  { unit: "العزيزية", type: "عام", name: "العزيزية الابتدائية" },
  { unit: "العزيزية", type: "عام", name: "الامام محمد عبده" },
  { unit: "العزيزية", type: "عام", name: "محمد فريد الابتدائية" },
  { unit: "العزيزية", type: "عام", name: "احمد سالمان تغيان الابتدائية" },
  { unit: "العزيزية", type: "أزهر", name: "المعهد الديني الابتدائي" },
  { unit: "العزيزية", type: "عام", name: "الايمان الابتدائي" },
  { unit: "ابوصير", type: "عام", name: "الشهيد عبدالحكيم صابر" },
  { unit: "ابوصير", type: "عام", name: "خليل اللمعي الابتدائية بابوصير" },
  { unit: "ابوصير", type: "عام", name: "عبدالموجود عويان الابتدائية" },
  { unit: "ابوصير", type: "أزهر", name: "معهد ابوصير الابتدائي" },
  { unit: "ابوصير", type: "أزهر", name: "معهد الشيخ عليان الابتدائي" },
  { unit: "زاوية دهشور", type: "عام", name: "زاوية دهشور الابتدائية" },
  { unit: "زاوية دهشور", type: "أزهر", name: "معهد زاوية دهشور الابتدائي" },
  { unit: "ابورجوان قبلي", type: "عام", name: "عكاشة و حسن الديب الابتدائية" },
  { unit: "ابورجوان قبلي", type: "عام", name: "السيد سليمان الابتدائية" },
  { unit: "ابورجوان قبلي", type: "عام", name: "عبدالمنعم بدوي الابتدائية" },
  { unit: "ابورجوان قبلي", type: "أزهر", name: "معهد سليمان الابتدائي" },
  { unit: "الشوبك الغربي", type: "عام", name: "وحدة الشوبك الابتدائية" },
  { unit: "الشوبك الغربي", type: "عام", name: "الناصر الابتدائية" },
  { unit: "الشوبك الغربي", type: "عام", name: "عبدالفتاح ناصر الابتدائية" },
  { unit: "الشوبك الغربي", type: "عام", name: "التحفيظ الابتدائية" },
  { unit: "الشوبك الغربي", type: "أزهر", name: "معهد عبدالرحمن عزام الابتدائي" },
  { unit: "الشوبك الغربي", type: "عام", name: "صلاح غريب الابتدائية" },
  { unit: "منشأة كاسب", type: "عام", name: "منشأة كاسب الابتدائية المشتركه" }
];

// Unique units (17)
const units = [...new Map(schoolsData.map(s => [s.unit, s.unit])).values()];

// ==================== INDEXEDDB SETUP ====================
let db;
const DB_NAME = 'StudentSyncDB';
const STORE_NAME = 'pendingRecords';

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      db = request.result;
      resolve(db);
    };
    request.onupgradeneeded = (e) => {
      const store = e.target.result.createObjectStore(STORE_NAME, { autoIncrement: true });
      store.createIndex('synced', 'synced');
    };
  });
}

async function addPendingRecord(record) {
  if (!db) await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const req = store.add({ ...record, synced: false, timestamp: Date.now() });
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function getAllPendingRecords() {
  if (!db) await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const index = store.index('synced');
    const req = index.getAll(IDBKeyRange.only(false));
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function markRecordAsSynced(id) {
  if (!db) await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const getReq = store.get(id);
    getReq.onsuccess = () => {
      const record = getReq.result;
      if (record) {
        record.synced = true;
        store.put(record);
      }
      resolve();
    };
    getReq.onerror = reject;
  });
}

async function deleteRecord(id) {
  if (!db) await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).delete(id);
    tx.oncomplete = resolve;
    tx.onerror = reject;
  });
}

// ==================== SYNC TO GOOGLE SHEETS ====================
async function syncPendingRecords() {
  const pending = await getAllPendingRecords();
  if (!pending.length) return;
  for (let rec of pending) {
    try {
      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // simpler but doesn't return JSON; alternative: use cors + proper CORS on Apps Script
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(rec.data)
      });
      // If using 'no-cors', we can't read response, assume success.
      await markRecordAsSynced(rec.id);
      showStatus(`? تم مزامنة: ${rec.data.studentName}`, '#d4edda');
    } catch (err) {
      console.warn('Sync failed', err);
      showStatus(`?? لا يوجد اتصال – سيتم الحفظ لاحقاً`, '#fff3cd');
    }
  }
  // Clean up synced records after sync
  const dbSync = await openDB();
  const tx = dbSync.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  const index = store.index('synced');
  const syncedRecords = await index.getAll(IDBKeyRange.only(true));
  for (let r of syncedRecords) {
    await store.delete(r.id);
  }
}

// ==================== STUDENT AUTOCOMPLETE (LocalStorage) ====================
function getStudentProfile(name) {
  const profiles = JSON.parse(localStorage.getItem('studentProfiles') || '{}');
  return profiles[name];
}

function saveStudentProfile(name, nationalId, gender, birthDate, parentPhone) {
  const profiles = JSON.parse(localStorage.getItem('studentProfiles') || '{}');
  profiles[name] = { nationalId, gender, birthDate, parentPhone };
  localStorage.setItem('studentProfiles', JSON.stringify(profiles));
  updateDatalist();
}

function updateDatalist() {
  const profiles = JSON.parse(localStorage.getItem('studentProfiles') || '{}');
  const datalist = document.getElementById('studentList');
  datalist.innerHTML = '';
  Object.keys(profiles).forEach(name => {
    const option = document.createElement('option');
    option.value = name;
    datalist.appendChild(option);
  });
}

// ==================== FORM HANDLERS ====================
function populateUnits() {
  const unitSelect = document.getElementById('unit');
  unitSelect.innerHTML = '<option value="">-- اختر الوحدة --</option>';
  units.forEach(u => {
    const opt = document.createElement('option');
    opt.value = u;
    opt.textContent = u;
    unitSelect.appendChild(opt);
  });
}

function filterSchools() {
  const unit = document.getElementById('unit').value;
  const type = document.getElementById('schoolType').value;
  const schoolSelect = document.getElementById('schoolName');
  schoolSelect.innerHTML = '<option value="">-- اختر المدرسة --</option>';
  if (!unit) return;
  const filtered = schoolsData.filter(s => s.unit === unit && s.type === type);
  filtered.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.name;
    opt.textContent = s.name;
    schoolSelect.appendChild(opt);
  });
}

function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const heightCm = parseFloat(document.getElementById('height').value);
  if (weight > 0 && heightCm > 0) {
    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    document.getElementById('bmiDisplay').innerHTML = `?? مؤشر كتلة الجسم: ${bmi.toFixed(1)} (${bmi < 18.5 ? 'نقص وزن' : bmi < 25 ? 'طبيعي' : bmi < 30 ? 'زيادة وزن' : 'سمنة'})`;
    return bmi.toFixed(1);
  }
  document.getElementById('bmiDisplay').innerHTML = '?? مؤشر كتلة الجسم: ---';
  return null;
}

function showStatus(msg, bg) {
  const statusDiv = document.getElementById('syncStatus');
  statusDiv.innerHTML = msg;
  statusDiv.style.backgroundColor = bg;
  setTimeout(() => {
    if (navigator.onLine) statusDiv.innerHTML = '?? متصل وتمت المزامنة';
    else statusDiv.innerHTML = '?? غير متصل – البيانات محفوظة محلياً';
  }, 3000);
}

document.getElementById('studentName').addEventListener('input', (e) => {
  const name = e.target.value;
  const profile = getStudentProfile(name);
  if (profile) {
    document.getElementById('nationalId').value = profile.nationalId || '';
    document.getElementById('gender').value = profile.gender || 'ذكر';
    document.getElementById('birthDate').value = profile.birthDate || '';
    document.getElementById('parentPhone').value = profile.parentPhone || '';
  }
});

document.getElementById('weight').addEventListener('input', calculateBMI);
document.getElementById('height').addEventListener('input', calculateBMI);

document.getElementById('saveBtn').addEventListener('click', async () => {
  const unit = document.getElementById('unit').value;
  const schoolType = document.getElementById('schoolType').value;
  const schoolName = document.getElementById('schoolName').value;
  const grade = document.getElementById('grade').value;
  const studentName = document.getElementById('studentName').value.trim();
  const nationalId = document.getElementById('nationalId').value.trim();
  const gender = document.getElementById('gender').value;
  const birthDate = document.getElementById('birthDate').value;
  const parentPhone = document.getElementById('parentPhone').value.trim();
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const hemoglobin = parseFloat(document.getElementById('hemoglobin').value);
  let bmi = calculateBMI();
  if (!unit || !schoolName || !studentName) {
    alert('يرجى ملء الوحدة، المدرسة، واسم الطالب');
    return;
  }
  if (isNaN(height) || isNaN(weight)) {
    alert('الرجاء إدخال الطول والوزن');
    return;
  }
  const record = {
    unit, studentName, gender, nationalId, schoolName, schoolType,
    grade, weight, height, hemoglobin, bmi: bmi || ''
  };
  // Save student profile
  saveStudentProfile(studentName, nationalId, gender, birthDate, parentPhone);
  // Store in IndexedDB
  await addPendingRecord({ data: record });
  // Try sync immediately
  if (navigator.onLine) {
    await syncPendingRecords();
    showStatus('? تم الحفظ والمزامنة مع Google Sheets', '#d4edda');
  } else {
    showStatus('?? غير متصل – تم الحفظ محلياً وسيتم المزامنة تلقائياً', '#fff3cd');
  }
  // Clear measurement fields but keep student info
  document.getElementById('weight').value = '';
  document.getElementById('height').value = '';
  document.getElementById('hemoglobin').value = '';
  document.getElementById('bmiDisplay').innerHTML = '?? مؤشر كتلة الجسم: ---';
});

window.addEventListener('load', async () => {
  await openDB();
  populateUnits();
  updateDatalist();
  document.getElementById('unit').addEventListener('change', filterSchools);
  document.getElementById('schoolType').addEventListener('change', filterSchools);
  window.addEventListener('online', () => {
    showStatus('?? تم الاتصال – جاري المزامنة', '#d1ecf1');
    syncPendingRecords();
  });
  // initial sync if online
  if (navigator.onLine) syncPendingRecords();
});
