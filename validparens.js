// how to handle a stack basics

const isValid = function(s) {
    if (s.length % 2 != 0) {
        return false
    }
    
    let stack = new Array()

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i])
        } else  if (s[i] === ')' && stack.length > 0 && stack[stack.length-1] === '(') {
            stack.pop()
        } else  if (s[i] === '}' && stack.length > 0 && stack[stack.length-1] === '{') {
            stack.pop()
        } else  if (s[i] === ']' && stack.length > 0 && stack[stack.length-1] === '[') {
            stack.pop()
        } else return false
    }

    return stack.length === 0
}
