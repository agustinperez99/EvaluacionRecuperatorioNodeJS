import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const secret = process.env.JWT_SECRET || "_dutnf$5alksdBSi$asd";

const payload = {
  username: 'testUser',
  role: 'admin'
};


const token = jwt.sign(payload, secret, { expiresIn: '1h' });

console.log('Token JWT generado:', token);




/* Token generado en consola:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RVc2VyIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzI5ODA4MDQxLCJleHAiOjE3Mjk4MTE2NDF9.Vil6UXyA6DLK43vpU9MHtBInsv6jduql1nEiewtwuho
*/