package mainPackage;


public class CuboidReader {

    public CuboidSet readCuboidsFromTextFile(String path) {
        //TODO: replace mock with reading from text file
        CuboidSet cuboidSet = new CuboidSet();
        Cuboid cuboid = new Cuboid(new Point3D[]{
                new Point3D(-200, 100, 150),
                new Point3D(-100, 100, 150),
                new Point3D(-100, 100, 200),
                new Point3D(-200, 100, 200),
                new Point3D(-200, -200, 150),
                new Point3D(-100, -200, 150),
                new Point3D(-100, -200, 200),
                new Point3D(-200, -200, 200),
        });

        cuboidSet.addCuboid(cuboid);

        cuboid = new Cuboid(new Point3D[]{
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
                new Point3D(150, 100, 150),
                new Point3D(250, 100, 150),
                new Point3D(250, 100, 300),
                new Point3D(150, 100, 300),
                new Point3D(150, -200, 150),
                new Point3D(250, -200, 150),
                new Point3D(250, -200, 300),
                new Point3D(150, -200, 300),
        });

        cuboidSet.addCuboid(cuboid);

        cuboid = new Cuboid(new Point3D[]{
                new Point3D(150, 100, 320),
                new Point3D(200, 100, 320),
                new Point3D(200, 100, 350),
                new Point3D(150, 100, 350),
                new Point3D(150, -50, 320),
                new Point3D(200, -50, 320),
                new Point3D(200, -50, 350),
                new Point3D(150, -50, 350),
        });

        cuboidSet.addCuboid(cuboid);
        return cuboidSet;
    }
}
