import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ManhattanGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();

    // Slightly angled camera — not perfectly top-down, gives 3D depth
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 14, 7);
    camera.lookAt(0, 0, 0);

    // Manhattan's grid is tilted ~29 degrees from true north
    const grid = new THREE.Group();
    grid.rotation.y = 0.5;

    const ACCENT = 0xf97316; // J train orange
    const DIM = 0x3d1a05;

    // Avenues — N/S, wider spacing (~12 blocks worth)
    for (let i = -8; i <= 8; i++) {
      const major = i % 3 === 0;
      const mat = new THREE.LineBasicMaterial({
        color: major ? ACCENT : DIM,
        opacity: major ? 0.55 : 0.12,
        transparent: true,
      });
      const pts = [
        new THREE.Vector3(i * 1.2, 0, -22),
        new THREE.Vector3(i * 1.2, 0, 22),
      ];
      grid.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat));
    }

    // Streets — E/W, tighter spacing (~60 blocks worth)
    for (let i = -50; i <= 50; i++) {
      const major = i % 10 === 0;
      const mat = new THREE.LineBasicMaterial({
        color: major ? ACCENT : DIM,
        opacity: major ? 0.45 : 0.07,
        transparent: true,
      });
      const pts = [
        new THREE.Vector3(-12, 0, i * 0.42),
        new THREE.Vector3(12, 0, i * 0.42),
      ];
      grid.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat));
    }

    scene.add(grid);

    // Subtle fog so lines fade at edges
    scene.fog = new THREE.FogExp2(0x0d0d0d, 0.04);

    let raf: number;
    let t = 0;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      t += 0.005;
      // Very slow rotation — one full revolution ~21 minutes
      grid.rotation.z += 0.00035;
      // Gentle camera drift for depth
      camera.position.y = 14 + Math.sin(t * 0.25) * 0.4;
      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
