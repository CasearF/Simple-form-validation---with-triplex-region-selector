// 当页面加载完成时执行以下操作
document.addEventListener('DOMContentLoaded', function () {
    console.log('页面加载完成');
    // 获取元素的快捷方式
    function $(c) {
        return document.getElementById(c);
    }

    // 显示输入的错误信息
    function showError(input, element, message) {
        input.classList.add('invalid');
        element.innerHTML = message;
    }

    // 移除错误信息
    function removeError(input, element) {
        input.classList.remove('invalid');
        element.innerHTML = '';
    }

    // 表单验证逻辑
    function scriptdemo(input, errorElement, lengthMessage, pattern) {
        let errortext1 = "值不能为空";
        console.log(pattern);
        input.addEventListener('blur', function () {
            if (input.value.trim() === '') {
                showError(input, errorElement, errortext1);
            } else if (!pattern.test(input.value)) {
                showError(input, errorElement, lengthMessage);
            } else {
                removeError(input, errorElement);
            }
        });
    }

    // 初始化表单验证
    function initializeValidation() {
        let pattern1 = /^[A-Za-z0-9]{3,6}$/;
        let pattern2 = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
        let pattern3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,15}$/;
        let pattern4 = /[0-9-\(\)（）]{7,18}/;

        scriptdemo(
            $('name'),
            $('nameError'),
            '用户名格式错误，应为3-6位字母或数字',
            pattern1
        );
        scriptdemo(
            $('email'),
            $('emailError'),
            '邮箱格式错误，应为正确的邮箱格式',
            pattern2
        );
        scriptdemo(
            $('password'),
            $('passwordError'),
            '密码格式错误，应为8-15位字母、数字、特殊字符组合',
            pattern3
        );
        scriptdemo(
            $('passwordRepet'),
            $('passwordRepetError'),
            '密码格式错误，应与上次输入的密码相同',
            pattern3
        );
        scriptdemo(
            $('PhoneNumber'),
            $('PhoneNumberError'),
            '*手机号码格式错误，应为国内手机号格式',
            pattern4
        );
    }

    // 执行表单验证初始化
    initializeValidation();
});
