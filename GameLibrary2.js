////////////////////////////////////////////////////////////
// Game Library Version 2.0.20260814
// by Pheeraphat Sawangphian
////////////////////////////////////////////////////////////

'use strict';

var gameLibrary = null;

class GameLibrary {
    // constants
    static get NONE()                   {return -1;}
    static get M_PI()                   {return 3.14159265358979323846;}
    static get M_PI_2()                 {return 1.57079632679489661923;}
    static get SIN_90()                 {return -1.0;}
    static get COS_90()                 {return 0.0;}
    static get MAX_NUMBER_OF_IMAGES()   {return 200;}

    // button
    static get MAX_NUMBER_OF_BUTTONS()  {return 10;}
    static get BUTTON_FULLSCREEN()      {return 0;}
    static get FIRST_ALLOWED_BUTTON()   {return this.BUTTON_FULLSCREEN;}
    static get BUTTON_MIN_SIZE()        {return 32;}

    // keyboard
    static get KEY_BACKSPACE()          {return 8;}
    static get KEY_TAB()                {return 9;}
    static get KEY_ENTER()              {return 13;}
    static get KEY_RETURN()             {return this.KEY_ENTER;}
    static get KEY_SHIFT()              {return 16;}
    static get KEY_CONTROL()            {return 17;}
    static get KEY_ALT()                {return 18;}
    static get KEY_OPTION()             {return this.KEY_ALT;}
    static get KEY_CAPS_LOCK()          {return 20;}
    static get KEY_ESCAPE()             {return 27;}
    static get KEY_ESC()                {return this.KEY_ESCAPE;}
    static get KEY_SPACE()              {return 32;}
    static get KEY_SPACEBAR()           {return this.KEY_SPACE;}
    static get KEY_PAGEUP()             {return 33;}
    static get KEY_PAGEDOWN()           {return 34;}
    static get KEY_END()                {return 35;}
    static get KEY_HOME()               {return 36;}
    static get KEY_LEFT_ARROW()         {return 37;}
    static get KEY_LEFT()               {return this.KEY_LEFT_ARROW;}
    static get KEY_UP_ARROW()           {return 38;}
    static get KEY_UP()                 {return this.KEY_UP_ARROW;}
    static get KEY_RIGHT_ARROW()        {return 39;}
    static get KEY_RIGHT()              {return this.KEY_RIGHT_ARROW;}
    static get KEY_DOWN_ARROW()         {return 40;}
    static get KEY_DOWN()               {return this.KEY_DOWN_ARROW;}
    static get KEY_INSERT()             {return 45;}
    static get KEY_DELETE()             {return 46;}
    static get KEY_0()                  {return 48;}
    static get KEY_NUM0()               {return this.KEY_0;}
    static get KEY_1()                  {return 49;}
    static get KEY_NUM1()               {return this.KEY_1;}
    static get KEY_2()                  {return 50;}
    static get KEY_NUM2()               {return this.KEY_2;}
    static get KEY_3()                  {return 51;}
    static get KEY_NUM3()               {return this.KEY_3;}
    static get KEY_4()                  {return 52;}
    static get KEY_NUM4()               {return this.KEY_4;}
    static get KEY_5()                  {return 53;}
    static get KEY_NUM5()               {return this.KEY_5;}
    static get KEY_6()                  {return 54;}
    static get KEY_NUM6()               {return this.KEY_6;}
    static get KEY_7()                  {return 55;}
    static get KEY_NUM7()               {return this.KEY_7;}
    static get KEY_8()                  {return 56;}
    static get KEY_NUM8()               {return this.KEY_8;}
    static get KEY_9()                  {return 57;}
    static get KEY_NUM9()               {return this.KEY_9;}
    static get KEY_A()                  {return 65;}
    static get KEY_B()                  {return 66;}
    static get KEY_C()                  {return 67;}
    static get KEY_D()                  {return 68;}
    static get KEY_E()                  {return 69;}
    static get KEY_F()                  {return 70;}
    static get KEY_G()                  {return 71;}
    static get KEY_H()                  {return 72;}
    static get KEY_I()                  {return 73;}
    static get KEY_J()                  {return 74;}
    static get KEY_K()                  {return 75;}
    static get KEY_L()                  {return 76;}
    static get KEY_M()                  {return 77;}
    static get KEY_N()                  {return 78;}
    static get KEY_O()                  {return 79;}
    static get KEY_P()                  {return 80;}
    static get KEY_Q()                  {return 81;}
    static get KEY_R()                  {return 82;}
    static get KEY_S()                  {return 83;}
    static get KEY_T()                  {return 84;}
    static get KEY_U()                  {return 85;}
    static get KEY_V()                  {return 86;}
    static get KEY_W()                  {return 87;}
    static get KEY_X()                  {return 88;}
    static get KEY_Y()                  {return 89;}
    static get KEY_Z()                  {return 90;}
    static get KEY_META_LEFT()          {return 91;}
    static get KEY_META_RIGHT()         {return 93;}
    static get KEY_NUMPAD_0()           {return 96;}
    static get KEY_NUMPAD_1()           {return 97;}
    static get KEY_NUMPAD_2()           {return 98;}
    static get KEY_NUMPAD_3()           {return 99;}
    static get KEY_NUMPAD_4()           {return 100;}
    static get KEY_NUMPAD_5()           {return 101;}
    static get KEY_NUMPAD_6()           {return 102;}
    static get KEY_NUMPAD_7()           {return 103;}
    static get KEY_NUMPAD_8()           {return 104;}
    static get KEY_NUMPAD_9()           {return 105;}
    static get KEY_NUMPAD_PLUS()        {return 107;}
    static get KEY_NUMPAD_MINUS()       {return 109;}
    static get KEY_PLUS()               {return 187;}
    static get KEY_MINUS()              {return 189;}

    // HUDs
    static get DEFAULT_FONT_SIZE()      {return 12.0;}
    static get MAX_NUMBER_OF_HUDS()     {return 5;}
    static get HUD_MAX_PLAY_TIME()      {return 5999000;} // 99:59
    static get HUD_SCORE()              {return 0;}
    static get HUD_PLAY_TIME()          {return 1;}
    static get HUD_CORNOR_RADIUS()      {return 0;}
    static get HUD_FONT_FILENAME()      {return null;}
    static get HUD_FONT_SCALE()         {return 0.7;}
    static get HUD_FONT_OFFSET()        {return 0.0;} // 0.0=default, -0.1115=Impact.ttf , -0.25=KrazY_kid_2005.ttf, -0.35=2005_iannnnnBMX.ttf
    static get HUD_LABEL_SCALE()        {return 0.2;}
    static get HUD_LABEL_OFFSET()       {return 12;}

    // HUD text
    static get MAX_NUMBER_OF_HUD_TEXT() {return 3;}
    static get HUD_TEXT_OTHERS()        {return 0;}
    static get HUD_TEXT_PLAY_TIME()     {return 1;}
    static get HUD_TEXT_SCORE()         {return 2;}

    // game mode
    static get GAME_MODE_DELAY()        {return -2;}

    constructor() {
        // splash screen
        this.splashScreen = new GameSplashScreen(this);

        // loading
        this.loadingScreen = new GameLoadingScreen();
        this.setupCooldown = 0;
        this.imageFilenameArray = [];
        this.soundFilenameArray = [];

        // vector
        this.vector = new GameVector();

        // options
        this.fixedAspectRatioX = 0.0;
        this.fixedAspectRatioY = 0.0;
        this.isFixedAspectRatioFullscreen = false;
        this.fixedCanvasWidth = 0;
        this.fixedCanvasHeight = 0;

        // display
        this.canvas = null;
        this.savedCanvasPoint = new GamePoint();
        this.marginPoint = new GamePoint();
        this.savedCCSBodyBackgroundColor = null;
        this.offscreen = new GameOffscreen(this);
        this.displayHalfSize = new GameSize();
        this.displayCenterPoint = new GamePoint();
        this.isInFullscreen = false;
        this.displayWidth = 0;
        this.displayHeight = 0;
        this.devicePixelDensity = 0;
        this.pixelDensity = 1;

        // camera
        this.video = null;
        this.isSetVideoSize = true;
        this.videoBackgroundImageIndex = GameLibrary.NONE;
        this.camera = new GameCamera(this);

        // touchscreen
        this.mouseButton = GameLibrary.NONE;
        this.mousePoint = this.vector.create();
        this.replacedImageFolderString = "";
        this.isTouchBegan = false;
        this.isTouchMoved = false;
        this.mouseWheelDelta = 0;
        this.touchBeganPoint = this.vector.create();
        this.touchPoint = this.vector.create();
        this.relativeTouchPoint = this.vector.create();
        this.touchOffsetPoint = this.vector.create();

        // images
        this.imageLoadingIndex = 0;
        this.imageScaleChanged = 1.0;
        this.imageScale = 1.0;
        this.imageFileScale = 1.0;
        this.numberOfImages = 0;
        this.gameImageArray = [];

        for (let i = 0; i < GameLibrary.MAX_NUMBER_OF_IMAGES; i++) {
            this.gameImageArray[i] = null;
        }

        // sounds
        this.sound = new GameSound(this);

        // buttons
        this.isUpdateFullscreenButton = true;
        this.numberOfButtons = 1;
        this.selectedButton = GameLibrary.NONE;
        this.buttonScale = 0.0;
        this.buttonFullscreenOffsetPoint = new GamePoint();
        this.buttonEnterFullscreen = GameLibrary.NONE;
        this.buttonExitFullscreen = GameLibrary.NONE;
        this.buttonRectArray = [];
        this.isButtonHitArray = [];
        this.isButtonVisibledArray = [];
        this.buttonOffsetMultiplyArray = [];
        this.buttonOffsetSizeArray = [];

        for (let i = 0; i < GameLibrary.MAX_NUMBER_OF_BUTTONS; i++) {
            this.buttonRectArray[i] = new GameRect();
            this.isButtonHitArray[i] = false;
            this.isButtonVisibledArray[i] = false;
            this.buttonOffsetMultiplyArray[i] = 1.0;
            this.buttonOffsetSizeArray[i] = new GameSize();
        }

        // HUDs
        this.hudFontFilename = GameLibrary.HUD_FONT_FILENAME;
        this.hudFontScale = GameLibrary.HUD_FONT_SCALE;
        this.hudFontOffset = GameLibrary.HUD_FONT_OFFSET;
        this.hudLabelScale = GameLibrary.HUD_LABEL_SCALE;
        this.hudLabelOffset = GameLibrary.HUD_LABEL_OFFSET;
        this.font = null;

        this.fontSize = GameLibrary.DEFAULT_FONT_SIZE;
        this.numberOfHUDs = 0;
        this.hudScale = 0.0;
        this.hudGap = 0;
        this.hudStrokeWeight = 1;

        this.hudPlayTime = 0.0;
        this.hudPlayTimeMinutes = 0;
        this.hudPlayTimeSeconds = 0;
        this.hudPlayTimeMilliseconds = 0;
        this.isHUDPlayTimeMillisecondsVisibled = false;
        this.hudPlayTimeString = "00:00";

        this.hudPlayTimeTextColor = color(255, 255, 255);
        this.hudPlayTimeBgFromColor = color(0, 0, 0, 128);
        this.hudPlayTimeBgToColor = color(255, 0, 0, 128);
        this.hudScoreInteger = 0;
        this.hudScore = 0.0;
        this.hudScoreTextFromColor = color(255, 255, 255, 255);
        this.hudScoreTextToColor = color(128, 255, 0, 255);
        this.hudScoreTextColor = color(255, 255, 255, 255);
        this.hudScoreTextBgColor = color(0, 0, 0, 128);
        this.hudLabelColor = color(255, 255, 255, 255);
        this.hudRectArray = [];

        for (let i = 0; i < GameLibrary.MAX_NUMBER_OF_HUDS; i++) {
            this.hudRectArray[i] = new GameRect();
        }

        // HUD text
        this.hudTextScaleArray = [];
        this.hudTextScaleTargetArray = [];

        for (let i = 0; i < GameLibrary.MAX_NUMBER_OF_HUD_TEXT; i++) {
            this.hudTextScaleArray[i] = 1.0;
            this.hudTextScaleTargetArray[i] = 1.0;
        }

        // text over
        this.textOver = new GameTextOver(this);

        // FPS
        this.fpsScale = 10;
        this.fpsTextSize = 0;
        this.fpsSummaryCounter = 0;
        this.fpsSummary = 0;
        this.isFPSVisibled = false;
        this.fps = 0.0;
        this.fpsString = "";
        this.fpsColor = color(0, 0, 0);
        this.fpsPosition = new GamePoint();
        this.defaultFrameRate = 0;
        this.targetFrameRate = 30;

        // cookie
        this.cookie = new GameCookie(this);

        // particle
        this.particle = new GameParticle(this);

        // number
        this.number = new GameNumber(this);

        // game mode
        this.gameModeAfterDelay = GameLibrary.NONE;
        this.gameMode = GameLibrary.NONE;

        // time
        this.delayTime = 0.0;
        this.easeTimeLength = 0.0;
        this.easeTime = 1.0;
        this.easeStartMilliseconds = 0.0;

        // flags
        this.isReady = false;
        this.isCheats = false;
    }

    // math
    min(x, y) {
        return min(x, y);
    }

    max(x, y) {
        return max(x, y);
    }

    DEG_TO_RAD(angleInDegrees) {
        return radians(angleInDegrees);
    }

    RAD_TO_DEG(angleInRadians) {
        return degrees(angleInRadians);
    }

    fabs(floatValue) {
        return abs(floatValue);
    }

    // string
    strcmp(str1, str2) {
        if (str1 == str2) {
            return 0;
        } else if (str1 < str2) {
            return -1;
        } else {
            return 1;
        }
    }

    strncmp(str1, str2, n) {
        let substr1 = str1.substring(0, n);
        let substr2 = str2.substring(0, n);

        if (substr1 == substr2) {
            return 0;
        } else if (substr1 < substr2) {
            return -1;
        } else {
            return 1;
        }
    }

    strlen(src) {
        if (src != null) {
            return src.length;
        } else {
            return 0;
        }
    }

    // utilities
    clamp(value, minValue, maxValue) {
        return (value < minValue) ? minValue : (value > maxValue) ? maxValue : value;
    }

    createGraphics(width, height, colorKey) {
        let graphics = createGraphics(width, height);
        graphics.pixelDensity(1);
        graphics.clear();
        return graphics;
    }

    degrees(angleInRadians) {
        return degrees(angleInRadians);
    }

    distance(x1, y1, x2, y2) {
        return dist(x1, y1, x2, y2);
    }

    distancePoint(p1, p2) {
        return dist(p1.x, p1.y, p2.x, p2.y);
    }

    ease(start, duration, maxScale = 1.0, pointerToFloatScale = null) {
        let t = min(1, (this.getMilliseconds() - start) / duration);

        if (pointerToFloatScale) {
            pointerToFloatScale.value = t;

            if (maxScale < 1) {
                let extraScale = 1 - maxScale;

                if (t <= maxScale) {
                    pointerToFloatScale.value = t * ((1 + extraScale) / maxScale);
                } else {
                    pointerToFloatScale.value = 1 + (extraScale - (t - maxScale));
                }
            }
        }

        return t;
    }

    easeIn(start, duration, maxScale = 1.0, pointerToFloatScale = null) {
        let t = min(1, (this.getMilliseconds() - start) / duration);
        t = t * t;

        if (pointerToFloatScale) {
            pointerToFloatScale.value = t;

            if (maxScale < 1) {
                let extraScale = 1 - maxScale;

                if (t <= maxScale) {
                    pointerToFloatScale.value = t * ((1 + extraScale) / maxScale);
                } else {
                    pointerToFloatScale.value = 1 + (extraScale - (t - maxScale));
                }
            }
        }

        return t;
    }

    easeInOut(start, duration, maxScale = 1.0, pointerToFloatScale = null) {
        let t = min(1, (this.getMilliseconds() - start) / duration);
        t = (3 * t * t) - (2 * t * t * t);

        if (pointerToFloatScale) {
            pointerToFloatScale.value = t;

            if (maxScale < 1) {
                let extraScale = 1 - maxScale;

                if (t <= maxScale) {
                    pointerToFloatScale.value = t * ((1 + extraScale) / maxScale);
                } else {
                    pointerToFloatScale.value = 1 + (extraScale - (t - maxScale));
                }
            }
        }

        return t;
    }

    easeOut(start, duration, maxScale = 1.0, pointerToFloatScale = null) {
        let t = min(1, (this.getMilliseconds() - start) / duration);
        t = (2 * t) - (t * t);

        if (pointerToFloatScale) {
            pointerToFloatScale.value = t;

            if (maxScale < 1) {
                let extraScale = 1 - maxScale;

                if (t <= maxScale) {
                    pointerToFloatScale.value = t * ((1 + extraScale) / maxScale);
                } else {
                    pointerToFloatScale.value = 1 + (extraScale - (t - maxScale));
                }
            }
        }

        return t;
    }

    resetEaseTime() {
        this.easeTimeLength = 0.0;
        this.easeStartMilliseconds = 0.0;
        this.easeTime = 0.0;
    }

    saveEaseTime() {
        if (this.easeStartMilliseconds > 0.0) {
            this.easeTimeLength = this.getMilliseconds() - this.easeStartMilliseconds;
        }
    }

    restoreEaseTime() {
        if (this.easeTimeLength != 0.0) {
            this.easeStartMilliseconds = this.getMilliseconds() - this.easeTimeLength;
            this.easeTimeLength = 0.0;
        }
    }

    getBlue(rgb) {
        return blue(color(rgb));
    }

    getDeltaTime() {
        return deltaTime;
    }

