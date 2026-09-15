import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import agents from "../data/agents";

function Agents() {
  return (
    <main className="min-h-screen bg-[#F8F7F3]">
      {/* Hero */}
      <section className="bg-[#12372A] px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#D6A756]">
            Our experts
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-5xl">
            Meet our property experts
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-white/70">
            Connect with trusted real estate professionals who can
            help you find the right property.
          </p>
        </div>
      </section>

      {/* Agents */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#12372A] text-xl font-bold text-white">
                  {agent.name
                    .split(" ")
                    .map((name) => name[0])
                    .join("")}
                </div>

                <div>
                  <h2 className="text-lg font-bold text-[#12372A]">
                    {agent.name}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    {agent.role}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                <MapPin size={16} />
                {agent.location}
              </div>

              {/* Properties */}
              <div className="mt-5 rounded-xl bg-[#F8F7F3] px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Listed properties
                </p>

                <p className="mt-1 text-lg font-bold text-[#12372A]">
                  {agent.properties}
                </p>
              </div>

              {/* View profile */}
              <Link
                to={`/agents/${agent.id}`}
                className="mt-6 flex items-center justify-between rounded-xl border border-[#12372A] px-4 py-3 text-sm font-semibold text-[#12372A] transition hover:bg-[#12372A] hover:text-white"
              >
                View profile
                <ArrowRight size={17} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Agents;