'use strict';
document.querySelector('.but').addEventListener('click',function(){
    let weight = document.getElementById('wh').value;
     let heightcm = document.getElementById('hg').value
 console.log(weight);
 
     const height = heightcm / 100;
     console.log(height);
     
     const result = weight / (height * height);
     const finalResult = Math.round(result * 100) / 100;
     document.querySelector('.result').textContent = finalResult;
    // console.log(finalResult);

    if(finalResult<=18.5){
        document.querySelector('.msg').textContent = 'underweight'; 
        // document.querySelector('.msg').style.backgroundColor = "red";
        bject.assign(document.querySelector('.msg').style,{
            backgroundColor: 'green',
            color: 'red'
            // document.querySelector('.msg').style.backgroundColor = "green"
        })
        document.querySelector('.advice').textContent = 'Based on your BMI, you may need to gain weight for a healthier balance';
    }

    else if(finalResult<=24.9){
        document.querySelector('.msg').textContent = 'Normal';
        // document.querySelector('.msg').style.backgroundColor = "green";
        Object.assign(document.querySelector('.msg').style,{
            backgroundColor: 'green',
            color: 'white'
            // document.querySelector('.msg').style.backgroundColor = "green"
        })

        document.querySelector('.advice').textContent = 'Based on your BMI, your weight within a healthy range';
    }

    else if(finalResult<=29.9){
        document.querySelector('.msg').textContent = 'over-weight';
        bject.assign(document.querySelector('.msg').style,{
            backgroundColor: 'green',
            color: 'orange'
            // document.querySelector('.msg').style.backgroundColor = "green"
        })
        document.querySelector('.advice').textContent = 'Based on your BMI, you may need to lose weight for a healthier balance. ';
    }
    
    else if(finalResult<=34.9){
        document.querySelector('.msg').textContent = 'extreme overweight';
        // document.querySelector('.msg').style.backgroundColor = "blue";
        bject.assign(document.querySelector('.msg').style,{
            backgroundColor: 'green',
            color: 'red'
            // document.querySelector('.msg').style.backgroundColor = "green"
        })
        document.querySelector('.advice').textContent = 'Based on your BMI, you are extremely overweight and may need to take significant steps to achieve a healthier balance ';
    }

    else if(finalResult != Number || finalResult==NaN){
        document.querySelector('.msg').textContent = 'This is not the valid number';
        document.querySelector('.result').textContent = 'Error';
        document.querySelector('.result').style.color = 'red';
        document.querySelector('.msg').style.color = 'red';
    }


 });
