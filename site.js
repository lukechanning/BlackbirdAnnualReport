//Make that heart beat

(function pulse(back) {
$('#heart .beat').animate(
    {
        width: (back) ? $('#heart .beat').width() + 5 : $('#heart .beat').width() - 5           
    }, 1000);
$('#heart').animate(
    {          
        'font-size': (back) ? '10rem' : '10.05rem',
        opacity: (back) ? 1 : 0.9
    }, 1000, function(){pulse(!back)});
})(false);

//Introduce LazyLine Painter
/*
 * Lazy Line Painter
 * SVG Stroke animation.
 *
 * https://github.com/camoconnell/lazy-line-painter
 * http://www.camoconnell.com
 *
 * Licensed under the MIT license.
 *
 */
(function(e){var g={init:function(a){return this.each(function(){var b=e(this),c=b.data("lazyLinePainter");b.addClass("lazy-line");if(!c){var c=e.extend({width:null,height:null,strokeWidth:2,strokeColor:"#000",strokeOverColor:null,strokeCap:"round",strokeJoin:"round",strokeOpacity:1,arrowEnd:"none",onComplete:null,onStart:null,delay:null,overrideKey:null,drawSequential:!0,speedMultiplier:1,reverse:!1,responsive:!1},a),d=c.overrideKey?c.overrideKey:b.attr("id").replace("#",""),f=c.svgData[d].dimensions.width,
l=c.svgData[d].dimensions.height;c.svgData=c.svgData[d].strokepath;null===c.width&&(c.width=f);null===c.height&&(c.height=l);c.responsive||b.css({width:c.width,height:c.height});d="0 0 "+f+" "+l;f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttributeNS(null,"viewBox",d);f.setAttribute("xmlns","http://www.w3.org/2000/svg");c.svg=e(f);b.append(c.svg);b.data("lazyLinePainter",c)}})},paint:function(){return this.each(function(){var a=e(this).data("lazyLinePainter"),b=function(){a.paths=
[];a.longestDuration=0;for(var b=a.playhead=0,d=0,f=0,d=0;d<a.svgData.length;d++)b=a.svgData[d].duration*a.speedMultiplier,f+=b;for(d=0;d<a.svgData.length;d++){var e=m(a,d),h=e.getTotalLength();e.style.strokeDasharray=h+" "+h;e.style.strokeDashoffset=h;e.style.display="block";e.getBoundingClientRect();b=a.svgData[d].duration*a.speedMultiplier;b>a.longestDuration&&(a.longestDuration=b);var g;g=a.reverse?f-=b:a.playhead;a.paths.push({duration:b,drawStartTime:g,path:e,length:h});a.playhead+=b}a.totalDuration=
a.drawSequential?a.playhead:a.longestDuration;a.rAF=requestAnimationFrame(function(b){k(b,a)});if(null!==a.onStart)a.onStart()};null===a.delay?b():setTimeout(b,a.delay)})},pauseResume:function(){return this.each(function(){var a=e(this).data("lazyLinePainter");a.paused?(a.paused=!1,requestAnimationFrame(function(b){n(b,a)})):(a.paused=!0,cancelAnimationFrame(a.rAF))})},erase:function(){return this.each(function(){var a=e(this).data("lazyLinePainter");a.startTime=null;a.elapsedTime=null;cancelAnimationFrame(a.rAF);
a.svg.empty()})},destroy:function(){return this.each(function(){var a=e(this);a.removeData("lazyLinePainter");a.remove()})}},n=function(a,b){b.startTime=a-b.elapsedTime;requestAnimationFrame(function(a){k(a,b)})},k=function(a,b){b.startTime||(b.startTime=a);b.elapsedTime=a-b.startTime;for(var c=0;c<b.paths.length;c++){var d;b.drawSequential?(d=b.elapsedTime-b.paths[c].drawStartTime,0>d&&(d=0)):d=b.elapsedTime;d<b.paths[c].duration&&0<d?(d=d/b.paths[c].duration*b.paths[c].length,b.paths[c].path.style.strokeDashoffset=
b.reverse||b.svgData[c].reverse?-b.paths[c].length+d:b.paths[c].length-d):d>b.paths[c].duration&&(b.paths[c].path.style.strokeDashoffset=0)}if(b.elapsedTime<b.totalDuration)b.rAF=requestAnimationFrame(function(a){k(a,b)});else if(null!==b.onComplete)b.onComplete()},m=function(a,b){var c=document.createElementNS("http://www.w3.org/2000/svg","path"),d=e(c);a.svg.append(d);d.attr(p(a,a.svgData[b]));return c},p=function(a,b){return{d:b.path,stroke:b.strokeColor?b.strokeColor:a.strokeColor,"fill-opacity":0,
"stroke-opacity":b.strokeOpacity?b.strokeOpacity:a.strokeOpacity,"stroke-width":b.strokeWidth?b.strokeWidth:a.strokeWidth,"stroke-linecap":b.strokeCap?b.strokeCap:a.strokeCap,"stroke-linejoin":b.strokeJoin?b.strokeJoin:a.strokeJoin}};e.fn.lazylinepainter=function(a){if(g[a])return g[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"!==typeof a&&a)console.log("opps - issue finding method");else return g.init.apply(this,arguments)}})(jQuery);

//PUll the trigger on SVG Animation

/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 
var pathObj = {
    "tree": {
        "strokepath": [
            {
                "path": "M294.651,71.501l1.784-1.625",
                "duration": 600
            },
            {
                "path": "M296.436,69.876   c8.757-7.938,13.757-19.258,13.757-31.059c0-11.805-5-23.131-13.757-31.062l-1.784-1.635l-1.794,1.628   c-8.747,7.932-13.764,19.258-13.764,31.062c0,11.801,5.017,23.121,13.764,31.06l1.794,1.631",
                "duration": 600
            },
            {
                "path": "M193.639,115.751c2.49-11.539,0-23.668-6.86-33.274   c-6.864-9.603-17.511-15.899-29.246-17.285l-2.404-0.285l-0.511,2.364c-2.507,11.539,0,23.665,6.844,33.274   c6.867,9.609,17.527,15.919,29.255,17.289l2.404,0.279L193.639,115.751",
                "duration": 600
            },
            {
                "path": "M105.902,171.712l-0.471-2.354   c-2.354-11.585-9.514-21.686-19.66-27.727c-10.09-6.012-22.511-7.497-33.729-4.082l-2.314,0.707l0.481,2.367   c2.351,11.579,9.52,21.679,19.652,27.72c6.499,3.873,13.907,5.922,21.431,5.922c4.171,0,8.299-0.624,12.298-1.84",
                "duration": 600
            },
            {
                "path": "M103.591,172.425l2.312-0.713",
                "duration": 600
            },
            {
                "path": "M71.905,232.68l-1.194-2.105   c-5.833-10.266-15.783-17.634-27.306-20.223c-11.496-2.58-23.721-0.129-33.324,6.642l-1.97,1.386l1.19,2.106   c5.826,10.262,15.78,17.63,27.306,20.216c4.039,0.902,8.164,1.22,12.265,0.915l0,0c7.55-0.557,14.828-3.17,21.055-7.537   L71.905,232.68",
                "duration": 600
            },
            {
                "path": "M82.194,314.033l-1.847-1.552   c-9.059-7.593-20.916-11.032-32.644-9.434c-11.698,1.582-22.239,8.081-28.927,17.829l-1.366,1.989l1.854,1.552   c7.995,6.711,18.131,10.199,28.529,9.789c1.366-0.061,2.742-0.166,4.102-0.365c11.695-1.585,22.233-8.084,28.927-17.826   L82.194,314.033",
                "duration": 600
            },
            {
                "path": "M202.134,368.366l-2.324-0.696   c-11.231-3.35-23.646-1.791-33.715,4.264c-10.104,6.082-17.209,16.234-19.503,27.82l-0.468,2.387l2.321,0.697   c6.472,1.936,13.386,2.287,19.987,1.001l0,0c4.841-0.929,9.467-2.687,13.725-5.259c10.103-6.082,17.219-16.241,19.503-27.833   L202.134,368.366",
                "duration": 600
            },
            {
                "path": "M309.828,278.322l1.107-1.84",
                "duration": 600
            },
            {
                "path": "M310.936,276.481   c7.494-12.395,9.443-27.475,5.292-41.358c-4.132-13.894-14.006-25.449-27.07-31.726l-1.937-0.935l-1.107,1.84   c-7.504,12.398-9.437,27.481-5.295,41.368c4.135,13.88,14.009,25.439,27.074,31.719l1.937,0.932",
                "duration": 600
            },
            {
                "path": "M283.961,176.629l1.874-0.945",
                "duration": 600
            },
            {
                "path": "M285.835,175.684   c12.763-6.287,22.315-17.723,26.234-31.394c3.92-13.661,1.863-28.423-5.623-40.52l-1.107-1.793l-1.884,0.932   c-12.743,6.3-22.312,17.729-26.222,31.401c-3.913,13.661-1.86,28.433,5.627,40.513l1.107,1.807",
                "duration": 600
            },
            {
                "path": "M254.775,305.519l-0.739-2.126   c-5.033-14.334-16.834-26.095-32.392-32.236c-15.465-6.124-33.702-6.131-49.439-0.123l-2.348,0.898l0.74,2.119   c5.033,14.348,16.834,26.109,32.385,32.25c9.397,3.733,19.829,5.278,30.151,4.456l0,0c6.642-0.53,13.134-1.976,19.285-4.344   L254.775,305.519",
                "duration": 600
            },
            {
                "path": "M184.089,328.914l1.449-1.93l-1.801-1.625   c-10.925-9.881-25.134-14.615-39.965-13.156c-14.543,1.445-27.882,9.006-36.6,20.75l-1.442,1.937l1.788,1.625   c10.322,9.323,23.632,14.046,37.485,13.349l0,0c0.822-0.046,1.651-0.099,2.487-0.191   C162.032,348.232,175.372,340.666,184.089,328.914",
                "duration": 600
            },
            {
                "path": "M167.059,234.384l-0.816-2.281   c-4.944-13.764-15.508-24.875-29.01-30.469c-10.369-4.308-21.603-5.149-32.458-2.424c-3.29,0.819-6.526,1.976-9.596,3.435   l-2.188,1.018",
                "duration": 600
            },
            {
                "path": "M92.99,203.663l0.809,2.274   c4.944,13.757,15.511,24.875,29.003,30.486c10.385,4.304,21.609,5.133,32.469,2.424c3.299-0.835,6.525-1.99,9.609-3.438   l2.178-1.025",
                "duration": 600
            },
            {
                "path": "M141.368,278.743l-1.439-1.86   c-8.711-11.307-21.851-18.446-36.06-19.593c-10.906-0.889-21.593,1.698-30.85,7.471c-2.812,1.75-5.471,3.796-7.892,6.058   l-1.711,1.615l1.433,1.86c8.701,11.294,21.848,18.453,36.066,19.606c10.906,0.889,21.576-1.704,30.851-7.477   c2.805-1.757,5.468-3.803,7.885-6.071L141.368,278.743",
                "duration": 600
            },
            {
                "path": "M180.18,174.653l-0.03-2.417   c-0.143-14.626-6.489-28.583-17.412-38.301c-9.43-8.386-21.566-13.058-34.169-13.141c-1.957-0.013-3.939,0.09-5.882,0.292   l-2.404,0.259l0.02,2.41c0.136,14.623,6.486,28.583,17.421,38.321c9.43,8.372,21.559,13.044,34.156,13.127c0.006,0,0.006,0,0.006,0   c1.95,0.02,3.946-0.083,5.889-0.292L180.18,174.653",
                "duration": 600
            },
            {
                "path": "M251.775,127.913   c8.962-11.197,12.65-25.608,10.117-39.551c-2.534-13.957-11.082-26.274-23.439-33.838l-2.046-1.25l-1.479,1.84   c-8.959,11.198-12.653,25.608-10.126,39.558c2.533,13.947,11.075,26.271,23.449,33.832l2.042,1.263L251.775,127.913",
                "duration": 600
            },
            {
                "path": "M249.066,246.526   c-0.401-12.235-7.01-23.761-18.127-31.609c-11.231-7.938-25.771-11.403-40.403-9.759l-2.152,0.249l0.053,1.82   c0.421,12.232,7.023,23.754,18.138,31.62c10.73,7.57,24.388,11.101,38.463,9.927l0,0c0.653-0.053,1.296-0.123,1.943-0.176   l2.152-0.258L249.066,246.526",
                "duration": 600
            },
            {
                "path": "M249.735,189.66l0.322-1.671   c2.139-11.257-1.535-23.148-10.08-32.621c-8.631-9.536-21.201-15.687-34.909-17.203l-2.026-0.202l-0.312,1.655   c-2.146,11.267,1.529,23.157,10.07,32.624c8.246,9.125,19.988,15.15,33.112,16.977l0,0c0.59,0.089,1.197,0.156,1.807,0.219   L249.735,189.66",
                "duration": 600
            },
            {
                "path": "M406.896,118.112l-0.504-2.361   c-2.521-11.539,0-23.668,6.844-33.274c6.877-9.603,17.521-15.899,29.252-17.285l2.407-0.285l0.504,2.364   c2.507,11.539,0.007,23.665-6.851,33.274c-6.877,9.609-17.514,15.919-29.252,17.289",
                "duration": 600
            },
            {
                "path": "M409.296,117.833l-2.407,0.279",
                "duration": 600
            },
            {
                "path": "M494.114,171.712l0.478-2.354   c2.348-11.585,9.51-21.686,19.656-27.727c10.08-6.012,22.501-7.497,33.729-4.082l2.321,0.707l-0.484,2.367   c-2.341,11.579-9.503,21.679-19.663,27.72c-6.479,3.873-13.899,5.922-21.427,5.922c-4.158,0-8.31-0.624-12.302-1.84   L494.114,171.712",
                "duration": 600
            },
            {
                "path": "M528.108,232.68l1.213-2.105   c5.83-10.266,15.777-17.634,27.303-20.223c11.493-2.58,23.715-0.129,33.317,6.642l1.977,1.386l-1.2,2.106   c-5.836,10.262-15.777,17.63-27.31,20.216c-4.039,0.902-8.163,1.22-12.255,0.915l0,0c-7.561-0.557-14.849-3.17-21.082-7.537   L528.108,232.68",
                "duration": 600
            },
            {
                "path": "M517.829,314.033l1.844-1.552   c9.059-7.593,20.916-11.032,32.647-9.434c11.691,1.582,22.223,8.081,28.92,17.829l1.366,1.989l-1.843,1.552   c-8.012,6.711-18.131,10.199-28.543,9.789c-1.347-0.061-2.732-0.166-4.099-0.365c-11.698-1.585-22.242-8.084-28.934-17.826   L517.829,314.033",
                "duration": 600
            },
            {
                "path": "M397.883,368.366l2.328-0.696   c11.227-3.35,23.648-1.791,33.715,4.264c10.106,6.082,17.216,16.234,19.497,27.82l0.464,2.387l-2.314,0.697   c-6.479,1.936-13.389,2.287-19.994,1.001l0,0c-4.848-0.929-9.45-2.687-13.708-5.259c-10.119-6.082-17.222-16.241-19.517-27.833   L397.883,368.366",
                "duration": 600
            },
            {
                "path": "M345.241,305.519l0.749-2.126   c5.027-14.334,16.831-26.095,32.389-32.236c15.459-6.124,33.702-6.131,49.426-0.123l2.354,0.898l-0.743,2.119   c-5.02,14.348-16.831,26.109-32.382,32.25c-9.391,3.733-19.829,5.278-30.154,4.456l0,0c-6.638-0.53-13.117-1.976-19.285-4.344   L345.241,305.519",
                "duration": 600
            },
            {
                "path": "M414.481,326.984l1.791-1.625   c10.942-9.881,25.147-14.615,39.976-13.156c14.557,1.445,27.879,9.006,36.613,20.75l1.438,1.937l-1.804,1.625   c-10.318,9.323-23.622,14.046-37.481,13.349c0.006,0,0.006,0,0,0c-0.822-0.046-1.658-0.099-2.48-0.191   c-14.55-1.439-27.886-9.006-36.606-20.758L414.481,326.984",
                "duration": 600
            },
            {
                "path": "M432.964,234.384l0.81-2.281   c4.953-13.764,15.511-24.875,29-30.469c10.385-4.308,21.619-5.149,32.469-2.424c3.296,0.819,6.525,1.976,9.603,3.435l2.182,1.018   l-0.81,2.274c-4.94,13.757-15.498,24.875-29.013,30.486c-10.359,4.304-21.6,5.133-32.442,2.424   c-3.303-0.835-6.532-1.99-9.609-3.438L432.964,234.384",
                "duration": 600
            },
            {
                "path": "M458.655,278.743l1.433-1.86   c8.707-11.307,21.851-18.446,36.069-19.593c10.902-0.889,21.586,1.698,30.85,7.471c2.799,1.75,5.458,3.796,7.879,6.058l1.724,1.615   l-1.445,1.86c-8.7,11.294-21.845,18.453-36.056,19.606c-10.909,0.889-21.586-1.704-30.857-7.477   c-2.805-1.757-5.465-3.803-7.892-6.071",
                "duration": 600
            },
            {
                "path": "M460.359,280.351l-1.704-1.608",
                "duration": 600
            },
            {
                "path": "M419.834,174.653l0.026-2.417   c0.152-14.626,6.499-28.583,17.421-38.301c9.431-8.386,21.566-13.058,34.159-13.141c1.963-0.013,3.939,0.09,5.89,0.292l2.407,0.259   l-0.026,2.41c-0.146,14.623-6.486,28.583-17.408,38.321c-9.438,8.372-21.573,13.044-34.16,13.127l0,0   c-1.976,0.02-3.952-0.083-5.901-0.292L419.834,174.653",
                "duration": 600
            },
            {
                "path": "M349.73,129.767l-1.479-1.854   c-8.966-11.197-12.653-25.608-10.12-39.551c2.533-13.957,11.081-26.274,23.437-33.838l2.049-1.25l1.485,1.84   c8.953,11.198,12.64,25.608,10.113,39.558c-2.526,13.947-11.081,26.271-23.442,33.832",
                "duration": 600
            },
            {
                "path": "M351.773,128.503l-2.043,1.263",
                "duration": 600
            },
            {
                "path": "M353.04,248.599l-2.149-0.258l0.061-1.814   c0.424-12.235,7.022-23.761,18.131-31.609c11.221-7.938,25.771-11.403,40.413-9.759l2.148,0.249l-0.053,1.82   c-0.425,12.232-7.023,23.754-18.145,31.62c-10.73,7.57-24.378,11.101-38.45,9.927l0,0   C354.333,248.722,353.689,248.652,353.04,248.599",
                "duration": 600
            },
            {
                "path": "M329.969,194.644l-0.133-1.84",
                "duration": 600
            },
            {
                "path": "M329.836,192.804   c-0.829-12.487,4.722-24.895,15.226-34.021c10.598-9.208,25.028-14.208,40.082-14.049l2.215,0.04l0.133,1.84   c0.849,12.494-4.688,24.896-15.2,34.014c-10.14,8.81-23.661,13.801-38.118,14.042l0,0c-0.65,0.01-1.326,0.01-1.989,0l-2.215-0.026",
                "duration": 600
            },
            {
                "path": "M222.078,594.127   c10.2,2.666,39.793-1.665,77.945-27.548c38.128,25.883,67.738,23.423,77.944,20.757c-36.646-16.871-44.524-60.136-45.446-104.541   c-0.511-25.89-1.188-53.073,2.719-73.253c6.373-32.966,26.825-49.942,47.874-63.81c6.088-4.191-0.312-14.377-5.186-12.587   c-1.088,0.199-2.335,0.604-3.614,1.101c-11.261,3.647-45.314,17.116-74.298,49.937c-28.997-32.82-63.054-46.289-74.297-49.937   c-1.3-0.497-2.534-0.901-3.621-1.101c-4.868-1.79-11.274,8.396-5.169,12.587c21.032,13.86,41.488,30.83,47.871,63.81   c3.896,20.18,3.246,47.363,2.709,73.253c-0.918,44.405-8.787,87.656-45.43,104.541",
                "duration": 1300
            },
            {
                "path": "M306.811,305.134   c11.712,0,14.404,9.489,14.404,21.194c0,11.719-9.483,21.208-21.198,21.208s-21.201-9.489-21.201-21.208   c0-11.705,9.493-21.194,21.201-21.194",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 600,
            "height": 600
        }
    }
}; 
 
//Add Appear Script
function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
 
/* 
Make that animation happen! 
 */ 
 
$(window).scroll(function() {
     if( isScrolledIntoView('#tree') ) {
             $('#tree').lazylinepainter( 
             {
                "svgData": pathObj,
                "strokeWidth": 3,
                "strokeColor": "#FFF",
                "responsive": true,
            }).lazylinepainter('paint');
    } else {
     
    }
});
 
//Pull the trigger on Slick

$('.success-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.success-slider',
  dots: true,
  appendArrows: true,
  focusOnSelect: true
});

//Default theme JS

$.extend($.easing,
{
    def: 'easeOutQuad',
    easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
});

(function( $ ) {

    var settings;
    var disableScrollFn = false;
    var navItems;
    var navs = {}, sections = {};

    $.fn.navScroller = function(options) {
        settings = $.extend({
            scrollToOffset: 170,
            scrollSpeed: 800,
            activateParentNode: true,
        }, options );
        navItems = this;

        //attatch click listeners
    	navItems.on('click', function(event){
    		event.preventDefault();
            var navID = $(this).attr("href").substring(1);
            disableScrollFn = true;
            activateNav(navID);
            populateDestinations(); //recalculate these!
        	$('html,body').animate({scrollTop: sections[navID] - settings.scrollToOffset},
                settings.scrollSpeed, "easeInOutExpo", function(){
                    disableScrollFn = false;
                }
            );
    	});

        //populate lookup of clicable elements and destination sections
        populateDestinations(); //should also be run on browser resize, btw

        // setup scroll listener
        $(document).scroll(function(){
            if (disableScrollFn) { return; }
            var page_height = $(window).height();
            var pos = $(this).scrollTop();
            for (i in sections) {
                if ((pos + settings.scrollToOffset >= sections[i]) && sections[i] < pos + page_height){
                    activateNav(i);
                }
            }
        });
    };

    function populateDestinations() {
        navItems.each(function(){
            var scrollID = $(this).attr('href').substring(1);
            navs[scrollID] = (settings.activateParentNode)? this.parentNode : this;
            sections[scrollID] = $(document.getElementById(scrollID)).offset().top;
        });
    }

    function activateNav(navID) {
        for (nav in navs) { $(navs[nav]).removeClass('active'); }
        $(navs[navID]).addClass('active');
    }
})( jQuery );


$(document).ready(function (){

    $('nav li a').navScroller();

    //section divider icon click gently scrolls to reveal the section
	$(".sectiondivider").on('click', function(event) {
    	$('html,body').animate({scrollTop: $(event.target.parentNode).offset().top - 50}, 400, "linear");
	});

    //links going to other sections nicely scroll
	$(".container a").each(function(){
        if ($(this).attr("href").charAt(0) == '#'){
            $(this).on('click', function(event) {
        		event.preventDefault();
                var target = $(event.target).closest("a");
                var targetHight =  $(target.attr("href")).offset().top
            	$('html,body').animate({scrollTop: targetHight - 170}, 800, "easeInOutExpo");
            });
        }
	});

});

/**
 * photoset-grid - v1.0.1
 * 2014-12-03
 * jQuery plugin to arrange images into a flexible grid
 * http://stylehatch.github.com/photoset-grid/
 *
 * Copyright 2014 Jonathan Moore - Style Hatch
 */
!function(a,b,c,d){"use strict";function e(b,c){this.element=b,this.options=a.extend({},g,c),this._defaults=g,this._name=f,this.init()}var f="photosetGrid",g={width:"100%",gutter:"0px",highresLinks:!1,lowresWidth:500,rel:"",borderActive:!1,borderWidth:"5px",borderColor:"#000000",borderRadius:"0",borderRemoveDouble:!1,onInit:function(){},onComplete:function(){}};e.prototype={init:function(){this.options.onInit(),this._setupRows(this.element,this.options),this._setupColumns(this.element,this.options)},_callback:function(a){this.options.onComplete(a)},_setupRows:function(b,c){if(c.layout)this.layout=c.layout;else if(a(b).attr("data-layout"))this.layout=a(b).attr("data-layout");else{for(var d="",e=1,f=0;f<a(b).find("img").length;f++)d+=e.toString();this.layout=d}this.rows=this.layout.split("");for(var g in this.rows)this.rows[g]=parseInt(this.rows[g],10);var h=a(b).find("img"),i=0;a.each(this.rows,function(a,b){var c=i,d=i+b;h.slice(c,d).wrapAll('<div class="photoset-row cols-'+b+'"></div>'),i=d}),a(b).find(".photoset-row:not(:last-child)").css({"margin-bottom":c.gutter})},_setupColumns:function(c,d){var e=this,f=function(e){function f(){var b=a(c).width().toString();b!==a(c).attr("data-width")&&(g.each(function(){var b=a(this).find("img:eq(0)");a(this).find("img").each(function(){var c=a(this);c.attr("height")<b.attr("height")&&(b=a(this)),parseInt(c.css("width"),10)>d.lowresWidth&&c.attr("data-highres")&&c.attr("src",c.attr("data-highres"))});var c=b.attr("height")*parseInt(b.css("width"),10)/b.attr("width"),e=Math.floor(.025*c);a(this).height(c-e),d.borderActive&&a(this).find(".photoset-content-border").each(function(){a(this).css({height:c-e})}),a(this).find("img").each(function(){var b=a(this).attr("height")*parseInt(a(this).css("width"),10)/a(this).attr("width"),d=.5*(c-b)+"px";a(this).css({"margin-top":d})})}),a(c).attr("data-width",b))}var g=a(c).find(".photoset-row"),h=a(c).find("img");d.highresLinks?(h.each(function(){var b;b=a(this).attr(a(this).attr("data-highres")?"data-highres":"src"),a(this).wrapAll('<a href="'+b+'" class="photoset-cell highres-link" />'),d.borderActive&&a(this).wrapAll('<span class="photoset-content-border" />')}),d.rel&&h.parent().attr("rel",d.rel)):h.each(function(){d.borderActive?(a(this).wrapAll('<div class="photoset-cell photoset-cell--border" />'),a(this).wrapAll('<div class="photoset-content-border" />')):a(this).wrapAll('<div class="photoset-cell" />')});var i=a(c).find(".photoset-cell"),j=a(c).find(".cols-1 .photoset-cell"),k=a(c).find(".cols-2 .photoset-cell"),l=a(c).find(".cols-3 .photoset-cell"),m=a(c).find(".cols-4 .photoset-cell"),n=a(c).find(".cols-5 .photoset-cell"),o=a(c).find(".photoset-content-border");a(c).css({width:d.width}),g.css({clear:"left",display:"block",overflow:"hidden"}),i.css({"float":"left",display:"block","line-height":"0","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),h.css({width:"100%",height:"auto"}),d.borderActive&&o.css({display:"block",border:d.borderWidth+" solid "+d.borderColor,"border-radius":d.borderRadius,overflow:"hidden","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),e&&h.each(function(){a(this).attr("height",a(this).height()),a(this).attr("width",a(this).width())}),j.css({width:"100%"}),k.css({width:"50%"}),l.css({width:"33.3%"}),m.css({width:"25%"}),n.css({width:"20%"});var p=parseInt(d.gutter,10);a(c).find(".photoset-cell:not(:last-child)").css({"padding-right":p/2+"px"}),a(c).find(".photoset-cell:not(:first-child)").css({"padding-left":p/2+"px"}),d.borderRemoveDouble&&(a(c).find(".photoset-row").not(":eq(0)").find(".photoset-content-border").css({"border-top":"none"}),a(c).find(".photoset-row").not(".cols-1").find(".photoset-content-border").not(":eq(0)").css({"border-left":"none"})),f(),a(b).on("resize",function(){f()})},g=!0,h=!0;a(c).find("img").each(function(){h&=!!a(this).attr("height")&!!a(this).attr("width")}),g=!h,g?a(c).imagesLoaded(function(){f(g),e._callback(c)}):(f(g),e._callback(c))}},a.fn[f]=function(b){return this.each(function(){a.data(this,"plugin_"+f)||a.data(this,"plugin_"+f,new e(this,b))})};var h="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";a.fn.imagesLoaded=function(b){function c(){var c=a(m),d=a(n);i&&(n.length?i.reject(k,c,d):i.resolve(k)),a.isFunction(b)&&b.call(g,k,c,d)}function e(a){f(a.target,"error"===a.type)}function f(b,d){b.src!==h&&-1===a.inArray(b,l)&&(l.push(b),d?n.push(b):m.push(b),a.data(b,"imagesLoaded",{isBroken:d,src:b.src}),j&&i.notifyWith(a(b),[d,k,a(m),a(n)]),k.length===l.length&&(setTimeout(c),k.unbind(".imagesLoaded",e)))}var g=this,i=a.isFunction(a.Deferred)?a.Deferred():0,j=a.isFunction(i.notify),k=g.find("img").add(g.filter("img")),l=[],m=[],n=[];return a.isPlainObject(b)&&a.each(b,function(a,c){"callback"===a?b=c:i&&i[a](c)}),k.length?k.bind("load.imagesLoaded error.imagesLoaded",e).each(function(b,c){var e=c.src,g=a.data(c,"imagesLoaded");return g&&g.src===e?void f(c,g.isBroken):c.complete&&c.naturalWidth!==d?void f(c,0===c.naturalWidth||0===c.naturalHeight):void((c.readyState||c.complete)&&(c.src=h,c.src=e))}):c(),i?i.promise(g):g};var i,j,k,l=a.event,m={_:0},n=0;i=l.special.throttledresize={setup:function(){a(this).on("resize",i.handler)},teardown:function(){a(this).off("resize",i.handler)},handler:function(b,c){var d=this,e=arguments;j=!0,k||(setInterval(function(){n++,(n>i.threshold&&j||c)&&(b.type="throttledresize",l.dispatch.apply(d,e),j=!1,n=0),n>9&&(a(m).stop(),k=!1,n=0)},30),k=!0)},threshold:0}}(jQuery,window,document);

$('.photoset-grid').photosetGrid({
    // Set the gutter between columns and rows
      gutter: '10px',

});

// ----------------------------------------------------------------------------------------------------
// ScrollMe
// A jQuery plugin for adding simple scrolling effects to web pages
// http://scrollme.nckprsn.com
// ----------------------------------------------------------------------------------------------------
var scrollme=(function(a){var d={};var c=a(document);var b=a(window);d.body_height=0;d.viewport_height=0;d.viewport_top=0;d.viewport_bottom=0;d.viewport_top_previous=-1;d.elements=[];d.elements_in_view=[];d.property_defaults={opacity:1,translatex:0,translatey:0,translatez:0,rotatex:0,rotatey:0,rotatez:0,scale:1,scalex:1,scaley:1,scalez:1};d.scrollme_selector=".scrollme";d.animateme_selector=".animateme";d.update_interval=10;d.easing_functions={linear:function(e){return e},easeout:function(e){return e*e*e},easein:function(e){e=1-e;return 1-(e*e*e)},easeinout:function(e){if(e<0.5){return(4*e*e*e)}else{e=1-e;return 1-(4*e*e*e)}}};d.init_events=["ready","page:load","page:change"];d.init_if=function(){return true};d.init=function(){if(!d.init_if()){return false}d.init_elements();d.on_resize();b.on("resize orientationchange",function(){d.on_resize()});b.load(function(){setTimeout(function(){d.on_resize()},100)});setInterval(d.update,d.update_interval);return true};d.init_elements=function(){a(d.scrollme_selector).each(function(){var e={};e.element=a(this);var f=[];a(this).find(d.animateme_selector).addBack(d.animateme_selector).each(function(){var h={};h.element=a(this);h.when=h.element.data("when");h.from=h.element.data("from");h.to=h.element.data("to");if(h.element.is("[data-crop]")){h.crop=h.element.data("crop")}else{h.crop=true}if(h.element.is("[data-easing]")){h.easing=d.easing_functions[h.element.data("easing")]}else{h.easing=d.easing_functions.easeout}var g={};if(h.element.is("[data-opacity]")){g.opacity=h.element.data("opacity")}if(h.element.is("[data-translatex]")){g.translatex=h.element.data("translatex")}if(h.element.is("[data-translatey]")){g.translatey=h.element.data("translatey")}if(h.element.is("[data-translatez]")){g.translatez=h.element.data("translatez")}if(h.element.is("[data-rotatex]")){g.rotatex=h.element.data("rotatex")}if(h.element.is("[data-rotatey]")){g.rotatey=h.element.data("rotatey")}if(h.element.is("[data-rotatez]")){g.rotatez=h.element.data("rotatez")}if(h.element.is("[data-scale]")){g.scale=h.element.data("scale")}if(h.element.is("[data-scalex]")){g.scalex=h.element.data("scalex")}if(h.element.is("[data-scaley]")){g.scaley=h.element.data("scaley")}if(h.element.is("[data-scalez]")){g.scalez=h.element.data("scalez")}h.properties=g;f.push(h)});e.effects=f;d.elements.push(e)})};d.update=function(){window.requestAnimationFrame(function(){d.update_viewport_position();if(d.viewport_top_previous!=d.viewport_top){d.update_elements_in_view();d.animate()}d.viewport_top_previous=d.viewport_top})};d.animate=function(){var C=d.elements_in_view.length;for(var A=0;A<C;A++){var h=d.elements_in_view[A];var f=h.effects.length;for(var D=0;D<f;D++){var w=h.effects[D];switch(w.when){case"view":case"span":var r=h.top-d.viewport_height;var n=h.bottom;break;case"exit":var r=h.bottom-d.viewport_height;var n=h.bottom;break;default:var r=h.top-d.viewport_height;var n=h.top;break}if(w.crop){if(r<0){r=0}if(n>(d.body_height-d.viewport_height)){n=d.body_height-d.viewport_height}}var g=(d.viewport_top-r)/(n-r);var x=w.from;var j=w.to;var o=j-x;var k=(g-x)/o;var v=w.easing(k);var l=d.animate_value(g,v,x,j,w,"opacity");var t=d.animate_value(g,v,x,j,w,"translatey");var u=d.animate_value(g,v,x,j,w,"translatex");var s=d.animate_value(g,v,x,j,w,"translatez");var B=d.animate_value(g,v,x,j,w,"rotatex");var z=d.animate_value(g,v,x,j,w,"rotatey");var y=d.animate_value(g,v,x,j,w,"rotatez");var E=d.animate_value(g,v,x,j,w,"scale");var q=d.animate_value(g,v,x,j,w,"scalex");var p=d.animate_value(g,v,x,j,w,"scaley");var m=d.animate_value(g,v,x,j,w,"scalez");if("scale" in w.properties){q=E;p=E;m=E}w.element.css({opacity:l,transform:"translate3d( "+u+"px , "+t+"px , "+s+"px ) rotateX( "+B+"deg ) rotateY( "+z+"deg ) rotateZ( "+y+"deg ) scale3d( "+q+" , "+p+" , "+m+" )"})}}};d.animate_value=function(i,h,j,k,n,m){var g=d.property_defaults[m];if(!(m in n.properties)){return g}var e=n.properties[m];var f=(k>j)?true:false;if(i<j&&f){return g}if(i>k&&f){return e}if(i>j&&!f){return g}if(i<k&&!f){return e}var l=g+(h*(e-g));switch(m){case"opacity":l=l.toFixed(2);break;case"translatex":l=l.toFixed(0);break;case"translatey":l=l.toFixed(0);break;case"translatez":l=l.toFixed(0);break;case"rotatex":l=l.toFixed(1);break;case"rotatey":l=l.toFixed(1);break;case"rotatez":l=l.toFixed(1);break;case"scale":l=l.toFixed(3);break;default:break}return l};d.update_viewport_position=function(){d.viewport_top=b.scrollTop();d.viewport_bottom=d.viewport_top+d.viewport_height};d.update_elements_in_view=function(){d.elements_in_view=[];var f=d.elements.length;for(var e=0;e<f;e++){if((d.elements[e].top<d.viewport_bottom)&&(d.elements[e].bottom>d.viewport_top)){d.elements_in_view.push(d.elements[e])}}};d.on_resize=function(){d.update_viewport();d.update_element_heights();d.update_viewport_position();d.update_elements_in_view();d.animate()};d.update_viewport=function(){d.body_height=c.height();d.viewport_height=b.height()};d.update_element_heights=function(){var g=d.elements.length;for(var f=0;f<g;f++){var h=d.elements[f].element.outerHeight();var e=d.elements[f].element.offset();d.elements[f].height=h;d.elements[f].top=e.top;d.elements[f].bottom=e.top+h}};c.on(d.init_events.join(" "),function(){d.init()});return d})(jQuery);
