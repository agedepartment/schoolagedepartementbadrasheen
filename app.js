// ==================== CONFIGURATION ====================
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz3__NbQiGHz6dWU5-I8dPNikO2kqD7TRGnbAS7CIe1BvpvbfaRkm4o9DEB7LkxMOrl/exec'; // ⚠️ ضع الرابط الجديد

// ==================== بيانات المدارس (كامله) ====================
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

const units = [...new Map(schoolsData.map(s => [s.unit, s.unit])).values()];

// ==================== IndexedDB ====================
let db;
const DB_NAME = 'StudentSyncDB';
const STORE_NAME = 'pendingRecords';

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 3);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => { db = request.result; resolve(db); };
    request.onupgradeneeded = (e) => {
      if (!e.target.result.objectStoreNames.contains(STORE_NAME)) {
        const store = e.target.result.createObjectStore(STORE_NAME, { autoIncrement: true });
        store.createIndex('synced', 'synced');
      }
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
    const records = [];
    const request = index.openCursor();
    request.onsuccess = (e) => {
      const cursor = e.target.result;
      if (cursor) {
        if (cursor.value.synced === false) {
          records.push({ id: cursor.primaryKey, data: cursor.value.data });
        }
        cursor.continue();
      } else {
        resolve(records);
      }
    };
    request.onerror = () => reject(request.error);
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

async function deleteAllSyncedRecords() {
  if (!db) await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const index = store.index('synced');
    const idsToDelete = [];
    const request = index.openCursor();
    request.onsuccess = (e) => {
      const cursor = e.target.result;
      if (cursor) {
        if (cursor.value.synced === true) {
          idsToDelete.push(cursor.primaryKey);
        }
        cursor.continue();
      } else {
        let completed = 0;
        if (idsToDelete.length === 0) {
          resolve();
          return;
        }
        idsToDelete.forEach(id => {
          const delReq = store.delete(id);
          delReq.onsuccess = () => {
            completed++;
            if (completed === idsToDelete.length) resolve();
          };
          delReq.onerror = reject;
        });
      }
    };
    request.onerror = reject;
  });
}

async function syncPendingRecords() {
  const pending = await getAllPendingRecords();
  if (!pending.length) return;
  let anySuccess = false;
  for (let rec of pending) {
    try {
      // إرسال البيانات كـ x-www-form-urlencoded
      const formData = new URLSearchParams();
      formData.append('unit', rec.data.unit);
      formData.append('studentName', rec.data.studentName);
      formData.append('gender', rec.data.gender);
      formData.append('nationalId', rec.data.nationalId);
      formData.append('parentPhone', rec.data.parentPhone);
      formData.append('birthDate', rec.data.birthDate);
      formData.append('schoolName', rec.data.schoolName);
      formData.append('schoolType', rec.data.schoolType);
      formData.append('grade', rec.data.grade);
      formData.append('classNumber', rec.data.classNumber);
      formData.append('weight', rec.data.weight);
      formData.append('height', rec.data.height);
      formData.append('hemoglobin', rec.data.hemoglobin);
      formData.append('bmi', rec.data.bmi);

      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData
      });
      const result = await response.json();
      if (result.status === 'success') {
        await markRecordAsSynced(rec.id);
        showStatus(`✅ تم مزامنة: ${rec.data.studentName}`, '#d4edda');
        updateSessionLog();
        anySuccess = true;
      } else {
        throw new Error(result.message || 'فشل الحفظ في الشيت');
      }
    } catch (err) {
      console.warn('Sync failed', err);
      showStatus(`⚠️ فشل المزامنة: ${err.message}`, '#f8d7da');
    }
  }
  if (anySuccess) {
    await deleteAllSyncedRecords();
  }
}

