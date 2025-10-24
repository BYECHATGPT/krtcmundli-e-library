/* src/App.jsx — FULL working UI (Auth, Library list, Upload, Profile)
   Replace the firebaseConfig object below with your config if needed (I used yours).
*/
import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getIdTokenResult
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  serverTimestamp,
  onSnapshot
} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useForm } from "react-hook-form";

// ---------------- FIREBASE CONFIG (already provided by you) ----------------
const firebaseConfig = {
  apiKey: "AIzaSyDg-J6enkiX96a9QBNLmmVwxleCGC5PU7c",
  authDomain: "krtc-mundali-e-library.firebaseapp.com",
  projectId: "krtc-mundali-e-library",
  storageBucket: "krtc-mundali-e-library.firebasestorage.app",
  messagingSenderId: "374231682571",
  appId: "1:374231682571:web:3ae899f426eff2c38ec10e",
  measurementId: "G-GB14RRPX31"
};
// --------------------------------------------------------------------------
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const COLORS = { navy: "#0B2545", gold: "#C69C4E", red: "#A62B2B", cream: "#F6EFE6" };

export default function App() {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [lang, setLang] = useState("en");
  const [view, setView] = useState("library");
  const [books, setBooks] = useState([]);
  const [queryText, setQueryText] = useState("");
  const [filterSection, setFilterSection] = useState("All");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        // fetch token claims
        const tokenRes = await getIdTokenResult(u, true).catch(()=>null);
        setIsAdmin(!!(tokenRes && tokenRes.claims && tokenRes.claims.admin));
      } else setIsAdmin(false);
      setLoadingAuth(false);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    const q = query(collection(db, "books"), orderBy("createdAt", "desc"), limit(200));
    const unsub = onSnapshot(q, (snap) => {
      setBooks(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    }, (err) => {
      console.error("books listener error", err);
    });
    return () => unsub();
  }, []);

  const T = (en, hi) => (lang === "en" ? en : hi);

  if (loadingAuth) return <div style={{padding:20}}> {T("Loading...","लोड हो रहा है...")}</div>;
  if (!user) return <AuthScreen setLang={setLang} lang={lang} T={T} />;

  return (
    <div style={{background:COLORS.cream, minHeight:'100vh', color:COLORS.navy, padding:12, fontFamily:'Inter, sans-serif'}}>
      <header style={{maxWidth:900, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center', padding:12}}>
        <div style={{display:'flex', gap:12, alignItems:'center'}}>
          <img src="/logo.png" alt="logo" style={{width:64, height:64, objectFit:'contain'}}/>
          <div>
            <div style={{fontSize:20, fontWeight:700}}>KRTC MUNDALI</div>
            <div style={{fontSize:12, color:COLORS.red}}>{T('Constable Trainee & Staff Library','कांस्टेबल प्रशिक्षणार्थी और स्टाफ पुस्तकालय')}</div>
          </div>
        </div>
        <div style={{display:'flex', gap:8, alignItems:'center'}}>
          <LanguageToggle lang={lang} setLang={setLang} COLORS={COLORS} />
          <button onClick={()=>signOut(auth)} style={{background:COLORS.red, color:'#fff', padding:'8px 12px', borderRadius:8, border:'none'}}>{T('Sign out','साइन आउट')}</button>
        </div>
      </header>

      <main style={{maxWidth:900, margin:'12px auto', background:'#fff', borderRadius:16, padding:12, boxShadow:'0 6px 18px rgba(0,0,0,0.08)'}}>
        <nav style={{display:'flex', gap:8, marginBottom:12}}>
          <NavButton active={view==='library'} onClick={()=>setView('library')} label={T('Library','पुस्तकालय')} COLORS={COLORS} />
          <NavButton active={view==='upload'} onClick={()=>setView('upload')} label={T('Upload','अपलोड')} COLORS={COLORS} />
          <NavButton active={view==='profile'} onClick={()=>setView('profile')} label={T('Profile','प्रोफ़ाइल')} COLORS={COLORS} />
        </nav>

        {view==='library' && <LibraryView books={books} T={T} queryText={queryText} setQueryText={setQueryText} filterSection={filterSection} setFilterSection={setFilterSection} COLORS={COLORS} />}
        {view==='upload' && <UploadView user={user} db={db} storage={storage} T={T} COLORS={COLORS} isAdmin={isAdmin} />}
        {view==='profile' && <ProfileView user={user} T={T} COLORS={COLORS} isAdmin={isAdmin}/>}
      </main>

      <footer style={{maxWidth:900, margin:'8px auto', textAlign:'center', color:'#666'}}>© {new Date().getFullYear()} KRTC MUNDALI — {T('For trainees & staff only','केवल प्रशिक्षुओं और स्टाफ के लिए')}</footer>
    </div>
  );
}

/* ---------- small components ---------- */
function LanguageToggle({ lang, setLang, COLORS }){
  return <div style={{display:'flex', gap:6}}>
    <button onClick={()=>setLang('en')} style={{padding:'6px 8px', borderRadius:8, border:`1px solid ${COLORS.navy}`, background: lang==='en'?COLORS.navy:'#fff', color: lang==='en'?'#fff':COLORS.navy}}>EN</button>
    <button onClick={()=>setLang('hi')} style={{padding:'6px 8px', borderRadius:8, border:`1px solid ${COLORS.navy}`, background: lang==='hi'?COLORS.navy:'#fff', color: lang==='hi'?'#fff':COLORS.navy}}>हिन्दी</button>
  </div>;
}
function NavButton({active,onClick,label,COLORS}){ return <button onClick={onClick} style={{flex:1,padding:10,borderRadius:10,border:'none',background: active?COLORS.navy:COLORS.gold,color: active?'#fff':COLORS.navy,fontWeight:700}}>{label}</button>; }

/* ---------- Auth UI ---------- */
function AuthScreen({ setLang, lang, T }){
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div style={{minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:'#f3efe6'}}>
      <div style={{width:'96%', maxWidth:420, background:'#fff', padding:20, borderRadius:14, boxShadow:'0 8px 30px rgba(0,0,0,0.08)'}}>
        <div style={{textAlign:'center', marginBottom:12}}>
          <img src="/logo.png" alt="logo" style={{width:80}}/>
          <h2 style={{margin:6}}>KRTC MUNDALI</h2>
          <p style={{color:'#666'}}>{T('Login for trainees & staff','प्रशिक्षुओं और स्टाफ के लिए लॉगिन')}</p>
        </div>
        {isRegister ? <RegisterForm onSwitch={()=>setIsRegister(false)} T={T} /> : <LoginForm onSwitch={()=>setIsRegister(true)} T={T} />}
        <div style={{marginTop:10, display:'flex', justifyContent:'center'}}><LanguageToggle lang={lang} setLang={setLang} COLORS={{navy:'#0B2545'}}/></div>
      </div>
    </div>
  );
}

