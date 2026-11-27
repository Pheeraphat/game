////////////////////////////////////////////////////////////
// วิธีเล่นเกมเป็ดยางในสระน้ำ (Rub-a-Dub)
//
// 1. คลิ้กหน้าจอหรือกดปุ่ม Spacebar เพื่อให้เป็ดกระโดดไปตามกล่อง
// 2. ห้ามชนกล่องและหนาม
// 3. สามารถเก็บลูกเป็ดตามทางให้ได้มากที่สุด
////////////////////////////////////////////////////////////

'use strict';

var game = null;

function setup() {
    game = new RubADub();

    if (game) {
        game.start();
    }
}

function draw() {
    if (game) {
        game.draw();
    }
}

function keyPressed() {
    if (game) {
        game.keyPressed();
    }
}

function keyReleased() {
    if (game) {
        game.keyReleased();
    }
}

function mousePressed() {
    if (game) {
        game.mousePressed();
    }
}

function mouseMoved() {
    if (game) {
        game.mouseMoved();
    }
}

function mouseDragged() {
    if (game) {
        game.mouseMoved();
    }
}

function mouseWheel(event) {
    if (game) {
        game.mouseWheel(event.delta);
    }

    return false;
}

function mouseReleased() {
    if (game) {
        game.mouseReleased();
    }
}

function touchStarted() {
    if (game) {
        game.touchStarted();
    }
}

function touchMoved() {
    if (game) {
        game.touchMoved();
    }
}

function touchEnded() {
    if (game) {
        game.touchEnded();
    }
}

function windowResized() {
    if (game) {
        game.windowResized();
    }
}

var rubADubLibrary = null;

////////////////////////////////////////////////////////////
// library
////////////////////////////////////////////////////////////
class RubADubLibrary {
    // image
    static get IMAGE_SLASH()              {return  0;}
    static get IMAGE_DIGIT_0()            {return  1;}
    static get IMAGE_DIGIT_1()            {return  2;}
    static get IMAGE_DIGIT_2()            {return  3;}
    static get IMAGE_DIGIT_3()            {return  4;}
    static get IMAGE_DIGIT_4()            {return  5;}
    static get IMAGE_DIGIT_5()            {return  6;}
    static get IMAGE_DIGIT_6()            {return  7;}
    static get IMAGE_DIGIT_7()            {return  8;}
    static get IMAGE_DIGIT_8()            {return  9;}
    static get IMAGE_DIGIT_9()            {return 10;}
    static get IMAGE_COLON()              {return 11;}

    static get IMAGE_NEW_GAME_0()         {return 12;}
    static get IMAGE_NEW_GAME_1()         {return 13;}

    static get IMAGE_TRY_AGAIN_0()        {return 14;}
    static get IMAGE_TRY_AGAIN_1()        {return 15;}

    static get IMAGE_CONTINUE_0()         {return 16;}
    static get IMAGE_CONTINUE_1()         {return 17;}

    static get IMAGE_PAUSE_0()            {return 18;}
    static get IMAGE_PAUSE_1()            {return 19;}

    static get IMAGE_ENTER_FULLSCREEN_0() {return 20;}
    static get IMAGE_ENTER_FULLSCREEN_1() {return 21;}

    static get IMAGE_EXIT_FULLSCREEN_0()  {return 22;}
    static get IMAGE_EXIT_FULLSCREEN_1()  {return 23;}

    static get IMAGE_LEVEL()              {return 24;}

    static get IMAGE_INFO_FINISHED()      {return 25;}
    static get IMAGE_INFO_GAME_OVER()     {return 26;}
    static get IMAGE_INFO_PAUSED()        {return 27;}

    static get IMAGE_SPLASH_SCREEN()      {return 28;}

    static get IMAGE_BACKGROUND_LAYER_0() {return 29;}
    static get IMAGE_BACKGROUND_LAYER_1() {return 30;}
    static get IMAGE_BACKGROUND_LAYER_2() {return 31;}

    // texture
    static get TEXTURE_WATER()            {return 32;}
    static get TEXTURE_MOSAIC_TILE()      {return 33;}
    static get TEXTURE_SOAP_BUBBLE()      {return 34;}

    static get TEXTURE_BLOCK()            {return 35;}
    static get TEXTURE_SPIKE()            {return 36;}

    static get TEXTURE_MOM()              {return 37;}
    static get TEXTURE_DAD()              {return 38;}
    static get TEXTURE_DUCKLING()         {return 39;}

    // model
    static get MODEL_MOM()                {return  0;}
    static get MODEL_DAD()                {return  1;}
    static get MODEL_DUCKLING()           {return  2;}
    static get MODEL_BLOCK()              {return  3;}
    static get MODEL_SPIKE()              {return  4;}

    // sound
    static get SOUND_POP()                {return  0;}
    static get SOUND_SQUEEZE()            {return  1;}
    static get SOUND_FINISHED()           {return  2;}
    static get SOUND_GAME_OVER()          {return  3;}

    // button
    static get BUTTON_PAUSE()             {return  1;}
    static get BUTTON_CONTINUE()          {return  2;}
    static get BUTTON_NEW_GAME()          {return  3;}

    // game mode
    static get GAME_MODE_NEW_GAME()       {return  0;}
    static get GAME_MODE_PLAY()           {return  1;}
    static get GAME_MODE_MENU()           {return  2;}

    // info
    static get INFO_TYPE_NONE()           {return -1;}
    static get INFO_TYPE_FINISHED()       {return  0;}
    static get INFO_TYPE_GAME_OVER()      {return  1;}
    static get INFO_TYPE_PAUSED()         {return  2;}
    static get NUMBER_OF_INFO_TYPES()     {return  3;}

    // hud
    static get PIXELS_BETWEEN_WORDS()     {return  4;}

    constructor() {
        this.deltaTime = 0;
        this.isDebug = false;
        this.isYesOrNo = false;
        this.isJustStarted = true;
        this.isMouseButtonDown = false;
        this.isNewGame = true;
        this.isGameOver = false;
        this.isGameFinished = false;
        this.isGamePaused = false;
        this.isTryAgain = false;
        this.isContinued = false;

        // menu
        this.buttonContinueImageIndex = RubADubLibrary.IMAGE_CONTINUE_0;

        // blink
        this.levelBlink = new RubADubBlink(500, 3000);

        // hud
        this.infoType = RubADubLibrary.INFO_TYPE_NONE;
        this.pixelsBetweenWords = 0;
        this.spacesBetweenDigits = 0;
        this.levelScaledSize = new GameSize();
        this.infoScaledRectArray = new Array(RubADubLibrary.NUMBER_OF_INFO_TYPES).fill(new GameRect());

        // object
        this.camera = new RubADubCamera();
        this.level = new RubADubLevel();
        this.background = new RubADubParallaxBackground();
        this.cookie = new RubADubCookie();
    }

    canCheckCollision() {
        return (gameLibrary.gameMode != RubADubLibrary.GAME_MODE_MENU && !this.isMotionFrozen() && !this.isGameFinished && !this.level.isClearingBlocks);
    }

    finishGame() {
        if (!this.isGameFinished) {
            this.isGameOver = false;
            this.isGameFinished = true;
            this.infoType = RubADubLibrary.INFO_TYPE_FINISHED;
            gameLibrary.sound.play(RubADubLibrary.SOUND_FINISHED);
            gameLibrary.changeGameMode(RubADubLibrary.GAME_MODE_MENU);
        }
    }

    gameOver() {
        if (!this.isGameOver) {
            this.isGameOver = true;
            this.isGameFinished = false;
            this.infoType = RubADubLibrary.INFO_TYPE_GAME_OVER;
            gameLibrary.sound.play(RubADubLibrary.SOUND_GAME_OVER);
            gameLibrary.changeGameMode(RubADubLibrary.GAME_MODE_MENU);
        }
    }

    getDeltaTime() {
        return this.deltaTime;
    }

    init() {
        ambientLight(255);
        textureMode(NORMAL);
        textureWrap(REPEAT);

        this.background.add(RubADubLibrary.IMAGE_BACKGROUND_LAYER_0, 0.0);
        this.background.add(RubADubLibrary.IMAGE_BACKGROUND_LAYER_1, 0.125);
        this.background.add(RubADubLibrary.IMAGE_BACKGROUND_LAYER_2, 0.5);

        this.level.init();
        this.camera.init();

        this.newGame();
        this.resize();
    }

    isMotionFrozen() {
        return (this.isGameOver || this.isGamePaused);
    }

    newGame() {
        gameLibrary.showButton(RubADubLibrary.BUTTON_NEW_GAME, false);
        gameLibrary.showButton(RubADubLibrary.BUTTON_CONTINUE, false);
        gameLibrary.showButton(RubADubLibrary.BUTTON_PAUSE, true);

        this.isMouseButtonDown = false;
        this.isGamePaused = false;
        this.level.isLoadFirstLevel = false;

        if (this.isNewGame) {
            this.levelBlink.start();

            if (!this.isJustStarted) {
                if (!this.isTryAgain) {
                    this.level.isLoadFirstLevel = true;

                    if (this.level.duck.modelArrayIndex == RubADubLibrary.MODEL_MOM) {
                        this.level.duck.changeModel(RubADubLibrary.MODEL_DAD, RubADubLibrary.TEXTURE_DAD);
                    } else {
                        this.level.duck.changeModel(RubADubLibrary.MODEL_MOM, RubADubLibrary.TEXTURE_MOM);
                    }
                }
            }

            this.level.clearBlocks(true);
            this.isGameOver = false;
            this.isGameFinished = false;

            gameLibrary.resetHUDs(0.0);
            gameLibrary.addScore(0, 0, GameLibrary.NONE, false);
        }

        if (!this.isContinued) {
            this.level.duck.reset();
        }

        this.camera.reset();
        this.infoType = RubADubLibrary.INFO_TYPE_NONE;
    }

    pauseGame() {
        if (!this.isGameOver && !this.isGameFinished) {
            this.isGamePaused = true;
            this.infoType = RubADubLibrary.INFO_TYPE_PAUSED;
            gameLibrary.changeGameMode(RubADubLibrary.GAME_MODE_MENU);
        }
    }

    render() {
        this.deltaTime = min(deltaTime, 40); // 40 = 1000 / 25 frames per second
        this.renderBackground();
        this.renderBackground();

        push();
        this.camera.update();
        this.level.render();
        pop();

        this.renderHUD();
    }

    renderBackground() {
        gameLibrary.beginWebGLHUD();

        if (gameLibrary.camera.isEnabled) {
            push();
            gameLibrary.camera.render();
            pop();
        } else {
            if (gameLibrary.gameMode != RubADubLibrary.GAME_MODE_MENU) {
                this.background.moveBy(-this.level.pool.water.moveStep, 0);
            }

            this.background.render();
        }

        gameLibrary.endWebGLHUD();
    }

    renderBillboard(position, width, height, imageArrayIndex, alpha) {
        push();
        drawingContext.depthMask(false);
        translate(position.x, position.y, position.z);
        let dx = rubADubLibrary.camera.position.x - position.x;
        let dy = rubADubLibrary.camera.position.y - position.y;
        let dz = rubADubLibrary.camera.position.z - position.z;
        let yaw = atan2(dx, dz);
        let pitch = atan2(dy, sqrt(dx * dx + dz * dz));

        rotateY(yaw);
        rotateX(-pitch);

        noStroke();

        if (alpha < 255) {
            tint(255, alpha);
        }

        texture(gameLibrary.gameImageArray[imageArrayIndex].image);
        plane(width, height);
        drawingContext.depthMask(true);
        pop();
    }

    renderHUD() {
        gameLibrary.beginWebGLHUD();
        push();

        let y = gameLibrary.hudGap;

        // level
        if (this.level.numberOfLevels > 1) {
            this.levelBlink.update();

            if (this.levelBlink.isVisibled && (rubADubLibrary.isGamePaused || rubADubLibrary.isContinued || rubADubLibrary.isTryAgain || gameLibrary.gameMode != RubADubLibrary.GAME_MODE_MENU || this.infoType == RubADubLibrary.INFO_TYPE_FINISHED)) {
                let levelString = str(this.level.currentLevel + 1) + "/" + str(this.level.numberOfLevels);
                let levelStringSize = gameLibrary.number.getPixelSize(levelString, RubADubLibrary.IMAGE_DIGIT_0, this.spacesBetweenDigits);
                let totalWidth = this.levelScaledSize.width + this.pixelsBetweenWords + levelStringSize.width;
                let x = (gameLibrary.displayWidth - totalWidth) * 0.5;
                image(gameLibrary.gameImageArray[RubADubLibrary.IMAGE_LEVEL].image, x, y, this.levelScaledSize.width, this.levelScaledSize.height);
                gameLibrary.number.render(x + this.levelScaledSize.width + this.pixelsBetweenWords, y, levelString, RubADubLibrary.IMAGE_DIGIT_0, this.spacesBetweenDigits);
            }

            y += this.levelScaledSize.height + gameLibrary.hudGap;
        }

        // info
        if (this.infoType != RubADubLibrary.INFO_TYPE_NONE) {
            let imageArrayIndex = RubADubLibrary.IMAGE_INFO_FINISHED + this.infoType;
            image(gameLibrary.gameImageArray[imageArrayIndex].image, this.infoScaledRectArray[this.infoType].x, y, this.infoScaledRectArray[this.infoType].width, this.infoScaledRectArray[this.infoType].height);
        }

        gameLibrary.renderButton(RubADubLibrary.BUTTON_CONTINUE, this.buttonContinueImageIndex);
        gameLibrary.renderButton(RubADubLibrary.BUTTON_NEW_GAME, RubADubLibrary.IMAGE_NEW_GAME_0);
        gameLibrary.renderButton(GameLibrary.BUTTON_FULLSCREEN, RubADubLibrary.IMAGE_ENTER_FULLSCREEN_0);
        gameLibrary.renderButton(RubADubLibrary.BUTTON_PAUSE, RubADubLibrary.IMAGE_PAUSE_0);

        pop();
        gameLibrary.endWebGLHUD();
    }

