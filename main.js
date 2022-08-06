function toast({
    title = 'success',
    message = '',
    type = 'success',
    duration = 3000
}) {
    const main = document.getElementById('toast');
    if(main) {
        const toast = document.createElement('div');

        // Auto remove toast
        const autoRemoveId = setTimeout(() => {
            main.removeChild(toast);
        }, duration + 1300);

        toast.onclick = function(e) {
            if(e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }

        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-circle-exclamation',
            error: 'fa-solid fa-circle-xmark'
        };
        const icon = icons[type];
        const delay = (duration/1000).toFixed(2);
        
        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
        <div class="toast__icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${message}</p>
        </div>
        <div class="toast__close">
            <i class="fa-solid fa-xmark"></i>
        </div>
        `;
        main.appendChild(toast);
    }
}

function showSuccessToast() {
    toast({
        title: 'Thành công',
        message: 'Thông báo thao tác thực hiện thành công',
        type: 'success',
        duration: 3000
    });
}

function showErrorToast() {
    toast({
        title: 'Có lỗi',
        message: 'Có vấn đề gì đó, vui long liên hệ quản trị web',
        type: 'error',
        duration: 3000
    });
}

function showInfoToast() {
    toast({
        title: 'Thông tin thêm',
        message: 'Bạn có thể nhận thêm thông tin bằng cách tự tìm hiểu',
        type: 'info',
        duration: 3000
    });
}

function showWarningToast() {
    toast({
        title: 'Cảnh báo',
        message: 'Có vần đề gì đó vui lòng liên hệ quản trị viên',
        type: 'warning',
        duration: 3000
    });
}