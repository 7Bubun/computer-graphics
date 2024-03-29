package mainPackage;

import java.awt.Point;

public class Cuboid {
    private final Point3D[] vertexes;

    public Cuboid(Point3D[] vertexes) {
        this.vertexes = vertexes;
    }

    public void translate(int tx, int ty, int tz) {
        for (Point3D v : vertexes) {
            v.translate(tx, ty, tz);
        }
    }

    public void rotateX(double angle) {
        for (Point3D v : vertexes) {
            v.rotateX(angle);
        }
    }

    public void rotateY(double angle) {
        for (Point3D v : vertexes) {
            v.rotateY(angle);
        }
    }

    public void rotateZ(double angle) {
        for (Point3D v : vertexes) {
            v.rotateZ(angle);
        }
    }

    public void zoom(int zoomValue) {
        for (Point3D v : vertexes) {
            v.zoom(zoomValue);
        }
    }

    public Point[] getVertexesConvertedTo2D() {
        Point[] points = new Point[8];

        for (int i = 0; i < 8; i++) {
            points[i] = vertexes[i].convertTo2DAndCenter();
        }

        return points;
    }
}