    getFontHeight() {
        return this.fontSize;
    }

    getFontWidth() {
        return textWidth("0");
    }

    getGreen(rgb) {
        return green(color(rgb));
    }

    getMilliseconds() {
        return millis()
    }

    getPixelColor(x, y, graphics, width, height) {
        let i = (y * width + x) * graphics.pixelDensity() * 4;
        let r = graphics.pixels[i + 0];
        let g = graphics.pixels[i + 1];
        let b = graphics.pixels[i + 2];
        let a = graphics.pixels[i + 3];

        return color(r, g, b, a);
    }

    getRed(rgb) {
        return red(color(rgb));
    }

    lerp(min, max, amt) {
        return lerp(min, max, amt);
    }

    lerpColor(c1, c2, amt) {
        return lerpColor(c1, c2, amt);
    }

    map(n, start1, stop1, start2, stop2, isWithinBounds) {
        return map(n, start1, stop1, start2, stop2, isWithinBounds);
    }

    maximumLimit(value, high) {
        return (value > high) ? high : value;
    }

    minimumLimit(value, low) {
        return (value < low) ? low : value;
    }

    normalize(value, start, end, isIncludeEnd) {
        let w = end - start;
        let offset = value - start;
        let result = (offset - (floor(offset / w) * w)) + start;

        if (!isIncludeEnd && (result == -start || result == end)) {
            result = start;
        }

        return result;
    }

    radians(angleInDegrees) {
        return radians(angleInDegrees);
    }

    randomFloat(inclusiveMin, inclusiveMax) {
        let floatValue = random(inclusiveMin, inclusiveMax + 0.001);

        if (floatValue > inclusiveMax) {
            floatValue = inclusiveMax;
        }
        
        return floatValue;
    }

    randomInt(inclusiveMin, inclusiveMax) {
        return int(round(random(inclusiveMin, inclusiveMax)));
    }

    color(r, g, b, a = 0xff) {
        return color(r, g, b, a);
    }

    // frame rate
    checkDefaultFrameRate() {
        if (this.defaultFrameRate <= 0) {
            this.defaultFrameRate = getTargetFrameRate();
        }
    }

    setFrameRate(fps) {
        this.checkDefaultFrameRate();

        if (fps > 0) {
            frameRate(fps);
        }

        this.targetFrameRate = getTargetFrameRate();
    }

    getFrameRate() {
        return frameRate();
    }

    useDefaultFrameRate() {
        this.checkDefaultFrameRate();
        this.setFrameRate(this.defaultFrameRate);
    }

    getDefaultFrameRate() {
        this.checkDefaultFrameRate();
        return this.defaultFrameRate;
    }

    setTargetFrameRate(fps) {
        this.checkDefaultFrameRate();
        this.setFrameRate(fps);
    }

    getTargetFrameRate() {
        this.checkDefaultFrameRate();
        this.targetFrameRate = getTargetFrameRate();
        return this.targetFrameRate;
    }

    // pixel density
    checkDevicePixelDensity() {
        if (this.devicePixelDensity <= 0) {
            this.devicePixelDensity = pixelDensity();
        }
    }

    setPixelDensity(density) {
        this.checkDevicePixelDensity();

        if (density > 0) {
            pixelDensity(density);
        }

        this.pixelDensity = pixelDensity();
    }

    getPixelDensity() {
        this.checkDevicePixelDensity();
        this.pixelDensity = pixelDensity();
        return this.pixelDensity;
    }

    useDefaultPixelDensity() {
        this.useDevicePixelDensity();
    }

    getDefaultPixelDensity() {
        return getDevicePixelDensity();
    }

    getDevicePixelDensity() {
        this.checkDevicePixelDensity();
        return this.devicePixelDensity;
    }

    useDevicePixelDensity() {
        this.checkDevicePixelDensity();
        this.setPixelDensity(this.devicePixelDensity);
    }

    setPixelColor(x, y, rgb, alpha, graphics, width, height) {
        let i = (y * width + x) * graphics.pixelDensity() * 4;

        graphics.loadPixels();
        graphics.pixels[i + 0] = this.getRed(rgb);
        graphics.pixels[i + 1] = this.getGreen(rgb);
        graphics.pixels[i + 2] = this.getBlue(rgb);
        graphics.pixels[i + 3] = alpha;
        graphics.updatePixels();
    }

    // main methods
    resetScore() {
        this.addScore(0, 0.0, GameLibrary.NONE, false);
    }

    addScore(floatValue, maxScore, soundIndex, isScaleText) {
        let newScore = this.hudScore;

        if (floatValue == 0.0) {
            newScore = 0.0;
        } else {
            if (maxScore > 0.0) {
                newScore = this.clamp(newScore + floatValue, 0.0, maxScore);
            } else {
                newScore = newScore + floatValue;

                if (newScore < 0.0) {
                    newScore = 0.0;
                }
            }

            this.sound.play(soundIndex);

            if (isScaleText) {
                this.resetHUDText(GameLibrary.HUD_TEXT_SCORE, 1.3);
            }
        }

        this.hudScore = newScore;
        this.hudScoreInteger = int(this.hudScore);
    }

    addImageFilename(i, filename) {
        if (filename != null && filename.length > 0) {
            this.imageFilenameArray[i] = filename;

            if (!filename.includes(".")) {
                this.imageFilenameArray[i] += ".png";
            }

            this.numberOfImages = this.imageFilenameArray.length;
        }
    }

    addSoundFilename(i, filename, extension = null) {
        if (filename != null && filename.length > 0) {
            this.soundFilenameArray[i] = filename;

            if (!filename.includes(".")) {
                this.soundFilenameArray[i] += ".wav";
            }

            this.sound.numberOfSounds = this.soundFilenameArray.length;
        }
    }

    char(asciiCode) {
        return char(asciiCode);
    }

    charAt(str, i) {
        return str.charAt(i);
    }

    changeGameMode(gameMode) {
        this.gameMode = gameMode;
        this.isTouchBegan = false;
        this.isTouchMoved = false;
        this.touchPoint.set(GameLibrary.NONE, GameLibrary.NONE, 0);
        this.onChangeGameMode(gameMode); // user defined prototype
    }

    cropRect(srcRect, cropWidth, cropHeight) {
        let resultRect = new GameRect(srcRect.x, srcRect.y, srcRect.width, srcRect.height);
        let srcWidth = srcRect.width;
        let srcHeight = srcRect.height;
        let scalePoint = new GamePoint(cropHeight / cropWidth, cropWidth / cropHeight);

        resultRect.width = srcWidth;
        resultRect.height = int(srcWidth * scalePoint.x);

        if (resultRect.height > srcHeight) {
            resultRect.height = srcHeight;
            resultRect.width = int(srcHeight * scalePoint.y);
        }

        resultRect.x = int((srcWidth - resultRect.width) * 0.5);
        resultRect.y = int((srcHeight - resultRect.height) * 0.5);

        return resultRect;
    }

    delay(milliseconds, nextGameMode) {
        this.delayTime = milliseconds;
        this.gameModeAfterDelay = nextGameMode;
        this.changeGameMode(GameLibrary.GAME_MODE_DELAY);
    }

    fixCanvas(fixedCanvasWidth, fixedCanvasHeight) {
        this.fixedCanvasWidth = fixedCanvasWidth;
        this.fixedCanvasHeight = fixedCanvasHeight;
    }

    floatToString(floatValue, stringWidth, rightDecimalPointWidth, isZeroPrefix) {
        let resultString = "";
        let stringValue = nf(floatValue, 0, rightDecimalPointWidth);
        let prefixLength = stringWidth - stringValue.length;
        let prefixString = isZeroPrefix ? "0" : " ";

        for (let i = 0; i < prefixLength; i++) {
            resultString += prefixString;
        }

        resultString += stringValue;

        return resultString;
    }

    greatestCommonDivisor(a, b) { // GCD
        return (b == 0) ? a : this.greatestCommonDivisor(b, a % b);
    }

    getArraySize(array) {
        return (array) ? array.length : 0;
    }

    getFrameRect(imageIndex, frameInteger, numberOfRows, numberOfColumns) {
        let frameRect = new GameRect();

        if (numberOfRows <= 1 && numberOfColumns <= 1) {
            frameRect.width = this.gameImageArray[imageIndex].width;
            frameRect.height = this.gameImageArray[imageIndex].height;
        } else {
            let row = int(frameInteger / numberOfColumns);
            let column = int(frameInteger % numberOfColumns);
            frameRect.width = int(this.gameImageArray[imageIndex].width / numberOfColumns);
            frameRect.height = int(this.gameImageArray[imageIndex].height / numberOfRows);
            frameRect.x = column * frameRect.width;
            frameRect.y = row * frameRect.height;
        }

        return frameRect;
    }

    getImageArrayIndexFromWidth(imageArrayIndex, numberOfImages, imageWidth) {
        let result = 0;

        for (let i = 0; i < numberOfImages; i++) {
            if (imageWidth >= this.gameImageArray[imageArrayIndex + i].width) {
                result = i;
            }
        }

        result += imageArrayIndex;
        return result;
    }

    getSpriteRectFromWidth(imageArrayIndex, imageWidth) {
        let srcRect = new GameRect(0, 0, this.gameImageArray[imageArrayIndex].width, this.gameImageArray[imageArrayIndex].height);

        if (srcRect.width > srcRect.height) {
            let rectSize = srcRect.height;
            let x = 0;

            while (x < this.gameImageArray[imageArrayIndex].width && rectSize > 0) {
                srcRect.x = x;
                srcRect.width = rectSize;
                srcRect.height = rectSize;

                if (imageWidth < rectSize) {
                    x += rectSize;
                    rectSize -= 2;
                } else {
                    break;
                }
            }

            if (srcRect.x + srcRect.width > this.gameImageArray[imageArrayIndex].width) {
                srcRect.width = (srcRect.x + srcRect.width) - this.gameImageArray[imageArrayIndex].width;
            }
        }
    
        return srcRect;
    }

    getTextWidth(pszText) {
        return pszText ? textWidth(pszText) : 0;
    }

    fontInit(filename, scale, offset, labelScale, labelOffset) {
        if (filename != null && filename.length > 0) {
            this.hudFontFilename = filename;

            if (!filename.includes(".")) {
                this.hudFontFilename += ".ttf";
            }

            this.hudFontScale = scale;
            this.hudFontOffset = offset;
            this.hudLabelScale = labelScale;
            this.hudLabelOffset = labelOffset;
        } else {
            this.hudFontFilename = GameLibrary.HUD_FONT_FILENAME;
            this.hudFontScale = GameLibrary.HUD_FONT_SCALE;
            this.hudFontOffset = GameLibrary.HUD_FONT_OFFSET;
            this.hudLabelScale = GameLibrary.HUD_LABEL_SCALE;
            this.hudLabelOffset = GameLibrary.HUD_LABEL_OFFSET;
        }

        this.offscreen.fontOffset = this.hudFontOffset;
    }

    intToString(intValue, stringWidth, isZeroPrefix) {
        let resultString = "";
        let stringValue = str(intValue);
        let prefixLength = stringWidth - stringValue.length;
        let prefixString = isZeroPrefix ? "0" : " ";

        for (let i = 0; i < prefixLength; i++) {
            resultString += prefixString;
        }

        resultString += stringValue;

        return resultString;
    }

    isButtonHit(i, x, y) {
        let expandHalfWidth = (this.buttonRectArray[i].width < GameLibrary.BUTTON_MIN_SIZE) ? (GameLibrary.BUTTON_MIN_SIZE - this.buttonRectArray[i].width) * 0.5 : 0;
        let expandHalfHeight = (this.buttonRectArray[i].height < GameLibrary.BUTTON_MIN_SIZE) ? (GameLibrary.BUTTON_MIN_SIZE - this.buttonRectArray[i].height) * 0.5 : 0;
        let topLeftPoint = new GamePoint(this.buttonRectArray[i].x - expandHalfWidth, this.buttonRectArray[i].y - expandHalfHeight);
        let bottomRightPoint = new GamePoint(this.buttonRectArray[i].x + this.buttonRectArray[i].width + expandHalfWidth - 1, this.buttonRectArray[i].y + this.buttonRectArray[i].height + expandHalfHeight - 1);
        return (this.isButtonVisibled(i, true) && x >= topLeftPoint.x && x <= bottomRightPoint.x && y >= topLeftPoint.y && y <= bottomRightPoint.y);
    }

    isButtonVisibled(i, isVisibled) {
        if (isVisibled) {
            return (this.isButtonVisibledArray[i] && this.buttonOffsetMultiplyArray[i] == 0.0) ? true : false;
        } else {
            return (!this.isButtonVisibledArray[i] && this.buttonOffsetMultiplyArray[i] == 1.0) ? true : false;
        }
    }

    isCanvasFixed() {
        return (this.fixedCanvasWidth > 0 && this.fixedCanvasHeight > 0) ? true : false;
    }

    isFullscreen() {
        this.isInFullscreen = fullscreen();
        return this.isInFullscreen;
    }

    isRectOverlap(r0, r1) {
        return (r0.x + r0.width >= r1.x && r0.x <= r1.x + r1.width && r0.y + r0.height >= r1.y && r0.y <= r1.y + r1.height) ? true : false;
    }

    keyPressed(keyCode) {
        if (this.isReady) {
            if (this.splashScreen.isVisibled) {
                this.splashScreen.exit();
            } else if (this.splashScreen.isFinished()) {
                this.onKeyPressed(keyCode); // user defined prototype
            }
        }
    }

    keyReleased(keyCode) {
        if (this.isReady && this.splashScreen.isFinished()) {
            this.onKeyReleased(keyCode); // user defined prototype
        }
    }

    setLoadingScreen(loadingScreen) {
        if (loadingScreen != null && loadingScreen instanceof GameLoadingScreen) {
            this.loadingScreen = loadingScreen;
        }
    }

    loadFonts() {
        if (this.hudFontFilename && this.hudFontFilename.length > 0) {
            console.log("\npreload fonts...");

            let info = "1/1 " + this.hudFontFilename;
            console.log(info);

            this.loadingScreen.fileIndex++;
            this.loadingScreen.filename = this.hudFontFilename;

            loadFont(this.hudFontFilename, loadedFont => {
                if (loadedFont) {
                    this.font = loadedFont;
                }

                this.hudFontFilename = null;
                this.loadImages();
            });
        } else {
            this.hudFontFilename = null;
            this.loadImages();
        }
    }

    loadImages() {
        if (this.numberOfImages > 0) {
            if (this.imageLoadingIndex == 0) {
                console.log("\npreload images...");
            }

            let duplicatedIndex = GameLibrary.NONE;

            for (let i = 0; i < this.imageLoadingIndex && duplicatedIndex == GameLibrary.NONE; i++) {
                if (this.imageFilenameArray[this.imageLoadingIndex] == this.imageFilenameArray[i]) {
                    duplicatedIndex = i;
                }
            }

            let info = str(this.imageLoadingIndex + 1) + "/" + str(min(this.numberOfImages, GameLibrary.MAX_NUMBER_OF_IMAGES)) + " " + this.imageFilenameArray[this.imageLoadingIndex];
            console.log(info);

            this.loadingScreen.fileIndex++;
            this.loadingScreen.filename = this.imageFilenameArray[this.imageLoadingIndex];
            let isLoadingScreenImageIndex = this.loadingScreen.preloadImageIndexArray.includes(this.imageLoadingIndex);

            if (isLoadingScreenImageIndex || duplicatedIndex != GameLibrary.NONE) {
                if (duplicatedIndex != GameLibrary.NONE) {
                    this.gameImageArray[this.imageLoadingIndex] = this.gameImageArray[duplicatedIndex];
                }

                this.imageLoadingIndex++;

                if (this.imageLoadingIndex < this.numberOfImages && this.imageLoadingIndex < GameLibrary.MAX_NUMBER_OF_IMAGES) {
                    this.loadImages();
                } else {
                    this.imageFilenameArray = null;
                    this.loadSounds();
                }
            } else {
                let filePath = this.getImageFilePath(this.imageLoadingIndex);

                loadImage(filePath, loadedImage => {
                    if (loadedImage) {
                        this.gameImageArray[this.imageLoadingIndex] = new GameImage(loadedImage, loadedImage.width, loadedImage.height, null, 0x0000);
                    }

                    this.imageLoadingIndex++;

                    if (this.imageLoadingIndex < this.numberOfImages && this.imageLoadingIndex < GameLibrary.MAX_NUMBER_OF_IMAGES) {
                        this.loadImages();
                    } else {
                        this.imageFilenameArray = null;
                        this.loadSounds();
                    }
                });
            }
        } else {
            this.imageFilenameArray = null;
            this.loadSounds();
        }
    }

    loadSounds() {
        if (this.sound.numberOfSounds > 0) {
            if (this.sound.loadingIndex == 0) {
                console.log("\npreload sounds...");
            }

            let info = str(this.sound.loadingIndex + 1) + "/" + str(min(this.sound.numberOfSounds, this.sound.MAX_NUMBER_OF_SOUNDS)) + " " + this.soundFilenameArray[this.sound.loadingIndex];
            console.log(info);

            this.loadingScreen.fileIndex++;
            this.loadingScreen.filename = this.soundFilenameArray[this.sound.loadingIndex];

            let loadingResult = loadSound(this.soundFilenameArray[this.sound.loadingIndex]);

            if (loadingResult && typeof loadingResult.then === "function") {
                loadingResult.then((loadedSound) => {
                    this.handleSoundLoaded(loadedSound);
                });
            } else {
                this.handleSoundLoaded(loadingResult);
            }
        } else {
            this.soundFilenameArray = null;
            this.setupCooldown = 500;
        }
    }

