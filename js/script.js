const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    // show the light icon
    themeToggleLightIcon.classList.remove('hidden');
  } else {
    // show the dark icon
    themeToggleDarkIcon.classList.remove('hidden');
  }

  themeToggleBtn.addEventListener('click', toggleMode);

  function toggleMode(){
    // toggle icon
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    //setting theme in local storage
    //if any theme is in local storage
    if(localStorage.getItem('color-theme')){
        //if light make it dark and save in local storage
        if(localStorage.getItem('color-theme')==='light'){
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme','dark');
        }else{
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme','light'); 
        }
    }
    //or no theme in local storage
    else{
        if(document.documentElement.classList.contains('dark')){
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme','light');  
        }else{
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme','dark');
        }
    }
  }