export default class Bezier {
    constructor(canvas, param) {
        this.canvas = canvas;
        this.param = param;
        this.height = canvas.height;
        this.width = canvas.width;
        this.init();
    }

    init() {
        let { height, width } = this.canvas;
        let originCoordinate = this.normalization2Origin(this.param);
        this.finalPara = this.getFinalPara(originCoordinate);
    }

    // 返回第二个点和第三个点的坐标
    normalization2Origin(param) {
        return {
            second: {
                x: param[0] * this.width,
                y: (1 - param[1]) * this.height
            },
            third: {
                x: param[2] * this.width,
                y: (1 - param[3]) * this.height
            }
        }
    }

    // 返回传给bezierCurveTo和moveTo的参数
    getFinalPara(p) {
        return {
            moveto: [0, this.height],
            bezierCurveTo: [p.second.x, p.second.y, p.third.x, p.third.y, this.width, 0]
        }
    }

    draw() {
        let ctx = this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(...this.finalPara.moveto);
        ctx.bezierCurveTo(...this.finalPara.bezierCurveTo);
        ctx.stroke();
    }
}
