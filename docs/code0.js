gdjs.Main_32SceneCode = {};
gdjs.Main_32SceneCode.GDPlayerObjects1= [];
gdjs.Main_32SceneCode.GDPlayerObjects2= [];
gdjs.Main_32SceneCode.GDStonePlatformObjects1= [];
gdjs.Main_32SceneCode.GDStonePlatformObjects2= [];
gdjs.Main_32SceneCode.GDLeftWallOutsideObjects1= [];
gdjs.Main_32SceneCode.GDLeftWallOutsideObjects2= [];
gdjs.Main_32SceneCode.GDLeftWallInsideObjects1= [];
gdjs.Main_32SceneCode.GDLeftWallInsideObjects2= [];
gdjs.Main_32SceneCode.GDStonePlatformRightObjects1= [];
gdjs.Main_32SceneCode.GDStonePlatformRightObjects2= [];
gdjs.Main_32SceneCode.GDStonePlatformLeftObjects1= [];
gdjs.Main_32SceneCode.GDStonePlatformLeftObjects2= [];
gdjs.Main_32SceneCode.GDNewObjectObjects1= [];
gdjs.Main_32SceneCode.GDNewObjectObjects2= [];
gdjs.Main_32SceneCode.GDGrassLeftObjects1= [];
gdjs.Main_32SceneCode.GDGrassLeftObjects2= [];
gdjs.Main_32SceneCode.GDGrassRightObjects1= [];
gdjs.Main_32SceneCode.GDGrassRightObjects2= [];
gdjs.Main_32SceneCode.GDGrassBottomObjects1= [];
gdjs.Main_32SceneCode.GDGrassBottomObjects2= [];
gdjs.Main_32SceneCode.GDGrassBottomRightObjects1= [];
gdjs.Main_32SceneCode.GDGrassBottomRightObjects2= [];
gdjs.Main_32SceneCode.GDCoinObjects1= [];
gdjs.Main_32SceneCode.GDCoinObjects2= [];
gdjs.Main_32SceneCode.GDScoreObjects1= [];
gdjs.Main_32SceneCode.GDScoreObjects2= [];

gdjs.Main_32SceneCode.conditionTrue_0 = {val:false};
gdjs.Main_32SceneCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32SceneCode.condition1IsTrue_0 = {val:false};
gdjs.Main_32SceneCode.condition2IsTrue_0 = {val:false};


gdjs.Main_32SceneCode.mapOfGDgdjs_46Main_9532SceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Main_32SceneCode.GDPlayerObjects1});gdjs.Main_32SceneCode.mapOfGDgdjs_46Main_9532SceneCode_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.Main_32SceneCode.GDCoinObjects1});gdjs.Main_32SceneCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_32SceneCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Main_32SceneCode.GDPlayerObjects1.length !== 0 ? gdjs.Main_32SceneCode.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_32SceneCode.GDPlayerObjects1);

gdjs.Main_32SceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Main_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Main_32SceneCode.condition0IsTrue_0.val = true;
        gdjs.Main_32SceneCode.GDPlayerObjects1[k] = gdjs.Main_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Main_32SceneCode.GDPlayerObjects1.length = k;}if (gdjs.Main_32SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Main_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Main_32SceneCode.GDPlayerObjects1[i].setAnimationName("Jumping");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_32SceneCode.GDPlayerObjects1);

