<?php
  // 폼이 제출되었는지 확인
  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // 폼에서 사용자 이름과 비밀번호를 가져온다.
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username != '' && $password != '') {
      // 인덱스 페이지로 리디렉션
      header('Location: index.html');
      exit;
    } else {
      // 오류 메시지를 표시.
      echo '잘못된 접근';
    }
  }
?>