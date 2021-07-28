let gradeFormDOM = document.querySelector("#gradeForm");
gradeFormDOM.addEventListener("submit", formHandler);



function formHandler(event) {

  event.preventDefault();

  const FULL_NAME = document.querySelector("#fullName");
  const FIRST_EXAM = document.querySelector("#firstExam");
  const SECOND_EXAM = document.querySelector("#secondExam");

  calculateGrade(FULL_NAME.value, FIRST_EXAM.value, SECOND_EXAM.value);
}


const calculateGrade = (fullname, firstExam, secondExam) => {

  let ulDOM = document.querySelector("#resultList");
  let liDOM = document.createElement('li');
  let spanDOM = document.createElement('span')

  liDOM.innerHTML = `${fullname}`;
  liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

  spanDOM.innerHTML = `${calculateAverage(firstExam, secondExam)}`
  spanDOM.classList.add('badge', 'bg-primary', 'rounded-pill')

  ulDOM.appendChild(liDOM);
  liDOM.appendChild(spanDOM);
}


const calculateAverage = (firstExam, secondExam) => {

  let firstGrade = (Number(firstExam) * 40) / 100;
  let secondGrade = (Number(secondExam) * 60) / 100;
  let average = firstGrade + secondGrade

  return average
}
