package mainPackage;

import java.awt.*;

public class Cuboid {
    private Point3D[] vertexes;

    public Cuboid(Point3D[] vertexes) {
        this.vertexes = vertexes;
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

    public Point[] getVertexesConvertedTo2D() {
        Point[] points = new Point[8];

        for(int i = 0; i < 8; i++) {
            points[i] = vertexes[i].convertTo2DAndCenter();
        }

        return points;
    }

    public Point3D[] getVertexes() {
        return vertexes;
    }
}
