package mainPackage;


import java.awt.Point;

public class Point3D {
    private int d;
    private int x;
    private int y;
    private int z;

    public Point3D(int x, int y, int z) {
        this.d = 400;
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public Point convertTo2DAndCenter() {
        return new Point((x * d) / z + Config.DISPLAY_WIDTH / 2,
                (y * d) / z + Config.DISPLAY_HEIGHT / 2);
    }

    public void translate(int tx, int ty, int tz) {
        x += tx;
        y += ty;
        z += tz;
    }

    public void rotateX(double angle) {
        int oldY = y;

        y = (int) Math.round(y * Math.cos(angle) - z * Math.sin(angle));
        z = (int) Math.round(oldY * Math.sin(angle) + z * Math.cos(angle));
    }

    public void rotateY(double angle) {
        int oldX = x;

        x = (int) Math.round(x * Math.cos(angle) + z * Math.sin(angle));
        z = (int) Math.round(-oldX * Math.sin(angle) + z * Math.cos(angle));
    }

    public void rotateZ(double angle) {
        int oldX = x;

        x = (int) Math.round(x * Math.cos(angle) - y * Math.sin(angle));
        y = (int) Math.round(oldX * Math.sin(angle) + y * Math.cos(angle));
    }

    public void zoom(int zoomValue) {
        d += zoomValue;
    }
}
