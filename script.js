// 获取画布和上下文
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// 飞天神猪的初始位置
let pigX = 50;
let pigY = canvas.height / 2;
let pigSpeedY = 0;

// 游戏设置
const gravity = 0.5;
const lift = -15;
const pigSize = 50;

// 控制飞天神猪的上下飞行
document.addEventListener('keydown', function(event) {
    if (event.key === ' ') {
        pigSpeedY = lift;
    }
});

// 游戏循环
function gameLoop() {
    // 清除画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 绘制飞天神猪（简单的圆形代表猪）
    ctx.beginPath();
    ctx.arc(pigX, pigY, pigSize, 0, Math.PI * 2);
    ctx.fillStyle = '#FF4081';
    ctx.fill();
    ctx.closePath();

    // 更新飞天神猪的位置
    pigSpeedY += gravity; // 重力作用
    pigY += pigSpeedY;

    // 防止飞天神猪掉出画布
    if (pigY + pigSize > canvas.height) {
        pigY = canvas.height - pigSize;
        pigSpeedY = 0;
    }

    if (pig
