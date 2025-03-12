import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Layout from "@/components/Layout";
import Preloader from "@/components/Preloader";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Resume from "@/pages/Resume";
import Blogs from "@/pages/Blogs";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

/**
 * Router Component
 * 
 * Defines all the main routes for the application.
 * Each route maps a URL path to a specific page component.
 * The last route (without a path) catches any undefined routes and shows the NotFound page.
 */
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

/**
 * Main App Component
 * 
 * This is the top-level component that:
 * 1. Sets up the QueryClientProvider for data fetching
 * 2. Includes the Preloader for initial loading animation
 * 3. Wraps all content in the Layout component (which contains Navbar, Footer, etc.)
 * 4. Adds the Router for page navigation
 * 5. Includes the Toaster for showing notifications
 * 
 * To add a new page:
 * 1. Create a new component in the pages folder
 * 2. Import it at the top of this file
 * 3. Add a new Route in the Router component above
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Preloader />
      <Layout>
        <Router />
      </Layout>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
