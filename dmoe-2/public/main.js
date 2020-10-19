getCSS.onclick = () => {
     const request = new XMLHttpRequest();
     request.open('GET','/style.css');
     request.onreadystatechange = () => {
         if(request.status === 200 && request.readyState === 4){
             const res = request.response;
             const css = document.createElement('style');
             css.innerHTML = res;
             document.body.appendChild(css);
         }
     };
     request.send();
};
