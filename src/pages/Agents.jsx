import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import agents from "../data/agents";
import properties from "../data/properties";

function Agents() {
  return (
    <main className="min-h-screen bg-[#F8F7F3]">

      {/* Header */}
      <section className="bg-[#12372A] px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-wider text-[#D6A756]">
            Our team
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-5xl">
            Meet our property experts
          </h1>

          <p className="mt-4 max-w-2xl text-white/70">
            Connect with experienced property professionals who
            can help you find the right home or investment.
          </p>

        </div>
      </section>

      {/* Agents */}
      <section className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {agents.map((agent) => {

            // Get the actual properties belonging to this agent
            const agentProperties = properties.filter(
              (property) => property.agentId === agent.id
            );

            const initials = agent.name
              .split(" ")
              .map((name) => name[0])
              .join("")
              .slice(0, 2);

            return (
              <article
                key={agent.id}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >

                {/* Agent information */}
                <div className="p-6">

                  <div className="flex items-start justify-between">

                    {/* Avatar */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#12372A] text-lg font-bold text-white">
                      {initials}
                    </div>

                    {/* Real property count */}
                    <div className="flex items-center gap-1.5 rounded-full bg-[#F8F7F3] px-3 py-1.5 text-xs font-semibold text-[#12372A]">
                      <Building2 size={14} />

                      {agentProperties.length}{" "}
                      {agentProperties.length === 1
                        ? "listing"
                        : "listings"}
                    </div>

                  </div>

                  {/* Name */}
                  <h2 className="mt-5 text-xl font-bold text-[#12372A]">
                    {agent.name}
                  </h2>

                  <p className="mt-1 text-sm font-medium text-[#D6A756]">
                    {agent.role}
                  </p>

                  {/* Location */}
                  <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
                    <MapPin size={16} />
                    <span>{agent.location}</span>
                  </div>

                  {/* Contact */}
                  <div className="mt-4 space-y-2">

                    <a
                      href={`tel:${agent.phone}`}
                      className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-[#12372A]"
                    >
                      <Phone size={15} />
                      <span>{agent.phone}</span>
                    </a>

                    <a
                      href={`mailto:${agent.email}`}
                      className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-[#12372A]"
                    >
                      <Mail size={15} />
                      <span>{agent.email}</span>
                    </a>

                  </div>

                </div>

                {/* View profile */}
                <div className="border-t border-gray-100 px-6 py-4">

                  <Link
                    to={`/agents/${agent.id}`}
                    className="flex items-center justify-between text-sm font-semibold text-[#12372A] transition hover:text-[#D6A756]"
                  >
                    <span>View profile</span>

                    <ArrowRight size={18} />

                  </Link>

                </div>

              </article>
            );
          })}

        </div>

      </section>

    </main>
  );
}

export default Agents;