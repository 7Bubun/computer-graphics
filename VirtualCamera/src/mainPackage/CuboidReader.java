package mainPackage;


public class CuboidReader {

    public CuboidSet readCuboidsFromTextFile(String path) {
        //TODO: replace mock with reading from text file
        CuboidSet cuboidSet = new CuboidSet();
        Cuboid cuboid = new Cuboid(new Point3D[]{
                new Point3D(-300, 50, 50),
                new Point3D(-200, 50, 50),
                new Point3D(-200, 50, 100),
                new Point3D(-300, 50, 100),
                new Point3D(-300, -200, 50),
                new Point3D(-200, -200, 50),
                new Point3D(-200, -200, 100),
                new Point3D(-300, -200, 100),
        });

        cuboidSet.addCuboid(cuboid);
        return cuboidSet;
    }
}
