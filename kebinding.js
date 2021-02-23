console.clear()
document.onkeydown = checkKey;
console.log('%cInstructions', 'background-color: #EB5757; color: #FFE5E5; font-weight:bold; text-align:center; font-size:150%; padding:10px 20px;')
console.log('%cup arrow:' + '%c +10s',              'background-color: #F2994A; color:#FFECDB; font-weight:bold; text-decoration:underline; padding:7px 5px', 'color:#414141; font-weight:bold');
console.log('%cdown arrow:' + '%c -10s',            'background-color: #F2994A; color:#FFECDB; font-weight:bold; text-decoration:underline; padding:7px 5px', 'color:#414141; font-weight:bold');
console.log('%cleft arrow:' + '%c +5s',             'background-color: #F2994A; color:#FFECDB; font-weight:bold; text-decoration:underline; padding:7px 5px', 'color:#414141; font-weight:bold');
console.log('%cright arrow:' + '%c -5s',            'background-color: #F2994A; color:#FFECDB; font-weight:bold; text-decoration:underline; padding:7px 5px', 'color:#414141; font-weight:bold');
console.log('%cpage up:' + '%c Velocita\' +0.25',    'background-color: #F2994A; color:#FFECDB; font-weight:bold; text-decoration:underline; padding:7px 5px', 'color:#414141; font-weight:bold');
console.log('%cpage down:' + '%c Velocita\' -0.25',   'background-color: #F2994A; color:#FFECDB; font-weight:bold; text-decoration:underline; padding:7px 5px', 'color:#414141; font-weight:bold');
function checkKey(e) {
    vid = document.querySelector('video');
    e = e || window.event;
    e.preventDefault()
    
    if (e.keyCode == '38') {vid.currentTime += 10; // up arrow
        } else if (e.keyCode == '40') {vid.currentTime -= 10;// down arrow
        } else if (e.keyCode == '37') {vid.currentTime -= 5;// left arrow
        } else if (e.keyCode == '39') {vid.currentTime += 5;// right arrow
        } else if (e.keyCode == '33') {vid.playbackRate += 0.25;// page up
        } else if (e.keyCode == '34') {vid.playbackRate += 0.25;// page down
        }
}