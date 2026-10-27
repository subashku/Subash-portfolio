import { useEffect, useRef } from "react";
import * as THREE from "three";

function Background3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 16);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      container.appendChild(renderer.domElement);
    } catch {
      return;
    }

    // 2. Refined Studio Lighting (Restrained Cobalt & Warm Ivory)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff8ee, 1.4);
    keyLight.position.set(8, 12, 10);
    scene.add(keyLight);

    const cobaltRimLight = new THREE.DirectionalLight(0x2563eb, 2.2);
    cobaltRimLight.position.set(-10, -6, 6);
    scene.add(cobaltRimLight);

    const softFillLight = new THREE.PointLight(0x38bdf8, 1.0, 30);
    softFillLight.position.set(6, -8, 8);
    scene.add(softFillLight);

    // 3. One Distinctive Architectural 3D Object (Sculpted Torus Knot)
    const group = new THREE.Group();
    scene.add(group);

    // Position in right-center to create generous negative space on left for typography
    group.position.set(4.2, 0.5, 0);

    const sculptureGeometry = new THREE.TorusKnotGeometry(2.0, 0.55, 128, 32, 2, 3);
    const sculptureMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x111827,
      roughness: 0.35,
      metalness: 0.2,
      clearcoat: 0.6,
      clearcoatRoughness: 0.15,
      wireframe: false,
    });
    const sculptureMesh = new THREE.Mesh(sculptureGeometry, sculptureMaterial);
    group.add(sculptureMesh);

    // Outer subtle cobalt wireframe contour establishing depth
    const wireframeGeo = new THREE.TorusKnotGeometry(2.05, 0.56, 48, 16, 2, 3);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeo, wireframeMat);
    group.add(wireframeMesh);

    // Restrained, subtle particle field (minimalist floating stars)
    const particleCount = 45;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 35;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x2563eb,
      size: 0.08,
      transparent: true,
      opacity: 0.35,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Mouse Parallax & Scroll Interpolation
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let scrollProgress = 0;
    let currentScrollProgress = 0;

    const handleMouseMove = (e) => {
      if (prefersReducedMotion) return;
      const halfWidth = window.innerWidth / 2;
      const halfHeight = window.innerHeight / 2;
      targetMouseX = (e.clientX - halfWidth) / halfWidth;
      targetMouseY = (e.clientY - halfHeight) / halfHeight;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        scrollProgress = window.scrollY / totalScroll;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!prefersReducedMotion) {
        const elapsedTime = clock.getElapsedTime();

        // Smooth damping
        currentMouseX += (targetMouseX - currentMouseX) * 0.03;
        currentMouseY += (targetMouseY - currentMouseY) * 0.03;
        currentScrollProgress += (scrollProgress - currentScrollProgress) * 0.04;

        // Controlled 3D sculpture movement:
        // In Hero (0.0): Visible on right with gentle float
        // As scrolling through About & Projects: Moves back into perspective depth and fades into background
        group.rotation.x = elapsedTime * 0.12 + currentMouseY * 0.3;
        group.rotation.y = elapsedTime * 0.18 + currentMouseX * 0.4;
        group.position.y = 0.5 + Math.sin(elapsedTime * 0.6) * 0.2 - currentScrollProgress * 12;
        group.position.z = -currentScrollProgress * 8;

        // Fade opacity subtly in deeper sections so reading is never obstructed
        sculptureMaterial.opacity = Math.max(0.2, 1.0 - currentScrollProgress * 0.7);
        wireframeMat.opacity = Math.max(0.08, 0.25 - currentScrollProgress * 0.2);

        // Camera gentle parallax
        camera.position.x = currentMouseX * 0.8;
        camera.position.y = -currentMouseY * 0.8;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      sculptureGeometry.dispose();
      wireframeGeo.dispose();
      sculptureMaterial.dispose();
      wireframeMat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="background-3d-canvas"
      aria-hidden="true"
    />
  );
}

export default Background3D;
