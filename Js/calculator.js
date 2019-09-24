	function calculate() {
		var myBox1 = document.getElementById('box1').value;	
		var myBox2 = document.getElementById('box2').value;	
		var myBox3 = document.getElementById('box3').value;
		//for ssecond line
		var myCat1 = document.getElementById('cat1').value;	
		var myCat2 = document.getElementById('cat2').value;	
		var myCat3 = document.getElementById('cat3').value;
		//thrid line
		var myDog1 = document.getElementById('dog1').value;	
		var myDog2 = document.getElementById('dog2').value;	
		var myDog3 = document.getElementById('dog3').value;
		var result = document.getElementById('result');
		var result2 = document.getElementById('result2');
		var result3 = document.getElementById('result3');
		var result4 = document.getElementById('result4');

		var resultKW = document.getElementById('resultKW');	

		var myResult = myBox1 * myBox2 * myBox3; //firts line
		var myResult4 = myDog1 * myDog2 * myDog3;//thrid line
		var myResult3 = myCat1 * myCat2 * myCat3;//second line
		var myResult2 = myResult + myResult3 + myResult4; //sum total of watts
		var kw = myResult2 / 1000;  //converts watts to kilowatts
		result.value = myResult; //prints watts
		resultKW.value = kw;	//prints Kilowatts @yinkaaaaaa
		result2.value = myResult2;
		result3.value = myResult3;
		result4.value = myResult4;
	}