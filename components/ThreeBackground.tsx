"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const mount = mountRef.current;
    const W = window.innerWidth;
    const H = window.innerHeight;

    // ── Renderer ──────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Scene / Camera ────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000);
    camera.position.set(0, 0, 18);

    // ── Particle Field ────────────────────────────────────────────────────────
    const PARTICLE_COUNT = 1800;
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);

    const colorA = new THREE.Color("#4F46FF"); // indigo
    const colorB = new THREE.Color("#8B85FF"); // soft violet
    const colorC = new THREE.Color("#6366f1"); // mid

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;

      const t = Math.random();
      const c = t < 0.33 ? colorA : t < 0.66 ? colorB : colorC;
      colors[i * 3 + 0] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      sizes[i] = Math.random() * 2.8 + 0.6;
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    pGeo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const pMat = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
      depthWrite: false,
    });

    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // ── Central Glowing Sphere ────────────────────────────────────────────────
    const sphereGeo = new THREE.IcosahedronGeometry(3.5, 3);
    const sphereMat = new THREE.MeshPhongMaterial({
      color: 0x3730d6,
      emissive: 0x1a1460,
      specular: 0x8b85ff,
      shininess: 60,
      wireframe: false,
      transparent: true,
      opacity: 0.13,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    sphere.position.set(6, -1, 0);
    scene.add(sphere);

    // Wireframe overlay
    const wireGeo = new THREE.IcosahedronGeometry(3.6, 2);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x4f46ff,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const wire = new THREE.Mesh(wireGeo, wireMat);
    wire.position.copy(sphere.position);
    scene.add(wire);

    // Outer ring torus
    const torusGeo = new THREE.TorusGeometry(5.2, 0.04, 12, 80);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x4f46ff,
      transparent: true,
      opacity: 0.12,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.position.copy(sphere.position);
    torus.rotation.x = Math.PI / 3;
    scene.add(torus);

    const torus2 = new THREE.Mesh(
      new THREE.TorusGeometry(6.8, 0.025, 10, 90),
      new THREE.MeshBasicMaterial({
        color: 0x8b85ff,
        transparent: true,
        opacity: 0.07,
      })
    );
    torus2.position.copy(sphere.position);
    torus2.rotation.x = Math.PI / 5;
    torus2.rotation.y = Math.PI / 6;
    scene.add(torus2);

    // ── Lights ────────────────────────────────────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0x4f46ff, 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x8b85ff, 2.5, 30);
    pointLight.position.set(6, 4, 8);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x4f46ff, 1.5, 25);
    pointLight2.position.set(-8, -4, 5);
    scene.add(pointLight2);

    // ── Mouse Tracking ────────────────────────────────────────────────────────
    const mouse = { x: 0, y: 0 };
    const targetRotation = { x: 0, y: 0 };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    // ── Resize ────────────────────────────────────────────────────────────────
    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // ── Animation ─────────────────────────────────────────────────────────────
    let frame = 0;
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      frame++;

      if (!prefersReduced) {
        // Smooth mouse parallax on camera
        targetRotation.x += (mouse.y * 0.6 - targetRotation.x) * 0.04;
        targetRotation.y += (mouse.x * 0.8 - targetRotation.y) * 0.04;
        camera.position.x += (mouse.x * 1.5 - camera.position.x) * 0.025;
        camera.position.y += (-mouse.y * 1.0 - camera.position.y) * 0.025;

        // Particles slow drift rotation
        particles.rotation.y = t * 0.025;
        particles.rotation.x = t * 0.01;

        // Sphere breathe + rotate
        sphere.rotation.y = t * 0.12;
        sphere.rotation.x = Math.sin(t * 0.18) * 0.3;
        sphere.scale.setScalar(1 + Math.sin(t * 0.6) * 0.025);

        wire.rotation.y = -t * 0.08;
        wire.rotation.z = t * 0.04;
        wire.scale.copy(sphere.scale);

        // Torus orbit
        torus.rotation.z = t * 0.15;
        torus.rotation.y = t * 0.08;
        torus2.rotation.z = -t * 0.1;
        torus2.rotation.x = t * 0.06;

        // Light pulse
        pointLight.intensity = 2.5 + Math.sin(t * 0.9) * 0.6;
      }

      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    animate();

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      pGeo.dispose();
      pMat.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    />
  );
}
