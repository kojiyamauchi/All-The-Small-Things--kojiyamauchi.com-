//Let's Begin Now!!!

jQuery(function ($) {

    // Global Variable & Function.==========================================================================================================================
    var motionSkipBoxWidth = $("#motionSkipBox").width(),
        ua = navigator.userAgent;

    function introWelcomeHopping() {
        $("span.hopping").each(function (index) { // All Animation Time 1700s.
            $(this).delay(index * 100).animate({
                "top": "-50px"
            }, 250, "swing", function () {
                $(this).animate({
                    "top": "0px"
                }, 250, "swing");
            });
        });
    }
    //======================================================================================================================================================

    // Social Link Mouse Over SP Don't Use.
    if(ua.indexOf("iPhone") > -1 || ua.indexOf("iPad") > -1 || ua.indexOf("iPod") > -1 || ua.indexOf("Android") > -1) {
        $('#socialLink ul li a').addClass('sp').removeClass('pc');
    }

    // Intro Welcome, This Site Main Logo Image's Display Random Script.
    var maxNumber = 7, //numberOfLogo.
        randomNumber = Math.floor(Math.random() * (maxNumber)) + 1;
    $(".logoSneaker").children("img").attr("src", "images/allTheSmallThingsLogoSneaker" + randomNumber + ".png");
    $(".logoNote").children("img").attr("src", "images/allTheSmallThingsLogoNote" + randomNumber + ".png");
    $(".logoMask").children("img").attr("src", "images/allTheSmallThingsLogoMask" + randomNumber + ".png");
    $('#motionSkipBox').children("img#motionSkipSneaker").attr("src", "images/allTheSmallThingsLogoSneaker" + randomNumber + ".svg");
    $('#motionSkipBox').children("img#motionSkipNote").attr("src", "images/allTheSmallThingsLogoNote" + randomNumber + ".svg");
    $('#motionSkipBox').children("img#motionSkipMask").attr("src", "images/allTheSmallThingsLogoMask" + randomNumber + ".svg");

    //Change's "Welcome" Font Color.
    if(randomNumber == 1 || randomNumber == 2) {
        $("#introWelcome .welcomeFont").css({
            "color": "#000"
        });
    } else if(randomNumber == 3) {
        $("#introWelcome .welcomeFont").css({
            "color": "#7F5940"
        });
    } else if(randomNumber == 4) {
        $("#introWelcome .welcomeFont").css({
            "color": "#591111"
        });
    } else if(randomNumber == 5) {
        $("#introWelcome .welcomeFont").css({
            "color": "#00003D"
        });
    } else if(randomNumber == 6) {
        $("#introWelcome .welcomeFont").css({
            "color": "#0A300A"
        });
    } else if(randomNumber == 7) {
        $("#introWelcome .welcomeFont").css({
            "color": "#3F3F0D"
        });
    }

    // Motion Skip Button Click Action!!
    $("#motionSkipBox").css({
        "right": -motionSkipBoxWidth + "px"
    });
    $("#motionSkipBox").on("click", function () {
        $("#logoSVG").fadeOut(500, "swing");
        $("header h1#mainLogo").fadeTo(500, 1, "swing");
        $("#contents1").fadeOut(500, "swing");
        $("#contents2").fadeIn(500, "swing");
        $("#contents2 footer p").textillate({
            loop: true,
            minDisplayTime: 2000,
            initialDelay: 2000,
            autoStart: true,
            in: {
                effect: "flash",
                delayScale: 1.5,
                delay: 100,
                sequence: true,
            },
            out: {
                effect: "flash",
                delayScale: 1.0,
                delay: 150,
                sequence: true,
            }
        });
        $(this).children('img#motionSkipNote').stop(true).animate({
            'top': '-60px'
        }, 250, "swing", function () {
            $(this).stop(true).animate({
                'top': '0px'
            }, 250, "swing").prevAll('#motionSkip').removeClass('comp').parent('#motionSkipBox').delay(250).animate({
                "right": -motionSkipBoxWidth + "px"
            }, 1000, "easeInExpo", function () {
                $(this).hide();
            });
        });
    });

    // Main Logo Hover Action.
    var todayObject = new Date(),
        nowHours = todayObject.getHours();
    if(nowHours >= 4 && nowHours < 11) {
        $('p.greeting').text('Good Morning!');
    } else if(nowHours >= 11 && nowHours < 14) {
        $('p.greeting').text('Hello!');
    } else if(nowHours >= 14 && nowHours < 17) {
        $('p.greeting').text('How’s Everything!');
    } else if(nowHours >= 17 && nowHours < 20) {
        $('p.greeting').text('How’s Your Day Going!');
    } else if(nowHours >= 20 || nowHours < 4) {
        $('p.greeting').text('Good Night!');
    }

    var con1 = $('#contents1'),
        con2 = $('#contents2');

    con1.find('#mainLogo a').on('mouseover', function () {
        con1.find("h2#kojiyamauchi span").each(function (index) {
            $(this).delay(index * 50).animate({
                "top": "-2px"
            }, 50, "linear", function () {
                $(this).animate({
                    "top": "2px"
                }, 100, "linear", function () {
                    $(this).animate({
                        "top": "0px"
                    }, 50, "linear");
                });
            });
        });
    }).on('mouseout', function () {
        con1.find('h2#kojiyamauchi span').clearQueue().stop(true).removeAttr('style');
    });

    con2.find('#mainLogo a').on('mouseover', function () {
        con2.find("h2#kojiyamauchi span").each(function (index) {
            $(this).delay(index * 50).animate({
                "top": "-2px"
            }, 50, "linear", function () {
                $(this).animate({
                    "top": "2px"
                }, 100, "linear", function () {
                    $(this).animate({
                        "top": "0px"
                    }, 50, "linear");
                });
            });
        });
    }).on('mouseout', function () {
        con2.find('h2#kojiyamauchi span').clearQueue().stop(true).removeAttr('style');
    });

    //socialLinkAction!!
    var $social = $("#socialLink h4").textillate({
        loop: false,
        autoStart: false,
        in: {
            effect: 'bounce',
            sequence: false,
            reverse: false,
            sync: false,
            shuffle: true,
            callback: function () {
                $("#socialLink h4").textillate('out');
            }
        },
        out: {
            effect: 'bounce',
            sequence: false,
            reverse: false,
            sync: true,
            shuffle: false,
        }
    });
    $("#socialLink ul li a.pc").on("mouseover", function () {
            $social.stop(true).textillate("start");
        }) //.on"mouseover"
        .on("mouseout", function () { //Don't Use...
            $social.textillate("stop");
        }); //.on"mouseout"


    //if IE or ~iPhone4 or WindowsOS FireFox Script.============================================================================================================================
    if(ua.indexOf("MSIE") > -1 || ua.indexOf("Trident") > -1 || ua.indexOf("iPhone OS 7_1_2") > -1 || ua.indexOf("Windows") > -1 && ua.indexOf("Firefox") > -1 || ua.indexOf("Android") > -1) {
        $("header h1#mainLogo").css({
            "opacity": 1
        });
        $("#logoSVG").css({
            "display": "none"
        });

        //introduction!!
        $("#introWelcome").delay(900).fadeIn(100, "linear").animate({
            "left": 0 + "px"
        }, 1500, "easeOutExpo", function () {
            setTimeout(function () {
                introWelcomeHopping();
            }, 250);
            $(this).delay(1450).animate({
                "left": 2000
            }, 1500, "easeInExpo", function () {
                $(this).fadeOut(100, "linear");
                $("#motionSkipBox").fadeIn(100, "linear").delay(150).animate({
                    "right": 0
                }, 1000, "easeOutExpo");
                $('#motionSkip').addClass('comp');
                $("#contents1").delay(1000).animate({
                    "margin-top": "0px",
                    "opacity": 1
                }, 4000, "easeOutExpo", function () {
                    $("#contents1 header h1#mainLogo").addClass("IEandOldIphoneIntroAnimations", function () {
                        $(this).delay(1750).removeClass("IEandOldIphoneIntroAnimations", function () {
                            $("#contents1 #kojiyamauchi").delay(500).fadeOut(1000, "swing", function () {
                                $("#contents1 #myPortfolio").show("drop", "", 500, function () {
                                    var mainDescriptionBackIMGWidth = $("#contents1 #mainDescription").width(),
                                        subDescriptionBackIMGWidth = $("#contents1 #subDescription").width();
                                    $("#contents1 #mainDescriptionBackIMG img").animate({
                                        "opacity": 1,
                                        "width": mainDescriptionBackIMGWidth + "px"
                                    }, 2000, "easeInQuart", function () {
                                        $("#contents1 #subDescriptionBackIMG img").animate({
                                            "opacity": 1,
                                            "width": subDescriptionBackIMGWidth + "px"
                                        }, 2000, "easeInQuart", function () {
                                            $("#contents1 #mainDescriptionBackIMG img, #contents1 #subDescriptionBackIMG img").delay(2000).fadeTo(1000, 0);
                                            $("#contents1 #myPortfolio").delay(2000).fadeOut(1000, function () {
                                                $("#contents1 #kojiyamauchi").show("drop", "", 500, function () {
                                                    setTimeout(function () {
                                                        $("a").removeClass("introduction");
                                                    }, 2000);
                                                    $("#motionSkipBox").delay(2000).animate({
                                                        "right": -motionSkipBoxWidth + "px"
                                                    }, 1000, "easeInExpo", function () {
                                                        $(this).hide();
                                                    });
                                                    setTimeout(function () {
                                                        $('#motionSkip').removeClass('comp');
                                                    }, 2000);
                                                    //copyrightAction!!
                                                    $("footer p").textillate({
                                                        loop: true,
                                                        minDisplayTime: 2000,
                                                        initialDelay: 2000,
                                                        autoStart: true,
                                                        in: {
                                                            effect: "flash",
                                                            delayScale: 1.5,
                                                            delay: 100,
                                                            sequence: true,
                                                        },
                                                        out: {
                                                            effect: "flash",
                                                            delayScale: 1.0,
                                                            delay: 150,
                                                            sequence: true,
                                                        }
                                                    });
                                                    //copyrightActionEnd
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }); //IntroEND.
        //if IE or ~iPhone4 or WindowsOS FireFox Script End.========================================================================================================================


    } else {


        //if Safari or Chrome or FireFox or iPhone5~ Script.===================================================================================================
        // LogoSVG
        var pathObj = {
            "logoSVG": {
                "strokepath": [{
                    "path": "M4.7,118.7c1.8-11.6,3.7-23.3,8.1-34.2c1.3-3.2,2.8-6.4,4.3-9.5c1.2-2.6,2.5-5.1,3.7-7.7c0.5-1,0.9-1.9,1.4-2.9  c6.8-14,13.6-28.2,16.3-43.5c0,10.3,0.6,21.6,1.7,31.8c1.3,11.5,3.4,22.9,7.4,33.7c0.9,2.3,1.8,4.6,2.7,6.8  c3.7,9,7.5,18.1,11.2,27.1",
                    "duration": 400
                }, {
                    "path": "M11.3,76.7c5.2,1.7,10.8,2.2,16.2,2.5c4.1,0.3,8.3,0.5,12.4,0.6c1.1,0,2.3,0,3.2-0.6",
                    "duration": 200
                }, {
                    "path": "M82.6,20.3c1.3,6.6,1.7,13.4,2,20.1c1.1,27.6-0.1,55.2-3.6,82.5",
                    "duration": 200
                }, {
                    "path": "M111.4,20.3c1.9,16.4,2.5,33,1.7,49.5c-0.3,7.6-1,15.2-1.6,22.8c-0.2,3-0.5,6.1-0.7,9.1  c-0.6,7.2-1.2,14.3-2.4,21.4",
                    "duration": 200
                }, {
                    "path": "M165,33.1c19.6-1.1,39.4,0.2,58.7,4.1",
                    "duration": 300
                }, {
                    "path": "M194.4,35c-0.6,7-1.2,13.9-1.9,20.9c-0.2,1.8-0.3,3.5-0.4,5.3c-0.3,6.3,0.3,12.6,1,18.8  c1.3,12.6,2.5,25.3,5.3,37.7",
                    "duration": 300
                }, {
                    "path": "M241.9,16.2c-2.7,16-4.2,32.1-5.3,48.3c-1,14.1-1.7,28.2-4.1,42.1c-0.4,2.1-0.8,4.3-2,6.1  c2-4.4,3.2-9.1,3.5-13.8c0.2-2.4,0.1-4.8,0.3-7.2c0.4-6,2.2-11.8,4-17.5c0.3-0.9,0.6-1.9,1.2-2.6c0.7-0.8,1.6-1.4,2.6-1.8  c6.3-3,13.9-3.5,20.5-1.3c3.3,1.1,6.6,3,8.4,6c1.4,2.4,1.7,5.2,2,7.9c1.3,12.1,1.8,24.3,1.7,36.5",
                    "duration": 400
                }, {
                    "path": "M289.8,81.4c11.8,1.7,23.8,2.5,35.7,2.5c1.2,0,2.5,0,3.7-0.4c3.4-1.2,5.1-5.4,4.3-8.9c-0.8-3.5-3.6-6.3-6.7-8.2  c-6.2-3.8-14.6-4.7-20.7-0.7c-2.4,1.6-4.3,3.7-6.1,5.9c-1.3,1.5-2.5,3.1-3.4,4.9c-1.3,2.7-1.5,5.8-1.4,8.8  c0.1,5.1,1.1,10.3,3.4,14.9c2.3,4.6,6.1,8.5,10.8,10.5c3.6,1.5,7.5,1.9,11.4,2.1c1.5,0.1,3,0.2,4.3-0.3c0.8-0.3,1.6-0.8,2.3-1.3  c3.4-2.3,7.1-5,7.9-9",
                    "duration": 400
                }, {
                    "path": "M443,27.5c-13.4-0.9-26.8,0-40,2.5c-1.5,0.3-2.9,0.6-4.2,1.3c-1.6,0.8-2.8,2.1-3.9,3.5  c-2.7,3.7-4.1,8.4-3.4,12.9c0.8,5.5,4.2,10.3,8.1,14.4c6.1,6.4,13.5,11.4,19.8,17.5c2.9,2.8,5.6,6,6.9,9.9c2,6.2-0.4,13.1-4.5,18  s-9.8,8.4-15.4,11.6",
                    "duration": 400
                }, {
                    "path": "M451.5,70.8c-0.5,16.1,0.3,32.2,2.2,48.2c-0.2-12.4-0.5-24.8-0.7-37.1c0-1.2,0-2.4,0.4-3.5  c0.4-1.1,1.2-1.9,2-2.7c3.2-3.3,7.1-5.9,11.6-7c4.4-1.1,9.4-0.5,13.2,2.1c5.1,3.6,7.1,10.1,8.6,16.1c1.8,7.2,3.4,14.6,2.5,22  c0.9-8.9-1.6-18.2,1.7-26.5c1.2-2.9,3.1-5.6,5.2-7.9c2.1-2.2,4.7-4.3,7.7-4.5c3.1-0.2,6.1,1.4,8.1,3.7c2.1,2.3,3.4,5.2,4.6,8  c4.5,9.9,9,20,10.4,30.7",
                    "duration": 400
                }, {
                    "path": "M590,74.1c-8.8-2.3-17.8-4.7-26.8-3.3c-2.1,0.3-4.2,0.9-6.1,1.8c-3.7,1.9-6.4,5.3-8,9.1  c-1.6,3.8-2.3,7.9-2.7,12c-0.3,3-0.4,6.1,0.2,9s2.1,5.8,4.6,7.5c2.7,1.9,6.3,2.2,9.6,2.5c2.7,0.2,5.3,0.4,8,0.6  c3.1,0.2,6.2,0.5,9.2,0c3-0.5,6-1.8,8-4.2c1.9-2.3,2.6-5.3,3-8.2c1.8-11.2,1.2-22.7,0.6-34.1c1.3,2.5,1.4,5.5,1.3,8.3  c-0.1,13.8-0.8,27.5-2.1,41.2",
                    "duration": 400
                }, {
                    "path": "M614.4,20c0.6,13.8,1.3,27.6,1.9,41.5c0.2,4.9,0.4,9.8,0.4,14.7c-0.1,7.8-1,15.6-1.8,23.4  c-0.9,7.8-1.7,15.7-2.6,23.5",
                    "duration": 200
                }, {
                    "path": "M642.7,20c2.3,18.4,2.4,37,1.6,55.5c-0.7,15.9-2.2,31.7-3.9,47.5",
                    "duration": 200
                }, {
                    "path": "M156.5,173.2c19.7-1.1,39.4,0,58.8,3.4",
                    "duration": 300
                }, {
                    "path": "M186.6,176c-0.5,4.4-1.1,8.8-1.6,13.2c-0.8,6.7-1.7,13.4-1.8,20.1c-0.3,16.2,3.4,32.1,7.1,47.8",
                    "duration": 300
                }, {
                    "path": "M233,156c-2.9,14.9-4.3,30.1-5.6,45.3c-1.1,13.2-2.1,26.5-3.5,39.7c-0.5,4.5-1.1,9-3.1,13  c3.7-11,4.6-22.8,4.8-34.4c0-2.6,0.1-5.4,1.3-7.7c1.7-3.1,5.2-4.8,8.6-5.8c5.6-1.6,11.7-1.8,17.1,0.2c5.4,2,10.1,6.4,11.7,12  c0.7,2.4,0.8,5,0.9,7.5c0.4,11.4,0.8,22.8,1.1,34.2",
                    "duration": 400
                }, {
                    "path": "M293,187.8c-1.2,1.7-1.1,2.6-1.7,4.5",
                    "duration": 200
                }, {
                    "path": "M292.6,208.8c1.3,18-0.5,36.1-5.3,53.5",
                    "duration": 300
                }, {
                    "path": "M321.4,205c-1.4,19.1-2.8,38.1-4.2,57.2c1.1-4.7,1.7-9.6,1.8-14.4c0.2-9-1.3-18.4,1.7-26.9  c0.9-2.7,2.4-5.3,4.8-6.7c2-1.2,4.5-1.5,6.8-1.6c2.2-0.1,4.5,0,6.6,0.8c3.7,1.4,6.5,4.7,7.9,8.4c1.5,3.7,1.8,7.7,2.1,11.7  c0.7,10.8,0.7,21.7,0.1,32.5",
                    "duration": 400
                }, {
                    "path": "M394.7,203.5c-2.4,1-5.1,0.5-7.7,0.9c-4.6,0.8-8.1,4.6-10.5,8.5c-5.4,8.7-7.6,19.2-6.2,29.3  c0.3,1.8,0.6,3.7,1.5,5.3c1.4,2.6,4.1,4.3,6.9,5.3c2.8,1,5.8,1.2,8.7,1.5c3.4,0.3,6.7,0.6,10.1,0.9c2.3,0.2,5,0.3,6.7-1.3  c1.8-1.7,0.7-4.5,0.5-6.9c-1.1-10.3-3.7-20.5-6.2-30.5c-1.1-4.2-1.2-8.5-3.2-12.4c-1.3-2.6-3.2-5.3-2.5-8.1c6,17.5,9.5,35.8,12,54.1  c0.6,4.4,1.1,8.8,1.2,13.2c0.1,6.5-0.8,13-1.8,19.4c-0.3,1.9-0.6,3.9-1.5,5.7c-0.7,1.4-1.7,2.5-2.7,3.7c-1.6,1.8-3.2,3.6-5,5.2  c-4.6,3.8-10.8,5.5-16.7,5.2c-6-0.3-11.7-2.6-16.6-6.1",
                    "duration": 450
                }, {
                    "path": "M466.5,208.9c-3.2-1.6-6.8-2.1-10.3-2.6c-7.6-0.9-15.8-1.6-22.7,1.7c-2.4,1.1-4.6,2.8-5.8,5.2  c-0.7,1.6-0.9,3.3-1.1,5.1c-0.2,2.5-0.2,5.2,1.1,7.3c2.2,3.5,7,4.1,11.2,4.4c3.9,0.3,7.9,0.7,11.8,1.3c6.1,0.9,13,2.7,15.9,8.1  c2.6,4.8,0.5,11.6-4.3,14.2c-2.3,1.2-4.9,1.6-7.4,1.9c-5.9,0.7-11.8,1.5-17.7,0.5c-5.8-1-11.6-4.1-14.4-9.3",
                    "duration": 450
                }, {
                    "path": "M489.9,252c-0.1,2.5-1,4.9-2.2,7.1c-2.7,5-6.7,9.4-11.5,12.5",
                    "duration": 1000
                }],
                "dimensions": {
                    "width": 660,
                    "height": 310
                }
            }
        };

        // LogoSVG Animation Function.
        function logoSVGAnimation() {
            /*
             * Lazy Line Painter - Path Object
             * Generated using 'SVG to Lazy Line Converter'
             *
             * http://lazylinepainter.info
             * Copyright 2013, Cam O'Connell
             *
             */
            $("#logoSVG").lazylinepainter({
                "svgData": pathObj,
                "strokeWidth": 10,
                "strokeColor": "#000"
            }).lazylinepainter('paint');
        }
        //introduction!!
        $("#introWelcome").delay(900).fadeIn(100, "linear").animate({
            "left": 0 + "px"
        }, 1500, "easeOutExpo", function () {
            setTimeout(function () {
                introWelcomeHopping();
            }, 250);
            $(this).delay(1450).animate({
                "left": 2000
            }, 1500, "easeInExpo", function () {
                $(this).fadeOut(100, "linear");
                $("#motionSkipBox").fadeIn(100, "linear").delay(150).animate({
                    "right": 0
                }, 1000, "easeOutExpo");
                $('#motionSkip').addClass('comp');
                setTimeout(function () {
                    logoSVGAnimation();
                }, 1200);
                //Chrome SVG's Countermeasure.
                setTimeout(function () {
                    $("svg path:nth-of-type(1)").css({
                        "opacity": 1
                    });
                    $("svg path:nth-of-type(2)").delay(400).fadeTo(1, 1);
                    $("svg path:nth-of-type(3)").delay(600).fadeTo(1, 1);
                    $("svg path:nth-of-type(4)").delay(800).fadeTo(1, 1);
                    $("svg path:nth-of-type(5)").delay(1000).fadeTo(1, 1);
                    $("svg path:nth-of-type(6)").delay(1300).fadeTo(1, 1);
                    $("svg path:nth-of-type(7)").delay(1600).fadeTo(1, 1);
                    $("svg path:nth-of-type(8)").delay(2000).fadeTo(1, 1);
                    $("svg path:nth-of-type(9)").delay(2400).fadeTo(1, 1);
                    $("svg path:nth-of-type(10)").delay(2800).fadeTo(1, 1);
                    $("svg path:nth-of-type(11)").delay(3200).fadeTo(1, 1);
                    $("svg path:nth-of-type(12)").delay(3600).fadeTo(1, 1);
                    $("svg path:nth-of-type(13)").delay(3800).fadeTo(1, 1);
                    $("svg path:nth-of-type(14)").delay(4000).fadeTo(1, 1);
                    $("svg path:nth-of-type(15)").delay(4300).fadeTo(1, 1);
                    $("svg path:nth-of-type(16)").delay(4600).fadeTo(1, 1);
                    $("svg path:nth-of-type(17)").delay(5000).fadeTo(1, 1);
                    $("svg path:nth-of-type(18)").delay(5200).fadeTo(1, 1);
                    $("svg path:nth-of-type(19)").delay(5500).fadeTo(1, 1);
                    $("svg path:nth-of-type(20)").delay(5900).fadeTo(1, 1);
                    $("svg path:nth-of-type(21)").delay(6350).fadeTo(1, 1);
                    $("svg path:nth-of-type(22)").delay(6800).fadeTo(1, 1);
                }, 1200);
                setTimeout(function () {
                    $("path:last-of-type").animate({
                        "stroke-width": 35 + "px"
                    }, 1000, "easeInQuart", function () {
                        $(this).animate({
                            "stroke-width": 10 + "px"
                        }, 1000, "easeOutBounce");
                    });
                }, 8200);
                $("#contents1").delay(1000).animate({
                    "margin-top": "0px",
                    "opacity": 1
                }, 4100, "easeOutExpo", function () {
                    $("#contents1 #kojiyamauchi").delay(4400).fadeOut(1000, "swing", function () {
                        $("#contents1 #myPortfolio").show("drop", "", 500, function () {
                            var mainDescriptionBackIMGWidth = $("#contents1 #mainDescription").width(),
                                subDescriptionBackIMGWidth = $("#contents1 #subDescription").width();
                            $("#contents1 #mainDescriptionBackIMG img").animate({
                                "opacity": 1,
                                "width": mainDescriptionBackIMGWidth + "px"
                            }, 2000, "easeInQuart", function () {
                                $("#contents1 #subDescriptionBackIMG img").animate({
                                    "opacity": 1,
                                    "width": subDescriptionBackIMGWidth + "px"
                                }, 2000, "easeInQuart", function () {
                                    $("#contents1 #mainDescriptionBackIMG img, #contents1 #subDescriptionBackIMG img").delay(2000).fadeTo(1000, 0);
                                    $("#logoSVG").delay(2000).fadeOut(1500);
                                    $("header h1#mainLogo").delay(2000).fadeTo(1500, 1);
                                    $("#contents1 #myPortfolio").delay(2000).fadeOut(1000, function () {
                                        $("#contents1 #kojiyamauchi").show("drop", "", 500, function () {
                                            setTimeout(function () {
                                                $("a").removeClass("introduction");
                                            }, 2000);
                                            $("#motionSkipBox").delay(2000).animate({
                                                "right": -motionSkipBoxWidth + "px"
                                            }, 1000, "easeInExpo", function () {
                                                $(this).hide();
                                            });
                                            setTimeout(function () {
                                                $('#motionSkip').removeClass('comp');
                                            }, 2000);
                                            //copyrightAction!!
                                            $("footer p").textillate({
                                                loop: true,
                                                minDisplayTime: 2000,
                                                initialDelay: 2000,
                                                autoStart: true,
                                                in: {
                                                    effect: "flash",
                                                    delayScale: 1.5,
                                                    delay: 100,
                                                    sequence: true,
                                                },
                                                out: {
                                                    effect: "flash",
                                                    delayScale: 1.0,
                                                    delay: 150,
                                                    sequence: true,
                                                }
                                            });
                                            //copyrightActionEnd
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
        //IntroEND.
    }
    //if Safari or Chrome or FireFox or iPhone5~ Script End.===============================================================================================

    console.log('Life Goes On!!!');

}); //finished. Good Job!!!
