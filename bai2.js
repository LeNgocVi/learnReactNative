// task 1: Cho một chuỗi, Viết hàm đảo ngược từng từ trong câu
const reverseString = (str) => str.split("").reverse().join("");

// task 2: Viết hàm đệ quy đảo ngược chuỗi.
const recursiveReverseString = (str) => {
  if (!str) return true;
  const isStr = str.charAt(0) === str.charAt(str.length - 1);
  return isStr && recursiveReverseString(str.slice(1, str.length - 1));
};

// task 3: Cho một mảng, Viết hàm đảo ngược các item trong array đó.
const reverseArray = (arr) => arr.reverse();

// task 4: viết hàm đệ quy đảo ngược một mảng
const recursiveReverseArray = (arr) => {
  if (arr.length === 1 || arr.length === 0) return arr;
  return [...recursiveReverseArray(arr.slice(1)), arr[0]];
};

// task 5: viết hàm đệ quy tính tổng
const recursiveSum = (numbers) => {
  if (numbers.length === 0) return 0;
  if (numbers.length === 1) return numbers[0];
  return numbers[0] + recursiveSum(numbers.slice(1));
};

// task 6: Viết hàm đệ quy để biết một số là số nguyên tố
const recursivePrime = (num, i = 3) => {
  if (num === 2) return true;
  if (num % 2 === 0 || num < 2) return false;
  if (i * i > num) return true;
  if (num % i === 0) return false;
  return recursivePrime(num, i + 2);
};

// task 7: Viết một class bao gồm 4 methods: add, update, remove, so sánh
class classUser {
  users = [
    { id: 1, name: "user 1" },
    { id: 2, name: "user 2" },
  ];

  add(user) {
    const isNum = this.isExitUser(user.id);
    if (isNum) return this.users;
    this.users = [...this.users, user];
    return this.users;
  }

  remove(userId) {
    this.users = this.users.filter((f) => f.id !== userId);
    return this.users;
  }

  updated(user) {
    const index = this.users.findIndex((t) => t.id === user.id);
    this.users[index] = user;
    return this.users;
  }

  isExitUser(userId) {
    return this.users.some((s) => s.id === userId);
  }
}

const useClassUser = new classUser();

useClassUser.add({ id: 3, name: "user 3" });
useClassUser.remove(1);
useClassUser.updated({ id: 2, name: "USER 2" });
