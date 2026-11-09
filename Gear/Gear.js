////////////////////////////////////////////////////////////
// วิธีเล่นเกมฟันเฟือง (Gear)
//
// 1. ใช้เม้าส์คลิ้กบล็อคเพื่อเลื่อนไปที่ช่องว่างเพื่อทำให้ให้ฟันเฟืองหมุนครบทุกอัน
// 2. ลากเม้าส์หรือใช้ Scroll Wheel เพื่อหมุนบอร์ดหรือซูมเข้าออก
////////////////////////////////////////////////////////////

'use strict';

var game = null;

function setup() {
    game = new Gear();

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

var gearLibrary = null;

////////////////////////////////////////////////////////////
// library
////////////////////////////////////////////////////////////
class GearLibrary {
    static get IMAGE_ENTER_FULLSCREEN_0() {return  0;}
    static get IMAGE_ENTER_FULLSCREEN_1() {return  1;}

    static get IMAGE_EXIT_FULLSCREEN_0()  {return  2;}
    static get IMAGE_EXIT_FULLSCREEN_1()  {return  3;}

    static get IMAGE_BACKGROUND()         {return  4;}
    static get IMAGE_SPLASH_SCREEN()      {return  5;}
    static get IMAGE_START()              {return  6;}
    static get IMAGE_NEXT_LEVEL()         {return  7;}

    static get IMAGE_BLOCK_0()            {return  8;}
    static get IMAGE_BLOCK_1()            {return  9;}

    static get IMAGE_GEAR_0()             {return 10;}
    static get IMAGE_GEAR_1()             {return 11;}

    static get SOUND_CLICK()              {return  0;}
    static get SOUND_MOVE()               {return  1;}
    static get SOUND_GAME_SUCCESS()       {return  2;}
    static get SOUND_GEAR_0()             {return  3;}
    static get SOUND_GEAR_1()             {return  4;}

    static get GAME_MODE_MENU()           {return  0;}
    static get GAME_MODE_NEW_GAME()       {return  1;}
    static get GAME_MODE_PLAY()           {return  2;}

    constructor() {
        this.isDebug = false;
        this.isGameSuccess = false;
        this.isNextLevel = false;

        this.camera = new GearCamera();
        this.level = new GearLevel();
        this.board = new GearBoard();

        this.initStartButton();
    }

    calculateAngle(angle, maxAngle) {
        angle %= maxAngle;

        if (angle < 0.0) {
            angle += TWO_PI;
        }

        return angle;
    }

    easeInOutLinear(t, easeInPhase = 0.1, easeOutPhase = 0.9) {
        let denom = 2 - easeInPhase - easeOutPhase;

        if (t < easeInPhase) {
            return (t * t) / (easeInPhase * denom);
        } else if (t < 1 - easeOutPhase) {
            return (2 * t - easeInPhase) / denom;
        } else {
            return 1 - (Math.pow(1 - t, 2) / (easeOutPhase * denom));
        }
    }

    easeLinear(t) {
        return t;
    }

    easeInLinear(t, easeInPhase = 0.1) {
        if (t < easeInPhase) {
            return (t * t) / (2 * easeInPhase - easeInPhase * easeInPhase);
        } else {
            return (2 * t - easeInPhase) / (2 - easeInPhase);
        }
    }

    easeOutLinear(t, easeOutPhase = 0.9) {
        if (t < 1 - easeOutPhase) {
            return (2 * t) / (2 - easeOutPhase);
        } else {
            return 1 - (Math.pow(1 - t, 2) / (2 * easeOutPhase - easeOutPhase * easeOutPhase));
        }
    }

    init() {
        this.board.loadLevel(this.level.getCurrentData());
        this.camera.zoomOut();
        this.initStartButton(GearLibrary.IMAGE_START, GameLibrary.NONE, GearLibrary.SOUND_CLICK);
        this.resize();

        gameLibrary.changeGameMode(GearLibrary.GAME_MODE_MENU);
    }

    newGame() {
        if (this.startButton.gameImageIndex == GearLibrary.IMAGE_NEXT_LEVEL || this.level.currentLevel == this.level.getNumberOfLevels() - 1) {
            this.board.startAngle.set(this.board.angle.x, this.board.angle.y);
            this.camera.zoomIn();
            this.isNextLevel = true;
        }

        this.startButton.boing.reset();
        gameLibrary.changeGameMode(GearLibrary.GAME_MODE_PLAY);
    }

    gameSuccess() {
        if (!this.isGameSuccess) {
            this.isGameSuccess = true;
            let gameImageIndex = (this.level.currentLevel == this.level.getNumberOfLevels() - 1) ? GearLibrary.IMAGE_START : GearLibrary.IMAGE_NEXT_LEVEL;
            this.startButton.setGameImage(gameImageIndex);
            gameLibrary.sound.play(GearLibrary.SOUND_GAME_SUCCESS);
            gameLibrary.changeGameMode(GearLibrary.GAME_MODE_MENU);
        }
    }

    renderBackground() {
        push();
        resetMatrix();
        drawingContext.disable(drawingContext.DEPTH_TEST);

        let backgroundImage = (gameLibrary.camera.isEnabled) ? gameLibrary.camera.getImage() : gameLibrary.gameImageArray[GearLibrary.IMAGE_BACKGROUND].image;
        let canvasRatio = gameLibrary.displayWidth / gameLibrary.displayHeight;
        let imageRatio = backgroundImage.width / backgroundImage.height;
        let w = gameLibrary.displayWidth;
        let h = gameLibrary.displayWidth / imageRatio;

        if (canvasRatio < imageRatio) {
            w = gameLibrary.displayHeight * imageRatio;
            h = gameLibrary.displayHeight;
        }

        let x = (gameLibrary.displayWidth - w) * 0.5;
        let y = (gameLibrary.displayHeight - h) * 0.5;

        image(backgroundImage, x - gameLibrary.displayCenterPoint.x, y - gameLibrary.displayCenterPoint.y, w, h);
        drawingContext.enable(drawingContext.DEPTH_TEST);
        pop();
    }

    renderHUD() {
        push();
        gameLibrary.beginWebGLHUD();
        stroke(0);
        textSize(min(gameLibrary.displayWidth, gameLibrary.displayHeight) * 0.05);
        strokeWeight(textSize() * 0.2);
        fill(255);
        textAlign(LEFT, TOP);
        drawingContext.miterLimit = 2;
        text("Level: " + str(this.level.currentLevel + 1) + " of " + str(this.level.getNumberOfLevels()), 0, 0);
        text("Moves: " + this.board.moves, 0, textSize());

        gameLibrary.renderButton(GameLibrary.BUTTON_FULLSCREEN, GearLibrary.IMAGE_ENTER_FULLSCREEN_0);

        if (gameLibrary.gameMode == GearLibrary.GAME_MODE_MENU) {
            this.renderStartButton(GearLibrary.GAME_MODE_NEW_GAME);
        }

        gameLibrary.endWebGLHUD();
        pop();
    }

    renderBoard() {
        push();
        translate(gameLibrary.displayCenterPoint.x, gameLibrary.displayCenterPoint.y);
        this.camera.update();
        this.board.update();
        this.board.render();
        pop();
    }

    render() {
        this.renderBackground();
        this.renderBoard();
        this.renderHUD();
    }

    resize() {
        if (this.startButton != null && this.startButton.gameImage != null) {
            let buttonHeight = min(gameLibrary.displayWidth, gameLibrary.displayHeight) * 0.1;
            let initScale = buttonHeight / this.startButton.gameImage.height;
            let buttonWidth = this.startButton.gameImage.width * initScale;
            let x = gameLibrary.displayCenterPoint.x;
            let y = gameLibrary.displayHeight - buttonHeight;
            this.resizeStartButton(x, y, buttonWidth / this.startButton.gameImage.width);
        }
    }

    setInsideScreenHeight(y, height) {
        let bottomScreen = gameLibrary.displayHeight - gameLibrary.hudGap;
        let bottom = y + height;

        if (bottom > bottomScreen) {
            y -= bottom - bottomScreen;
        }

        return y;
    }

    ////////////////////////////////////////////////////////////
    // start button
    ////////////////////////////////////////////////////////////
    initStartButton(gameImageIndex = GameLibrary.NONE, pressSoundIndex = GameLibrary.NONE, closeSoundIndex = GameLibrary.NONE) {
        this.startButton = new GearButton(gameImageIndex, GearButton.PRESS_SCALE, GearButton.SCALE_BEFORE_CLOSING);
        this.startButtonPressSoundIndex = pressSoundIndex;
        this.startButtonCloseSoundIndex = closeSoundIndex;
        this.isStartButtonOpen = false;
        this.isStartButtonClosed = false;
    }

    resizeStartButton(x, y, initScale) {
        if (this.startButton.gameImage != null) {
            y = this.setInsideScreenHeight(y, int((initScale * this.startButton.gameImage.height) * 0.5));
            this.startButton.resize(x, y, initScale);
        }
    }

    pressStartButton(keyCode = GameLibrary.NONE) {
        if (keyCode == GameLibrary.NONE) {
            if (this.startButton.isMouseOver(gameLibrary.touchPoint.x, gameLibrary.touchPoint.y)) {
                gameLibrary.sound.play(this.startButtonPressSoundIndex);
                this.startButton.press();
            }
        } else if (keyCode == GameLibrary.KEY_ENTER) {
            if (this.startButton.isOpen()) {
                gameLibrary.sound.play(this.startButtonPressSoundIndex);
                this.startButton.press();
            }
        }
    }

    unpressStartButton(keyCode = GameLibrary.NONE) {
        if (keyCode == GameLibrary.NONE) {
            if (this.startButton.isMouseOver(gameLibrary.touchPoint.x, gameLibrary.touchPoint.y)) {
                gameLibrary.sound.play(this.startButtonCloseSoundIndex);
                this.startButton.unpress();
                this.isStartButtonClosed = true;
            }
        } else if (keyCode == GameLibrary.KEY_ENTER) {
            gameLibrary.sound.play(this.startButtonCloseSoundIndex);
            this.startButton.unpress();
            this.isStartButtonClosed = true;
        }
    }

    dragStartButton() {
        if (!this.startButton.isClosing()) {
            if (this.startButton.isMouseOver(gameLibrary.touchPoint.x, gameLibrary.touchPoint.y)) {
                this.startButton.press();
            } else {
                this.startButton.unpress();
            }
        }
    }

    renderStartButton(nextGameMode) {
        this.startButton.update();
        this.startButton.render();

        if (this.isStartButtonOpen) {
            if (this.isStartButtonClosed) {
                if (!this.startButton.isUnpressing()) {
                    this.isStartButtonClosed = false;
                    this.startButton.close();
                }
            } else if (this.startButton.isClosed()) {
                gameLibrary.changeGameMode(nextGameMode);
            }
        } else if (gameLibrary.isButtonVisibled(GameLibrary.BUTTON_FULLSCREEN, true)) {
            this.startButton.open();
            this.isStartButtonOpen = true;
            this.isStartButtonClosed = false;
        }
    }
}

////////////////////////////////////////////////////////////
// button
////////////////////////////////////////////////////////////
class GearButton {
    static get STAGE_OPENING()        {return 0;}
    static get STAGE_OPEN()           {return 1;}
    static get STAGE_CLOSING()        {return 2;}
    static get STAGE_CLOSED()         {return 3;}
    static get STAGE_PRESSING()       {return 4;}
    static get STAGE_PRESSED()        {return 5;}
    static get STAGE_UNPRESSING()     {return 6;}

    static get PRESS_SCALE()          {return 0.9;}
    static get SCALE_BEFORE_CLOSING() {return 1.2;}

    constructor(gameImageIndex, pressScale = 0.9, scaleBeforeClosing = 1.2) {
        this.setGameImage(gameImageIndex);

        this.boing = new GameBoingAnimation();
        this.boing.setScaleBeforeClosing(scaleBeforeClosing);

        this.rect = new GameRect();
        this.rect2 = new GameRect2();
        this.halfSize = new GameSize();
        this.stage = GearButton.STAGE_CLOSED;
        this.pressStartMilliseconds = 0;
        this.initScale = 1.0;
        this.initPressScale = pressScale;
        this.pressScale = this.initScale * this.initPressScale;
        this.scale = 0.0;
        this.fromScale = 0.0;
        this.toScale = 0.0;
        this.scaleLength = 0.0;
    }

    setGameImage(gameImageIndex) {
        this.gameImageIndex = gameImageIndex;
        this.gameImage = (gameImageIndex == GameLibrary.NONE) ? null : gameLibrary.gameImageArray[gameImageIndex];
    }

    resize(x, y, initScale) {
        this.rect.x = x;
        this.rect.y = y;
        this.initScale = initScale;
        this.pressScale = initScale * this.initPressScale;
        this.boing.reset();

        switch (this.stage) {
            case GearButton.STAGE_OPENING:
            case GearButton.STAGE_OPEN:
                this.scale = this.initScale;
                this.stage = GearButton.STAGE_OPEN;
                break;

            case GearButton.STAGE_CLOSING:
            case GearButton.STAGE_CLOSED:
                this.scale = 0.0;
                this.stage = GearButton.STAGE_CLOSED;
                break;

            case GearButton.STAGE_PRESSING:
            case GearButton.STAGE_PRESSED:
                this.scale = this.pressScale;
                this.stage = GearButton.STAGE_PRESSED;
                break;

            case GearButton.STAGE_UNPRESSING:
            case GearButton.STAGE_OPEN:
                this.scale = this.initScale;
                this.stage = GearButton.STAGE_OPEN;
                break;
        }
    }

    open() {
        if (this.stage == GearButton.STAGE_CLOSED) {
            this.boing.open(true);
            this.stage = GearButton.STAGE_OPENING;
        }
    }

    close() {
        if (!(this.stage == GearButton.STAGE_CLOSING || this.stage == GearButton.STAGE_CLOSED)) {
            this.boing.open(false);
            this.stage = GearButton.STAGE_CLOSING;
        }
    }

    press() {
        if (this.stage == GearButton.STAGE_OPENING || this.stage == GearButton.STAGE_OPEN) {
            this.stage = GearButton.STAGE_PRESSING;
            this.fromScale = this.initScale;
            this.toScale = this.pressScale;
            this.scaleLength = this.toScale - this.fromScale;
            this.pressStartMilliseconds = gameLibrary.getMilliseconds();
        }
    }

    unpress() {
        if (this.stage == GearButton.STAGE_PRESSING || this.stage == GearButton.STAGE_PRESSED) {
            this.stage = GearButton.STAGE_UNPRESSING;
            this.fromScale = this.scale;
            this.toScale = this.initScale;
            this.scaleLength = this.toScale - this.fromScale;
            this.pressStartMilliseconds = gameLibrary.getMilliseconds();
        }
    }

    isOpening() {
        return (this.stage == GearButton.STAGE_OPENING);
    }

    isOpen() {
        return (this.stage == GearButton.STAGE_OPEN);
    }

    isClosing() {
        return (this.stage == GearButton.STAGE_CLOSING);
    }

    isClosed() {
        return (this.stage == GearButton.STAGE_CLOSED);
    }

    isPressing() {
        return (this.stage == GearButton.STAGE_PRESSING);
    }

    isPressed() {
        return (this.stage == GearButton.STAGE_PRESSED);
    }

    isUnpressing() {
        return (this.stage == GearButton.STAGE_UNPRESSING);
    }

    isMouseOver(x, y) {
        let isMouseOver = false;

        if (this.stage == GearButton.STAGE_OPENING || this.stage == GearButton.STAGE_OPEN || this.stage == GearButton.STAGE_PRESSING || this.stage == GearButton.STAGE_PRESSED) {
            isMouseOver = (x >= this.rect2.left && x <= this.rect2.right && y >= this.rect2.top && y <= this.rect2.bottom);
        }

        return isMouseOver;
    }

    update() {
        this.boing.update();
        let t = 0.0;

        switch (this.stage) {
            case GearButton.STAGE_OPENING:
                if (this.boing.isOpen) {
                    this.scale = this.initScale;
                    this.stage = GearButton.STAGE_OPEN;
                } else if (this.boing.isOpening) {
                    this.scale = this.initScale * this.boing.scale;
                }
                break;

            case GearButton.STAGE_CLOSING:
                if (this.boing.isClosed) {
                    this.scale = 0.0;
                    this.stage = GearButton.STAGE_CLOSED;
                } else if (this.boing.isClosing) {
                    this.scale = this.initScale * this.boing.scale;
                }
                break;

            case GearButton.STAGE_PRESSING:
                t = gameLibrary.easeOut(this.pressStartMilliseconds, 150);
                this.scale = this.fromScale + (this.scaleLength * t);

                if (t == 1.0) {
                    this.scale = this.pressScale;
                    this.stage = GearButton.STAGE_PRESSED;
                }
                break;

            case GearButton.STAGE_UNPRESSING:
                t = gameLibrary.easeOut(this.pressStartMilliseconds, 150);
                this.scale = this.fromScale + (this.scaleLength * t);

                if (t == 1.0) {
                    this.scale = this.toScale;
                    this.stage = GearButton.STAGE_OPEN;
                }
                break;
        }

        if (this.gameImage != null) {
            this.rect.width = int(this.gameImage.width * this.scale);
            this.rect.height = int(this.gameImage.height * this.scale);
            this.halfSize.set(int(this.rect.width * 0.5), int(this.rect.height * 0.5));

            this.rect2.left = this.rect.x - this.halfSize.width + 1;
            this.rect2.right = this.rect.x + this.halfSize.width - 1;
            this.rect2.top = this.rect.y - this.halfSize.height + 1;
            this.rect2.bottom = this.rect.y + this.halfSize.height - 1;
        }
    }

    render() {
        if (this.scale > 0.0 && this.rect.width > 0 && this.rect.height > 0) {
            push();
            imageMode(CENTER);
            image(this.gameImage.image, this.rect.x, this.rect.y, this.rect.width, this.rect.height);
            pop();
        }
    }
}

////////////////////////////////////////////////////////////
// camera
////////////////////////////////////////////////////////////
class GearCamera {
    static get MIN_DISTANCE()      {return 150;}
    static get MAX_DISTANCE()      {return 1000;}
    static get NORMAL_DISTANCE()   {return 600;}

    static get ZOOM_OUT_DURATION() {return 3000;}
    static get ZOOM_IN_DURATION()  {return 1000;}

    constructor() {
        this.fov = radians(45);
        this.halfFOV = this.fov * 0.5;
        this.distance = GearCamera.NORMAL_DISTANCE;
        this.startDistance = this.distance;
        this.targetDistance = this.distance;

        this.t = 1.0;
        this.easeTime = 1.0;
        this.easeDuration = 0;
        this.isZoomIn = false;
        this.isZoomOut = false;
    }

    zoomIn() {
        this.zoom(this.distance, 0, GearCamera.ZOOM_IN_DURATION);
        this.isZoomIn = true;
        this.isZoomOut = false;
    }

    zoomOut() {
        this.zoom(0, GearCamera.NORMAL_DISTANCE, GearCamera.ZOOM_OUT_DURATION);
        this.isZoomIn = false;
        this.isZoomOut = true;
    }

    zoom(startDistance, targetDistance, duration) {
        this.t = 0.0;
        this.easeTime = 0.0;
        this.easeDuration = duration;
        this.startDistance = startDistance;
        this.targetDistance = targetDistance;
        this.distance = startDistance;
    }

    update() {
        if (this.t < 1.0 && this.easeDuration > 0) {
            this.t += deltaTime / this.easeDuration;

            if (this.t > 1.0) {
                this.t = 1.0;
            }

            if (this.isZoomIn) {
                this.easeTime = gearLibrary.easeInLinear(this.t);
            } else {
                this.easeTime = gearLibrary.easeOutLinear(this.t);
            }

            this.distance = lerp(this.startDistance, this.targetDistance, this.easeTime);
        } else {
            this.isZoomIn = false;
            this.isZoomOut = false;
            this.distance = lerp(this.distance, this.targetDistance, 0.3);
        }

        perspective(this.fov, gameLibrary.displayWidth / gameLibrary.displayHeight, 10, 2000);
        camera(0, 0, this.distance, 0, 0, 0, 0, 1, 0);
    }

    onMouseWheel(delta) {
        if (gearLibrary.board.isReady) {
            this.targetDistance += delta;
            this.targetDistance = constrain(this.targetDistance, GearCamera.MIN_DISTANCE, GearCamera.MAX_DISTANCE);
        }
    }
}

////////////////////////////////////////////////////////////
// gear 8 teeth
////////////////////////////////////////////////////////////
class Gear8Teeth {
    static get TYPE_0()          {return  0;}
    static get TYPE_1()          {return  1;}
    static get NUMBER_OF_TYPES() {return  2;}

    static get MESH_DURATION()   {return 80;}

    constructor(type = Gear8Teeth.TYPE_0) {
        this.type = type;
        this.numberOfTeeth = 8;
        this.stepAngle = TWO_PI / (this.numberOfTeeth * 2); // 22.5 degrees
        this.size = GearBlock.SIZE * 1.15;

        this.imageIndex = GearLibrary.IMAGE_GEAR_0 + this.type;
        this.isFront = true;
        this.isSpinning = false;
        this.angle = 0.0;
        this.targetAngle = 0.0;
        this.directionSign = 0;

        this.t = 1.0;
        this.easeTime = 1.0;
        this.easeDuration = 0;
    }

    reset() {
        this.isSpinning = false;
        this.directionSign = 0;
    }

    setAngle(angle) {
        this.angle = angle;
        this.startAngle = this.angle;
        this.targetAngle = this.angle;
        this.t = 1.0;
        this.easeTime = 1.0;
    }

    mesh(startAngle, targetAngle) {
        if (startAngle > targetAngle) {
            startAngle = gearLibrary.calculateAngle(this.angle, this.stepAngle);
        }

        this.t = 0.0;
        this.easeTime = 0.0;
        this.easeDuration = Gear8Teeth.MESH_DURATION;
        this.startAngle = startAngle;
        this.targetAngle = targetAngle;
    }

    update() {
        if (this.t < 1.0 && this.easeDuration > 0) {
            this.t += deltaTime / this.easeDuration;

            if (this.t > 1.0) {
                this.t = 1.0;
            }

            this.easeTime = gearLibrary.easeOutLinear(this.t);
            this.angle = lerp(this.startAngle, this.targetAngle, this.easeTime);
        }
    }

    render() {
        this.update();
        push();
        rotateZ(this.angle);
        texture(gameLibrary.gameImageArray[this.imageIndex].image);
        noStroke();
        plane(this.size, this.size);
        pop();
    }
}

////////////////////////////////////////////////////////////
// block
////////////////////////////////////////////////////////////
class GearBlock {
    static get EMPTY()     {return 0;}
    static get STATIC()    {return 1;}
    static get NORMAL()    {return 2;}

    static get SIZE()      {return 64;}
    static get HALF_SIZE() {return GearBlock.SIZE * 0.5;}

    constructor(type = GearBlock.NORMAL, frontGear = null, backGear = null, isDriver = false) {
        this.type = type;
        this.frontGear = frontGear;
        this.backGear = backGear;

        if (this.frontGear != null) {
            this.frontGear.isFront = true;
        }

        if (this.backGear != null) {
            this.backGear.isFront = false;
        }

        this.isGearDrive = isDriver;
        this.imageIndex = (this.type == GearBlock.STATIC) ? GearLibrary.IMAGE_BLOCK_0 : (this.type == GearBlock.NORMAL) ? GearLibrary.IMAGE_BLOCK_1 : GameLibrary.NONE;

        this.column = 0;
        this.row = 0;
        this.x = 0;
        this.y = 0;
        this.isMoving = false;
        this.isOddBlock = false;
        this.targetX = 0;
        this.targetY = 0;
        this.moveSpeed = 250 / 1000;
    }

    set(row, column) {
        this.row = row;
        this.column = column;
        this.x = this.column * GearBlock.SIZE;
        this.y = this.row * GearBlock.SIZE;
    }

    moveTo(row, column) {
        this.row = row;
        this.column = column;
        this.targetX = this.column * GearBlock.SIZE;
        this.targetY = this.row * GearBlock.SIZE;
        this.isMoving = true;
    }

    resetGear() {
        if (this.frontGear != null) {
            this.frontGear.reset();
        }

        if (this.backGear != null) {
            this.backGear.reset();
        }
    }

    update() {
        if (this.isMoving) {
            let speed = this.moveSpeed * deltaTime;

            if (this.x < this.targetX) {
                this.x = min(this.x + speed, this.targetX);
            } else if (this.x > this.targetX) {
                this.x = max(this.x - speed, this.targetX);
            }

            if (this.y < this.targetY) {
                this.y = min(this.y + speed, this.targetY);
            } else if (this.y > this.targetY) {
                this.y = max(this.y - speed, this.targetY);
            }

            if (this.x == this.targetX && this.y == this.targetY) {
                this.isMoving = false;

                if (this.type != GearBlock.EMPTY) {
                    gameLibrary.sound.play(GearLibrary.SOUND_MOVE);
                    gearLibrary.board.moves++;
                }
            }
        }

        this.isOddBlock = (this.row + this.column) % 2 != 0;
        this.resetGear();
    }

    render() {
        if (this.imageIndex != GameLibrary.NONE) {
            push();
            translate(this.x, this.y, 0);
            texture(gameLibrary.gameImageArray[this.imageIndex].image);
            noStroke();
            plane(GearBlock.SIZE, GearBlock.SIZE);
            pop();
        }
    }
}

////////////////////////////////////////////////////////////
// level
////////////////////////////////////////////////////////////
class GearLevel {
    constructor() {
        this.currentLevel = 0;
        this.dataArray = [];

        this.dataArray.push([
            [new GearBlock(GearBlock.STATIC),
             new GearBlock(GearBlock.STATIC),
             new GearBlock(GearBlock.STATIC),
             new GearBlock(GearBlock.STATIC)],

            [new GearBlock(GearBlock.STATIC),
             new GearBlock(GearBlock.NORMAL, new Gear8Teeth()),
             new GearBlock(GearBlock.NORMAL, new Gear8Teeth()),
             new GearBlock(GearBlock.STATIC)],

            [new GearBlock(GearBlock.STATIC, new Gear8Teeth(Gear8Teeth.TYPE_1), null, true),
             new GearBlock(),
             new GearBlock(),
             new GearBlock(GearBlock.STATIC, new Gear8Teeth())],

            [new GearBlock(GearBlock.STATIC),
             new GearBlock(),
             new GearBlock(GearBlock.EMPTY),
             new GearBlock(GearBlock.STATIC)],

            [new GearBlock(GearBlock.STATIC),
             new GearBlock(GearBlock.STATIC),
             new GearBlock(GearBlock.STATIC),
             new GearBlock(GearBlock.STATIC)]
        ]);

        this.dataArray.push([
            [new GearBlock(GearBlock.STATIC),
             new GearBlock(GearBlock.STATIC),
             new GearBlock(GearBlock.STATIC),
             new GearBlock(GearBlock.STATIC)],

            [new GearBlock(GearBlock.STATIC),
             new GearBlock(GearBlock.NORMAL, new Gear8Teeth(), new Gear8Teeth()),
             new GearBlock(),
             new GearBlock(GearBlock.STATIC)],

            [new GearBlock(GearBlock.STATIC),
             new GearBlock(),
             new GearBlock(GearBlock.NORMAL, null, new Gear8Teeth()),
             new GearBlock(GearBlock.STATIC)],

            [new GearBlock(GearBlock.STATIC, new Gear8Teeth(Gear8Teeth.TYPE_1), null, true),
             new GearBlock(GearBlock.EMPTY),
             new GearBlock(),
             new GearBlock(GearBlock.STATIC, new Gear8Teeth(Gear8Teeth.TYPE_1), new Gear8Teeth(Gear8Teeth.TYPE_1))],

            [new GearBlock(GearBlock.STATIC),
             new GearBlock(GearBlock.STATIC),
             new GearBlock(GearBlock.STATIC),
             new GearBlock(GearBlock.STATIC)]
        ]);

        this.dataArray.push([
            [new GearBlock(GearBlock.STATIC),
             new GearBlock(GearBlock.STATIC),
             new GearBlock(GearBlock.STATIC),
             new GearBlock(GearBlock.STATIC),
             new GearBlock(GearBlock.STATIC)],

            [new GearBlock(GearBlock.STATIC),
             new GearBlock(GearBlock.EMPTY),
             new GearBlock(),
             new GearBlock(GearBlock.NORMAL, null, new Gear8Teeth()),
             new GearBlock(GearBlock.STATIC)],

            [new GearBlock(GearBlock.STATIC, new Gear8Teeth(Gear8Teeth.TYPE_1), null, true),
             new GearBlock(),
             new GearBlock(GearBlock.NORMAL, new Gear8Teeth()),
             new GearBlock(),
             new GearBlock(GearBlock.STATIC, null, new Gear8Teeth(Gear8Teeth.TYPE_1))],

            [new GearBlock(GearBlock.STATIC),
             new GearBlock(),
             new GearBlock(),
             new GearBlock(GearBlock.NORMAL, new Gear8Teeth(), new Gear8Teeth()),
             new GearBlock(GearBlock.STATIC)],

            [new GearBlock(GearBlock.STATIC),
             new GearBlock(GearBlock.STATIC),
             new GearBlock(GearBlock.STATIC),
             new GearBlock(GearBlock.STATIC),
             new GearBlock(GearBlock.STATIC)]
        ]);
    }

    getNumberOfLevels() {
        return this.dataArray.length;
    }

    getCurrentData() {
        return this.dataArray[this.currentLevel];
    }
}

////////////////////////////////////////////////////////////
// board
////////////////////////////////////////////////////////////
class GearBoard {
    constructor() {
        this.blockArray = [];
        this.numberOfRows = 0;
        this.numberOfColumns = 0;
        this.boardSize = new GameSize();
        this.boardCenter = new GamePoint();

        this.rotationSpeed = (QUARTER_PI * 0.25) / 1000;
        this.angle = new GamePoint();
        this.startAngle = new GamePoint();
        this.previousMouse = new GamePoint(-1, -1);
        this.isDragging = false;

        this.globalGearSpeed = PI / 1000;
        this.globalGearAngle = 0.0;
        this.moves = 0;
        this.diectionArray = [{row: -1, column: 0}, {row: 1, column: 0}, {row: 0, column: -1}, {row: 0, column: 1}];
        this.isBlockMoving = false;

        this.isReady = false;
    }

    loadLevel(levelData) {
        this.isReady = false;
        this.isBlockMoving = false;
        this.moves = 0;
        this.angle.set(0, 0);
        this.previousMouse.set(-1, -1);
        this.isDragging = false;

        this.numberOfRows = levelData.length;
        this.numberOfColumns = levelData[0].length;
        this.boardSize.set(this.numberOfColumns * GearBlock.SIZE, this.numberOfRows * GearBlock.SIZE);
        this.boardCenter.set(this.boardSize.width * 0.5, this.boardSize.height * 0.5);

        this.blockArray = [];

        for (let row = 0; row < this.numberOfRows; row++) {
            this.blockArray[row] = [];

            for (let column = 0; column < levelData[row].length; column++) {
                let block = levelData[row][column];
                block.set(row, column);
                this.blockArray[row][column] = block;
            }
        }
    }

    update() {
        if (this.isReady) {
            if (gearLibrary.isNextLevel) {
                if (gearLibrary.camera.isZoomIn) {
                    this.angle.x = lerp(this.startAngle.x, 0, gearLibrary.camera.easeTime);
                    this.angle.y = lerp(this.startAngle.y, 0, gearLibrary.camera.easeTime);
                } else {
                    if (++gearLibrary.level.currentLevel >= gearLibrary.level.getNumberOfLevels()) {
                        gearLibrary.level.currentLevel = 0;
                    }

                    this.loadLevel(gearLibrary.level.getCurrentData());
                    gearLibrary.camera.zoomOut();
                    gearLibrary.isNextLevel = false;
                }
            }
        } else {
            if (gearLibrary.camera.isZoomOut) {
                this.angle.y = gearLibrary.camera.easeTime * TWO_PI;
            } else {
                gearLibrary.isGameSuccess = false;
                this.isReady = true;
                this.angle.set(0, 0);
            }
        }

        this.globalGearAngle = gearLibrary.calculateAngle(this.globalGearAngle + (this.globalGearSpeed * deltaTime), TWO_PI);
        this.isBlockMoving = false;

        let totalGears = 0;
        let spinningGears = 0;
        let isPlayingArray = Array(Gear8Teeth.NUMBER_OF_TYPES).fill(false);

        for (let row = 0; row < this.numberOfRows; row++) {
            for (let column = 0; column < this.blockArray[row].length; column++) {
                let block = this.blockArray[row][column];

                if (block.type != GearBlock.EMPTY) {
                    if (block.frontGear != null) {
                        totalGears++;

                        if (block.frontGear.isSpinning) {
                            spinningGears++;

                            if (gameLibrary.gameMode == GearLibrary.GAME_MODE_PLAY && !gearLibrary.isNextLevel) {
                                isPlayingArray[block.frontGear.type] = true;
                            }
                        }
                    }

                    if (block.backGear != null) {
                        totalGears++;

                        if (block.backGear.isSpinning) {
                            spinningGears++;

                            if (gameLibrary.gameMode == GearLibrary.GAME_MODE_PLAY && !gearLibrary.isNextLevel) {
                                isPlayingArray[block.backGear.type] = true;
                            }
                        }
                    }
                }

                block.update();

                if (!this.isBlockMoving && block.isMoving) {
                    this.isBlockMoving = true;
                }
            }
        }

        for (let i = 0; i < isPlayingArray.length; i++) {
            let soundIndex = GearLibrary.SOUND_GEAR_0 + i;

            if (isPlayingArray[i]) {
                if (!gameLibrary.sound.isPlaying(soundIndex)) {
                    gameLibrary.sound.loop(soundIndex);
                }
            } else {
                gameLibrary.sound.stop(soundIndex);
            }
        }

        if (totalGears > 0 && totalGears == spinningGears) {
            gearLibrary.gameSuccess();
        }

        for (let row = 0; row < this.numberOfRows; row++) {
            for (let column = 0; column < this.blockArray[row].length; column++) {
                let block = this.blockArray[row][column];

                if (!block.isMoving && block.isGearDrive) {
                    this.driveGear(row, column, block.frontGear, 1);
                    this.driveGear(row, column, block.backGear, 1);
                }
            }
        }

        this.rotateGear();
    }

    driveGear(row, column, currentGear, directionSign) {
        if (currentGear != null && !currentGear.isSpinning) {
            currentGear.isSpinning = true;
            currentGear.directionSign = directionSign;

            let block = this.blockArray[row][column];
            let otherSideGear = currentGear.isFront ? block.backGear : block.frontGear;

            if (otherSideGear != null && !otherSideGear.isSpinning) {
                this.driveGear(row, column, otherSideGear, directionSign);
            }

            for (let diection of this.diectionArray) {
                let neighborRow = row + diection.row;
                let neighborColumn = column + diection.column;

                if (neighborRow >= 0 && neighborRow < this.numberOfRows && neighborColumn >= 0 && neighborColumn < this.numberOfColumns) {
                    let neighborBlock = this.blockArray[neighborRow][neighborColumn];

                    if (!neighborBlock.isMoving) {
                        let neighborGear = currentGear.isFront ? neighborBlock.frontGear : neighborBlock.backGear;

                        if (neighborGear != null && !neighborGear.isSpinning) {
                            this.driveGear(neighborRow, neighborColumn, neighborGear, -directionSign);
                        }
                    }
                }
            }
        }
    }

    findNeighborGear(row, column, currentGear) {
        if (!this.isBlockMoving && currentGear != null) {
            for (let diection of this.diectionArray) {
                let neighborRow = row + diection.row;
                let neighborColumn = column + diection.column;

                if (neighborRow >= 0 && neighborRow < this.numberOfRows && neighborColumn >= 0 && neighborColumn < this.blockArray[neighborRow].length) {
                    let neighborBlock = this.blockArray[neighborRow][neighborColumn];

                    if ((currentGear.isFront && neighborBlock.frontGear != null) || (!currentGear.isFront && neighborBlock.backGear != null)) {
                        return {row: neighborRow, column: neighborColumn};
                    }
                }
            }
        }

        return null;
    }

    meshGear(currentGear, otherSideGear, initialAngle) {
        currentGear.mesh(currentGear.angle, initialAngle);

        if (otherSideGear != null) {
            otherSideGear.mesh(otherSideGear.angle, initialAngle);
        }
    }

    rotateGear() {
        for (let row = 0; row < this.numberOfRows; row++) {
            for (let column = 0; column < this.blockArray[row].length; column++) {
                let block = this.blockArray[row][column];

                if (block.frontGear != null) {
                    let initialAngle = block.isOddBlock ? block.frontGear.stepAngle : 0;

                    if (block.frontGear.isSpinning) {
                        block.frontGear.setAngle(gearLibrary.calculateAngle(initialAngle + (block.frontGear.directionSign * this.globalGearAngle), TWO_PI));
                    } else if (this.findNeighborGear(row, column, block.frontGear) != null) {
                        this.meshGear(block.frontGear, block.backGear, initialAngle);
                    }
                }

                if (block.backGear != null) {
                    let initialAngle = block.isOddBlock ? block.backGear.stepAngle : 0;

                    if (block.backGear.isSpinning) {
                        block.backGear.setAngle(gearLibrary.calculateAngle(initialAngle + (block.backGear.directionSign * this.globalGearAngle), TWO_PI));
                    } else if (this.findNeighborGear(row, column, block.backGear) != null) {
                        this.meshGear(block.backGear, block.frontGear, initialAngle);
                    }
                }
            }
        }
    }

    render() {
        push();
        rotateX(this.angle.x);
        rotateY(this.angle.y);
        translate(-this.boardCenter.x + GearBlock.HALF_SIZE, -this.boardCenter.y + GearBlock.HALF_SIZE);

        for (let row = 0; row < this.numberOfRows; row++) {
            for (let column = 0; column < this.blockArray[row].length; column++) {
                this.blockArray[row][column].render();
            }
        }

        let allGearsArray = [];
        let z = 0.5;

        for (let row = 0; row < this.numberOfRows; row++) {
            for (let column = 0; column < this.blockArray[row].length; column++) {
                let block = this.blockArray[row][column];

                if (block.type != GearBlock.EMPTY) {
                    if (block.frontGear != null) {
                        allGearsArray.push({
                            gear: block.frontGear,
                            x: block.x,
                            y: block.y,
                            z: z,
                            depth: this.calculateDepth(block.x, block.y, z)
                        });
                    }

                    if (block.backGear != null) {
                        allGearsArray.push({
                            gear: block.backGear,
                            x: block.x,
                            y: block.y,
                            z: -z,
                            depth: this.calculateDepth(block.x, block.y, -z)
                        });
                    }
                }
            }
        }

        allGearsArray.sort((a, b) => a.depth - b.depth);
        drawingContext.depthMask(false);

        for (let g of allGearsArray) {
            push();
            translate(g.x, g.y, g.z);
            g.gear.render();
            pop();
        }

        drawingContext.depthMask(true);
        pop();
    }

    calculateDepth(x, y, z) {
        let cosX = cos(this.angle.x);
        let sinX = sin(this.angle.x);
        let cosY = cos(this.angle.y);
        let sinY = sin(this.angle.y);
        let zOfRotateY = (-x * sinY) + (z * cosY);
        let yOfRotateY = y;
        let finalZ = (yOfRotateY * sinX) + (zOfRotateY * cosX);
        return finalZ;
    }

    getWorldToScreen(x, y, z) {
        let localX = x - this.boardCenter.x + GearBlock.HALF_SIZE;
        let localY = y - this.boardCenter.y + GearBlock.HALF_SIZE;
        let localZ = z;

        let cosY = cos(this.angle.y);
        let sinY = sin(this.angle.y);

        let xOfRotateY = (localX * cosY) + (localZ * sinY);
        let zOfRotateY = (-localX * sinY) + (localZ * cosY);

        let cosX = cos(this.angle.x);
        let sinX = sin(this.angle.x);

        let yOfRotateX = (localY * cosX) - (zOfRotateY * sinX);
        let zOfRotateX = (localY * sinX) + (zOfRotateY * cosX);

        let viewZ = gearLibrary.camera.distance - zOfRotateX;

        if (viewZ == 0) {
            viewZ = 1;
        }

        let fovFactor = 1.0 / tan(gearLibrary.camera.halfFOV);
        let screenX = (xOfRotateY * fovFactor / viewZ) * (gameLibrary.displayCenterPoint.y) + gameLibrary.displayCenterPoint.x;
        let screenY = (yOfRotateX * fovFactor / viewZ) * (gameLibrary.displayCenterPoint.y) + gameLibrary.displayCenterPoint.y;

        return { x: screenX, y: screenY, z: viewZ };
    }

    pickBlock(x, y) {
        let bestBlock = null;
        let closestDistance = Infinity;
        let baseClickRadius = 128;

        for (let row = 0; row < this.numberOfRows; row++) {
            for (let column = 0; column < this.blockArray[row].length; column++) {
                let block = this.blockArray[row][column];

                if (block.type != GearBlock.EMPTY) {
                    let screenPosition = this.getWorldToScreen(block.x, block.y, 0);
                    let dynamicRadius = (400 / screenPosition.z) * baseClickRadius;
                    let mouseDistance = dist(x, y, screenPosition.x, screenPosition.y);

                    if (mouseDistance < dynamicRadius && mouseDistance < closestDistance) {
                        closestDistance = mouseDistance;
                        bestBlock = block;
                    }
                }
            }
        }

        return bestBlock;
    }

    onMouseButtonDown() {
        if (this.isReady) {
            if (!gearLibrary.isGameSuccess && gameLibrary.gameMode == GearLibrary.GAME_MODE_PLAY) {
                let clickedBlock = this.pickBlock(mouseX, mouseY);

                if (clickedBlock != null && clickedBlock.type == GearBlock.NORMAL && !clickedBlock.isMoving) {
                    let emptyNeighbor = this.findEmptyNeighbor(clickedBlock.row, clickedBlock.column);

                    if (emptyNeighbor != null) {
                        let row = emptyNeighbor.row;
                        let column = emptyNeighbor.column;
                        let emptyBlock = this.blockArray[row][column];

                        this.blockArray[clickedBlock.row][clickedBlock.column] = emptyBlock;
                        this.blockArray[row][column] = clickedBlock;

                        emptyBlock.moveTo(clickedBlock.row, clickedBlock.column);
                        clickedBlock.moveTo(row, column);
                        return;
                    }
                }
            }

            this.isDragging = true;
            this.previousMouse.set(mouseX, mouseY);
        }
    }

    onMouseDrag() {
        if (this.isReady && this.isDragging) {
            let delta = new GamePoint(mouseX - this.previousMouse.x, mouseY - this.previousMouse.y);
            let speed = this.rotationSpeed * deltaTime;

            this.angle.y += delta.x * speed;
            this.angle.x -= delta.y * speed;

            this.previousMouse.set(mouseX, mouseY);
        }
    }

    onMouseButtonUp() {
        this.isDragging = false;
    }

    findEmptyNeighbor(row, column) {
        for (let diection of this.diectionArray) {
            let neighborRow = row + diection.row;
            let neighborColumn = column + diection.column;

            if (neighborRow >= 0 && neighborRow < this.numberOfRows && neighborColumn >= 0 && neighborColumn < this.blockArray[neighborRow].length) {
                if (this.blockArray[neighborRow][neighborColumn].type == GearBlock.EMPTY) {
                    return {row: neighborRow, column: neighborColumn};
                }
            }
        }

        return null;
    }
}

////////////////////////////////////////////////////////////
// user defined prototypes
////////////////////////////////////////////////////////////
GameLibrary.prototype.onButtonPressed = function(buttonIndex) {
    this.sound.play(GearLibrary.SOUND_CLICK);

    switch (buttonIndex) {
        case GameLibrary.BUTTON_FULLSCREEN:
            this.toggleFullscreen();
            break;
    }
};

GameLibrary.prototype.onChangeGameMode = function(gameMode) {
    switch (gameMode) {
        case GearLibrary.GAME_MODE_MENU:
            gearLibrary.isStartButtonOpen = false;
            break;

        case GearLibrary.GAME_MODE_NEW_GAME:
            gearLibrary.newGame();
            break;

        case GearLibrary.GAME_MODE_PLAY:
            break;
    }
};

GameLibrary.prototype.onGameReady = function() {
    gearLibrary.init();
};

GameLibrary.prototype.onKeyPressed = function(keyCode) {
    if (keyCode == GameLibrary.KEY_D) {
        gearLibrary.isDebug = !gearLibrary.isDebug;

        if (this.gameMode == GearLibrary.GAME_MODE_MENU) {
            gearLibrary.startButton.unpress();
        }
    } else if (this.gameMode == GearLibrary.GAME_MODE_MENU) {
        if (keyCode == GameLibrary.KEY_ENTER && !gearLibrary.board.isDragging) {
            gearLibrary.pressStartButton(keyCode);
        } else {
            gearLibrary.startButton.unpress();
        }
    } else if (this.gameMode == GearLibrary.GAME_MODE_PLAY) {
    }
};

GameLibrary.prototype.onKeyReleased = function(keyCode) {
    if (this.gameMode == GearLibrary.GAME_MODE_MENU) {
        gearLibrary.unpressStartButton(keyCode);
    }
};

GameLibrary.prototype.onLoad = function() {
    this.addImageFilename(GearLibrary.IMAGE_ENTER_FULLSCREEN_0, "EnterFullscreen0");
    this.addImageFilename(GearLibrary.IMAGE_ENTER_FULLSCREEN_1, "EnterFullscreen1");

    this.addImageFilename(GearLibrary.IMAGE_EXIT_FULLSCREEN_0,  "ExitFullscreen0");
    this.addImageFilename(GearLibrary.IMAGE_EXIT_FULLSCREEN_1,  "ExitFullscreen1");

    this.addImageFilename(GearLibrary.IMAGE_BACKGROUND,         "Background");
    this.loadingScreen.setBackgroundImage(GearLibrary.IMAGE_BACKGROUND);

    this.addImageFilename(GearLibrary.IMAGE_SPLASH_SCREEN,      "SplashScreen");
    this.splashScreen.add(GearLibrary.IMAGE_SPLASH_SCREEN);

    this.addImageFilename(GearLibrary.IMAGE_START,              "Start");
    this.addImageFilename(GearLibrary.IMAGE_NEXT_LEVEL,         "NextLevel");

    this.addImageFilename(GearLibrary.IMAGE_BLOCK_0,            "Block0");
    this.addImageFilename(GearLibrary.IMAGE_BLOCK_1,            "Block1");

    this.addImageFilename(GearLibrary.IMAGE_GEAR_0,             "Gear0");
    this.addImageFilename(GearLibrary.IMAGE_GEAR_1,             "Gear1");

    this.addSoundFilename(GearLibrary.SOUND_CLICK,              "Click");
    this.addSoundFilename(GearLibrary.SOUND_MOVE,               "Move");
    this.addSoundFilename(GearLibrary.SOUND_GAME_SUCCESS,       "GameSuccess");
    this.addSoundFilename(GearLibrary.SOUND_GEAR_0,             "Gear0");
    this.addSoundFilename(GearLibrary.SOUND_GEAR_1,             "Gear1");

    //this.fontInit(fontFilenameString);
    this.isWebGLEnabled = true;
    this.camera.isEnabled = false;
    this.numberOfHUDs = 0;
    this.numberOfButtons = 1;
    this.setFullscreenButtonImageIndex(GearLibrary.IMAGE_ENTER_FULLSCREEN_0, GearLibrary.IMAGE_EXIT_FULLSCREEN_0);
};

GameLibrary.prototype.onMouseButtonDown = function() {
    if (this.gameMode == GearLibrary.GAME_MODE_MENU) {
        gearLibrary.pressStartButton();
    }

    if (gearLibrary.startButton.stage != GearButton.STAGE_PRESSING) {
        gearLibrary.board.onMouseButtonDown();
    }
};

GameLibrary.prototype.onMouseButtonUp = function() {
    if (this.gameMode == GearLibrary.GAME_MODE_MENU) {
        gearLibrary.unpressStartButton();
    }

    gearLibrary.board.onMouseButtonUp();
};

GameLibrary.prototype.onMouseDrag = function() {
    if (this.gameMode == GearLibrary.GAME_MODE_MENU && !gearLibrary.board.isDragging) {
        gearLibrary.dragStartButton();
    } else {
        gearLibrary.board.onMouseDrag();
    }
};

GameLibrary.prototype.onMouseWheel = function(delta) {
    gearLibrary.camera.onMouseWheel(delta);
};

GameLibrary.prototype.onRelease = function() {
};

GameLibrary.prototype.onRender = function() {
    gearLibrary.render();
};

GameLibrary.prototype.onUpdate = function() {
};

GameLibrary.prototype.onWindowResized = function(isResized) {
    gearLibrary.resize();
};

////////////////////////////////////////////////////////////
// gear
////////////////////////////////////////////////////////////
class Gear {
    constructor() {
        gameLibrary = new GameLibrary();
    }

    start() {
        gearLibrary = new GearLibrary();
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
