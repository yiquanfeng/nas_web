document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 这里可以添加实际的登录验证逻辑
    if (username === 'yiquanfeng' && password === '123456') {
        window.location.href = 'success.html';
        //alert('Login successful!');
        // 重定向到另一个页面或显示成功消息
    } else {
        alert('Invalid username or password');
    }
});