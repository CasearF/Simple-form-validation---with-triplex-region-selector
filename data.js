// 导入region.js文件中的province对象
import { provice } from './region.js';

// 获取元素的函数
function $(c) {
    return document.getElementById(c);
}

// 初始化变量
var selectedProvinceIndex = null;
var sel = null;
var cit = null;
var dis = null;

// 更新区域选项函数，根据城市索引更新区县选项
function updateCityOptions(cityIndex) {
    cit = $("city");  // 获取城市下拉框
    var selectedProvinceIndex = Number(cit.selectedIndex);  // 获取选中的城市索引
    dis = $("district");  // 获取区县下拉框
    console.log("选中的城市索引是: " + selectedProvinceIndex);  // 打印选中的城市索引
    if (selectedProvinceIndex >= 0) {
        dis.innerHTML = '';
        // 遍历城市对应的区县列表，创建option元素添加到区县下拉框中
        for (let i = 0; i < provice[cityIndex].city[selectedProvinceIndex].districtAndCounty.length; i++) {
            var opt = document.createElement("option");
            opt.innerHTML = provice[cityIndex].city[selectedProvinceIndex].districtAndCounty[i];
            dis.appendChild(opt);
        }
    } else {
        console.log("请选择一个城市。");  // 如果未选择城市，则打印提示信息
    }
}

// 更新城市下拉框函数，根据省份索引更新城市选项
function updateCities() {
    cit = $("city");  // 获取城市下拉框
    selectedProvinceIndex = sel.selectedIndex - 1;  // 获取选中的省份索引
    if (selectedProvinceIndex >= 0) {
        var selectedProvince = provice[selectedProvinceIndex];  // 获取选中的省份对象
        cit.innerHTML = '';
        // 遍历选中省份的城市列表，创建option元素添加到城市下拉框中
        for (let i = 0; i < selectedProvince.city.length; i++) {
            var opt = document.createElement("option");
            opt.innerHTML = selectedProvince.city[i].name;
            cit.appendChild(opt);
        }
    } else {
        console.log("请选择一个省份。");  // 如果未选择省份，则打印提示信息
    }
    // 添加城市下拉框change事件监听，触发更新区域选项函数
    $("city").addEventListener('change', function () { updateCityOptions(selectedProvinceIndex); });
}

// 页面加载完成后的初始化函数
document.addEventListener('DOMContentLoaded', function () {
    sel = $("province");  // 获取省份下拉框
    cit = $("city");  // 获取城市下拉框
    dis = $("district");  // 获取区县下拉框
    // 遍历省份列表，创建option元素添加到省份下拉框中
    for (let i = 0; i < provice.length; i++) {
        var opt = document.createElement("option");
        opt.innerHTML = provice[i].name;
        sel.appendChild(opt);
    }
    // 添加省份下拉框change事件监听，触发更新城市选项函数
    $("province").addEventListener('change', updateCities);
});