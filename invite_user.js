const admin = require('firebase-admin');
const fs = require('fs');
if(!fs.existsSync('serviceAccountKey.json')){ console.error('serviceAccountKey.json missing'); process.exit(1); }
admin.initializeApp({ credential: admin.credential.cert(require('./serviceAccountKey.json')) });
const email = process.argv[2];
if(!email){ console.error('Usage: node invite_user.js user@example.com'); process.exit(1); }
(async()=>{ try{ const u = await admin.auth().createUser({ email, password: Math.random().toString(36).slice(-10) }); await admin.auth().setCustomUserClaims(u.uid, { staff: true }); const link = await admin.auth().generatePasswordResetLink(email); console.log('Invite link:', link); }catch(e){ console.error(e); } })();
