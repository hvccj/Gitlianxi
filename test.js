const fs = require('fs');

// 读取你的 index.html
const html = fs.readFileSync('index.html', 'utf8');

// 检查你的网页里是不是包含 "部署成功" 这几个字
if (html.includes('部署成功')) {
  console.log('✅ 测试通过：找到了核心关键字！');
  process.exit(0); // 0 代表成功
} else {
  console.error('❌ 测试失败：网页里丢了核心关键字，不准上线！');
  process.exit(1); // 1 代表失败，流水线会在这里报错并停止
}
