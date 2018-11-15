"use strict";
const guideData = [{
    guideId: 0, // Arbitrary unique ID
    guideTitle: 'Login to Portal', // Name for the guide in the menu
    guideUrlContains: 'login', // Only display this guide if the page URL contains string, '*' == all pages.
    guideUrlNotContains: '*', // Display this guide if the url does NOT contain string, '*' == no filter
    guideMenuOrder: 1, // Order in the menu
    guideGoals: [{ // Any number of goals or "milestones" we may want to include
        guideGoal: {
            goalId: 0, // Unique identifier per goal per guide
            goalTitle: 'Customer does a thing',
            goalSelector: '.selector',
            goalAction: 'click'
        }
    }, {
        guideGoal: {
            goalId: 1,
            goalTitle: 'Customer finished a thing',
            goalSelector: '#thing',
            goalAction: 'hover'
        }
    }],
    guideSteps: [{
        guideStep: {
            stepId: 0, // Unique identifier per step  per guide 
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
            stepId: 1,
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
            stepId: 2,
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
    guideUrlContains: '*', // Only display this guide if the page URL contains string, '*' == no filter
    guideUrlNotContains: '*', // Display this guide if the url does NOT contain string, '*' == no filter
    guideMenuOrder: 2, // Order in the menu
    guideGoals: [{
        guideGoal: {
            goalId: 0,
            goalTitle: 'Customer does a thing',
            goalSelector: '.selector',
            goalAction: 'click'
        }
    }, {
        guideGoal: {
            goalId: 1,
            goalTitle: 'Customer finished a thing',
            goalSelector: '#thing',
            goalAction: 'hover'
        }
    }],
    guideSteps: [{
        guideStep: {
            stepId: 0,
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
            stepId: 1,
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
            stepId: 2,
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
    guideId: 2,
    guideTitle: 'Install WordPress',
    guideUrlContains: '*', // Only display this guide if the page URL contains string, '*' == no filter
    guideUrlNotContains: '*', // Display this guide if the url does NOT contain string, '*' == no filter
    guideMenuOrder: 2, // Order in the menu
    guideGoals: [{
        guideGoal: {
            goalId: 0,
            goalTitle: 'Customer does a thing',
            goalSelector: '.selector',
            goalAction: 'click'
        }
    }, {
        guideGoal: {
            goalId: 1,
            goalTitle: 'Customer finished a thing',
            goalSelector: '#thing',
            goalAction: 'hover'
        }
    }],
    guideSteps: [{
        guideStep: {
            stepId: 0,
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
            stepId: 1,
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
            stepId: 2,
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

function Guide() {
  this.id;
  this.title;
  this.urlContains; // Only display this guide if the page URL contains string, '*' == no filter
  this.urlNotContains; // Display this guide if the url does NOT contain string, '*' == no filter
  this.menuOrder; // Order in the menu
  this.goals = [];
  this.steps = [];
  this.playedSteps = [];
  this.completedGoals = [];
}

Guide.prototype = { // Player methods
    constructor: Guide,
    playedStep: function(stepId) {
        this.playedSteps.push(stepPlayOrder);
    },
    goalCompleted: function(goalId) {
        this.points.push(pointsAddition);
    },
    getGoals: function() {
        let allGoals;
        if ( this.goals.length > 0 ) {
            allGoals = this.goals;
        } 
        else {
            console.info("No goals configured for guide ID: " + this.id);
            return false;
        }
        return allGoals;
    },
    getSteps: function() {
        let totalSteps;
        if ( this.steps.length > 0 ) {
            totalSteps = this.steps;
        } 
        else {
            console.info("No steps configured for guide ID: " + this.id);
            return false;
        }
        return totalSteps;
    },
    getGoal: function() {
        
        return this.time;
    },
    getStep: function() {
        return this.playerRatio;
    },
};

function buildMenuButton() {
    buildMenu(guideData);
    const buttonHtml = '<a id="guide-me">Guide Me</a>';
    $('.feedback-buttons').append(buttonHtml);
}

function buildMenu(GuideObj) {
    if ($('#gh-menu').length == 0) {
        let menuHtml = '<div id="gh-menu" class="gh-center gh-box-shadow gh-border-style dismissable" style="display:none;"><div id="gh-menu-header">GatorGuide - Learn how to... <button type="button" class="gh-dismiss" aria-label="Close">×</button></div><ul id="gh-menu-list"></ul></div>';
        $('#gbclient').append(menuHtml);
    }
    for (let key in guideData) {
        if (guideData[key].guideUrlContains == '*' || window.location.href.indexOf(guideData[key].guideUrlContains) > -1 ) {
            if ( guideData[key].guideUrlNotContains == '*' || window.location.href.indexOf(guideData[key].guideUrlNotContains) == -1 ) {
                if ($('guide-id-' + guideData[key].guideId).length == 0) {
                    let elementId = '#guide-id-' + guideData[key].guideId;
                    $('#gh-menu-list').append('<li menu-order="' + guideData[key].guideMenuOrder + '" id="guide-id-' + guideData[key].guideId + '" class="gh-menu-item">' + guideData[key].guideTitle + '</li>');
                    $(elementId).on('click', function() {
                        $('#gh-menu').hide();
                        $('#guide-me').removeClass('disabled processing');
                        console.info("Play guide: " + guideData[key].guideTitle);
                        playGuide(guideData[key].guideId);
                    });
                }
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

function Player(guide) {
    
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

function popupBox(guideId, stepOrder, stepTitle, stepMsg, stepSelector, stepAction, stepDirection, stepButtons, stepDismissable) {
    if (guideId == undefined || stepMsg == undefined) {
        console.info('id and msg are required parameters');
        return false;
    }
    if ( stepButtons == undefined ) {
        $(document).on('change', stepSelector, function() {
           playNextStep(guideId, stepPlayOrder); 
        });
    }
    let box_direction;
    
    if ( stepDirection ) {
        switch (stepDirection) {
    case up:
        box_direction = "up_box";
        break;
    case down:
        box_direction = "down_box";
        break;
    case left:
        box_direction = "left_box";
        break;
    case right:
        box_direction = "right_box";
        break;
} 
else {
    box_direction = "up_box";
}
    }
    const popupContent = '<div id="guide-'+ guideId +'-' + stepOrder + '" class="gh-popup '+ box_direction +'"><div class="gh-padding box-header"><div id="guide-title">' +  + '</div><div class="box-dismiss">x</div></div><div class="gh-padding guide-msg">'++'</div><div class="guide-buttons">'++'</div></div>';
    
    
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
    const minifiedCss = '<style>#gh-dismiss:hover,#guide-me{cursor:pointer}.gh-center{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}.gh-box-shadow{-webkit-box-shadow:0 0 5px 0 rgba(0,0,0,.75);-moz-box-shadow:0 0 5px 0 rgba(0,0,0,.75);box-shadow:0 0 5px 0 rgba(0,0,0,.75)}.gh-border-style{border-radius:2px;border:1px solid}.gh-box-style{padding:5px;margin:0 auto}#gh-menu,#gh-menu-list{padding:10px}.gh-menu-item:hover{cursor:pointer;font-weight:bolder}.heightlighted{border:4px solid #00ff5a}.container:after,.container:before{content:\'\';display:block;position:absolute;left:100%;width:0;height:0;border-style:solid}.container:after{top:10px;border-color:transparent transparent transparent #fdd;border-width:10px}.container:before{top:9px;border-color:transparent transparent transparent #a00;border-width:11px}.gh-dismiss{position:absolute;right:1px;top:1px;float:right;font-size:2.4rem;font-weight:700;line-height:1;color:#000;text-shadow:0 .1rem 0 #fff;opacity:.5}#gh-menu-header{display:block;width:100%;padding:0;font-size:1.6rem;font-weight:900;color:#666;border:0;text-align:center;border-bottom:1px solid #666}#gh-menu{width:400px;min-height:300px;background:#FFF;color:#4077b5}#guide-me{min-width:10rem;background-color:#4077b5;box-sizing:inherit;display:inline-block;min-height:2.4rem;padding:.3rem 1.3rem;font-family:400 1.3rem/1.6 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-weight:500;line-height:2.4rem;vertical-align:middle;border:.1rem solid transparent;border-radius:.2rem;outline:0;-o-transition:all .1s ease;transition:all .1s ease;position:relative;z-index:0;overflow:hidden;font-size:1.2rem;color:#fff;text-align:center;text-decoration:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:100%}#guide-me:hover{background-color:#3a679d}</style>';
    $('#gbclient').append(minifiedCss);
    buildMenuButton();
    
    $('#guide-me').click(function() {
        console.info("Guide me clicked");
        $('#gh-menu').show();
    });
    $('.gh-dismiss').click(function() {
        $('#gh-menu').hide();
        $('#guide-me').removeClass('disabled processing');
    })
});