date = new Date()
console.log(date)               // => 2017-09-26T06:57:59.468Z

msec = Date.parse("2000-01-02 12:34:56")
console.log(msec)               // => 946784096000

date = new Date(msec)
console.log(date)               // => 2000-01-02T03:34:56.000Z

date = new Date("2000-01-02 12:34:56")
console.log(date)               // => 2000-01-02T03:34:56.000Z

// 【罠】1900からの差分
console.log(date.getYear())     // => 100

// 年をそのまま返す
console.log(date.getFullYear()) // => 2000

// 【罠】「月」は0からのインデックス
console.log(date.getMonth())    // => 0

// 日をそのまま返す
console.log(date.getDate())     // => 2

// 【罠】0 を「日曜日」とする曜日インデックスを返す
console.log(date.getDay())      // => 0

// 【罠】9 * 60 = +540 だが、なぜか符号がマイナス
console.log(date.getTimezoneOffset())      // => -540

// 【罠】同じ時間でもオブジェクトが異なると不一致
a = new Date("2000-01-02 12:34:56")
b = new Date("2000-01-02 12:34:56")
console.log(a == b)             // => false
console.log(a === b)            // => false
// getTime() を使うと整数になるのでそれで比較するのが正解
console.log(a.getTime())        // => 946784096000
console.log(b.getTime())        // => 946784096000
console.log(a.getTime() == b.getTime()) // => true

// 【罠】これらは実装依存なので本気で使ってはいけない
console.log(date.toString())           // => Sun Jan 02 2000 12:34:56 GMT+0900 (JST)
console.log(date.toDateString())       // => Sun Jan 02 2000
console.log(date.toTimeString())       // => 12:34:56 GMT+0900 (JST)
console.log(date.toLocaleString())     // => 2000-1-2 12:34:56
console.log(date.toLocaleDateString()) // => 2000-1-2
console.log(date.toLocaleTimeString()) // => 12:34:56

// 使ってよいのはこれだけ (でも強制的に UTC になるので注意)
console.log(date.toISOString()) // => 2000-01-02T03:34:56.000Z

// もしくは JSON に変換したときのもの (でも強制的に UTC になるので注意)
console.log(JSON.stringify(date)) //=> "2000-01-02T03:34:56.000Z"

// 【罠】 文字列をパースしたときの数値では結果が異なる
a = new Date("2000-01-01") // UTC
v = new Date(2000, 1, 1)   // 地方時
console.log(a.toISOString()) // => 2000-01-01T00:00:00.000Z
console.log(b.toISOString()) // => 2000-01-02T03:34:56.000Z

// ISO8601 の形式は IE ではパースできない
console.log(Date.parse("2012-01-01 00:00:00")) // => 1325343600000
