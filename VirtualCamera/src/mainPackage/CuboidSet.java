package mainPackage;

import java.util.ArrayList;
import java.util.List;

public class CuboidSet {
    private List<Cuboid> cuboids;

    public CuboidSet() {
        cuboids = new ArrayList<>();
    }

    public void addCuboid(Cuboid c) {
        cuboids.add(c);
    }

    public void translate(int tx, int ty, int tz) {
        for (Cuboid c : cuboids) {
            c.translate(tx, ty, tz);
        }
    }

    public void Rotate() {
        //TODO
    }

    public void zoom(int zoomValue) {
        for (Cuboid c : cuboids) {
            c.zoom(zoomValue);
        }
    }

    public List<Cuboid> getCuboids() {
        return cuboids;
    }
}
