import { curriculum, curriculumNote } from '@/content/curriculum';

const Curriculum = () => (
  <section id="courses" className="scroll-mt-24 bg-background py-20 lg:py-28">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow mb-4">Coverage</p>
        <h2 className="rule-gold rule-gold-center mb-6 text-3xl font-semibold text-navy lg:text-[2.6rem]">
          Courses We Teach
        </h2>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          {curriculumNote}
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
        {curriculum.map((group) => (
          <div key={group.group} className="bg-card p-8">
            <h3 className="eyebrow mb-5">{group.group}</h3>
            <ul className="space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-navy">
                  <span
                    aria-hidden="true"
                    className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-gold"
                  />
                  <span>{item}</span>
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