    resize() {
        // button
        gameLibrary.buttonRectArray[RubADubLibrary.BUTTON_NEW_GAME].width = gameLibrary.scale(gameLibrary.gameImageArray[RubADubLibrary.IMAGE_NEW_GAME_0].width);
        gameLibrary.buttonRectArray[RubADubLibrary.BUTTON_NEW_GAME].height = gameLibrary.scale(gameLibrary.gameImageArray[RubADubLibrary.IMAGE_NEW_GAME_0].height);
        gameLibrary.buttonRectArray[RubADubLibrary.BUTTON_NEW_GAME].x = int((gameLibrary.displayWidth - gameLibrary.buttonRectArray[RubADubLibrary.BUTTON_NEW_GAME].width) * 0.5);
        gameLibrary.buttonRectArray[RubADubLibrary.BUTTON_NEW_GAME].y = gameLibrary.displayHeight - gameLibrary.hudGap - gameLibrary.buttonRectArray[RubADubLibrary.BUTTON_NEW_GAME].height;

        gameLibrary.buttonRectArray[RubADubLibrary.BUTTON_CONTINUE].width = gameLibrary.scale(gameLibrary.gameImageArray[RubADubLibrary.IMAGE_CONTINUE_0].width);
        gameLibrary.buttonRectArray[RubADubLibrary.BUTTON_CONTINUE].height = gameLibrary.scale(gameLibrary.gameImageArray[RubADubLibrary.IMAGE_CONTINUE_0].height);
        gameLibrary.buttonRectArray[RubADubLibrary.BUTTON_CONTINUE].x = int((gameLibrary.displayWidth - gameLibrary.buttonRectArray[RubADubLibrary.BUTTON_CONTINUE].width) * 0.5);
        gameLibrary.buttonRectArray[RubADubLibrary.BUTTON_CONTINUE].y = gameLibrary.buttonRectArray[RubADubLibrary.BUTTON_NEW_GAME].y - gameLibrary.hudGap - gameLibrary.buttonRectArray[RubADubLibrary.BUTTON_CONTINUE].height;

        gameLibrary.buttonRectArray[RubADubLibrary.BUTTON_PAUSE].width = gameLibrary.scale(gameLibrary.gameImageArray[RubADubLibrary.IMAGE_PAUSE_0].width);
        gameLibrary.buttonRectArray[RubADubLibrary.BUTTON_PAUSE].height = gameLibrary.scale(gameLibrary.gameImageArray[RubADubLibrary.IMAGE_PAUSE_0].height);
        gameLibrary.buttonRectArray[RubADubLibrary.BUTTON_PAUSE].x = gameLibrary.hudGap;
        gameLibrary.buttonRectArray[RubADubLibrary.BUTTON_PAUSE].y = gameLibrary.displayHeight - gameLibrary.hudGap - gameLibrary.buttonRectArray[RubADubLibrary.BUTTON_PAUSE].height;

        gameLibrary.buttonOffsetSizeArray[RubADubLibrary.BUTTON_PAUSE].width = -(gameLibrary.buttonRectArray[RubADubLibrary.BUTTON_PAUSE].width + gameLibrary.hudGap);
        gameLibrary.buttonOffsetSizeArray[RubADubLibrary.BUTTON_CONTINUE].height = gameLibrary.buttonFullscreenOffsetPoint.y - gameLibrary.buttonRectArray[RubADubLibrary.BUTTON_CONTINUE].y;
        gameLibrary.buttonOffsetSizeArray[RubADubLibrary.BUTTON_NEW_GAME].height = gameLibrary.buttonOffsetSizeArray[RubADubLibrary.BUTTON_CONTINUE].height + gameLibrary.hudGap + gameLibrary.buttonRectArray[RubADubLibrary.BUTTON_NEW_GAME].height;

        // level
        this.pixelsBetweenWords = gameLibrary.scale(RubADubLibrary.PIXELS_BETWEEN_WORDS * gameLibrary.imageFileScale);
        this.spacesBetweenDigits = gameLibrary.scale(gameLibrary.gameImageArray[RubADubLibrary.IMAGE_DIGIT_0].width * -0.3);
        this.levelScaledSize.width = gameLibrary.scale(gameLibrary.gameImageArray[RubADubLibrary.IMAGE_LEVEL].width);
        this.levelScaledSize.height = gameLibrary.scale(gameLibrary.gameImageArray[RubADubLibrary.IMAGE_LEVEL].height);

        // info
        for (let i = 0; i < this.infoScaledRectArray.length; i++) {
            let imageArrayIndex = RubADubLibrary.IMAGE_INFO_FINISHED + i;
            this.infoScaledRectArray[i].width = gameLibrary.scale(gameLibrary.gameImageArray[imageArrayIndex].width);
            this.infoScaledRectArray[i].height = gameLibrary.scale(gameLibrary.gameImageArray[imageArrayIndex].height);
            this.infoScaledRectArray[i].x = (gameLibrary.displayWidth - this.infoScaledRectArray[i].width) * 0.5;
            this.infoScaledRectArray[i].y = 0;
        }

        this.background.resize();
    }
}

////////////////////////////////////////////////////////////
// model
////////////////////////////////////////////////////////////
class RubADubModel {
    constructor(modelArrayIndex, gameImageArrayIndex, initialAlpha = 255) {
        this.modelArrayIndex = -1;
        this.gameImageArrayIndex = -1;
        this.initialAlpha = initialAlpha;
        this.alpha = this.initialAlpha;
        this.size = gameLibrary.vector.create();
        this.halfSize = gameLibrary.vector.create();
        this.position = gameLibrary.vector.create();
        this.offset = gameLibrary.vector.create();
        this.angle = gameLibrary.vector.create();
        this.collisionSize = gameLibrary.vector.create();
        this.collisionHalfSize = gameLibrary.vector.create();

        this.setModel(modelArrayIndex, gameImageArrayIndex);
    }

    isHittingDuck() {
        let isHitting = false;

        if (rubADubLibrary.canCheckCollision()) {
            let duck = rubADubLibrary.level.duck;

            let dx = duck.position.x - this.position.x;
            let dy = duck.position.y - this.position.y;

            let halfWidth = duck.collisionHalfSize.x + this.collisionHalfSize.x;
            let halfHeight = duck.collisionHalfSize.y + this.collisionHalfSize.y;

            let overlapX = halfWidth - Math.abs(dx);
            let overlapY = halfHeight - Math.abs(dy);

            isHitting = (overlapX > 0 && overlapY > 0);
        }

        return isHitting;
    }

    render(x, y, useClearingBlocksFactor = true) {
        this.position.x = x;
        this.position.y = y;

        let level = rubADubLibrary.level;
        this.alpha = 0;

        if (this.position.x >= level.pool.farLeftBlockPosition.x && this.position.x <= level.pool.nearRightBlockPosition.x) {
            let maxWidth = RubADubLevel.FADING_BLOCKS * level.block.size.x;
            this.alpha = this.initialAlpha;

            if (useClearingBlocksFactor && this.modelArrayIndex != RubADubLibrary.MODEL_MOM && this.modelArrayIndex != RubADubLibrary.MODEL_DAD) {
                this.alpha *= level.clearingBlocksFactor;
            }

            if (this.position.x < level.fadeOutBlockX) { // fade out
                let w = gameLibrary.clamp(level.fadeOutBlockX - this.position.x, 0, maxWidth);
                let factor = map(w, 0, maxWidth, 1, 0);
                this.alpha *= factor;
            } else if (this.position.x > level.fadeInBlockX) { // fade in
                let w = gameLibrary.clamp(this.position.x - level.fadeInBlockX, 0, maxWidth);
                let factor = map(w, 0, maxWidth, 1, 0);
                this.alpha *= factor;
            }

            push();
            translate(this.position.x + this.offset.x, this.position.y + this.offset.y, 0 + this.offset.z);
            rotateX(this.angle.x);
            rotateY(this.angle.y);
            rotateZ(this.angle.z);
            noStroke();

            this.alpha = gameLibrary.clamp(this.alpha, 0, 255)

            if (this.alpha < 255) {
                tint(255, this.alpha);
            }

            texture(gameLibrary.gameImageArray[this.gameImageArrayIndex].image);
            model(gameLibrary.modelArray[this.modelArrayIndex]);
            noTint();
            pop();
        }
    }

    setModel(modelArrayIndex, gameImageArrayIndex) {
        this.modelArrayIndex = modelArrayIndex;
        this.gameImageArrayIndex = gameImageArrayIndex;
        let boundingBox = gameLibrary.modelArray[modelArrayIndex].calculateBoundingBox();

        if (rubADubLibrary.isDebug) {
            console.log("model", this.modelArrayIndex, "boundingBox:", boundingBox.size.x, boundingBox.size.y, boundingBox.size.z);
        }

        this.size.set(boundingBox.size.x, boundingBox.size.y, boundingBox.size.z);
        this.halfSize = gameLibrary.vector.scale(this.size, 0.5);
        this.collisionSize = gameLibrary.vector.scale(this.size, 1.0);
        this.collisionHalfSize = gameLibrary.vector.scale(this.halfSize, 1.0);
    }
}

////////////////////////////////////////////////////////////
// blink
////////////////////////////////////////////////////////////
class RubADubBlink {
    constructor(interval, duration) {
        this.interval = interval;
        this.duration = duration;
        this.elapsedTime = this.duration;
        this.isBlinking = false;
        this.isVisibled = true;
    }

    start() {
        this.elapsedTime = 0;
        this.isBlinking = true;
    }

    update() {
        this.isVisibled = true;

        if (gameLibrary.gameMode != RubADubLibrary.GAME_MODE_MENU && this.elapsedTime < this.duration) {
            this.isVisibled = (gameLibrary.getMilliseconds() % this.interval) < (this.interval * 0.5);
            this.elapsedTime += rubADubLibrary.getDeltaTime();

            if (this.elapsedTime >= this.duration) {
                this.elapsedTime = this.duration;
                this.isBlinking = false;
            }
        }
    }
}

////////////////////////////////////////////////////////////
// block
////////////////////////////////////////////////////////////
class RubADubBlock extends RubADubModel {
    constructor() {
        super(RubADubLibrary.MODEL_BLOCK, RubADubLibrary.TEXTURE_BLOCK);
    }

    render(x, y) {
        super.render(x, y);

        if (rubADubLibrary.canCheckCollision()) {
            let duck = rubADubLibrary.level.duck;

            if (!rubADubLibrary.level.isBlockCollisionChecked) {
                duck.setOnBlock(null);
                duck.isHit = false;
                rubADubLibrary.level.isBlockCollisionChecked = true;
            }

            let dx = duck.position.x - this.position.x;
            let dy = duck.position.y - this.position.y;

            let halfWidth = duck.collisionHalfSize.x + this.collisionHalfSize.x;
            let halfHeight = duck.collisionHalfSize.y + this.collisionHalfSize.y;

            let overlapX = halfWidth - Math.abs(dx);
            let overlapY = halfHeight - Math.abs(dy);

            let isDuckCenterInside = abs(dx) <= this.halfSize.x * 1.5;
            let isDuckStandingOn = (duck.position.y == this.position.y - this.halfSize.y - duck.halfSize.y) && isDuckCenterInside;
            let isTouchingDuck = (overlapX > 0 && overlapY > 0) || isDuckStandingOn;

            if (isTouchingDuck) {
                if (isDuckStandingOn || (overlapX > overlapY && isDuckCenterInside) || (duck.isJumping && duck.jumpVelocity >= 0 && dy < 0 && isDuckCenterInside)) {
                    if (isDuckStandingOn || dy < 0) { // upper
                        duck.setOnBlock(this);
                    } else { // under
                        duck.isHit = true;
                    }
                } else if (dx < 0) { // left
                    duck.isHit = true;
                }
            }
        }
    }
}