    handleSoundLoaded(loadedSound) {
        this.sound.soundArray[this.sound.loadingIndex] = loadedSound;
        this.sound.loadingIndex++;

        if (this.sound.loadingIndex < this.sound.numberOfSounds && this.sound.loadingIndex < this.sound.MAX_NUMBER_OF_SOUNDS) {
            this.loadSounds();
        } else {
            this.soundFilenameArray = null;
            this.setupCooldown = 500;
        }
    }

    getMouseButton(button) {
        if (button == GameLibrary.NONE) {
            button = (mouseButton == LEFT || mouseButton.left) ? LEFT :
                     (mouseButton == RIGHT || mouseButton.right) ? RIGHT :
                     (mouseButton == CENTER || mouseButton.center) ? CENTER : GameLibrary.NONE;
        }

        return button;
    }

    mouseButtonDown(gamePoint, button = GameLibrary.NONE) {
        this.mouseButton = this.getMouseButton(button);
        this.mouseWheelDelta = 0.0

        if (this.isReady && this.mouseButton == LEFT) {
            if (this.splashScreen.isVisibled) {
                this.splashScreen.exit();
            } else if (this.splashScreen.isFinished()) {
                this.touchPoint.x = gamePoint.x;
                this.touchPoint.y = gamePoint.y;

                let isButtonHit = false;

                for (let i = GameLibrary.FIRST_ALLOWED_BUTTON; i < GameLibrary.MAX_NUMBER_OF_BUTTONS; i++) {
                    this.isButtonHitArray[i] = false;

                    if (i < this.numberOfButtons && this.buttonRectArray[i].width > 0 && this.buttonRectArray[i].height > 0) {
                        if (!isButtonHit && this.isButtonHit(i, this.touchPoint.x, this.touchPoint.y)) {
                            this.isButtonHitArray[i] = true;
                            isButtonHit = true;
                        }
                    }
                }

                this.touchBeganPoint.x = this.touchPoint.x;
                this.touchBeganPoint.y = this.touchPoint.y;

                this.isTouchBegan = true;
                this.isTouchMoved = false;

                if (!isButtonHit) {
                    this.touchOffsetPoint.x = this.relativeTouchPoint.x - this.touchPoint.x;
                    this.touchOffsetPoint.y = this.relativeTouchPoint.y - this.touchPoint.y;
                    this.onMouseButtonDown(); // user defined prototype
                }
            }
        }
    }

    mouseButtonUp(gamePoint, button = GameLibrary.NONE) {
        if (button != GameLibrary.NONE) {
            this.mouseButton = button;
        }

        if (this.isReady && this.isTouchBegan && this.mouseButton == LEFT && this.splashScreen.isFinished()) {
            this.touchPoint.x = gamePoint.x;
            this.touchPoint.y = gamePoint.y;

            let isButtonHit = false;

            for (let i = GameLibrary.FIRST_ALLOWED_BUTTON; i < GameLibrary.MAX_NUMBER_OF_BUTTONS; i++) {
                if (i < this.numberOfButtons && this.isButtonHitArray[i]) {
                    isButtonHit = true;

                    if (this.isButtonHit(i, this.touchPoint.x, this.touchPoint.y)) {
                        this.onButtonPressed(i); // user defined prototype

                        this.touchPoint.x = GameLibrary.NONE;
                        this.touchPoint.y = GameLibrary.NONE;
                    }
                }

                this.isButtonHitArray[i] = false;
            }

            this.touchOffsetPoint.x = 0;
            this.touchOffsetPoint.y = 0;

            if (!isButtonHit) {
                this.onMouseButtonUp(); // user defined prototype
            }

            this.isTouchBegan = false;
            this.isTouchMoved = false;
        }
    }

    mouseDrag(gamePoint, button = GameLibrary.NONE) {
        this.mouseButton = this.getMouseButton(button);
        this.selectedButton = GameLibrary.NONE;

        if (this.isReady && this.isTouchBegan && this.mouseButton == LEFT && this.splashScreen.isFinished()) {
            this.touchPoint.x = gamePoint.x;
            this.touchPoint.y = gamePoint.y;
            this.isTouchMoved = true;

            let isButtonHit = false;

            for (let i = GameLibrary.FIRST_ALLOWED_BUTTON; i < this.numberOfButtons && i < GameLibrary.MAX_NUMBER_OF_BUTTONS && !isButtonHit; i++) {
                if (this.isButtonHitArray[i]) {
                    isButtonHit = true;
                }
            }

            if (!isButtonHit) {
                this.relativeTouchPoint.x = this.touchPoint.x + this.touchOffsetPoint.x;
                this.relativeTouchPoint.y = this.touchPoint.y + this.touchOffsetPoint.y;
                this.onMouseDrag(); // user defined prototype
            }
        }
    }

    mouseWheel(delta) {
        if (this.isReady && this.splashScreen.isFinished()) {
            this.mouseWheelDelta = delta;
            this.onMouseWheel(delta); // user defined prototype
        }
    }

    preload() {
        this.marginPoint.set(0, 0);
        this.savedCanvasPoint.set(0, 0);
        this.mousePoint.set(0, 0, 0);

        this.resetRelativeTouch();
        this.touchPoint.set(GameLibrary.NONE, GameLibrary.NONE, 0);
        this.fpsScale = 10.0;

        this.setTargetFrameRate(this.targetFrameRate);
        this.setPixelDensity(this.pixelDensity);

        console.log("preload()");
        console.log("default p5.js frame rate..........: " + this.defaultFrameRate);
        console.log("device pixel density..............: " + this.devicePixelDensity);
        console.log("default game library frame rate...: " + this.targetFrameRate);
        console.log("default game library pixel density: " + this.pixelDensity);

        this.onLoad(); // user defined prototype
        this.initCanvas();

        let params = getURLParams();

        if (params) {
            if (params.cheats == "1") {
                this.isCheats = true;
                console.log("cheats enabled!");
            }

            if (params.image) {
                this.replacedImageFolderString = params.image;
                console.log("use image size %s", this.replacedImageFolderString);
            }

            let fixedCanvasWidth = 0;
            let fixedCanvasHeight = 0;

            if (params.width) {
                fixedCanvasWidth = int(params.width);
                console.log("width %d", fixedCanvasWidth);
            }

            if (params.height) {
                fixedCanvasHeight = int(params.height);
                console.log("height %d", fixedCanvasHeight);
            }

            if (fixedCanvasWidth > 0 || fixedCanvasHeight > 0) {
                if (fixedCanvasWidth == 0) {
                    fixedCanvasWidth = windowWidth;
                }

                if (fixedCanvasHeight == 0) {
                    fixedCanvasHeight = windowHeight;
                }

                console.log("fix canvas %dx%d", fixedCanvasWidth, fixedCanvasHeight);
                this.fixCanvas(fixedCanvasWidth, fixedCanvasHeight);
            }
        }

        createCanvas(windowWidth, windowHeight);

        if (this.loadingScreen.preloadImageIndexArray.length > 0) {
            this.preloadLoadingScreenImages();
        } else {
            this.startLoading();
        }
    }

    startLoading() {
        let numberOfFonts = (this.hudFontFilename && this.hudFontFilename.length > 0) ? 1 : 0;
        let numberOfFiles = numberOfFonts + this.numberOfImages + this.sound.numberOfSounds;

        this.loadingScreen.numberOfFiles = numberOfFiles;
        this.loadingScreen.isStarted = true;

        this.imageLoadingIndex = 0;
        this.loadFonts();
    }

    getImageFilePath(imageLoadingIndex) {
        let filePath = this.imageFilenameArray[imageLoadingIndex];

        if (this.replacedImageFolderString.length > 0) {
            let splittedFilePathArray = split(filePath, "/");

            if (splittedFilePathArray.length > 1) {
                filePath = "";

                for (let i = 0; i < splittedFilePathArray.length; i++) {
                    if (i > 0) {
                        filePath += "/";
                    }

                    if (i == splittedFilePathArray.length - 2) {
                        filePath += this.replacedImageFolderString;
                    } else {
                        filePath += splittedFilePathArray[i];
                    }
                }
            }
        }

        return filePath;
    }

    preloadLoadingScreenImages() {
        if (this.loadingScreen.preloadIndex < this.loadingScreen.preloadImageIndexArray.length) {
            if (this.loadingScreen.preloadIndex == 0) {
                console.log("\npreload loading screen images...");
            }

            this.imageLoadingIndex = this.loadingScreen.preloadImageIndexArray[this.loadingScreen.preloadIndex];
            let filePath = this.getImageFilePath(this.imageLoadingIndex);
            let info = str(this.loadingScreen.preloadIndex + 1) + "/" + str(this.loadingScreen.preloadImageIndexArray.length) + " " + this.imageFilenameArray[this.imageLoadingIndex];
            console.log(info);

            loadImage(filePath, loadedImage => {
                if (loadedImage) {
                    this.gameImageArray[this.imageLoadingIndex] = new GameImage(loadedImage, loadedImage.width, loadedImage.height, null, 0x0000);
                }

                this.loadingScreen.preloadIndex++;

                if (this.loadingScreen.preloadIndex < this.loadingScreen.preloadImageIndexArray.length) {
                    this.preloadLoadingScreenImages();
                } else {
                    this.startLoading();
                }
            });
        } else {
            this.startLoading();
        }
    }

    render() {
        if (this.isReady) {
            textSize(this.fontSize);
            this.offscreen.background(0);
            smooth();

            if (this.camera.isEnabled) {
                this.camera.update();
            }

            for (let i = 0; i < GameLibrary.MAX_NUMBER_OF_HUD_TEXT; i++) {
                this.updateHUDText(i);
            }

            if (this.gameMode == GameLibrary.GAME_MODE_DELAY) {
                this.delayTime -= this.getDeltaTime();

                if (this.delayTime <= 0.0) {
                    this.delayTime = 0.0;
                    this.changeGameMode(this.gameModeAfterDelay);
                }
            } else {
                if (!this.splashScreen.isVisibled) {
                    this.onUpdate(); // user defined prototype
                }

                this.splashScreen.update();
            }

            if (!this.splashScreen.isVisibled) {
                push();
                this.onRender(); // user defined prototype
                pop();
            }

            this.splashScreen.render();
            this.renderFPS(this.fpsColor);
            this.offscreen.present();
        } else {
            if (this.camera.isEnabled && this.video != null) {
                this.video.hide();

                if (!this.isSetVideoSize) {
                    this.setVideoSize(this.video.width, this.video.height);
                    this.isSetVideoSize = true;
                }
            }

            if (this.loadingScreen.isStarted) {
                erase();
                rect(0, 0, this.displayWidth, this.displayHeight);
                noErase();

                this.loadingScreen.update();
                this.loadingScreen.render();

                if (this.hudFontFilename == null && this.imageFilenameArray == null && this.soundFilenameArray == null && this.loadingScreen.percent == 100.0) {
                    if (this.setupCooldown > 0) {
                        this.setupCooldown -= deltaTime;

                        if (this.setupCooldown <= 0) {
                            this.setupCooldown = 0;
                            this.loadingScreen.isFadeOut = true;
                        }
                    } else {
                        if (this.splashScreen.imageIndexArray.length == 0 || (this.loadingScreen.isFadeOut && this.loadingScreen.fadeOutAlpha == 255.0)) {
                            this.loadingScreen.isFinished = true;
                            this.setup();
                        }
                    }
                }

                if (this.loadingScreen.numberOfFiles > 0 && this.splashScreen.imageIndexArray.length > 0 && this.loadingScreen.isFadeOut) {
                    this.loadingScreen.fadeOutAlpha += (255.0 / this.splashScreen.fadeSpeed) * deltaTime;

                    if (this.loadingScreen.fadeOutAlpha >= 255.0) {
                        this.loadingScreen.fadeOutAlpha = 255.0;
                    }

                    let fadeToColor = color(red(this.splashScreen.fadeToColor), green(this.splashScreen.fadeToColor), blue(this.splashScreen.fadeToColor));
                    fadeToColor.setAlpha(this.loadingScreen.fadeOutAlpha);

                    push();
                    fill(fadeToColor);
                    rect(0, 0, this.displayWidth, this.displayHeight);
                    pop();
                }
            }
        }
    }

    renderArrow(fromPoint, toPoint, arrowHeadSize, rgb) {
        let fromVector = this.vector.create(fromPoint.x, fromPoint.y, 0);
        let toVector = this.vector.create(toPoint.x - fromPoint.x, toPoint.y - fromPoint.y, 0);

        push();
        stroke(rgb);
        strokeWeight(this.minimumLimit(arrowHeadSize / 10.0, 1));
        fill(rgb);
        translate(fromVector.x, fromVector.y);
        line(0, 0, toVector.x, toVector.y);
        rotate(toVector.heading());
        translate(toVector.mag() - arrowHeadSize, 0);
        triangle(0, arrowHeadSize / 2, 0, -arrowHeadSize / 2, arrowHeadSize, 0);
        pop();
    }

    renderButton(i, imageIndex) {
        if (i >= 0 && i < this.numberOfButtons && i < GameLibrary.MAX_NUMBER_OF_BUTTONS) {
            if (this.isButtonVisibledArray[i] || (!this.isButtonVisibledArray[i] && this.buttonOffsetMultiplyArray[i] != 1.0)) {
                if (i != GameLibrary.BUTTON_FULLSCREEN || (i == GameLibrary.BUTTON_FULLSCREEN && this.buttonEnterFullscreen >= 0 && this.buttonExitFullscreen >= 0)) {
                    if (this.isButtonVisibledArray[i]) {
                        if (this.buttonOffsetMultiplyArray[i] != 0.0) {
                            this.buttonOffsetMultiplyArray[i] = this.lerp(this.buttonOffsetMultiplyArray[i], 0.0, 0.3);

                            if (this.fabs(this.buttonOffsetSizeArray[i].width * this.buttonOffsetMultiplyArray[i]) < 1.0 && this.fabs(this.buttonOffsetSizeArray[i].height * this.buttonOffsetMultiplyArray[i]) < 1.0) {
                                this.buttonOffsetMultiplyArray[i] = 0.0;
                            }
                        }
                    } else {
                        if (this.buttonOffsetMultiplyArray[i] != 1.0) {
                            this.buttonOffsetMultiplyArray[i] += this.getDeltaTime() * 0.0025;

                            if (this.buttonOffsetMultiplyArray[i] >= 1.0) {
                                this.buttonOffsetMultiplyArray[i] = 1.0;
                            }
                        }
                    }

                    if (i >= GameLibrary.FIRST_ALLOWED_BUTTON) {
                        push();
                        imageMode(CORNER);

                        if (i == GameLibrary.BUTTON_FULLSCREEN) {
                            noSmooth()
                            imageIndex = this.isFullscreen() ? this.buttonExitFullscreen : this.buttonEnterFullscreen;
                        }

                        if (this.selectedButton == GameLibrary.NONE) {
                            if (this.isButtonHit(i, mouseX, mouseY)) {
                                imageIndex++;
                                this.selectedButton = i;
                            }
                        } else if (this.selectedButton == i) {
                            imageIndex++;
                        }

                        if (this.gameImageArray[imageIndex] != null && this.gameImageArray[imageIndex].image && this.buttonRectArray[i].width > 0 && this.buttonRectArray[i].height > 0) {
                            let x = this.buttonRectArray[i].x + (this.buttonOffsetSizeArray[i].width * this.buttonOffsetMultiplyArray[i]);
                            let y = this.buttonRectArray[i].y + (this.buttonOffsetSizeArray[i].height * this.buttonOffsetMultiplyArray[i]);
                            this.offscreen.renderImage(x, y, this.buttonRectArray[i].width, this.buttonRectArray[i].height, 0xff, this.gameImageArray[imageIndex].alphaChannel, 0x0000, this.gameImageArray[imageIndex].image);
                        }

                        pop();
                    }
                }
            }
        }
    }

    renderFPS(rgb) {
        if (this.isFPSVisibled) {
            this.fpsSummary += this.getFrameRate();

            if (++this.fpsSummaryCounter >= 10) {
                this.fps = this.fpsSummary / this.fpsSummaryCounter;
                this.fpsSummary = 0.0;
                this.fpsSummaryCounter = 0;
                this.fpsString = "FPS " + nf(this.fps, 1, 2);
            }

            push();
            textSize(this.fpsTextSize);
            this.offscreen.renderString(this.fpsPosition.x, this.fpsPosition.y, this.fpsString, rgb, 0xff);
            pop();
        }
    }

