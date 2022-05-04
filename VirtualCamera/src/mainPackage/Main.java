package mainPackage;

import java.awt.*;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

public class Main {
    private static CuboidSet cuboidSet;

    public static void main(String[] args) {
        cuboidSet = new CuboidReader().readCuboidsFromTextFile("");

        Canvas mainCanvas = new Canvas() {
            {
                this.setBackground(Color.BLACK);
                this.setSize(800, 600);
            }

            @Override
            public void paint(Graphics g) {
                g.setColor(Color.white);

                for (Cuboid c : cuboidSet.getCuboids()) {
                    Point[] points = c.getVertexesConvertedTo2D();

                    g.drawLine(points[0].x, points[0].y, points[1].x, points[1].y);
                    g.drawLine(points[1].x, points[1].y, points[2].x, points[2].y);
                    g.drawLine(points[2].x, points[2].y, points[3].x, points[3].y);
                    g.drawLine(points[3].x, points[3].y, points[0].x, points[0].y);

                    g.drawLine(points[4].x, points[4].y, points[5].x, points[5].y);
                    g.drawLine(points[5].x, points[5].y, points[6].x, points[6].y);
                    g.drawLine(points[6].x, points[6].y, points[7].x, points[7].y);
                    g.drawLine(points[7].x, points[7].y, points[4].x, points[4].y);

                    g.drawLine(points[0].x, points[0].y, points[4].x, points[4].y);
                    g.drawLine(points[1].x, points[1].y, points[5].x, points[5].y);
                    g.drawLine(points[2].x, points[2].y, points[6].x, points[6].y);
                    g.drawLine(points[3].x, points[3].y, points[7].x, points[7].y);
                }
            }
        };

        Frame frame = new Frame();
        frame.setSize(Config.DISPLAY_WIDTH, Config.DISPLAY_HEIGHT);
        frame.addWindowListener(new WindowAdapter() {
            @Override
            public void windowClosing(WindowEvent e) {
                frame.dispose();
            }
        });

        frame.addKeyListener(new KeyListener() {
            @Override
            public void keyTyped(KeyEvent e) {
            }

            @Override
            public void keyPressed(KeyEvent e) {
                switch (e.getKeyCode()) {
                    case KeyEvent.VK_W -> cuboidSet.translate(0, 10, 0);
                    case KeyEvent.VK_A -> cuboidSet.translate(10, 0, 0);
                    case KeyEvent.VK_S -> cuboidSet.translate(0, -10, 0);
                    case KeyEvent.VK_D -> cuboidSet.translate(-10, 0, 0);
                    case KeyEvent.VK_Q -> cuboidSet.translate(0, 0, 10);
                    case KeyEvent.VK_E -> cuboidSet.translate(0, 0, -10);
                }

                mainCanvas.repaint();
            }

            @Override
            public void keyReleased(KeyEvent e) {
            }
        });

        frame.add(mainCanvas);
        frame.setVisible(true);
    }
}
