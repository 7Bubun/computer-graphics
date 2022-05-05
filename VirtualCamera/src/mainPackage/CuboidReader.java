package mainPackage;


public class CuboidReader {

    public CuboidSet readCuboidsFromTextFile(String path) {
        //TODO: replace mock with reading from text file
        CuboidSet cuboidSet = new CuboidSet();
        Cuboid cuboid = new Cuboid(new Point3D[]{
                new Point3D(-200, 100, 250),
                new Point3D(-100, 100, 250),
                new Point3D(-100, 100, 300),
                new Point3D(-200, 100, 300),
                new Point3D(-200, -200, 250),
                new Point3D(-100, -200, 250),
                new Point3D(-100, -200, 300),
                new Point3D(-200, -200, 300),
        });

        cuboidSet.addCuboid(cuboid);

        cuboid = new Cuboid(new Point3D[]{
                new Point3D(-200, 100, 350),
                new Point3D(-100, 100, 350),
                new Point3D(-100, 100, 400),
                new Point3D(-200, 100, 400),
                new Point3D(-200, -200, 350),
                new Point3D(-100, -200, 350),
                new Point3D(-100, -200, 400),
                new Point3D(-200, -200, 400),
        });

        cuboidSet.addCuboid(cuboid);

        cuboid = new Cuboid(new Point3D[]{
                new Point3D(150, 100, 250),
                new Point3D(250, 100, 250),
                new Point3D(250, 100, 400),
                new Point3D(150, 100, 400),
                new Point3D(150, -200, 250),
                new Point3D(250, -200, 250),
                new Point3D(250, -200, 400),
                new Point3D(150, -200, 400),
        });

        cuboidSet.addCuboid(cuboid);

        cuboid = new Cuboid(new Point3D[]{
                new Point3D(150, 100, 420),
                new Point3D(200, 100, 420),
                new Point3D(200, 100, 450),
                new Point3D(150, 100, 450),
                new Point3D(150, -50, 420),
                new Point3D(200, -50, 420),
                new Point3D(200, -50, 450),
                new Point3D(150, -50, 450),
        });

        cuboidSet.addCuboid(cuboid);
        return cuboidSet;
    }
}