gdjs.Main_32SceneCode.condition0IsTrue_0.val = false;
gdjs.Main_32SceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Main_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Main_32SceneCode.condition0IsTrue_0.val = true;
        gdjs.Main_32SceneCode.GDPlayerObjects1[k] = gdjs.Main_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Main_32SceneCode.GDPlayerObjects1.length = k;}if ( gdjs.Main_32SceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Main_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Main_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Main_32SceneCode.condition1IsTrue_0.val = true;
        gdjs.Main_32SceneCode.GDPlayerObjects1[k] = gdjs.Main_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Main_32SceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.Main_32SceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Main_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Main_32SceneCode.GDPlayerObjects1[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_32SceneCode.GDPlayerObjects1);

gdjs.Main_32SceneCode.condition0IsTrue_0.val = false;
gdjs.Main_32SceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Main_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Main_32SceneCode.condition0IsTrue_0.val = true;
        gdjs.Main_32SceneCode.GDPlayerObjects1[k] = gdjs.Main_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Main_32SceneCode.GDPlayerObjects1.length = k;}if ( gdjs.Main_32SceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Main_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Main_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Main_32SceneCode.condition1IsTrue_0.val = true;
        gdjs.Main_32SceneCode.GDPlayerObjects1[k] = gdjs.Main_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Main_32SceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.Main_32SceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Main_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Main_32SceneCode.GDPlayerObjects1[i].setAnimationName("Running");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Main_32SceneCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_32SceneCode.GDPlayerObjects1);

gdjs.Main_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_32SceneCode.mapOfGDgdjs_46Main_9532SceneCode_46GDPlayerObjects1Objects, gdjs.Main_32SceneCode.mapOfGDgdjs_46Main_9532SceneCode_46GDCoinObjects1Objects, false, runtimeScene, false);
}if (gdjs.Main_32SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32SceneCode.GDCoinObjects1 */
{for(var i = 0, len = gdjs.Main_32SceneCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Main_32SceneCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets/SoundEffects/Coin.wav", false, 100, 1);
}{runtimeScene.getVariables().get("Score").add(1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Main_32SceneCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.Main_32SceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Main_32SceneCode.GDScoreObjects1[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Score"))));
}
}}

}


{


{
}

}


};

gdjs.Main_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Main_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Main_32SceneCode.GDStonePlatformObjects1.length = 0;
gdjs.Main_32SceneCode.GDStonePlatformObjects2.length = 0;
gdjs.Main_32SceneCode.GDLeftWallOutsideObjects1.length = 0;
gdjs.Main_32SceneCode.GDLeftWallOutsideObjects2.length = 0;
gdjs.Main_32SceneCode.GDLeftWallInsideObjects1.length = 0;
gdjs.Main_32SceneCode.GDLeftWallInsideObjects2.length = 0;
gdjs.Main_32SceneCode.GDStonePlatformRightObjects1.length = 0;
gdjs.Main_32SceneCode.GDStonePlatformRightObjects2.length = 0;
gdjs.Main_32SceneCode.GDStonePlatformLeftObjects1.length = 0;
gdjs.Main_32SceneCode.GDStonePlatformLeftObjects2.length = 0;
gdjs.Main_32SceneCode.GDNewObjectObjects1.length = 0;
gdjs.Main_32SceneCode.GDNewObjectObjects2.length = 0;
gdjs.Main_32SceneCode.GDGrassLeftObjects1.length = 0;
gdjs.Main_32SceneCode.GDGrassLeftObjects2.length = 0;
gdjs.Main_32SceneCode.GDGrassRightObjects1.length = 0;
gdjs.Main_32SceneCode.GDGrassRightObjects2.length = 0;
gdjs.Main_32SceneCode.GDGrassBottomObjects1.length = 0;
gdjs.Main_32SceneCode.GDGrassBottomObjects2.length = 0;
gdjs.Main_32SceneCode.GDGrassBottomRightObjects1.length = 0;
gdjs.Main_32SceneCode.GDGrassBottomRightObjects2.length = 0;
gdjs.Main_32SceneCode.GDCoinObjects1.length = 0;
gdjs.Main_32SceneCode.GDCoinObjects2.length = 0;
gdjs.Main_32SceneCode.GDScoreObjects1.length = 0;
gdjs.Main_32SceneCode.GDScoreObjects2.length = 0;

gdjs.Main_32SceneCode.eventsList0(runtimeScene);
return;

}

gdjs['Main_32SceneCode'] = gdjs.Main_32SceneCode;
