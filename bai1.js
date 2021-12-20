// Có mảng bên dưới, các bạn làm theo từng task.
const arrays = [
  {
    id: 1,
    name: "user 1",
    age: 22,
  },
  {
    id: 2,
    name: "user 2",
    age: 21,
  },
  {
    id: 3,
    name: "user 3",
    age: 23,
  },
  {
    id: 4,
    name: "user 4",
    age: 24,
  },
];
// task 1: Add mới 1 user vào đầu mảng
arrays.unshift({
    id: 5,
    name: "user 5",
    age: 25,
})

// task 2: Add mới 1 user vào cuối mảng
arrays.push({
    id: 5,
    name: "user 5",
    age: 25,
})
// task 3: add nhiều user vào mảng
arrays.push(
  {
    id: 5,
    name: "user 5",
    age: 25,
  },
  {
    id: 6,
    name: "user 6",
    age: 26,
  },
)
// or
arr1 = [{
    id: 5,
    name: "user 5",
    age: 25,
  },
  {
    id: 6,
    name: "user 6",
    age: 26,
  },
]
arr = [...arrays,...arr1]
console.log(arr);

// task 4: xoá 1 user ra khỏi mảng
arrays.splice(1, 1);

// task 5: lọc ra các user có age >= 22;
const users = arrays.filter(items =>items.age >= 22)
console.log(users);

// task 6: Biến đổi mảng hiện tại thành một mảng mới với field mới là "class" kiểu string
arrays.map((user,index)=>{user.class="lop"+index})

// task 7: Tìm ra 1 user có age = 23
const resultAge = arrays.find( ({ age }) => age === 25 );
console.log(resultAge);
// task 8: xử dụng vòng lặp for để lấy ra các user có age >= 23
var newUser = [];
for (let i = 0; i < arrays.length; i++) {
    if (arrays[i].age >= 23) {
        newUser.push(arrays[i]);
    }
}
console.log(newUser)


// task 9: Dựa vào mảng thông tin bên trên, và mảng ids bên dưới, lọc ra thông tin các user có id như mảng bên dưới.
const arrayIds = [1, 3];
const usersByIds= arr.filter(user => arrayIds.includes(user.id));
console.log(usersByIds);

// task 10: sắp xếp các user trong mảng trên theo thứ tự tuổi tăng dần
const sortUser= arrays.sort((a,b)=>
{ return a.age-b.age})
console.log(sortUser);  

// task 11: cập nhật thông tin trong mảng trên với field "class" được biến đổi ở task 6 thành kiểu chữ in hoa (upCase)
 arrays.forEach(user=>{user.class.toUpperCase()})

// task 12: lấy ra phần tử cuối cùng của mảng trên
const lastItem = arrays[arrays.length-1];
console.log(lastItem);  

// task 13: lấy ra phần tử đầu tiên của mảng trên
const firstItem = arrays[0];
console.log(firstItem);  

// task 14: cho 2 mảng bên dưới, hợp nhất 2 mảng lại thành một và xoá các phần tử trùng lặp, result mong đợi => ["Gà", "vịt", "Chó"]
const array1 = ["Gà", "vịt"];
const array2 = ["vịt", "Chó"];
Array.from(new Set([...array1, ...array2]));
//or
const abc = [...new Set([...array1, ...array2])];
console.log(abc);  

// -----------------------------------
const person = {
  firstName: "John",
  lastName: "Doe",
};

// task 15: từ object person trên lấy ra key của nó. result => ['firstName', 'lastName']
const keys = Object.keys(person)
console.log(keys);

// task 16: từ object person trên lấy ra value của nó. result => ['John', 'Doe']
const value = Object.values(person)
console.log(value);

// task 17: chuyển đổi object trên thành array. result mong đợi => [{firsName: 'John'}, {lastName: 'Doe'}]
const tObject = Object.assign({}, person);
console.log(tObject);
// task 18: từ object person trên add thêm 1 field "age" vao object. kết qua mong đợi => { firstName: "John", lastName: "Doe", age: 100 };
const person1 = { age: 100 };
const obj = Object.assign({}, person, person1);
console.log(obj);

// task 19: cho array string bên dưới, convert array này sang object. Result mong đợi => {0:"a", 1:"b", 2:"c"}
const arrString = ["a", "b", "c"];
const obj1 = Object.assign({},arrString);
console.log(obj1);

// task 20: cho array boolean bên dưới, kiểm tra output của array này là true hoặc false
const arrBoolean = [true, true, false];
let checker = arr => arr.every(v => v === 'true');
console.log(checker(arrBoolean));   //=> false

// task 21: viết 1 object sử dụng setter & getter để thêm mới value và lấy ra value. key word (Getter, setter)
  var objs = {
    age: 23,
    get getter() {
      return this.age;
    },
    set setter(age) {
      this.age = age;
    }
  }
obj.age = 34;

// task 22:
const newFunction = (user) => {
   return ` ${user.name}-age:${user.age}`
  // xử lý function này khi truyền params user vào là thông tin của user
  // kết quả return mong đợi là một string => "Hello User - age: 21"
};

// task 23:
let numb1 = 1.4; // => làm tròn lên số bên.  result mong đợi = 2
let numb2 = 1.4; // => làm tròn lên số bên.  result mong đợi = 1
console.log(Math.ceil(numb2));     // => 2
console.log(Math.round(numb1));    // => 1


// task 24: Thực hiện nối chuỗi dữa vào các biến bên dưới. kết quả mong đợi. => 'name: user - age: 21 - class: classAbc'
let username = "user";
let age = 21;
let className = "classAbc";
let output = `name: ${username} - age: ${age} - class: ${className}`;
console.log(output); // =>=> 'name: user - age: 21 - class: classAbc'

// task 25: cho array number bên dưới, tính tổng array: result = 45;
const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function sumArray(arrNumber){
    let sum = 0;
    let i = 0;
    while (i < arrNumber.length){
        sum += arrNumber[i];
        i++;
    }
    return sum;
}
 
console.log(sumArray(arrNumber)); // => 45