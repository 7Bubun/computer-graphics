package mainPackage;


import java.awt.Point;

public class Point3D {
    private final static int D = 30;
    private int x;
    private int y;
    private int z;

    public Point3D(int x, int y, int z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public Point convertTo2DAndCenter() {
        return new Point((x * D) / (z + D) + Config.DISPLAY_WIDTH / 2,
                (y * D) / (z + D) + Config.DISPLAY_HEIGHT / 2);
    }

    public void Translate() {
        //TODO
    }

    public void Rotate() {
        //TODO
    }

    public void Zoom() {
        //TODO
    }
}
