import { get } from '@vercel/edge-config';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { username, password } = req.body;

  try {
    const validUsers = await get('valid-users');

    const user = validUsers.find(
      (u: any) => u.username === username && u.password === password
    );

    if (user) {
      return res.status(200).json({ 
        success: true, 
        redirectUrl: user.role === 'admin' ? '/admin-dashboard' : '/user-dashboard'
      });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Authentication error' });
  }
}
