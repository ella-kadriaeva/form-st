// 1. Создать форму (инпут + кнопка). В инпут вводится ссылка на изображение. При сабмите формы в консоль выводится введенное в инпут значение
// При сабмите формы  в div.imgs_container добавляется картинка, доступная по введенной ссылке.
// Размеры картинки 150х150px (без деформации - object-fit: contain)
const containerEl = document.querySelector(".container");
const submitForm = document.querySelector(".add_form");
const imgs = document.querySelector(".imgs_container");

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  imgs.style.backgroundImage = `url('${e.target.link.value}')`;
  e.target.reset();
});

// 2. Создать form.addnewstudent с 3 инпутами (имя, фамилия, возраст) + кнопка. При сабмите формы формируется объект и выводится в консоль
// Пример объекта:
// {
//     firstname: input1.value,
//     lastname: input2.value,
//     age: input3.value,
// }

// Создать пустой массив allStudents
// При сабмите формы добавлять в массив allStudents сформированный объект
// Написать функцию renderStudents, которая принимает массив в качестве аргумента и для каждого элемента/объекта из массива создает карточку студента (div с 2 p)
// Стилизовать контейнер - грид 4 колонки
// Стилизовать карточки. Если возраст студента меньше 18, то покарсить карточку в светло-розовый

const studentForm = document.querySelector(".addnewstudent");
const gridContainer = document.querySelector(".grid-container");
const allStudents = [];
studentForm.addEventListener("submit", (e) => {
  const newStudentsArr = [];
  e.preventDefault();
  const newStudent = {
    firstname: e.target.firstname.value,
    lastname: e.target.lastname.value,
    age: e.target.age.value
  };
  console.log(newStudent);
  allStudents.push(newStudent);
  newStudentsArr.push(newStudent);
  renderStudents(newStudentsArr);
  e.target.reset();
});
function renderStudents(arr) {
  arr.forEach((student) => {
    const studentCard = document.createElement("div");
    studentCard.classList.add("student-card");
    studentCard.innerHTML = `
       <h3>${student.firstname} ${student.lastname}</h3>
       <p>${student.age}</p>
     `;
    if (Number(student.age) < 18) {
      studentCard.style.backgroundColor = "lightpink";
    } else {
      studentCard.style.backgroundColor = "lightgreen";
    }
    gridContainer.appendChild(studentCard);
  });
}
