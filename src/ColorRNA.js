/**
 * Created by 语冰 on 2015/9/22.
 */






function colorRNA()
{


    console.log(typeof arguments[0])

//---in RGB-----------------------
    if (arguments.length == 3)
    {
        this.colorType = "RGB"

        if (typeof arguments[0] == "number")
        {
            this.r = arguments[0];
        }

        if (typeof arguments[1] == "number")
        {
            this.g = arguments[1];
        }

        if (typeof arguments[2] == "number")
        {
            this.b = arguments[2];
        }
    }
//---XYZ


//---原型函数-----------------------

    //取 RGB 值，如：#ffffff
    colorRNA.prototype.RGBstring = function ()
    {
        return "#" + this.r.toString(16) + this.g.toString(16) + this.b.toString(16)
    }


    colorRNA.prototype._arrayProduct = function (inArray, inArray2)
    {
        var sum = 0;
        for (var z = 0; z < inArray.length; z++)
        {
            sum += inArray[z] * inArray2[z];
        }

        return sum;
    }


    //把一个数 inNumber 归一化；inMax,inMin 为原最大最小区间，newMax 为新最大值；如果只有一个参数将按[0,255] 归一化到 [0,1]
    colorRNA.prototype._normaliz = function (inNumber, inMin, inMax, newMax)
    {
        var newNumber = 0;

        if (arguments.length == 4)
        {
            newNumber = (inNumber - inMin) / (inMax - inMin);
            newNumber = newNumber * newMax;
        }
        else
        {
            newNumber = arguments[0] / 255;
        }

        return newNumber;
    }

    //对已经归一化的 RGB 值进行  Gamma 2.2 的变换，
    colorRNA.prototype._enGamma22 = function (rgb)
    {
        var newRGB = 0;

        if (rgb <= 0.0031306684425005883)
        {
            newRGB = rgb * 12.92;
        }
        else
        {
            newRGB = 1.055 * Math.pow(rgb, 0.416666666666666667) - 0.055 //0.416666666666666667 = 1/2.4;
        }
        return newRGB;

    }

    //让经过 Gamma 2.2 的变换 RGB 归一化值还原
    colorRNA.prototype._deGamma22 = function (rgb)
    {
        var newRGB = 0;

        if (rgb <= 0.0404482362771076)
        {
            newRGB = rgb / 12.92
        }
        else
        {
            newRGB = Math.pow((rgb + 0.055) / 1.055, 2.4)
        }
        return newRGB;

    }


    colorRNA.prototype.sRGB_to_XYZ = function ()
    {
        var x, y, z;
        var rgbs =
            [
                this._enGamma22(this._normaliz(this.r)),
                this._enGamma22(this._normaliz(this.g)),
                this._enGamma22(this._normaliz(this.b))
            ];


        var nucleotids = [[0.4124564, 0.3575761, 0.1804375], [0.2126729, 0.7151522, 0.0721750], [0.0193339, 0.1191920, 0.9503041]];
        //低精度： [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]];

        x = this._arrayProduct(rgbs, nucleotids[0]);
        y = this._arrayProduct(rgbs, nucleotids[1]);
        z = this._arrayProduct(rgbs, nucleotids[2]);


        console.log([x,y,z]);
    }


}

var test_color


test_color = new colorRNA(213, 113, 90);


console.log(test_color.RGBstring());
console.log("====================");
console.log(test_color.sRGB_to_XYZ());


document.getElementById("color").style.background = test_color.RGBstring();
document.getElementById("color").style.color = test_color.RGBstring();
document.getElementById("color").style.fontSize = "32pt";




