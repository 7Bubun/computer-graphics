package mainPackage;


public class CuboidReader {

    public CuboidSet readCuboidsFromTextFile(String path) {
        //TODO: replace mock with reading from text file
        CuboidSet cuboidSet = new CuboidSet();
        Cuboid cuboid = new Cuboid(new Point3D[]{
                new Point3D(-400, 200, 150),
                new Point3D(-200, 200, 150),
                new Point3D(-200, 200, 200),
                new Point3D(-400, 200, 200),
                new Point3D(-400, -300, 150),
                new Point3D(-200, -300, 150),
                new Point3D(-200, -300, 200),
                new Point3D(-400, -300, 200),
        });

        cuboidSet.addCuboid(cuboid);

        cuboid = new Cuboid(new Point3D[]{
                new Point3D(-400, 200, 250),
                new Point3D(-200, 200, 250),
                new Point3D(-200, 200, 300),
                new Point3D(-400, 200, 300),
                new Point3D(-400, -300, 250),
                new Point3D(-200, -300, 250),
                new Point3D(-200, -300, 300),
                new Point3D(-400, -300, 300),
        });

        cuboidSet.addCuboid(cuboid);

        cuboid = new Cuboid(new Point3D[]{
                new Point3D(250, 200, 150),
                new Point3D(350, 200, 150),
                new Point3D(350, 200, 300),
                new Point3D(250, 200, 300),
                new Point3D(250, -300, 150),
                new Point3D(350, -300, 150),
                new Point3D(350, -300, 300),
                new Point3D(250, -300, 300),
        });

        cuboidSet.addCuboid(cuboid);

        cuboid = new Cuboid(new Point3D[]{
                new Point3D(250, 200, 320),
                new Point3D(300, 200, 320),
                new Point3D(300, 200, 350),
                new Point3D(250, 200, 350),
                new Point3D(250, -100, 320),
                new Point3D(300, -100, 320),
                new Point3D(300, -100, 350),
                new Point3D(250, -100, 350),
        });

        cuboidSet.addCuboid(cuboid);
        return cuboidSet;
    }
}
