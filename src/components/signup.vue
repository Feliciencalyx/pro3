<template>
    
        <!-- <canvas id="canvas"></canvas> -->
        <div class="form0">
        <img class="img1" src="src/images/lg.png" alt="" srcset="">
        <h3>User</h3><br>
    <button class="btn1" onclick="me()">SignUp</button><button class="btn2">LogIn</button>
</div>
    <div class="form">
    <input type="text" placeholder="Email"><br>
    <input type="password" placeholder="Create Password"><br>
    <input type="password" placeholder="Confirm Password"><br>
    <button class="btn3">Submit</button><br>
</div><br>
<!-- log in -->
    <div class="form2">
    <input type="text" placeholder="Email"><br>
    <input type="password" placeholder="Password"><br>
    <button class="btn3">Login</button>
</div>
</template>
<script>

function me(){
const form=document.querySelector('.form')
form.style.display="none"

}


</script>
<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}
.form
{
    background-color: whitesmoke;
    width: fit-content;
    height: fit-content;
    margin-top: 100px;
    display: block;
    align-items: center;
    justify-content: center;
    margin-left: 200px;
}
.form2
{
    background-color: whitesmoke;
    width: fit-content;
    height: fit-content;
    margin-top: 100px;
    display: block;
    align-items: center;
    justify-content: center;
    margin-left: 200px;
    visibility: hidden;
}
.form0
{
    background-color: whitesmoke;
    width: fit-content;
    height: fit-content;
    margin-top: 100px;
    display: block;
    align-items: center;
    justify-content: center;
    margin-left: 200px;
    visibility: hidden;
}
input
{
    display: block;
    width: 500px;
    height: 50px;
    border-radius: 8px;
    border: none;
}
.btn1
{
    /* width:fit-content ; */
    display: inline-block;
    border: none;
    /* margin-left: 100px; */
    height: 50px;
    width: 300px;

}
.btn2
{
    display: inline-block;
    border: none;
    height: 50px;
    /* margin-left: 200px; */
    width: 200px;
    background-color: aqua;
}
.btn4
{
    display: inline-block;
    border: none;
    height: 50px;
    /* margin-left: 200px; */
    width: 500px;
    background-color: aqua;
}
.img1{
    width: 200px;
    height: 200px;
    border-radius: 300px;
    background-color: black;
    margin-left: 150px;
}
h3{
    margin-left: 220px;
}
.btn3
{
    height: 50px;
    width: 500px;
    border: none;
    background-color: antiquewhite;
}
</style>