    renderHUD(i, hudTextIndex, floatValue, labelString, prefixString, suffixString, textColor, bgColor, labelColor, isTimeLeft) {
        let textString = (prefixString && prefixString.length > 0) ? prefixString : "";

        if (i == GameLibrary.HUD_SCORE) {
            if (this.hudTextScaleTargetArray[hudTextIndex] > 1) {
                this.hudScoreTextColor = this.lerpColor(this.hudScoreTextColor, this.hudScoreTextToColor, 0.5);
            } else {
                this.hudScoreTextColor = this.lerpColor(this.hudScoreTextColor, this.hudScoreTextFromColor, 0.3);
            }

            textString += str(floatValue);
            textColor = this.hudScoreTextColor;
            bgColor = this.hudScoreTextBgColor;
        } else if (i == GameLibrary.HUD_PLAY_TIME) {
            this.setPlayTime(floatValue);
            textString += this.hudPlayTimeString;
            textColor = this.hudPlayTimeTextColor;
            bgColor = (isTimeLeft && this.hudPlayTime < 11000) ? this.lerpColor(this.hudPlayTimeBgFromColor, this.hudPlayTimeBgToColor, 0.8) : this.hudPlayTimeBgFromColor;
        } else {
            textString += str(floatValue);
        }

        let weight = this.minimumLimit(1 * this.camera.scale, 1);
        push();
        stroke(0);
        strokeWeight(weight);
        fill(bgColor);

        let hudRectHeight = this.hudRectArray[i].height;
        let labelOffsetHeight = 0;
        rect(this.hudRectArray[i].x, this.hudRectArray[i].y, this.hudRectArray[i].width, this.hudRectArray[i].height);
        pop();

        if (suffixString && suffixString.length > 0) {
            textString += suffixString;
        }

        let x = this.hudRectArray[i].x + this.hudRectArray[i].width * 0.5;
        this.renderHUDText(hudTextIndex, textString, x, this.hudRectArray[i].y + int(hudRectHeight * 0.5), this.hudRectArray[i].height * this.hudFontScale, textColor, 0xff, true);

        let labelScale = this.hudLabelScale;

        if (labelString && labelString.length > 0 && labelScale > 0.0) {
            let fontSize = this.hudRectArray[i].height * labelScale;
            push();
            textSize(fontSize);
            textAlign(CENTER, CENTER);
            fill(labelColor);
            text(labelString, x, this.hudRectArray[i].y + labelOffsetHeight + (this.hudLabelOffset * this.hudScale) + (fontSize * this.hudFontOffset));
            pop();
        }
    }

    renderHUDText(i, textString, x, y, fontSize, rgb, alpha, isScale) {
        if (alpha > 0) {
            fontSize *= (i >= 0 && isScale) ? this.hudTextScaleArray[i] : 1.0;

            push();
            textSize(fontSize);
            textAlign(CENTER, CENTER);
            fill(red(rgb), green(rgb), blue(rgb), alpha);
            text(textString, x, y + (fontSize * this.hudFontOffset));
            pop();
        }
    }

    renderRotationImage(gameImage, x, y, width, height, angleInRadians, numberOfRows, numberOfColumns) {
        this.renderRotationImageWithAlpha(gameImage, x, y, width, height, angleInRadians, numberOfRows, numberOfColumns, 255.0);
    }

    renderRotationImageWithAlpha(gameImage, x, y, width, height, angleInRadians, numberOfRows, numberOfColumns, alpha) {
        if (width > 0 && height > 0 && alpha > 0) {
            if (numberOfRows <= 1 && numberOfColumns <= 1) {
                if (this.offscreen.buffer) {
                    this.offscreen.buffer.push();

                    if (alpha < 255 || this.offscreen.isTintEnabled) {
                        this.offscreen.buffer.tint(this.offscreen.tintRed, this.offscreen.tintGreen, this.offscreen.tintBlue, alpha);
                    }

                    this.offscreen.buffer.imageMode(CENTER);
                    this.offscreen.buffer.translate(x + int(width * 0.5), y + int(height * 0.5));
                    this.offscreen.buffer.rotate(angleInRadians);
                    this.offscreen.buffer.image(gameImage.image, 0, 0, width, height);
                    this.offscreen.buffer.noTint();
                    this.offscreen.buffer.pop();
                } else {
                    push();

                    if (alpha < 255 || this.offscreen.isTintEnabled) {
                        tint(this.offscreen.tintRed, this.offscreen.tintGreen, this.offscreen.tintBlue, alpha);
                    }

                    imageMode(CENTER);
                    translate(x + int(width * 0.5), y + int(height * 0.5));
                    rotate(angleInRadians);
                    image(gameImage.image, 0, 0, width, height);
                    noTint();
                    pop();
                }
            } else {
                angleInRadians = this.normalize(angleInRadians, 0.0, TWO_PI, false);

                let frameInteger = int(degrees(angleInRadians) / (360.0 / (numberOfRows * numberOfColumns)));
                let row = int(frameInteger / numberOfColumns);
                let column = int(frameInteger % numberOfColumns);
                let frameWidth = int(gameImage.width / numberOfColumns);
                let frameHeight = int(gameImage.height / numberOfRows);
                let srcX = column * frameWidth;
                let srcY = row * frameHeight;

                gameImage.render(x, y, width, height, srcX, srcY, frameWidth, frameHeight, alpha);
            }
        }
    }

    resetHUDs(startPlayTime) {
        for (let i = 0; i < GameLibrary.MAX_NUMBER_OF_HUD_TEXT; i++) {
            this.resetHUDText(i, 1);
        }

        this.setPlayTime(startPlayTime);
    }

    resetHUDText(i, scale) {
        this.hudTextScaleArray[i] = 1.0;
        this.hudTextScaleTargetArray[i] = scale;
        this.hudScoreTextColor = this.hudScoreTextFromColor;
    }

    resetRelativeTouch() {
        this.touchOffsetPoint.set(0, 0, 0);
        this.touchPoint.set(this.displayCenterPoint.x, this.displayCenterPoint.y, 0);
        this.relativeTouchPoint.set(this.touchPoint.x + this.touchOffsetPoint.x, this.touchPoint.y + this.touchOffsetPoint.y, 0);
    }

    rotateImage(p5Image, topLeftX, topLeftY, width, height, angleInDegrees, pivotOffsetX, pivotOffsetY, alpha) {
        if (alpha > 0) {
            let pivotX = int(width * pivotOffsetX);
            let pivotY = int(height * pivotOffsetY);
            this.offscreen.translate(topLeftX + pivotX, topLeftY + pivotY);
            rotate(radians(angleInDegrees));
            this.offscreen.renderImage(-pivotX, -pivotY, width, height, alpha, null, 0x0000, p5Image);
            this.offscreen.translate(0, 0);
        }
    }

    scale(floatValue) {
        return floatValue * this.imageScale;
    }

    scaleRect(srcRect, scaledWidth, scaledHeight) {
        let resultRect = new GameRect(srcRect.x, srcRect.y, srcRect.width, srcRect.height);
        let scalePoint = new GamePoint(resultRect.height / resultRect.width, resultRect.width / resultRect.height);

        resultRect.width = scaledWidth;
        resultRect.height = int(scaledWidth * scalePoint.x);

        if (resultRect.height < scaledHeight) {
            resultRect.height = scaledHeight;
            resultRect.width = int(scaledHeight * scalePoint.y);
        }

        resultRect.x = int((scaledWidth - resultRect.width) * 0.5);
        resultRect.y = int((scaledHeight - resultRect.height) * 0.5);

        return resultRect;
    }

    screenToVideoX(x) {
        return int((x - this.camera.screenRect.x) / this.camera.scale);
    }

    screenToVideoY(y) {
        return int((y - this.camera.screenRect.y) / this.camera.scale);
    }

    setFontSize(fontSize) {
        this.fontSize = (fontSize > 0.0) ? fontSize : GameLibrary.DEFAULT_FONT_SIZE;
        textSize(this.fontSize);
    }

    setFullscreenButtonImageIndex(buttonEnterFullscreen, buttonExitFullscreen) {
        this.buttonEnterFullscreen = buttonEnterFullscreen;
        this.buttonExitFullscreen = buttonExitFullscreen;
    }

    setPlayTime(floatValue) {
        this.hudPlayTime = this.clamp(floatValue, 0.0, GameLibrary.HUD_MAX_PLAY_TIME);

        this.hudPlayTimeMinutes = int(this.hudPlayTime / 60000);
        this.hudPlayTimeSeconds = int((this.hudPlayTime - (this.hudPlayTimeMinutes * 60000)) / 1000);

        this.hudPlayTimeString = "";

        if (this.hudPlayTimeMinutes < 10) {
            this.hudPlayTimeString += "0";
        }

        this.hudPlayTimeString += str(this.hudPlayTimeMinutes) + ":";

        if (this.hudPlayTimeSeconds < 10) {
            this.hudPlayTimeString += "0";
        }

        this.hudPlayTimeString += str(this.hudPlayTimeSeconds);
        this.hudPlayTimeMilliseconds = int(this.hudPlayTime - (this.hudPlayTimeMinutes * 60000) - (this.hudPlayTimeSeconds * 1000));

        if (this.isHUDPlayTimeMillisecondsVisibled) {
            this.hudPlayTimeString += ":";

            let milliseconds = int(this.hudPlayTimeMilliseconds / 10);

            if (milliseconds < 10) {
                this.hudPlayTimeString += "0";
            }

            this.hudPlayTimeString += str(milliseconds);
        }
    }

    setCanvas(canvasWidth, canvasHeight, isResized) {
        console.log("\nsetCanvas(" + canvasWidth + ", " + canvasHeight + ", " + isResized + ")");
        let screenWidth = this.fixedCanvasWidth;
        let screenHeight = this.fixedCanvasHeight;
        let fixedAspectRatio = 0.0;

        if (this.isCanvasFixed()) {
            screenWidth += this.marginPoint.x;
            screenHeight += this.marginPoint.y;
        } else {
            if (this.fixedAspectRatioX > 0.0 && this.fixedAspectRatioY > 0.0) {
                fixedAspectRatio = this.fixedAspectRatioX / this.fixedAspectRatioY;
            }

            let aspectRatio = fixedAspectRatio;
            if (this.isFullscreen()) {
                let gcdApectRatio = this.greatestCommonDivisor(windowWidth, windowHeight);
                console.log("fullscreen apect ratio............: %d:%d (%dx%d)", this.camera.size.width / gcdApectRatio, this.camera.size.height / gcdApectRatio, windowWidth, windowHeight);
                canvasWidth = windowWidth;
                canvasHeight = windowHeight;

                if (aspectRatio != 0.0 && !this.isFixedAspectRatioFullscreen) {
                    aspectRatio = 0.0;
                }
            }

            if (fixedAspectRatio == 0.0) {
                screenWidth = windowWidth - this.marginPoint.x;
                screenHeight = windowHeight - this.marginPoint.y;
            } else {
                let resolution = (aspectRatio <= 0.0) ? (canvasWidth / canvasHeight) : aspectRatio;
                screenHeight = windowHeight - this.marginPoint.y;
                screenWidth = screenHeight * resolution;

                if (screenWidth > windowWidth - this.marginPoint.x) {
                    screenWidth = windowWidth - this.marginPoint.x;
                    screenHeight = screenWidth / resolution;
                }
            }
        }

        this.camera.screenRect.set(0, 0, screenWidth, screenHeight);
        this.camera.cropRect.set(0, 0, this.camera.size.width, this.camera.size.height);

        if (this.camera.size.width > 0 && this.camera.size.height > 0) {
            this.camera.scale = (screenWidth > screenHeight) ? (screenWidth / this.camera.size.width) : (screenHeight / this.camera.size.height);

            if (this.isFullscreen() || fixedAspectRatio == 0.0) {
                console.log("%s size...................: %dx%d", (this.isFullscreen() ? "fullscreen" : "fullcanvas"), screenWidth, screenHeight);
                this.camera.screenRect.width = int(ceil(this.camera.size.width * this.camera.scale));
                this.camera.screenRect.height = int(ceil(this.camera.size.height * this.camera.scale));

                if (this.camera.screenRect.height < screenHeight) {
                    this.camera.scale = screenHeight / this.camera.size.height;
                } else if (this.camera.screenRect.width < screenWidth) {
                    this.camera.scale = screenWidth / this.camera.size.width;
                }
            }

            this.camera.screenRect.width = int(ceil(this.camera.size.width * this.camera.scale));
            this.camera.screenRect.height = int(ceil(this.camera.size.height * this.camera.scale));
            this.camera.screenRect.x = int((screenWidth - this.camera.screenRect.width) * 0.5);
            this.camera.screenRect.y = int((screenHeight - this.camera.screenRect.height) * 0.5);
            console.log("video scale.......................: %s (%d, %d, %d, %d)", nf(this.camera.scale, 1, 3), this.camera.screenRect.x, this.camera.screenRect.y, this.camera.screenRect.width, this.camera.screenRect.height);
        } else {
            console.log("%s size...................: %dx%d", (this.isFullscreen() ? "fullscreen" : "fullcanvas"), screenWidth, screenHeight);
        }

        if (isResized) {
            resizeCanvas(screenWidth, screenHeight);
        } else {
            this.canvas = createCanvas(screenWidth, screenHeight);

            this.offscreen.setDefaultBuffer();

            this.savedCCSBodyBackgroundColor = document.body.style.backgroundColor;
            let gamePoint = this.canvas.position();
            this.savedCanvasPoint.x = gamePoint.x;
            this.savedCanvasPoint.y = gamePoint.y;
        }

        if (this.isFullscreen()) {
            document.body.style.backgroundColor = "black";
            this.canvas.position((windowWidth - screenWidth) * 0.5, (windowHeight - screenHeight) * 0.5);
            console.log("window............................: %dx%d", windowWidth, windowHeight);
            console.log("fullscreen position...............: (%d, %d)", (windowWidth - screenWidth) * 0.5, (windowHeight - screenHeight) * 0.5);
        } else {
            document.body.style.backgroundColor = this.savedCCSBodyBackgroundColor;
            this.canvas.position(this.savedCanvasPoint.x, this.savedCanvasPoint.y);
        }

        // display size
        this.displayWidth = int(width);
        this.displayHeight = int(height);

        this.displayHalfSize.set(this.displayWidth * 0.5, this.displayHeight * 0.5);
        this.displayCenterPoint.set(this.displayHalfSize.width, this.displayHalfSize.height);

        this.offscreen.displayWidth = this.displayWidth;
        this.offscreen.displayHeight = this.displayHeight;

        this.camera.centerPoint.x = this.screenToVideoX(this.displayCenterPoint.x);
        this.camera.centerPoint.y = this.screenToVideoY(this.displayCenterPoint.y);

        // video crop
        let offset = 0;
        let right = 0;
        let bottom = 0;

        if (this.camera.screenRect.x <= 0) {
            offset = 0 - this.camera.screenRect.x;
            right = this.screenToVideoX(0 + this.camera.screenRect.width - 1 - (offset * 2));
            this.camera.cropRect.x = this.screenToVideoX(0);
            this.camera.cropRect.width = right - this.camera.cropRect.x;
        } else {
            this.camera.cropRect.x = this.screenToVideoX(this.camera.screenRect.x);
            right = this.screenToVideoX(this.camera.screenRect.x + this.camera.screenRect.width - 1);
            this.camera.cropRect.width = right - this.camera.cropRect.x;
        }

        if (this.camera.screenRect.y <= 0) {
            offset = 0 - this.camera.screenRect.y;
            bottom = this.screenToVideoY(0 + this.camera.screenRect.height - 1 - (offset * 2));
            this.camera.cropRect.y = this.screenToVideoY(0);
            this.camera.cropRect.height = bottom - this.camera.cropRect.y;
        } else {
            this.camera.cropRect.y = this.screenToVideoY(this.camera.screenRect.y);
            bottom = this.screenToVideoY(this.camera.screenRect.y + this.camera.screenRect.height - 1);
            this.camera.cropRect.height = bottom - this.camera.cropRect.y;
        }

        this.buttonFullscreenOffsetPoint.x = this.offscreen.displayWidth;
        this.buttonFullscreenOffsetPoint.y = this.offscreen.displayHeight;

        if (this.loadingScreen.isFinished) {
            if (this.loadingScreen.numberOfFiles > 0) {
                this.initImageFileScale(this.gameImageArray[this.buttonEnterFullscreen].width / 16.0);
            } else {
                this.initImageFileScale(1.0);
            }

            this.onWindowResized(isResized); // user defined prototype
            this.textOver.resize();
            this.updateFullscreenButton();

            if (this.video) {
                console.log("image scale.......................: %s", nf(this.imageScale, 1, 3));
                console.log("video crop rect...................: (%d, %d, %d, %d)", this.camera.cropRect.x, this.camera.cropRect.y, this.camera.cropRect.width, this.camera.cropRect.height);
            }
        } else {
            this.initImageFileScale(1.0);
        }
    }

    initImageFileScale(imageFileScale) {
        this.imageFileScale = imageFileScale;
        let displayScale = min(this.offscreen.displayWidth, this.offscreen.displayHeight) / 240.0;
        this.setImageScale(displayScale / this.imageFileScale);
        this.setFontSize(this.scale(24));
        this.setHUDGap(int(this.minimumLimit(this.scale(2), 1)));

        console.log("\ninitImageFileScale(" + imageFileScale + ")");
        console.log("image file scale..................: %f", this.imageFileScale);
        console.log("display scale.....................: %f", displayScale);
        console.log("image scale.......................: %f", this.imageScale);
        console.log("font size.........................: %f", this.fontSize);
        console.log("current target frame rate.........: %f", this.targetFrameRate);
        console.log("current pixel density.............: %f", this.pixelDensity);
    }

    setHUDGap(hudGap) {
        this.hudGap = hudGap;
        this.updateFullscreenButton();
    }

    setImageScale(scale) {
        let lastImageScale = (this.imageScale == 0.0) ? scale : this.imageScale;
        this.imageScale = scale;
        this.buttonScale = this.imageScale;
        this.imageScaleChanged = this.imageScale / lastImageScale;
        this.setHUDGap(int(this.minimumLimit(this.scale(5), 1)));
        this.hudScale = this.imageScale * 0.5;
        this.relativeTouchPoint.x *= this.imageScaleChanged;
        this.relativeTouchPoint.y *= this.imageScaleChanged;
        this.fpsTextSize = int(this.minimumLimit(this.scale(this.fpsScale), this.fpsScale));
    }

    initCanvas() {
        document.body.style.margin = "0px 0px 0px 0px";
        this.setCanvas(windowWidth - this.marginPoint.x, windowHeight - this.marginPoint.y, false);
    }

