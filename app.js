const {readFile,writeFile} = require('fs');
const util = require('util');

const readFilePromise = util.Promisify(readFile)
const writeFilePromise = util.Promisify(writeFile)



const start = async() => {
    try {
        const first = await readFilePromise('./content/first.txt' , 'utf8')
        const second = await readFilePromise('./content/second.txt' , 'utf8')
        console.log(first)
        console.log(second)
    } catch (error) {
        console.log('erreure')
    }
}

start()

// getText('./content/first.txt')
// .then((result)=> console.log(result))
// .catch((err) => console.log(err))

// const getText = (path) => {
//     return new Promise((resolve,reject)=>{
//     readFile(path,'utf8',(err, data)=>{
//      if(err){
//         reject(err)
//      } else {
//         resolve(data)
//      }
//    })
//  })
// }