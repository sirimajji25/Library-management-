let books=[], students=[], issued=[];

// UI helpers
function showLogin(){
document.getElementById("reg").classList.add("hidden");
document.getElementById("log").classList.remove("hidden");
}

function openSec(id){
document.querySelectorAll(".container").forEach(c=>c.classList.add("hidden"));
document.getElementById(id).classList.remove("hidden");
}

// AUTH
function register(){
if(rc.value!=="MMMM8654") return alert("Invalid Library Code");

authFB.createUserWithEmailAndPassword(
ru.value+"@vignan.com", rp.value
).then(()=>{
alert("Registered Successfully");
showLogin();
});
}

function login(){
authFB.signInWithEmailAndPassword(
lu.value+"@vignan.com", lp.value
).then(()=>{
auth.classList.add("hidden");
dash.classList.remove("hidden");
adminName.innerText = lu.value;
loadAll();
});
}

// BOOK
function addBook(){
db.collection("books").doc(bid.value).set({
name:bn.value,
author:ba.value,
total:+bt.value,
issued:0
});
bn.value=bid.value=ba.value=bt.value="";
}

// STUDENT
function addStudent(){
db.collection("students").doc(sid.value).set({
name:sn.value,
mobile:sm.value,
branch:sb.value,
year:sy.value
});
sn.value=sid.value=sm.value=sb.value=sy.value="";
}

// ISSUE
function issueBook(){
db.collection("issued").add({
book:ib.value,
student:is.value,
date:idate.value
});
ib.value=is.value=idate.value="";
}

// LOAD
function loadAll(){
db.collection("books").onSnapshot(s=>{
books=[]; s.forEach(d=>books.push(d.data()));
});
db.collection("students").onSnapshot(s=>{
students=[]; s.forEach(d=>students.push(d.data()));
});
db.collection("issued").onSnapshot(s=>{
issued=[]; s.forEach(d=>issued.push(d.data()));
});
}
