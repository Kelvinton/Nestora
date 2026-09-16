import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Building2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import agents from "../data/agents";
import properties from "../data/properties";
import PropertyCard from "../components/home/PropertyCard";

function AgentDetails() {
  const { id } = useParams();

  const agent = agents.find(
    (agent) => agent.id === Number(id)
  );

  // Find properties belonging to this agent
  const agentProperties = properties.filter(
    (property) => property.agentId === Number(id)
  );

  // Agent not found
  if (!agent) {
    return (
      <main className="min-h-screen bg-[#F8F7F3] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">

          <h1 className="text-3xl font-bold text-[#12372A]">
            Agent not found
          </h1>

          <p className="mt-3 text-gray-500">
            The agent you're looking for doesn't exist.
          </p>

          <Link
            to="/agents"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#12372A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#315C48]"
          >
            <ArrowLeft size={18} />
            Back to agents
          </Link>

        </div>
      </main>
    );
  }

  const initials = agent.name
    .split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-[#F8F7F3]">

      {/* Agent Header */}
      <section className="bg-[#12372A] px-6 py-12 text-white">

        <div className="mx-auto max-w-7xl">

          {/* Back */}
          <Link
            to="/agents"
            className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to agents
          </Link>

          {/* Profile */}
          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center">

            {/* Avatar */}
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-white/10 text-2xl font-bold ring-1 ring-white/20">
              {initials}
            </div>

            <div>

              <p className="text-sm font-semibold uppercase tracking-wider text-[#D6A756]">
                Property expert
              </p>

              <h1 className="mt-1 text-3xl font-bold md:text-4xl">
                {agent.name}
              </h1>

              <p className="mt-2 text-white/70">
                {agent.role}
              </p>

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/70">

                <span className="flex items-center gap-2">
                  <MapPin size={16} />
                  {agent.location}
                </span>

                <span className="flex items-center gap-2">
                  <Building2 size={16} />
                  {agentProperties.length} listed properties
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">

          {/* Contact Card */}
          <aside>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

              <h2 className="text-lg font-bold text-[#12372A]">
                Contact {agent.name.split(" ")[0]}
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Have questions about a property? Get in touch
                directly with this agent.
              </p>

              <div className="mt-6 space-y-3">

                <a
                  href={`tel:${agent.phone}`}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-[#12372A] transition hover:border-[#12372A]"
                >
                  <Phone size={17} />
                  Call agent
                </a>

                <a
                  href={`mailto:${agent.email}`}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-[#12372A] transition hover:border-[#12372A]"
                >
                  <Mail size={17} />
                  Send email
                </a>

              </div>

            </div>

          </aside>

          {/* Properties */}
          <div>

            <div className="mb-6">

              <p className="text-sm font-semibold uppercase tracking-wider text-[#D6A756]">
                Listings
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#12372A] md:text-3xl">
                Properties by {agent.name.split(" ")[0]}
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Explore properties currently listed by this agent.
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

              <div className="rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center">

                <Building2
                  size={40}
                  strokeWidth={1.5}
                  className="mx-auto text-gray-300"
                />

                <h3 className="mt-4 text-lg font-semibold text-[#12372A]">
                  No properties listed
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  This agent currently has no properties available.
                </p>

              </div>

            )}

          </div>

        </div>

      </section>

    </main>
  );
}

export default AgentDetails;