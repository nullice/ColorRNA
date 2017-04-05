/**
 * Created by ��� on 2015/10/12.
 */

//==============================================================================================
console.log("---------TEST---------");
var color1 = new ColorRNA(10, 235, 245);
var color2 = new ColorRNA(10, 235, 245);

//console.log(color1.getHex());
console.log("RGB:" + color1.rgb());
console.log("sRGB:" + color1.sRGB());
console.log(color1.getHex());
console.log("AdobeRGB:" + color1.AdobeRGB());
console.log(color1.getHex());
console.log("AppleRGB:" + color1.AppleRGB());
console.log(color1.getHex());
console.log("ProPhotoRGB:" + color1.ProPhotoRGB());
console.log(color1.getHex());


// ת��ɫ�ʿռ� sRGB -> AdobeRGB��
color1.sRGB(10, 235, 245);
color1.AdobeRGB(); // [133, 234, 244]

// ת��ɫ�ʿռ� ProPhotoRGB -> AdobeRGB
color1.ProPhotoRGB(154, 218, 239);
console.log("ProPhotoRGB -> sRGB:" + color1.AdobeRGB()); // [10, 235, 245]

// ת��ɫ�ʿռ� AppleRGB -> ProPhotoRGB
console.log("AppleRGB -> ProPhotoRGB:" + color1.AppleRGB(52, 233, 243).ProPhotoRGB());

console.log("------------------------------------------------------------------------------");

console.log("Lab:" + color1.rgb(52, 233, 243).Lab());
console.log("LabPs:" + color1.rgb(52, 233, 243).LabPS());
console.log("LCHab:" + color1.rgb(52, 233, 243).LCHab());
console.log("Luv:" + color1.rgb(52, 233, 243).Luv());
console.log("xyY:" + color1.rgb(52, 233, 243).xyY());
console.log("XYZ:" + color1.rgb(52, 233, 243).XYZ());

console.log("----");


console.log("Lab_to_rgb:" + color1.Lab(84.7269, -39.5516, -17.4109).rgb());
console.log("LabPs_to_rgb:" + color1.LabPS(84, -42, -18).rgb());
console.log("LCHab_to_rgb:" + color1.LCHab(84.7269, 43.2142, 203.7594).rgb());
console.log("xyY_to_rgb:" + color1.xyY(0.2256, 0.3161, 0.6547).rgb());
console.log("Luv_to_rgb:" + color1.Luv(84.7269, -61.2033, -21.7867).rgb());
console.log("XYZ_to_rgb:" + color1.XYZ(0.4672539339338757, 0.6547307056620336, 0.9495155562423543).rgb());

console.log("----");

console.log("HSB:" + color1.rgb(52, 233, 243).HSB());
console.log("HSL:" + color1.rgb(52, 233, 243).HSL());
console.log("HSL240:" + color1.rgb(52, 233, 243).HSL240());
console.log("HSL255:" + color1.rgb(52, 233, 243).HSL255());
console.log("HWB:" + color1.rgb(52, 233, 243).HWB());
console.log("YUV:" + color1.rgb(52, 233, 243).YUV());
console.log("YIQ:" + color1.rgb(52, 233, 243).YIQ());
console.log("YCbCr:" + color1.rgb(52, 233, 243).YCbCr());
console.log("JpegYCbCr:" + color1.rgb(52, 233, 243).JpegYCbCr());
console.log("YPbPr:" + color1.rgb(52, 233, 243).YPbPr());
console.log("CMY:" + color1.rgb(52, 233, 243).CMY());
console.log("CMYK:" + color1.rgb(52, 233, 243).CMYK());

console.log("----");

