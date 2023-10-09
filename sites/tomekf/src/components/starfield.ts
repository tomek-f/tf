import type { Nullable } from '../../types/misc';

class Star {
    x: number;
    y: number;
    z: number;
    xPrev: number;
    yPrev: number;

    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.xPrev = x;
        this.yPrev = y;
    }

    update(width: number, height: number, speed: number) {
        this.xPrev = this.x;
        this.yPrev = this.y;
        this.z += speed * 0.0675;
        this.x += this.x * (speed * 0.0225) * this.z;
        this.y += this.y * (speed * 0.0225) * this.z;
        if (
            this.x > width / 2 ||
            this.x < -width / 2 ||
            this.y > height / 2 ||
            this.y < -height / 2
        ) {
            this.x = Math.random() * width - width / 2;
            this.y = Math.random() * height - height / 2;
            this.xPrev = this.x;
            this.yPrev = this.y;
            this.z = 0;
        }
    }

    draw(context: CanvasRenderingContext2D) {
        context.lineWidth = this.z;
        context.beginPath();
        context.moveTo(this.x, this.y);
        context.lineTo(this.xPrev, this.yPrev);
        context.stroke();
    }
}

(() => {
    console.log('Starfield');

    const canvasElement: Nullable<HTMLCanvasElement> =
        document.querySelector('#starfield-canvas');
    const container = document.querySelector('#starfield');

    if (!canvasElement || !container) {
        return;
    }

    const COUNT = 800;
    const SPEED = 0.1;
    let rafId = 0;
    const stars = Array.from({ length: COUNT }, () => new Star(0, 0, 0));
    const context = canvasElement.getContext('2d')!;
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const resizeObserver = new ResizeObserver(setup);

    resizeObserver.observe(container);

    function frame() {
        const { clientWidth: width, clientHeight: height } =
            container as Element;

        if (!context) {
            return;
        }

        for (const star of stars) {
            star.update(width, height, SPEED);
            star.draw(context);
        }

        context.fillRect(-width / 2, -height / 2, width, height);
        rafId = requestAnimationFrame(frame);
    }

    function setup() {
        if (rafId > 0) {
            cancelAnimationFrame(rafId);
        }

        const { clientWidth: width, clientHeight: height } =
            container as Element;

        if (!canvasElement || !context) {
            return;
        }

        const dpr = window.devicePixelRatio || 1;

        canvasElement.width = width * dpr;
        canvasElement.height = height * dpr;
        canvasElement.style.width = `${width}px`;
        canvasElement.style.height = `${height}px`;
        context.scale(dpr, dpr);

        for (const star of stars) {
            star.x = Math.random() * width - width / 2;
            star.y = Math.random() * height - height / 2;
            star.z = 0;
        }

        context.translate(width / 2, height / 2);
        context.fillStyle = 'rgba(0, 0, 0, 0.4)';
        context.strokeStyle = 'white';
        rafId = requestAnimationFrame(frame);
    }
})();
