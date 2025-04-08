function clicksubmitbutton(event)
{
    event.preventDefault();
    const username =document.getElementById("username").value;
    const Email=document.getElementById("Email").value;
    const Password=document.getElementById("Password").value;
    const confirmpassword=document.getElementById("confirmpassword").value;
    const welcomeMessage =document.getElementById('welcome-message');
    welcomeMessage.textContent='Welcome,'+username + '! Registration completed';
    welcomeMessage.style.display='block';

}