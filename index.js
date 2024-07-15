// document.addEventListener('DOMContentLoaded',function(){
//     const body = document.body;
//     const switchButton = document.getElementById('btn');
//     let isSlid = false;
//     const savedmode = localStorage.getItem('mode');
//     let isDark = false;

//     function Toggle() {
//         if (body.classList.contains('light-mode')) {
//             body.classList.remove('light-mode');
//             body.classList.add('dark-mode')
//             localStorage.setItem('mode', 'dark-mode');
//             isDark = true
//         } else {
//             body.classList.remove('dark-mode');
//             body.classList.add('light-mode');
//             localStorage.setItem('mode', 'light-mode');
//             isDark = false
//         }
//     }

//     function Slider() {
//         //added to transition the sliding
//         if (isSlid) {
//             switchButton.style.transform = isDark ?  'translateX(0)': 'translateX(20px)';
//         } else {
//             switchButton.style.transform = isDark ?  'translateX(20px)':'translateX(0)';
//         }
//     }  

//     switchButton.addEventListener('click', function () {
//         Toggle();
//         isDarkMode = !isDark;
//         Slider();
//     })  

//     if (savedmode){
//         body.classList.add(savedmode)
//         isDark = savedmode === 'dark-mode';
//     } else {
//         //Set initial mode based on preference
//         if (window.matchMedia && window.matchMedia('(prefers-color-scheme-dark)').matches){
//             body.classList.add('dark-mode')
//         } else {
//             body.classList.add('light-mode')
//         }
//     }

//     switchButton.addEventListener('change', function() {
//         Toggle();
//         isDark = !isDark;
//         Slider();
//     });

// });

document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const switchButton = document.getElementById('btn');
    let isSlid = localStorage.getItem('isSlid') === 'true'; // Retrieve from localStorage
    let savedmode = localStorage.getItem('mode') === 'dark-mode'; // Retrieve from localStorage

    function Toggle() {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('mode', 'dark-mode');
            savedmode = true;
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('mode', 'light-mode');
            savedmode = false;
        }
    }

    function Slider() {
        switchButton.style.transform = isSlid && savedmode ? 'translateX(20px)' : 'translateX(0)';
    }

    switchButton.addEventListener('click', function() {
        Toggle();
        isSlid = !isSlid;
        localStorage.setItem('isSlid', isSlid); // Store in localStorage
        Slider();
    });

    // Set initial mode based on localStorage or system preference
    if (savedmode) {
        body.classList.add('dark-mode');
    } else {
        body.classList.add('light-mode');
    }
    Slider(); // Update slider position on initial load

    switchButton.addEventListener('change', function() {
        Toggle();
        isSlid = !isSlid;
        localStorage.setItem('isSlid', isSlid); // Store in localStorage
        Slider();
    });

});
