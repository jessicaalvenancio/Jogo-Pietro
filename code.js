var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["dc105b82-b0a0-4389-a589-010649a9237b","08226e5b-a06a-4c98-94b6-0863248b4e1e","b27cf598-041e-468e-b78d-654e4df8a14f","956ced7f-d48e-42b2-9bcc-6e7113f1e55a","fed791d1-558c-4b9f-ab32-f35b0f5dbda7","38e4ae2f-2362-4f7e-b72e-8d8bf6c1cb3b","58cd85d6-e1b5-40c7-83df-310f2312ac4e","780693e5-197c-4607-b807-2c45e0af46a4","d9760686-72a7-4e68-9258-711b5f6e13ec","57e9d219-7810-4cb3-bdfc-72548e9f89bb","f7c4e10d-0e7e-4eca-a654-41b01c036066","6ba4b5d5-e5ea-4d5a-bd72-d2bade31e6db","02b9edba-6ff2-4da8-aafb-4eafd1c3e981","8619f70c-1596-4567-b324-2978d412e877","0cf12f3e-d333-4e77-bf19-44e4eee45e75","bfa5513f-838c-459e-ad57-f500c3371246","2bbf70f0-dfd3-416f-9079-207783f8b250","0d49f95b-1319-42e9-801b-0d4ee189602a","33b30402-471d-405e-a759-cfe65c37de7e","5c70b125-1fd3-49ac-b2ba-eedf4bb54c6b","1fec4e53-f6ed-4005-9004-a747d634686f"],"propsByKey":{"dc105b82-b0a0-4389-a589-010649a9237b":{"name":"fundo","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"yj2egYeP27yDkF3rwI6.ixMabXRgSM3I","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/dc105b82-b0a0-4389-a589-010649a9237b.png"},"08226e5b-a06a-4c98-94b6-0863248b4e1e":{"name":"chave","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":16,"looping":true,"frameDelay":12,"version":"ed2LyMygWZyU99etEZgegKY4X.F6Patr","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/08226e5b-a06a-4c98-94b6-0863248b4e1e.png"},"b27cf598-041e-468e-b78d-654e4df8a14f":{"name":"chavefake","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":18,"looping":true,"frameDelay":4,"version":"W.W6UDyyhZPl.gTjx6eLQzGJM8IQLlgg","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":500},"rootRelativePath":"assets/b27cf598-041e-468e-b78d-654e4df8a14f.png"},"956ced7f-d48e-42b2-9bcc-6e7113f1e55a":{"name":"refem","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"CNDTMEBK_.ZN1u4sos.CD5xSowwzbg6c","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/956ced7f-d48e-42b2-9bcc-6e7113f1e55a.png"},"fed791d1-558c-4b9f-ab32-f35b0f5dbda7":{"name":"ghost1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"40lclRpaLcXxV0t2LNikmivLgmdibajk","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/fed791d1-558c-4b9f-ab32-f35b0f5dbda7.png"},"38e4ae2f-2362-4f7e-b72e-8d8bf6c1cb3b":{"name":"ghost2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"CBSc0eQObuvjuAZcO.2LhXJzn6p.peAn","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/38e4ae2f-2362-4f7e-b72e-8d8bf6c1cb3b.png"},"58cd85d6-e1b5-40c7-83df-310f2312ac4e":{"name":"ghost3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"49Y6AUvQrE1rnPeVBn5xlV88L7micCLS","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/58cd85d6-e1b5-40c7-83df-310f2312ac4e.png"},"780693e5-197c-4607-b807-2c45e0af46a4":{"name":"ghost4","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"NlhxE8P5pziV0c71za.N6VUg2H84fh4A","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/780693e5-197c-4607-b807-2c45e0af46a4.png"},"d9760686-72a7-4e68-9258-711b5f6e13ec":{"name":"vida1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":5,"looping":true,"frameDelay":3,"version":"C8d4__c6HniVrT9lAhc0XBkga2JuWEAh","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":300},"rootRelativePath":"assets/d9760686-72a7-4e68-9258-711b5f6e13ec.png"},"57e9d219-7810-4cb3-bdfc-72548e9f89bb":{"name":"vida2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":5,"looping":true,"frameDelay":3,"version":"X7haeqOvjf3pnWXQLZQn37i0tVpq5M9_","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":300},"rootRelativePath":"assets/57e9d219-7810-4cb3-bdfc-72548e9f89bb.png"},"f7c4e10d-0e7e-4eca-a654-41b01c036066":{"name":"vidafake","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":5,"looping":true,"frameDelay":4,"version":"cDPbB0xBUiG4eO.cTXqa3EOSvg0gjv4Y","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":300},"rootRelativePath":"assets/f7c4e10d-0e7e-4eca-a654-41b01c036066.png"},"6ba4b5d5-e5ea-4d5a-bd72-d2bade31e6db":{"name":"up","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"PqXSf9iMdt0fjjerZEU8jc1UsltGDibb","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/6ba4b5d5-e5ea-4d5a-bd72-d2bade31e6db.png"},"02b9edba-6ff2-4da8-aafb-4eafd1c3e981":{"name":"stop","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"ZpVwZTxEXmw2wXkuwutCD2wHszhiKs35","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/02b9edba-6ff2-4da8-aafb-4eafd1c3e981.png"},"8619f70c-1596-4567-b324-2978d412e877":{"name":"down","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"vTlmeX23OdDQldHkUU6ZrCvXjQrABkbs","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/8619f70c-1596-4567-b324-2978d412e877.png"},"0cf12f3e-d333-4e77-bf19-44e4eee45e75":{"name":"right","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":3,"looping":true,"frameDelay":5,"version":"7C.1tjXFmfLgt4xy4JlxcwzGx9p6TnIK","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/0cf12f3e-d333-4e77-bf19-44e4eee45e75.png"},"bfa5513f-838c-459e-ad57-f500c3371246":{"name":"left","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":3,"looping":true,"frameDelay":5,"version":"JP2ICc75LTdxdI3.MFJZ0Kssg_HDgl04","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/bfa5513f-838c-459e-ad57-f500c3371246.png"},"2bbf70f0-dfd3-416f-9079-207783f8b250":{"name":"fim","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"xXBCiVjGBi.73D.oMx.CPDzcFnXIT3vX","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/2bbf70f0-dfd3-416f-9079-207783f8b250.png"},"0d49f95b-1319-42e9-801b-0d4ee189602a":{"name":"comeso","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"vHHcrC1RVpe5MMWtnQ4A_LhdQSOmIcvM","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/0d49f95b-1319-42e9-801b-0d4ee189602a.png"},"33b30402-471d-405e-a759-cfe65c37de7e":{"name":"vidafake1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":6,"looping":false,"frameDelay":3,"version":"xhUfFvFonmfoBkBf51BuODdvwdfbSHW6","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":300},"rootRelativePath":"assets/33b30402-471d-405e-a759-cfe65c37de7e.png"},"5c70b125-1fd3-49ac-b2ba-eedf4bb54c6b":{"name":"fake","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":6,"looping":false,"frameDelay":3,"version":"Jw8QlvfLWvYQLSD0DKKT_ux1Jz6jGyle","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":300},"rootRelativePath":"assets/5c70b125-1fd3-49ac-b2ba-eedf4bb54c6b.png"},"1fec4e53-f6ed-4005-9004-a747d634686f":{"name":"fim2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":36,"looping":true,"frameDelay":30,"version":"UdYW22kbDKEnBwkfTqwLL1abfIN9bIpt","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":600},"rootRelativePath":"assets/1fec4e53-f6ed-4005-9004-a747d634686f.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var fundo=createSprite(200,200);
fundo.setAnimation("fundo");

var player = createSprite(16,384,5,5);
player.scale=0.5;
player.setAnimation("stop");

var parede1= createSprite(54,400,5,700);
parede1.shapeColor="brown";

var parede2=createSprite(150,150,186,5);
parede2.shapeColor="brown";

var parede3=createSprite(124,100,5,100);
parede3.shapeColor='brown';

var parede4=createSprite(400,230,500,10);
parede4.shapeColor="brown";

var parede5 = createSprite(118,400,10,200);
parede5.shapeColor="brown";

var parede6 = createSprite(320,400,10,200);
parede6.shapeColor="brown";

var chave = createSprite(360,352,10,10);
chave.scale= 0.5;
chave.setAnimation("chave");

var chavefake = createSprite(80,352,10,10);
chavefake.scale=0.5;
chavefake.setAnimation("chavefake");

var refem = createSprite(95,102,10,10);
refem.scale=0.7;
refem.setAnimation("refem");

var escuro = createSprite(89,98,65,98);
escuro.shapeColor="black";

var ghost = createSprite(188,83,10,10);
ghost.scale=0.5;
ghost.setAnimation("ghost1");

var ghost2 = createSprite(365,109,10,10);
ghost2.scale=0.5;
ghost2.setAnimation("ghost2");

var ghost3 = createSprite(290,258,10,10);
ghost3.scale=0.4;
ghost3.setAnimation("ghost3");

var ghost4 = createSprite(173,258,10,10);
ghost4.scale=0.4;
ghost4.setAnimation("ghost4");

var vidaExtra=createSprite(265,120,10,10);
vidaExtra.scale=0.5;
vidaExtra.setAnimation("vida1");

var vidaFake = createSprite(221,361,10,10);
vidaFake.scale=0.5;
vidaFake.setAnimation("vidafake");

var vidaExtra2=createSprite(89,197,10,10);
vidaExtra2.scale=0.5;
vidaExtra2.setAnimation("vida2");

var door = createSprite(89,52,65,5);
door.shapeColor="green";

//player.debug = true; //exibe o raio colisor
player.setCollider("rectangle", 0, 0, 40,80); //modifica o raio colisor


var vidas= 10;

var comeso = createSprite(200,200);
comeso.setAnimation("comeso");
comeso.scale="4";

ghost.velocityY=3;
ghost2.velocityX=3;
ghost3.velocityY=3;
ghost4.velocityY=3;


function draw() {
 background("green");

  if(keyDown("up")){
   player.y -=4;
   player.setAnimation("up");
 }
 
 if(keyDown("down")){
   player.y +=4;
   player.setAnimation("down");
 }
 
 if(keyDown("left")){
   player.x -=4;
   player.setAnimation("left");
 }
if(keyDown("right")){
  player.x +=4;
  player.setAnimation("right");
}

//codegos condição para fantasmas
if(player.isTouching(ghost) || player.isTouching(ghost2) || player.isTouching(ghost3) || player.isTouching(ghost4)){
  vidas -=0.5;
}
if(vidas === 0){
player.destroy();
var fim = createSprite(200,200);
fim.setAnimation("fim");
fim.scale=4;
}

if(player.isTouching(vidaExtra)){
  vidas +=3;
  vidaExtra.destroy();
}

if(player.isTouching(vidaExtra2)){
  vidas +=3;
  vidaExtra2.destroy();
}

if(player.isTouching(vidaFake)){
  vidaFake.destroy();
  var sprite = createSprite(221,361,10,10);
  sprite.setAnimation("vidafake1");
}

if(player.isTouching(chavefake)){
  chavefake.destroy();
  var poof = createSprite(80,352,10,10);
  poof.setAnimation("fake");
}

if(keyDown("space")){
  comeso.destroy();
  playSound("assets/luigis-mansion-music-extended.mp3");
}

if (player.isTouching(chave)){
  escuro.destroy();
  door.destroy();
  chave.destroy();
}

if(player.isTouching(refem)){
  var fim2 = createSprite(200,200,10,10);
  fim2.setAnimation("fim2");
  fim2.scale=4;
}



createEdgeSprites();
player.bounceOff(parede1);
player.bounceOff(parede2);
player.bounceOff(parede3);
player.bounceOff(parede4);
player.bounceOff(parede5);
player.bounceOff(parede6);
player.bounceOff(leftEdge);
player.bounceOff(rightEdge);
player.bounceOff(bottomEdge);
player.bounceOff(topEdge);
player.bounceOff(door);
ghost.bounceOff(parede2);
ghost.bounceOff(topEdge);
ghost2.bounceOff(rightEdge);
ghost2.bounceOff(parede3);
ghost3.bounceOff(parede4);
ghost3.bounceOff(bottomEdge);
ghost4.bounceOff(parede4);
ghost4.bounceOff(bottomEdge);


 drawSprites();
 
  
  textSize(23);
  text("Vidas: " + vidas,298,50);
  
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
