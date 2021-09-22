const mongoose = require('mongoose');
const profile = require('../models/profile.js');

mongoose.connect('mongodb+srv://ccapdev2021:2021ccapdev@cluster0.k7z9k.mongodb.net/test');




function editAccount(){
	
	document.getElementById('top').innerHTML = "<h1>Edit Account Details</h1>"
	
	
	document.getElementById('detailSection').style.display = 'none';
	document.getElementById('deleteSection').style.display = 'none';
	document.getElementById('btnEditAccount').style.display = 'none';

	document.getElementById('editAccount').style.display = 'flex';
	document.getElementById('btnSaveAccount').style.display = 'block';	
}

function saveAccount(){
	
	var email = document.getElementById('email').innerHTML.value;
	var username = document.getElementById('username').innerHTML.value;
	var pass = document.getElementById('password').innerHTML.value;
	var pass2 = document.getElementById('password2').innerHTML.value;
	
		
	document.getElementById('editAccount').reset();
	
	
	
	document.getElementById('top').innerHTML = "<h1>Account Details</h1>"
	document.getElementById('detailSection').style.display = 'block';
	document.getElementById('deleteSection').style.display = 'block';
	document.getElementById('btnEditAccount').style.display = 'block';
	
	document.getElementById('editAccount').style.display = 'none';
	document.getElementById('btnSaveAccount').style.display = 'none';
		
}

function deleteAccount(){
	
	var passwordInput = document.getElementById('input2').value;
	
	if(passwordInput == 'x'){
		alert('success');
	}
	else{
		
		document.getElementById('msgSubmit').innerHTML = 'Wrong password failed to delete account';
		document.getElementById('msgSubmit').style.display='block';
		setTimeout(function() {
			document.getElementById('msgSubmit').style.display='none'
			}, 3000);
	}
	
}