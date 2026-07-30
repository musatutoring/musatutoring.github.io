import { Button } from '@/components/ui/button';
import logo from '@/assets/logo-cutout.png';
import { site } from '@/content/site';

const NotFound = () => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-navy px-6 text-center">
    <img src={logo} alt="" className="mb-8 h-16 w-16 object-contain" aria-hidden="true" />
    <p className="eyebrow eyebrow-on-dark mb-4">Page Not Found</p>
    <h1 className="mb-5 text-3xl font-semibold text-ivory sm:text-4xl">
      We Could Not Find That Page
    </h1>
    <p className="mb-9 max-w-md leading-relaxed text-ivory/70">
      The page you were looking for may have moved. Everything about the Delta Program is
      on our home page.
    </p>
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button asChild variant="gold" size="lg">
        <a href="/">Return to the Home Page</a>
      </Button>
      <Button asChild variant="onDark" size="lg">
        <a href={`tel:${site.phoneLink}`}>Call {site.phone}</a>
      </Button>
    </div>
  </div>
);

export default NotFound;