////////////////////////////////////////////////////////////
// camera
////////////////////////////////////////////////////////////
class RubADubCamera {
    constructor() {
        this.autoDriftConfig = {
            // speed
            maxAutoMouseDeltaX: 3.5, // yaw left, right
            maxAutoMouseDeltaY: 1.5, // pitch up, down
            maxAutoMouseScroll: 1.0, // zoom in, out

            // perlin noise
            noiseFrequencyMouseX: 0.00025,
            noiseFrequencyMouseY: 0.00030,
            noiseFrequencyMouseScroll: 0.00025,

            // pitch angle
            maxUpAngle: 0.9,
            maxDownAngle: 0.0,

            // zoom
            minZoom: 50,
            maxZoom: 300,

            // look at
            duck: null,
            lookAt: gameLibrary.vector.create(),
            extendedHeight: 0,

            // auto drift
            driftBlend: 0.0, // (0.0 - 1.0)
            autoDriftingCooldown: 0,
            noiseTimeMouseX: 0,
            noiseTimeMouseY: 0,
            noiseTimeMouseScroll: 0
        };

        this.defaultState = {
            lookAt: gameLibrary.vector.create(),
            angle: gameLibrary.vector.create(),
            zoom: 300,
            lookAtHeight: 2, // blocks

            autoDriftingCooldown: 1000,
            noiseTimeMouseX: 0,
            noiseTimeMouseY: 100,
            noiseTimeMouseScroll: 200
        };

        this.fov = radians(45);
        this.halfFOV = this.fov * 0.5;
        this.rotationSpeed = (QUARTER_PI * 0.50) / 1000;

        this.position = gameLibrary.vector.create();
        this.lookAt = gameLibrary.vector.create();
        this.angle = gameLibrary.vector.create();
        this.zoom = 0;
        this.targetZoom = 0;

        this.isDragging = false;
        this.isResetting = false;
        this.isAutoDrifting = false;

        this.previousMouse = new GamePoint(-1, -1);
    }

    applyCameraInput(deltaX, deltaY, scrollDelta, dt) {
        let speed = this.rotationSpeed * dt * ((gameLibrary.targetFrameRate > 0) ? (gameLibrary.targetFrameRate / gameLibrary.defaultFrameRate) : 1);
        this.angle.y = gameLibrary.warpValue(this.angle.y + (deltaX * speed), 0, TWO_PI);
        this.angle.x = ((this.angle.x > PI) ? this.angle.x - TWO_PI : this.angle.x) - (deltaY * speed);
        this.targetZoom = gameLibrary.clamp(this.targetZoom + scrollDelta, this.autoDriftConfig.minZoom, this.autoDriftConfig.maxZoom);
        rubADubLibrary.background.moveBy(-deltaX, 0);
    }

    autoDrift(isContinued = false) {
        if (isContinued) {
            this.autoDriftConfig.driftBlend = 0;
            this.autoDriftConfig.autoDriftingCooldown = this.defaultState.autoDriftingCooldown;
        } else {
            this.setDefaultState(rubADubLibrary.level.duck);
        }

        this.isAutoDrifting = (this.autoDriftConfig.autoDriftingCooldown > 0) ? false : true;
    }

    init() {
        this.setDefaultState();

        this.position.set(0, 0, 0);
        this.lookAt.set(this.autoDriftConfig.lookAt.x, this.autoDriftConfig.lookAt.y, this.autoDriftConfig.lookAt.z);
        this.angle.set(this.defaultState.angle.x, this.defaultState.angle.y, this.defaultState.angle.z);
        this.zoom = this.defaultState.zoom;
        this.targetZoom = this.zoom;
    }

    onMouseButtonDown() {
        this.isDragging = true;
        this.isAutoDrifting = false;
        this.isResetting = false;
        this.autoDriftConfig.driftBlend = 0;
        this.previousMouse.set(mouseX, mouseY);
    }

    onMouseButtonUp() {
        if (this.isDragging) {
            this.isDragging = false;
            this.autoDrift(true);
        }
    }

    onMouseDrag() {
        if (this.isDragging) {
            let delta = new GamePoint(mouseX - this.previousMouse.x, mouseY - this.previousMouse.y);
            this.applyCameraInput(delta.x, delta.y, 0, rubADubLibrary.getDeltaTime());
            this.previousMouse.set(mouseX, mouseY);
        }
    }

    onMouseWheel(delta) {
        this.applyCameraInput(0, 0, delta * 0.25, 0);
        this.autoDrift(true);
    }

    reset() {
        if (!this.isResetting) {
            this.setDefaultState();
            this.isResetting = true;
        }
    }

    setDefaultState(duck = null) {
        this.autoDriftConfig.duck = duck;

        if (this.autoDriftConfig.duck == null) {
            this.defaultState.lookAt.set(0, -this.defaultState.lookAtHeight * rubADubLibrary.level.block.size.y, 0);
        } else {
            this.defaultState.lookAt.set(this.autoDriftConfig.duck.position.x, this.autoDriftConfig.duck.position.y, this.autoDriftConfig.duck.position.z);
        }

        this.autoDriftConfig.lookAt.set(this.defaultState.lookAt.x, this.defaultState.lookAt.y, this.defaultState.lookAt.z);
        this.autoDriftConfig.driftBlend = 0;
        this.autoDriftConfig.autoDriftingCooldown = 0;
        this.autoDriftConfig.noiseTimeMouseX = this.defaultState.noiseTimeMouseX;
        this.autoDriftConfig.noiseTimeMouseY = this.defaultState.noiseTimeMouseY;
        this.autoDriftConfig.noiseTimeMouseScroll = this.defaultState.noiseTimeMouseScroll;

        this.isDragging = false;
        this.isResetting = false;
        this.isAutoDrifting = false;

        this.previousMouse.set(-1, -1);
    }

    update() {
        let dt = rubADubLibrary.getDeltaTime();

        if (this.autoDriftConfig.autoDriftingCooldown > 0) {
            this.autoDriftConfig.autoDriftingCooldown -= dt;

            if (this.autoDriftConfig.autoDriftingCooldown <= 0 && !this.isDragging && !this.isResetting) {
                this.autoDriftConfig.autoDriftingCooldown = 0;
                this.isAutoDrifting = true;
            }
        }

        let smoothFactor = 1 - exp((this.isResetting ? -0.005 : -0.001) * dt);
        let lookAtSmoothFactor = smoothFactor;

        // move camera up to duck y position
        if (this.autoDriftConfig.duck == null) {
            let level = rubADubLibrary.level;
            let cameraHeightRange = (this.defaultState.lookAtHeight * 4) * level.block.size.y;
            let duckY = abs(level.duck.position.y - level.duck.onWaterY);
            let extendedHeight = int(duckY / cameraHeightRange);

            if (this.autoDriftConfig.extendedHeight != extendedHeight) {
                this.autoDriftConfig.extendedHeight = extendedHeight;
                this.autoDriftConfig.lookAt.set(this.defaultState.lookAt.x, this.defaultState.lookAt.y - (this.autoDriftConfig.extendedHeight * cameraHeightRange), this.defaultState.lookAt.z);
                lookAtSmoothFactor = 1 - exp((-0.002) * dt);
            }
        }

        let diffLookAt = 0;

        if (this.lookAt != this.autoDriftConfig.lookAt) {
            this.lookAt = gameLibrary.vector.lerp(this.lookAt, this.autoDriftConfig.lookAt, lookAtSmoothFactor);
            diffLookAt = gameLibrary.vector.dist(this.lookAt, this.autoDriftConfig.lookAt);

            if (diffLookAt < 0.1) {
                this.lookAt.set(this.autoDriftConfig.lookAt.x, this.autoDriftConfig.lookAt.y, this.autoDriftConfig.lookAt.z);
                diffLookAt = 0;
            }
        }

        if (this.isResetting || (this.isAutoDrifting && !this.isDragging)) {
            if (this.isResetting) {
                if (this.targetZoom != this.defaultState.zoom) {
                    this.targetZoom = lerp(this.targetZoom, this.defaultState.zoom, smoothFactor);
                }

                let diffZoom = abs(this.zoom - this.defaultState.zoom);
                this.angle = gameLibrary.vector.lerpAngle(this.angle, this.defaultState.angle, smoothFactor);
                let diffAngle = gameLibrary.vector.dist(this.angle, this.defaultState.angle);

                if (diffLookAt == 0 && diffZoom < 0.1 && diffAngle < 0.005) {
                    this.lookAt.set(this.autoDriftConfig.lookAt.x, this.autoDriftConfig.lookAt.y, this.autoDriftConfig.lookAt.z);
                    this.targetZoom = this.defaultState.zoom;
                    this.zoom = this.targetZoom;
                    this.angle.set(this.defaultState.angle.x, this.defaultState.angle.y, this.defaultState.angle.z);
                    this.isResetting = false;
                }
            } else {
                this.autoDriftConfig.driftBlend = min(this.autoDriftConfig.driftBlend + (0.0007 * dt), 1.0);

                this.autoDriftConfig.noiseTimeMouseX += this.autoDriftConfig.noiseFrequencyMouseX * dt;
                this.autoDriftConfig.noiseTimeMouseY += this.autoDriftConfig.noiseFrequencyMouseY * dt;
                this.autoDriftConfig.noiseTimeMouseScroll += this.autoDriftConfig.noiseFrequencyMouseScroll * dt;

                let autoDriftDelta = {
                    x: map(noise(this.autoDriftConfig.noiseTimeMouseX), 0, 1, -this.autoDriftConfig.maxAutoMouseDeltaX, this.autoDriftConfig.maxAutoMouseDeltaX) * this.autoDriftConfig.driftBlend,
                    y: map(noise(this.autoDriftConfig.noiseTimeMouseY), 0, 1, -this.autoDriftConfig.maxAutoMouseDeltaY, this.autoDriftConfig.maxAutoMouseDeltaY) * this.autoDriftConfig.driftBlend
                };

                let autoDriftScroll = map(noise(this.autoDriftConfig.noiseTimeMouseScroll), 0, 1, -this.autoDriftConfig.maxAutoMouseScroll, this.autoDriftConfig.maxAutoMouseScroll) * this.autoDriftConfig.driftBlend;
                this.applyCameraInput(autoDriftDelta.x, autoDriftDelta.y, autoDriftScroll, dt);
            }
        }

        if (this.zoom != this.targetZoom) {
            let zoomSmoothFactor = smoothFactor * 10;
            this.zoom = lerp(this.zoom, this.targetZoom, zoomSmoothFactor);

            if (abs(this.zoom - this.targetZoom) < 0.1) {
                this.zoom = this.targetZoom;
            }
        }

        this.angle.x = gameLibrary.clamp(this.angle.x, -this.autoDriftConfig.maxUpAngle, this.autoDriftConfig.maxDownAngle);
        rubADubLibrary.background.moveTo(rubADubLibrary.background.targetX, this.lookAt.y + (this.angle.x * rubADubLibrary.background.maxY * 0.5));

        this.position.x = this.lookAt.x - this.zoom * cos(this.angle.x) * sin(this.angle.y);
        this.position.y = this.lookAt.y + this.zoom * sin(this.angle.x);
        this.position.z = this.lookAt.z + this.zoom * cos(this.angle.x) * cos(this.angle.y);

        perspective(this.fov, gameLibrary.displayWidth / gameLibrary.displayHeight, 0.01, 2000);
        camera(this.position.x, this.position.y, this.position.z, this.lookAt.x, this.lookAt.y, this.lookAt.z, 0, 1, 0);
    }
}

////////////////////////////////////////////////////////////
// cookie
////////////////////////////////////////////////////////////
class RubADubCookie {
    constructor() {
        gameLibrary.cookie.setKey("Dub-a-Dub.1.0.0");
    }

    delete() {
        gameLibrary.cookie.isConsoleLogVisibled = rubADubLibrary.isDebug;

        if (gameLibrary.cookie.isConsoleLogVisibled) {
            console.log("\ndelete cookie...");
        }

        gameLibrary.cookie.deleteSection(gameLibrary.cookie.key);

        let sectionName = "rubADubLibrary";
        gameLibrary.cookie.deleteValue(sectionName, "isNewGame");
        gameLibrary.cookie.deleteValue(sectionName, "isGameOver");
        gameLibrary.cookie.deleteValue(sectionName, "isGameFinished");
        gameLibrary.cookie.deleteValue(sectionName, "isGamePaused");
        gameLibrary.cookie.deleteValue(sectionName, "isTryAgain");
        gameLibrary.cookie.deleteValue(sectionName, "isContinued");
        gameLibrary.cookie.deleteValue(sectionName, "buttonContinueImageIndex");
        gameLibrary.cookie.deleteValue(sectionName, "infoType");
        gameLibrary.cookie.deleteSection(sectionName);

        sectionName = "rubADubLibrary.levelBlink";
        gameLibrary.cookie.deleteValue(sectionName, "interval");
        gameLibrary.cookie.deleteValue(sectionName, "duration");
        gameLibrary.cookie.deleteValue(sectionName, "elapsedTime");
        gameLibrary.cookie.deleteValue(sectionName, "isBlinking");
        gameLibrary.cookie.deleteValue(sectionName, "isVisibled");
        gameLibrary.cookie.deleteSection(sectionName);

        sectionName = "rubADubLibrary.level";
        gameLibrary.cookie.deleteValue(sectionName, "currentLevel");
        gameLibrary.cookie.deleteValue(sectionName, "isLoadFirstLevel");
        gameLibrary.cookie.deleteValue(sectionName, "isClearingBlocks");
        gameLibrary.cookie.deleteValue(sectionName, "clearingBlocksFactor");
        gameLibrary.cookie.deleteValue(sectionName, "blockMoveLength");
        gameLibrary.cookie.deleteSection(sectionName);


        sectionName = "rubADubLibrary.level.duck";
        gameLibrary.cookie.deleteValue(sectionName, "modelArrayIndex");
        gameLibrary.cookie.deleteValue(sectionName, "position");
        gameLibrary.cookie.deleteValue(sectionName, "angle");
        gameLibrary.cookie.deleteValue(sectionName, "isFrontFlipping");
        gameLibrary.cookie.deleteValue(sectionName, "isJumping");
        gameLibrary.cookie.deleteValue(sectionName, "jumpVelocity");
        gameLibrary.cookie.deleteValue(sectionName, "jumpAirTime");

        gameLibrary.cookie.deleteSection(sectionName);

        sectionName = "rubADubLibrary.level.followingDuckling";
        gameLibrary.cookie.deleteValue(sectionName, "total");
        gameLibrary.cookie.deleteValue(sectionName, "counter");
        gameLibrary.cookie.deleteValue(sectionName, "isVisibledArray");
        gameLibrary.cookie.deleteValue(sectionName, "momActionArray");
        gameLibrary.cookie.deleteSection(sectionName);

        sectionName = "gameLibrary.particle";
        gameLibrary.cookie.deleteValue(sectionName, "elementArray");
        gameLibrary.cookie.deleteSection(sectionName);
    }

