$(document).ready(function() {

var logo = "./slike/flogo.png";
var logo1 = "./slike/flogo1.png";
var mybutton = document.getElementById("scroll-btn");
var izbrisi = $('.dltphp');
var deleteDatabaseEntry = document.getElementsByClassName('xalert-scs-2');
var mainBtn = $('.main-btn');

$("#logo").on('mouseenter',function(){
	$('#logo').attr('src', logo1);
});

$("#logo").on('mouseleave',function(){
	$('#logo').attr('src', logo);
});

$(".xalert").on('click',function(){
	$('.alert').remove();
});

$(".green-link").on('click',function(){
	$('.alert').remove();
});

$('.dltphp').on('click', function(){
  for (var i=0;i<deleteDatabaseEntry.length;i+=1){
  deleteDatabaseEntry[i].style.display = 'block';
}
});

$('.xalert-scs-2').on('click', function(){
  for (var i=0;i<deleteDatabaseEntry.length;i+=1){
  deleteDatabaseEntry[i].style.display = 'none';
}
});

$('#korisnici').on('click', function(){
  $('#korisnici').addClass('a-panel');
  $('#programi').removeClass('a-panel');
  $('#vezbe').removeClass('a-panel');
});

$('#programi').on('click', function(){
  $('#programi').addClass('a-panel');
  $('#korisnici').removeClass('a-panel');
  $('#vezbe').removeClass('a-panel');
});

$('#vezbe').on('click', function(){
  $('#vezbe').addClass('a-panel');
  $('#korisnici').removeClass('a-panel');
  $('#programi').removeClass('a-panel');
});

$('.main-btn').on('mouseenter', function(){
  $('p').innerHtml = "ADASASD";
  console.log('a');
});

$('#search-input').on('keyup', function(){
  var searchInput, filter, table, tr, td, td1, td2, i, txtValue, txtValue1, txtValue2;
  searchInput = document.getElementById("search-input");
  filter = searchInput.value.toUpperCase();
  table = document.getElementById("scrTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    td1 = tr[i].getElementsByTagName("td")[1];
    td2 = tr[i].getElementsByTagName("td")[2];
    if (td || td1 || td2) {
      txtValue = td.textContent || td.innerText;
      txtValue1 = td1.textContent || td1.innerText;
      txtValue2 = td2.textContent || td2.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue1.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
});

$('#search-input-korisnik').on('keyup', function(){
  var searchInput, filter, table, tr, td, td1, i, txtValue, txtValue1;
  searchInput = document.getElementById("search-input-korisnik");
  filter = searchInput.value.toUpperCase();
  table = document.getElementById("korisnik");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    td1 = tr[i].getElementsByTagName("td")[2];
    if (td || td1) {
      txtValue = td.textContent || td.innerText;
      txtValue1 = td1.textContent || td1.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue1.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
});

$('#search-input-vezba').on('keyup', function(){
  var searchInput, filter, table, tr, td, i, txtValue;
  searchInput = document.getElementById("search-input-vezba");
  filter = searchInput.value.toUpperCase();
  table = document.getElementById("vezba");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
});

$('#vezba tbody tr').on('click', function(){
    var $row = $(this).closest("tr");    // Find the row
    var $trvz = $row.find(".trvz").text();
    var $trid = $row.find(".trid").text(); // Find the text

document.getElementById("trvz").value = $trvz;
document.getElementById("trid").value = $trid;
});

$('#program tbody tr').on('click', function(){
    var $row = $(this).closest("tr");    // Find the row
    var $trvz = $row.find(".trvz").text();
    var $trid = $row.find(".trid").text(); // Find the text

document.getElementById("prid").value = $trvz;
document.getElementById("prvz").value = $trid;
});

window.onscroll = function(){
	scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}



$('#scroll-btn').on('click', function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

  var star1 = document.getElementById('star-1');
  var star2 = document.getElementById('star-2');
  var star3 = document.getElementById('star-3');
  var star4 = document.getElementById('star-4');
  var star5 = document.getElementById('star-5');

$('#star-1').on('mouseenter', function(){
  star1.style.color = "black";
  star2.style.color = "white";
  star3.style.color = "white";
  star4.style.color = "white";
  star5.style.color = "white";
});

$('#star-2').on('mouseenter', function(){
  star1.style.color = "black";
  star2.style.color = "black";
  star3.style.color = "white";
  star4.style.color = "white";
  star5.style.color = "white";
});

$('#star-3').on('mouseenter', function(){
  star1.style.color = "black";
  star2.style.color = "black";
  star3.style.color = "black";
  star4.style.color = "white";
  star5.style.color = "white";
});

$('#star-4').on('mouseenter', function(){
  star1.style.color = "black";
  star2.style.color = "black";
  star3.style.color = "black";
  star4.style.color = "black";
  star5.style.color = "white";
});

$('#star-5').on('mouseenter', function(){
  star1.style.color = "black";
  star2.style.color = "black";
  star3.style.color = "black";
  star4.style.color = "black";
  star5.style.color = "black";
});

});