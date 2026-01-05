# プロンプトサンプル
## CSSをaiに考えさせる

```text

#指示
HTMLとJavaScriptの内容をもとに、CSSコードを考えてください。

#ペルソナ
デザインのプロでもあるエンジニアです。

#出力情報
cssファイル内のコード

#入力情報
###HTML
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>js動作用画面です</h1>

    <div>
        <p id="weight-content"></p>
        <button onclick="ageUp()">成長させる</button>
    </div>
    <script src="app.js"></script>
</body>
</html>

###JavaScript
const dog = {
    name: '太郎',
    age: 5,
    weight: 13,
    size: '70cm',
    weightup: function() {
        console.log(this.weight += 2)
    }
}
console.log(dog.weight)
dog.weightup()

const content = document.querySelector('#weight-content')
content.innerText = dog.name + 'は' + dog.age + '歳'

function ageUp() {
    age = dog.age++
    console.log(age)

    if (age > 14) {
        content.innerText = dog.name + 'は老衰してしまった。生きていれば' + age + '歳'
        return
    }

    content.innerText = dog.name + 'は' + age + '歳'
}
