export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body

    // 간단한 로그인 검사 로직
    if (username !== '' && password !== '') {
      res.status(200).json({ message: '로그인 성공' })
    } else {
      res.status(401).json({ message: '아이디 또는 비밀번호가 틀렸습니다.' })
    }
  } else {
    res.status(405).json({ message: '허용되지 않은 메서드입니다.' })
  }
}
