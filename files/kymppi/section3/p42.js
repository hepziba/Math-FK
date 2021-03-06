var canvas, stage, exportRoot;

function init() {
    canvas = document.getElementById("canvas");
    images = images || {};

    var loader = new createjs.LoadQueue(true, null, true); // allow cross origin images
    loader.addEventListener("fileload", function(evt) {
        if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
    });
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(lib.properties.manifest);
    // mathviewer.setExerciseTabs(5, 1, ['Tiotal', 'Räkna antal', 'Tallinje', 'Skriva talet 11', 'Skriva talet 12']);
    // mathviewer.setExerciseTabs(1, 1, [''], 'modalViOvar');
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p42_11.png");
    // mathviewer.setIconVisibility(true);
}

function handleComplete() {
    exportRoot = new lib.p6();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    //createjs.Ticker.addEventListener("tick", stage);
}

(function(lib, img, cjs) {

    // Basic implementation that could be added to CreateJS.Graphics
    (cjs.Graphics.Dash = function(instr) {
        if (instr == null) {
            instr = [0];
        }
        this.instr = instr;
    }).prototype.exec = function() {
        setLineDash(this.instr);
    };
    cjs.Graphics.prototype.dash = function(instr) {
        return this.append(new cjs.Graphics.Dash(instr));
    }

    var p;
    lib.properties = {
        width: 610,
        height: 678,
        fps: 20,
        color: "#FFFFFF",
        manifest: [{
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p42_1.png",
            id: "p42_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/even_pageS3.png",
            id: "pg_num"
        }]
    };

    (lib.p42_1 = function() {
        this.initialize(img.p42_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("42", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(75, 665);

        this.pageBottomText = new cjs.Text("Geometriska figurer", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'left';
        this.pageBottomText.setTransform(115, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, -10);

        this.text_1 = new cjs.Text("Måla figurerna i varsin färg. Måla sedan bilden med dessa färger.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, -5);

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 88, 12);
        this.roundRect1.setTransform(30, 20);

        this.addChild(this.headerCircle, this.text_1, this.roundRect1);

        this.RectShape1 = new cjs.Shape();
        this.RectShape1.graphics.f("#ffffff").s("#31B1C9").ss(1).drawRect(0, 0, 108, 25);
        this.RectShape1.setTransform(50, 60);

        this.SquareShape1 = new cjs.Shape();
        this.SquareShape1.graphics.f("#ffffff").s("#31B1C9").ss(1).drawRect(0, 0, 50, 50);
        this.SquareShape1.setTransform(210, 40);

        this.circleShape1 = new cjs.Shape();
        this.circleShape1.graphics.f("#ffffff").s("#31B1C9").ss(1, 0, 0, 4).arc(0, 0, 25, 0, 2 * Math.PI);
        this.circleShape1.setTransform(340, 65);

        this.triangleShape1 = new cjs.Shape();
        this.triangleShape1.graphics.f("").s("#31B1C9").ss(1).moveTo(0, 0).lineTo(50, 0).lineTo(25, -50).lineTo(0, 0);
        this.triangleShape1.setTransform(420, 88);

        this.addChild(this.RectShape1, this.SquareShape1, this.circleShape1, this.triangleShape1);

        this.triangleShape2 = new cjs.Shape();
        this.triangleShape2.graphics.f("").s("#31B1C9").ss(1).moveTo(0, 0).lineTo(50, 0).lineTo(25, -36).lineTo(0, 0);
        this.triangleShape2.setTransform(47, 178);

        this.triangleShape3 = new cjs.Shape();
        this.triangleShape3.graphics.f("").s("#31B1C9").ss(1).moveTo(0, 0).lineTo(74, 0).lineTo(37, -48).lineTo(0, 0);
        this.triangleShape3.setTransform(35, 227);

        this.triangleShape4 = new cjs.Shape();
        this.triangleShape4.graphics.f("").s("#31B1C9").ss(1).moveTo(0, 0).lineTo(114, 0).lineTo(57, -72).lineTo(0, 0);
        this.triangleShape4.setTransform(15, 300);

        this.RectShape2 = new cjs.Shape();
        this.RectShape2.graphics.f("#ffffff").s("#31B1C9").ss(1).drawRect(0, 0, 15, 39);
        this.RectShape2.setTransform(65, 300);

        this.addChild(this.triangleShape2, this.triangleShape3, this.triangleShape4, this.RectShape2);

        this.SquareShape2 = new cjs.Shape();
        this.SquareShape2.graphics.f("#ffffff").s("#31B1C9").ss(1).drawRect(0, 0, 50, 50);
        this.SquareShape2.setTransform(57, 510);

        this.SquareShape3 = new cjs.Shape();
        this.SquareShape3.graphics.f("#ffffff").s("#31B1C9").ss(1).drawRect(0, 0, 50, 50);
        this.SquareShape3.setTransform(259, 510);

        this.RectShape3 = new cjs.Shape();
        this.RectShape3.graphics.f("#ffffff").s("#31B1C9").ss(1).drawRect(0, 0, 35, 100);
        this.RectShape3.setTransform(65, 410);

        this.RectShape4 = new cjs.Shape();
        this.RectShape4.graphics.f("#ffffff").s("#31B1C9").ss(1).drawRect(0, 0, 35, 100);
        this.RectShape4.setTransform(265, 410);

        this.RectShape5 = new cjs.Shape();
        this.RectShape5.graphics.f("#ffffff").s("#31B1C9").ss(1).drawRect(0, 0, 165, 15);
        this.RectShape5.setTransform(100, 417);

        this.addChild(this.SquareShape2, this.SquareShape3, this.RectShape3, this.RectShape4, this.RectShape5);

        for (var col = 0; col < 4; col++) {

            this.circleShape2 = new cjs.Shape();
            this.circleShape2.graphics.f("#ffffff").s("#31B1C9").ss(1, 0, 0, 4).arc(0, 0, 19, 0, 2 * Math.PI);
            this.circleShape2.setTransform(126 + (col * 38), 540);

            this.addChild(this.circleShape2);
        }

        this.circleShape3 = new cjs.Shape();
        this.circleShape3.graphics.f("#ffffff").s("#31B1C9").ss(1, 0, 0, 4).arc(0, 0, 21, 0, 2 * Math.PI);
        this.circleShape3.setTransform(192, 280);

        this.triangleShape5 = new cjs.Shape();
        this.triangleShape5.graphics.f("").s("#31B1C9").ss(1).moveTo(0, 0).lineTo(80, 0).lineTo(40, -62).lineTo(0, 0);
        this.triangleShape5.setTransform(151, 363);

        this.RectShape6 = new cjs.Shape();
        this.RectShape6.graphics.f("#ffffff").s("#31B1C9").ss(1).drawRect(0, 0, 15, 52);
        this.RectShape6.setTransform(171, 363);
        this.RectShape6.rotation = 15;

        this.RectShape7 = new cjs.Shape();
        this.RectShape7.graphics.f("#ffffff").s("#31B1C9").ss(1).drawRect(0, 0, 15, 52);
        this.RectShape7.setTransform(196, 365);
        this.RectShape7.rotation = -7;

        this.RectShape8 = new cjs.Shape();
        this.RectShape8.graphics.f("#ffffff").s("#31B1C9").ss(1).drawRect(0, 0, 15, 52);
        this.RectShape8.setTransform(142, 278);
        this.RectShape8.rotation = -25;

        this.RectShape9 = new cjs.Shape();
        this.RectShape9.graphics.f("#ffffff").s("#31B1C9").ss(1).drawRect(0, 0, 15, 52);
        this.RectShape9.setTransform(204, 318);
        this.RectShape9.rotation = -60;

        this.addChild(this.circleShape3, this.triangleShape5, this.RectShape6, this.RectShape7, this.RectShape8, this.RectShape9);

        this.circleShape4 = new cjs.Shape();
        this.circleShape4.graphics.f("#ffffff").s("#31B1C9").ss(1, 0, 0, 4).arc(0, 0, 19, 0, 2 * Math.PI);
        this.circleShape4.setTransform(379, 350.5);

        this.SquareShape4 = new cjs.Shape();
        this.SquareShape4.graphics.f("#ffffff").s("#31B1C9").ss(1).drawRect(0, 0, 50, 39);
        this.SquareShape4.setTransform(354, 370);

        this.RectShape10 = new cjs.Shape();
        this.RectShape10.graphics.f("#ffffff").s("#31B1C9").ss(1).drawRect(0, 0, 11, 32);
        this.RectShape10.setTransform(365, 409.5);
        this.RectShape10.rotation = 10;

        this.RectShape11 = new cjs.Shape();
        this.RectShape11.graphics.f("#ffffff").s("#31B1C9").ss(1).drawRect(0, 0, 11, 32);
        this.RectShape11.setTransform(382, 409);

        this.RectShape12 = new cjs.Shape();
        this.RectShape12.graphics.f("#ffffff").s("#31B1C9").ss(1).drawRect(0, 0, 11, 25);
        this.RectShape12.setTransform(350, 373);
        this.RectShape12.rotation = 70;

        this.RectShape13 = new cjs.Shape();
        this.RectShape13.graphics.f("#ffffff").s("#31B1C9").ss(1).drawRect(0, 0, 11, 25);
        this.RectShape13.setTransform(410, 387);
        this.RectShape13.rotation = -120;

        this.circleShape5 = new cjs.Shape();
        this.circleShape5.graphics.f("#ffffff").s("#31B1C9").ss(1, 0, 0, 4).arc(0, 0, 9.5, 0, 2 * Math.PI);
        this.circleShape5.setTransform(441, 350);

        this.triangleShape6 = new cjs.Shape();
        this.triangleShape6.graphics.f("").s("#31B1C9").ss(1).moveTo(0, 0).lineTo(0, 37).lineTo(19, 5);
        this.triangleShape6.setTransform(431, 350);

        this.addChild(this.circleShape4, this.SquareShape4, this.RectShape10, this.RectShape11, this.RectShape12, this.RectShape13,
            this.circleShape5, this.triangleShape6);

        this.circleShape6 = new cjs.Shape();
        this.circleShape6.graphics.f("#ffffff").s("#31B1C9").ss(1, 0, 0, 4).arc(0, 0, 19, 0, 2 * Math.PI);
        this.circleShape6.setTransform(442, 465);

        this.triangleShape7 = new cjs.Shape();
        this.triangleShape7.graphics.f("").s("#31B1C9").ss(1).moveTo(0, 0).lineTo(90, 21).lineTo(60, -37).lineTo(0, 0);
        this.triangleShape7.setTransform(380, 521);

        this.RectShape14 = new cjs.Shape();
        this.RectShape14.graphics.f("#ffffff").s("#31B1C9").ss(1).drawRect(0, 0, 11, 30);
        this.RectShape14.setTransform(405, 530);

        this.RectShape15 = new cjs.Shape();
        this.RectShape15.graphics.f("#ffffff").s("#31B1C9").ss(1).drawRect(0, 0, 11, 30);
        this.RectShape15.setTransform(423, 535);
        this.RectShape15.rotation = -5;

        this.RectShape16 = new cjs.Shape();
        this.RectShape16.graphics.f("#ffffff").s("#31B1C9").ss(1).drawRect(0, 0, 11, 30);
        this.RectShape16.setTransform(393, 478);
        this.RectShape16.rotation = -45;

        this.RectShape17 = new cjs.Shape();
        this.RectShape17.graphics.f("#ffffff").s("#31B1C9").ss(1).drawRect(0, 0, 11, 30);
        this.RectShape17.setTransform(450, 503);
        this.RectShape17.rotation = -90;

        this.addChild(this.circleShape6, this.triangleShape7, this.RectShape14, this.RectShape15, this.RectShape16, this.RectShape17);

        this.RectShape18 = new cjs.Shape();
        this.RectShape18.graphics.f("#ffffff").s("#31B1C9").ss(1).drawRect(0, 0, 75, 47);
        this.RectShape18.setTransform(278, 223);

        this.RectShape19 = new cjs.Shape();
        this.RectShape19.graphics.f("#ffffff").s("#31B1C9").ss(1).drawRect(0, 0, 75, 47);
        this.RectShape19.setTransform(413, 223);

        this.triangleShape7 = new cjs.Shape();
        this.triangleShape7.graphics.f("").s("#31B1C9").ss(1).moveTo(3, 0).lineTo(213, 0).lineTo(108, -90).lineTo(3, 0);
        this.triangleShape7.setTransform(275, 223);

        this.RectShape20 = new cjs.Shape();
        this.RectShape20.graphics.f("#ffffff").s("#31B1C9").ss(1).drawRect(0, 0, 82, 54);
        this.RectShape20.setTransform(342, 169);

        this.RectShape21 = new cjs.Shape();
        this.RectShape21.graphics.f("#ffffff").s("#31B1C9").ss(1).drawRect(0, 0, 8, 129);
        this.RectShape21.setTransform(232, 145);

        this.instance_1 = new lib.p42_1();
        this.instance_1.setTransform(240, 131, 0.72, 0.72);

        this.triangleShape8 = new cjs.Shape();
        this.triangleShape8.graphics.f("").s("#31B1C9").ss(1).moveTo(0, 0).lineTo(11, 37).lineTo(27, 3.5).lineTo(0, 0);
        this.triangleShape8.setTransform(255, 148);

        this.triangleShape9 = new cjs.Shape();
        this.triangleShape9.graphics.f("").s("#31B1C9").ss(1).moveTo(2, 3).lineTo(12, 37).lineTo(27, 3.5).lineTo(2, 3);
        this.triangleShape9.setTransform(292, 150);

        this.addChild(this.RectShape18, this.RectShape19, this.triangleShape7, this.RectShape20, this.instance_1, this.RectShape21,
            this.triangleShape8, this.triangleShape9);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 580);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(303, 67, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
