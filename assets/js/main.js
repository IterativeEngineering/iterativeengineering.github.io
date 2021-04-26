document.addEventListener('DOMContentLoaded', () => {
  const cookieConfirmation = document.querySelector('.confirm-cookies');
  const cookieNotice = document.querySelector('.cookies');
  const cookieName = 'cookiesok';
  
  cookieConfirmation.onclick = (event) => {
    const expires = new Date().getTime()+ 31536000000;
    document.cookie = cookieName + '=1;expires=' + expires + ';' + 'samesite=lax;';
    cookieNotice.style.display = 'none';
  };
  
  let string = '; ' + document.cookie + ';';
  const index = string.indexOf('; ' + escape(cookieName) + '=');

  if(index === -1) {
    cookieNotice.style.display = 'block';
  }
});
