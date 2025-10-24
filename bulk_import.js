const fs = require('fs');
const admin = require('firebase-admin');
const parse = require('csv-parse/lib/sync');
if(!fs.existsSync('serviceAccountKey.json')){ console.error('serviceAccountKey.json missing'); process.exit(1); }
admin.initializeApp({ credential: admin.credential.cert(require('./serviceAccountKey.json')) });
const db = admin.firestore();
const csvFile = process.argv[2];
if(!csvFile){ console.error('Usage: node bulk_import.js metadata.csv'); process.exit(1); }
const csv = fs.readFileSync(csvFile,'utf8');
const records = parse(csv, { columns:true, skip_empty_lines:true });
(async()=>{ for(const r of records){ const doc = { title: r.title||'', author: r.author||'', section: r.section||'General', url: r.public_url||'', uploadedBy: r.uploadedBy||'bulk_import', createdAt: admin.firestore.FieldValue.serverTimestamp() }; const res = await db.collection('books').add(doc); console.log('Imported', r.title, '->', res.id); } console.log('Done.'); })();
