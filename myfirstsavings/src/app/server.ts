import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 4000;

// ルート設定
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World with TypeScript!');
});

// サーバーを起動
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
