"use strict";
const guideData = [{
    guideId: 0, // Arbitrary unique ID
    guideTitle: 'Login to Portal', // Name for the guide in the menu
    guideMenuUrls: '*', // Only display this guide if the page URL contains string, '*' == all pages.
    guideMenuOrder: 1, // Order in the menu
    guideGoals: [{ // Any number of goals or "milestones" we may want to include
        guideGoal: {
            goalTitle: 'Customer does a thing',
            goalSelector: '.selector',
            goalAction: 'click'
        }
    }, {
        guideGoal: {
            goalTitle: 'Customer finished a thing',
            goalSelector: '#thing',
            goalAction: 'hover'
        }
    }],
    guideSteps: [{
        guideStep: {
            stepPlayOrder: 1,
            stepTitle: 'Click here', // Header shown in the popup box
            stepMsg: 'Input your email address here.', // Content of the message box
            stepSelector: '.input', // Selector that the box points to
            stepAction: 'keyup', // Action that will automatically proceed the walkthrough.
            stepDismissable: 0, // If this action can be dismissed by clicking elsewhere/abandoning the guide
            stepDirection: 'down', // Desired location of the popup box
            stepButtons: [{ // Optional buttons (If no buttons declared stepAction on stepSelector will be the only way to proceed.)
                stepButton: {
                    buttonType: 'link', // Button will link to another page
                    buttonText: 'More Information', // Text of the button
                    buttonHref: 'https://www.hostgator.com/help', // URL the button will point to
                    buttonDismisses: 0, // Should the guide be ended if this button is clicked
                    buttonNewTab: 1, // Should we attempt to open the link in a new tab/window.
                }
            }, {
                stepButton: {
                    buttonType: 'playNextStep', // Move forward in the guide
                    buttonText: 'Next', // text of the button
                }
            }]
        }
    }, {
        guideStep: {
            stepPlayOrder: 2,
            stepTitle: 'Click here',
            stepMsg: 'Input your password here.',
            stepSelector: '.input',
            stepAction: 'keyup',
            stepDismissable: 0,
            stepDirection: 'down',
            stepButtons: [{
                stepButton: {
                    buttonType: 'standard',
                    buttonText: 'More Information',
                    buttonHref: 'https://www.hostgator.com/help',
                    buttonDismisses: 0,
                    buttonNewTab: 1,
                }
            }, {
                stepButton: {
                    buttonType: 'playNextStep',
                    buttonText: 'Next',
                }
            }]
        }
    }, {
        guideStep: {
            stepPlayOrder: 3,
            stepTitle: 'Click here',
            stepMsg: 'Click here to login.',
            stepSelector: '.button',
            stepAction: 'click',
            stepDismissable: 0,
            stepDirection: 'down',
            stepButtons: [{
                stepButton: {
                    buttonType: 'standard',
                    buttonText: 'More Information',
                    buttonHref: 'https://www.hostgator.com/help',
                    buttonDismisses: 0,
                    buttonNewTab: 1,
                }
            }, {
                stepButton: {
                    buttonType: 'playNextStep',
                    buttonText: 'Next',
                }
            }]
        }
    }]
}, {
    guideId: 1,
    guideTitle: 'Create an email account',
    guideMenuUrls: '*', // Only display this guide if the page URL contains
    guideMenuOrder: 2, // Order in the menu
    guideGoals: [{
        guideGoal: {
            goalTitle: 'Customer does a thing',
            goalSelector: '.selector',
            goalAction: 'click'
        }
    }, {
        guideGoal: {
            goalTitle: 'Customer finished a thing',
            goalSelector: '#thing',
            goalAction: 'hover'
        }
    }],
    guideSteps: [{
        guideStep: {
            stepPlayOrder: 1,
            stepTitle: 'Click here',
            stepMsg: 'click this thing.',
            stepSelector: '.selector',
            stepAction: 'click',
            stepDismissable: 0,
            stepDirection: 'down',
            stepButtons: [{
                stepButton: {
                    buttonType: 'standard',
                    buttonText: 'More Information',
                    buttonHref: 'https://www.hostgator.com/help',
                    buttonDismisses: 0,
                    buttonNewTab: 1,
                }
            }, {
                stepButton: {
                    buttonType: 'playNextStep',
                    buttonText: 'Next',
                }
            }]
        }
    }, {
        guideStep: {
            stepPlayOrder: 2,
            stepTitle: 'Click here',
            stepMsg: 'Input your password here.',
            stepSelector: '.input',
            stepAction: 'keyup',
            stepDismissable: 0,
            stepDirection: 'down',
            stepButtons: [{
                stepButton: {
                    buttonType: 'standard',
                    buttonText: 'More Information',
                    buttonHref: 'https://www.hostgator.com/help',
                    buttonDismisses: 0,
                    buttonNewTab: 1,
                }
            }, {
                stepButton: {
                    buttonType: 'playNextStep',
                    buttonText: 'Next',
                }
            }]
        }
    }, {
        guideStep: {
            stepPlayOrder: 3,
            stepTitle: 'Click here',
            stepMsg: 'Click here to login.',
            stepSelector: '.button',
            stepAction: 'click',
            stepDismissable: 0,
            stepDirection: 'down',
            stepButtons: [{
                stepButton: {
                    buttonType: 'standard',
                    buttonText: 'More Information',
                    buttonHref: 'https://www.hostgator.com/help',
                    buttonDismisses: 0,
                    buttonNewTab: 1,
                }
            }, {
                stepButton: {
                    buttonType: 'playNextStep',
                    buttonText: 'Next',
                }
            }]
        }
    }]
}];

