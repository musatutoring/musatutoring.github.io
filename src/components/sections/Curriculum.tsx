import { curriculum, curriculumNote } from '@/content/curriculum';

const Curriculum = () => (
  <section id="courses" className="scroll-mt-20 bg-muted/40 py-16 lg:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
          Courses we teach
        </h2>
        <p className="text-lg text-muted-foreground">{curriculumNote}</p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
        {curriculum.map((group) => (
          <div
            key={group.group}
            className="rounded-2xl border border-border/50 bg-card p-6 shadow-card"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary-strong">
              {group.group}
            </h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-secondary">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Curriculum;