    initVideo() {
        if (this.camera.isEnabled) {
            let loadingResult = createCapture(VIDEO);

            if (loadingResult && typeof loadingResult.then === "function") {
                loadingResult.then((loadedVideo) => {
                    this.video = loadedVideo;
                    this.isSetVideoSize = false;
                });
            } else {
                this.video = loadingResult;
                this.isSetVideoSize = false;
            }
        } else {
            let sizeBackgroundSize = new GameSize(640, 480);

            if (this.videoBackgroundImageIndex != GameLibrary.NONE) {
                sizeBackgroundSize.width = this.gameImageArray[this.videoBackgroundImageIndex].width;
                sizeBackgroundSize.height = this.gameImageArray[this.videoBackgroundImageIndex].height;
            }

            this.setVideoSize(sizeBackgroundSize.width, sizeBackgroundSize.height);

            if (this.videoBackgroundImageIndex != GameLibrary.NONE) {
                this.camera.setImage(this.gameImageArray[this.videoBackgroundImageIndex].image, 0, 0);
            }
        }
    }


    initFont() {
        if (this.font) {
            textFont(this.font);
        }

        textSize(this.fontSize);
    }

    setup() {
        this.initCanvas();
        this.initVideo();
        this.initFont();
    }

    setVideoSize(videoWidth, videoHeight) {
        this.camera.size.width = videoWidth;
        this.camera.size.height = videoHeight;

        this.camera.halfSize.width = int(this.camera.size.width * 0.5);
        this.camera.halfSize.height = int(this.camera.size.height * 0.5);

        let gcdApectRatio = this.greatestCommonDivisor(this.camera.size.width, this.camera.size.height);
        console.log("\nsetVideoSize(" + videoWidth + ", " + videoHeight + ")");
        console.log("video.............................: %dx%d (%d:%d)", this.camera.size.width, this.camera.size.height, this.camera.size.width / gcdApectRatio, this.camera.size.height / gcdApectRatio);

        this.setCanvas(this.camera.size.width, this.camera.size.height, true);

        this.camera.create();
        this.isReady = true;

        if (!this.splashScreen.start()) {
            this.showButton(GameLibrary.BUTTON_FULLSCREEN, true);
        }

        this.onGameReady(); // user defined prototype
    }

    showButton(i, isVisibled) {
        this.isButtonVisibledArray[i] = isVisibled;

        if (!isVisibled && i == this.selectedButton) {
            this.selectedButton = GameLibrary.NONE;
        }
    }

    toggleFullscreen() {
        this.isInFullscreen = fullscreen(!fullscreen());
        return this.isInFullscreen;
    }

    unchar(ch) {
        return unchar(ch);
    }

    updateFullscreenButton() {
        if (this.isUpdateFullscreenButton && this.buttonEnterFullscreen != GameLibrary.NONE && this.gameImageArray[this.buttonEnterFullscreen] != null) {
            this.buttonRectArray[GameLibrary.BUTTON_FULLSCREEN].width = int(this.gameImageArray[this.buttonEnterFullscreen].width * this.buttonScale);
            this.buttonRectArray[GameLibrary.BUTTON_FULLSCREEN].height = int(this.gameImageArray[this.buttonEnterFullscreen].height * this.buttonScale);
            this.buttonRectArray[GameLibrary.BUTTON_FULLSCREEN].x = this.buttonFullscreenOffsetPoint.x - this.hudGap - this.buttonRectArray[GameLibrary.BUTTON_FULLSCREEN].width;
            this.buttonRectArray[GameLibrary.BUTTON_FULLSCREEN].y = this.buttonFullscreenOffsetPoint.y - this.hudGap - this.buttonRectArray[GameLibrary.BUTTON_FULLSCREEN].height;
            this.buttonOffsetSizeArray[GameLibrary.BUTTON_FULLSCREEN].width = this.buttonRectArray[GameLibrary.BUTTON_FULLSCREEN].width + this.hudGap;
        }
    }

    updateHUDText(i) {
        if (this.hudTextScaleArray[i] != this.hudTextScaleTargetArray[i]) {
            if (this.hudTextScaleTargetArray[i] > 1.0) {
                this.hudTextScaleArray[i] = this.lerp(this.hudTextScaleArray[i], this.hudTextScaleTargetArray[i], 0.8);

                if (this.hudTextScaleArray[i] >= this.hudTextScaleTargetArray[i] - 0.01) {
                    this.hudTextScaleTargetArray[i] = 1.0;
                }
            } else {
                this.hudTextScaleArray[i] = this.lerp(this.hudTextScaleArray[i], this.hudTextScaleTargetArray[i], 0.2);

                if (this.hudTextScaleArray[i] - this.hudTextScaleTargetArray[i] <= 0.001) {
                    this.hudTextScaleArray[i] = this.hudTextScaleTargetArray[i];
                }
            }
        }

        return (this.hudTextScaleArray[i] == this.hudTextScaleTargetArray[i]) ? true : false;
    }

    videoToScreenX(x) {
        return int(this.camera.screenRect.x + (x * this.camera.scale));
    }

    videoToScreenY(y) {
        return int(this.camera.screenRect.y + (y * this.camera.scale));
    }

    windowResized() {
        console.log("\nwindowResized()");

        if (this.camera.size && this.camera.size.width > 0 && this.camera.size.height > 0) {
            this.setCanvas(this.camera.size.width, this.camera.size.height, true);
        } else {
            this.setCanvas(windowWidth, windowHeight, true);
        }

        redraw();
    }
}

////////////////////////////////////////////////////////////
// data types
////////////////////////////////////////////////////////////
class GamePoint {
    constructor(x = 0, y = 0) {
        this.set(x, y);
    }

    set(x, y) {
        this.x = x;
        this.y = y;
    }

    scale(factor, isCastToInt = false) {
        let x = this.x;
        let y = this.y;

        if (typeof factor === "number") {
            x *= factor;
            y *= factor;
        }

        return new GamePoint(isCastToInt ? int(x) : x, isCastToInt ? int(y) : y);
    }

    mult(value, isCastToInt = false) {
        let x = this.x;
        let y = this.y;

        if (value instanceof GamePoint) {
            x *= value.x;
            y *= value.y;
        } else if (value instanceof GameSize || value instanceof p5.Graphics || value instanceof p5.Image) {
            x *= value.width;
            y *= value.height;
        } else if (typeof value === "number") {
            x *= value;
            y *= value;
        }

        return new GamePoint(isCastToInt ? int(x) : x, isCastToInt ? int(y) : y);
    }

    div(value, isCastToInt = false) {
        let x = this.x;
        let y = this.y;

        if (value instanceof GamePoint) {
            x = (value.x == 0) ? x : x / value.x;
            y = (value.y == 0) ? y : y / value.y;
        } else if (value instanceof GameSize || value instanceof p5.Graphics || value instanceof p5.Image) {
            x = (value.width == 0) ? x : x / value.width;
            y = (value.height == 0) ? y : y / value.height;
        } else if (typeof value === "number") {
            x = (value == 0) ? x : x / value;
            y = (value == 0) ? y : y / value;
        }

        return new GamePoint(isCastToInt ? int(x) : x, isCastToInt ? int(y) : y);
    }

    add(value, isCastToInt = false) {
        let x = this.x;
        let y = this.y;

        if (value instanceof GamePoint) {
            x += value.x;
            y += value.y;
        } else if (value instanceof GameSize || value instanceof p5.Graphics || value instanceof p5.Image) {
            x += value.width;
            y += value.height;
        } else if (typeof value === "number") {
            x += value;
            y += value;
        }

        return new GamePoint(isCastToInt ? int(x) : x, isCastToInt ? int(y) : y);
    }

    sub(value, isCastToInt = false) {
        let x = this.x;
        let y = this.y;

        if (value instanceof GamePoint) {
            x -= value.x;
            y -= value.y;
        } else if (value instanceof GameSize || value instanceof p5.Graphics || value instanceof p5.Image) {
            x -= value.width;
            y -= value.height;
        } else if (typeof value === "number") {
            x -= value;
            y -= value;
        }

        return new GamePoint(isCastToInt ? int(x) : x, isCastToInt ? int(y) : y);
    }
}

class GameRect {
    constructor(x = 0, y = 0, width = 0, height = 0) {
        this.set(x, y, width, height);
    }

    set(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}

class GameRect2 {
    constructor(left = 0, top = 0, right = 0, bottom = 0) {
        this.set(left, top, right, bottom);
    }

    set(left, top, right, bottom) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }
}

class GameSize {
    constructor(width = 0, height = 0) {
        this.set(width, height);
    }

    set(width, height) {
        this.width = width;
        this.height = height;
    }

    scale(factor, isCastToInt = false) {
        let w = this.width;
        let h = this.height;

        if (typeof factor === "number") {
            w *= factor;
            h *= factor;
        }

        return new GameSize(isCastToInt ? int(w) : w, isCastToInt ? int(h) : h);
    }

    mult(value, isCastToInt = false) {
        let w = this.width;
        let h = this.height;

        if (value instanceof GamePoint) {
            w *= value.x;
            h *= value.y;
        } else if (value instanceof GameSize || value instanceof p5.Graphics || value instanceof p5.Image) {
            w *= value.width;
            h *= value.height;
        } else if (typeof value === "number") {
            w *= value;
            h *= value;
        }

        return new GameSize(isCastToInt ? int(w) : w, isCastToInt ? int(h) : h);
    }

    div(value, isCastToInt = false) {
        let w = this.width;
        let h = this.height;

        if (value instanceof GamePoint) {
            w = (value.x == 0) ? w : w / value.x;
            h = (value.y == 0) ? h : h / value.y;
        } else if (value instanceof GameSize || value instanceof p5.Graphics || value instanceof p5.Image) {
            w = (value.width == 0) ? w : w / value.width;
            h = (value.height == 0) ? h : h / value.height;
        } else if (typeof value === "number") {
            w = (value == 0) ? w : w / value;
            h = (value == 0) ? h : h / value;
        }

        return new GameSize(isCastToInt ? int(w) : w, isCastToInt ? int(h) : h);
    }

    add(value, isCastToInt = false) {
        let w = this.width;
        let h = this.height;

        if (value instanceof GamePoint) {
            w += value.x;
            h += value.y;
        } else if (value instanceof GameSize || value instanceof p5.Graphics || value instanceof p5.Image) {
            w += value.width;
            h += value.height;
        } else if (typeof value === "number") {
            w += value;
            h += value;
        }

        return new GameSize(isCastToInt ? int(w) : w, isCastToInt ? int(h) : h);
    }

    sub(value, isCastToInt = false) {
        let w = this.width;
        let h = this.height;

        if (value instanceof GamePoint) {
            w -= value.x;
            h -= value.y;
        } else if (value instanceof GameSize || value instanceof p5.Graphics || value instanceof p5.Image) {
            w -= value.width;
            h -= value.height;
        } else if (typeof value === "number") {
            w -= value;
            h -= value;
        }

        return new GameSize(isCastToInt ? int(w) : w, isCastToInt ? int(h) : h);
    }
}

class GamePointerToFloat {
    constructor(value = 0.0) {
        this.set(value);
    }

    set(value) {
        this.value = value;
    }
}

////////////////////////////////////////////////////////////
// boing animation (เอฟเฟกต์การเด้งแบบ spring)
////////////////////////////////////////////////////////////
class GameBoingAnimation {
    static get SPRING()               {return 0.15;}
    static get FRICTION()             {return 0.25;}
    static get CLOSING_DURATON()      {return 300;}
    static get SCALE_BEFORE_CLOSING() {return 1.2;}

    constructor(spring = GameBoingAnimation.SPRING, friction = GameBoingAnimation.FRICTION, closingDuration = GameBoingAnimation.CLOSING_DURATON, scaleBeforeClosing = GameBoingAnimation.SCALE_BEFORE_CLOSING) {
        this.setSpring(spring);
        this.setFriction(friction);
        this.setClosingDuration(closingDuration);
        this.setScaleBeforeClosing(scaleBeforeClosing);

        this.reset();
    }

    setSpring(spring) {
        this.spring = constrain(spring, 0.0, 1.0); // ยิ่งมากยิ่งเด้ง (0.0 ถึง 1.0)
    }

    setFriction(friction) {
        this.friction = constrain(friction, 0.0, 1.0); // ยิ่งมากยิ่งหยุดเด้งเร็ว (0.0 ถึง 1.0)
    }

    setClosingDuration(closingDuration) {
        this.closingDuration = closingDuration; // ช่วงเวลาที่ใช้ในการปิด (มิลิวินาที)
    }

    setScaleBeforeClosing(scaleBeforeClosing) {
        this.scaleBeforeClosing = (scaleBeforeClosing > 1.0) ? scaleBeforeClosing : 1.0;
    }

    reset(scale = 0.0) {
        this.isOpening = false;
        this.isOpen = false;

        this.isClosing = false;
        this.isClosed = true;
        this.isScaleBeforeClosing = false;

        this.scale = scale;
        this.latestScale = this.scale;
        this.closeFromScale = this.scale;
        this.targetScale = 1.0;
        this.duration = this.closingDuration * this.scale;
        this.velocity = 0.0; // ความเร็วในการขยาย ขึ้นอยู่กับค่า spring และ friction
        this.startMilliseconds = millis();
    }

    update() {
        if (this.isOpening || (this.isClosing && this.isScaleBeforeClosing)) {
            let scaledDeltaTime = deltaTime * 0.06; // ต้องปรับ delta time หรือเวลาที่ใช้ไปจากเฟรมที่แล้วถึงเฟรมปัจจุบันให้อยู่ในสเกล 60 เฟรม / 1000 มิลลิวินาที เพราะ frame rate สูงสุดของ p5.js คือ 60 fps
            let force = (this.targetScale - this.scale) * this.spring;
            this.velocity += force * scaledDeltaTime; // เพิ่มความเร็วตามแรงสปริงที่ถูกปรับ delta time แล้ว
            this.velocity *= pow(1.0 - this.friction, scaledDeltaTime); // ปรับแรงเสียดทานด้วย pow เพื่อให้เสถียรในทุก fps
            this.latestScale = this.scale;
            this.scale += this.velocity * scaledDeltaTime; // เพิ่มขนาดตามความเร็วที่ถูกปรับ delta time แล้ว

            if (this.isClosing) {
                if (this.targetScale >= 1.0 && this.scale >= this.scaleBeforeClosing - 0.01) {
                    this.targetScale = 0.0;
                    this.velocity = 0.0;
                } else if (this.targetScale == 0.0 && this.scale <= 1.0) {
                    this.reset(this.scale);
                    this.isClosing = true;
                    this.isClosed = false;
                }
            } else if (abs(this.scale - this.latestScale) <= 0.00001) {
                this.reset(1.0);
                this.isClosed = false;
                this.isOpen = true;
            }
        } else if (this.isClosing) {
            let t = min(1, (millis() - this.startMilliseconds) / this.duration);
            t = (2 * t) - (t * t);
            this.scale = this.closeFromScale * (1.0 - t);

            if (this.scale <= 0.0) {
                this.reset();
            }
        }
    }

    open(isOpening = true) {
        if ((isOpening && (!this.isOpening || !this.isOpen)) || (!isOpening && (!this.isClosing || !this.isClosed))) {
            this.isOpening = isOpening;
            this.isOpen = false;

            this.isClosing = !isOpening;
            this.isClosed = false;
            this.isScaleBeforeClosing = this.isClosing;

            this.velocity = 0.0;

            if (this.isClosing) {
                if (this.scaleBeforeClosing > 1.0) {
                    this.targetScale = this.scaleBeforeClosing;
                } else {
                    this.reset(this.scale);
                    this.isClosing = true;
                    this.isClosed = false;
                }
            } else {
                this.targetScale = 1.0;
            }
        }
    }

    close() {
        this.open(false);
    }

    toggle() {
        this.open(this.isClosing || this.isClosed);
    }
}

////////////////////////////////////////////////////////////
// splash screen
////////////////////////////////////////////////////////////
class GameSplashScreen {
    static get FIT_MODE_FIT()     {return 0;}
    static get FIT_MODE_FILL()    {return 1;}
    static get FIT_MODE_STRETCH() {return 2;}

    constructor(parent) {
        this.parent = parent;

        this.imageIndexArray = [];
        this.fitModeArray = [];

        this.isVisibled = false;
        this.fadeDirection = 0.0;
        this.currentDuration = 0.0;
        this.currentCooldown = 0.0;
        this.alpha = 0.0;
        this.isForceExit = false;

        this.enableForceExit(false);
        this.setCooldown(250.0);
        this.setFadeSpeed(1000.0);
        this.setDuration(2000.0);
        this.setBackgroundColor(color(0, 0, 0));
        this.setFadeToColor(color(0, 0, 0));
    }

    add(imageIndex, fitMode = GameSplashScreen.FIT_MODE_FIT) {
        this.imageIndexArray.push(imageIndex);
        this.fitModeArray.push(fitMode);
    }

    enableForceExit(isEnabled) {
        this.isForceExitEnabled = isEnabled;
    }

    setCooldown(cooldown) {
        this.cooldown = cooldown;
    }

    setFadeSpeed(fadeSpeed) {
        this.fadeSpeed = fadeSpeed;
    }

    setDuration(duration) {
        this.duration = duration;
    }

    setBackgroundColor(rgb) {
        this.backgroundColor = rgb;
    }

    setFadeToColor(rgb) {
        this.fadeToColor = rgb;
        this.fadeToRed = 0;
        this.fadeToGreen = 0;
        this.fadeToBlue = 0;

        if (this.fadeToColor != null) {
            this.fadeToRed = red(this.fadeToColor);
            this.fadeToGreen = green(this.fadeToColor);
            this.fadeToBlue = blue(this.fadeToColor);
        }

        this.isFadeToColor = (this.fadeToColor == null) ? false : true;
    }