// ==================== جلب جميع الطلاب من الشيت ====================
async function fetchAllStudentsFromSheet(unit) {
  try {
    const url = `${APPS_SCRIPT_URL}?unit=${encodeURIComponent(unit)}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.students || [];
  } catch (err) {
    console.warn('Fetch students error', err);
    return [];
  }
}

async function refreshAllStudentsForUnit(unit) {
  if (!unit) return;
  if (navigator.onLine) {
    const students = await fetchAllStudentsFromSheet(unit);
    localStorage.setItem(`allStudents_${unit}`, JSON.stringify(students));
  }
  updateDatalistFromCurrentFilter();
}

function getAllStudentsLocally(unit) {
  const data = localStorage.getItem(`allStudents_${unit}`);
  return data ? JSON.parse(data) : [];
}

function updateDatalistFromCurrentFilter() {
  const unit = document.getElementById('unit').value;
  const schoolName = document.getElementById('schoolName').value;
  const grade = document.getElementById('grade').value;
  const classNumber = document.getElementById('classNumber').value;
  if (!unit || !schoolName || !grade || !classNumber) {
    document.getElementById('studentList').innerHTML = '';
    return;
  }
  const allStudents = getAllStudentsLocally(unit);
  const filtered = allStudents.filter(s => 
    s.schoolName === schoolName && s.grade === grade && s.classNumber == classNumber
  );
  const datalist = document.getElementById('studentList');
  datalist.innerHTML = '';
  filtered.forEach(s => {
    const option = document.createElement('option');
    option.value = s.name;
    datalist.appendChild(option);
  });
  console.log(`Datalist updated with ${filtered.length} students`);
}

function fillFormFromSelectedName(name) {
  const unit = document.getElementById('unit').value;
  const schoolName = document.getElementById('schoolName').value;
  const grade = document.getElementById('grade').value;
  const classNumber = document.getElementById('classNumber').value;
  if (!unit || !schoolName || !grade || !classNumber) return;
  const allStudents = getAllStudentsLocally(unit);
  const student = allStudents.find(s => 
    s.name === name && s.schoolName === schoolName && s.grade === grade && s.classNumber == classNumber
  );
  if (student) {
    document.getElementById('nationalId').value = student.nationalId || '';
    document.getElementById('gender').value = student.gender || '';
    document.getElementById('birthDate').value = student.birthDate || '';
    document.getElementById('parentPhone').value = student.parentPhone || '';
    document.getElementById('nationalId').readOnly = true;
    document.getElementById('gender').readOnly = true;
    document.getElementById('birthDate').readOnly = true;
    if (student.parentPhone && student.parentPhone.trim() !== '') {
      document.getElementById('parentPhone').readOnly = true;
    } else {
      document.getElementById('parentPhone').readOnly = false;
    }
  } else {
    document.getElementById('nationalId').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('birthDate').value = '';
    document.getElementById('parentPhone').value = '';
    document.getElementById('nationalId').readOnly = false;
    document.getElementById('gender').readOnly = false;
    document.getElementById('birthDate').readOnly = false;
    document.getElementById('parentPhone').readOnly = false;
  }
}

// ==================== جلسة التسجيل ====================
let sessionRecords = [];

function addToSessionLog(studentName, synced = false) {
  sessionRecords.unshift({ studentName, synced, timestamp: new Date().toLocaleString() });
  updateSessionLog();
  localStorage.setItem('sessionLog', JSON.stringify(sessionRecords));
}

function updateSessionLog() {
  const list = document.getElementById('sessionLogList');
  if (!list) return;
  list.innerHTML = '';
  sessionRecords.forEach(rec => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${rec.studentName}</span> <span class="${rec.synced ? 'synced' : 'pending'}">${rec.synced ? '✅ تم الحفظ' : '⏳ لم يتم الحفظ'}</span>`;
    list.appendChild(li);
  });
}

function loadSessionLog() {
  const saved = localStorage.getItem('sessionLog');
  if (saved) {
    sessionRecords = JSON.parse(saved);
    updateSessionLog();
  }
}