    load() {
        gameLibrary.cookie.isConsoleLogVisibled = rubADubLibrary.isDebug;

        if (gameLibrary.cookie.isConsoleLogVisibled) {
            console.log("\nload cookie...");
        }

        let duckModelArrayIndex = RubADubLibrary.MODEL_MOM;
        let found = gameLibrary.cookie.loadSection(gameLibrary.cookie.key);

        if (found) {
            let sectionName = "rubADubLibrary";
            found = gameLibrary.cookie.loadSection(sectionName);

            if (found) {
                rubADubLibrary.isNewGame = gameLibrary.cookie.loadValue(sectionName, "isNewGame", false);
                rubADubLibrary.isGameOver = gameLibrary.cookie.loadValue(sectionName, "isGameOver", false);
                rubADubLibrary.isGameFinished = gameLibrary.cookie.loadValue(sectionName, "isGameFinished", false);
                rubADubLibrary.isGamePaused = gameLibrary.cookie.loadValue(sectionName, "isGamePaused", false);
                rubADubLibrary.isTryAgain = gameLibrary.cookie.loadValue(sectionName, "isTryAgain", false);
                rubADubLibrary.isContinued = gameLibrary.cookie.loadValue(sectionName, "isContinued", false);
                rubADubLibrary.buttonContinueImageIndex = gameLibrary.cookie.loadValue(sectionName, "buttonContinueImageIndex", false);
                rubADubLibrary.infoType = gameLibrary.cookie.loadValue(sectionName, "infoType", false);

                sectionName = "rubADubLibrary.levelBlink";
                found = gameLibrary.cookie.loadSection(sectionName);

                if (found) {
                    rubADubLibrary.levelBlink.interval = gameLibrary.cookie.loadValue(sectionName, "interval", 0);
                    rubADubLibrary.levelBlink.duration = gameLibrary.cookie.loadValue(sectionName, "duration", 0);
                    rubADubLibrary.levelBlink.elapsedTime = gameLibrary.cookie.loadValue(sectionName, "elapsedTime", 0);
                    rubADubLibrary.levelBlink.isBlinking = gameLibrary.cookie.loadValue(sectionName, "isBlinking", false);
                    rubADubLibrary.levelBlink.isVisibled = gameLibrary.cookie.loadValue(sectionName, "isVisibled", true);

                    sectionName = "rubADubLibrary.level";
                    found = gameLibrary.cookie.loadSection(sectionName);

                    if (found) {
                        rubADubLibrary.level.currentLevel = gameLibrary.cookie.loadValue(sectionName, "currentLevel", 0);
                        rubADubLibrary.level.isLoadFirstLevel = gameLibrary.cookie.loadValue(sectionName, "isLoadFirstLevel", false);
                        rubADubLibrary.level.isClearingBlocks = gameLibrary.cookie.loadValue(sectionName, "isClearingBlocks", false);
                        rubADubLibrary.level.clearingBlocksFactor = gameLibrary.cookie.loadValue(sectionName, "clearingBlocksFactor", 0);
                        rubADubLibrary.level.blockMoveLength = gameLibrary.cookie.loadValue(sectionName, "blockMoveLength", 0);

                        sectionName = "rubADubLibrary.level.duck";
                        found = gameLibrary.cookie.loadSection(sectionName);

                        if (found) {
                            duckModelArrayIndex = gameLibrary.cookie.loadValue(sectionName, "modelArrayIndex", RubADubLibrary.TEXTURE_MOM);
                            rubADubLibrary.level.duck.position = gameLibrary.cookie.loadValue(sectionName, "position", gameLibrary.vector.create());
                            rubADubLibrary.level.duck.angle = gameLibrary.cookie.loadValue(sectionName, "angle", gameLibrary.vector.create());
                            rubADubLibrary.level.duck.isFrontFlipping = gameLibrary.cookie.loadValue(sectionName, "isFrontFlipping", false);
                            rubADubLibrary.level.duck.isJumping = gameLibrary.cookie.loadValue(sectionName, "isJumping", false);
                            rubADubLibrary.level.duck.jumpVelocity = gameLibrary.cookie.loadValue(sectionName, "jumpVelocity", 0);
                            rubADubLibrary.level.duck.jumpAirTime = gameLibrary.cookie.loadValue(sectionName, "jumpAirTime", 0);

                            sectionName = "rubADubLibrary.level.followingDuckling";
                            found = gameLibrary.cookie.loadSection(sectionName);

                            if (found) {
                                rubADubLibrary.level.followingDuckling.total = gameLibrary.cookie.loadValue(sectionName, "total", 0);
                                rubADubLibrary.level.followingDuckling.counter = gameLibrary.cookie.loadValue(sectionName, "counter", 0);
                                rubADubLibrary.level.followingDuckling.isVisibledArray = gameLibrary.cookie.loadValue(sectionName, "isVisibledArray", []);
                                rubADubLibrary.level.followingDuckling.momActionArray = gameLibrary.cookie.loadValue(sectionName, "momActionArray", []);

                                sectionName = "gameLibrary.particle";
                                found = gameLibrary.cookie.loadSection(sectionName);

                                if (found) {
                                    gameLibrary.particle.elementArray = gameLibrary.cookie.loadValue(sectionName, "elementArray", []);
                                }
                            }
                        }
                    }
                }
            }
        }

        if (!found) {
            this.save();
        }

        // info
        if (rubADubLibrary.infoType == RubADubLibrary.INFO_TYPE_FINISHED) {
            rubADubLibrary.infoType = RubADubLibrary.INFO_TYPE_NONE;
            rubADubLibrary.level.currentLevel = 0;
        }

        // load duck model
        let duck = rubADubLibrary.level.duck;

        if (duck.modelArrayIndex != duckModelArrayIndex) {
            if (duckModelArrayIndex == RubADubLibrary.MODEL_MOM) {
                duck.changeModel(RubADubLibrary.MODEL_MOM, RubADubLibrary.TEXTURE_MOM);
            } else {
                duck.changeModel(RubADubLibrary.MODEL_DAD, RubADubLibrary.TEXTURE_DAD);
            }
        }

        // soap bubble
        for (let element of gameLibrary.particle.elementArray) {
            element.centerVector = createVector(...element.centerVector.values);
            element.accelerationVector = createVector(...element.accelerationVector.values);
            element.velocityVector = createVector(...element.velocityVector.values);
        }
    }

    save() {
        gameLibrary.cookie.isConsoleLogVisibled = rubADubLibrary.isDebug;

        if (gameLibrary.cookie.isConsoleLogVisibled) {
            console.log("\nsave cookie...");
        }

        gameLibrary.cookie.saveSection(gameLibrary.cookie.key);

        let sectionName = "rubADubLibrary";
        gameLibrary.cookie.saveSection(sectionName);
        gameLibrary.cookie.saveValue(sectionName, "isNewGame", rubADubLibrary.isNewGame);
        gameLibrary.cookie.saveValue(sectionName, "isGameOver", rubADubLibrary.isGameOver);
        gameLibrary.cookie.saveValue(sectionName, "isGameFinished", rubADubLibrary.isGameFinished);
        gameLibrary.cookie.saveValue(sectionName, "isGamePaused", rubADubLibrary.isGamePaused);
        gameLibrary.cookie.saveValue(sectionName, "isTryAgain", rubADubLibrary.isTryAgain);
        gameLibrary.cookie.saveValue(sectionName, "isContinued", rubADubLibrary.isContinued);
        gameLibrary.cookie.saveValue(sectionName, "buttonContinueImageIndex", rubADubLibrary.buttonContinueImageIndex);
        gameLibrary.cookie.saveValue(sectionName, "infoType", rubADubLibrary.infoType);

        sectionName = "rubADubLibrary.levelBlink";
        gameLibrary.cookie.saveSection(sectionName);
        gameLibrary.cookie.saveValue(sectionName, "interval", rubADubLibrary.levelBlink.interval);
        gameLibrary.cookie.saveValue(sectionName, "duration", rubADubLibrary.levelBlink.duration);
        gameLibrary.cookie.saveValue(sectionName, "elapsedTime", rubADubLibrary.levelBlink.elapsedTime);
        gameLibrary.cookie.saveValue(sectionName, "isBlinking", rubADubLibrary.levelBlink.isBlinking);
        gameLibrary.cookie.saveValue(sectionName, "isVisibled", rubADubLibrary.levelBlink.isVisibled);

        sectionName = "rubADubLibrary.level";
        gameLibrary.cookie.saveSection(sectionName);
        gameLibrary.cookie.saveValue(sectionName, "currentLevel", rubADubLibrary.level.currentLevel);
        gameLibrary.cookie.saveValue(sectionName, "isLoadFirstLevel", rubADubLibrary.level.isLoadFirstLevel);
        gameLibrary.cookie.saveValue(sectionName, "isClearingBlocks", rubADubLibrary.level.isClearingBlocks);
        gameLibrary.cookie.saveValue(sectionName, "clearingBlocksFactor", rubADubLibrary.level.clearingBlocksFactor);
        gameLibrary.cookie.saveValue(sectionName, "blockMoveLength", rubADubLibrary.level.blockMoveLength);

        sectionName = "rubADubLibrary.level.duck";
        gameLibrary.cookie.saveSection(sectionName);
        gameLibrary.cookie.saveValue(sectionName, "modelArrayIndex", rubADubLibrary.level.duck.modelArrayIndex);
        gameLibrary.cookie.saveValue(sectionName, "position", rubADubLibrary.level.duck.position);
        gameLibrary.cookie.saveValue(sectionName, "angle", rubADubLibrary.level.duck.angle);
        gameLibrary.cookie.saveValue(sectionName, "isFrontFlipping", rubADubLibrary.level.duck.isFrontFlipping);
        gameLibrary.cookie.saveValue(sectionName, "isJumping", rubADubLibrary.level.duck.isJumping);
        gameLibrary.cookie.saveValue(sectionName, "jumpVelocity", rubADubLibrary.level.duck.jumpVelocity);
        gameLibrary.cookie.saveValue(sectionName, "jumpAirTime", rubADubLibrary.level.duck.jumpAirTime);

        sectionName = "rubADubLibrary.level.followingDuckling";
        gameLibrary.cookie.saveSection(sectionName);
        gameLibrary.cookie.saveValue(sectionName, "total", rubADubLibrary.level.followingDuckling.total);
        gameLibrary.cookie.saveValue(sectionName, "counter", rubADubLibrary.level.followingDuckling.counter);
        gameLibrary.cookie.saveValue(sectionName, "isVisibledArray", rubADubLibrary.level.followingDuckling.isVisibledArray);
        gameLibrary.cookie.saveValue(sectionName, "momActionArray", rubADubLibrary.level.followingDuckling.momActionArray);

        sectionName = "gameLibrary.particle";
        gameLibrary.cookie.saveSection(sectionName);
        gameLibrary.cookie.saveValue(sectionName, "elementArray", gameLibrary.particle.elementArray);
    }
}

////////////////////////////////////////////////////////////
// duck
////////////////////////////////////////////////////////////
class RubADubDuck extends RubADubModel {
    static get JUMP_HEIGHT_BLOCKS()      {return 1.5;}
    static get JUMP_SPAN_BLOCKS()        {return   4;}
    static get START_BLOCK_OFFSET()      {return  -3;}

    constructor() {
        super(RubADubLibrary.MODEL_MOM, RubADubLibrary.TEXTURE_MOM);

        this.isJumping = false;
        this.jumpGravity = 0;
        this.jumpForce = 0;
        this.jumpVelocity = 0;
        this.jumpAirTime = 0;

        this.isFrontFlipping = false;
        this.frontFlipVelocity = 0;
        this.timeToFrontFlip = 0;

        this.isHit = false;
        this.onWaterY = 0;

        this.onBlock = null;
        this.onBlockY = 0;

        this.soapBubble = new RubADubSoapBubble();
        this.initCollisionSize();
        this.setOnWater();
    }

    changeModel(modelArrayIndex, gameImageArrayIndex) {
        super.setModel(modelArrayIndex, gameImageArrayIndex);
        this.initCollisionSize();
        this.setOnWater();
    }

