// Core dependencies
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import React, { Suspense, lazy } from "react";

// State management
import { queryClient } from "./lib/queryClient";

// Layout components
import Layout from "@/components/Layout";
import { Toaster } from "@/components/ui/toaster";
import TerminalStylePreloader from "@/components/ui/TerminalStylePreloader";
import { ScrollToTop } from "@/components/ScrollToTop";

// Page components (Lazy loaded)
const Home = lazy(() => import("@/pages/Home"));
const Experience = lazy(() => import("@/pages/Experience"));
const Projects = lazy(() => import("@/pages/Projects"));
const Resume = lazy(() => import("@/pages/Resume"));
const Blogs = lazy(() => import("@/pages/Blogs"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/not-found"));

/**
 * Application Routes Configuration
 * 
 * Centralizes all route definitions for the application.
 * Routes are matched in order, with the NotFound route catching any unmatched paths.
 * 
 * Route Structure:
 * - "/" -> Home page
 * - "/experience" -> Professional experience
 * - "/projects" -> Portfolio projects
 * - "/resume" -> Resume/CV
 * - "/blogs" -> Blog posts
 * - "/contact" -> Contact form
 * - "*" -> NotFound (404) page
 */
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/experience" component={Experience} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

/**
 * Root Application Component
 * 
 * Provides the core application structure and configuration:
 * 1. Global state management via QueryClientProvider
 * 2. Automatic scroll restoration with ScrollToTop
 * 3. Initial loading animation via TerminalStylePreloader
 * 4. Consistent layout wrapping via Layout component
 * 5. Global notification system via Toaster
 * 
 * Component Hierarchy:
 * - QueryClientProvider (Global state)
 *   ├─ ScrollToTop (Navigation behavior)
 *   ├─ TerminalStylePreloader (Loading UI)
 *   ├─ Layout (Page structure)
 *   │  └─ Router (Page routing wrapped in Suspense)
 *   └─ Toaster (Notifications)
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <TerminalStylePreloader />
      <Layout>
        <Suspense fallback={<div className="flex justify-center items-center h-screen"><p>Loading page...</p></div>}>
          <Router />
        </Suspense>
      </Layout>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