// ==================== دوال الواجهة ====================
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
    document.getElementById('bmiDisplay').innerHTML = `📊 مؤشر كتلة الجسم: ${bmi.toFixed(1)} (${bmi < 18.5 ? 'نقص وزن' : bmi < 25 ? 'طبيعي' : bmi < 30 ? 'زيادة وزن' : 'سمنة'})`;
    return bmi.toFixed(1);
  }
  document.getElementById('bmiDisplay').innerHTML = '📊 مؤشر كتلة الجسم: ---';
  return null;
}

function showStatus(msg, bg) {
  const statusDiv = document.getElementById('syncStatus');
  statusDiv.innerHTML = msg;
  statusDiv.style.backgroundColor = bg;
  setTimeout(() => {
    if (navigator.onLine) statusDiv.innerHTML = '🟢 متصل وتمت المزامنة';
    else statusDiv.innerHTML = '🔴 غير متصل – البيانات محفوظة محلياً';
  }, 3000);
}

// ==================== حفظ البيانات ====================
document.getElementById('saveBtn').addEventListener('click', async () => {
  console.log('Save button clicked');
  const unit = document.getElementById('unit').value;
  const schoolType = document.getElementById('schoolType').value;
  const schoolName = document.getElementById('schoolName').value;
  const grade = document.getElementById('grade').value;
  const classNumber = document.getElementById('classNumber').value;
  const studentName = document.getElementById('studentName').value.trim();
  let nationalId = document.getElementById('nationalId').value.trim();
  let gender = document.getElementById('gender').value.trim();
  let birthDate = document.getElementById('birthDate').value;
  let parentPhone = document.getElementById('parentPhone').value.trim();
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const hemoglobin = parseFloat(document.getElementById('hemoglobin').value);
  let bmi = calculateBMI();

  if (!unit || !schoolName || !studentName || !classNumber) {
    alert('يرجى ملء الوحدة، المدرسة، اسم الطالب، والفصل');
    return;
  }
  if (isNaN(height) || isNaN(weight)) {
    alert('الرجاء إدخال الطول والوزن');
    return;
  }

  const allStudents = getAllStudentsLocally(unit);
  const existing = allStudents.find(s => 
    s.name === studentName && s.schoolName === schoolName && s.grade === grade && s.classNumber == classNumber
  );
  if (existing) {
    nationalId = existing.nationalId;
    gender = existing.gender;
    birthDate = existing.birthDate;
    if (!existing.parentPhone && parentPhone) {
      existing.parentPhone = parentPhone;
      localStorage.setItem(`allStudents_${unit}`, JSON.stringify(allStudents));
    } else {
      parentPhone = existing.parentPhone;
    }
  }

  const record = {
    unit, studentName, gender, nationalId, parentPhone, birthDate,
    schoolName, schoolType, grade, classNumber,
    weight, height, hemoglobin, bmi: bmi || ''
  };

  try {
    await addPendingRecord({ data: record });
    addToSessionLog(studentName, false);
    showStatus('📱 تم الحفظ محلياً', '#d4edda');
    
    if (navigator.onLine) {
      await syncPendingRecords();
      // بعد المزامنة، نتحقق من نجاحها عبر قراءة السجلات المتبقية
      const remaining = await getAllPendingRecords();
      if (remaining.length === 0) {
        showStatus('✅ تم الحفظ والمزامنة مع Google Sheets', '#d4edda');
        await refreshAllStudentsForUnit(unit);
        updateDatalistFromCurrentFilter();
        sessionRecords = sessionRecords.map(r => ({ ...r, synced: true }));
        updateSessionLog();
        localStorage.setItem('sessionLog', JSON.stringify(sessionRecords));
      } else {
        showStatus('⚠️ فشلت المزامنة، سيتم المحاولة لاحقاً', '#f8d7da');
      }
    } else {
      showStatus('📱 غير متصل – تم الحفظ محلياً وسيتم المزامنة تلقائياً', '#fff3cd');
    }

    // مسح حقول القياسات
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('hemoglobin').value = '';
    document.getElementById('bmiDisplay').innerHTML = '📊 مؤشر كتلة الجسم: ---';
  } catch (err) {
    console.error('Save error', err);
    alert('حدث خطأ أثناء الحفظ: ' + err.message);
  }
});