    init() {
        let jumpHeight = RubADubDuck.JUMP_HEIGHT_BLOCKS * rubADubLibrary.level.block.size.y;
        let jumpDuration = (RubADubDuck.JUMP_SPAN_BLOCKS / RubADubLevel.BLOCKS_MOVE_PER_SEC) * 1000;
        let timeToPeak = jumpDuration * 0.5;
        let timeToFall = jumpDuration - timeToPeak;
        this.jumpGravity = (jumpHeight * 2) / sq(timeToPeak); // จากสูตรหาระยะทางเมื่อวัตถุเคลื่อนที่ด้วยความเร่งคงที่ เมื่อความเร็วที่จุดสูงสุดเป็น 0
        this.jumpForce = -this.jumpGravity * timeToPeak;
        this.jumpVelocity = 0;
        this.jumpAirTime = 0;

        this.timeToFrontFlip = timeToPeak * 0.125;
        let frontFlipDuration = timeToPeak - this.timeToFrontFlip + (timeToFall * 0.5);
        this.frontFlipVelocity = TWO_PI / frontFlipDuration;

        this.position.x = rubADubLibrary.level.centerBlockX + (RubADubDuck.START_BLOCK_OFFSET * rubADubLibrary.level.block.size.x);
        this.position.z = 0;
        this.isJumping = false;
        this.setOnWater();

        this.soapBubble.clear();
    }

    initCollisionSize() {
        this.size.y = rubADubLibrary.level.block.size.y;
        this.halfSize.y = rubADubLibrary.level.block.halfSize.y;
        this.collisionSize.x = this.size.x * 0.96;
        this.collisionHalfSize = gameLibrary.vector.scale(this.collisionSize, 0.5);
    }

    render() {
        this.update();
        let level = rubADubLibrary.level;
        super.render(this.position.x, this.position.y);
        level.followingDuckling.render();
        this.soapBubble.render();
    }

    reset() {
        this.onBlock = null;
    }

    setOnBlock(block) {
        if (block == null) {
            this.onBlock = null;
        } else if (this.onBlock != block) {
            this.onBlock = block;
            this.onBlockY = this.onBlock.position.y - this.onBlock.halfSize.y - this.halfSize.y;
            this.position.y = this.onBlockY;
            this.isJumping = false;
        }
    }

    setOnWater() {
        this.onWaterY = rubADubLibrary.level.pool.water.position.y - this.halfSize.y;

        if (this.onBlock != null) {
            this.onBlockY = this.onBlock.position.y - this.onBlock.halfSize.y - this.halfSize.y;
            this.position.y = this.onBlockY;
        } else if (!this.isJumping) {
            this.position.y = this.onWaterY;
        }
    }

    startJumping(jumpForce) {
        this.jumpVelocity = jumpForce;
        this.jumpAirTime = 0;
        this.angle.z = 0;
        this.isJumping = true;
        this.isFrontFlipping = false;
        this.onBlock = null;
    }

    stopJumping(floor) {
        this.position.y = floor;
        this.jumpVelocity = 0;
        this.jumpAirTime = 0;
        this.angle.z = 0;
        this.isJumping = false;
    }

    update() {
        let isJumpButtonPressed = keyIsDown("Space") || (gameLibrary.gameMode == RubADubLibrary.GAME_MODE_PLAY && rubADubLibrary.isMouseButtonDown && (mouseButton.left || touches.length > 0));

        if (!rubADubLibrary.isMotionFrozen()) {
            let level = rubADubLibrary.level;

            if (!this.isJumping) {
                if (isJumpButtonPressed) {
                    this.startJumping(this.jumpForce);
                } else if (this.onBlock == null) {
                    this.startJumping(0);
                }
            }

            let dt = rubADubLibrary.getDeltaTime();

            if (this.isJumping) {
                this.position.y += (this.jumpVelocity * dt) + (0.5 * this.jumpGravity * sq(dt)); // สูตรหาระยะทางเมื่อวัตถุเคลื่อนที่ด้วยความเร่งคงที่
                this.jumpVelocity += this.jumpGravity * dt;
                this.jumpAirTime += dt;

                if (!this.isFrontFlipping && this.jumpAirTime >= this.timeToFrontFlip && this.jumpVelocity < 0) {
                    this.isFrontFlipping = true;
                    this.angle.z = this.frontFlipVelocity * dt;
                }

                if (this.jumpVelocity > 0) {
                    if (this.onBlock != null && this.position.y >= this.onBlockY) {
                        this.stopJumping(this.onBlockY);
                    } else if (this.position.y >= this.onWaterY) {
                        this.stopJumping(this.onWaterY);
                        this.onBlock = null;
                    }
                }
            }

            if (this.isFrontFlipping && this.angle.z > 0) {
                this.angle.z += this.frontFlipVelocity * dt;

                if (this.angle.z >= TWO_PI) {
                    this.angle.z = 0;
                }
            } else if (!this.isJumping) {
                this.isFrontFlipping = false;

                if (this.position.y == this.onWaterY) {
                    this.offset.y = level.pool.water.bobbingMotion.offset;
                    this.angle.z = level.pool.water.bobbingMotion.angle;
                } else {
                    this.offset.y = 0;
                }
            }

            level.followingDuckling.addMomAction(this.position.y, this.offset.y, this.angle.z);
        }
    }
}

////////////////////////////////////////////////////////////
// duckling
////////////////////////////////////////////////////////////
class RubADubDuckling extends RubADubModel {
    constructor() {
        super(RubADubLibrary.MODEL_DUCKLING, RubADubLibrary.TEXTURE_DUCKLING);
    }

    render(x, y, row = -1, column = -1, useClearingBlocksFactor = true) {
        super.render(x, y, useClearingBlocksFactor);
        this.offset.y = 0;
        this.angle.z = 0;

        if (row != -1 && column != -1) {
            let size = this.size.y * 1.25;
            rubADubLibrary.renderBillboard(this.position, size, size, RubADubLibrary.TEXTURE_SOAP_BUBBLE, this.alpha);

            if (this.isHittingDuck()) {
                rubADubLibrary.level.followingDuckling.add(row, column);
            }
        }
    }
}

////////////////////////////////////////////////////////////
// following duckling
////////////////////////////////////////////////////////////
class RubADubFollowingDuckling {
    constructor() {
        let maxDuckling = 0;

        for (let level = 0; level < rubADubLibrary.level.numberOfLevels; level++) {
            for (let row = 0; row < rubADubLibrary.level.dataArray[level].length; row++) {
                let dataString = rubADubLibrary.level.getDataString(level, row);

                for (let column = 0; column < dataString.length; column++) {
                    if (dataString[column] == "O") {
                        maxDuckling++;
                    }
                }
            }
        }

        this.distanceFromMom = int(rubADubLibrary.level.duck.size.x * 1.5);
        this.actionDelay = int(this.distanceFromMom / rubADubLibrary.level.blockSpeed);
        this.momActionArrayStep = int(this.actionDelay * gameLibrary.targetFrameRate / 1000);
        this.maxMomActionArrayLength = (this.momActionArrayStep + 1) * maxDuckling;
        this.counter = new Array(rubADubLibrary.level.numberOfLevels).fill(0);
        this.total = 0;
        this.isVisibledArray = [];
        this.momActionArray = [];
    }

    add(row, column) {
        let level = rubADubLibrary.level;
        gameLibrary.sound.play(RubADubLibrary.SOUND_POP);
        this.counter[level.currentLevel]++;
        let found = this.isVisibledArray.indexOf(level.getRowColumnString(row, column));

        if (found != -1) {
            this.isVisibledArray.splice(found, 1);
        }

        this.total = this.counter.slice(0, level.currentLevel + 1).reduce((total, num) => total + num, 0);
    }

    addMomAction(momPositionY, momOffsetY, momAngleZ) {
        this.momActionArray.unshift({y: momPositionY, offset: momOffsetY, angle: momAngleZ});
        this.momActionArray.length = this.maxMomActionArrayLength;
    }

    reset() {
        let level = rubADubLibrary.level;
        this.counter[level.currentLevel] = 0;
        this.total = this.counter.slice(0, level.currentLevel + 1).reduce((total, num) => total + num, 0);
        this.isVisibledArray = [];

        for (let row = 0; row < level.dataArray[level.currentLevel].length; row++) {
            let dataString = level.getDataString(level.currentLevel, row);

            for (let column = 0; column < dataString.length; column++) {
                if (dataString[column] == "O") {
                    this.isVisibledArray.push(level.getRowColumnString(row, column));
                }
            }
        }
    }

    render() {
        let level = rubADubLibrary.level;
        let y = level.duck.halfSize.y - level.duckling.halfSize.y;
        let num = (level.isLoadFirstLevel || !rubADubLibrary.isTryAgain) ? 0 : this.total - this.counter[level.currentLevel];

        for (let ducklingIndex = 0; ducklingIndex < this.total; ducklingIndex++) {
            let i = this.momActionArrayStep * (ducklingIndex + 1);

            if (i < this.momActionArray.length) {
                let x = level.duck.position.x - (this.distanceFromMom * (ducklingIndex + 1));
                level.duckling.offset.y = this.momActionArray[i].offset;
                level.duckling.angle.z = this.momActionArray[i].angle;
                level.duckling.render(x, y + this.momActionArray[i].y, -1, -1, ducklingIndex >= num);
            }
        }
    }
}

////////////////////////////////////////////////////////////
// level
////////////////////////////////////////////////////////////
class RubADubLevel {
    static get BLOCKS_MOVE_PER_SEC()     {return   6;}
    static get FADING_BLOCKS()           {return   3;}
    static get CLEARING_BLOCK_DURATION() {return 500;}

    constructor() {
        this.currentLevel = 0;
        this.dataArray = [];

        // 1
        this.dataArray.push(["                                         O",
                             "                                          ",
                             "X      A      XXXXX    AA     XAA      X  ",
                            ]);

        // 2
        this.dataArray.push(["                  O                        ",
                             "                            XXXXX          ",
                             "A    AA     X   X   X   A           AAXAA X"
                            ]);

        // 3
        this.dataArray.push(["                 XXAA X             A                                   ",
                             "         XXXXX         O   X        X                                   ",
                             "      X                         X                                       ",
                             "   X             XXXXXX   XXXX     X                                    ",
                             "X  A                  A       AAAAA   X    A    A    A     XAAA     AX A"
                            ]);
        /*
         // 4
         this.dataArray.push(["                                                              X                                                                  ",
         "                                                          X   O     A                                                            ",
         "                                                      X                                                                          ",
         "                    XXXX                          X           A                                                                 A",
         "A     AA   AA   AA        AAA  AAA   A     AAAX       A  XXXXXX    X         AA     A      AA       AAA     AAAX  X    X    X    "
         ]);

         // 5
         this.dataArray.push(["                                                                                                                                                       AA              ",
         "                                                                                                                                                   X                   ",
         "                                                                                                                                               X                       ",
         "                                                                                                            XXXXXXX    X    X    X    X    X                           ",
         "                                                                                        XXXX      XXXXXXX                                            X                 ",
         "                                                                   XXXXX      XXXXXXX         X                                                  X                     ",
         "                                                     A    XX   XX         X                                AA                             XXXX             O           ",
         "                                                XXXXXXXX                                AAAAAAAAAAA                                                                    ",
         "A     XA    A      AA       XA    AAAX      X                       AAA        XA  AX                     XXXX    XAAAA     A         AA          AAA    A  X         A"
         ]);

         // 6
         this.dataArray.push(["                               A           A                                                                                                                                                         ",
         "                             XXXXXXXXXXX      A                                                                                                                                                      ",
         "                         XX               X                                                                                                                                                          ",
         "                    XX                       X      XXXXXXXXXX    O                                             A                                                 A               A                 A",
         "          XXXXXXX                               X      A                     X                                XXX                             X                   X             XXX                 X",
         "      X                                            X      AA            X          X          AAA        X          X          AAA       X          X         X            X          X         X    ",
         "AX                                                  AAX        A   X    A          AAAAAAX          X    A          AAAAAAX         X    A          AAAAAAX   A       X    A          AAAAAAX   A    "
         ]);

         // 7
         this.dataArray.push(["                                                                                                 X    X    X    X    X    AA                ",
         "                                                                                           AX              AAAAAAAAO                        ",
         "                                                                                     XXXXXXXXXXXXXXXXXX                                     ",
         "                                                                    A            XX                    XXXX                                 ",
         "                                                            XXXXXXXXXXXXXXXXXX                               X       O                      ",
         "                                                        XX                                                      X                           ",
         "                    AA                             XX                   A                        A                                          ",
         "X    XAAAA     XX        A     AA     AAA      X                        X                        X                       XA            AAXAA",
         ]);

         // 8
         this.dataArray.push(["                                                                                                                     AAAAAA                                      ",
         "                                                                                                                 X                  AA                           ",
         "                                                                                                             X      XXXXXXXX    X                                ",
         "                                                                                                X       X                   AAAA AAX                             ",
         "                                                                                            X      XXAAA                            AAX                          ",
         "                                                                               X       X                                               AAX                       ",
         "                                                                           X      XXAAA                                                   AAX      AAAAAA        ",
         "                                                  AAA         X       X                                                                      AAX              X  ",
         "                                              X           X      XXAAA            A                A                A                           AAXXXXXXXX      O",
         "        AAA  AAAX               X    X    X   A      XAAAA       A                X                X                X                                         A  ",
         ]);

         // 9
         this.dataArray.push(["                                                                                                                                                                                        AA       ",
         "                                                                                                                                                                 XXXXXXXXXAAAAXAAAAX             ",
         "                                                                                                                                                    XXXXXXXXXXXXX                                ",
         "                                                                                                                                               XX                                                ",
         "                                                                                                           AA                             XXXXX                                                  ",
         "                                                                                                       X                             XXXXX                                                       ",
         "                                                                                                   XAAAA            A            XXXX                                                            ",
         "                                                                                              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                                                                 ",
         "                                                                                        XXXXXX                                                                                                   ",
         "                                                                    X       X       X                                                                                                            ",
         "                                                                X      XAAA    XAAA                                                                                                              ",
         "                                                          X                                                                                                                                      ",
         "                                                     X                                                                                                                                           ",
         "                       AAAAA                    X                                                                                                                                                ",
         "                                 X    X    X                                                                                                                                                     ",
         "       AAAAAA         XXXXXXX                                                                                                                                                                    ",
         "                  X                                                                                                                                          O                             XXX   ",
         "    AXXXXXXXXX                   A                        A            A                                     A                                        AXXXX                                      ",
         "XXX           AAAAA              X                        X            X                                     X                                            AAAAA               XAAAAX          AAA",
         ]);
         */

        this.duck = null;
        this.duckling = null;
        this.followingDuckling = null;
        this.block = null;
        this.spike = null;
        this.pool = null;

        this.fadeOutBlockX = 0;
        this.fadeInBlockX = 0;
        this.centerBlockX = 0;
        this.blockSpeed = 0;
        this.blockMoveStep = 0;
        this.maxBlockMoveLength = 0;
        this.isBlockCollisionChecked = false;
        this.numberOfLevels = this.dataArray.length;
        this.lastLevel = this.numberOfLevels - 1;

        this.isLoadFirstLevel = false;
        this.isClearingBlocks = false;
        this.clearingBlocksFactor = 0;
        this.blockMoveLength = 0;
        this.clearBlocks(false);
    }

