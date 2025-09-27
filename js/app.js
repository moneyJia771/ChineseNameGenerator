document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const nameForm = document.getElementById('nameForm');
    const resultCard = document.querySelector('.result-card');
    const nameResults = document.getElementById('nameResults');
    const regenerateBtn = document.getElementById('regenerateBtn');
    const shareBtn = document.getElementById('shareBtn');
    
    // 当前生成的名字列表
    let currentNames = [];
    
    // 表单提交事件
    nameForm.addEventListener('submit', function(e) {
        e.preventDefault();
        generateNames();
    });
    
    // 重新生成按钮点击事件
    regenerateBtn.addEventListener('click', function() {
        generateNames();
    });
    
    // 分享按钮点击事件
    shareBtn.addEventListener('click', function() {
        shareName();
    });
    
    // 生成名字函数
    function generateNames() {
        // 获取表单数据
        const lastName = document.getElementById('lastName').value.trim();
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const nameLength = document.querySelector('input[name="nameLength"]:checked').value;
        const nameStyle = document.getElementById('nameStyle').value;
        
        // 验证姓氏
        if (!lastName) {
            alert('请输入姓氏');
            return;
        }
        
        // 清空当前名字列表
        currentNames = [];
        
        // 根据选择的性别和风格生成名字
        if (nameLength === '1') {
            // 生成单字名
            currentNames = generateSingleCharNames(lastName, gender, nameStyle);
        } else {
            // 生成双字名
            currentNames = generateTwoCharNames(lastName, gender, nameStyle);
        }
        
        // 显示结果
        displayResults(currentNames);
    }
    
    // 生成单字名函数
    function generateSingleCharNames(lastName, gender, style) {
        const names = [];
        const charPool = nameData[gender][style];
        
        // 随机选择6个不重复的字符
        const selectedChars = getRandomElements(charPool, 6);
        
        // 为每个字符创建一个名字对象
        selectedChars.forEach(charData => {
            names.push({
                fullName: lastName + charData.char,
                firstName: charData.char,
                meaning: charData.meaning,
                source: charData.source
            });
        });
        
        return names;
    }
    
    // 生成双字名函数
    function generateTwoCharNames(lastName, gender, style) {
        const names = [];
        const combinationPool = twoCharCombinations[gender][style];
        
        // 随机选择6个不重复的组合
        const selectedCombinations = getRandomElements(combinationPool, 6);
        
        // 为每个组合创建一个名字对象
        selectedCombinations.forEach(combination => {
            names.push({
                fullName: lastName + combination.first + combination.second,
                firstName: combination.first + combination.second,
                meaning: combination.meaning,
                source: combination.source
            });
        });
        
        return names;
    }
    
    // 从数组中随机选择n个不重复的元素
    function getRandomElements(array, n) {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n);
    }
    
    // 显示结果函数
    function displayResults(names) {
        // 清空结果区域
        nameResults.innerHTML = '';
        
        // 为每个名字创建一个卡片
        names.forEach((name, index) => {
            const nameCard = document.createElement('div');
            nameCard.className = 'col-md-6 col-lg-4';
            nameCard.innerHTML = `
                <div class="card name-card mb-3">
                    <div class="card-body">
                        <button class="favorite-btn" data-index="${index}">
                            <i class="far fa-heart"></i>
                        </button>
                        <h3 class="name text-center">${name.fullName}</h3>
                        <p class="meaning">${name.meaning}</p>
                        <p class="source text-muted">出处: ${name.source}</p>
                    </div>
                </div>
            `;
            nameResults.appendChild(nameCard);
        });
        
        // 显示结果卡片
        resultCard.classList.remove('d-none');
        
        // 滚动到结果区域
        resultCard.scrollIntoView({ behavior: 'smooth' });
        
        // 添加收藏按钮事件
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                this.classList.toggle('active');
                const icon = this.querySelector('i');
                if (this.classList.contains('active')) {
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                } else {
                    icon.classList.remove('fas');
                    icon.classList.add('far');
                }
            });
        });
    }
    
    // 分享名字函数
    function shareName() {
        // 获取所有被收藏的名字
        const favoriteButtons = document.querySelectorAll('.favorite-btn.active');
        if (favoriteButtons.length === 0) {
            alert('请先收藏您喜欢的名字');
            return;
        }
        
        let shareText = '我用【中文取名神器】为宝宝取了这些好名字：\n\n';
        
        favoriteButtons.forEach(btn => {
            const index = btn.getAttribute('data-index');
            const name = currentNames[index];
            shareText += `${name.fullName}（${name.meaning}）\n`;
        });
        
        shareText += '\n来自【中文取名神器】';
        
        // 复制到剪贴板
        navigator.clipboard.writeText(shareText)
            .then(() => {
                alert('已复制到剪贴板，您可以分享给亲友了！');
            })
            .catch(err => {
                console.error('无法复制到剪贴板: ', err);
                // 备用方案：创建一个文本区域并复制
                const textarea = document.createElement('textarea');
                textarea.value = shareText;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                alert('已复制到剪贴板，您可以分享给亲友了！');
            });
    }
});