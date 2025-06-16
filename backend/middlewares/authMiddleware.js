const admin = require('firebase-admin');
const serviceAccount = require('../firebase/credentials.json');

admin.initializeApp({
credential: admin.credential.cert(serviceAccount),
});

async function authenticateToken(req, res, next) {
  const token = req.headers.authorization?.split('Bearer ')[1];
  if (!token) return res.status(401).send('Token não fornecido');

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Erro de autenticação:', error);
    res.status(403).send('Token inválido');
  }
}

module.exports = authenticateToken;