    clearBlocks(isClearingBlocks) {
        this.isClearingBlocks = isClearingBlocks;
        this.clearingBlocksFactor = 1.0;

        if (!this.isClearingBlocks) {
            this.blockMoveLength = 0;
        }
    }

    getDataString(level, row) {
        let i = this.dataArray[level].length - 1 - row;
        return this.dataArray[level][i];
    }

    getRowColumnString(row, column) {
        return str(row) + "," + str(column);
    }

    init() {
        if (this.pool == null) {
            if (rubADubLibrary.isDebug) {
                console.log("\ninit model");
            }

            // block
            this.block = new RubADubBlock();
            this.blockSpeed = (RubADubLevel.BLOCKS_MOVE_PER_SEC * this.block.size.x) / 1000;

            // pool
            this.pool = new RubADubPool(0, 0, 0);

            this.centerBlockX = this.pool.farLeftBlockPosition.x + (ceil(RubADubWater.BLOCKS_ALONG_LENGTH * 0.5) * this.block.size.x);

            let fadingWidth = (RubADubLevel.FADING_BLOCKS + 1) * this.block.size.x;
            this.fadeInBlockX = this.pool.nearRightBlockPosition.x - fadingWidth;
            this.fadeOutBlockX = this.pool.farLeftBlockPosition.x + fadingWidth;

            // model
            this.duck = new RubADubDuck();
            this.duckling = new RubADubDuckling();
            this.spike = new RubADubSpike();

            this.followingDuckling = new RubADubFollowingDuckling();

            this.load(0);
            this.duck.init();
        }
    }

    load(level) {
        this.currentLevel = gameLibrary.clamp(level, 0, this.lastLevel);
        let maxLength = max(this.dataArray[this.currentLevel].map(w => w.length));
        this.maxBlockMoveLength = this.pool.poolLength + ((maxLength - 1) * this.block.size.x);
        this.blockMoveLength = 0;
        this.isLoadFirstLevel = false;
        rubADubLibrary.isTryAgain = false;
        this.followingDuckling.reset();
    }

    next() {
        if (this.currentLevel < this.lastLevel) {
            this.load(this.currentLevel + 1);
            rubADubLibrary.levelBlink.start();
        } else {
            rubADubLibrary.finishGame();
        }
    }

    render() {
        if (gameLibrary.gameMode == RubADubLibrary.GAME_MODE_PLAY && (this.isClearingBlocks || (!rubADubLibrary.isGameFinished && !rubADubLibrary.isMotionFrozen()))) {
            this.blockMoveStep = this.blockSpeed * rubADubLibrary.getDeltaTime();
        } else {
            this.blockMoveStep = 0;
        }

        push();
        translate(gameLibrary.displayCenterPoint.x, gameLibrary.displayCenterPoint.y, 0);
        noStroke();

        this.pool.render();
        this.duck.render();

        // clearing blocks
        if (this.isClearingBlocks && this.clearingBlocksFactor > 0) {
            this.clearingBlocksFactor -= rubADubLibrary.getDeltaTime() / RubADubLevel.CLEARING_BLOCK_DURATION;

            if (this.clearingBlocksFactor <= 0) {
                this.clearingBlocksFactor = 0;
            }
        }

        // block
        this.isBlockCollisionChecked = false;

        if (gameLibrary.gameMode != RubADubLibrary.GAME_MODE_MENU && !rubADubLibrary.levelBlink.isBlinking) {
            this.blockMoveLength += this.pool.water.moveStep;
        }

        for (let row = 0; row < this.dataArray[this.currentLevel].length; row++) {
            let dataString = this.getDataString(this.currentLevel, row);
            let current = min(ceil(this.blockMoveLength / this.block.size.x), dataString.length - 1);
            let first = max(current - RubADubPool.BLOCKS_ALONG_LENGTH + 1, 0);
            let hasCharXAO = /[XAO]/.test(dataString);

            if (hasCharXAO) {
                for (let column = first; column <= current; column++) {
                    let x = this.pool.nearRightBlockPosition.x + (this.block.size.x * column) - this.blockMoveLength;

                    if (x >= this.pool.farLeftBlockPosition.x && x <= this.pool.nearRightBlockPosition.x) {
                        let y = this.pool.water.position.y - (this.block.size.y * row);

                        switch (dataString[column]) {
                            case "X":
                                this.block.render(x, y - this.block.halfSize.y);
                                break;

                            case "A":
                                this.spike.render(x, y - this.spike.halfSize.y );
                                break;

                            case "O":
                                if (this.followingDuckling.isVisibledArray.indexOf(this.getRowColumnString(row, column)) != -1) {
                                    this.duckling.render(x, y - this.block.halfSize.y, row, column);
                                }
                                break;
                        }
                    }
                }
            }
        }

        if (this.isBlockCollisionChecked) {
            if (this.duck.isHit && this.duck.onBlock == null) {
                rubADubLibrary.gameOver();
            }
        }

        if (gameLibrary.gameMode != RubADubLibrary.GAME_MODE_MENU) {
            if (this.blockMoveLength >= this.maxBlockMoveLength || (this.isClearingBlocks && this.clearingBlocksFactor == 0)) {
                if (this.isClearingBlocks) {
                    this.clearBlocks(false);
                    this.followingDuckling.reset();
                } else if (!this.isLoadFirstLevel) {
                    this.next();
                }

                if (this.isLoadFirstLevel) {
                    this.load(0);
                }
            }
        }
        pop();
    }
}

////////////////////////////////////////////////////////////
// parallax background
////////////////////////////////////////////////////////////
class RubADubParallaxBackground {
    constructor(maxZoom = 1.3, smoothness = 10 / 1000) {
        this.layers = [];
        this.maxY = 0;
        this.maxZoom = maxZoom;
        this.smoothness = smoothness;

        this.currentX = 0;
        this.currentY = 0;
        this.targetX = 0;
        this.targetY = 0;

        this.isDragging = false;
        this.startMouseX = 0;
        this.startMouseY = 0;
        this.savedOffsetX = 0;
        this.savedOffsetY = 0;
    }

    add(imageIndex, speed) {
        this.layers.push({img: gameLibrary.gameImageArray[imageIndex].image, speed: speed, zoom: 0});
        let maxSpeed = max(this.layers.map(c => c.speed ?? 0));

        for (let layer of this.layers) {
            let speedRatio = (maxSpeed > 0) ? layer.speed / maxSpeed : 0;
            layer.zoom = 1 + (this.maxZoom - 1) * speedRatio;
        }

        this.maxY = this.getMaxPanY();
    }

    getAspectCoverSize(img, targetW, targetH, minZoom) {
        let scaleRatio = max((targetW * minZoom) / img.width, (targetH * minZoom) / img.height);
        return {w: img.width * scaleRatio, h: img.height * scaleRatio};
    }

    getMaxPanY() {
        let maxPanY = 0;

        if (this.layers.length > 0) {
            let primaryLayer = this.layers.reduce((prev, curr) => curr.speed > prev.speed ? curr : prev);

            if (primaryLayer.speed > 0) {
                let size = this.getAspectCoverSize(primaryLayer.img, gameLibrary.displayWidth, gameLibrary.displayHeight, primaryLayer.zoom);
                maxPanY = abs((gameLibrary.displayHeight - size.h) * 0.5) / primaryLayer.speed;
            }
        }

        return maxPanY;
    }

    moveBy(dx = 0, dy = 0) {
        if (this.layers.length > 0) {
            this.targetX += dx;
            this.targetY = gameLibrary.clamp(this.targetY + dy, -this.maxY, this.maxY);
            this.savedOffsetX = this.targetX;
            this.savedOffsetY = this.targetY;
        }
    }

    moveTo(x = 0, y = 0) {
        if (this.layers.length > 0) {
            this.targetX = x;
            this.targetY = gameLibrary.clamp(y, -this.maxY, this.maxY);

            this.savedOffsetX = this.targetX;
            this.savedOffsetY = this.targetY;
        }
    }

    onMouseButtonDown() {
        this.isDragging = true;
    }

    onMouseButtonUp() {
        if (this.isDragging) {
            this.isDragging = false;
            this.savedOffsetX = this.targetX;
            this.savedOffsetY = this.targetY;
        }
    }

    onMouseDrag() {
        if (this.isDragging) {
            let rawX = this.savedOffsetX - (mouseX - gameLibrary.touchBeganPoint.x);
            let rawY = this.savedOffsetY + (mouseY - gameLibrary.touchBeganPoint.y);

            this.targetX = rawX;
            this.targetY = gameLibrary.clamp(rawY, -this.maxY, this.maxY);
        }
    }

    render() {
        if (this.layers.length > 0) {
            let dt = rubADubLibrary.getDeltaTime();
            let smoothFactor = 1 - exp(-this.smoothness * dt);
            this.currentX = lerp(this.currentX, this.targetX, smoothFactor);
            this.currentY = lerp(this.currentY, this.targetY, smoothFactor);

            push();
            for (let layer of this.layers) {
                let size = this.getAspectCoverSize(layer.img, gameLibrary.displayWidth, gameLibrary.displayHeight, layer.zoom);
                let centerX = (gameLibrary.displayWidth - size.w) * 0.5;
                let centerY = (gameLibrary.displayHeight - size.h) * 0.5;

                if (layer.speed === 0) {
                    image(layer.img, centerX, centerY, size.w, size.h);
                } else {
                    let y = gameLibrary.clamp(centerY + this.currentY * layer.speed, gameLibrary.displayHeight - size.h, 0);
                    let rawX = centerX + this.currentX * layer.speed;
                    let wrappedX = ((rawX % size.w) - size.w) % size.w;

                    for (let drawX = wrappedX; drawX < gameLibrary.displayWidth; drawX += size.w) {
                        image(layer.img, drawX, y, size.w, size.h);
                    }
                }
            }
            pop();
        }
    }

    reset() {
        let movingLayers = this.layers.filter(l => l.speed > 0);

        if (movingLayers.length > 0) {
            let slowestLayer = movingLayers.reduce((prev, curr) => curr.speed < prev.speed ? curr : prev);
            let size = this.getAspectCoverSize(slowestLayer.img, gameLibrary.displayWidth, gameLibrary.displayHeight, slowestLayer.zoom);
            let cycleW = size.w / slowestLayer.speed;
            this.currentX = this.currentX % cycleW;
        }

        this.targetX = 0;
        this.targetY = 0;
        this.savedOffsetX = 0;
        this.savedOffsetY = 0;
    }

    resize() {
        this.maxY = this.getMaxPanY();
        this.targetY = gameLibrary.clamp(this.targetY, -this.maxY, this.maxY);
        this.savedOffsetY = this.targetY;
    }
}

////////////////////////////////////////////////////////////
// pool
////////////////////////////////////////////////////////////
class RubADubPool {
    static get BLOCKS_ALONG_LENGTH()      {return 25;}
    static get BLOCKS_ALONG_WIDTH()       {return  7;}

    constructor(x, y, z) {
        this.position = gameLibrary.vector.create(x, y, z);
        this.poolLength = (RubADubPool.BLOCKS_ALONG_LENGTH - 1) * rubADubLibrary.level.block.size.x;
        this.poolWidth = (RubADubPool.BLOCKS_ALONG_WIDTH - 1) * rubADubLibrary.level.block.size.z;
        let halfLength = this.poolLength * 0.5;
        let halfWidth = this.poolWidth * 0.5;
        this.farLeftBlockPosition = gameLibrary.vector.create(this.position.x - halfLength, this.position.y, this.position.z - halfWidth);
        this.nearRightBlockPosition = gameLibrary.vector.create(this.position.x + halfLength, this.position.y, this.position.z + halfWidth);

        // water
        this.water = new RubADubWater(x, y, z);

        // floor
        this.floorColor = color(0, 229, 255, 255);
        let floorLength = this.water.totalLength;
        let floorWidth = this.water.totalWidth;
        this.floorPosition = gameLibrary.vector.create(x, y + rubADubLibrary.level.block.halfSize.y, z);

        this.floor = buildGeometry(() => {
            push();
            rotateX(HALF_PI);
            plane(floorLength, floorWidth);
            pop();
        });
    }

