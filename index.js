//-------------------------------------------------------------------

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
/*** globalCompositeOperation
 * how shapes stack, interact, and overlap
 * similar to layers in photoshop
 * around 26 different settings
 * 'destination-over' - drawing done backwards(not reverse)
 */
ctx.globalCompositeOperation='destination-over';
let number = 0;
let scale = 10;

// getting random number between 0 and 360
hue = Math.random() * 360;

function drawFlower(){
    // use x to change shape of flower
    // telling how far it should skip every step
    // 777 is super cool with 20 for radius and number for radius
    // 0.04 cool snail
    // 0.09 cool too
    // 137.5 with radius 5 cool
    let x = 137.5; 
    let angle = number * x;
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.sin(angle) + canvas.width/2;
    let positionY = radius * Math.cos(angle) + canvas.height/2;
    
    // to add rainbow effect
    ctx.fillStyle = 'hsl('+ hue +',100%,50%)';
    // ctx.fillStyle = 'grey';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.beginPath();
    // changing 20 to number creates out of screen effect
    // us radius 5 for more sepetart dots
    ctx.arc(positionX, positionY, 5, 0, Math.PI*2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    number++;
    hue+= 0.5;
}


function animate(){

    drawFlower();
    // will make function stop if number is greater
    // will also control size of flower
    if(number > 1000) return;
    requestAnimationFrame(animate);

}


animate();


//-------

// //-------------------------------creating a flower p.3------------------------------

// const canvas = document.getElementById('canvas1');
// const ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// /*** globalCompositeOperation
//  * how shapes stack, interact, and overlap
//  * similar to layers in photoshop
//  * around 26 different settings
//  * 'destination-over' - drawing done backwards(not reverse)
//  */
// ctx.globalCompositeOperation='destination-over';

// let number = 0;
// let scale = 10;

// // getting random number between 0 and 360
// hue = Math.random() * 360;

// function drawFlower(){
//     // use x to change shape of flower
//     // telling how far it should skip every step
//     // 777 is super cool with 20 for radius and number for radius
//     // 0.04 cool snail
//     // 0.09 cool too
//     // 137.5 with radius 5 cool
//     let x = 137.5; 
//     let angle = number * x;
//     let radius = scale * Math.sqrt(number);
//     let positionX = radius * Math.sin(angle) + canvas.width/2;
//     let positionY = radius * Math.cos(angle) + canvas.height/2;
    
//     // to add rainbow effect
//     ctx.fillStyle = 'hsl('+ hue +',100%,50%)';
//     // ctx.fillStyle = 'grey';
//     ctx.strokeStyle = 'black';
//     ctx.lineWidth = 5;
//     ctx.beginPath();
//     // changing 20 to number creates out of screen effect
//     // us radius 5 for more sepetart dots
//     ctx.arc(positionX, positionY, 5, 0, Math.PI*2);
//     ctx.closePath();
//     ctx.fill();
//     ctx.stroke();

//     number++;
//     hue+= 0.5;
// }


// function animate(){

//     drawFlower();
//     // will make function stop if number is greater
//     // will also control size of flower
//     if(number > 1000) return;
//     requestAnimationFrame(animate);

// }


// animate();


// //-----------------------------------------------------------------------------------


// const canvas = document.getElementById('canvas1');
// // ctx shortcut for context
// // .getContext tells which of two api's two use (canvas api [2d only] or webgl api [2d/3d])
// const ctx = canvas.getContext('2d');

// //this will only run ones
// //must be in resize listener to resize on changes
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

/**
 * remember everyting in javascript is a object
 * so that is why we call everything from ctx
 * after we declared it in line four as an object
 * returned from getcontext('2d')
 */

//--------------------------------------DRAWING A CIRCLE-----------------------------
// const canvas = document.getElementById('canvas1');
// // ctx shortcut for context
// // .getContext tells which of two api's two use (canvas api [2d only] or webgl api [2d/3d])
// const ctx = canvas.getContext('2d');

// //this will only run ones
// //must be in resize listener to resize on changes
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// ctx.fillStyle = 'red';
// ctx.strokeStyle = 'blue';
// ctx.lineWidth = 5;
// //puts the pencil on the canvas
// ctx.beginPath();

// // x:numbers, y:numbers, radius:numbers, startAngle:numbers, endAngle:numbers
// // anticlockwise: boolean:void
// // arc[x, y, radius, startAngle, endAngle, anticlockwise]
// ctx.arc(100, 300, 50, 0, Math.PI*2);
// ctx.closePath();
// ctx.fill();
// //default one pixel and black
// ctx.stroke();
//-----------------------------------------------------------------------------------


//--------------------------------------DRAWING A Rectangle-----------------------------
// const canvas = document.getElementById('canvas1');
// // ctx shortcut for context
// // .getContext tells which of two api's two use (canvas api [2d only] or webgl api [2d/3d])
// const ctx = canvas.getContext('2d');

// //this will only run ones
// //must be in resize listener to resize on changes
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// (x:numbers, y:numbers, w:numbers, h:numbers):void
// arc[x, y, w, h]
//ctx.fillRect(200,50,100,100);
//-----------------------------------------------------------------------------------




//------------------------------- How to make shape move?-------------------------------
/**
 * we make a function that will call animation loop
 * that will re-draw canvas, over and over again
 * creating an illusion of movement
 */
// const canvas = document.getElementById('canvas1');
// // ctx shortcut for context
// // .getContext tells which of two api's two use (canvas api [2d only] or webgl api [2d/3d])
// const ctx = canvas.getContext('2d');

// //this will only run ones
// //must be in resize listener to resize on changes
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// // using 'let' instead of 'const' because size will be changing in each frame
// let size = 0;
// let positionX = 0;

// function animate(){
//     // to ensure previous frames have been cleared
//     ctx.clearRect(0,0, canvas.width,canvas.height);
//     // draw each frame
//     size+=0.5;
//     positionX += 2;
//     ctx.fillStyle = 'red';
//     ctx.strokeStyle = 'blue';
//     ctx.lineWidth = 5;
//     ctx.beginPath();
//     ctx.arc(positionX, 300, size, 0, Math.PI*2);
//     ctx.closePath();
//     ctx.fill();
//     ctx.stroke();
//     requestAnimationFrame(animate);

// }

// // call animate to have it run
// //animate();

//-----------------------------------------------------------------------------------


//------------------------------- Giving it a vector-------------------------------
/**
 * we make a function that will call animation loop
 * that will re-draw canvas, over and over again
 * creating an illusion of movement
 */
// const canvas = document.getElementById('canvas1');
// // ctx shortcut for context
// // .getContext tells which of two api's two use (canvas api [2d only] or webgl api [2d/3d])
// const ctx = canvas.getContext('2d');

// //this will only run ones
// //must be in resize listener to resize on changes
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// using 'let' instead of 'const' because size will be changing in each frame
// let size = 0;
// let positionX = 0;
// let positionY = 0;


// function drawFlower(){
//     ctx.fillStyle = 'red';
//     ctx.strokeStyle = 'blue';
//     ctx.lineWidth = 5;
//     ctx.beginPath();
//     ctx.arc(positionX, positionY, size, 0, Math.PI*2);
//     ctx.closePath();
//     ctx.fill();
//     ctx.stroke();
// }

// function animate(){
//     // to ensure previous frames have been cleared
//     ctx.clearRect(0,0, canvas.width,canvas.height);
//     // draw each frame
//     size+=0.5;
//     //Simiple vector is now created; It has direction and speed
//     positionX += 1;
//     positionY += 1;
//     drawFlower();
//     requestAnimationFrame(animate);

// }

// call animate to have it run
//animate();

//-----------------------------------------------------------------------------------


//-------------------------------Circle falls while moving side to side------------------------------
//---- change variable in postionX and angle for results
// const canvas = document.getElementById('canvas1');
// // ctx shortcut for context
// // .getContext tells which of two api's two use (canvas api [2d only] or webgl api [2d/3d])
// const ctx = canvas.getContext('2d');

// //this will only run ones
// //must be in resize listener to resize on changes
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// let positionX = 100;
// let positionY = 0;
// let angle = 0;

// function drawFlower(){
//     ctx.fillStyle = 'red';
//     ctx.strokeStyle = 'blue';
//     ctx.lineWidth = 5;
//     ctx.beginPath();
//     ctx.arc(positionX, positionY, 20, 0, Math.PI*2);
//     ctx.closePath();
//     ctx.fill();
//     ctx.stroke();
// }

// function animate(){
//     ctx.clearRect(0,0, canvas.width,canvas.height);
    
//     /**
//      * Returns a value between -1 and +1
//      * it represents the angle we gave it, but in radians
//      * 
//      * the Math.sin(angle) will make it move horizontal like the sin shape
//      */

//     //5 * Math.sin(angle) is 5 * range, so (-1, 1) 
//     positionX += 1 * Math.sin(angle);
//     positionY += 0.2;
//     angle += 0.1;
//     drawFlower();
//     requestAnimationFrame(animate);

// }


// animate();


//-----------------------------------------------------------------------------------


//-------------------------------shape moves side to side, static position------------------------------
// const canvas = document.getElementById('canvas1');
// // ctx shortcut for context
// // .getContext tells which of two api's two use (canvas api [2d only] or webgl api [2d/3d])
// const ctx = canvas.getContext('2d');

// //this will only run ones
// //must be in resize listener to resize on changes
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// let positionX = 100;
// let positionY = 30;
// let angle = 0;

// function drawFlower(){
//     ctx.fillStyle = 'red';
//     ctx.strokeStyle = 'blue';
//     ctx.lineWidth = 5;
//     ctx.beginPath();
//     ctx.arc(positionX, positionY, 20, 0, Math.PI*2);
//     ctx.closePath();
//     ctx.fill();
//     ctx.stroke();
// }

// function animate(){
//     ctx.clearRect(0,0, canvas.width,canvas.height);
//     positionX += 1 * Math.sin(angle);
//     positionY += 0.5 * Math.sin(angle);
//     angle += 0.1;
//     drawFlower();
//     requestAnimationFrame(animate);

// }


// animate();


//-----------------------------------------------------------------------------------



//-------------------------------moving shape in circle------------------------------
// const canvas = document.getElementById('canvas1');
// // ctx shortcut for context
// // .getContext tells which of two api's two use (canvas api [2d only] or webgl api [2d/3d])
// const ctx = canvas.getContext('2d');

// //this will only run ones
// //must be in resize listener to resize on changes
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
//--- so adding side to side with vector movemeent Cos and Sin baby!
// let positionX = canvas.width/2;
// let positionY = canvas.height/2;
// let angle = 0;

// function drawFlower(){
//     ctx.fillStyle = 'red';
//     ctx.strokeStyle = 'blue';
//     ctx.lineWidth = 5;
//     ctx.beginPath();
//     ctx.arc(positionX, positionY, 20, 0, Math.PI*2);
//     ctx.closePath();
//     ctx.fill();
//     ctx.stroke();
// }

// function animate(){
//     // commenting clear lets see previous positions
//     ctx.clearRect(0,0, canvas.width,canvas.height);
//     positionX += 5 * Math.sin(angle);
//     //cos returns opposite value from range -1 and +1
//     positionY += 5 * Math.cos(angle);
//     angle += 0.1;
//     drawFlower();
//     requestAnimationFrame(animate);

// }


// animate();


//-----------------------------------------------------------------------------------



//-------------------------------creating a flower------------------------------
// const canvas = document.getElementById('canvas1');
// // ctx shortcut for context
// // .getContext tells which of two api's two use (canvas api [2d only] or webgl api [2d/3d])
// const ctx = canvas.getContext('2d');

// //this will only run ones
// //must be in resize listener to resize on changes
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// //increases by one each frame, which will allow one particle/pedal to be drawn
// let number = 0;
// //will be used to allow our radius to grow, flower will grow from center outwards
// let scale = 10;

// function drawFlower(){
//     // determine final shape of flower
//     let angle = number * 1;

//     // radius is size of circular path taken
//     //scale * Math.sqrt(number); allows radius to slowly increase
//     let radius = scale * Math.sqrt(number);

//     // to mark values in circular path
//     let positionX = radius * Math.sin(angle) + canvas.width/2;
//     let positionY = radius * Math.cos(angle) + canvas.height/2;
    
//     ctx.fillStyle = 'orangered';
//     ctx.strokeStyle = 'pink';
//     ctx.lineWidth = 5;
//     ctx.beginPath();
//     ctx.arc(positionX, positionY, 20, 0, Math.PI*2);
//     ctx.closePath();
//     ctx.fill();
//     ctx.stroke();
//     number++;
// }

// function animate(){
    
//     //ctx.clearRect(0,0, canvas.width,canvas.height);
//     drawFlower();
//     requestAnimationFrame(animate);

// }


// //animate();


//-----------------------------------------------------------------------------------


//-------------------------------creating a flower p.2------------------------------

// /**
//  * Initial Canvas Set up
//  */
// const canvas = document.getElementById('canvas1');
// const ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// /**
//  * Global variables for setting for our algo
//  */
// let number = 0;
// let scale = 10;

// /**
//  * effect done by a single spinning particle
//  */
// function drawFlower(){
//     /**
//      * We first calculate postion of the particle
//      */
//     //changing x produces different flowers!
//     let x = 0.1; 
//     let angle = number * x;
//     let radius = scale * Math.sqrt(number);
//     let positionX = radius * Math.sin(angle) + canvas.width/2;
//     let positionY = radius * Math.cos(angle) + canvas.height/2;
    
//     /**
//      * We use api canvas method to draw the shape we want
//      * shape can be replaced with shape or image
//      */
//     ctx.fillStyle = 'orangered';
//     ctx.strokeStyle = 'pink';
//     ctx.lineWidth = 5;
//     ctx.beginPath();
//     // changing 20 to number creates out of screen effect
//     ctx.arc(positionX, positionY, 20, 0, Math.PI*2);
//     ctx.closePath();
//     ctx.fill();
//     ctx.stroke();

//     // tell particle to move around
//     number++;
// }

// /**
//  * only job is to run drawFlower funciton over and over
//  * to create final flower shape
//  */
// function animate(){
//     // by removing or adding the following line, you see its just one particle moving
//     //ctx.clearRect(0,0, canvas.width,canvas.height);
//     drawFlower();
//     requestAnimationFrame(animate);

// }


// //animate();


//-----------------------------------------------------------------------------------


