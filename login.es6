let login= (username, password) => {
	if(username != "admin" || password != "admin"){
		console.log("Incorrect Login");
	}
	else{
		console.log("Success");	
	}
};

login("admin", "123");