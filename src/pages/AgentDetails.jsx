import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import agents from "../data/agents";
import properties from "../data/properties";
import PropertyCard from "../components/home/PropertyCard";

function AgentDetails() {
  const { id } = useParams();

  const agent = agents.find(
    (agent) => agent.id === Number(id)
  );

  if (!agent) {
    return (
      <main className="min-h-screen bg-[#F8F7F3] px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-3xl font-bold text-[#12372A]">
            Agent not found
          </h1>

          <Link
            to="/agents"
            className="mt-6 inline-block rounded-xl bg-[#12372A] px-6 py-3 text-sm font-semibold text-white"
          >
            Back to agents
          </Link>
        </div>
      </main>
    );
  }

  const agentProperties = properties.filter(
    (property) => property.agentId === agent.id
  );

  return (
    <main className="min-h-screen bg-[#F8F7F3]">
      {/* Header */}
      <section className="bg-[#12372A] px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/agents"
            className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to agents
          </Link>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
            {/* Avatar */}
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-white text-2xl font-bold text-[#12372A]">
              {agent.name
                .split(" ")
                .map((name) => name[0])
                .join("")}
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#D6A756]">
                Property expert
              </p>

              <h1 className="mt-2 text-3xl font-bold md:text-5xl">
                {agent.name}
              </h1>

              <p className="mt-2 text-white/70">
                {agent.role}
              </p>

              <div className="mt-3 flex items-center gap-2 text-sm text-white/60">
                <MapPin size={16} />
                {agent.location}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent info */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* Properties */}
          <div>
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#D6A756]">
                Listings
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#12372A]">
                Properties by {agent.name.split(" ")[0]}
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                {agentProperties.length} properties currently listed.
              </p>
            </div>

            {agentProperties.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {agentProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center">
                <p className="text-gray-500">
                  No properties currently listed by this agent.
                </p>
              </div>
            )}
          </div>

          {/* Contact card */}
          <aside>
            <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#12372A]">
                Contact {agent.name.split(" ")[0]}
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Interested in a property? Get in touch directly with
                this agent.
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href={`tel:${agent.phone}`}
                  className="flex items-center gap-3 text-sm text-gray-600 transition hover:text-[#12372A]"
                >
                  <Phone size={18} />
                  {agent.phone}
                </a>

                <a
                  href={`mailto:${agent.email}`}
                  className="flex items-center gap-3 text-sm text-gray-600 transition hover:text-[#12372A]"
                >
                  <Mail size={18} />
                  {agent.email}
                </a>
              </div>

              <button
                className="mt-7 w-full rounded-xl bg-[#12372A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#315C48]"
                onClick={() =>
                  (window.location.href = `mailto:${agent.email}`)
                }
              >
                Send email
              </button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default AgentDetails;