    render() {
        let level = rubADubLibrary.level;

        push();
        noStroke();
        texture(gameLibrary.gameImageArray[level.block.gameImageArrayIndex].image);

        for (let w = 0; w < RubADubPool.BLOCKS_ALONG_WIDTH; w++) {
            let position = gameLibrary.vector.create(this.farLeftBlockPosition.x, this.farLeftBlockPosition.y, this.farLeftBlockPosition.z + (w * level.block.size.z));

            for (let l = 0; l < RubADubPool.BLOCKS_ALONG_LENGTH; l++) {
                if (w == 0 || w == RubADubPool.BLOCKS_ALONG_WIDTH - 1 || l == 0 || l == RubADubPool.BLOCKS_ALONG_LENGTH - 1) {
                    let x = position.x + (l * level.block.size.x);

                    push();
                    translate(x, position.y, position.z);

                    if (rubADubLibrary.isDebug) {
                        if (x == rubADubLibrary.level.centerBlockX) {
                            tint(255, 0, 0);
                        } else if (x == this.farLeftBlockPosition.x) {
                            tint(0, 255, 0);
                        } else if (x == this.nearRightBlockPosition.x) {
                            tint(0, 0, 255);
                        } else if (x == rubADubLibrary.level.fadeOutBlockX) {
                            tint(0, 128, 0);
                        } else if (x == rubADubLibrary.level.fadeInBlockX) {
                            tint(0, 0, 128);
                        }
                    }

                    model(gameLibrary.modelArray[level.block.modelArrayIndex]);

                    if (rubADubLibrary.isDebug) {
                        noTint();
                    }

                    pop();
                }
            }
        }
        pop();

        // floor
        push();
        noStroke();
        tint(this.floorColor);
        texture(gameLibrary.gameImageArray[RubADubLibrary.TEXTURE_MOSAIC_TILE].image);
        translate(this.floorPosition.x, this.floorPosition.y, this.floorPosition.z);
        model(this.floor);
        pop();

        this.water.render();
    }
}

////////////////////////////////////////////////////////////
// soap bubble
////////////////////////////////////////////////////////////
class RubADubSoapBubble {
    static get SOAP_BUBBLE_TAG() {return 0;}
    static get SPAWN_TIME()      {return 20;}
    static get UPDATE_TIME()     {return 30;}

    constructor() {
        this.spawnTime = 0;
        this.updateTime = 0;
    }

    add(x, y) {
        this.spawnTime = 0;

        let acceleration = gameLibrary.vector.create(random(-0.2, -0.15), random(-0.1, 0.0), random(-0.01, 0.01));
        let velocity = gameLibrary.vector.create();
        let startSize = random(2, 3);
        let sizeChanged = random(0.1, 0.2);
        let lifespanChanged = random(10, 15);
        let position = gameLibrary.vector.create(x, y + (rubADubLibrary.level.duck.halfSize.y * 0.9), rubADubLibrary.level.duck.position.z + random(-3.0, 3.0));

        gameLibrary.particle.add(RubADubSoapBubble.SOAP_BUBBLE_TAG, position, acceleration, velocity, startSize, sizeChanged, lifespanChanged, 0x0000);
    }

    clear() {
        gameLibrary.particle.clear();
    }

    render() {
        let level = rubADubLibrary.level;
        let dt = rubADubLibrary.getDeltaTime();

        if (!rubADubLibrary.isMotionFrozen()) {
            this.spawnTime += dt;

            if (this.spawnTime >= RubADubSoapBubble.SPAWN_TIME) {
                this.add(level.duck.position.x, level.duck.position.y);
            }

            this.updateTime += dt;

            if (this.updateTime >= RubADubSoapBubble.UPDATE_TIME) {
                this.updateTime = 0;
            }
        }

        for (let i = gameLibrary.particle.elementArray.length - 1; i > 0; i--) {
            let element = gameLibrary.particle.elementArray[i];

            if (element.tag == RubADubSoapBubble.SOAP_BUBBLE_TAG) {
                let isDead = false;

                if (!rubADubLibrary.isMotionFrozen() && this.updateTime == 0) {
                    element.velocityVector.x = -level.pool.water.moveStep * random(0.5, 1.5);
                    isDead = gameLibrary.particle.updateElement(i);
                }

                if (!isDead) {
                    rubADubLibrary.renderBillboard(element.centerVector, element.size, element.size, RubADubLibrary.TEXTURE_SOAP_BUBBLE, element.lifespan);
                }
            }
        }
    }
}

////////////////////////////////////////////////////////////
// spike
////////////////////////////////////////////////////////////
class RubADubSpike extends RubADubModel {
    constructor() {
        super(RubADubLibrary.MODEL_SPIKE, RubADubLibrary.TEXTURE_SPIKE);

        this.collisionSize = gameLibrary.vector.scale(this.size, 0.4);
        this.collisionHalfSize = gameLibrary.vector.scale(this.collisionSize, 0.5);
    }

    render(x, y) {
        super.render(x, y);

        if (this.isHittingDuck()) {
            rubADubLibrary.gameOver();
        }
    }
}

////////////////////////////////////////////////////////////
// water
////////////////////////////////////////////////////////////
class RubADubWater {
    static get BLOCKS_ALONG_LENGTH() {return RubADubPool.BLOCKS_ALONG_LENGTH - 2;}
    static get BLOCKS_ALONG_WIDTH()  {return RubADubPool.BLOCKS_ALONG_WIDTH - 2;}

    static get FRAME_SPEED()         {return 15 / 1000;}
    static get NUMBER_OF_FRAMES()    {return 8;}

    constructor(x, y, z) {
        this.color = color(0, 229, 255, 178);
        this.frameImage = null;
        this.frameImageSize = new GameSize(gameLibrary.gameImageArray[RubADubLibrary.TEXTURE_WATER].width, gameLibrary.gameImageArray[RubADubLibrary.TEXTURE_WATER].height / RubADubWater.NUMBER_OF_FRAMES);
        this.position = gameLibrary.vector.create(x, y - rubADubLibrary.level.block.halfSize.y, z);
        this.totalLength = RubADubWater.BLOCKS_ALONG_LENGTH * rubADubLibrary.level.block.size.x;
        this.totalWidth = RubADubWater.BLOCKS_ALONG_WIDTH * rubADubLibrary.level.block.size.z;
        this.halfLength = this.totalLength * 0.5;
        this.halfWidth = this.totalWidth * 0.5;
        this.frame = 0.0;
        this.frameInt = 0;
        this.uvOffset = 0;
        this.moveStep = 0;
        this.bobbingMotion = new RubADubWaterBobbingMotion();
    }

    render() {
        this.bobbingMotion.update();

        let dt = rubADubLibrary.getDeltaTime();
        this.moveStep = rubADubLibrary.isMotionFrozen() ? 0 : rubADubLibrary.level.blockSpeed * dt;
        this.uvOffset = ((this.uvOffset + (this.moveStep / this.totalLength)) % 1 + 1) % 1;
        this.frame += dt * RubADubWater.FRAME_SPEED;

        if (this.frame >= RubADubWater.NUMBER_OF_FRAMES) {
            this.frame = 0.0;
        }

        if (this.frame != this.frameInt || this.frameImage == null) {
            this.frameInt = int(this.frame);
            this.frameImage = gameLibrary.gameImageArray[RubADubLibrary.TEXTURE_WATER].image.get(0, this.frameInt * this.frameImageSize.height, this.frameImageSize.width, this.frameImageSize.height);
        }

        push();
        noStroke();
        tint(this.color);
        texture(this.frameImage);
        translate(this.position.x, this.position.y, this.position.z);
        beginShape();
        vertex(-this.halfLength, 0, -this.halfWidth, 0 + this.uvOffset, 0);
        vertex( this.halfLength, 0, -this.halfWidth, 1 + this.uvOffset, 0);
        vertex( this.halfLength, 0,  this.halfWidth, 1 + this.uvOffset, 1);
        vertex(-this.halfLength, 0,  this.halfWidth, 0 + this.uvOffset, 1);
        endShape(CLOSE);
        pop();
    }
}

////////////////////////////////////////////////////////////
// water bobbing motion
////////////////////////////////////////////////////////////
class RubADubWaterBobbingMotion {
    constructor(config = {}) {
        this.wavePhase = random(TWO_PI);
        this.speedNoisePos = random(256);
        this.heightNoisePos = random(256);
        this.tiltNoisePos = random(256);

        this.speedNoiseRate = config.speedNoiseRate ?? 0.0008;
        this.heightNoiseRate = config.heightNoiseRate ?? 0.0012;
        this.tiltNoiseRate = config.tiltNoiseRate ?? 0.0010;

        this.minWaveSpeed = config.minWaveSpeed ?? 0.005; // radians per milliseconds
        this.maxWaveSpeed = config.maxWaveSpeed ?? 0.01; // radians per milliseconds

        this.minWaveHeight = config.minWaveHeight ?? 0.0;
        this.maxWaveHeight = config.maxWaveHeight ?? 2.0;

        this.submergeRatio = config.submergeRatio ?? 1.0;

        this.minTiltAngle = config.minTiltAngle ?? 0.05;
        this.maxTiltAngle = config.maxTiltAngle ?? 0.15;

        this.offset = 0;
        this.angle = 0;
    }

    update() {
        let dt = rubADubLibrary.getDeltaTime();

        this.speedNoisePos = (this.speedNoisePos + dt * this.speedNoiseRate) % 256;
        this.heightNoisePos = (this.heightNoisePos + dt * this.heightNoiseRate) % 256;
        this.tiltNoisePos = (this.tiltNoisePos + dt * this.tiltNoiseRate) % 256;

        let waveSpeed = map(noise(this.speedNoisePos), 0, 1, this.minWaveSpeed, this.maxWaveSpeed);
        this.wavePhase = (this.wavePhase + waveSpeed * dt) % TWO_PI;

        let waveHeight = map(noise(this.heightNoisePos), 0, 1, this.minWaveHeight, this.maxWaveHeight);
        let upDownWave = sin(this.wavePhase);
        this.offset = (upDownWave * waveHeight) + (abs(waveHeight) * this.submergeRatio);

        let tiltAmp = map(noise(this.tiltNoisePos), 0, 1, this.minTiltAngle, this.maxTiltAngle);
        this.angle = sin(this.wavePhase + 1) * tiltAmp;
    }
}

////////////////////////////////////////////////////////////
// user defined prototypes
////////////////////////////////////////////////////////////
GameLibrary.prototype.onButtonPressed = function(buttonIndex) {
    switch (buttonIndex) {
        case GameLibrary.BUTTON_FULLSCREEN:
            this.toggleFullscreen();
            break;

        case RubADubLibrary.BUTTON_PAUSE:
            rubADubLibrary.pauseGame();
            break;

        case RubADubLibrary.BUTTON_NEW_GAME:
            rubADubLibrary.isContinued = false;
            rubADubLibrary.isTryAgain = false;
            rubADubLibrary.isNewGame = true;
            this.changeGameMode(RubADubLibrary.GAME_MODE_NEW_GAME);
            break;

        case RubADubLibrary.BUTTON_CONTINUE:
            if (rubADubLibrary.buttonContinueImageIndex = rubADubLibrary.isTryAgain) {
                rubADubLibrary.isContinued = false;
                rubADubLibrary.isTryAgain = true;
                rubADubLibrary.isNewGame = true;
            } else {
                rubADubLibrary.isContinued = true;
                rubADubLibrary.isTryAgain = false;
                rubADubLibrary.isNewGame = false;
            }

            this.changeGameMode(RubADubLibrary.GAME_MODE_NEW_GAME);
            break;
    }
};

GameLibrary.prototype.onChangeGameMode = function(gameMode) {
    switch (gameMode) {
        case RubADubLibrary.GAME_MODE_NEW_GAME:
            rubADubLibrary.newGame();

            if (rubADubLibrary.isJustStarted) {
                rubADubLibrary.isJustStarted = false;
            }
            break;

        case RubADubLibrary.GAME_MODE_PLAY:
            rubADubLibrary.camera.reset();
            rubADubLibrary.isMouseButtonDown = false;
            break;

        case RubADubLibrary.GAME_MODE_MENU:
            rubADubLibrary.camera.autoDrift();
            rubADubLibrary.isContinued = rubADubLibrary.isGamePaused;
            rubADubLibrary.isTryAgain = rubADubLibrary.isGameOver;
            rubADubLibrary.buttonContinueImageIndex = rubADubLibrary.isTryAgain ? RubADubLibrary.IMAGE_TRY_AGAIN_0 : RubADubLibrary.IMAGE_CONTINUE_0;
            this.showButton(RubADubLibrary.BUTTON_PAUSE, false);
            this.selectedButton = (rubADubLibrary.isGamePaused || rubADubLibrary.isContinued || rubADubLibrary.isTryAgain) ? RubADubLibrary.BUTTON_CONTINUE : RubADubLibrary.BUTTON_NEW_GAME;
            rubADubLibrary.cookie.save();
            break;
    }
};

GameLibrary.prototype.onGameReady = function() {
    rubADubLibrary.init();
    rubADubLibrary.cookie.load();
    this.changeGameMode(RubADubLibrary.GAME_MODE_MENU);
};

