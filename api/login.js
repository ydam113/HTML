export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body

    if (username && password) {
      // 인증 로직은 여기에 작성
      res.status(200).json({ message: '로그인 성공' })
    } else {
      res.status(400).json({ message: '잘못된 입력' })
    }
  } else {
    res.status(405).json({ message: '허용되지 않은 메서드' })
  }
}
