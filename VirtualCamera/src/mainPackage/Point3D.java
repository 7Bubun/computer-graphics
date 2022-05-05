package mainPackage;


import java.awt.Point;

public class Point3D {
    private int d;
    private double x;
    private double y;
    private double z;

    public Point3D(int x, int y, int z) {
        this.d = 400;
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public Point convertTo2DAndCenter() {
        return new Point(
                (int) Math.round((x * d) / z + (double) Config.DISPLAY_WIDTH / 2),
                (int) Math.round((y * d) / z + (double) Config.DISPLAY_HEIGHT / 2)
        );
    }

    public void translate(int tx, int ty, int tz) {
        x += tx;
        y += ty;
        z += tz;
    }

    public void rotateX(double angle) {
        double oldY = y;

        y = y * Math.cos(angle) - z * Math.sin(angle);
        z = oldY * Math.sin(angle) + z * Math.cos(angle);
    }

    public void rotateY(double angle) {
        double oldX = x;

        x = x * Math.cos(angle) + z * Math.sin(angle);
        z = -oldX * Math.sin(angle) + z * Math.cos(angle);
    }

    public void rotateZ(double angle) {
        double oldX = x;

        x = x * Math.cos(angle) - y * Math.sin(angle);
        y = oldX * Math.sin(angle) + y * Math.cos(angle);
    }

    public void zoom(int zoomValue) {
        d += zoomValue;
    }
}
