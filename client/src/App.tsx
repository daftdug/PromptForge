import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "@/pages/landing";
import Prompts from "@/pages/prompts";
import Tags from "@/pages/tags";
import Leaderboard from "@/pages/leaderboard";
import Courses from "@/pages/courses";
import Pricing from "@/pages/pricing";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/prompts" component={Prompts} />
      <Route path="/tags" component={Tags} />
      <Route path="/leaderboard" component={Leaderboard} />
      <Route path="/courses" component={Courses} />
      <Route path="/pricing" component={Pricing} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
