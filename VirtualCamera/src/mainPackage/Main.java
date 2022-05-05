package mainPackage;

import java.awt.*;
import java.awt.event.*;

public class Main {

    private static class MainCanvas extends Canvas {
        MainCanvas() {
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
    }

    private static CuboidSet cuboidSet;

    public static void main(String[] args) {
        cuboidSet = new CuboidReader().readCuboidsFromTextFile("data.txt");
        Canvas mainCanvas = new MainCanvas();
        Frame frame = new Frame();

        frame.setSize(Config.DISPLAY_WIDTH, Config.DISPLAY_HEIGHT);

        frame.addKeyListener(new KeyListener() {
            @Override
            public void keyTyped(KeyEvent e) {
            }

            @Override
            public void keyPressed(KeyEvent e) {
                switch (e.getKeyCode()) {
                    case KeyEvent.VK_W -> cuboidSet.translate(0, Config.TRANSLATION_STEP, 0);
                    case KeyEvent.VK_A -> cuboidSet.translate(Config.TRANSLATION_STEP, 0, 0);
                    case KeyEvent.VK_S -> cuboidSet.translate(0, -Config.TRANSLATION_STEP, 0);
                    case KeyEvent.VK_D -> cuboidSet.translate(-Config.TRANSLATION_STEP, 0, 0);
                    case KeyEvent.VK_Q -> cuboidSet.translate(0, 0, Config.TRANSLATION_STEP);
                    case KeyEvent.VK_E -> cuboidSet.translate(0, 0, -Config.TRANSLATION_STEP);
                    case KeyEvent.VK_Z -> cuboidSet.zoom(Config.ZOOM_STEP);
                    case KeyEvent.VK_X -> cuboidSet.zoom(-Config.ZOOM_STEP);
                    case KeyEvent.VK_UP -> cuboidSet.rotateX(-Config.ROTATE_STEP);
                    case KeyEvent.VK_DOWN -> cuboidSet.rotateX(Config.ROTATE_STEP);
                    case KeyEvent.VK_LEFT -> cuboidSet.rotateY(Config.ROTATE_STEP);
                    case KeyEvent.VK_RIGHT -> cuboidSet.rotateY(-Config.ROTATE_STEP);
                    case KeyEvent.VK_C -> cuboidSet.rotateZ(-Config.ROTATE_STEP);
                    case KeyEvent.VK_V -> cuboidSet.rotateZ(Config.ROTATE_STEP);
                }

                mainCanvas.repaint();
            }

            @Override
            public void keyReleased(KeyEvent e) {
            }
        });

        frame.addWindowListener(new WindowAdapter() {
            @Override
            public void windowClosing(WindowEvent e) {
                frame.dispose();
            }
        });

        frame.add(mainCanvas);
        frame.setTitle("Wirtualna Kamera");
        frame.setVisible(true);
    }
}
