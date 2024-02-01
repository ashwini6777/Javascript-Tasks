const students = [{
    rollNo: 4,       
    name: "Ashwini Yadav",
    age: 21,
    gender: "Female",
    favItCompany: "Tech Mahindra India",   
    githubUrl: "https://api.github.com/users/ashwini6777",   
    mailId: "ashwiniyadav3703@gmail.com",
    birthDate: "29-01-2003",
    avatar :"https://avatars.githubusercontent.com/u/147252354?v=4",
    profile:"https://github.com/ashwini6777"
},

{
    rollNo: 5,       
    name: "Sanjana Hodbe",
    age: 19,
    gender: "Female",
    favItCompany: "Persistent systems Limited",   
    githubUrl: "https://api.github.com/users/SH3422",   
    mailId: "sanjanahodbe@gmail.com",
    birthDate: "06-03-2004",
    avatar :"https://avatars.githubusercontent.com/u/147395950?v=4",
    profile:"https://github.com/ashwini6777"
    
    
},
{
    rollNo: 1,       
    name: "Sharifa Shaikh",
    age: 21,
    gender: "female",
    favItCompany: "Cognizant",   
    githubUrl: "https://api.github.com/users/shara762",   
    mailId: "shaikhsharifa762@gmail.com",
    birthDate: "14-01-2003",
    avatar :"https://avatars.githubusercontent.com/u/145984673?v=4",
    profile:"https://github.com/shara762"
},

{
    rollNo: 2,       
    name: "Farzana Shaikh",
    age: 21,
    gender: "female",
    favItCompany: "Talentica software ",   
    githubUrl: "https://api.github.com/users/Fara776",   
    mailId: "farashaikh564@gmail.com",
    birthDate: "14-01-2003",
    avatar :"https://avatars.githubusercontent.com/u/145984007?v=4",
    profile:"https://github.com/Fara-776"
},
{
    rollNo: 3,       
    name: "Prajwal Jagtap",
    age: 19,
    gender: "Male",
    favItCompany: "Wipro India",   
    githubUrl: "https://api.github.com/users/PJ9172",   
    mailId: "rohitjagtap5000@gmail.com",
    birthDate: "22-06-2004",
    avatar :"https://avatars.githubusercontent.com/u/147252354?v=4",
    profile: "https://github.com/Mosin-M-B"
},
{
    rollNo: 14,       
    name: "Mosin Balsing",
    age: 19,
    gender: "Male",
    favItCompany: "Wipro India",   
    githubUrl: "https://api.github.com/users/Mosin-M-B",   
    mailId: "mosinbalsing@gmail.com",
    birthDate: "13-03-2004",
    avatar :"https://avatars.githubusercontent.com/u/119176708?v=4",
    profile:"https://github.com/Mosin-M-B"
},]

var demo=document.getElementById('demo');
// console.log(demo);

students.forEach(student=>{
    var crd = document.createElement('div');
    crd.style.border="2px solid black";
    crd.style.height="514px";
    crd.style.width="450px";
    crd.style.margin="20px"
    crd.style.borderRadius="10px"
    crd.style.fontWeight="bold"
    crd.style.fontSize="18px"
    crd.style.marginTop="100px";
    crd.style.background="pink";


    var pic=document.createElement('img');
    pic.src=student.avatar;
    pic.style.width="100px";
    pic.style.height="100px";
    pic.style.borderRadius="50%";
    pic.style.marginTop="20px";

    crd.appendChild(pic);
    
    crd.innerHTML+=`<h1>${student.name}</h1>
    <p>Roll No: ${student.rollNo}</p>
    <p>Age : ${student.age}</p>
    <p>Gender : ${student.gender}</p>
    <p>FavoriteCompany : ${student.favItCompany}</p>
    <p>Github URL : ${student.githubUrl}</p>
    <p>Email-id : ${student.mailId}</p>
    <p>Birthdate : ${student.birthDate}</p>
    <a href=${student.profile}>Profile</a> `;

     demo.appendChild(crd);
});