function LoginForm({ onSwitch, T }){
  const { register, handleSubmit } = useForm();
  const [err, setErr] = useState('');
  const onSubmit = async (data) => {
    setErr('');
    try { await signInWithEmailAndPassword(getAuth(), data.email, data.password); }
    catch(e){ setErr(e.message); console.error(e); }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{display:'flex', flexDirection:'column', gap:10}}>
      <input {...register('email')} placeholder={T('Email','ईमेल')} style={{padding:10, borderRadius:8, border:'1px solid #ddd'}}/>
      <input {...register('password')} placeholder={T('Password','पासवर्ड')} type='password' style={{padding:10, borderRadius:8, border:'1px solid #ddd'}}/>
      <button style={{padding:10, borderRadius:8, background:'#A62B2B', color:'#fff', border:'none'}}>{T('Sign in','साइन इन')}</button>
      {err && <div style={{color:'red'}}>{err}</div>}
      <div style={{textAlign:'center'}}><button type='button' onClick={onSwitch} style={{background:'none', border:'none', color:'#0B2545', textDecoration:'underline'}}>{T('Register a new account','नया खाता पंजीकरण करें')}</button></div>
    </form>
  );
}

function RegisterForm({ onSwitch, T }){
  const { register, handleSubmit } = useForm();
  const [err, setErr] = useState('');
  const onSubmit = async (data) => {
    try { await createUserWithEmailAndPassword(getAuth(), data.email, data.password); alert(T('Account created — please login','खाता बना लिया गया — कृपया लॉगिन करें')); }
    catch(e){ setErr(e.message); console.error(e); }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{display:'flex', flexDirection:'column', gap:10}}>
      <input {...register('email')} placeholder={T('Email (use school email if any)','ईमेल (यदि स्कूल ईमेल है तो उपयोग करें)')} style={{padding:10, borderRadius:8, border:'1px solid #ddd'}}/>
      <input {...register('password')} placeholder={T('Password','पासवर्ड')} type='password' style={{padding:10, borderRadius:8, border:'1px solid #ddd'}}/>
      <select {...register('role')} style={{padding:10, borderRadius:8}}>
        <option value='trainee'>{T('Trainee','प्रशिक्षु')}</option>
        <option value='staff'>{T('Staff','स्टाफ')}</option>
      </select>
      <button style={{padding:10, borderRadius:8, background:'#0B2545', color:'#fff', border:'none'}}>{T('Create account','खाता बनाएँ')}</button>
      {err && <div style={{color:'red'}}>{err}</div>}
      <div style={{textAlign:'center'}}><button type='button' onClick={onSwitch} style={{background:'none', border:'none', color:'#0B2545', textDecoration:'underline'}}>{T('Back to login','लॉगिन पर वापस जाएँ')}</button></div>
    </form>
  );
}

