import { Layout } from "@/components/Layout";
import { Toaster } from "@/components/ui/sonner";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

import { Skeleton } from "@/components/ui/skeleton";
// Lazy page imports
import { Suspense, lazy } from "react";

const HomePage = lazy(() =>
  import("@/pages/Home").then((m) => ({ default: m.HomePage })),
);
const AboutPage = lazy(() =>
  import("@/pages/About").then((m) => ({ default: m.AboutPage })),
);
const AcademicsPage = lazy(() =>
  import("@/pages/Academics").then((m) => ({ default: m.AcademicsPage })),
);
const NewsPage = lazy(() =>
  import("@/pages/News").then((m) => ({ default: m.NewsPage })),
);
const StaffPage = lazy(() =>
  import("@/pages/Staff").then((m) => ({ default: m.StaffPage })),
);
const ContactPage = lazy(() =>
  import("@/pages/Contact").then((m) => ({ default: m.ContactPage })),
);

function PageLoader() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-4">
      <Skeleton className="h-12 w-1/3" />
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}

// Routes
const rootRoute = createRootRoute({
  component: () => <Layout />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <HomePage />
    </Suspense>
  ),
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <AboutPage />
    </Suspense>
  ),
});

const academicsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/academics",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <AcademicsPage />
    </Suspense>
  ),
});

const newsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/news",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <NewsPage />
    </Suspense>
  ),
});

const staffRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/staff",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <StaffPage />
    </Suspense>
  ),
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <ContactPage />
    </Suspense>
  ),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  academicsRoute,
  newsRoute,
  staffRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster richColors position="top-right" />
    </>
  );
}