GameLibrary.prototype.onKeyPressed = function(keyCode) {
    if (this.isYesOrNo) {
        if (keyCode == GameLibrary.KEY_Y) {
            rubADubLibrary.cookie.delete();
            console.log("cleared");
        } else {
            console.log("cancelled");
        }

        this.isYesOrNo = false;
    } else if (keyCode == GameLibrary.KEY_D) {
        rubADubLibrary.isDebug = !rubADubLibrary.isDebug;
        console.log("isDebug: %s", rubADubLibrary.isDebug ? "on" : "off");
    } else if (keyCode == GameLibrary.KEY_C) {
        console.log("clear cookies? (y/n)");
        this.isYesOrNo = true;
    } else if (this.gameMode == RubADubLibrary.GAME_MODE_PLAY) {
        if (keyCode == GameLibrary.KEY_ESC) {
            rubADubLibrary.pauseGame();
        }
    } else if (this.gameMode == RubADubLibrary.GAME_MODE_MENU) {
        if (this.isButtonVisibled(RubADubLibrary.BUTTON_CONTINUE, true)) {
            if (keyCode == GameLibrary.KEY_UP) {
                this.selectedButton = (this.selectedButton == RubADubLibrary.BUTTON_NEW_GAME) ? RubADubLibrary.BUTTON_CONTINUE : RubADubLibrary.BUTTON_NEW_GAME;
            } else if (keyCode == GameLibrary.KEY_DOWN) {
                this.selectedButton = (this.selectedButton == RubADubLibrary.BUTTON_CONTINUE) ? RubADubLibrary.BUTTON_NEW_GAME : RubADubLibrary.BUTTON_CONTINUE;
            } else if (keyCode == GameLibrary.KEY_ENTER) {
                if (this.selectedButton != -1) {
                    this.onButtonPressed(this.selectedButton);
                }
            } else if (keyCode == GameLibrary.KEY_ESC) {
                this.selectedButton = RubADubLibrary.BUTTON_CONTINUE;
                this.onButtonPressed(this.selectedButton);
            }
        } else if (this.isButtonVisibled(RubADubLibrary.BUTTON_NEW_GAME, true)) {
            if (keyCode == GameLibrary.KEY_UP || keyCode == GameLibrary.KEY_DOWN) {
                this.selectedButton = RubADubLibrary.BUTTON_NEW_GAME;
            } else if (keyCode == GameLibrary.KEY_ENTER) {
                this.onButtonPressed(RubADubLibrary.BUTTON_NEW_GAME);
            }
        }
    }
};

GameLibrary.prototype.onKeyReleased = function(keyCode) {
};

GameLibrary.prototype.onLoad = function() {
    // image
    this.addImageFilename(RubADubLibrary.IMAGE_SLASH,              "Slash");
    this.addImageFilename(RubADubLibrary.IMAGE_DIGIT_0,            "Digit0");
    this.addImageFilename(RubADubLibrary.IMAGE_DIGIT_1,            "Digit1");
    this.addImageFilename(RubADubLibrary.IMAGE_DIGIT_2,            "Digit2");
    this.addImageFilename(RubADubLibrary.IMAGE_DIGIT_3,            "Digit3");
    this.addImageFilename(RubADubLibrary.IMAGE_DIGIT_4,            "Digit4");
    this.addImageFilename(RubADubLibrary.IMAGE_DIGIT_5,            "Digit5");
    this.addImageFilename(RubADubLibrary.IMAGE_DIGIT_6,            "Digit6");
    this.addImageFilename(RubADubLibrary.IMAGE_DIGIT_7,            "Digit7");
    this.addImageFilename(RubADubLibrary.IMAGE_DIGIT_8,            "Digit8");
    this.addImageFilename(RubADubLibrary.IMAGE_DIGIT_9,            "Digit9");
    this.addImageFilename(RubADubLibrary.IMAGE_COLON,              "Colon");

    this.addImageFilename(RubADubLibrary.IMAGE_NEW_GAME_0,         "NewGame0");
    this.addImageFilename(RubADubLibrary.IMAGE_NEW_GAME_1,         "NewGame1");

    this.addImageFilename(RubADubLibrary.IMAGE_TRY_AGAIN_0,        "TryAgain0");
    this.addImageFilename(RubADubLibrary.IMAGE_TRY_AGAIN_1,        "TryAgain1");

    this.addImageFilename(RubADubLibrary.IMAGE_CONTINUE_0,         "Continue0");
    this.addImageFilename(RubADubLibrary.IMAGE_CONTINUE_1,         "Continue1");

    this.addImageFilename(RubADubLibrary.IMAGE_PAUSE_0,            "Pause0");
    this.addImageFilename(RubADubLibrary.IMAGE_PAUSE_1,            "Pause1");

    this.addImageFilename(RubADubLibrary.IMAGE_ENTER_FULLSCREEN_0, "EnterFullscreen0");
    this.addImageFilename(RubADubLibrary.IMAGE_ENTER_FULLSCREEN_1, "EnterFullscreen1");

    this.addImageFilename(RubADubLibrary.IMAGE_EXIT_FULLSCREEN_0,  "ExitFullscreen0");
    this.addImageFilename(RubADubLibrary.IMAGE_EXIT_FULLSCREEN_1,  "ExitFullscreen1");

    this.addImageFilename(RubADubLibrary.IMAGE_LEVEL,              "Level");

    this.addImageFilename(RubADubLibrary.IMAGE_INFO_FINISHED,      "Finished");
    this.addImageFilename(RubADubLibrary.IMAGE_INFO_GAME_OVER,     "GameOver");
    this.addImageFilename(RubADubLibrary.IMAGE_INFO_PAUSED,        "Paused");

    this.addImageFilename(RubADubLibrary.IMAGE_SPLASH_SCREEN,      "SplashScreen");
    this.splashScreen.add(RubADubLibrary.IMAGE_SPLASH_SCREEN);

    this.addImageFilename(RubADubLibrary.IMAGE_BACKGROUND_LAYER_0, "BackgroundLayer0");
    this.loadingScreen.setBackgroundImage(RubADubLibrary.IMAGE_BACKGROUND_LAYER_0);

    this.addImageFilename(RubADubLibrary.IMAGE_BACKGROUND_LAYER_1, "BackgroundLayer1");
    this.addImageFilename(RubADubLibrary.IMAGE_BACKGROUND_LAYER_2, "BackgroundLayer2");

    // texture
    this.addImageFilename(RubADubLibrary.TEXTURE_WATER,            "Water");
    this.addImageFilename(RubADubLibrary.TEXTURE_MOSAIC_TILE,      "MosaicTile");
    this.addImageFilename(RubADubLibrary.TEXTURE_SOAP_BUBBLE,      "SoapBubble");

    this.addImageFilename(RubADubLibrary.TEXTURE_BLOCK,            "Block");
    this.addImageFilename(RubADubLibrary.TEXTURE_SPIKE,            "Spike");

    this.addImageFilename(RubADubLibrary.TEXTURE_MOM,              "Mom");
    this.addImageFilename(RubADubLibrary.TEXTURE_DAD,              "Dad");
    this.addImageFilename(RubADubLibrary.TEXTURE_DUCKLING,         "Duckling");

    // model
    let rubberDuckOptions = {
        scale: { x: -1, y: 1, z: 1 },
        rotate: { x: HALF_PI, y: 0, z: HALF_PI },
        remapUVToTextureSize: true,
        oldTextureSize: { width: 2048, height: 2048 }
    };

    let options = {
        scale: { x: -1, y: 1, z: 1 },
        rotate: { x: HALF_PI, y: 0, z: 0 },
        remapUVToTextureSize: true,
        oldTextureSize: { width: 2048, height: 2048 }
    };

    this.addModelFilename(RubADubLibrary.MODEL_MOM,                "Mom", rubberDuckOptions);
    this.addModelFilename(RubADubLibrary.MODEL_DAD,                "Dad", rubberDuckOptions);
    this.addModelFilename(RubADubLibrary.MODEL_DUCKLING,           "Duckling", rubberDuckOptions);
    this.addModelFilename(RubADubLibrary.MODEL_BLOCK,              "Block", options);
    this.addModelFilename(RubADubLibrary.MODEL_SPIKE,              "Spike", options);

    // sound
    this.addSoundFilename(RubADubLibrary.SOUND_POP,                "Pop");
    this.addSoundFilename(RubADubLibrary.SOUND_SQUEEZE,            "Squeeze");
    this.addSoundFilename(RubADubLibrary.SOUND_FINISHED,           "Finished");
    this.addSoundFilename(RubADubLibrary.SOUND_GAME_OVER,          "GameOver");

//    this.fontInit("EraserRegular.ttf");
    this.useDefaultFrameRate();
    this.isWebGLEnabled = true;
    this.camera.isEnabled = false;
    this.numberOfHUDs = 0;
    this.numberOfButtons = 4;
    this.setFullscreenButtonImageIndex(RubADubLibrary.IMAGE_ENTER_FULLSCREEN_0, RubADubLibrary.IMAGE_EXIT_FULLSCREEN_0);
};

GameLibrary.prototype.onMouseButtonDown = function() {
    rubADubLibrary.isMouseButtonDown = true;

    if (this.gameMode == RubADubLibrary.GAME_MODE_MENU) {
        rubADubLibrary.camera.onMouseButtonDown();
    }
};

GameLibrary.prototype.onMouseButtonUp = function() {
    rubADubLibrary.isMouseButtonDown = false;

    if (this.gameMode == RubADubLibrary.GAME_MODE_MENU) {
        rubADubLibrary.camera.onMouseButtonUp();
    }
};

GameLibrary.prototype.onMouseDrag = function() {
    if (this.gameMode == RubADubLibrary.GAME_MODE_MENU) {
        rubADubLibrary.camera.onMouseDrag();
    }
};

GameLibrary.prototype.onMouseWheel = function(delta) {
    if (this.gameMode == RubADubLibrary.GAME_MODE_MENU) {
        rubADubLibrary.camera.onMouseWheel(delta);
    }
};

GameLibrary.prototype.onRelease = function() {
};

GameLibrary.prototype.onRender = function() {
    rubADubLibrary.render();
};

GameLibrary.prototype.onUpdate = function() {
    if (this.gameMode == RubADubLibrary.GAME_MODE_NEW_GAME) {
        if (this.isButtonVisibled(RubADubLibrary.BUTTON_CONTINUE, false) && this.isButtonVisibled(RubADubLibrary.BUTTON_NEW_GAME, false) && this.isButtonVisibled(RubADubLibrary.BUTTON_PAUSE, true)) {
            this.changeGameMode(RubADubLibrary.GAME_MODE_PLAY);
        }
    } else if (this.gameMode == RubADubLibrary.GAME_MODE_MENU) {
        if (this.isButtonVisibled(GameLibrary.BUTTON_FULLSCREEN, true) && this.isButtonVisibled(RubADubLibrary.BUTTON_PAUSE, false)) {
            if (rubADubLibrary.isGamePaused || rubADubLibrary.isContinued || rubADubLibrary.isTryAgain) {
                if (!this.isButtonVisibledArray[RubADubLibrary.BUTTON_CONTINUE]) {
                    this.showButton(RubADubLibrary.BUTTON_CONTINUE, true);
                } else if (this.isButtonVisibled(RubADubLibrary.BUTTON_CONTINUE, true)) {
                    if (!this.isButtonVisibledArray[RubADubLibrary.BUTTON_NEW_GAME]) {
                        this.showButton(RubADubLibrary.BUTTON_NEW_GAME, true);
                    }
                }
            } else {
                if (!this.isButtonVisibledArray[RubADubLibrary.BUTTON_NEW_GAME]) {
                    this.showButton(RubADubLibrary.BUTTON_NEW_GAME, true);
                }
            }
        }
    } else if (this.gameMode == RubADubLibrary.GAME_MODE_PLAY) {
    }
};

GameLibrary.prototype.onWindowResized = function(isResized) {
    rubADubLibrary.isMouseButtonDown = false;
    rubADubLibrary.resize();
};

////////////////////////////////////////////////////////////
// rubADub
////////////////////////////////////////////////////////////
class RubADub {
    constructor() {
        gameLibrary = new GameLibrary();
    }

    start() {
        rubADubLibrary = new RubADubLibrary();
        gameLibrary.preload();
    }

    ////////////////////////////////////////////////////////////
    // p5.js functions
    ////////////////////////////////////////////////////////////
    draw() {
        gameLibrary.render();
    }

    keyPressed() {
        gameLibrary.keyPressed(keyCode);
    }

    keyReleased() {
        gameLibrary.keyReleased(keyCode);
    }

    mousePressed() {
        gameLibrary.mouseButtonDown(new GamePoint(mouseX, mouseY));
    }

    mouseMoved() {
        gameLibrary.mouseDrag(new GamePoint(mouseX, mouseY));
    }

    mouseWheel(delta) {
        gameLibrary.mouseWheel(delta);
    }

    mouseReleased() {
        gameLibrary.mouseButtonUp(new GamePoint(mouseX, mouseY));
    }

    touchStarted() {
        gameLibrary.mouseButtonDown(new GamePoint(mouseX, mouseY), LEFT);
    }

    touchMoved() {
        gameLibrary.mouseDrag(new GamePoint(mouseX, mouseY), LEFT);
    }

    touchEnded() {
        gameLibrary.mouseButtonUp(new GamePoint(mouseX, mouseY), LEFT);
    }

    windowResized() {
        gameLibrary.windowResized();
    }
}
