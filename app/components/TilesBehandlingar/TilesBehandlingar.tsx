"use client";

import { Eye } from "lucide-react";
import Link from "next/link";

interface OperationCardProps {
  title: string;
  description: string;
  highlighted?: boolean;
}

interface Props {
  props: any;
  operations?: any;
}

export default function TilesBehandlingar({ props, operations }: Props) {
  return (
    <section className="bg-[#1D383F] py-16 px-4">
      <div className="max-w-[80%] mx-auto text-white">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-wider mb-2">
            {props.usp_title}
          </h2>
          <h1 className="text-4xl font-semibold text-white mb-4">
            {props.title}
          </h1>
          <p className="max-w-2xl mx-auto">{props.text}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {operations.stories.map((op: any) => (
            <div
              className={`p-10 rounded-lg text-center ${"bg-[#172D32]"}`}
              key={op.content._uid}
            >
              <Eye className="w-10 h-10 mb-2 text-teal-200 m-auto" />
              <h3 className="text-xl font-semibold mb-4 text-white">
                {op.name}
              </h3>
              <p className="mb-4 max-w-[80%] m-auto">
                {op.content.description
                  ? op.content.description
                  : " För dig under 40 år. Särskilt lämplig för dig med tunna hornhinnor."}
              </p>
              <Link
                href={`/${op.full_slug}`}
                className="hover:text-white p-0 underline underline-offset-8"
              >
                Läs mer
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="button">Se fler behandlingar</button>
        </div>
      </div>
    </section>
  );
}