function buildMenuButton() {
    buildMenu(guideData);
    const buttonHtml = '<a id="guide-me" class="btn btn-secondary btn-sm">Guide Me</a>';
    $('.feedback-buttons').append(buttonHtml);
    $('#guide-me').click(function() {
        console.info("Guide me clicked");
            $('#gh-menu').show();
    });
}

function buildMenu(guideData) {
    if ($('#gh-menu').length == 0) {
        let menuHtml = '<div id="gh-menu" class="gh-center gh-box-shadow gh-border-style dismissable" style="display:none;"><ul id="gh-menu-list"></ul></div>';
        $('#gbclient').append(menuHtml);
    }
    for (let key in guideData) {
        if (guideData[key].guideMenuUrls == '*' || window.location.href.indexOf(guideData[key].guideMenuUrls) > -1) {
            if ($('guide-id-' + guideData[key].guideId).length == 0) {
                let elementId = '#guide-id-' + guideData[key].guideId;
                $('#gh-menu-list').append('<li menu-order="' + guideData[key].guideMenuOrder + '" id="guide-id-' + guideData[key].guideId + '" class="gh-menu-item">' + guideData[key].guideTitle + '</li>');
                $(elementId).on('click', function() {
                    $('#gh-menu').hide(); //
                    console.info("Play guide: " + guideData[key].guideTitle);
                });
            }
        }
    }
}

function playGuide(guideId) {
    let guide;
    let existing_cookie = getCookie('gh-guide-' + guideId);
    if (existing_cookie) {
        console.info('resume guide');
    }
    else {
        console.info('play guide');
    }
    return guide;
}

function getCookie(cookieName) {
    if (!navigator.cookieEnabled) {
        console.info('Cookies required');
        return false;
    }
    let cookieName = cookieName + '=';
    const cookies = document.cookie.split(';');
    let cookie;
    for (let i = 0; i < cookies.length; i++) {
        let result = cookies[i].startsWith(cookieName);
        if (result) {
            cookie = cookies[i];
        }
    }
    if (cookie !== undefined) {
        cookie = cookie.substring(cookieName.length);
        return JSON.parse(cookie);
    }
    return false;
}

function setCookie(Obj, cookieName) {
    if (!navigator.cookieEnabled) {
        console.info('Cookies required');
        return false;
    }
    if (!cookieName) {
        console.info('cookieName is required');
        return false;
    }
    let userPayload = JSON.stringify(Obj);
    if (userPayload) {
        let expiration = new Date();
        expiration.setDate(expiration.getDate() + 30);
        document.cookie = cookieName + '=' + userPayload + '; expires=' + expiration.toUTCString() + '; path=/';
        return true;
    }
    return false;
}

function expireCookie(cookieName) {
    if (!navigator.cookieEnabled) {
        console.info('Cookies required');
        return false;
    }
    if (!cookieName) {
        console.info('cookieName is required');
        return false;
    }
    document.cookie = cookieName + '=; Path=/; Max-Age=-99999999;';
    return true;
}

function popupBox(id, msg, direction, buttons, dismissable) { // Create a modal with content, that may be dismissable.
    if (id == undefined || msg == undefined) {
        console.info('id and msg are required parameters');
        return false;
    }
    const interstitial = '<div id="box-' + id + '" class="gh-center gh-box-shadow gh-border-style dismissable"><div id="header-' + id + '">Gator Helper Notice <span id="dismiss-msg">x</span></div></div>';
    const ourMsg = document.getElementById('box-' + id);
    ourMsg.innerText = msg;
    modal.style.display = 'block';
    if (dismissable !== undefined) { // If we need to create a listener for a dismissal button.
        const dismissal = document.getElementById('dismiss-modal');
        dismissal.onclick = function () {
            $("box-" + id).remove();
        };
    }
    return true;
}
$(document).ready(function () {
    const minifiedCss = '<style>.gh-center{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}.gh-box-shadow{-webkit-box-shadow:0 0 5px 0 rgba(0,0,0,.75);-moz-box-shadow:0 0 5px 0 rgba(0,0,0,.75);box-shadow:0 0 5px 0 rgba(0,0,0,.75)}.gh-border-style{border-radius:2px;border:1px solid}.gh-box-style{padding:5px;margin:0 auto}#gh-dismiss:hover,.gh-menu-item:hover{cursor:pointer}.heightlighted{border:4px solid #00ff5a}.container:after,.container:before{content:\'\';display:block;position:absolute;left:100%;width:0;height:0;border-style:solid}.container:after{top:10px;border-color:transparent transparent transparent #fdd;border-width:10px}.container:before{top:9px;border-color:transparent transparent transparent #a00;border-width:11px}</style>';
    $('#gbclient').append(minifiedCss);
    buildMenuButton();
});