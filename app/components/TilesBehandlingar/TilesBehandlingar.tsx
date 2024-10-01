import { Eye } from 'lucide-react'

interface OperationCardProps {
  title: string
  description: string
  highlighted?: boolean
}

const OperationCard = ({
  title,
  description,
  highlighted = false,
}: OperationCardProps) => (
  <div
    className={`p-6 rounded-lg ${highlighted ? 'bg-teal-600' : 'bg-teal-800'}`}
  >
    <Eye className="w-8 h-8 mb-4 text-teal-200" />
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-teal-200 mb-4">{description}</p>
    <button className="text-teal-200 hover:text-white p-0">Läs mer</button>
  </div>
)

export default function TilesBehandlingar() {
  const operations = [
    {
      title: 'PRK - LASEK',
      description:
        'För dig under 40 år. Särskilt lämplig för dig med tunna hornhinnor.',
      highlighted: true,
    },
    {
      title: 'PRK - LASEK',
      description:
        'För dig under 40 år. Särskilt lämplig för dig med tunna hornhinnor.',
    },
    {
      title: 'PRK - LASEK',
      description:
        'För dig under 40 år. Särskilt lämplig för dig med tunna hornhinnor.',
    },
    {
      title: 'PRK - LASEK',
      description:
        'För dig under 40 år. Särskilt lämplig för dig med tunna hornhinnor.',
    },
    {
      title: 'PRK - LASEK',
      description:
        'För dig under 40 år. Särskilt lämplig för dig med tunna hornhinnor.',
    },
    {
      title: 'PRK - LASEK',
      description:
        'För dig under 40 år. Särskilt lämplig för dig med tunna hornhinnor.',
    },
  ]

  return (
    <section className="bg-teal-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-teal-200 text-sm uppercase tracking-wider mb-2">
            OPERATIONER & BEHANDLINGAR
          </h2>
          <h1 className="text-4xl font-bold text-white mb-4">
            Våra ögonoperationer
          </h1>
          <p className="text-teal-200 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {operations.map((op, index) => (
            <OperationCard key={index} {...op} />
          ))}
        </div>
        <div className="text-center">
          <button className="text-teal-200 border-teal-200 hover:bg-teal-800">
            Se fler behandlingar
          </button>
        </div>
      </div>
    </section>
  )
}
