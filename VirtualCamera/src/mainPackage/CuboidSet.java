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

    public void Translate() {
        //TODO
    }

    public void Rotate() {
        //TODO
    }

    public void Zoom() {
        //TODO
    }

    public List<Cuboid> getCuboids() {
        return cuboids;
    }
}
