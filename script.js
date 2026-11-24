var head1=document.getElementById('head1');
head1.style.color='red';
head1.style.textAlign='center';
head1.innerText='Heading Changed!!!'
let group=document.getElementById('group1');
group1.innerHTML=`<P>This is a Javascript page</p>`
let image=document.getElementById('image1');
image.innerHTML=`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhcJvZzGkZVkEkTFua0GChhrLxPDGKPy2doXbVo15-ew&s=10">`;
var list=document.getElementsByClassName('lichild');
console.log('list');
list[1].textContent='banana';
list[2].style.color='purple';
list[1].style.color='green';
list[0].style.color='red';
var par=document.getElementsByTagName('p');
par[1].style.fontFamily='Calibri';
var query1=document.querySelector('#group1');
var query1=document.querySelectorAll('.lichild');
query1.style.backgroundColor='lightblue';