    exit() {
        if (this.isVisibled) {
            if (this.currentDuration > 0.0 || this.isFadeIn()) {
                this.fadeOut();
            }

            if (this.isForceExitEnabled) {
                this.isForceExit = true;
            }
        }
    }

    remove() {
        if (this.isForceExit) {
            this.imageIndexArray = [];
            this.fitModeArray = [];
        } else {
            this.imageIndexArray.splice(0, 1);
            this.fitModeArray.splice(0, 1);
        }
    }

    fade(fadeDirection) {
        this.fadeDirection = fadeDirection;
        this.currentDuration = 0.0;
        this.currentCooldown = 0.0;
    }

    fadeIn() {
        this.fade(1.0);
    }

    fadeOut() {
        this.fade(-1.0);
    }

    isFadeIn() {
        return this.fadeDirection > 0.0;
    }

    isFadeOut() {
        return this.fadeDirection < 0.0;
    }

    isFinished() {
        return !this.isVisibled && !this.isFadeToColor;
    }

    start() {
        if (this.imageIndexArray.length > 0) {
            this.isVisibled = true;
            this.currentCooldown = this.cooldown;
            return true;
        } else {
            this.isFadeToColor = false;
            return false;
        }
    }

    update() {
        if (!this.isFinished()) {
            if (this.currentCooldown > 0) {
                this.currentCooldown -= this.parent.getDeltaTime();

                if (this.currentCooldown <= 0.0) {
                    this.fadeIn();
                }
            } else if (this.currentDuration > 0.0) {
                this.currentDuration -= this.parent.getDeltaTime();

                if (this.currentDuration <= 0.0) {
                    this.fadeOut();
                }
            } else {
                this.alpha += (255.0 / this.fadeSpeed) * this.parent.getDeltaTime() * this.fadeDirection;

                if ((this.isFadeIn() && this.alpha >= 255.0) || (this.isFadeOut() && this.alpha <= 0.0)) {
                    if (this.isFadeIn()) {
                        this.alpha = 255.0;

                        if (!this.isVisibled && this.isFadeToColor) {
                            this.isFadeToColor = false;
                            this.parent.showButton(GameLibrary.BUTTON_FULLSCREEN, true);
                        } else {
                            this.currentDuration = this.duration;
                        }
                    } else if (this.isFadeOut()) {
                        this.alpha = 0.0;
                        this.remove();

                        if (this.imageIndexArray.length == 0) {
                            this.isVisibled = false;

                            if (!this.isFadeToColor && this.backgroundColor != null) {
                                this.fadeToRed = red(this.backgroundColor);
                                this.fadeToGreen = green(this.backgroundColor);
                                this.fadeToBlue = blue(this.backgroundColor);

                                this.isFadeToColor = true;
                            }

                            if (this.isFadeToColor) {
                                if (this.cooldown > 0.0) {
                                    this.currentCooldown = this.cooldown;
                                } else {
                                    this.fadeIn();
                                }
                            } else {
                                this.parent.showButton(GameLibrary.BUTTON_FULLSCREEN, true);
                            }
                        } else if (this.cooldown > 0.0) {
                            this.currentCooldown = this.cooldown;
                        } else {
                            this.fadeIn();
                        }
                    }
                }
            }
        }
    }

    render() {
        push();

        if (this.isVisibled) {
            if (this.backgroundColor != null) {
                background(this.backgroundColor);
            }

            if (this.isFadeToColor) {
                tint(255, 255, 255, this.alpha);
            }

            imageMode(CENTER);

            switch (this.fitModeArray[0]) {
                case GameSplashScreen.FIT_MODE_FIT:
                    image(this.parent.gameImageArray[this.imageIndexArray[0]].image, this.parent.displayCenterPoint.x, this.parent.displayCenterPoint.y, this.parent.displayWidth, this.parent.displayHeight, 0, 0, this.parent.gameImageArray[this.imageIndexArray[0]].width, this.parent.gameImageArray[this.imageIndexArray[0]].height, CONTAIN);
                    break;

                case GameSplashScreen.FIT_MODE_FILL:
                    image(this.parent.gameImageArray[this.imageIndexArray[0]].image, this.parent.displayCenterPoint.x, this.parent.displayCenterPoint.y, this.parent.displayWidth, this.parent.displayHeight, 0, 0, this.parent.gameImageArray[this.imageIndexArray[0]].width, this.parent.gameImageArray[this.imageIndexArray[0]].height, COVER);
                    break;

                case GameSplashScreen.FIT_MODE_STRETCH:
                    image(this.parent.gameImageArray[this.imageIndexArray[0]].image, this.parent.displayCenterPoint.x, this.parent.displayCenterPoint.y, this.parent.displayWidth, this.parent.displayHeight, 0, 0, this.parent.gameImageArray[this.imageIndexArray[0]].width, this.parent.gameImageArray[this.imageIndexArray[0]].height);
                    break;
            }

            noTint();
        }

        if (this.isFadeToColor) {
            fill(this.fadeToRed, this.fadeToGreen, this.fadeToBlue, 255.0 - this.alpha);
            rect(0, 0, this.parent.displayWidth, this.parent.displayHeight);
        }

        pop();
    }
}

////////////////////////////////////////////////////////////
// camera
////////////////////////////////////////////////////////////
class GameCamera {
    constructor(parent) {
        this.parent = parent;
        this.graphics = null;
        this.cropRect = new GameRect();
        this.screenRect = new GameRect();
        this.size = new GameSize();
        this.halfSize = new GameSize();
        this.centerPoint = new GamePoint();
        this.scale = 1.0;
        this.isEnabled = true;
    }

    create() {
        this.graphics = createGraphics(this.size.width, this.size.height);
        this.graphics.pixelDensity(1);
    }

    getImage() {
        return this.graphics.get();
    }

    render() {
        this.parent.offscreen.renderImage(this.screenRect.x, this.screenRect.y, this.screenRect.width, this.screenRect.height, 0xff, null, null, this.getImage());
    }

    setImage(p5Image, x, y) {
        this.graphics.push();
        this.graphics.image(p5Image, x, y);
        this.graphics.pop();
    }

    update() {
        this.graphics.push();
        this.graphics.scale(-1, 1);
        this.graphics.translate(0 - this.size.width, 0);
        this.graphics.image(this.parent.video, 0, 0);
        this.graphics.pop();
    }
}

////////////////////////////////////////////////////////////
// offscreen
////////////////////////////////////////////////////////////
class GameOffscreen {
    constructor(parent) {
        this.parent = parent;

        this.colorKey = "#ff00ff";

        this.displayWidth = 0;
        this.displayHeight = 0;

        this.translateX = 0;
        this.translateY = 0;
        this.tintRed = 255;
        this.tintGreen = 255;
        this.tintBlue = 255;
        this.isTintEnabled = false;
        this.fontOffset = -0.1115;
        this.buffer = null;
    }

    background(rgb) {
        if (this.buffer) {
            this.buffer.background(rgb);
        } else {
            background(rgb);
        }
    }

    clear(rgb = null) {
        if (rgb == null) {
            if (this.buffer) {
                this.buffer.clear();
            } else {
                clear();
            }
        } else {
            this.background(rgb);
        }
    }

    copyImage(x, y, width, height, dstGraphics, dstAlphaChannel, dstWidth, dstHeight, srcGraphics, srcAlphaChannel, srcX, srcY, srcWidth, srcHeight) {
        dstGraphics.image(srcGraphics.get(srcX, srcY, width, height), x, y);
    }

    renderChar(x, y, c, rgb, alpha) {
        if (alpha > 0) {
            let r = this.parent.getRed(rgb);
            let g = this.parent.getGreen(rgb);
            let b = this.parent.getBlue(rgb);
            let fontSize = this.parent.getFontHeight();

            if (this.buffer) {
                this.buffer.push();
                this.buffer.textSize(fontSize);
                this.buffer.textAlign(LEFT, TOP);
                this.buffer.fill(r, g, b, alpha);
                this.buffer.text(c, x, y + (fontSize * this.fontOffset));
                this.buffer.pop();
            } else {
                push();
                textSize(fontSize);
                textAlign(LEFT, TOP);
                fill(r, g, b, alpha);
                text(c, x, y + (fontSize * this.fontOffset));
                pop();
            }
        }
    }

    renderCircle(x, y, radius, rgb, alpha, isSolidFill) {
        if (alpha > 0) {
            let r = this.parent.getRed(rgb);
            let g = this.parent.getGreen(rgb);
            let b = this.parent.getBlue(rgb);

            if (this.buffer) {
                this.buffer.push();
                this.buffer.strokeWeight(1);
                this.buffer.stroke(r, g, b, alpha);

                if (isSolidFill) {
                    this.buffer.fill(r, g, b, alpha);
                } else {
                    this.buffer.noFill();
                }

                this.buffer.circle(x, y, radius * 2);
                this.buffer.pop();
            } else {
                push();
                strokeWeight(1);
                stroke(r, g, b, alpha);

                if (isSolidFill) {
                    fill(r, g, b, alpha);
                } else {
                    noFill();
                }
            
                circle(x, y, radius * 2);
                pop();
            }
        }
    }

    renderEllipse(x, y, w, h, rgb, alpha, isSolidFill) {
        if (alpha > 0) {
            let r = this.parent.getRed(rgb);
            let g = this.parent.getGreen(rgb);
            let b = this.parent.getBlue(rgb);

            if (this.buffer) {
                this.buffer.push();
                this.buffer.strokeWeight(1);
                this.buffer.stroke(r, g, b, alpha);

                if (isSolidFill) {
                    this.buffer.fill(r, g, b, alpha);
                } else {
                    this.buffer.noFill();
                }

                this.buffer.ellipse(x, y, w, h);
                this.buffer.pop();
            } else {
                push();
                strokeWeight(1);
                stroke(r, g, b, alpha);

                if (isSolidFill) {
                    fill(r, g, b, alpha);
                } else {
                    noFill();
                }
            
                ellipse(x, y, w, h);
                pop();
            }
        }
    }

    renderImage(x, y, width, height, alpha, alphaChannel, colorKey, p5Image) {
        if (alpha > 0) {
            if (alpha < 255 || this.isTintEnabled) {
                if (this.buffer) {
                    this.buffer.tint(this.tintRed, this.tintGreen, this.tintBlue, alpha);
                    this.buffer.image(p5Image, x, y, width, height);
                    this.buffer.noTint();
                } else {
                    tint(this.tintRed, this.tintGreen, this.tintBlue, alpha);
                    image(p5Image, x, y, width, height);
                    noTint();
                }
            } else {
                if (this.buffer) {
                    this.buffer.image(p5Image, x, y, width, height);
                } else {
                    image(p5Image, x, y, width, height);
                }
            }
        }
    }

    renderLine(x1, y1, x2, y2, rgb, alpha) {
        if (alpha > 0) {
            let r = this.parent.getRed(rgb);
            let g = this.parent.getGreen(rgb);
            let b = this.parent.getBlue(rgb);

            if (this.buffer) {
                this.buffer.push();
                this.buffer.strokeWeight(1);
                this.buffer.stroke(r, g, b, alpha);
                this.buffer.strokeCap(SQUARE);
                this.buffer.line(x1, y1, x2, y2);
                this.buffer.pop();
            } else {
                push();
                strokeWeight(1);
                stroke(r, g, b, alpha);
                strokeCap(SQUARE);
                line(x1, y1, x2, y2);
                pop();
            }
        }
    }

    renderPoint(x, y, rgb, alpha) {
        if (alpha > 0) {
            let i = (y * width + x) * 4;

            if (this.buffer) {
                i *= this.buffer.pixelDensity();
                this.buffer.loadPixels();
                this.buffer.pixels[i + 0] = this.parent.getRed(rgb);
                this.buffer.pixels[i + 1] = this.parent.getGreen(rgb);
                this.buffer.pixels[i + 2] = this.parent.getBlue(rgb);
                this.buffer.pixels[i + 3] = alpha;
                this.buffer.updatePixels();
            } else {
                i *= pixelDensity();
                loadPixels();
                pixels[i + 0] = this.parent.getRed(rgb);
                pixels[i + 1] = this.parent.getGreen(rgb);
                pixels[i + 2] = this.parent.getBlue(rgb);
                pixels[i + 3] = alpha;
                updatePixels();
            }
        }
    }

    renderRectangle(x1, y1, x2, y2, rgb, alpha, width, isSolidFill) {
        if (alpha > 0) {
            let r = this.parent.getRed(rgb);
            let g = this.parent.getGreen(rgb);
            let b = this.parent.getBlue(rgb);
            let w = x2 - x1 + 1;
            let h = y2 - y1 + 1;

            if (this.buffer) {
                this.buffer.push();
                this.buffer.strokeWeight(1);
                this.buffer.stroke(r, g, b, alpha);
                this.buffer.strokeCap(SQUARE);
                this.buffer.noFill();

                for (let i = 0; i < width; i++) {
                    if (i == width - 1 && isSolidFill) {
                        this.buffer.fill(r, g, b, alpha);
                    }

                    this.buffer.rect(x1, y1, w, h);

                    x1++;
                    y1++;
                    w -= 2;
                    h -= 2;
                }
                this.buffer.pop();
            } else {
                push();
                strokeWeight(1);
                stroke(r, g, b, alpha);
                strokeCap(SQUARE);
                noFill();

                for (let i = 0; i < width; i++) {
                    if (i == width - 1 && isSolidFill) {
                        fill(r, g, b, alpha);
                    }
                
                    rect(x1, y1, w, h);
                
                    x1++;
                    y1++;
                    w -= 2;
                    h -= 2;
                }
                pop();
            }
        }
    }

    renderScaleImage(x, y, width, height, alpha, alphaChannel, colorKey, p5Image, srcX, srcY, srcWidth, srcHeight, p5ImageWidth, p5ImageHeight) {
        if (alpha > 0) {
            let spriteImage = p5Image.get(srcX, srcY, srcWidth, srcHeight);

            if (alpha < 255 || this.isTintEnabled) {
                if (this.buffer) {
                    this.buffer.tint(this.tintRed, this.tintGreen, this.tintBlue, alpha);
                    this.buffer.image(spriteImage, x, y, width, height);
                    this.buffer.noTint();
                } else {
                    tint(this.tintRed, this.tintGreen, this.tintBlue, alpha);
                    image(spriteImage, x, y, width, height);
                    noTint();
                }
            } else {
                if (this.buffer) {
                    this.buffer.image(spriteImage, x, y, width, height);
                } else {
                    image(spriteImage, x, y, width, height);
                }
            }
        }
    }

    renderSprite(x, y, width, height, alpha, alphaChannel, colorKey, p5Image, srcX, srcY, srcWidth, srcHeight, p5ImageWidth = 0, p5ImageHeight = 0) {
        if (alpha > 0) {
            if (p5ImageWidth == 0 || p5ImageHeight == 0) {
                p5ImageWidth = srcWidth;
                p5ImageHeight = srcHeight;
                srcWidth = width;
                srcHeight = height;
            }

            this.renderScaleImage(x, y, width, height, alpha, alphaChannel, colorKey, p5Image, srcX, srcY, srcWidth, srcHeight, p5ImageWidth, p5ImageHeight);
        }
    }

    renderString(x, y, str, rgb, alpha) {
        if (alpha > 0) {
            let r = this.parent.getRed(rgb);
            let g = this.parent.getGreen(rgb);
            let b = this.parent.getBlue(rgb);
            let fontSize = this.parent.getFontHeight();

            if (this.buffer) {
                this.buffer.push();
                this.buffer.textSize(fontSize);
                this.buffer.textAlign(LEFT, TOP);
                this.buffer.fill(r, g, b, alpha);
                this.buffer.text(str, x, y + (fontSize * this.fontOffset));
                this.buffer.pop();
            } else {
                push();
                textSize(fontSize);
                textAlign(LEFT, TOP);
                fill(r, g, b, alpha);
                text(str, x, y + (fontSize * this.fontOffset));
                pop();
            }
        }
    }

    getImage() {
        if (this.buffer) {
            return this.buffer.get();
        } else {
            return get();
        }
    }

    getPixelColor(x, y) {
        if (this.buffer) {
            return this.parent.getPixelColor(x, y, this.buffer.get(), this.buffer.width, this.buffer.height);
        } else {
            return this.parent.getPixelColor(x, y, get(), this.displayWidth, this.displayWidth);
        }
    }

    getTranslateX() {
        return this.translateX;
    }

    getTranslateY() {
        return this.translateY;
    }

    noSmooth() {
        if (this.buffer) {
            this.buffer.noSmooth();
        } else {
            noSmooth();
        }
    }

    noTint() {
        if (this.isTintEnabled) {
            if (this.buffer) {
                this.buffer.noTint();
            } else {
                noTint();
            }

            this.tintRed = 255;
            this.tintGreen = 255;
            this.tintBlue = 255;
            this.isTintEnabled = false;
        }
    }

    pop() {
        if (this.buffer) {
            this.buffer.pop();
        } else {
            pop();
        }

        this.translateX = 0;
        this.translateY = 0;
    }

    present() {
    }

    push() {
        if (this.buffer) {
            this.buffer.push();
        } else {
            push();
        }
    }

    setBuffer(buffer, width, height) {
        if (buffer) {
            this.buffer = buffer;
        } else {
            this.setDefaultBuffer();
        }
    }

    setDefaultBuffer() {
        this.buffer = null;
    }

    smooth() {
        if (this.buffer) {
            this.buffer.smooth();
        } else {
            smooth();
        }
    }

