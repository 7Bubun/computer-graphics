package mainPackage;


import java.io.BufferedReader;

import java.io.FileNotFoundException;
import java.io.FileReader;


public class CuboidReader {

    public CuboidSet readCuboidsFromTextFile(String path) {
        CuboidSet cuboidSet = new CuboidSet();

        try {
            BufferedReader reader = new BufferedReader(new FileReader(path));

            reader.lines().forEach(line -> {
                Point3D[] points = new Point3D[8];
                String[] coordStrings = line.split(";");

                for (int i = 0; i < 8; i++) {
                    String[] singleCoordString = coordStrings[i].split(",");
                    int x = Integer.parseInt(singleCoordString[0].replace(" ", ""));
                    int y = Integer.parseInt(singleCoordString[1].replace(" ", ""));
                    int z = Integer.parseInt(singleCoordString[2].replace(" ", ""));
                    points[i] = new Point3D(x, y, z);
                }

                cuboidSet.addCuboid(new Cuboid(points));
            });

        } catch (FileNotFoundException e) {
            System.out.println("Błąd wczytywania danych");
        }

        return cuboidSet;
    }
}
