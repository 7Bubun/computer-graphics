package mainPackage;


import java.awt.Point;

public class Point3D {
    private final static int D = 100;
    private int x;
    private int y;
    private int z;

    public Point3D(int x, int y, int z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public Point convertTo2DAndCenter() {
        return new Point((x * D) / z + Config.DISPLAY_WIDTH / 2,
                (y * D) / z + Config.DISPLAY_HEIGHT / 2);
    }

    public void translate(int tx, int ty, int tz) {
        x += tx;
        y += ty;
        z += tz;
    }

    public void rotate() {
        //TODO
    }

    public void zoom() {
        //TODO
    }
}
