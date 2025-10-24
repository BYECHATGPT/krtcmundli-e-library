const admin = require('firebase-admin');
const fs = require('fs');
if(!fs.existsSync('serviceAccountKey.json')){ console.error('serviceAccountKey.json missing'); process.exit(1); }
admin.initializeApp({ credential: admin.credential.cert(require('./serviceAccountKey.json')) });
const email = process.argv[2];
if(!email){ console.error('Usage: node make_admin.js admin@example.com'); process.exit(1); }
(async()=>{ try{ const user = await admin.auth().getUserByEmail(email); await admin.auth().setCustomUserClaims(user.uid, { admin: true }); console.log('Made admin:', email); }catch(e){ console.error(e); } })();