// ==================== أزرار أخرى ====================
document.getElementById('newStudentBtn').addEventListener('click', () => {
  console.log('New student button clicked');
  document.getElementById('studentName').value = '';
  document.getElementById('nationalId').value = '';
  document.getElementById('gender').value = '';
  document.getElementById('birthDate').value = '';
  document.getElementById('parentPhone').value = '';
  document.getElementById('weight').value = '';
  document.getElementById('height').value = '';
  document.getElementById('hemoglobin').value = '';
  document.getElementById('bmiDisplay').innerHTML = '📊 مؤشر كتلة الجسم: ---';
  document.getElementById('nationalId').readOnly = false;
  document.getElementById('gender').readOnly = false;
  document.getElementById('birthDate').readOnly = false;
  document.getElementById('parentPhone').readOnly = false;
  document.getElementById('studentName').focus();
});

const modal = document.getElementById('logModal');
document.getElementById('showLogBtn').addEventListener('click', () => {
  console.log('Show log button clicked');
  updateSessionLog();
  modal.style.display = 'flex';
});
const closeBtn = document.querySelector('.close');
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}
window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});

window.addEventListener('beforeunload', (e) => {
  const pendingRecords = sessionRecords.filter(r => !r.synced);
  if (pendingRecords.length > 0) {
    e.preventDefault();
    e.returnValue = 'هناك بيانات لم يتم حفظها بعد. هل تريد المغادرة؟';
    return e.returnValue;
  }
});

// ==================== أحداث التغيير ====================
document.getElementById('unit').addEventListener('change', async () => {
  filterSchools();
  const unit = document.getElementById('unit').value;
  if (unit) {
    await refreshAllStudentsForUnit(unit);
    updateDatalistFromCurrentFilter();
  }
});
document.getElementById('schoolType').addEventListener('change', filterSchools);
document.getElementById('schoolName').addEventListener('change', updateDatalistFromCurrentFilter);
document.getElementById('grade').addEventListener('change', updateDatalistFromCurrentFilter);
document.getElementById('classNumber').addEventListener('change', updateDatalistFromCurrentFilter);
document.getElementById('studentName').addEventListener('change', (e) => {
  fillFormFromSelectedName(e.target.value);
});
document.getElementById('weight').addEventListener('input', calculateBMI);
document.getElementById('height').addEventListener('input', calculateBMI);

// ==================== التحميل الأولي ====================
window.addEventListener('load', async () => {
  console.log('Window loaded');
  await openDB();
  populateUnits();
  loadSessionLog();
  const unitSelect = document.getElementById('unit');
  if (unitSelect.value) {
    await refreshAllStudentsForUnit(unitSelect.value);
    updateDatalistFromCurrentFilter();
  }
  window.addEventListener('online', async () => {
    showStatus('🔄 تم الاتصال – جاري المزامنة', '#d1ecf1');
    await syncPendingRecords();
    const pending = await getAllPendingRecords();
    if (pending.length === 0) {
      sessionRecords = sessionRecords.map(r => ({ ...r, synced: true }));
      updateSessionLog();
      localStorage.setItem('sessionLog', JSON.stringify(sessionRecords));
    }
    const unit = document.getElementById('unit').value;
    if (unit) await refreshAllStudentsForUnit(unit);
    updateDatalistFromCurrentFilter();
  });
  if (navigator.onLine) {
    await syncPendingRecords();
    const unit = document.getElementById('unit').value;
    if (unit) await refreshAllStudentsForUnit(unit);
    updateDatalistFromCurrentFilter();
  }
});
