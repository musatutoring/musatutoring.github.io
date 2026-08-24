import { tutors, teamNote } from '@/content/tutors';

const Team = () => (
  <section id="about" className="scroll-mt-24 bg-muted/45 py-20 lg:py-28">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow mb-4">Who You Are Working With</p>
        <h2 className="rule-gold rule-gold-center mb-6 text-3xl font-semibold text-navy lg:text-[2.6rem]">
          The People Behind the Program
        </h2>
      </div>

      <div className="mx-auto mt-16 max-w-3xl">
        {tutors.map((tutor) => (
          <div
            key={tutor.name}
            className="flex flex-col gap-8 rounded-xl border border-border bg-card p-9 shadow-card sm:flex-row sm:p-11"
          >
            {tutor.photo ? (
              <img
                src={tutor.photo}
                alt={tutor.name}
                className="h-24 w-24 shrink-0 rounded-full object-cover"
              />
            ) : (
              <div
                aria-hidden="true"
                className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 font-serif text-3xl font-semibold text-gold-deep"
              >
                {tutor.initials}
              </div>
            )}

            <div>
              <h3 className="text-2xl font-semibold text-navy">{tutor.name}</h3>
              <p className="eyebrow mt-1.5">{tutor.role}</p>
              <p className="mt-5 leading-relaxed text-muted-foreground">{tutor.summary}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {tutor.focus.map((f) => (
                  <li
                    key={f}
                    className="rounded-full border border-border bg-muted/60 px-3.5 py-1.5 text-xs font-medium text-navy"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <p className="mx-auto mt-10 max-w-2xl text-center leading-relaxed text-muted-foreground">
          {teamNote}
        </p>
      </div>
    </div>
  </section>
);

export default Team;