console.log("HSB:" + color1.HSB(183, 79, 95).rgb());
console.log("HSL:" + color1.HSL(183, 89, 58).rgb());
console.log("HSL240:" + color1.HSL240(122, 213, 139).rgb());
console.log("HSL255:" + color1.HSL255(130, 227, 147).rgb());
console.log("HWB:" + color1.HWB(183, 20, 5).rgb());
console.log("YUV:" + color1.YUV(0.7059647058823528, 0.12143921568627458, -0.44045098039215685).rgb());
console.log("YIQ:" + color1.YIQ(0.7059647058823528, -0.43544010196078436, -0.1378909254901961).rgb());
console.log("YCbCr:" + color1.YCbCr(170.60627058823528, 159.2206156862745, 47.78768627450981).rgb());
console.log("JpegYCbCr:" + color1.JpegYCbCr(0.7059647058823528, 0.6393771749019608, 0.14190933333333333).rgb());
console.log("YPbPr:" + color1.YPbPr(0.7059647058823528, 0.13937717490196078, -0.35809066666666667).rgb());
console.log("CMY:" + color1.CMY(80,9,5).rgb());
console.log("CMYK:" + color1.CMYK(79,4,0,5).rgb());

console.log("----");


console.log("getWavelength:" + color1.rgb(255, 255, 0).getWavelength() +"nm");
console.log("getWavelength:" + color1.rgb(0, 222, 255).getWavelength() +"nm");

color1.rgb(112, 255, 0);
console.log("getLumi:" + color1.getLuma());
console.log("getLumi709:" + color1.getLuma("709"));
console.log("getLumi601:" + color1.getLuma("601"));
console.log("getLumiHSP:" + color1.getLuma("HSP"));
console.log("getWCAGluma:" + color1.getWCAGluma());
console.log("getWCAGluma:" + color1.getWCAGluma());


color1.rgb(123, 124, 21);
color2.rgb(44, 22, 33);

console.log("color1.diff_DE1976_Than(color2):" + color1.diff_DE1976_Than(color2));
console.log("color2.diff_DE1976_Than(color1):" + color2.diff_DE1976_Than(color1));

console.log("color1.diff_DE1994_GraphicArts_Than(color2):" + color1.diff_DE1994_GraphicArts_Than(color2));
console.log("color2.diff_DE1994_GraphicArts_Than(color1):" + color2.diff_DE1994_GraphicArts_Than(color1));

console.log("color1.diff_DE1994_Textiles_Than(color2):" + color1.diff_DE1994_Textiles_Than(color2));
console.log("color2.diff_DE1994_Textiles_Than(color1):" + color2.diff_DE1994_Textiles_Than(color1));

console.log("color1.diff_DE2000_Than(color2):" + color1.diff_DE2000_Than(color2));
console.log("color2.diff_DE2000_Than(color1):" + color2.diff_DE2000_Than(color1));

console.log("color1.diff_ECMC11_Than(color2):" + color1.diff_ECMC11_Than(color2));
console.log("color2.diff_ECMC11_Than(color1):" + color2.diff_ECMC11_Than(color1));

console.log("color1.diff_ECMC11_Than(color2):" + color1.diff_ECMC11_Than(color2));
console.log("color2.diff_ECMC11_Than(color1):" + color2.diff_ECMC11_Than(color1));

console.log("color1.diff_ECMC21_Than(color2):" + color1.diff_ECMC21_Than(color2));
console.log("color2.diff_ECMC21_Than(color1):" + color2.diff_ECMC21_Than(color1));

console.log("color1.getWCAGcontrastThan(color2):" + color1.getWCAGcontrastThan(color2));
console.log("color2.getWCAGcontrastThan(color1):" + color2.getWCAGcontrastThan(color1));



//color1.rgb(10, 20, 17);
//
//
//console.time("����");
//
//var test_color = new ColorRNA(rr, gg, bb);
//for (var rr = 0; rr < 256; rr++)
//{
//    for (var gg = 0; gg < 256; gg++)
//    {
//        for (var bb = 0; bb < 256; bb++)
//        {
//            count++;
//
//            color2.rgb(rr, gg, bb);
//            color2.AppleRGB(color2.AppleRGB());
//
//            rgb = color2.rgb();
//
//            if (count % 1000000 == 0)
//            {
//                console.log(count);
//            }
//
//            if (rgb[0] != rr && rgb[1] != gg && rgb[2] != bb)
//            {
//                console.log("E>>>" + rgb + ":" + [rr, gg, bb]);
//            }
//        }
//
//    }
//}
//console.timeEnd("����");
//console.log(count);