/* ---------- Library & Book Card ---------- */
function LibraryView({ books, T, queryText, setQueryText, filterSection, setFilterSection, COLORS }){
  const sections = ['All','Drill & Parade','Tactics','Weapon Training','Law','Fitness','Computer & Cyber','General'];
  const filtered = books.filter(b=>{
    if(filterSection!=='All' && b.section !== filterSection) return false;
    const q = (queryText||'').trim().toLowerCase();
    if(!q) return true;
    return (b.title||'').toLowerCase().includes(q) || (b.author||'').toLowerCase().includes(q);
  });
  return (
    <div>
      <div style={{display:'flex', gap:8, marginBottom:12}}>
        <input value={queryText} onChange={(e)=>setQueryText(e.target.value)} placeholder={T('Search by title or author','शीर्षक या लेखक द्वारा खोजें')} style={{flex:1,padding:10,borderRadius:8,border:'1px solid #eee'}}/>
        <select value={filterSection} onChange={(e)=>setFilterSection(e.target.value)} style={{padding:10,borderRadius:8}}>
          {sections.map(s=> <option key={s} value={s}>{T(s,s)}</option>)}
        </select>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:12}}>
        {filtered.map(b=> <BookCard key={b.id} b={b} T={T} COLORS={COLORS} />)}
      </div>

      {filtered.length===0 && <div style={{textAlign:'center', padding:20}}>{T('No books found','कोई पुस्तक नहीं मिली')}</div>}
    </div>
  );
}

function BookCard({ b, T, COLORS }){
  return (
    <div style={{background:"rgba(198,156,78,0.08)", padding:12, borderRadius:12, display:'flex', gap:10, alignItems:'flex-start'}}>
      <div style={{width:56, height:80, background:'#fff', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, color:COLORS.navy}}>PDF</div>
      <div style={{flex:1}}>
        <div style={{fontWeight:700}}>{b.title}</div>
        <div style={{fontSize:12, color:'#666'}}>{b.author}</div>
        <div style={{marginTop:8, display:'flex', gap:8}}>
          <a href={b.url} target='_blank' rel='noreferrer' style={{padding:'6px 10px', borderRadius:8, background:COLORS.navy, color:'#fff', textDecoration:'none'}}>{T('Open','खोलें')}</a>
          <a href={b.url} download style={{padding:'6px 10px', borderRadius:8, background:COLORS.red, color:'#fff', textDecoration:'none'}}>{T('Download','डाउनलोड')}</a>
        </div>
      </div>
    </div>
  );
}

