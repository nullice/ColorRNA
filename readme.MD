#ColorRNA.js
Color & colorspace converter with Javascript; 


这是一个 Javascript 的色彩、色彩空间转换与计算库。
你可以用它进行各种色彩值的操作。


**【现在还未完成】**

##功能
###转换 RGB 色彩空间
支持以下 RGB 色彩空间之间颜色值的互换 ：Adobe RGB, Apple RGB, Best RGB, Beta RGB, BruceRGB, CIERGB, ColorMatchRGB, ECIRGBv2, DonRGB4, EktaSpacePS5, NTSC RGB, PALSECAM RGB, ProPhotoRGB, SMPTEC RGB, WideGamut RGB。

并且支持白点校正，支持以下白点参考光照：A, B, C, D50, D55, D65, D75, E, F2, F7, F11。


###转换基于 RGB 的色彩模型
支持以下色彩模型的转换：HSL,HSL240(Windows 拾色器), HSL255(MS Office拾色器), HSV（HSB）, HWB, CMY, CMYK。

###转换参考色彩空间
支持以下参考色彩空间的转换：CIE Lab, CIE Luv, CIE XYZ, CIE xyY ,CIE LCHab;
内部色彩使用 CIE XYZ 存储。

###色差与辉度计算
支持以下色差计算方法：DeltaE 1994, DeltaE 2000, DeltaE CMC;
支持以下辉度计算方法：CCIR 601, Rec 709, WCAGluma;
支持 WCAG contrast 对比度计算;

###其他
计算颜色的光谱主波长。


##使用


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

创建后使用可用 `ColorRNA.rgb(r,g,b)` 重新指定颜色，用法和创建时一样。

#### 各种色彩空间
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

和使用 `ColorRNA.rgb(r,g,b)` 一样，还有以上 16 个指定色彩空间颜色值的方法，用法和 `ColorRNA.rgb(r,g,b)`  完全一样。另外 `ColorRNA.rgb (r,g,b)`  与  `ColorRNA.sRGB (r,g,b)` 效果是一样的，`ColorRNA.rgb (r,g,b)` 使用 sRGB 色彩空间。

,










