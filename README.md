## Express -> react API 연동

1. FE에서 build한 index.html 한번 띄워봄

```
  // FE 폴더는 바로옆에 있음
  app.use(express.static(path.join(__dirname, '../../homepage_fe/build')));

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
  });

  // 잘 띄워줌 신기함
```

2. /api