    tint(rOrColor, g = GameLibrary.NONE, b = GameLibrary.NONE) {
        if (g == GameLibrary.NONE || b == GameLibrary.NONE) {
            this.tintRed = red(rOrColor);
            this.tintGreen = green(rOrColor);
            this.tintBlue = blue(rOrColor);
        } else {
            this.tintRed = rOrColor;
            this.tintGreen = g;
            this.tintBlue = b;
        }

        this.isTintEnabled = (this.tintRed < 255 || this.tintGreen < 255 || this.tintBlue < 255) ? true : false;

        if (this.isTintEnabled) {
            if (this.buffer) {
                this.buffer.tint(this.tintRed, this.tintGreen, this.tintBlue);
            } else {
                tint(this.tintRed, this.tintGreen, this.tintBlue);
            }
        }
    }

    translate(x, y) {
        this.translateX = x;
        this.translateY = y;

        if (this.buffer) {
            this.buffer.translate(x, y);
        } else {
            translate(x, y);
        }
    }
}

////////////////////////////////////////////////////////////
// image
////////////////////////////////////////////////////////////
class GameImage {
    constructor(p5Image, w, h, alphaChannel, colorKey) {
        this.image = p5Image;
        this.width = w;
        this.height = h;
        this.alphaChannel = alphaChannel;
        this.colorKey = colorKey;
        this.graphics = null;
    }

    render(x, y, width, height, srcX, srcY, srcWidth, srcHeight, alpha) {
        if (alpha > 0 && gameLibrary) {
            gameLibrary.offscreen.renderScaleImage(x, y, width, height, alpha, this.alphaChannel, this.colorKey, this.image, srcX, srcY, srcWidth, srcHeight, this.width, this.height);
        }
    }

    getAlpha(x, y) {
        this.image.loadPixels();
        let i = (y * this.width + x) * this.image.pixelDensity() * 4;
        return this.image.pixels[i + 3];
    }
}

////////////////////////////////////////////////////////////
// vector
////////////////////////////////////////////////////////////
class GameVector {
    constructor() {
        this.zeroVector = this.create();
    }

    add(v0, v1) {
        return p5.Vector.add(v0, v1);
    }

    angle(v0, v1) {
        return v0.angleBetween(v1);
    }

    create(x = 0, y = 0, z = 0) {
        return createVector(x, y, z);
    }

    cross(v0, v1) {
        return p5.Vector.cross(v0, v1);
    }

    dist(v0, v1) {
        return p5.Vector.dist(v0, v1);
    }

    div(v0, v1) {
        if (v1.z == 0) {
            v1.z = 1;
        }

        return p5.Vector.div(v0, v1);
    }

    dot(v0, v1) {
        return p5.Vector.dot(v0, v1);
    }

    length(v) {
        return v.mag();
    }

    lerp(v0, v1, amount) {
        return p5.Vector.lerp(v0, v1, amount);
    }

    mult(v0, v1) {
        return p5.Vector.mult(v0, v1);
    }

    negate(v) {
        return p5.Vector.mult(v, -1);
    }

    normalize(v) {
        return p5.Vector.normalize(v);
    }

    offset(v, x = 0, y = 0, z = 0) {
        return createVector(v.x + x, v.y + y, v.z + z);
    }

    rotate(v, angleInRadians) {
        return p5.Vector.rotate(v, angleInRadians)
    }

    scale(v, value) {
        return p5.Vector.mult(v, value);
    }

    sub(v0, v1) {
        return p5.Vector.sub(v0, v1);
    }

    zero() {
        return this.zeroVector;
    }
}

////////////////////////////////////////////////////////////
// loading screen
////////////////////////////////////////////////////////////
class GameLoadingScreen {
    constructor() {
        this.isStarted = false;
        this.isFinished = false;
        this.isFadeOut = false;
        this.fadeOutAlpha = 0.0;

        this.numberOfFiles = 0;
        this.fileIndex = 0;
        this.filename = "";

        this.backgroundImageIndex = GameLibrary.NONE;
        this.preloadImageIndexArray = [];
        this.preloadIndex = 0;

        this.barRect = new GameRect();
        this.progressRect = new GameRect();
        this.percent = 0.0;
    }

    setBackgroundImage(imageIndex) {
        this.backgroundImageIndex = imageIndex;
        this.addImage(imageIndex);
    }

    addImage(imageIndex) {
        if (!this.preloadImageIndexArray.includes(imageIndex)) {
            this.preloadImageIndexArray.push(imageIndex);
        }
    }

    update() {
        if (this.numberOfFiles > 0) {
            this.percent = lerp(this.percent, this.fileIndex / this.numberOfFiles * 100.0, 0.1);

            if (100.0 - this.percent < 0.1) {
                this.percent = 100.0;
            }

            this.barRect.width = min(gameLibrary.displayWidth, gameLibrary.displayHeight) * 0.6;
            this.barRect.height = this.barRect.width * 0.04;
            this.barRect.x = gameLibrary.displayCenterPoint.x - (this.barRect.width * 0.5);
            this.barRect.y = gameLibrary.displayCenterPoint.y - (this.barRect.height * 0.5);

            let borderSize = constrain(int(this.barRect.height * 0.2), 1, this.barRect.height);
            let borderDoubleSize = borderSize * 2;

            this.progressRect.x = this.barRect.x + borderSize;
            this.progressRect.y = this.barRect.y + borderSize;
            this.progressRect.width = this.barRect.width - borderDoubleSize;
            this.progressRect.height = this.barRect.height - borderDoubleSize;
        } else {
            this.percent = 100.0;
            this.isFadeOut = true;
            this.fadeOutAlpha = 255.0;
        }
    }

    render() {
        if (this.numberOfFiles > 0) {
            push();

            // background
            if (this.backgroundImageIndex != GameLibrary.NONE && gameLibrary.gameImageArray[this.backgroundImageIndex] != null) {
                imageMode(CENTER);
                image(gameLibrary.gameImageArray[this.backgroundImageIndex].image, gameLibrary.displayCenterPoint.x, gameLibrary.displayCenterPoint.y, gameLibrary.displayWidth, gameLibrary.displayHeight, 0, 0, gameLibrary.gameImageArray[this.backgroundImageIndex].width, gameLibrary.gameImageArray[this.backgroundImageIndex].height, COVER);
            }

            let x = this.barRect.x + (this.barRect.width * 0.5);
            let y = this.barRect.y + (this.barRect.height * 0.5);
            let barColor = color(0, 0, 0, 128);
            let progressColor = color(255, 255, 255, 192);

            // bar
            stroke(barColor);
            strokeWeight(this.barRect.height);
            line(this.barRect.x, y, this.barRect.x + this.barRect.width, y);

            // progress
            stroke(progressColor);
            strokeWeight(this.progressRect.height);
            line(this.barRect.x, y, this.barRect.x + int(this.barRect.width * this.percent / 100.0), y);

            // percent
            stroke(barColor);
            textSize(this.barRect.height * 1.5);
            strokeWeight(textSize() * 0.2);
            fill(progressColor);
            textAlign(CENTER, CENTER);
            drawingContext.miterLimit = 2;
            text(str(int(this.percent)) + "%", x, y + int((this.barRect.height * 0.8) + (textSize() * 0.5)));

            pop();
        }
    }
}

////////////////////////////////////////////////////////////
// animation
////////////////////////////////////////////////////////////
class GameAnimation {
    constructor() {
        this.framesImage = null;
        this.frameSize = new GameSize();
        this.numberOfFramesInRow = 0;
        this.numberOfFramesInColumn = 0;
        this.frameSpeed = 0.0;

        this.numberOfFrames = 0;
        this.startFrame = 0;
        this.lastFrame = 0;
        this.isLooped = false;
        this.isInverted = false;

        this.isAnimated = false;
        this.frame = 0.0;
        this.frameInteger = 0;
        this.frameTime = 0.0;
        this.isUpdateFrameImage = false;
        this.frameImage = null;
        this.frameAlphaChannel = null;
        this.isFrameImageUpdated = false;

        this.frameSoundIndexArray = [];
    }

    getFrame() {
        return this.frameInteger;
    }

    getFrameAlpha(x, y) {
        this.frameImage.loadPixels();
        let i = (y * this.frameImage.width + x) * this.frameImage.pixelDensity() * 4;
        return this.frameImage.pixels[i + 3];
    }

    getFrameAlphaChannel() {
        return this.frameAlphaChannel;
    }

    getFrameImage() {
        return this.frameImage;
    }

    getFrameSize() {
        return this.frameSize;
    }

    getLastFrame() {
        return this.lastFrame;
    }

    getNumberOfFrameInColumn() {
        return this.numberOfFramesInColumn;
    }

    getNumberOfFrameInRow() {
        return this.numberOfFramesInRow;
    }

    getNumberOfFrames() {
        return this.numberOfFrames;
    }

    getSpeed() {
        return this.frameSpeed;
    }

    getStartFrame() {
        return this.startFrame;
    }

    init(imageArrayIndex, frameWidth, frameHeight, frameSpeed) {
        this.framesImage = gameLibrary.gameImageArray[imageArrayIndex];
        this.frameSize.width = frameWidth;
        this.frameSize.height = frameHeight;
        this.numberOfFramesInRow = int(this.framesImage.width / this.frameSize.width);
        this.numberOfFramesInColumn = int(this.framesImage.height / this.frameSize.height);
        this.frameSpeed = frameSpeed;

        this.numberOfFrames = 0;
        this.startFrame = 0;
        this.lastFrame = 0;
        this.isLooped = false;
        this.isInverted = false;

        this.isAnimated = false;
        this.frame = 0.0;
        this.frameInteger = 0;
        this.frameTime = 0.0;
        this.isUpdateFrameImage = true;
        this.frameImage = null;
        this.frameAlphaChannel = null;
        this.isFrameImageUpdated = false;

        for (let i = 0; i < this.numberOfFrames; i++) {
            this.frameSoundIndexArray[i] = GameLibrary.NONE;
        }
    }

    initSound(frameInteger, soundIndex) {
        this.frameSoundIndexArray[frameInteger] = soundIndex;

        if (this.frameInteger == 0 && frameInteger == 0) {
            gameLibrary.sound.play(this.frameSoundIndexArray[this.frameInteger]);
        }
    }

    play(startFrame, numberOfFrames, isLooped, isInverted) {
        this.numberOfFrames = (numberOfFrames > 0) ? numberOfFrames : this.numberOfFramesInRow * this.numberOfFramesInColumn;
        this.lastFrame = startFrame + this.numberOfFrames - 1;
        this.startFrame = gameLibrary.clamp(startFrame, 0, this.lastFrame);
        this.isLooped = isLooped;
        this.isInverted = isInverted;

        this.isAnimated = true;
        this.frame = 0.0;
        this.frameInteger = 0;
        this.frameImage = null;
        this.isFrameImageUpdated = false;

        for (let i = 0; i < this.numberOfFrames; i++) {
            this.frameSoundIndexArray[i] = GameLibrary.NONE;
        }

        this.updateImage();
    }

    setStartFrame(startFrame) {
        this.lastFrame = startFrame + this.numberOfFrames - 1;
        this.startFrame = gameLibrary.clamp(startFrame, 0, this.lastFrame);
    }

    setIsFrameImageUpdated(isUpdated) {
        this.isFrameImageUpdated = isUpdated;
    }

    setFrameSpeed(frameSpeed) {
        this.frameSpeed = frameSpeed;
    }

    setIsUpdateFrameImage(isUpdated) {
        this.isUpdateFrameImage = isUpdated;
    }

    release() {
        this.isFrameImageUpdated = false;

        if (this.frameImage) {
            this.frameImage = null;
        }

        if (this.frameAlphaChannel) {
            this.frameAlphaChannel = null;
        }
    }

    updateImage() {
        if (this.framesImage) {
            let frameInteger = int(this.frame);

            if (frameInteger != this.frameInteger || !this.isFrameImageUpdated) {
                this.frameInteger = frameInteger;

                if (this.isUpdateFrameImage) {
                    frameInteger += this.startFrame;

                    let x = (frameInteger % this.numberOfFramesInRow) * this.frameSize.width;
                    let y = int(frameInteger / this.numberOfFramesInRow) * this.frameSize.height;
                    this.frameImage = this.framesImage.image.get(x, y, this.frameSize.width, this.frameSize.height);
                }

                this.isFrameImageUpdated = true;
                gameLibrary.sound.play(this.frameSoundIndexArray[this.frameInteger]);
            }
        }
    }

    update() {
        if (this.isAnimated && this.frameSpeed != 0.0 && this.framesImage) {
            this.frameTime += gameLibrary.getDeltaTime();
            let frameSpeed = gameLibrary.fabs(this.frameSpeed);

            if (this.frameTime >= frameSpeed) {
                this.frameTime -= frameSpeed;
                this.frame += (this.frameSpeed > 0.0) ? 1.0 : -1.0;

                if (this.isInverted) {
                    if (this.frameSpeed > 0.0) {
                        if (this.frame >= this.lastFrame) {
                            this.frame = this.lastFrame;
                            this.frameSpeed *= -1.0;
                        }
                    } else {
                        this.frame = 0.0;
                        this.frameSpeed *= -1.0;

                        if (!this.isLooped) {
                            this.isAnimated = false;
                        }
                    }
                } else {
                    if (this.frame >= this.numberOfFrames) {
                        if (this.isLooped) {
                            this.frame = 0.0;
                        } else {
                            this.frame = this.lastFrame;
                            this.isAnimated = false;
                        }
                    }
                }

                this.updateImage();
            }
        }
    }
}

////////////////////////////////////////////////////////////
// text over
////////////////////////////////////////////////////////////
class GameTextOver {
    constructor(parent) {
        this.MAX_SPAWN = 4;
        this.DEFAULT_FONT_SIZE = 40.0;
        this.DEFAULT_FLOATING_HEIGHT = 20;
        this.DEFAULT_SPEED = 20.0;

        this.parent = parent;
        this.fontSize = this.DEFAULT_FONT_SIZE;
        this.floatingHeight = this.DEFAULT_FLOATING_HEIGHT;
        this.speed = this.DEFAULT_SPEED;
        this.scale = 0.0;
        this.counter = 0;
        this.textArray = [];
        this.prefixTextArray = [];
        this.spawnPointArray = [];
        this.pointArray = [];
        this.redArray = [];
        this.greenArray = [];
        this.blueArray = [];
        this.alphaArray = [];

        for (let i = 0; i < this.MAX_SPAWN; i++) {
            this.textArray[i] = "";
            this.prefixTextArray[i] = "";
            this.spawnPointArray[i] = new GamePoint();
            this.pointArray[i] = new GamePoint();
            this.redArray[i] = 255;
            this.greenArray[i] = 255;
            this.blueArray[i] = 255;
            this.alphaArray[i] = 0.0;
        }
    }

    isFinished() {
        return (this.counter == 0);
    }

    resize() {
        for (let i = 0; i < this.MAX_SPAWN; i++) {
            if (this.textArray[i].length > 0 || this.prefixTextArray[i].length > 0) {
                this.spawnPointArray[i].x *= this.parent.imageScaleChanged;
                this.spawnPointArray[i].y *= this.parent.imageScaleChanged;
                this.pointArray[i].x *= this.parent.imageScaleChanged;
                this.pointArray[i].y *= this.parent.imageScaleChanged;
            }
        }
    }

    render() {
        let imageScale = (this.scale > 0.0) ? this.scale : this.parent.imageScale;
        let fontSize = this.fontSize * imageScale;
        let textString = "";
        let textColor = null;

        for (let i = 0; i < this.MAX_SPAWN; i++) {
            if ((this.textArray[i].length > 0 || this.prefixTextArray[i].length > 0) && this.alphaArray[i] > 0.0) {
                textString = this.prefixTextArray[i] + this.textArray[i];
                textColor = color(this.redArray[i], this.greenArray[i], this.blueArray[i]);
                this.parent.renderHUDText(GameLibrary.HUD_TEXT_OTHERS, textString, this.pointArray[i].x, this.pointArray[i].y, fontSize, textColor, this.alphaArray[i], false);
            }
        }
    }

    reset(fontSize, floatingHeight, speed) {
        this.fontSize = (fontSize > 0.0) ? fontSize : this.DEFAULT_FONT_SIZE;
        this.floatingHeight = (floatingHeight > 0) ? floatingHeight : this.DEFAULT_FLOATING_HEIGHT;
        this.speed = (speed > 0.0) ? speed : this.DEFAULT_SPEED;
        this.counter = 0;

        for (let i = 0; i < this.MAX_SPAWN; i++) {
            this.textArray[i] = "";
            this.spawnPointArray[i].x = 0;
            this.spawnPointArray[i].y = 0;
            this.pointArray[i].x = 0;
            this.pointArray[i].y = 0;
            this.alphaArray[i] = 0.0;
            this.prefixTextArray[i] = "";
        }
    }

    spawn(pointPosition, prefixText, spawnText, textColor) {
        let currentIndex = GameLibrary.NONE;

        for (let i = 0; i < this.MAX_SPAWN; i++) {
            if (this.textArray[i].length == 0 && this.prefixTextArray[i].length == 0) {
                this.textArray[i] = spawnText;
                this.spawnPointArray[i].x = pointPosition.x;
                this.spawnPointArray[i].y = pointPosition.y;
                this.pointArray[i].x = pointPosition.x;
                this.pointArray[i].y = pointPosition.y;
                this.prefixTextArray[i] = prefixText;
                this.redArray[i] = red(textColor);
                this.greenArray[i] = green(textColor);
                this.blueArray[i] = blue(textColor);
                this.alphaArray[i] = 255.0;
                currentIndex = i;
                break;
            }
        }

        return currentIndex;
    }

    spawnInteger(pointPosition, prefixText, integerValue, textColor) {
        return this.spawn(pointPosition, prefixText, str(integerValue), textColor);
    }

