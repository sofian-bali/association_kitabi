"use client";

import { useEffect, useCallback, useState } from "react";
import {
  ArrowDown,
  BookOpen,
  GraduationCap,
  Library,
  BookMarked,
  Calendar,
  Users2,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Types for better code organization
interface ProjectCard {
  title: string;
  description: string;
  image: string;
}

interface MissionCard {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface Achievement {
  icon: JSX.Element;
  number: string;
  label: string;
}

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Optimized intersection observer setup
  const setupIntersectionObserver = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 } // Improved threshold for better performance
    );

    const hiddenElements = document.querySelectorAll(".hidden-animate");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setupIntersectionObserver();
  }, [setupIntersectionObserver]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  // Data objects for better maintainability
  const missionCards: MissionCard[] = [
    {
      icon: <BookMarked className="h-12 w-12 text-primary" />,
      title: "Soutien Financier",
      description:
        "Fournir une aide financière aux étudiants à travers la Tunisie",
    },
    {
      icon: <Library className="h-12 w-12 text-primary" />,
      title: "Soutien A Tous",
      description:
        "Apporter des ressources éducatives aux communautés éloignées",
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-primary" />,
      title: "Soutien Scolaire",
      description:
        "Offrir du tutorat et une assistance académique aux étudiants dans le besoin",
    },
  ];

  const projectCards: ProjectCard[] = [
    {
      title: "Aide à la rentrée scolaire",
      description:
        "Bibliothèques mobiles apportant des livres aux communautés rurales",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      title: "Programme Parascolaire",
      description:
        "Soutien aux élèves avec les devoirs et l'apprentissage supplémentaire",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
    },
    {
      title: "Entraide et Collaboration",
      description:
        "Promouvoir l'entraide aux étudiants pour en faire les savants de demain ",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1764&q=80",
    },
  ];

  const achievements: Achievement[] = [
    {
      icon: <Users2 className="h-8 w-8" />,
      number: "5,000+",
      label: "Élèves Aidés",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      number: "10,000+",
      label: "Livres Distribués",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      number: "500+",
      label: "Événements Organisés",
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      number: "50+",
      label: "Prix Reçus",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-[hsl(var(--background)/0.85)] backdrop-blur-xl z-50 shadow-md border-b border-[hsl(var(--border))] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-[hsl(var(--primary))]" />
              <span className="ml-2 text-2xl font-bold tracking-tight text-[hsl(var(--primary))] dark:text-[hsl(var(--secondary))]">
                Association Kitabi
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] px-4 py-2 rounded-lg text-base font-medium transition-all duration-300"
                >
                  Accueil
                </a>
                <a
                  href="#about"
                  className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] px-4 py-2 rounded-lg text-base font-medium transition-all duration-300"
                >
                  À Propos
                </a>
                <a
                  href="#projects"
                  className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] px-4 py-2 rounded-lg text-base font-medium transition-all duration-300"
                >
                  Projets
                </a>
                <a
                  href="#contact"
                  className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] px-4 py-2 rounded-lg text-base font-medium transition-all duration-300"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => {
                  if (isMobileMenuOpen) {
                    setIsClosing(true);
                    setTimeout(() => {
                      setIsMobileMenuOpen(false);
                      setIsClosing(false);
                    }, 400);
                  } else {
                    setIsMobileMenuOpen(true);
                  }
                }}
                className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && !isClosing && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-xs z-30 md:hidden transition-opacity duration-500"
            onClick={() => {
              setIsClosing(true);
              setTimeout(() => {
                setIsMobileMenuOpen(false);
                setIsClosing(false);
              }, 400);
            }}
          />
        )}
        <div
          className={`md:hidden absolute top-16 left-0 w-full bg-[hsl(var(--background))] shadow-md border-t border-[hsl(var(--border))] transition-all duration-500 ease-in-out overflow-hidden z-40 ${
            isMobileMenuOpen && !isClosing
              ? "max-h-96 animate-fade-down"
              : isClosing
              ? "max-h-0 animate-fade-up"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-2 px-6 py-4">
              <a
                href="#"
                onClick={() => {
                  setIsClosing(true);
                  setTimeout(() => {
                    setIsMobileMenuOpen(false);
                    setIsClosing(false);
                  }, 400);
                }}
                className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] block px-4 py-2 rounded-lg text-base font-medium transition-all duration-300"
              >
                Accueil
              </a>
              <a
                href="#about"
                onClick={() => {
                  setIsClosing(true);
                  setTimeout(() => {
                    setIsMobileMenuOpen(false);
                    setIsClosing(false);
                  }, 400);
                }}
                className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] block px-4 py-2 rounded-lg text-base font-medium transition-all duration-300"
              >
                À Propos
              </a>
              <a
                href="#projects"
                onClick={() => {
                  setIsClosing(true);
                  setTimeout(() => {
                    setIsMobileMenuOpen(false);
                    setIsClosing(false);
                  }, 400);
                }}
                className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] block px-4 py-2 rounded-lg text-base font-medium transition-all duration-300"
              >
                Projets
              </a>
              <a
                href="#contact"
                onClick={() => {
                  setIsClosing(true);
                  setTimeout(() => {
                    setIsMobileMenuOpen(false);
                    setIsClosing(false);
                  }, 400);
                }}
                className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] block px-4 py-2 rounded-lg text-base font-medium transition-all duration-300"
              >
                Contact
              </a>
          </div>
        </div>
      </nav>

      <style jsx global>{`
        @keyframes fade-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
 
        .animate-fade-down {
          animation: fade-down 0.4s ease-in-out both;
          will-change: opacity, transform;
        }

        @keyframes fade-up {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        .animate-fade-up {
          animation: fade-up 0.4s ease-in-out forwards;
          will-change: opacity, transform;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80" 
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-purple-900/80" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            L'Éducation pour Tous
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
            Construire des ponts vers le savoir et créer des opportunités pour
            chaque étudiant en Tunisie
          </p>
          <Button
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-8 py-6 rounded-full text-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl"          >
            Découvrir Nos Initiatives
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 hidden-animate">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Notre Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous nous engageons à rendre l'éducation accessible à chaque
              étudiant en Tunisie, en fournissant une aide financière règulière.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionCards.map((item, index) => (
              <div
                key={index}
                className="hidden-animate flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-50 hover:border-indigo-100 transform hover:-translate-y-2"
              >
                <div className="p-3 bg-indigo-50 rounded-lg mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 hidden-animate">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Nos Initiatives
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez nos programmes qui rendent l'éducation accessible à
              travers la Tunisie
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectCards.map((project, index) => (
              <Card
                key={index}
                className={cn(
                  "hidden-animate overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group",
                  "transform perspective-1000 border-indigo-50 hover:border-indigo-100"
                )}
              >
                <div
                  className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    En Savoir Plus
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 hidden-animate">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Notre Impact
            </h2>
            <p className="text-xl text-gray-600">
              Des résultats qui font la différence
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="hidden-animate text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-100 text-indigo-600">
                  {achievement.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {achievement.number}
                </h3>
                <p className="text-gray-600">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-r from-indigo-800 to-purple-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center hidden-animate">
            <h2 className="text-4xl font-bold mb-4">Rejoignez Notre Mission</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ensemble, nous pouvons créer un avenir meilleur à travers
              l'éducation et l'ambition
            </p>
            <Button className="bg-white text-indigo-900 hover:bg-gray-100 px-8 py-6 rounded-full text-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl font-semibold transform hover:-translate-y-1">
              Je contribue !
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <BookOpen className="h-8 w-8 text-indigo-400" />
                <span className="ml-2 text-xl font-semibold">
                  Association Kitabi
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Soutenir la jeunesse tunisienne par l'éducation, l'ambition et
                l'engagement communautaire.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Contactez-nous</h3>
              <p className="text-gray-400 mb-2">Email: contact@kitabi.org</p>
              <p className="text-gray-400 mb-2">Téléphone: +216 123 456 789</p>
              <p className="text-gray-400">Adresse: Tunis, Tunisie</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Suivez-nous</h3>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-gray-400">
            <p>&copy; 2025 Association Kitabi. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