/* ---------- Upload (allowed for any authenticated user) ---------- */
function UploadView({ user, db, storage, T, COLORS, isAdmin }){
  const { register, handleSubmit, reset } = useForm();
  const [uploadProgress, setUploadProgress] = useState(null);

  const onSubmit = async (data) => {
    if(!data.file[0]) return alert(T('Choose a file','कृपया फ़ाइल चुनें'));
    const file = data.file[0];
    const filename = `${Date.now()}_${file.name}`;
    const storageRef = ref(storage, `books/${filename}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed', snapshot=>{
      setUploadProgress(Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100));
    }, err=>{
      alert(err.message); setUploadProgress(null);
    }, async ()=>{
      const url = await getDownloadURL(uploadTask.snapshot.ref);
      await addDoc(collection(db,'books'), {
        title: data.title || file.name,
        author: data.author || '',
        section: data.section || 'General',
        url,
        uploadedBy: user.email,
        createdAt: serverTimestamp()
      });
      setUploadProgress(null);
      reset();
      alert(T('Uploaded successfully','सफलतापूर्वक अपलोड हुआ'));
    });
  };

  return (
    <div>
      <h3 style={{marginBottom:8}}>{T('Upload book / PDF','पुस्तक / PDF अपलोड करें')}</h3>
      <form onSubmit={handleSubmit(onSubmit)} style={{display:'flex', flexDirection:'column', gap:8}}>
        <input {...register('title')} placeholder={T('Title','शीर्षक')} style={{padding:10, borderRadius:8, border:'1px solid #eee'}}/>
        <input {...register('author')} placeholder={T('Author','लेखक')} style={{padding:10, borderRadius:8, border:'1px solid #eee'}}/>
        <select {...register('section')} style={{padding:10, borderRadius:8}}>
          <option value='General'>{T('General','सामान्य')}</option>
          <option value='Drill & Parade'>{T('Drill & Parade','ड्रिल एवं परेड')}</option>
          <option value='Tactics'>{T('Tactics','रणनीति')}</option>
          <option value='Weapon Training'>{T('Weapon Training','शस्त्र प्रशिक्षण')}</option>
          <option value='Fitness'>{T('Fitness','फिजिकल फिटनेस')}</option>
          <option value='Computer & Cyber'>{T('Computer & Cyber','कम्प्यूटर एवं साइबर')}</option>
          <option value='Law'>{T('Law','कानून')}</option>
        </select>
        <input type='file' {...register('file')} accept='application/pdf' />
        <button style={{padding:10, borderRadius:8, background:COLORS.navy, color:'#fff', border:'none'}}>{T('Upload','अपलोड')}</button>
      </form>
      {uploadProgress !== null && <div style={{marginTop:8}}>{T('Uploading','अपलोड हो रहा है')}... {uploadProgress}%</div>}
    </div>
  );
}

/* ---------- Profile ---------- */
function ProfileView({ user, T, COLORS, isAdmin }){
  return (
    <div>
      <h3>{T('Profile','प्रोफ़ाइल')}</h3>
      <div style={{background:'#f7f7f7', padding:12, borderRadius:8}}>
        <div style={{fontSize:14}}>{T('Email','ईमेल')}: {user.email}</div>
        <div style={{fontSize:12, color:'#666'}}>{T('UID','यूआईडी')}: {user.uid}</div>
        <div style={{marginTop:8}}><strong>{isAdmin?T('Admin','एडमिन') : T('User','उपयोगकर्ता')}</strong></div>
      </div>
    </div>
  );
}