    update() {
        let imageScale = (this.scale > 0.0) ? this.scale : this.parent.imageScale;
        let fontSize = this.fontSize * imageScale;
        let moveHeight = 0.0;
        let floatingHeight = this.floatingHeight * imageScale;
        let t = 0;
        this.counter = 0;

        for (let i = 0; i < this.MAX_SPAWN; i++) {
            if (this.textArray[i].length > 0 || this.prefixTextArray[i].length > 0) {
                if (this.pointArray[i].y < this.spawnPointArray[i].y - floatingHeight) {
                    this.alphaArray[i] -= this.parent.getDeltaTime() * 0.5;
                }

                moveHeight = this.parent.minimumLimit(fontSize * 0.05, 1.0);
                t = (this.alphaArray[i] >= 250.0) ? (this.speed * 2.4) : (this.alphaArray[i] >= 200.0) ? (this.speed * 2.0) : this.speed;
                this.pointArray[i].y -= moveHeight * (this.parent.getDeltaTime() / t);

                if (this.alphaArray[i] <= 0.0) {
                    this.alphaArray[i] = 0.0;
                    this.textArray[i] = "";
                    this.prefixTextArray[i] = "";
                } else {
                    this.counter++;
                }
            }
        }
    }
}

////////////////////////////////////////////////////////////
// particle
////////////////////////////////////////////////////////////
class GameParticleElement {
    constructor(parent) {
        this.tag = 0;
        this.centerVector = parent.vector.create();
        this.topLeftPoint = new GamePoint();
        this.accelerationVector = parent.vector.create();
        this.velocityVector = parent.vector.create();
        this.size = 0.0;
        this.sizeChanged = 0.0;
        this.lifespan = 0.0;
        this.lifespanChanged = 0.0;
        this.rgb = 0x0000;
        this.red = 0;
        this.green = 0;
        this.blue = 0;
        this.radians = 0.0;
        this.rotationSpeed = 0.0;
    }
}

class GameParticle {
    constructor(parent) {
        this.MAX_ELEMENTS = 100;

        this.parent = parent;
        this.elementArray = [];
    }

    add(tag, position, acceleration, velocity, size, sizeChanged, lifespanChanged, rgb) {
        let element = new GameParticleElement(this.parent);

        element.tag = tag;

        element.centerVector.x = position.x;
        element.centerVector.y = position.y;

        element.accelerationVector.x = acceleration.x;
        element.accelerationVector.y = acceleration.y;

        element.velocityVector.x = velocity.x;
        element.velocityVector.y = velocity.y;

        element.size = size;
        element.sizeChanged = sizeChanged;
        element.lifespan = 255.0;
        element.lifespanChanged = this.parent.fabs(lifespanChanged);

        element.rgb = rgb;
        element.red = this.parent.getRed(rgb);
        element.green = this.parent.getGreen(rgb);
        element.bblue = this.parent.getBlue(rgb);

        element.radians = 0.0;
        element.rotationSpeed = (1000.0 + this.parent.randomFloat(-500.0, 500.0)) * this.parent.randomInt(-1, 1);

        let halfSize = element.size * 0.5;
        element.topLeftPoint.x = element.centerVector.x - halfSize;
        element.topLeftPoint.y = element.centerVector.y - halfSize;

        this.elementArray.push(element);
    }

    clear() {
        this.elementArray = [];
    }

    renderCircle(tag, isSolidFill) {
        let radius = 0.0;

        for (let i = 0; i < this.elementArray.length; i++) {
            if (this.elementArray[i].tag == tag) {
                if (this.updateElement(i)) {
                    i--;
                } else {
                    radius = ceil(this.elementArray[i].size * 0.5);
                    this.parent.offscreen.renderCircle(this.elementArray[i].topLeftPoint.x + radius, this.elementArray[i].topLeftPoint.y + radius, radius, this.elementArray[i].rgb, this.elementArray[i].lifespan, isSolidFill);
                }
            }
        }
    }

    renderRectangle(tag, isSolidFill) {
        for (let i = 0; i < this.elementArray.length; i++) {
            if (this.elementArray[i].tag == tag) {
                if (this.updateElement(i)) {
                    i--;
                } else {
                    this.parent.offscreen.renderRectangle(this.elementArray[i].topLeftPoint.x, this.elementArray[i].topLeftPoint.y, this.elementArray[i].topLeftPoint.x + this.elementArray[i].size - 1, this.elementArray[i].topLeftPoint.y + this.elementArray[i].size - 1, this.elementArray[i].rgb, this.elementArray[i].lifespan, 1, isSolidFill);
                }
            }
        }
    }

    renderImage(tag, smallestImageIndex, biggestImageIndex = GameLibrary.NONE) {
        let imageIndex = (biggestImageIndex == GameLibrary.NONE) ? smallestImageIndex : biggestImageIndex;
        let elementWidth = 0;
        let elementHeight = 0;

        for (let i = 0; i < this.elementArray.length; i++) {
            if (this.elementArray[i].tag == tag) {
                if (this.updateElement(i)) {
                    i--;
                } else {
                    if (biggestImageIndex != GameLibrary.NONE && smallestImageIndex < biggestImageIndex) {
                        imageIndex = smallestImageIndex;

                        for (let foundIndex = smallestImageIndex; foundIndex <= biggestImageIndex; foundIndex++) {
                            if (this.elementArray[i].size >= this.parent.gameImageArray[foundIndex].width) {
                                imageIndex = foundIndex;
                            }
                        }

                        elementWidth = this.parent.gameImageArray[imageIndex].width;
                        elementHeight = this.parent.gameImageArray[imageIndex].height;
                    } else {
                        elementWidth = this.elementArray[i].size;
                        elementHeight = this.elementArray[i].size;
                    }

                    push();
                    imageMode(CENTER);
                    translate(this.elementArray[i].topLeftPoint.x + int(elementWidth * 0.5), this.elementArray[i].topLeftPoint.y + int(elementHeight * 0.5));
                    rotate(this.elementArray[i].radians);

                    if (this.elementArray[i].red > 0 || this.elementArray[i].green > 0 || this.elementArray[i].blue > 0) {
                        this.parent.offscreen.tint(this.elementArray[i].red, this.elementArray[i].green, this.elementArray[i].blue);
                    }

                    this.parent.gameImageArray[imageIndex].render(0, 0, elementWidth, elementHeight, 0, 0, this.parent.gameImageArray[imageIndex].width, this.parent.gameImageArray[imageIndex].height, this.elementArray[i].lifespan);
                    this.parent.offscreen.noTint();
                    pop();
                }
            }
        }
    }

    isDead() {
        return (this.elementArray.length == 0);
    }

    update(tag) {
    }

    updateElement(i) {
        let isDead = false;

        if (this.elementArray[i].rotationSpeed != 0.0) {
            this.elementArray[i].radians = this.parent.normalize(this.elementArray[i].radians + (this.parent.getDeltaTime() / this.elementArray[i].rotationSpeed), 0.0, TWO_PI, false);
        }

        this.elementArray[i].velocityVector = this.parent.vector.add(this.elementArray[i].velocityVector, this.elementArray[i].accelerationVector);
        this.elementArray[i].centerVector = this.parent.vector.add(this.elementArray[i].centerVector, this.elementArray[i].velocityVector);
        this.elementArray[i].size += this.elementArray[i].sizeChanged;
        this.elementArray[i].lifespan = this.parent.clamp(this.elementArray[i].lifespan - this.elementArray[i].lifespanChanged, 0.0, 255.0);

        let halfSize = this.elementArray[i].size * 0.5;
        this.elementArray[i].topLeftPoint.x = this.elementArray[i].centerVector.x - halfSize;
        this.elementArray[i].topLeftPoint.y = this.elementArray[i].centerVector.y - halfSize;

        if (halfSize <= 0.0 || this.elementArray[i].centerVector.x < -halfSize || this.elementArray[i].centerVector.x > this.parent.offscreen.displayWidth + halfSize || this.elementArray[i].centerVector.y < -halfSize || this.elementArray[i].centerVector.y > this.parent.offscreen.displayHeight + halfSize) {
            this.elementArray[i].lifespan = 0.0;
            this.elementArray.splice(i, 1);
            isDead = true;
        }

        return isDead;
    }
}

////////////////////////////////////////////////////////////
// cookie
////////////////////////////////////////////////////////////
class GameCookie {
    constructor(parent) {
        this.parent = parent;
        this.key = "Pheeraphat.1.0.0";
        this.isConsoleLogVisibled = true;
    }

    createKey(sectionName, valueName) {
        let keyString = this.key;

        if (sectionName && sectionName.length > 0) {
            keyString += "." + sectionName;
        }

        if (valueName && valueName.length > 0) {
            keyString += "." + valueName;
        }

        return keyString;
    }

    deleteHighscore(isConsoleLog) {
        this.isConsoleLogVisibled = isConsoleLog;

        if (isConsoleLog) {
            console.log("delete cookie...");
        }

        this.deleteSection(this.key);

        let sectionName = "data";
        this.deleteValue(sectionName, "highscore");
        this.deleteSection(sectionName);
    }

    deleteValue(sectionName, valueName) {
        let keyString = this.createKey(sectionName, valueName);

        if (this.isConsoleLogVisibled) {
            console.log(keyString);
        }

        removeItem(keyString);
    }

    deleteSection(sectionName) {
        this.deleteValue((sectionName == this.key) ? null : sectionName, null);
    }

    loadBool(sectionName, valueName, defaultValue) {
        return this.loadValue(sectionName, valueName, defaultValue);
    }

    loadFloat(sectionName, valueName, defaultValue) {
        let intValue = this.loadValue(sectionName, valueName, int(defaultValue * 1000));
        return intValue / 1000.0;
    }

    loadHighscore(isConsoleLog) {
        let longHighscore = 0;
        this.isConsoleLogVisibled = isConsoleLog;

        if (isConsoleLog) {
            console.log("load cookie...");
        }

        let isFound = this.loadSection(this.key);

        if (isFound) {
            let sectionName = "data";
            isFound = this.loadSection(sectionName);

            if (isFound) {
                longHighscore = this.loadLong(sectionName, "highscore", 0);
            }
        }

        if (!isFound) {
            this.saveHighscore(isConsoleLog, longHighscore);
        }

        return longHighscore;
    }

    loadInt(sectionName, valueName, defaultValue) {
        return this.loadValue(sectionName, valueName, defaultValue);
    }

    loadLong(sectionName, valueName, defaultValue) {
        return this.loadValue(sectionName, valueName, defaultValue);
    }

    loadString(sectionName, valueName, defaultValue) {
        return this.loadValue(sectionName, valueName, defaultValue);
    }

    loadSection(sectionName) {
        return this.loadBool((sectionName == this.key) ? null : sectionName, null, false);
    }

    loadValue(sectionName, valueName, defaultValue) {
        let keyString = this.createKey(sectionName, valueName);
        let value = getItem(keyString);

        if (value == null) {
            value = defaultValue;

            if (this.isConsoleLogVisibled) {
                console.log(keyString, "=", defaultValue, "(default)");
            }
        } else {
            if (this.isConsoleLogVisibled) {
                console.log(keyString, "=", value);
            }
        }

        return value;
    }

    saveBool(sectionName, valueName, boolValue) {
        this.saveValue(sectionName, valueName, boolValue);
    }

    saveFloat(sectionName, valueName, floatValue) {
        this.saveValue(sectionName, valueName, int(floatValue * 1000));
    }

    saveHighscore(isConsoleLog, longHighscore) {
        this.isConsoleLogVisibled = isConsoleLog;

        if (isConsoleLog) {
            console.log("save cookie...");
        }

        this.saveSection(this.key);
        let sectionName = "data";
        this.saveSection(sectionName);
        this.saveLong(sectionName, "highscore", longHighscore);
    }

    saveInt(sectionName, valueName, intValue) {
        this.saveValue(sectionName, valueName, intValue);
    }

    saveLong(sectionName, valueName, longValue) {
        this.saveValue(sectionName, valueName, longValue);
    }

    saveSection(sectionName) {
        this.saveValue((sectionName == this.key) ? null : sectionName, null, true);
    }

    saveString(sectionName, valueName, stringValue) {
        this.saveValue(sectionName, valueName, stringValue);
    }

    saveValue(sectionName, valueName, value) {
        let keyString = this.createKey(sectionName, valueName);

        if (this.isConsoleLogVisibled) {
            console.log(keyString, "=", value);
        }

        storeItem(keyString, value);
    }

    setKey(key) {
        this.key = key;
    }
}

////////////////////////////////////////////////////////////
// sound
////////////////////////////////////////////////////////////
class GameSound {
    constructor(parent) {
        this.MAX_NUMBER_OF_SOUNDS = 32;

        this.parent = parent;
        this.loadingIndex = 0;
        this.numberOfSounds = 0;
        this.soundArray = [];
        this.dataArray = null;
        this.dataArraySize = 0;

        for (let i = 0; i < this.MAX_NUMBER_OF_SOUNDS; i++) {
            this.soundArray[i] = null;
        }
    }

    getData(soundIndex, channel) {
        if (this.parent.isReady) {
            this.dataArray = null;
            this.dataArraySize = 0;

//            if (this.isValid(soundIndex) && this.soundArray[soundIndex].buffer.numberOfChannels > channel) {
//                this.dataArray = this.soundArray[soundIndex].buffer.getChannelData(channel);
//                this.dataArraySize = this.parent.getArraySize(this.dataArray);
//            }
        }
    }

    getDuration(soundIndex) {
        let milliseconds = -1.0;

        if (this.parent.isReady && this.isValid(soundIndex)) {
            milliseconds = this.soundArray[soundIndex].duration() * 1000.0;
        }

        return milliseconds;
    }

    getCurrentTime(soundIndex) {
        let milliseconds = -1.0;

        if (this.parent.isReady && this.isValid(soundIndex)) {
            //milliseconds = this.soundArray[soundIndex].currentTime() * 1000.0;
        }

        return milliseconds;
    }

    getNumberOfChannels(soundIndex) {
        return 0; // (this.parent.isReady && this.isValid(soundIndex)) ? this.soundArray[soundIndex].buffer.numberOfChannels : 0;
    }

    isPlaying(soundIndex) {
        return (this.parent.isReady && this.isValid(soundIndex)) ? this.soundArray[soundIndex].isPlaying() : false;
    }

    isPaused(soundIndex) {
        return (this.parent.isReady && this.isValid(soundIndex)) ? !this.soundArray[soundIndex].isPlaying() : false;
    }

    isValid(soundIndex) {
        return (soundIndex >= 0 && soundIndex < this.numberOfSounds && soundIndex < this.MAX_NUMBER_OF_SOUNDS && this.soundArray[soundIndex] != null) ? true : false;
    }

    jump(soundIndex, milliseconds) {
        if (this.parent.isReady && this.isValid(soundIndex)) {
            this.soundArray[soundIndex].jump(milliseconds / 1000.0);
        }
    }

    loop(soundIndex) {
        if (this.parent.isReady && this.isValid(soundIndex)) {
            this.soundArray[soundIndex].loop(true);
            this.soundArray[soundIndex].play();
        }
    }

    pause(soundIndex) {
        if (this.parent.isReady && this.isValid(soundIndex)) {
            this.soundArray[soundIndex].pause();
        }
    }

    play(soundIndex) {
        if (this.parent.isReady && this.isValid(soundIndex)) {
            setTimeout(() => {this.soundArray[soundIndex].play();}, 1);
        }
    }

    stop(soundIndex) {
        if (this.parent.isReady && this.isValid(soundIndex)) {
            this.soundArray[soundIndex].stop();
        }
    }
}

////////////////////////////////////////////////////////////
// number
////////////////////////////////////////////////////////////
class GameNumber {
    constructor(parent) {
        this.parent = parent;
    }

    getPixelSize(str, digit0ImageArrayIndex, spacesBetweenDigits) {
        let stringLength = this.parent.strlen(str);
        let x = 0;
        let scaledHeight = 0;
        let digit0ImageArrayOffset = digit0ImageArrayIndex - 48;

        if (stringLength > 0) {
            for (let i = 0; i < stringLength; i++) {
                let ch = this.parent.charAt(str, i);
                let imageIndex = this.parent.unchar(ch) + digit0ImageArrayOffset;
                let scaledWidth = this.parent.scale(this.parent.gameImageArray[imageIndex].width);
                scaledHeight = this.parent.scale(this.parent.gameImageArray[imageIndex].height);
                x += scaledWidth + spacesBetweenDigits;
            }
        }

        let pixelSize = new GameSize(x - spacesBetweenDigits, scaledHeight);
        return pixelSize;
    }

    render(x, y, str, digit0ImageArrayIndex, spacesBetweenDigits) {
        let stringLength = this.parent.strlen(str);
        let pixelWidth = 0;
        let digit0ImageArrayOffset = digit0ImageArrayIndex - 48;

        if (stringLength > 0) {
            for (let i = 0; i < stringLength; i++) {
                let ch = this.parent.charAt(str, i);
                let imageIndex = this.parent.unchar(ch) + digit0ImageArrayOffset;
                let scaledWidth = this.parent.scale(this.parent.gameImageArray[imageIndex].width);
                let scaledHeight = this.parent.scale(this.parent.gameImageArray[imageIndex].height);
                this.parent.offscreen.renderImage(x, y, scaledWidth, scaledHeight, 0xff, this.parent.gameImageArray[imageIndex].alphaChannel, this.parent.gameImageArray[imageIndex].colorKey, this.parent.gameImageArray[imageIndex].image);
                let totalWidth = scaledWidth + spacesBetweenDigits;
                pixelWidth += totalWidth;
                x += totalWidth;
            }
        }

        return pixelWidth;
    }
}
