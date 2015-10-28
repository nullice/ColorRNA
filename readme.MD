#ColorRNA.js
Color & colorspace converter with Javascript; 


![](https://github.com/nullice/ColorRNA/raw/master/logo/ColorRNA_LOGO_PNG_Word_512.png)

这是一个 Javascript 的色彩、色彩空间转换与计算库。
你可以用它进行各种色彩值的操作。




##1. 功能
####各种色彩空间转换
支持以下色彩空间之间颜色值的互换 ：`sRGB`, `Adobe RGB`, `Apple RGB`, `Best RGB`, `Beta RGB`, `BruceRGB`, `CIERGB`, `ColorMatchRGB`, `ECIRGBv2`, `DonRGB4`, `EktaSpacePS5`, `NTSC RGB`, `PALSECAM RGB`, `ProPhotoRGB`, `SMPTEC RGB`, `WideGamut RGB`, ` CIE Lab`, `CIE Luv`, `CIE XYZ`, `CIE xyY`, `CIE LCHab`。  
内部色彩使用 `CIE XYZ` 存储。

并且支持白点校正与指定伽马参数。支持以下白点参考光照：`A`, `B`, `C`, `D50`, `D55`, `D65`, `D75`, `E`, `F2`, `F7`, `F11`。

####基于 RGB 的色彩模型之间颜色值的互换 ：
支持以下色彩模型的转换：`HSL`, `HSL240` (Windows 拾色器), `HSL255` (MS Office拾色器), `HSV`（HSB）, `HWB`, `CMY`, `CMYK`, `YPbPr`, `JpegYCbCr`, `YCbCr`, `YIQ`, `YUV` 。




####色差与辉度计算
支持以下色差计算方法：`DeltaE 1976`, `DeltaE 1994`, `DeltaE 2000`, `DeltaE CMC`;  
支持以下辉度计算方法：`CCIR 601`, `Rec 709`, `HSP`, `WCAGluma`;  
支持 `WCAG contrast` 对比度计算;  

####其他
计算颜色的光谱主波长。


##2. 使用


```js
var color1 = new ColorRNA();
````

每一个 ColorRNA 对象实例代表一个颜色，ColorRNA 内部使用 CIE XYZ 存储颜色值。


###指定颜色


```js
var color1 = new ColorRNA("#FF0101");  // 16 进制 RGB 色彩值（00~FF）字符串
var color2 = new ColorRNA(255,1,1);  // RGB 色彩值（0~255）参数
var color3 = new ColorRNA([255,1,1]);  // RGB 色彩值（0~255）数组

color1.rgb([10, 20, 107]);
color1.rgb("#2F4101");
color1.rgb(44,21,211);
```

在 ColorRNA 对象实例创建时可用传递参数给它指定颜色，可传递 RGB （默认为 sRGB 色彩空间）值，也可以传递 RGB 值的数组或者 16 进制代码字符串。

创建后可用 `ColorRNA.rgb(r,g,b)` 重新指定颜色，用法和创建时一样。

#### 指定色彩空间中的颜色
```js
//支持的 RGB 色彩空间：
color1.sRGB ([10, 20, 107]);
color1.AdobeRGB (44, 21, 211);
color1.AppleRGB (44, 21, 211);
color1.BestRGB (44, 21, 211);
color1.BetaRGB (44, 21, 211);
color1.BruceRGB (44, 21, 211);
color1.CIERGB (44, 21, 211);
color1.ColorMatchRGB (44, 21, 211);
color1.DonRGB4 (44, 21, 211);
color1.ECIRGBv2 (44, 21, 211);
color1.EktaSpacePS5 (44, 21, 211);
color1.NTSCRGB (44, 21, 211);
color1.PALSECAMRGB (44, 21, 211);
color1.ProPhotoRGB (44, 21, 211);
color1.SMPTECRGB (44, 21, 211);
color1.WideGamutRGB (44, 21, 211);
```

和使用 `ColorRNA.rgb(r,g,b)` 一样，还有以上 16 个指定色彩空间颜色值的方法，用法和 `ColorRNA.rgb(r,g,b)`  完全一样。另外 `ColorRNA.rgb (r,g,b)`  与  `ColorRNA.sRGB (r,g,b)` 效果是一样的，`ColorRNA.rgb (r,g,b)` 使用 `sRGB` 色彩空间。


###返回色彩

```js
var color1 = new ColorRNA(10,235,245);

color1.rgb ()  // [10, 235, 245]
color1.sRGB ()  // [10, 235, 245]
color1.getHex () // #0AEBF5

color1.AdobeRGB ()  // [133, 234, 244]
color1.getHex () // #85EAF4

color1.AppleRGB ()  // [52, 233, 243]
color1.getHex () // #34E9F3

color1.ProPhotoRGB ()  // [154, 218, 239]
color1.getHex () // #9ADAEF

```

像上面这样不指定参数的使用 `ColorRNA.rgb()` 和其他色彩空间方法，会返回 ColorRNA 存储的颜色用相应色彩空间表示的色彩值；另外用  `ColorRNA.getHex ()`  会返回最后一次计算的 RGB 值的 16 进制代码，如果没有计算过则使用 sRGB 色彩空间的 RGB 值。


### 色彩空间转换
```js
var color1 = new ColorRNA();

// 转换色彩空间 sRGB -> AdobeRGB：
color1.sRGB (10, 235, 245);
color1.AdobeRGB (); // [133, 234, 244]

// 转换色彩空间 ProPhotoRGB -> AdobeRGB
color1.ProPhotoRGB (154, 218, 239);
color1.AdobeRGB (); // [133,235,244]

// 转换色彩空间 AppleRGB -> ProPhotoRGB
color1.AppleRGB(52, 233, 243).ProPhotoRGB (); //[154,218,239]

```
通过给 ColorRNA 对象实例指定颜色，再返回颜色就可以进行颜色值色彩空间的转换。为了简洁也可以使用 `color1.AppleRGB(52, 233, 243).ProPhotoRGB ()` 这样的链式语句。


### 参考色彩空间

```js

color1.rgb(52, 233, 243).Lab(); //  [84.7269, -39.5516, -17.4109]
color1.rgb(52, 233, 243).LabPS(); // [84,-42,-18]
color1.rgb(52, 233, 243).LCHab(); // [84.7269,43.2142,203.7594]
color1.rgb(52, 233, 243).Luv(); // [84.7269,-61.2033,-21.7867]
color1.rgb(52, 233, 243).xyY(); // [0.2256,0.3161,0.6547]
color1.rgb(52, 233, 243).XYZ(); // [0.4672539339338757,0.6547307056620336,0.9495155562423543]

color1.xyY(0.2256,0.3161,0.6547).rgb(); //[52,233,243]
```

ColorRNA 除了支持各种 RGB 色彩空间之间的互相转换，还支持 `XYZ`、`xyY`、`XYZ`、`Luv`、`LCHab`、色彩空间的转换，使用方法和 RGB 色彩空间的方法一样，也可以与不同的 RGB 色彩空间互相转换。

值得注意的是 Lab 色彩空间，PhotoShop 中的 Lab 出于历史原因使用的是 `D50` 参考白点而不是通常的 `D65` ，所以想得到  PhotoShop 里的 Lab 值应该使用 `ColorRNA.LabPS()` ，这个方法的计算的结果和 PhotoShop 一致。 

### 基于 RGB 的色彩模型

```js
 color1.rgb (52, 233, 243);
 
 color1.HSB ();  // [183, 79, 95]
 color1.HSL ();  // [183, 89, 58]
 color1.HSL240 ();  // [122, 213, 139]
 color1.HSL255 ();  // [130, 227, 147]
 color1.HWB ();  // [183, 20, 5]
 color1.CMY (); // [80,9,5]
 color1.CMYK (); // [79,4,0,5]
 color1.YUV ();  // [0.7059647058823528, 0.12143921568627458, -0.44045098039215685]
 color1.YIQ ();  // [0.7059647058823528, -0.43544010196078436, -0.1378909254901961]
 color1.YCbCr ();  // [170.60627058823528, 159.2206156862745, 47.78768627450981]
 color1.JpegYCbCr ();  // [0.7059647058823528, 0.6393771749019608, 0.14190933333333333]
 color1.YPbPr ();  // [0.7059647058823528, 0.13937717490196078, -0.35809066666666667]



 color1.HSB(183,79,95).rgb ();  // [51,233,242]
 color1.HSL(183,89,58).rgb ();  // [53,234,243]
 color1.HSL240(122,213,139).rgb ();  // [53,231,243]
 color1.HSL255(130,227,147).rgb ();  // [53,231,243]
 color1.HWB(183,20,5).rgb ();  // [51,233,242]
 color1.CMY(80,9,5).rgb (); // [51,232,242]
 color1.CMYK(79,4,0,5).rgb (); // [51,232,242]
 color1.YUV(0.7059647058823528,0.12143921568627458,-0.44045098039215685).rgb ();  // [52,233,243]
 color1.YIQ(0.7059647058823528,-0.43544010196078436,-0.1378909254901961).rgb ();  // [52,233,243]
 color1.YCbCr(170.60627058823528,159.2206156862745,47.78768627450981).rgb ();  // [52,233,243]
 color1.JpegYCbCr(0.7059647058823528,0.6393771749019608,0.14190933333333333).rgb ();  // [52,233,243]
 color1.YPbPr(0.7059647058823528,0.13937717490196078,-0.35809066666666667).rgb ();  // [52,233,243]
```
除了前面色彩空间之间的转换， ColorRNA  还支持各种基于 RGB 值的色彩模型之间的转换（前面的各种色彩空间基于 `CIE XYZ` 进行转换）。

默认是基于 `sRGB` 色彩空间来计算，比如使用 `color1.HSB(183,79,95)`  将认为这是一个基于 `sRGB` 的 `HSB` 值，并返回一个 `sRGB` 色彩空间的 RGB 值：`[51,233,242]`; 可以在色彩模型方法最后一个参数传递指定的色彩空间如 ：`color1.HSB(183,79,95,"AdobeRGB")`;

另外   
`HSL240` 是 Windows 系统拾色器使用的模型，出现在“画图”和各种使用系统 API 的程序中，它与通常 `HSL` （比如 Photoshop 和 网页标准）取值范围：`0~360, 0~100, 0~100`不同，`HSL240` 的取值范围是： `0~239, 0~240 ,0~240`。

`HSL255` 是微软 Office 中拾色器使用的模型，`HSL255` 的取值范围是： `0~255, 0~255 ,0~255`。

这里的 `CMY`  和 `CMYK` 是单纯基于 RGB 色彩值用补色原理计算的色彩模型，与 PhotoShop 中基于 `CIE XYZ` 的各种 CMYK 色彩空间并不相同 。

### 其他色彩信息计算

#### 主波长
```js
color1.rgb(255, 255, 0).getWavelength() //  570.4668 (nm)
```

#### 辉度
```js
color1.rgb(112, 255, 0);
color1.getLuma(); // 0.8085772549019608
color1.getLuma("709"); // 0.8085772549019608
color1.getLuma("601"); // 0.7183254901960784
color1.getLuma("HSP"); // 0.8587732011397251
color1.getWCAGluma(); // 0.7496474452608749

```
`ColorRNA.getLuma()` 方法能得到颜色的辉度，也就是视觉亮度，可用 `CCIR 601`, `Rec 709`, `HSP`, 三种计算方法，如果不在参数中指定计算方法，默认使用 `Rec 709` 计算;。

`ColorRNA.getWCAGluma()`  是互联网无障碍标准中的视觉亮度计算方法。

#### 色差与对比度计算

```js
color1.rgb(123, 124, 21);
color2.rgb(44, 22, 33);

 color1.diff_DE1976_Than(color2); // 71.42
 color2.diff_DE1976_Than(color1); // 71.42
 color1.diff_DE1994_GraphicArts_Than(color2); // 48.35
 color2.diff_DE1994_GraphicArts_Than(color1); // 59.65
 color1.diff_DE1994_Textiles_Than(color2); // 34.46
 color2.diff_DE1994_Textiles_Than(color1); // 48.83
 color1.diff_DE2000_Than(color2); // 48.63
 color2.diff_DE2000_Than(color1); // 48.63
 color1.diff_ECMC11_Than(color2); // 47.01
 color2.diff_ECMC11_Than(color1); // 93.92
 color1.diff_ECMC11_Than(color2); // 47.01
 color2.diff_ECMC11_Than(color1); // 93.92
 color1.diff_ECMC21_Than(color2); // 34.96
 color2.diff_ECMC21_Than(color1); // 65.67
 color1.getWCAGcontrastThan(color2); // 3.8076911332106675
 color2.getWCAGcontrastThan(color1); // 3.8076911332106675

```
可用使用
`ColorRNA.diff_DE1976_Than()`、`ColorRNA.diff_DE1994_GraphicArts_Than()`、`ColorRNA.diff_DE1994_Textiles_Than()`、`ColorRNA.diff_DE2000_Than()`、`ColorRNA.diff_ECMC11_Than()`、`ColorRNA.diff_ECMC21_Than()` 这些计算方法得到一个颜色相对于另一个颜色的色差 ，注意颜色有前景背景之分，顺序不同结果可能会不一样。

`ColorRNA.getWCAGcontrastThan()` 可用得到互联网无障碍标准中一个颜色相对于另一个颜色的的对比度，其结果取值范围： `0~21`。 


##高级功能

###指定参考白点

```js
color1.setRefWhite("A");
color1.setRefWhite("B");
color1.setRefWhite("C");
color1.setRefWhite("D50");
color1.setRefWhite("D55");
color1.setRefWhite("D65");
color1.setRefWhite("D75");
color1.setRefWhite("E");
color1.setRefWhite("F2");
color1.setRefWhite("F7");
color1.setRefWhite("F11");

```

`ColorRNA.setRefWhite()` , ` ColorRNA.getRefWhite()` 可用分别用来设置和返回的参考白点参数，这会对色彩空间转换有影响。


