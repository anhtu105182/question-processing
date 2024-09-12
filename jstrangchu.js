function checkLoginStatus() {
    // Kiểm tra trạng thái đăng nhập (ví dụ: kiểm tra biến đăng nhập đã được thiết lập hay chưa)
    var isLoggedIn = false; // Thay bằng kiểm tra trạng thái đăng nhập của bạn
 
    // Nếu người dùng chưa đăng nhập, chuyển hướng đến trang đăng nhập
    if (!isLoggedIn) {
       window.location.href = 'login.html';
    }
 }