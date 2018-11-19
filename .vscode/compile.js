//字符串模板
let template = `
<ul>
  <% for(let i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;

//实现思路如下，通过正则表达式将特定文本取出来，之后用一个函数包裹起来，通过eval的方式将其生成
function Compile(text) {
    let li = /<%=(.+?)%>/g;
    let ul = /<%([\s\S]+?)%>/g;
    //开始替换，先从li部分开始之后从ul部分，需要注意，对于<ul>到for这开始这部分和</ul>部分也要获取
    text = text.replace(li, '`); \n add($1); \n add(`')
        .replace(ul, '`); \n $1 \n add(`');
    //处理<ul>和</ul>部分
    text = 'add(`' + text  + '`)';
    //要执行的函数，注意括号不可省略，${text}在字符串模板相当于执行
    let str = `(function(data) {
        let p = '';
        function add(t) {
            return p += t;
        }
        ${text}
        return p;
    })`;
    return str;
    
}
let p = eval(Compile(template));
console.log(p({ supplies: [ "broom", "mop", "cleaner" ] }));