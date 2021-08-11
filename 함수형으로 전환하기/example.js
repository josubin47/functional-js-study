let users = [
  { id: 1, name: "ID", age: 36 },
  { id: 2, name: "BJ", age: 32 },
  { id: 3, name: "JM", age: 32 },
  { id: 4, name: "PJ", age: 27 },
  { id: 5, name: "HA", age: 25 },
  { id: 6, name: "JE", age: 26 },
  { id: 7, name: "JI", age: 31 },
  { id: 8, name: "MP", age: 23 },
];

// 1. 명령형 코드
// a. 30세 이상인 users를 거른다.
let temp_users = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 30) {
    temp_users.push(users[i]);
  }
}

// b. 30세 이상인 users의 names를 수집한다.
let names = [];
for (let i = 0; i < temp_users.length; i++) {
  names.push(temp_users[i].name);
}

// c. 30세 미만인 users를 거른다.
let temp_users = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].age < 30) {
    temp_users.push(users[i]);
  }
}

// d. 30세 미만인 users의 ages를 수집한다.
let ages = [];
for (let i = 0; i < temp_users.length; i++) {
  ages.push(temp_users[i].age);
}

// 2. _filter, _map으로 리팩토링
// 다형성 높음. 데이터의 형태는 관심사가 아님. 재사용성 극대화.
function _filter(list, predi) {
  let new_list = [];
  for (let i = 0; i < list.length; i++) {
    if (predi(list[i])) {
      new_list.push(list[i]);
    }
  }
  return new_list;
}

function _map(list, mapper) {
  let new_list = [];
  for (let i = 0; i < list.length; i++) {
    new_list.push(mapper(list[i]));
  }
  return new_list;
}

// a. 30세 이상인 users를 거른다.
let over_30 = _filter(users, function (user) {
  return user.age >= 30;
});

// b. 30세 이상인 users의 names를 수집한다.
let names = _map(over_30, function (user) {
  return user.name;
});

// c. 30세 미만인 users를 거른다.
let under_30 = _filter(users, function (user) {
  return user.age < 30;
});

// d. 30세 미만인 users의 ages를 수집한다.
let ages = _map(under_30, function (user) {
  return user.ages;
});

// 함수형 프로그래밍에서는 대입문을 줄이는 경향이 있음.
// 값을 만들어놓고 문장을 내려가며 변형하는 것이 아닌 함수를 통과해나가면서 값을 새롭게 만들어가는 식이기 때문에.
// a. 30세 이상인 users를 거른다.
// b. 30세 이상인 users의 names를 수집한다.
_map(
  _filter(users, function (user) {
    return user.age >= 30;
  }),
  function (user) {
    return user.name;
  }
);

// c. 30세 미만인 users를 거른다.
// d. 30세 미만인 users의 ages를 수집한다.
_map(
  _filter(users, function (user) {
    return user.age < 30;
  }),
  function (user) {
    return user.ages;
  }
);
