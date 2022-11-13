function setPlayerName () {
    var playerNameDiv = document.getElementById('playerName');
   
    playerNameDiv.innerHTML = document.getElementById('playerNameInput').value;

    document.getElementById('divSetPlayerName').style.display = 'none';
    
    
}



function setPlayer2Name () {
    var playerNameDiv = document.getElementById('player2Name');
    
    playerNameDiv.innerHTML = document.getElementById('player2NameInput').value;

    document.getElementById('divSetPlayer2Name').style.display = 'none';
    

}




flag = 1;
function myfunc_3() {
    if (flag == 1) {
        document.getElementById("cell0").value = "X";
        document.getElementById("cell0").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("cell0").value = "0";
        document.getElementById("cell0").disabled = true;
        flag = 1;
    }
}
 
function myfunc_4() {
    if (flag == 1) {
        document.getElementById("cell1").value = "X";
        document.getElementById("cell1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("cell1").value = "0";
        document.getElementById("cell1").disabled = true;
        flag = 1;
    }
}
 
function myfunc_5() {
    if (flag == 1) {
        document.getElementById("cell2").value = "X";
        document.getElementById("cell2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("cell2").value = "0";
        document.getElementById("cell2").disabled = true;
        flag = 1;
    }
}
 
function myfunc_6() {
    if (flag == 1) {
        document.getElementById("cell3").value = "X";
        document.getElementById("cell3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("cell3").value = "0";
        document.getElementById("cell3").disabled = true;
        flag = 1;
    }
}
 
function myfunc_7() {
    if (flag == 1) {
        document.getElementById("cell4").value = "X";
        document.getElementById("cell4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("cell4").value = "0";
        document.getElementById("cell4").disabled = true;
        flag = 1;
    }
}
 
function myfunc_8() {
    if (flag == 1) {
        document.getElementById("cell5").value = "X";
        document.getElementById("cell5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("cell5").value = "0";
        document.getElementById("cell5").disabled = true;
        flag = 1;
    }
}
 
function myfunc_9() {
    if (flag == 1) {
        document.getElementById("cell6").value = "X";
        document.getElementById("cell6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("cell6").value = "0";
        document.getElementById("cell6").disabled = true;
        flag = 1;
    }
}
 
function myfunc_10() {
    if (flag == 1) {
        document.getElementById("cell7").value = "X";
        document.getElementById("cell7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("cell7").value = "0";
        document.getElementById("cell7").disabled = true;
        flag = 1;
    }
}
 
function myfunc_11() {
    if (flag == 1) {
        document.getElementById("cell8").value = "X";
        document.getElementById("cell8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("cell8").value = "0";
        document.getElementById("cell8").disabled = true;
        flag = 1;
    }
}

function myfunc() {
 
    var cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8;
    cell0 = document.getElementById("cell0").value;
    cell1 = document.getElementById("cell1").value;
    cell2 = document.getElementById("cell2").value;
    cell3 = document.getElementById("cell3").value;
    cell4 = document.getElementById("cell4").value;
    cell5 = document.getElementById("cell5").value;
    cell6 = document.getElementById("cell6").value;
    cell7 = document.getElementById("cell7").value;
    cell8 = document.getElementById("cell8").value;
 


    if ((cell0 == 'X' || cell0 == 'X') && (cell1 == 'X' ||
        cell1 == 'X') && (cell2 == 'X' || cell2 == 'X')) {

        document.getElementById("cell3").disabled = true;
        document.getElementById("cell4").disabled = true;
        document.getElementById("cell5").disabled = true;
        document.getElementById("cell6").disabled = true;
        document.getElementById("cell7").disabled = true;
        document.getElementById("cell8").disabled = true;
       
        document.getElementById('print').innerHTML = "Player 1 won"; 
       
       window.alert('Player 1 won');
    }
    else if ((cell0 == 'X' || cell0 == 'X') && (cell3 == 'X' ||
        cell3 == 'X') && (cell6 == 'X' || cell6 == 'X')) {
       
        document.getElementById("cell1").disabled = true;
        document.getElementById("cell2").disabled = true;
        document.getElementById("cell4").disabled = true;
        document.getElementById("cell5").disabled = true;
        document.getElementById("cell7").disabled = true;
        document.getElementById("cell8").disabled = true;

        document.getElementById('print').innerHTML = "Player 1 won";

        window.alert('Player 1 won');
    }
    else if ((cell6 == 'X' || cell6 == 'X') && (cell7 == 'X' ||
        cell7 == 'X') && (cell8 == 'X' || cell8 == 'X')) {
        
        document.getElementById("cell0").disabled = true;
        document.getElementById("cell1").disabled = true;
        document.getElementById("cell2").disabled = true;
        document.getElementById("cell3").disabled = true;
        document.getElementById("cell4").disabled = true;
        document.getElementById("cell5").disabled = true;

       document.getElementById('print').innerHTML = "Player 1 won"; 

       window.alert('Player 1 won');
    }
    else if ((cell2 == 'X' || cell2 == 'X') && (cell5 == 'X' ||
        cell5 == 'X') && (cell8 == 'X' || cell8 == 'X')) {
        
        document.getElementById("cell0").disabled = true;
        document.getElementById("cell1").disabled = true;
        document.getElementById("cell3").disabled = true;
        document.getElementById("cell4").disabled = true;
        document.getElementById("cell6").disabled = true;
        document.getElementById("cell7").disabled = true;

        document.getElementById('print').innerHTML = "Player 1 won";
        
        window.alert('Player 1 won');
    }
    else if ((cell0 == 'X' || cell0 == 'X') && (cell4 == 'X' ||
        cell4 == 'X') && (cell8 == 'X' || cell8 == 'X')) {
        
        document.getElementById("cell1").disabled = true;
        document.getElementById("cell2").disabled = true;
        document.getElementById("cell3").disabled = true;
        document.getElementById("cell5").disabled = true;
        document.getElementById("cell6").disabled = true;
        document.getElementById("cell7").disabled = true;
       
        document.getElementById('print').innerHTML = "Player 1 won"; 
       
        window.alert('Player 1 won');
    }
    else if ((cell2 == 'X' || cell2 == 'X') && (cell4 == 'X' ||
        cell4 == 'X') && (cell6 == 'X' || cell6 == 'X')) {
        d
        document.getElementById("cell0").disabled = true;
        document.getElementById("cell1").disabled = true;
        document.getElementById("cell3").disabled = true;
        document.getElementById("cell5").disabled = true;
        document.getElementById("cell7").disabled = true;
        document.getElementById("cell8").disabled = true;
        
        document.getElementById('print').innerHTML = "Player 1 won";

        window.alert('Player 1 won');
    }
    else if ((cell1 == 'X' || cell1 == 'X') && (cell4 == 'X' ||
        cell4 == 'X') && (cell7 == 'X' || cell7 == 'X')) {
        
        document.getElementById("cell0").disabled = true;
        document.getElementById("cell2").disabled = true;
        document.getElementById("cell3").disabled = true;
        document.getElementById("cell5").disabled = true;
        document.getElementById("cell6").disabled = true;
        document.getElementById("cell8").disabled = true;
        
        document.getElementById('print').innerHTML = "Player 1 won";
        
        window.alert('Player 1 won');
    }
    else if ((cell3 == 'X' || cell3 == 'X') && (cell4 == 'X' ||
        cell4 == 'X') && (cell5 == 'X' || cell5 == 'X')) {
        
        document.getElementById("cell0").disabled = true;
        document.getElementById("cell1").disabled = true;
        document.getElementById("cell2").disabled = true;
        document.getElementById("cell6").disabled = true;
        document.getElementById("cell7").disabled = true;
        document.getElementById("cell8").disabled = true;
       
        document.getElementById('print').innerHTML = "Player 1 won";
        
        window.alert('Player 1 won');
    }
 
    else if ((cell0 == '0' || cell0 == '0') && (cell1 == '0' ||
        cell1 == '0') && (cell2 == '0' || cell2 == '0')) {
        
        document.getElementById("cell3").disabled = true;
        document.getElementById("cell4").disabled = true;
        document.getElementById("cell5").disabled = true;
        document.getElementById("cell6").disabled = true;
        document.getElementById("cell7").disabled = true;
        document.getElementById("cell8").disabled = true;
       
        document.getElementById('print').innerHTML = "Player 2 won"; 
       
        window.alert('Player 2 won');
    }
    else if ((cell0 == '0' || cell0 == '0') && (cell3 == '0' ||
        cell3 == '0') && (cell6 == '0' || cell6 == '0')) {
        
        document.getElementById("cell1").disabled = true;
        document.getElementById("cell2").disabled = true;
        document.getElementById("cell4").disabled = true;
        document.getElementById("cell5").disabled = true;
        document.getElementById("cell7").disabled = true;
        document.getElementById("cell8").disabled = true;
        
        document.getElementById('print').innerHTML = "Player 2 won";
        
        window.alert('Player 2 won');
    }
    else if ((cell6 == '0' || cell6 == '0') && (cell7 == '0' ||
        cell7 == '0') && (cell8 == '0' || cell8 == '0')) {
        
        document.getElementById("cell0").disabled = true;
        document.getElementById("cell1").disabled = true;
        document.getElementById("cell2").disabled = true;
        document.getElementById("cell3").disabled = true;
        document.getElementById("cell4").disabled = true;
        document.getElementById("cell5").disabled = true;
       
        document.getElementById('print').innerHTML = "Player 2 won";
       
        window.alert('Player 2 won');
    }
    else if ((cell2 == '0' || cell2 == '0') && (cell5 == '0' ||
        cell5 == '0') && (cell8 == '0' || cell8 == '0')) {
       
        document.getElementById("cell0").disabled = true;
        document.getElementById("cell1").disabled = true;
        document.getElementById("cell3").disabled = true;
        document.getElementById("cell4").disabled = true;
        document.getElementById("cell6").disabled = true;
        document.getElementById("cell7").disabled = true;
        
        document.getElementById('print').innerHTML = "Player 2 won";
        
        window.alert('Player 2 won');
    }
    else if ((cell0 == '0' || cell0 == '0') && (cell4 == '0' ||
        cell4 == '0') && (cell8 == '0' || cell8 == '0')) {
        
        document.getElementById("cell1").disabled = true;
        document.getElementById("cell2").disabled = true;
        document.getElementById("cell3").disabled = true;
        document.getElementById("cell5").disabled = true;
        document.getElementById("cell6").disabled = true;
        document.getElementById("cell7").disabled = true;
       
        document.getElementById('print').innerHTML = "Player 2 won"; 
       
        window.alert('Player 2 won');
    }
    else if ((cell2 == '0' || cell2 == '0') && (cell4 == '0' ||
        cell4 == '0') && (cell6 == '0' || cell6 == '0')) {
        
        document.getElementById("cell0").disabled = true;
        document.getElementById("cell1").disabled = true;
        document.getElementById("cell3").disabled = true;
        document.getElementById("cell5").disabled = true;
        document.getElementById("cell7").disabled = true;
        document.getElementById("cell8").disabled = true;
        
        document.getElementById('print').innerHTML = "Player 2 won";
        
        window.alert('Player 2 won');
    }
    else if ((cell1 == '0' || cell1 == '0') && (cell4 == '0' ||
        cell4 == '0') && (cell7 == '0' || cell7 == '0')) {
        
        document.getElementById("cell0").disabled = true;
        document.getElementById("cell2").disabled = true;
        document.getElementById("cell3").disabled = true;
        document.getElementById("cell5").disabled = true;
        document.getElementById("cell6").disabled = true;
        document.getElementById("cell8").disabled = true;
       
        document.getElementById('print').innerHTML = "Player 2 won"; 
       
        window.alert('Player 2 won');
    }
    else if ((cell3 == '0' || cell3 == '0') && (cell4 == '0' ||
        cell4 == '0') && (cell5 == '0' || cell5 == '0')) {
        
        document.getElementById("cell0").disabled = true;
        document.getElementById("cell1").disabled = true;
        document.getElementById("cell2").disabled = true;
        document.getElementById("cell6").disabled = true;
        document.getElementById("cell7").disabled = true;
        document.getElementById("cell8").disabled = true;
       
        document.getElementById('print').innerHTML = "Player 2 won"; 
       
       window.alert('Player 2 won');
    }
 

    else if ((cell0 == 'X' || cell0 == '0') && (cell1 == 'X'
        || cell1 == '0') && (cell2 == 'X' || cell2 == '0') &&
        (cell3 == 'X' || cell3 == '0') && (cell4 == 'X' ||
        cell4 == '0') && (cell5 == 'X' || cell5 == '0') &&
        (cell6 == 'X' || cell6 == '0') && (cell7 == 'X' ||
        cell7 == '0') && (cell8 == 'X' || cell8 == '0')) {
            
            document.getElementById('print').innerHTML = "Match Tie";
            
            window.alert('Match Tie');
    }
        if (flag == 1) {
            
            document.getElementById('print').innerHTML = "Player 1 Turn";
        }
        else {
            
            document.getElementById('print').innerHTML = "Player 2 Turn";
        }
}


function myfunc_2() {
    location.reload();
    document.getElementById('cell0').value = '';
    document.getElementById("cell1").value = '';
    document.getElementById("cell2").value = '';
    document.getElementById("cell3").value = '';
    document.getElementById("cell4").value = '';
    document.getElementById("cell5").value = '';
    document.getElementById("cell6").value = '';
    document.getElementById("cell7").value = '';
    document.getElementById("cell8").value = '';
 
}
 
