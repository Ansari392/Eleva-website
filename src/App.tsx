import Login from "@/Admin/pages/Login";
import Dashboard from "@/Admin/pages/Dashboard";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import Properties from "@/Admin/pages/Properties";
import AddProperty from "@/Admin/pages/AddProperty";
import EditProperty from "@/Admin/pages/EditProperty";
import ContactLeads from "@/Admin/pages/ContactLeads";
import Testimonials from "@/Admin/pages/Testimonials";
import AddTestimonial from "@/Admin/pages/AddTestimonial";
const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/properties" component={Properties} />
      <Route path="/properties/add">{() => <AddProperty />}</Route>
      <Route path="/properties/edit/:id" component={EditProperty} />
      <Route path="/leads" component={ContactLeads} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/testimonials/add" component={AddTestimonial} />
      <Route path="/admin" component={Login} />
      <Route path="/" component={Home} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;